// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    'nuxt-og-image',
    '@nuxt/devtools'
  ],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },

  ui: {
    icons: ['simple-icons', 'mdi']
  },

  routeRules: {
    '/api/search.json': { prerender: true },
  },

  devtools: {
    enabled: true
  },

  typescript: {
    strict: false
  },

  compatibilityDate: '2024-11-26'
})