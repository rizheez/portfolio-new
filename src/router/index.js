import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Muhammad Reza Saputra - Full Stack Developer | Laravel & Vue.js Specialist",
        description:
          "Full Stack Developer passionate about building modern web applications using Laravel and Vue.js. Experienced in creating scalable, user-friendly solutions.",
        keywords:
          "full stack developer, laravel developer, vue.js developer, web developer, indonesia, portfolio",
        ogTitle: "Muhammad Reza Saputra - Full Stack Developer",
        ogDescription:
          "Full Stack Developer passionate about building modern web applications using Laravel and Vue.js.",
        ogImage: "https://mrezasaputra.vercel.app/og-image.png",
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "About - Muhammad Reza Saputra | Full Stack Developer",
        description:
          "Learn more about Muhammad Reza Saputra, a passionate Full Stack Developer with expertise in Laravel, Vue.js, and modern web technologies.",
        keywords: "about, full stack developer, laravel, vue.js, web development, indonesia",
        ogTitle: "About - Muhammad Reza Saputra",
        ogDescription: "Learn more about Muhammad Reza Saputra, a passionate Full Stack Developer.",
        ogImage: "https://mrezasaputra.vercel.app/about-og-image.png",
      },
    },
  ],
});

// Global navigation guard to update meta tags
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta && to.meta.description) {
    descriptionMeta.setAttribute("content", to.meta.description);
  }

  // Update meta keywords
  const keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (keywordsMeta && to.meta.keywords) {
    keywordsMeta.setAttribute("content", to.meta.keywords);
  }

  // Update Open Graph tags
  if (to.meta.ogTitle) {
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", to.meta.ogTitle);
    }
  }

  if (to.meta.ogDescription) {
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) {
      ogDescMeta.setAttribute("content", to.meta.ogDescription);
    }
  }

  if (to.meta.ogImage) {
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute("content", to.meta.ogImage);
    }
  }

  // Update canonical URL
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute("href", `https://mrezasaputra.vercel.app${to.path}`);
  }

  next();
});

export default router;
