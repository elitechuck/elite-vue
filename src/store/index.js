import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "@/store/modules/AuthModule";
import CrewModule from "@/store/modules/CrewModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    AuthModule,
    CrewModule,
  },
});
