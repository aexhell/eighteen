<template>
   <div id="__EIGHTEEN-HOME" class="flex flex-col w-full h-full md:px-auto justify-start items-center relative">
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth relative z-20 w-full md:pt-0 gap-8 pt-8 md:justify-center transition-width lg:w-[60.6%] w-full h-auto flex flex-col gap-2 md:pb-0 pb-8">
         <Project v-for="proj of projects" :key="proj.code" :data="proj" :column="true" :active="active === projects.indexOf(proj)" />
      </div>
   </div>
</template>

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
         ],
         blogs: []
      }
   },
   async created () {
      this.blogs = await queryContent('works').find();
   }
}
</script>

<script setup>
useSeoMeta({ title: ' ' });
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
