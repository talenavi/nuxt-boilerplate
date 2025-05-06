// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@primevue/nuxt-module'],
  eslint: {
    checker: true,
  },
  runtimeConfig: {
    public: {
      BASE_API: process.env.BASE_API,
    },
  },
  primevue: {
    autoImport: false,
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primevue',
            order: 'theme, base, primevue',
          },
        },
      },
    },
    components: {
      prefix: 'p',
      include: ['Button'],
    },
    directives: {
      include: ['Ripple', 'Tooltip'],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
