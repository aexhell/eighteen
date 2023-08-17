<template>
   <div id="__EIGHTEEN-PROJECTS-CONTAINER" class="w-full flex justify-center items-start">
      <div id="__EIGHTEEN-PROJECTS-CAROUSEL" class="scroll-smooth z-20 md:pt-0 pt-8 transition-width md:px-24 px-8 w-full h-full flex md:pb-8">
         <Carousel :data="projects" />
      </div>
   </div>
</template>

<script>
export default {
   data () {
      return {
         projects: [
            {
               code: 'puroto',
               stack: 'Nuxt/Go',
               title: 'Puroto',
               position: 'Front-end',
               description: 'Social media for furries.',
               date: 'Aug 2022 / Dic 2022',
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
               title: '[REDACTED]',
               date: 'TBR',
               link: '#'
            }
         ]
      }
   }
}
</script>