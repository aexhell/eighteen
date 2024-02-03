<template>
   <div id="__ENDLESSVALLEY-HOME" class="flex flex-col gap-24 w-full h-full px-24 items-start relative">
      <div :class="{ 'opacity-100 mt-0': loaded, 'mt-12': !loaded }" id="__ENDLESSVALLEY_PROJECTS_LIST" class="scroll-smooth flex xl:flex-row flex-col transition-op-w py-8 delay-1000 transition duration-700 opacity-0 relative z-20 gap-24 p-0 md:justify-between w-full">
         <div class="xl:w-1/2 w-full h-fit flex flex-col justify-between">
            <h1 class="w-fit xl:text-8xl mt-0 mb-8 bg-white text-black uppercase">
               Aexhell
            </h1>
            <p class="text-md leading-6 my-0 uppercase">
               Digital architect weaving the virtual tapestry of the internet, fabricating immersive online experiences.
            </p>
            <div class="h-full mt-8 mb-4 gap-4 w-1/2 flex flex-col">
               <Project v-for="proj of projects" :key="proj.code" :data="proj" :column="true" />
            </div>
            <div class="flex gap-4 w-fit">
               <Button text="About me" link="/about" />
               <Button text="Works" link="/about" />
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
useSeoMeta({ title: null });

const loaded = ref(false);

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
