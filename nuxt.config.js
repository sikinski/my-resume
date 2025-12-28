// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['@/assets/styles/index.sass'],

  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
    cdnURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  ssr: false,

  runtimeConfig: {
    public: {
      backend_address: process.env.BACKEND_ADDRESS,
      mail_to: process.env.MAIL_TO,
    }
  },
})
