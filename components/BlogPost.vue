<template>
   <component :is="componentToDisplay" :to="link" class="no-underline w-full h-min bg-black/5 hover:bg-black/10 border border-solid border-white/20 hover:border-white/40 transition rounded-lg px-8 md:py-8 py-6">
      <div class="md:mb-8 mb-4 w-fit">
         <h3 class="font-bold md:text-3xl text-lg mt-0 mb-2" v-text="title" />
         <div class="flex items-center relative">
            <img class="w-6 rounded-full absolute opacity-50" :src="`/${author}.jpg`">
            <span class="z-10 text-sm ml-4">
               {{ author }}  •  {{ date }} {{enable_time ? `  •  ${read_time} ${read_type} read` : '' }}
            </span>
         </div>
      </div>
      <p class="m-0" v-if="description">{{ description }}</p>
   </component>
</template>

<script setup>
const props = defineProps({
  link: String,
  author: String,
  title: String,
  date: String,
  enable_time: String,
  read_time: String,
  read_type: String,
  description: String
});

const { link } = toRefs(props);

const componentToDisplay = computed(() => link ? resolveComponent('NuxtLink') : 'div');
</script>
