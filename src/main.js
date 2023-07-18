import { createApp } from "vue";
import "./style.css";
import { createVfm } from "vue-final-modal";
import App from "./App.vue";
import router from "./router/router";
import "animate.css";

const vfm = createVfm();
createApp(App).use(router).use(vfm).mount("#app");
