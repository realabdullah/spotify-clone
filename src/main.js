import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createPinia } from "pinia";
import axiosPlugin from "./axios-plugin";
import "./assets/css/main.css";

const pinia = createPinia();
createApp(App).use(router).use(pinia).use(axiosPlugin).mount("#app");
