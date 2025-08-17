<template>
  <section id="projects" class="py-16 bg-gray-100 px-4">
    <div class="max-w-6xl">
      <div class="grid grid-cols-3 items-center mb-12">
        <!-- Kolom kiri (kosong) -->
        <div></div>

        <!-- Judul di tengah -->
        <h2 class="text-3xl font-bold text-center" data-aos="fade-down" data-aos-duration="700">
          My Projects
        </h2>

        <!-- Navigation di kanan -->
        <div class="flex items-center justify-end space-x-4">
          <button
            @click="previousPage"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            :disabled="currentPage === 0"
            aria-label="Go to previous page of projects"
            :aria-disabled="currentPage === 0"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </button>

          <button
            @click="nextPage"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            :disabled="currentPage === totalPages - 1"
            aria-label="Go to next page of projects"
            :aria-disabled="currentPage === totalPages - 1"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
      <!-- Project Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div
          v-for="(project, index) in displayedProjects"
          :key="project.title"
          class="project-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 150"
          data-aos-duration="700"
        >
          <img
            :src="project.image"
            :alt="`Screenshot of ${project.title} project`"
            class="w-full object-cover cursor-pointer hover:scale-110 hover:translate-y-1 transition-transform duration-300"
            @click="openPreview(project.image)"
            data-aos="zoom-in"
            data-aos-delay="index * 200"
            data-aos-duration="600"
            role="button"
            tabindex="0"
            @keydown.enter="openPreview(project.image)"
            @keydown.space="openPreview(project.image)"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-700 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, idx) in project.technologies"
                :key="idx"
                class="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-medium"
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
                class="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`View live demo of ${project.title} (opens in new tab)`"
              >
                View Live
              </a>
              <a
                v-if="project.codeUrl"
                :href="project.codeUrl"
                class="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`View source code of ${project.title} (opens in new tab)`"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Page Indicators -->
      <div class="flex justify-center space-x-4 mt-24">
        <button
          v-for="page in totalPages"
          :key="page"
          class="w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer"
          :class="currentPage === page - 1 ? 'bg-blue-600' : 'bg-gray-400'"
          @click="goToPage(page - 1)"
          :aria-label="`Go to page ${page} of projects`"
          :aria-current="currentPage === page - 1 ? 'page' : undefined"
        ></button>
      </div>

      <!-- Modal Preview -->
      <div
        v-if="previewImg"
        class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        @click.self="closePreview"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <img
          :src="previewImg"
          alt="Project preview"
          class="max-w-full max-h-[80vh] rounded-lg shadow-lg"
        />
        <button
          class="absolute top-6 right-8 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
          @click="closePreview"
          aria-label="Close preview"
        >
          &times;
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const previewImg = ref(null);
const currentPage = ref(0);
const projectsPerPage = 4;

function openPreview(img) {
  previewImg.value = img;
}

function closePreview() {
  previewImg.value = null;
}

// Navigation functions
function nextPage() {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
}

function previousPage() {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
}

function goToPage(page) {
  currentPage.value = page;
}

// Computed properties
const totalPages = computed(() => {
  return Math.ceil(projects.length / projectsPerPage);
});

const displayedProjects = computed(() => {
  const start = currentPage.value * projectsPerPage;
  const end = start + projectsPerPage;
  return projects.slice(start, end);
});

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
    title: "Personal Finance Tracker",
    image: new URL("@/assets/images/projects/pft.png", import.meta.url).href,
    description: "A web application to track personal finances and expenses.",
    technologies: ["Vue", "Vuetify", "Materio Template"],
    liveUrl: null,
    codeUrl: "https://github.com/rizheez/personal-finance-tracker-frontend",
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

<style scoped>
/* Smooth transitions */
.project-card {
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Button disabled state */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:disabled:hover {
  background-color: rgb(37 99 235);
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible,
img[role="button"]:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
