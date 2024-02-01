<template>
   <component :is="componentToDisplay" :to="props.link" :class="{ 'w-full text-center text-md py-2': props.width, 'text-xs': !props.width }" class="__AEXHELL-INTERACTION-COMPONENT active:mt-px bg-black/50 backdrop-blur w-fit uppercase px-4 py-1 rounded-xl border-white/25 hover:border-white transition border border-solid no-underline">
      {{ props.text }}
   </component>
</template>

<script setup>
const props = defineProps({
   link: String,
   text: String,
   function: Function,
   id: String,
   width: Boolean,
   type: String
});

const componentToDisplay = computed(() => props.link ? resolveComponent('NuxtLink') : 'button');
</script>
