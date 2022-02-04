import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValue: "Change my value",
  },
  mutations: {
    inputChanged(state, message) {
      state.inputValue = message;
    },
  },
  actions: {
    
  },
  modules: {

  },
  getters: {
    getInputValue(state) {
      return state.inputValue;
    },
  },
});
