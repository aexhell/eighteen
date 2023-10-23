<template>
   <div id="__EIGHTEEN-HOME" class="flex-col w-full h-full justify-start items-center relative">
      <div :class="{ 'opacity-100': loaded }" id="__AMILLIONCITIES-LANDING" class="__AMILLIONCITIES-HERO w-full transition opacity-0 h-full relative flex">
         <div class="w-full h-full m-auto flex flex-col items-center justify-center">
            <svg class="w-1/4 h-1/2 mb-12" width="180" height="208" viewBox="0 0 180 208" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 0H53L89 58.24L127 0H180L164 24.96H127L91 83.2H89L53 24.96H16L0 0Z" fill="currentColor"/>
               <path d="M16 49.92H54L89 108.16H91L127 49.92H164L129 104L180 183.04H164L129 128.96L121 141.44L164 208H127L91 149.76H89L52 208H16L59 141.44L51 128.96L16 183.04H0L51 104L16 49.92Z" fill="currentColor"/>
            </svg>
            <span class="uppercase font-bold">Scroll down</span>
         </div>
      </div>
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth relative z-20 w-full md:pt-0 gap-8 pt-8 mt-48 md:justify-center transition-width w-full h-auto flex flex-col gap-2 md:pb-24 pb-12">
         <Project v-for="proj of projects" :key="proj.code" :data="proj" :column="true" :enabled="proj.enabled" :active="active === projects.indexOf(proj)" />
         <p class="text-center text-xl">Want to make yours?<br><nuxt-link to="/about">Let's speak.</nuxt-link></p>
      </div>
   </div>
</template>

<script setup>
import { useMainStore } from '@/store/index';

useSeoMeta({ title: null });
const loaded = ref(false);

onMounted(async () => {
   const store = useMainStore();
   console.log(store);

   loaded.value = true;
});
</script>

<script>
export default {
   data () {
      return {
         active: 0,
         projects: [
            {
               code: 'moon',
               stack: 'Electron/Socket.io',
               title: 'Moon',
               position: 'Founder',
               description: 'IRC prototype.',
               date: 'April 2021 / June 2021',
               link: '#',
               enabled: true
            },
            {
               code: 'puroto',
               stack: 'Nuxt/Go',
               title: 'Puroto',
               position: 'Front-end',
               description: 'Social media for furries.',
               date: 'Aug 2021 / Dic 2021',
               link: '#',
               enabled: true
            },
            {
               code: 'mylium',
               stack: 'Nuxt/PHP',
               title: 'Mylium',
               position: 'Founder',
               description: 'Connecting people with you.',
               date: 'Feb 2023 / ----',
               link: '/works/mylium',
               enabled: true
            },
            {
               code: 'nc',
               stack: 'Nuxt',
               position: '----',
               title: 'Coming soon',
               date: 'TBR',
               link: '#',
               enabled: false
            }
         ],
         blogs: []
      }
   },
   async created () {
      this.blogs = await queryContent('works').find();
   }
}
</script>

<style>
.v-enter-from,
.v-leave-to {
   opacity: 0
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out
}

.page-enter-from {
   transform: translateX(-50%)
}

.page-leave-to {
   transform: translateX(50%)
}

.page-enter-from,
.page-leave-to {
   opacity: 0
}
</style>
