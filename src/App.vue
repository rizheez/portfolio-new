<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app">
    <Navbar />

    <router-view />
    <Footer />
    <!-- Nanti akan isi dengan Home, About, Projects, Contact -->
  </div>
</template>

<style>
#app {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
  margin: 0 auto;
}

/* Ensure all child elements don't cause overflow */
#app > * {
  max-width: 100%;
  overflow-x: hidden;
}

/* Global centering for all main content */
main {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Ensure sections are properly centered */
section {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Container consistency across all components */
.max-w-6xl {
  width: 100%;
  max-width: 72rem; /* 1152px */
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .max-w-6xl {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .max-w-6xl {
    padding: 0 2rem;
  }
}
</style>
