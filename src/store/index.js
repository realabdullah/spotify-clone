import { createStore } from "vuex";

export default createStore({
    state: {
        currentBackgroundColor: "#0000001f",
    },

    mutations: {
        setCurrentBackgroundColor(state, color) {
            state.currentBackgroundColor = color;
        }
    },

    actions: {},
    modules: {},
});
