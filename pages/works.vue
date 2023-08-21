<template>
   <div id="__EIGHTEEN-PROJECTS-CONTAINER" class="w-full flex h-auto justify-center items-start">
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth md:hidden relative z-20 w-full md:pt-0 pt-8 md:justify-center transition-width lg:w-3/4 w-full h-auto flex flex-col gap-2 md:pb-8">
         <Project v-for="proj of projects" :key="proj.code" :data="proj" :column="true" />
      </div>
      <div id="__EIGHTEEN-PROJECTS-CAROUSEL" class="scroll-smooth hidden md:flex z-20 md:pt-0 pt-8 transition-width md:px-24 px-16 w-full h-full md:pb-8">
         <Carousel :data="projects" />
      </div>
   </div>
</template>

<script setup>
useSeoMeta({ title: 'Works ~ ' });
</script>

<script>
export default {
   data () {
      return {
         projects: [
            {
               code: 'moon',
               stack: 'Electron/Socket.io',
               title: 'Moon',
               position: 'Founder',
               description: 'Vue + Electron IRC prototype.',
               date: 'April 2021 / June 2021',
               link: '#'
            },
            {
               code: 'puroto',
               stack: 'Nuxt/Go',
               title: 'Puroto',
               position: 'Front-end',
               description: 'Social media for furries.',
               date: 'Aug 2021 / Dic 2021',
               link: '#',
            },
            {
               code: 'mylium',
               stack: 'Nuxt/PHP',
               title: 'Mylium',
               position: 'Founder',
               description: 'Connecting people with you.',
               date: 'Feb 2023 / ----',
               link: '/works/mylium'
            },
            {
               code: 'nc',
               stack: 'Nuxt',
               position: '----',
               title: 'Coming soon',
               date: 'TBR',
               link: '#'
            }
         ]
      }
   }
}
</script>