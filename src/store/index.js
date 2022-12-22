import { createStore, Store } from 'vuex'
import { ref, inject } from 'vue'

export default createStore({
  state: {
    userInfo: ref({})
  },
  mutations: {
    SET_USER(state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {
    async getUserInfo({ commit }) {
      const $axios = inject("useAxios");
      const { data } = await $axios.get("/me");
      commit("SET_USER", data);
    },
  },
  modules: {
  }
})
