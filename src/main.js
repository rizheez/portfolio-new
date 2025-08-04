import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import "aos/dist/aos.css";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";
import ScrollSpy from "vue3-scroll-spy";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);
app.use(ScrollSpy);
app.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

app.mount("#app");
