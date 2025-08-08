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
        title: 'АДТИ - Тест',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'АДТИ - Тестлар' },
          { name: 'author', content: 'Umarjon Alimdjanov' },

          // Open Graph (для соцсетей)
          { property: 'og:title', content: 'АДТИ - Тест' },
          { property: 'og:description', content: 'АДТИ - Тестлар' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://adti-test.vercel.app' },
          { property: 'og:image', content: 'https://example.com/preview.jpg' },

          // Twitter Card
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Название сайта' },
          { name: 'twitter:description', content: 'Описание для Twitter' },
          { name: 'twitter:image', content: 'https://example.com/twitter-preview.jpg' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      }
    }
  },
  fonts: {
    families: [{ name: "Inter", provider: "google", weights: [300, 400, 500, 600, 700] }],
  },
})