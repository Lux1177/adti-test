export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-07-03',
  modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxt/image"], // Removed @pinia/nuxt
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
  },
  ssr: false, // Client-side rendering only
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
      duration: 400,
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
      duration: 300,
    },
    head: {
      htmlAttrs: {
        lang: "uz",
      },
    },
  },
  fonts: {
    families: [{ name: "Inter", provider: "google", weights: [300, 400, 500, 600, 700] }],
  },
})