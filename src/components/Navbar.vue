<template>
  <nav class="bg-gray-800 text-white px-6 py-4 shadow-md">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="text-xl font-bold">My Portfolio</div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li><a href="#home" class="hover:underline">Home</a></li>
        <li><a href="#about" class="hover:underline">About</a></li>
        <li><a href="#projects" class="hover:underline">Projects</a></li>
        <li><a href="#contact" class="hover:underline">Contact</a></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="menuOpen = !menuOpen" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            :class="{ hidden: menuOpen }"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            :class="{ hidden: !menuOpen }"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden mt-4 space-y-2 px-4">
      <a href="#home" class="block hover:underline" @click="closeMenu">Home</a>
      <a href="#about" class="block hover:underline" @click="closeMenu">About</a>
      <a href="#projects" class="block hover:underline" @click="closeMenu">Projects</a>
      <a href="#contact" class="block hover:underline" @click="closeMenu">Contact</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>