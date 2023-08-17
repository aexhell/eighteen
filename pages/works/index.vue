<template>
   <div id="__EIGHTEEN_PROJECTS_CONTAINER" class="w-full flex justify-center items-start">
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth z-20 w-full md:pt-0 pt-8 md:justify-center transition-width lg:w-3/4 w-full h-auto flex flex-col gap-2 md:pb-8">
         <div class="w-full hidden">
            <SlideDown />
         </div>
         <Project v-for="proj of projects" :key="proj.code" :data="proj" />
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
            /*
            {
               code: 'nc',
               stack: 'Nuxt',
               position: '----',
               title: '[REDACTED]',
               date: 'TBR',
               link: '#'
            }
            */
         ]
      }
   }
}
</script>