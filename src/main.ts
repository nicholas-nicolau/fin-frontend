import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "@fortawesome/fontawesome-free/js/all.js";

import "../src/styles/custom.css";

createApp(App).use(store).use(router).mount("#app");
