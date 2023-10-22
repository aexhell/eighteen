<template>
   <div id="__EIGHTEEN-HOME" class="flex-col w-full h-full justify-start items-center relative">
      <div style="height: calc(100vh - 235px)" class="w-full h-screen relative flex">
         <h2 class="separator transition xl:text-[12rem] text-9xl m-auto text-black font-bold w-fit">Aexhell</h2>
      </div>
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth relative z-20 w-full md:pt-0 gap-8 pt-8 mt-36 md:justify-center transition-width w-full h-auto flex flex-col gap-2 md:pb-24 pb-12">
         <Project v-for="proj of projects" :key="proj.code" :data="proj" :column="true" :enabled="proj.enabled" :active="active === projects.indexOf(proj)" />
         <p class="text-center text-xl">Want to make yours?<br><nuxt-link to="/about">Let's speak.</nuxt-link></p>
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

<script setup>
useSeoMeta({ title: null });
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
