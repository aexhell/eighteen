<template>
   <header class="w-full relative z-20" id="__EIGHTEEN-TOPBAR">
      <nav class="md:py-12 md:px-24 px-16 md:border-none border-b border-b-solid border-black/10 dark:border-white/10 py-8 flex items-center dark:text-white text-black justify-between">
         <nuxt-link to="/" class="font-bold no-underline uppercase">
            <svg class="w-10 h-10" width="180" height="208" viewBox="0 0 180 208" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 0H53L89 58.24L127 0H180L164 24.96H127L91 83.2H89L53 24.96H16L0 0Z" fill="currentColor"/>
               <path d="M16 49.92H54L89 108.16H91L127 49.92H164L129 104L180 183.04H164L129 128.96L121 141.44L164 208H127L91 149.76H89L52 208H16L59 141.44L51 128.96L16 183.04H0L51 104L16 49.92Z" fill="currentColor"/>
            </svg>
         </nuxt-link>
         <ul class="list-none flex justify-end items-center gap-4 p-0 m-0">
            <nuxt-link v-for="li of lis" :key="li.link" :to="li.link" class="uppercase text-sm no-underline hover:underline">{{ li.text }}</nuxt-link>
            <button v-if="mouseButton" class="bg-transparent outline-none ml-4 p-0 hidden md:flex dark:text-white rounded-full cursor-pointer" @click="enableCursor">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
               </svg>
            </button>
            <button class="bg-transparent flex outline-none p-0 dark:text-white rounded-full cursor-pointer" @click="darkModeChange">
               <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-6 md:h-6 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
               </svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-6 md:h-6 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
               </svg>
            </button>
            <div class="rounded-lg hidden md:block bg-black/40 dark:bg-white/10 md:px-4 px-2 py-1 border border-solid dark:border-white/20 backdrop-blur-[2px] relative z-10 uppercase text-xs border-black/30 text-white">
               {{ date }}
            </div>
         </ul>
      </nav>
   </header>
</template>

<script>
export default {
   name: 'TopBar',
   methods: {
      enableCursor () {
         var htmlElement = document.querySelector("html");
   
         if (htmlElement.classList.contains('cursor-enabled')) {
            htmlElement.classList.remove('cursor-enabled');
         } else htmlElement.classList.add('cursor-enabled');
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
   created() {
      setInterval(() => {
         this.date = new Date().toLocaleTimeString("en-US", {timeStyle: 'short', timeZone: "Europe/Madrid"});
      }, 1000);
   },
   data () {
      return {
         // activa esto en devtools si te apetece, a mí el mouse personalmente no me gusta
         mouseButton: false,
         date: new Date().toLocaleTimeString("en-US", {timeStyle: 'short', timeZone: "Europe/Madrid"}),
         darkMode: false,
         lis: [
            {
               text: 'Contact',
               link: '/contact'
            },
            {
               text: 'Works',
               link: '/works'
            }
         ],
      }
   }
}
</script>