// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@unocss/nuxt',
  ],
  app: {
    rootId: '__EIGHTEEN',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'cursor-enabled'
      },
      title: 'Aexhell',
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
