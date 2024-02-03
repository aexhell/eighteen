<template>
   <component :is="componentToDisplay" :to="props.link" :class="{ 'text-xs': !props.width }" class="w-full AEXHELL-INTERACTION-COMPONENT active:mt-px bg-black/50 backdrop-blur uppercase px-6 py-2 rounded-xl border-white/25 hover:border-white transition border border-solid no-underline">
      <div class="relative z-20">
         <div class="flex items-center mt-4 mb-0">
            <h3 class="text-xl my-0" v-text="data.title" /> <span class="ml-2 text-white/75">[ {{ data.position }} ]</span>
         </div>
         <p v-text="data.description" />
      </div>
      <div class="AEXHELL-INTERACTION-GRADIENT">
         <img class="w-1/2 h-full absolute object-cover z-10 top-0 right-0 rounded-tr-xl pointer-events-none select-none rounded-br-xl" :src="`/projects/${data.code}.webp`">
      </div>
   </component>
</template>

<style>
.__ENDLESSVALLEY-PROJECT.no-landing-project:hover img {
   filter: contrast(0.1) brightness(1.5)
}

.__ENDLESSVALLEY-PROJECT.no-landing-project:hover .__ENDLESSVALLEY-PROJECT-TITLE {
   @apply md:left-[-50px] left-[25px] text-black opacity-100
}

.__ENDLESSVALLEY-PROJECT.no-landing-project:hover .__ENDLESSVALLEY-PROJECT-TITLE {
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
   const testElements = document.getElementsByClassName('__ENDLESSVALLEY-PROJECT');

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
