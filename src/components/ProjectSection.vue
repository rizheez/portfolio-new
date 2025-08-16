<template>
  <section id="projects" class="py-16 bg-gray-100 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-down" data-aos-duration="700">
        My Projects
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 150"
          data-aos-duration="700"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full object-cover cursor-pointer hover:scale-110 hover:translate-y-1 transition-transform duration-300"
            @click="openPreview(project.image)"
            data-aos="zoom-in"
            data-aos-delay="index * 200"
            data-aos-duration="600"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, idx) in project.technologies"
                :key="idx"
                class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                data-aos="fade-right"
                :data-aos-delay="idx * 100"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex space-x-3">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                class="text-blue-500 hover:underline"
                target="_blank"
              >
                View Live
              </a>
              <a
                v-if="project.codeUrl"
                :href="project.codeUrl"
                class="text-blue-500 hover:underline"
                target="_blank"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Preview -->
      <div
        v-if="previewImg"
        class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        @click.self="closePreview"
      >
        <img :src="previewImg" alt="Preview" class="max-w-full max-h-[80vh] rounded-lg shadow-lg" />
        <button class="absolute top-6 right-8 text-white text-3xl font-bold" @click="closePreview">
          &times;
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const previewImg = ref(null);

function openPreview(img) {
  previewImg.value = img;
}
function closePreview() {
  previewImg.value = null;
}

const projects = [
  {
    title: "Data Gaji",
    image: new URL("@/assets/images/projects/gaji.png", import.meta.url).href,
    description: "A payroll management system for tracking employee salaries and deductions.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    liveUrl: null,
    codeUrl: "https://github.com/rizheez/data-gaji-laravel",
  },
  {
    title: "Sistem Perpustakaan",
    image: new URL("@/assets/images/projects/perpustakaan.png", import.meta.url).href,
    description: "A library management system for tracking books and users.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    liveUrl: null,
    codeUrl: "https://github.com/rizheez/perpu",
  },
  {
    title: "Portfolio",
    image: new URL("@/assets/images/projects/porto.png", import.meta.url).href,
    description: "Personal portfolio website to showcase projects and skills.",
    technologies: ["Vue.js", "Tailwind CSS", "Vite"],
    liveUrl: null,
    codeUrl: "https://github.com/rizheez/portfolio-new",
  },
  {
    title: "Sistem Penjualan",
    image: new URL("@/assets/images/projects/penjualan.png", import.meta.url).href,
    description: "Online store with product catalog, cart, and checkout features.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    liveUrl: null,
    codeUrl: "https://github.com/rizheez/sistem-penjualan",
  },
  {
    title: "Movie List",
    image: new URL("@/assets/images/projects/movie.png", import.meta.url).href,
    description:
      "A movie list application that allows users to search for movies and view details.",
    technologies: ["React", "TMDB API", "Tailwind CSS"],
    liveUrl: null,
    codeUrl: "https://github.com/rizheez/react-movies-list",
  },
];
</script>
