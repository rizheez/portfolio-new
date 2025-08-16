<template>
  <nav class="fixed w-full bg-white shadow-sm z-10 left-0 right-0">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <div class="flex justify-between items-center">
        <!-- Brand -->
        <div class="text-xl sm:text-2xl font-bold text-blue-500">MyPortfolio</div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#home" v-scroll-to="'#home'" :class="linkClass('home')"> Home </a>
          <a href="#about" v-scroll-to="'#about'" :class="linkClass('about')"> About </a>
          <a href="#projects" v-scroll-to="'#projects'" :class="linkClass('projects')">
            Projects
          </a>
          <a href="#contact" v-scroll-to="'#contact'" :class="linkClass('contact')"> Contact </a>
        </div>

        <!-- Mobile Toggle Button -->
        <button
          @click="toggleMenu"
          class="md:hidden focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors touch-manipulation"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div
          v-show="menuOpen"
          class="md:hidden mt-3 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
        >
          <div class="py-1">
            <a
              href="#home"
              v-scroll-to="'#home'"
              @click="menuOpen = false"
              :class="linkClass('home', true)"
            >
              Home
            </a>
            <a
              href="#about"
              v-scroll-to="'#about'"
              @click="menuOpen = false"
              :class="linkClass('about', true)"
            >
              About
            </a>
            <a
              href="#projects"
              v-scroll-to="'#projects'"
              @click="menuOpen = false"
              :class="linkClass('projects', true)"
            >
              Projects
            </a>
            <a
              href="#contact"
              v-scroll-to="'#contact'"
              @click="menuOpen = false"
              :class="linkClass('contact', true)"
            >
              Contact
            </a>
          </div>
        </div>
      </transition>
    </div>
    <!-- Progress Bar -->
    <div class="w-full h-1 bg-gray-200">
      <div
        class="h-1 bg-blue-500 transition-all duration-200"
        :style="{ width: scrollProgress + '%' }"
      ></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const scrollProgress = ref(0);
const activeSection = ref("home");

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

const updateActiveSection = () => {
  const sections = ["home", "about", "projects", "contact"];
  let current = "home";

  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        current = id;
        break;
      }
    }
  }

  activeSection.value = current;
};

// Combine both
const onScroll = () => {
  updateScrollProgress();
  updateActiveSection();
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", handleResize);
  updateScrollProgress();
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", handleResize);
});

// Handle window resize to close mobile menu on desktop
const handleResize = () => {
  if (window.innerWidth >= 768 && menuOpen.value) {
    menuOpen.value = false;
  }
};

// Dynamic class
const linkClass = (id, isMobile = false) => {
  const base = isMobile
    ? "block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 active:bg-blue-100 rounded-md mx-2 touch-manipulation"
    : "nav-link hover:text-blue-500";
  const active =
    activeSection.value === id ? "text-blue-500 font-semibold active" : "text-gray-600";
  return `${base} ${active}`;
};
</script>

<style lang="scss" scoped>
.nav-link {
  position: relative;
  transition: color 0.3s;
}
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3b82f6;
  transition: width 0.3s;
}
.nav-link:hover::after {
  width: 100%;
}
.nav-link.active::after {
  width: 100%;
}

// Fix white line issue and prevent overflow
nav {
  overflow-x: hidden;
  width: 100vw;
  left: 0;
  right: 0;
}

// Ensure container doesn't cause overflow
.container {
  max-width: 100%;
  overflow-x: hidden;
}

// Mobile menu improvements
@media (max-width: 768px) {
  nav {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.95);
  }

  // Ensure mobile menu doesn't interfere with content
  .md\\:hidden {
    position: relative;
    z-index: 20;
  }
}

// Improve touch targets on mobile
@media (max-width: 768px) {
  button {
    min-height: 44px;
    min-width: 44px;
  }

  a {
    min-height: 44px;
    display: flex;
    align-items: center;
  }
}

// Prevent horizontal scroll on all screen sizes
@media (min-width: 0px) {
  body {
    overflow-x: hidden;
  }

  nav {
    overflow-x: hidden;
  }
}
</style>
