<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import HomeSection from "@/components/HomeSection.vue";
import { defineAsyncComponent } from "vue";

// Lazy load non-critical sections
const AboutSection = defineAsyncComponent(() => import("@/components/AboutSection.vue"));
const ProjectSection = defineAsyncComponent(() => import("@/components/ProjectSection.vue"));
const ContactSection = defineAsyncComponent(() => import("@/components/ContactSection.vue"));
</script>

<template>
  <main class="w-full">
    <!-- <TheWelcome /> -->
    <div v-scroll-spy class="w-full">
      <section id="home" class="w-full">
        <HomeSection />
      </section>
      <section id="about" class="w-full">
        <AboutSection />
      </section>
      <section id="projects" class="w-full">
        <ProjectSection />
      </section>
      <section id="contact" class="w-full">
        <ContactSection />
      </section>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

section {
  width: 100%;
  max-width: 100%;
}
</style>
