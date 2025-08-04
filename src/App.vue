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
