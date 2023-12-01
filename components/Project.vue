<template>
   <component :is="componentToDisplay" :to="`/works/${data.code}`" :class="{ 'relative': column, 'absolute': !column }" class="__EIGHTEEN-PROJECT z-50 lg:py-42 py-24 w-full h-auto transition-all">
      <img :alt="`${data.title} Image`" :class="{ 'object-top': data.code === 'moon'}" class="__EIGHTEEN-PROJECT-IMAGE pointer-events-none select-none absolute transition-all top-0 left-0 object-cover w-full h-full" :src="`/projects/${data.code}.webp`" />
      <div class="__EIGHTEEN-PROJECT-TITLE opacity-0 absolute transition-all top-5 left-4 text-black">
         <div :style="`width: ${Math.floor(Math.random() * 200)+4}px`" class="project-line border-t border-x-0 border-b-0 border-solid border-black h-px pb-4" />
         <p class="mt-0 mb-px text-xs uppercase">[ {{ data.position }} ]</p>
         <h2 class="mt-0 mb-4 md:text-6xl text-lg" v-text="data.title" />
         <p class="text-xs md:text-base md:block hidden" v-text="data.description" />
         <button class="border-black px-4 py-2 border-solid border mt-4 uppercase text-xs hover:bg-black hover:text-white transition text-black">
            {{ enabled ? 'See more' : 'Unavailable' }}
         </button>
      </div>
   </component>
</template>

<style>
.__EIGHTEEN-PROJECT:hover img {
   filter: contrast(0.1) brightness(1.5)
}

.__EIGHTEEN-PROJECT:hover .__EIGHTEEN-PROJECT-TITLE {
   @apply md:left-[-50px] left-[25px] text-black opacity-100
}

.__EIGHTEEN-PROJECT:hover .__EIGHTEEN-PROJECT-TITLE {
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

const { enabled } = toRefs(props);
const componentToDisplay = computed(() => enabled.value ? resolveComponent('NuxtLink') : 'div');
</script>
