<template>
   <div class="w-full h-full flex md:flex-row flex-col overflow-y-auto py-auto md:px-24">
      <div class="flex md:w-1/2 w-full h-full flex-col md:items-start items-center justify-center">
         <div class="w-fit">
            <h1 class="lg:text-8xl md:text-6xl text-4xl font-bold w-full relative text-fill-stroke">
               <span class="text-border">Aexhell</span>
            </h1>
            <div class="w-full">
               <SlideDown />
            </div>
         </div>
      </div>
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth z-20 md:w-2/5 w-full justify-center h-full md:my-auto my-8 flex flex-col gap-4">
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
               position: 'Front-end'
            },
            {
               code: 'mylium',
               title: 'Mylium',
               position: 'Founder'
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