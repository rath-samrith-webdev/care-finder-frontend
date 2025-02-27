import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import { i18n } from "./i18n";
import { createPinia } from "pinia";
import router from "./routers";

const app = createApp(App);
const pinia = createPinia();
app.use(ElementPlus).use(i18n).use(router).use(pinia).mount("#app");
