<template>
   <div class="overflow-hidden w-full h-full">
      <img src="/gradient.svg" class="absolute opacity-40 top-0 right-0 h-full pointer-events-none select-none">
      <div class="w-full h-full flex md:flex-row flex-col py-auto relative z-10 md:px-24">
         <div class="flex md:w-1/2 w-full h-full flex-col md:items-start items-center justify-center">
            <div class="md:w-2/5">
               <div class="w-full my-12">
                  <nuxt-link to="/" class="no-underline lg:text-8xl md:text-6xl text-black dark:text-white text-4xl font-bold w-full">
                     Aexhell <span class="dark:text-fill-stroke">Collective</span>
                  </nuxt-link>
               </div>
               <div class="w-full mt-18 md:mt-0 gap-4 flex flex-col">
                  <nuxt-link to="/about" class="no-underline border text-center bg-black transition-all border-gray hover:bg-white border-solid w-full text-white hover:text-black rounded-md px-8 py-4 text-lg uppercase font-medium">
                     About Me
                  </nuxt-link>
                  <nuxt-link to="/works" class="no-underline border text-center bg-black transition-all border-gray hover:bg-white border-solid w-full text-white hover:text-black rounded-md px-8 py-4 text-lg uppercase font-medium">
                     My Works
                  </nuxt-link>
               </div>
               <div class="md:block hidden">
                  <button class="bg-transparent p-2 w-12 h-12 border-black dark:border-white border-solid border rounded-full mt-8 cursor-pointer" @click="enableCursor">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
         <slot />
      </div>
      <Cursor v-if="cursorEnabled" />
   </div>
</template>

<script>
export default {
   methods: {
      enableCursor () {
         var htmlElement = document.querySelector("html");
   
         if (this.cursorEnabled) {
            htmlElement.classList.remove('cursor-enabled');
         } else htmlElement.classList.add('cursor-enabled');

         this.cursorEnabled = !this.cursorEnabled;
      }
   },
   data () {
      return {
         cursorEnabled: true
      }
   }
}
</script>