<template>
   <div id="__EIGHTEEN-HOME" class="flex md:flex-row flex-col gap-24 w-full px-24 items-start relative">
      <div :class="{ 'opacity-100 mt-0': loaded, 'mt-24': !loaded }" id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth flex xl:flex-row flex-col transition-op-w py-8 delay-1000 transition duration-700 opacity-0 relative z-20 gap-24 p-0 md:justify-between w-full h-full">
         <div id="MARQUEE-ELEMENT" class="xl:w-1/2 w-full h-full flex flex-col justify-between">
            <h1 class="text-8xl my-0 mb-12 relative font-medium uppercase overflow-hidden">
               <div v-for="mar of marquees" :key="marquees.indexOf(mar)" class="marquee relative w-fit hover:py-16 gap-2 transition-all ease-in-out duration-1s flex justify-left border-b-3 border-solid border-x-0 border-t-0 border-black overflow-hidden">
                  <span class="text-transparent user-select pointer-events-none">{{ mar }}</span>
                  <span class="keyframes-marquee absolute" v-text="`${mar + mar + mar + mar + mar + mar + mar + mar}`"></span>
               </div>
            </h1>
            <p class="text-md my-0 uppercase">Digital architect weaving the virtual tapestry of the internet, creating immersive online experiences through code and design.</p>
         </div>
         <div v-if="opened" id="__EIGHTEEN_CONTAINER" class="scroll-smooth overflow-y-auto transition-op-w relative z-20 gap-8 p-0 flex items-start justify-start xl:w-1/2 w-full h-fit">
            <div class="w-full h-full p-12 bg-gray/10 backdrop-blur">
               <h1 class="text-4xl my-0 mb-8 font-medium uppercase w-full">
                  <div class="w-full flex border-b-3 border-solid border-x-0 border-t-0 border-black justify-start">Aexhell</div>
               </h1>
               <p class="text-xl my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useMainStore } from '@/store/index';

useSeoMeta({ title: null });
const loaded = ref(false);
const opened = ref(false);
const marquees = ref(['Aexhell', 'MyWorks', 'TheMoon']);

onMounted(async () => {
   const store = useMainStore();
   let docs = document.getElementsByClassName('marquee');
   let marquee = document.getElementById('MARQUEE-ELEMENT');
   let arr = Array.from(docs);

   for (var i = 0; i < arr.length; i++) {
      arr[i].style.width = `calc(${marquee.clientWidth}px)`
   }
   

   loaded.value = true;
});
</script>

<style>
.transition-op-w {
   transition-property: width, opacity, margin;
}

.marquee:hover .keyframes-marquee {
   animation-play-state: paused
}

.keyframes-marquee {
   animation: marquee 15s linear normal infinite
}

@keyframes marquee {
  0% { left: 0%; }
  100% { left: -150%; }
}
</style>

<script>
export default {
   data () {
      return {
         active: 0,
         projects: [
            {
               code: 'moon',
               title: 'Moon',
               position: 'Founder',
               description: 'IRC prototype.',
               link: '/works/moon',
               customtext: false,
               enabled: true
            },
            {
               code: 'puroto',
               title: 'Puroto',
               position: 'Front-end',
               description: 'Social media for furries.',
               link: '/works/puroto',
               customtext: false,
               enabled: true
            },
            {
               code: 'mylium',
               title: 'Mylium',
               position: 'Founder',
               description: 'Connecting people with you.',
               link: '/works/mylium',
               customtext: false,
               enabled: true
            },
            {
               code: 'quartermuseum',
               title: 'Quarter Museum',
               position: 'Founder',
               description: 'IRC that encourages the user\'s cosmetic comfort.',
               link: '/works/qm',
               customtext: false,
               enabled: true
            },
            {
               code: 'nc',
               position: 'Coming soon',
               title: 'And more.',
               description: 'Want to make your own project?',
               link: '/about',
               customtext: true,
               enabled: true
            }
         ]
      }
   }
}
</script>

<style>
.v-enter-from,
.v-leave-to {
   opacity: 0
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out
}

.page-enter-from {
   transform: translateX(-50%)
}

.page-leave-to {
   transform: translateX(50%)
}

.page-enter-from,
.page-leave-to {
   opacity: 0
}
</style>
