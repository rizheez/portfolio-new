<template>
  <section id="about" class="py-16 bg-white text-gray-800 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
      <div class="flex flex-col md:flex-row items-center">
        <!-- Gambar Profil -->
        <div class="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src="https://placehold.co/300x400"
            alt="John Doe working on a laptop in a cozy cafe environment"
            class="rounded-lg shadow-lg w-64 h-80 object-cover"
          />
        </div>

        <!-- Deskripsi dan Skills -->
        <div class="md:w-2/3 md:pl-12">
          <p class="text-gray-600 mb-6">
            I'm an enthusiastic developer with a background in networking and web development. I
            enjoy building web applications using Laravel, Vue.js, and modern JavaScript tools.
          </p>
          <p class="text-gray-600 mb-8">
            Currently, I'm looking for remote opportunities where I can grow professionally and
            contribute to Laravel-based projects, either independently or within a team.
          </p>

          <!-- Skills -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Vue.js</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">JavaScript</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">HTML/CSS</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Tailwind CSS</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                >Responsive Design</span
              >
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">UI/UX</span>
            </div>
          </div>

          <!-- Tombol Resume -->
          <a
            href="#"
            class="px-6 py-2 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
