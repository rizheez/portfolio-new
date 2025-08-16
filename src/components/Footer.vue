<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; {{ year }} Made with ❤️ by Muhammad Reza Saputra.</p>
    </div>
  </footer>
</template>

<script setup>
const date = new Date();
const year = date.getFullYear();
</script>
