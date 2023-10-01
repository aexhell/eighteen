<template>
   <div id="__EIGHTEEN-HOME" class="flex flex-col overflow-hidden md:w-1/2 w-full md:px-auto px-12 justify-start items-end">
      <Project
         :data="projects[0]"
         :column="true"
      />
      <nuxt-link class="mt-8 text-sm flex items-center" to="/works">
         Check out my other projects.
         <svg class="ml-2 animate-slide" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
      </nuxt-link>
   </div>
</template>

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
         ]
      }
   }
}
</script>

<script setup>
useSeoMeta({ title: 'Home ~ ' });
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
