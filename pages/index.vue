<template>
   <div class="w-full h-full flex md:flex-row flex-col overflow-y-auto py-auto md:px-24">
      <div class="flex md:w-1/2 w-full h-full flex-col md:items-start items-center justify-center">
         <div class="w-fit">
            <h1 class="lg:text-8xl md:text-6xl text-4xl font-bold w-full relative">
               <span>Aex<span class="text-fill-stroke">hell</span></span>
            </h1>
            <div class="w-full">
               <SlideDown />
            </div>
            <div class="w-full mt-8 gap-4 flex flex-col">
               <button class="border bg-black transition-all border-gray border-solid w-full text-white rounded-md px-4 py-4 text-lg uppercase font-medium">
                  <span class="transition-all">About Me</span>
               </button>
               <button class="border bg-black transition-all border-gray border-solid w-full text-white rounded-md px-4 py-4 text-lg uppercase font-medium">
                  <span class="transition-all">My Works</span>
               </button>
            </div>
         </div>
      </div>
      <div id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth z-20 md:w-2/5 w-full justify-center h-full md:my-auto my-8 flex flex-col gap-4">
         <Project v-for="proj of projects" :key="proj.code" :data="proj" />
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

button {
   box-shadow: inset 0px 0px 1px white
}

button:hover {
   box-shadow: inset 350px 0px 1px white
}

button:hover span {
   color: black
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