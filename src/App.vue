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
}

/* Ensure all child elements don't cause overflow */
#app > * {
  max-width: 100%;
  overflow-x: hidden;
}
</style>
