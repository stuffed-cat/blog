// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Components from 'unplugin-vue-components/vite'
import RekaResolver from 'reka-ui/resolver'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],

  vite:{
    plugins:[
      tailwindcss(),
      Components({
        dts: true,
        resolvers: [
          RekaResolver()
        ],
      }),
    ]
  },

  modules: ['@nuxtjs/color-mode']
})