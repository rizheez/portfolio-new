<template>
  <section
    id="home"
    class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4 text-center"
  >
    <!-- Avatar -->
    <img
      :src="avatar"
      alt="Avatar"
      class="w-40 h-40 mb-6 rounded-full shadow-lg object-cover"
      data-aos="zoom-in"
    />
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Muhammad Reza Saputra 👋</h1>
    <p class="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
      I'm a full-stack developer passionate about building modern web applications using Laravel and
      Vue.
    </p>
    <a
      href="#projects"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
    >
      See My Work
    </a>
  </section>
</template>

<script setup>
import avatarImg from "@/assets/images/me.svg";
const avatar = new URL(avatarImg, import.meta.url).href;
</script>
