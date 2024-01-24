// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  typescript: {
        shim: false
  },
  modules: ['@pinia/nuxt', 'nuxt-svgo'],
  pinia: {
    autoImports: [
        'defineStore'
    ]
  },
  svgo: {
    defaultImport: 'component'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
        apiBase: ''
    }
  },
});
