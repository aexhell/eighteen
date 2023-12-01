<template>
   <footer class="w-full fixed bottom-0 flex select-none justify-center z-20" id="__EIGHTEEN-FOOTER">
      <nav role="navigation" class="py-8 w-full md:px-auto px-12 gap-4 flex items-center justify-between">
         <div class="md:flex hidden items-center gap-4 justify-between">
            <div class="flex items-center w-full">
               <button v-if="false"  class="text-black dark:text-white mr-2" @click="play">
                  <svg v-if="!playing" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
               </button>
               <button v-if="false" class="text-black dark:text-white" @click="changeTheme">
                  <svg v-if="!darktheme" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
               </button>
            </div>
            <div v-if="false" :class="{ 'opacity-0': route.name !== 'index' }" class="delay-500 transition flex items-center">
               <div class="project-line border-t border-x-0 border-b-0 border-solid border-black dark:border-white h-px w-[100px]" />
            </div>
         </div>
      </nav>
      <audio loop>
         <source src="/ethereal.mp3" type="audio/mp3">
         <source src="/ethereal.ogg" type="audio/ogg">
      </audio>
   </footer>
</template>

<script setup>
const route = useRoute();
const playing = ref(false);
const darktheme = ref(false);

const play = () => {
   var audio = document.getElementsByTagName('audio')[0];

   if (playing.value) audio.pause();
   else audio.play();

   playing.value = !playing.value;
}

const changeTheme = () => {
   if (darktheme.value === false) darktheme.value = true;
   else darktheme.value = false;

   if (darktheme.value) {
      document.documentElement.classList.add('dark');
   } else {
      document.documentElement.classList.remove('dark');
   }
}
</script>
