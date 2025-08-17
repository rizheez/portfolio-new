<template>
  <section
    id="home"
    class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4 text-center"
    role="banner"
    aria-labelledby="hero-heading"
  >
    <!-- Avatar with optimized loading -->
    <img
      :src="avatar"
      alt="Muhammad Reza Saputra - Full Stack Developer"
      class="w-40 h-40 mb-6 rounded-full shadow-lg object-cover"
      data-aos="zoom-in"
      loading="eager"
      width="160"
      height="160"
      fetchpriority="high"
      decoding="async"
    />

    <header>
      <h1 id="hero-heading" class="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Muhammad Reza Saputra
        <span role="img" aria-label="waving hand">👋</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-300 mb-6">
        I'm a <strong>full-stack developer</strong> passionate about building modern web
        applications using <strong>Laravel</strong> and <strong>Vue.js</strong>. Experienced in
        creating scalable, user-friendly solutions.
      </p>
    </header>

    <nav aria-label="Main navigation">
      <a
        href="#projects"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
        aria-label="View my projects and work portfolio"
      >
        See My Work
      </a>
    </nav>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      aria-hidden="true"
    >
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import avatarImg from "@/assets/images/me.svg";
const avatar = new URL(avatarImg, import.meta.url).href;
</script>
