<template>
   <div class="w-full h-full flex px-24">
      <div class="flex w-1/2 h-full flex-col justify-center">
         <div class="w-fit">
            <h1 class="text-8xl font-bold w-full relative text-fill-stroke">
               <span class="text-border">Aexhell</span>
            </h1>
            <div class="w-full">
               <SlideDown />
            </div>
         </div>
      </div>
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth z-20 w-2/5 justify-center h-full my-auto flex flex-col gap-4">
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