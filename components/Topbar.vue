<template>
   <header role="banner" class="w-full flex justify-center z-40" id="__ENDLESSVALLEY-TOPBAR">
      <nav :class="{ 'opacity-100': loaded, 'pl-24': route.currentRoute.value.name !== 'index' }" role="navigation" class="py-8 transition transition-all opacity-0 w-full md:px-auto px-12 gap-4 flex items-center justify-between">
         <div class="flex items-center gap-4 justify-between">
            <nuxt-link :class="{ 'opacity-0 pointer-events-none select-none': route.currentRoute.value.name === 'index' }" to="/" alt="Aexhell logo" aria-label="Aexhell logo" class="font-bold no-underline active:mt-px uppercase transition">
               <svg class="w-6 h-6" width="180" height="208" viewBox="0 0 180 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H53L89 58.24L127 0H180L164 24.96H127L91 83.2H89L53 24.96H16L0 0Z" fill="currentColor"/>
                  <path d="M16 49.92H54L89 108.16H91L127 49.92H164L129 104L180 183.04H164L129 128.96L121 141.44L164 208H127L91 149.76H89L52 208H16L59 141.44L51 128.96L16 183.04H0L51 104L16 49.92Z" fill="currentColor"/>
               </svg>
            </nuxt-link>
         </div>
         <div :class="{ 'opacity-100': date !== null }" class="opacity-0 flex items-center transition justify-center">
            <button class="flex mr-2 text-white" @click="playAudio">
               <svg v-if="paused" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
               </svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
            </button>
            <div :style="style" class="rounded-xl clock-time cursor-pointer backdrop-blur-[2px] w-fit relative z-10 transition text-xs`">
               <div class="px-4 py-1 bg-black rounded-xl text-xs">
                  <span class="flex items-center uppercase text-white select-none">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     {{ date }}available
                  </span>
               </div>
            </div>
         </div>
      </nav>
      <audio id="__ENDLESSVALLEY-AUDIO" loop>
         <source src="torsion.ogg" type="audio/ogg">
         <source src="ebb.mp3" type="audio/mpeg">
      </audio>
   </header>
</template>

<style>
.clock-time .tooltiptext {
  visibility: hidden;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 0%;
  margin-left: -60px
}

.clock-time .tooltiptext::before {
  content: " ";
  position: absolute;
  top: -20%; /* At the bottom of the tooltip */
  left: 90%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.clock-time:hover .tooltiptext {
  visibility: visible;
}
</style>

<script setup>
import { useMainStore } from '@/store/index';

const route = useRouter();
const name = ref('');
const loaded = ref(false);

onMounted(async () => {
   const store = useMainStore();

   loaded.value = true;
});

</script>

<script>
export default {
   created() {
      setInterval(() => {
         this.hour = new Date().toLocaleTimeString("en-US", {timeStyle: 'short', timeZone: "Europe/Madrid"});
         this.date = parseInt((new Date().toLocaleTimeString("en-US", {timeStyle: 'short', hour12: false, timeZone: "Europe/Madrid"})).split(':')[0]) < 16 ? 'un' : '';
         this.style = `background: conic-gradient(from ${parseInt((new Date().toLocaleTimeString("en-US", {timeStyle: 'short', hour12: false, timeZone: "Europe/Madrid"})).split(':')[0]) / 24}turn at 50% 50%, #cccccc22, #00000000, rgb(220 215 200));padding: 1px`;
      }, 1000);
   },
   methods: {
      playAudio() {
         var x = document.getElementById("__ENDLESSVALLEY-AUDIO");

         if (this.paused) x.play();
         else x.pause();

         this.paused = !this.paused;
      }
   },
   data () {
      return {
         style: `background: conic-gradient(from ${parseInt((new Date().toLocaleTimeString("en-US", {timeStyle: 'short', hour12: false, timeZone: "Europe/Madrid"})).split(':')[0]) / 24}turn at 50% 50%, #00000000, #00000000, rgb(220 215 200));padding: 1px`,
         date: null,
         hour: null,
         paused: true,
         lis: [
            {
               text: 'About',
               link: '/about'
            },
            {
               text: 'Blog',
               link: '/blog'
            }
         ],
      }
   }
}
</script>
