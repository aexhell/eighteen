import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.vueApp.$nuxt.$router.options.scrollBehavior = (to: { hash: any}, from: any, savedPosition: any) => {
      if (to.hash) {
         return {
            el: to.hash,
            top: 100,
            behavior: 'smooth'
         }
      }
   }
});