import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./index.css";

const appInstance = createApp(App);
appInstance.use(router);
appInstance.mount("#app");
