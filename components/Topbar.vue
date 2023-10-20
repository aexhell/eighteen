<template>
   <header role="banner" class="w-full flex justify-center z-40" id="__EIGHTEEN-TOPBAR">
      <nav role="navigation" class="py-8 w-full md:px-auto px-12 gap-4 flex items-center justify-between">
         <div class="flex items-center w-1/4 gap-4 justify-between">
            <nuxt-link to="/" alt="Aexhell logo" aria-label="Aexhell logo" class="font-bold no-underline uppercase">
               <svg class="w-6 h-6" width="180" height="208" viewBox="0 0 180 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H53L89 58.24L127 0H180L164 24.96H127L91 83.2H89L53 24.96H16L0 0Z" fill="currentColor"/>
                  <path d="M16 49.92H54L89 108.16H91L127 49.92H164L129 104L180 183.04H164L129 128.96L121 141.44L164 208H127L91 149.76H89L52 208H16L59 141.44L51 128.96L16 183.04H0L51 104L16 49.92Z" fill="currentColor"/>
               </svg>
            </nuxt-link>
            <nuxt-link to="/" alt="Aexhell name" aria-label="Aexhell name" class="font-bold no-underline uppercase">
               <span :class="{ 'opacity-0': route.currentRoute.value.name !== 'index'}" class="transition delay-500">Aexhell<span class="font-light">©2023</span></span>
            </nuxt-link>
         </div>
         <div :style="style" class="rounded-xl md:block hidden backdrop-blur-[2px] clock-time cursor-pointer w-fit relative z-10 transition uppercase text-xs`">
            <div class="px-4 py-1 bg-white rounded-xl text-xs">
               <span :title="`Currently ${date}available for chatting / ${hour}`" class="flex items-center text-black select-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ date }}available
               </span>
            </div>
         </div>
      </nav>
   </header>
</template>

<script setup>
const route = useRouter();
const name = ref('');

switch (route.currentRoute.value.name) {
   case 'works-code':
      name.value = '';
      break;
}
</script>

<script>
export default {
   created() {
      setInterval(() => {
         this.hour = new Date().toLocaleTimeString("en-US", {timeStyle: 'short', timeZone: "Europe/Madrid"});
         this.date = parseInt((new Date().toLocaleTimeString("en-US", {timeStyle: 'short', hour12: false, timeZone: "Europe/Madrid"})).split(':')[0]) < 16 ? 'un' : '';
         this.style = `background: conic-gradient(from ${parseInt((new Date().toLocaleTimeString("en-US", {timeStyle: 'short', hour12: false, timeZone: "Europe/Madrid"})).split(':')[0]) / 24}turn at 50% 50%, #FFFFFF00, #FFFFFF00, #000000);padding: 1px`;
      }, 1000);
   },
   data () {
      return {
         style: `background: conic-gradient(from ${parseInt((new Date().toLocaleTimeString("en-US", {timeStyle: 'short', hour12: false, timeZone: "Europe/Madrid"})).split(':')[0]) / 24}turn at 50% 50%, #FFFFFF00, #FFFFFF00, #000000);padding: 1px`,
         date: parseInt((new Date().toLocaleTimeString("en-US", {timeStyle: 'short', timeZone: "Europe/Madrid"})).split(':')[0]) < 16 ? 'un' : '',
         hour: new Date().toLocaleTimeString("en-US", {timeStyle: 'short', timeZone: "Europe/Madrid"}),
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
