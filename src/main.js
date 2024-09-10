import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "./assets/css/ayoflex.css";
import "./assets/css/example.css";
import mitt from "mitt";
import router from "./router";

const eventBus = mitt();
const app = createApp(App);

app.config.globalProperties.$eventBus = eventBus;
app.use(router);
app.mount("#app");
