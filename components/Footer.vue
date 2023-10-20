<template>
   <footer class="w-full fixed flex select-none justify-center z-20" id="__EIGHTEEN-FOOTER">
      <nav role="navigation" class="py-8 w-full md:px-auto px-12 gap-4 flex items-center justify-between">
         <div class="md:flex hidden items-center w-1/4 gap-4 justify-between">
            <button class="text-black" @click="play">
               <svg v-if="!playing" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
               </svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </button>
            <div :class="{ 'opacity-0': route.name !== 'index' }" class="delay-500 transition flex items-center">
               <div class="project-line border-t border-x-0 border-b-0 border-solid border-black h-px w-[100px]" />
            </div>
         </div>
      </nav>
      <audio loop>
         <source src="/ethereal.ogg" type="audio/ogg">
         <source src="/ethereal.mp3" type="audio/mp3">
      </audio>
   </footer>
</template>

<script setup>
const route = useRoute();
const playing = ref(false);
const reverse = ref(false);
const lastroute = ref(route.name);

const play = () => {
   var audio = document.getElementsByTagName('audio')[0];

   if (playing.value) audio.pause();
   else audio.play();

   playing.value = !playing.value;
}
</script>
