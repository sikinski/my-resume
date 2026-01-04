// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['@/assets/styles/index.sass'],

  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/my-resume/',
    cdnURL: process.env.NUXT_PUBLIC_BASE_URL || '/my-resume/',
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    scrollRestoration: 'manual'
  },

  ssr: false,

  runtimeConfig: {
    public: {
      backend_address: 'https://careerpicker.ru/backend',
      mail_to: 'ulyana.sikinski@gmail.com',
    }
  },


  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (from && to && from.path !== to.path) {
      return { top: 0 };
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        // Можно добавить offset, если есть фиксированный хедер
        // top: 100
      };
    }

    return { top: 0 };
  },

})
