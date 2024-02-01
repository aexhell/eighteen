<template>
   <div id="__ENDLESSVALLEY-HOME" class="flex flex-col gap-24 w-full h-full px-24 items-start relative">
      <div :class="{ 'opacity-100 mt-0': loaded, 'mt-12': !loaded }" id="__ENDLESSVALLEY_PROJECTS_LIST" class="scroll-smooth flex xl:flex-row flex-col transition-op-w py-8 delay-1000 transition duration-700 opacity-0 relative z-20 gap-24 p-0 md:justify-between w-full">
         <div class="xl:w-1/2 w-full h-full flex flex-col justify-between">
            <h1 class="w-full m-0 flex flex-col">
               <div v-for="header of heading" :key="header.text" :class="{ 'mb-12': header.last }" class="text-8xl mb-1 __ENDLESS-VALLEY-TITLE my-0 w-full relative flex gap-4 font-semibold uppercase overflow-hidden">
                  {{ header.text }}<nuxt-link :to="header.link" class="w-full h-full bg-white no-underline text-center text-black">{{ header.altText }}</nuxt-link>
               </div>
            </h1>
            <p class="text-md my-0 mb-4 uppercase">Digital architect weaving the virtual tapestry of the internet, creating immersive online experiences.</p>
         </div>
      </div>
   </div>
</template>

<script setup>
useSeoMeta({ title: null });

const loaded = ref(false);
const heading = ref([
   {
      text: 'This',
      altText: 'About',
      link: '/about',
      align: false,
      last: false
   },
   {
      text: 'Is',
      altText: 'Works',
      link: '/works',
      align: true,
      last: false
   },
   {
      text: 'Aexhell',
      altText: 'XVIII',
      link: '#',
      align: false,
      last: true
   }
]);

onMounted(() => {
   loaded.value = true;
});
</script>

<style>
.transition-op-w {
   transition-property: width, opacity, margin;
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
