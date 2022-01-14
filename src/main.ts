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
  faDiscord,
  faGithub,
  faInstagram,
  faLaravel,
  faTwitter,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAward,
  faBox,
  faClock,
  faCodeBranch,
  faCogs,
  faCubes,
  faEnvelope,
  faGlobe,
  faPaintRoller,
  faPhone,
  faStopwatch,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { createHead } from "@vueuse/head";

library.add(
  faInstagram,
  faTwitter,
  faGithub,
  faEnvelope,
  faPhone,
  faGlobe,
  faStopwatch,
  faUsers,
  faCogs,
  faLaravel,
  faDiscord,
  faCodeBranch,
  faCubes,
  faClock,
  faPaintRoller,
  faAward,
  faBox,
  faVuejs
);

createApp(App)
  .use(store)
  .use(router)
  .use(createHead())
  .mixin(PageTitleMixin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
