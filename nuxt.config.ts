// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    'https://fonts.bunny.net/**': { headers: { 'cache-control': 's-maxage=86400' } },
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=86400' } },
  },
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
        { rel: 'icon', href: '/icon-white.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', href: '/icon.png', type: 'image/png', media: '(prefers-color-scheme: light)' }
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
