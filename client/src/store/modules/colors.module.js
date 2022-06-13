import ApiService from "../../services/ApiService";
import { FETCH_COLORS, UPDATE_COLORS } from "../actions.type";
import { SET_COLORS } from "../mutations.type";
import store from "@/store";

const state = {
  header: "",
  color1: "",
  color2: "",
  color3: "",
  color4: "",
  color5: "",
  color6: "",
  color7: "",
  color8: ""
};

const getters = {
  colorsData(state) {
    return state.colorsData;
  }
};

const actions = {
  [UPDATE_COLORS](context, data) {
    return new Promise(resolve => {
      ApiService.update("/color-editor/update", data.id, data);
      resolve();
    });
  },
  [FETCH_COLORS](context) {
    return new Promise(resolve => {
      ApiService.get("/color-editor/colors", "", {
        Authorization: store.getters.token
      })
        .then(({ data }) => {
          context.commit(SET_COLORS, data);
          resolve(data);
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  }
};

const mutations = {
  [SET_COLORS](state, data) {
    state.header = data.header;
    state.color1 = data.color1;
    state.color2 = data.color2;
    state.color3 = data.color3;
    state.color4 = data.color4;
    state.color5 = data.color5;
    state.color6 = data.color6;
    state.color7 = data.color7;
    state.color8 = data.color8;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
