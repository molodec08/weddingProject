import ApiService from "../../services/ApiService";
import JwtService from "../../services/jwt.service";
import { LOGIN, LOGOUT, UPDATE_USER } from "../actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "../mutations.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
  token: JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  token(state) {
    return state.token;
  }
};

const actions = {
  [LOGIN](context, form) {
    return new Promise(resolve => {
      ApiService.post("auth/login", {
        email: form.form.email,
        password: form.form.password
      })
        .then(({ data }) => {
          console.log(data);
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.message);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data.user);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user.userId;
    state.errors = {};
    JwtService.saveToken(user.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
