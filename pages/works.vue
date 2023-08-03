<template>
   <div id="__EIGHTEEN_PROJECTS_CONTAINER" class="md:w-2/5 w-full h-full overflow-y-auto">
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth z-20 w-full md:justify-center h-full justify-start md:pb-0 md:pt-0 pt-4 pb-72 flex flex-col gap-4">
         <div class="w-full">
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
               description: 'Social media for furries.'
            },
            {
               code: 'mylium',
               title: 'Mylium',
               position: 'Founder',
               description: 'Connecting people with you.'
            },
            {
               code: 'nc',
               title: '[REDACTED]'
            }
         ]
      }
   }
}
</script>