// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  plugins: [],
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@pinia/nuxt'
  ],
  content: {
    contentHead: false
  },
  app: {
    rootId: '__AMILLIONCITIES',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        class: '',
        lang: 'en'
      },
      titleTemplate: '%s Aexhell',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [],
      link: [
        { rel: 'icon', href: '/icon.png', type: 'image/png' }
      ],
      style: [],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  css: [
    '@/assets/global.css'
  ]
});
