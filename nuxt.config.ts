export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"], // Removed @pinia/nuxt
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
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
})
