<template>
  <section id="projects" class="py-16 bg-gray-100 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, idx) in project.technologies"
                :key="idx"
                class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
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
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Task Manager',
    image: 'https://placehold.co/600x400',
    description: 'Productivity application for organizing tasks with drag-and-drop interface.',
    technologies: ['Vue.js', 'Vuex', 'Dragula'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    image: 'https://placehold.co/600x400',
    description: 'Real-time weather application with location-based forecasting.',
    technologies: ['Vue.js', 'OpenWeather API', 'Geolocation'],
    liveUrl: '#',
    codeUrl: '#',
  },
]
</script>