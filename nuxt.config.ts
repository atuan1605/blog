// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  build: {
        transpile: ['vuetify'],
  },
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
   hooks: {
        'vite:extendConfig': (config) => {
            config.plugins?.push(vuetify({
                styles: {
                    configFile: 'assets/css/settings.scss'
                }
            }))
        }
    }
});
