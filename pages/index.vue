<template>
   <div id="__EIGHTEEN-HOME" class="flex-col w-full h-full justify-start items-center relative">
      <div :class="{ 'opacity-100': loaded }" id="__EIGHTEEN_PROJECTS_LIST" class="scroll-smooth transition-op-w delay-1000 transition duration-700 opacity-0 relative z-20 md:pt-0 gap-8 pt-8 px-0  mt-8 md:justify-center w-full h-auto flex flex-col gap-2 md:pb-24 pb-12">
         <Project v-for="proj of projects" :key="proj.code" :data="proj" :column="true" :enabled="proj.enabled" :active="active === projects.indexOf(proj)" />
         <p v-if="false" class="text-center text-xl">Want to make yours?<br><nuxt-link to="/about">Let's speak.</nuxt-link></p>
      </div>
   </div>
</template>

<script setup>
import { useMainStore } from '@/store/index';

useSeoMeta({ title: null });
const loaded = ref(false);

onMounted(async () => {
   const store = useMainStore();

   loaded.value = true;
});
</script>

<style>
.transition-op-w {
   transition-property: width, opacity;
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
               code: 'nc',
               position: '----',
               title: 'Want to make yours?',
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
