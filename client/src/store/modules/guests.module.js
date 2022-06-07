import ApiService from "../../services/ApiService";
import {
  DELETE_GUEST,
  FETCH_GUESTS,
  FETCH_GUEST,
  FILE_UPLOAD,
  INSERT_GUEST,
  UPDATE_GUEST
} from "../actions.type";
import { SET_GUESTS, SET_PATH_FILE } from "../mutations.type";
import store from "@/store";

const state = {
  guests: [],
  guestsActive: [],
  guestsCount: 0,
  pathFile: ""
};

const getters = {
  guests(state) {
    return state.guests;
  },
  guestsCount(state) {
    return state.guestsCount;
  }
};

const actions = {
  [DELETE_GUEST]({ commit }, id) {
    return ApiService.delete("guests", id)
      .then(({ data }) => {
        commit(SET_GUESTS, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [FETCH_GUESTS]({ commit }) {
    return ApiService.get("guests", "", {
      Authorization: store.getters.token
    })
      .then(({ data }) => {
        commit(SET_GUESTS, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [FETCH_GUEST](context, id) {
    return ApiService.get(`guests/${id}`);
  },
  [FILE_UPLOAD](context, file) {
    return new Promise(resolve => {
      ApiService.post("guests/upload-file", file, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(({ data }) => {
          context.commit(SET_PATH_FILE, data);
          resolve(data);
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  },
  [INSERT_GUEST](context, guest) {
    return new Promise(resolve => {
      ApiService.post("guests/create", guest);
      resolve();
    });
  },
  [UPDATE_GUEST](context, guest) {
    return new Promise(resolve => {
      ApiService.update("guests", guest.userId, guest);
      resolve();
    });
  }
};

const mutations = {
  [SET_GUESTS](state, guests) {
    state.guests = guests;
    state.guestsActive = guests.filter(item => item.active);
  },
  [SET_PATH_FILE](state, pathFile) {
    state.pathFile = pathFile;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
