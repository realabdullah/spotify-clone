import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axiosPlugin from "./axios-plugin";
import "./assets/css/main.css";

createApp(App).use(store).use(router).use(axiosPlugin).mount("#app");
