import { createStore, Store } from "vuex";
import { ref, inject } from "vue";

export default createStore({
  state: {
    userInfo: ref({}),
    topPlayed: ref([]),
  },

  mutations: {
    SET_USER(state, payload) {
      state.userInfo = payload;
    },
    SET_TOP_PLAYED(state, payload) {
      state.topPlayed = payload;
    },
  },

  actions: {
    async getUserInfo({ commit }) {
      const $axios = inject("useAxios");
      const { data } = await $axios.get("/me");
      commit("SET_USER", data);
    },

    async getTopPlayed({ commit }) {
      const $axios = inject("useAxios");
      const { data: response } = await $axios.get("/me/top/tracks");
      const topPlayed = response.items.slice(-6);
      commit("SET_TOP_PLAYED", topPlayed);
    },
  },
  modules: {},
});
