<script setup>
import { ref } from "vue";

const showSuccess = ref(false);
const loading = ref(false);
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  loading.value = true;
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  })
    .then(() => {
      showSuccess.value = true;
      form.reset();
    })
    .catch(() => {
      alert("Terjadi kesalahan, silakan coba lagi.");
    })
    .finally(() => {
      loading.value = false;
      setTimeout(() => (showSuccess.value = false), 6000);
    });
}
</script>

<template>
  <section id="contact" class="py-16 bg-white px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
      <!-- Kontak Ikon -->
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold mb-6" data-aos="fade-down">Contact</h2>
        <p class="text-gray-600 mb-8">Feel free to reach out through any of the platforms below:</p>

        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <div class="space-y-4" data-aos="fade-right">
              <div class="flex items-start">
                <svg
                  class="w-5 h-5 text-blue-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span class="text-gray-600">rezamuhammad980@gmail.com</span>
              </div>

              <div class="flex items-start">
                <svg
                  class="w-5 h-5 text-blue-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span class="text-gray-600">Samarinda, Kalimantan Timur</span>
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Follow Me</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-blue-500">
                  <i class="fa-brands fa-square-facebook fa-2xl"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-blue-500">
                  <i class="fa-brands fa-square-instagram fa-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-reza-saputra-b6a81726b"
                  class="text-gray-600 hover:text-blue-500"
                >
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                </a>
                <a href="https://github.com/rizheez" class="text-gray-600 hover:text-blue-500">
                  <i class="fa-brands fa-square-github fa-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Kontak -->
      <div class="md:w-1/2 md:pl-12">
        <form
          action="https://formsubmit.co/rezamuhammad980@gmail.com"
          method="POST"
          class="space-y-6"
          @submit="handleSubmit"
          data-aos="fade-left"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="#" />

          <div>
            <label for="name" class="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label for="subject" class="block text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label for="message" class="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full flex items-center justify-center"
            :disabled="loading"
          >
            <span v-if="loading" class="animate-spin mr-2">
              <i class="fa-solid fa-spinner"></i>
            </span>
            <span v-if="!loading">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>
        <transition name="fade">
          <div
            v-if="showSuccess"
            class="mt-6 px-4 py-3 bg-green-100 text-green-800 rounded-lg shadow text-center font-semibold"
          >
            <!-- 🎉 Pesan kamu berhasil dikirim! Terima kasih sudah menghubungi saya. -->
            <!-- make in english -->
            🎉 Your message has been sent successfully! Thank you for contacting me.
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
