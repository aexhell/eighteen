<template>
   <component :is="componentToDisplay" :to="`${data.link}`" :data-code="data.code" :class="{ 'no-landing-project': !data.landing, 'relative': column, 'absolute': !column }" class="__EIGHTEEN-PROJECT z-50 lg:py-42 py-24 w-full h-auto transition-all">
      <img :alt="`${data.title} Image`" :class="{ 'object-top': data.code === 'moon'}" class="__EIGHTEEN-PROJECT-IMAGE pointer-events-none select-none absolute transition-all top-0 left-0 object-cover w-full h-full" :src="`/projects/${data.code}.webp`" />
      <div v-if="!data.landing" class="__EIGHTEEN-PROJECT-TITLE opacity-0 absolute transition-all top-5 left-4 text-black">
         <p class="mt-0 mb-px pt-4 mt-2 w-fit border-t border-x-0 border-b-0 border-solid border-black text-xs uppercase">[ {{ data.position }} ]</p>
         <h2 class="my-0 lg:text-7xl md:text-6xl text-lg" v-text="data.title" />
         <p class="text-xs md:text-base md:block hidden" v-text="data.description" />
         <button class="border-black px-4 py-2 border-solid border mt-2 uppercase text-xs hover:bg-black hover:text-white transition text-black">
            {{ !data.customtext ? 'See more' : 'Let\'s speak' }}
         </button>
      </div>
   </component>
</template>

<style>
.__EIGHTEEN-PROJECT.no-landing-project:hover img {
   filter: contrast(0.1) brightness(1.5)
}

.__EIGHTEEN-PROJECT.no-landing-project:hover .__EIGHTEEN-PROJECT-TITLE {
   @apply md:left-[-50px] left-[25px] text-black opacity-100
}

.__EIGHTEEN-PROJECT.no-landing-project:hover .__EIGHTEEN-PROJECT-TITLE {
   @apply text-black dark:text-white;
   opacity: 1
}
</style>

<script setup>
const props = defineProps({
  active: Boolean,
  column: Boolean,
  data: Object,
  enabled: Boolean
});

const { enabled, data } = toRefs(props);
const componentToDisplay = computed(() => enabled.value ? resolveComponent('NuxtLink') : 'div');

/*
onMounted(() => {
   const testElements = document.getElementsByClassName('__EIGHTEEN-PROJECT');

   for (var i = 0; i < testElements.length; i++) {
      let current = testElements[i];
      
      if (current.dataset.code === data.value.code) {
         current.addEventListener('mousemove', (event) => {
            // current.style.transform = `rotateY(${event.layerX / 5}deg)`;
         });

         current.addEventListener('mouseleave', () => current.style.transform = ``);
      }
   } 
});*/
</script>
