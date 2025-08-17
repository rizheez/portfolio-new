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

// Lazy load non-critical plugins
Promise.all([
  import("aos/dist/aos.css"),
  import("aos"),
  import("vue-scrollto"),
  import("vue3-scroll-spy"),
])
  .then(([aosCSS, AOS, VueScrollTo, ScrollSpy]) => {
    // Initialize AOS after app is mounted
    app.mount("#app");

    // Initialize AOS after a short delay to ensure DOM is ready
    setTimeout(() => {
      AOS.default.init({
        duration: 600,
        once: false,
      });
    }, 100);

    // Add scroll plugins
    app.use(VueScrollTo.default, {
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

    app.use(ScrollSpy.default);
  })
  .catch((error) => {
    console.warn("Failed to load some plugins:", error);
    // Still mount the app even if plugins fail
    app.mount("#app");
  });
