<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectSection from "@/components/ProjectSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import AOS from "aos";
import { onMounted } from "vue";
onMounted(() => {
  AOS.init({
    duration: 600,
    once: false,
  });
});
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div v-scroll-spy>
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  </main>
</template>
