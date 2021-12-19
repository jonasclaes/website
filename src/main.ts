import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { PageTitleMixin } from "./mixins/pageTitle";

createApp(App).use(store).use(router).mixin(PageTitleMixin).mount("#app");
