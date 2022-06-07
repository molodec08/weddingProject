import ApiService from "../../services/ApiService";
import {
  FETCH_DESCRIPTION,
  FETCH_DESCRIPTIONS,
  UPDATE_DESCRIPTION
} from "../actions.type";
import { SET_DESCRIPTION } from "../mutations.type";
import store from "@/store";

const state = {
  header: "",
  desc: "",
  date: ""
};

const getters = {
  desc(state) {
    return state.desc;
  }
};

const actions = {
  [UPDATE_DESCRIPTION](context, data) {
    return new Promise(resolve => {
      ApiService.post("/description-event/create", data)
        .then(data => {
          context.commit(SET_DESCRIPTION, data.data);
          resolve(data);
        })
        .catch(error => {
          resolve(error.response);
          throw new Error(error);
        });
    });
  },
  [FETCH_DESCRIPTION](context) {
    return new Promise(resolve => {
      ApiService.get("/description-event/last-desc", "", {
        Authorization: store.getters.token
      })
        .then(({ data }) => {
          context.commit(SET_DESCRIPTION, data);
          resolve(data);
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  },
  [FETCH_DESCRIPTIONS](context) {
    return new Promise(resolve => {
      ApiService.get("/description-event/all-revision", "", {
        Authorization: store.getters.token
      })
        .then(({ data }) => {
          context.commit(SET_DESCRIPTION, data);
          resolve(data);
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  }
};

const mutations = {
  [SET_DESCRIPTION](state, data) {
    state.header = data.header;
    state.desc = data.desc;
    state.date = data.date;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
