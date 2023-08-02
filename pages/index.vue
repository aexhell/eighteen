<template>
   <div class="w-full h-full flex md:flex-row flex-col overflow-y-auto py-auto md:px-24">
      <div class="flex md:w-1/2 w-full h-full flex-col md:items-start items-center justify-center">
         <div class="md:w-2/5">
            <div class="w-full mt-18 md:mt-0 gap-4 flex flex-col">
               <button class="border bg-black transition-all border-gray hover:bg-white border-solid w-full text-white hover:text-black rounded-md px-8 py-4 text-lg uppercase font-medium">
                  <span>About Me</span>
               </button>
               <button class="border bg-black transition-all border-gray hover:bg-white border-solid w-full text-white hover:text-black rounded-md px-4 py-4 text-lg uppercase font-medium">
                  <span>My Works</span>
               </button>
            </div>
         </div>
      </div>
      <div id="__EIGHTEEN_PROJECTS_CONTAINER" class="md:w-2/5 w-full h-full">
         <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth z-20 w-full md:justify-center h-full justify-start md:pb-0 md:pt-0 pt-12 pb-28 flex flex-col gap-4">
            <div class="w-full">
               <SlideDown />
            </div>
            <Project v-for="proj of projects" :key="proj.code" :data="proj" />
         </div>
      </div>
   </div>
</template>

<style scoped>
span.text-fill-stroke {
   background: url("/gradient.svg");
   background-size: 200%;
   background-position: right;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}
</style>

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