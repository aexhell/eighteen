<template>
   <div id="__EIGHTEEN_PROJECTS_CONTAINER" class="w-full flex justify-center items-start overflow-y-auto">
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth z-20 w-full pt-8 md:justify-center lg:w-3/4 w-full h-auto flex flex-col gap-4">
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
               title: 'Puroto',
               position: 'Front-end',
               description: 'Social media for furries.',
               date: 'August 2022'
            },
            {
               code: 'mylium',
               title: 'Mylium',
               position: 'Founder',
               description: 'Connecting people with you.',
               date: 'February 2023'
            },
            {
               code: 'nc',
               position: '----',
               title: '[REDACTED]',
               date: '----'
            }
         ]
      }
   }
}
</script>