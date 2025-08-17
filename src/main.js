import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";

// Register service worker for caching
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

// Mount app
app.mount("#app");

// Initialize AOS after app is mounted
import("aos/dist/aos.css").then(() => {
  import("aos").then((AOS) => {
    setTimeout(() => {
      AOS.default.init({
        duration: 600,
        once: true,
      });
    }, 100);
  });
});
