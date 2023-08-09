<template>
   <div class="overflow-hidden w-full h-full">
      <img src="/gradient.svg" class="absolute opacity-40 top-0 right-0 h-full pointer-events-none select-none">
      <div class="w-full h-full flex md:flex-row flex-col py-auto relative z-10 md:px-24">
         <div class="flex md:w-1/2 w-full h-full flex-col md:items-start items-center justify-center">
            <div class="md:w-2/5">
               <div class="w-full my-12">
                  <nuxt-link to="/" class="no-underline lg:text-7xl md:text-6xl text-black dark:text-white text-4xl font-bold w-full">
                     Aexhell <span class="dark:text-fill-stroke">Collective</span>
                  </nuxt-link>
               </div>
               <div class="md:w-full mt-18 md:mt-0 gap-4 flex flex-col">
                  <nuxt-link to="/about" class="no-underline md:border text-center md:w-full transition-all border-gray border-solid text-black dark:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white rounded-md px-8 py-4 text-lg uppercase font-medium">
                     About Me
                  </nuxt-link>
                  <nuxt-link to="/works" class="no-underline md:border text-center md:w-full transition-all border-gray border-solid text-black dark:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white rounded-md px-8 py-4 text-lg uppercase font-medium">
                     My Works
                  </nuxt-link>
               </div>
               <div class="md:w-full md:border-none border-t border-t-solid mt-8 border-gray md:px-0 md:justify-start justify-end flex gap-2">
                  <button class="bg-transparent p-1 md:w-12 md:h-12 w-8 h-8 border-black md:flex hidden dark:border-white border-solid border dark:text-white rounded-full mt-8 cursor-pointer" @click="enableCursor">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                     </svg>
                  </button>
                  <button class="bg-transparent p-1 md:w-12 md:h-12 w-8 h-8 border-black dark:border-white flex border-solid border dark:text-white rounded-full mt-8 cursor-pointer" @click="darkModeChange">
                     <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-6 md:h-6 w-full h-full m-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                     </svg>
                     <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-6 md:h-6 w-full h-full m-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
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

<style>
html.dark span.dark\:text-fill-stroke, span.text-fill-stroke {
   background: url("/gradient.svg");
   background-size: 200%;
   background-position: right;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}
</style>

<script>
export default {
   methods: {
      enableCursor () {
         var htmlElement = document.querySelector("html");
   
         if (this.cursorEnabled) {
            htmlElement.classList.remove('cursor-enabled');
         } else htmlElement.classList.add('cursor-enabled');

         this.cursorEnabled = !this.cursorEnabled;
      },
      darkModeChange () {
         var htmlElement = document.querySelector("html");
   
         if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            this.darkMode = false;
         } else {
            htmlElement.classList.add('dark');
            this.darkMode = true;
         }
      }
   },
   data () {
      return {
         cursorEnabled: true,
         darkMode: false
      }
   }
}
</script>