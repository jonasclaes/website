import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { PageTitleMixin } from "./mixins/pageTitle";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(faInstagram, faTwitter, faGithub, faEnvelope, faPhone, faGlobe);

createApp(App)
  .use(store)
  .use(router)
  .mixin(PageTitleMixin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
