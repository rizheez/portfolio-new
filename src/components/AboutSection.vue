<template>
  <section id="about" class="py-16 bg-white text-gray-800 px-4" data-aos="fade-up">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-down">About Me</h2>
      <div class="flex flex-col md:flex-row items-center">
        <!-- Gambar Profil -->
        <div class="md:w-1/3 mb-8 md:mb-0 md:mr-28 flex justify-center" data-aos="fade-right">
          <img
            :src="img"
            alt="working on a laptop in a cozy cafe environment"
            class="rounded-lg w-120 h-80 object-cover transition-transform hover:scale-105"
          />
        </div>

        <!-- Deskripsi dan Skills -->
        <div class="md:w-2/3 md:pl-12" data-aos="fade-left">
          <p class="text-gray-600 mb-6">
            I'm an enthusiastic developer with a background in networking and web development. I
            enjoy building web applications using Laravel, Vue.js, and modern JavaScript tools.
          </p>
          <p class="text-gray-600 mb-8">
            Currently, I'm looking for remote opportunities where I can grow professionally and
            contribute to Laravel-based projects, either independently or within a team.
          </p>

          <!-- Skills -->
          <div class="mb-8" data-aos="zoom-in">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(skill, index) in skills"
                :key="index"
                class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2"
              >
                <i :class="`${skill.icon} fa-lg`"></i>
                {{ skill.name }}
              </span>
            </div>
          </div>

          <!-- Tombol Resume -->
          <a
            href="/assets/resume.pdf"
            download
            class="px-6 py-2 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition"
            data-aos="fade-up"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import about from "@/assets/images/programming.svg";

const img = new URL(about, import.meta.url).href;
const skills = [
  { name: "Vue.js", icon: "fa-brands fa-vuejs" },
  { name: "React.js", icon: "fa-brands fa-react" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "HTML/CSS", icon: "fa-brands fa-html5" },
  { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
  { name: "Git", icon: "fa-brands fa-git-alt" },
  { name: "Laravel", icon: "fa-brands fa-laravel" },
  { name: "PHP", icon: "fa-brands fa-php" },
  { name: "API Development", icon: "fa-solid fa-plug" },
  { name: "MySQL", icon: "fa-solid fa-database" },
];
</script>
