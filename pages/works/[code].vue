<template>
   <div id="__EIGHTEEN-WORK" class="flex flex-col overflow-hidden md:w-[60.6%] w-full md:px-auto px-12 justify-start">
      <div class="md:w-[70%] md:block hidden left-15% w-full h-full fixed border-x border-y-0 border border-solid border-black/15 top-0 z-[-10]"></div>
      <ContentDoc>
         <template #default="{ doc }">
            <span v-for="sep in Math.floor(Math.random() * 15)" :key="sep" class="line transition-all md:block hidden" :style="`left: calc(275px); top: ${15 + sep * Math.floor(Math.random() * 25)}px;`"></span>
            <div style="height: calc(100vh - 92px)" class="w-full h-screen relative flex flex-col">
               <h2 class="separator xl:text-[12rem] text-9xl mx-auto xl:my-1/4 md:my-1/4 my-2/5 text-black font-bold w-fit" v-text="doc.titlePage" />
            </div>
            <div id="__EIGHTEEN-BLOG-CONTAINER" class="text-black backdrop-blur-md flex flex-col gap-2 p-8 pb-12 w-full">
               <div class="flex justify-between">
                  <div class="w-1/2">
                     <ContentRenderer :value="doc" />
                  </div>
                  <div class="w-1/2 my-4 text-black/60 text-right">
                     <p class="mt-0">{{ doc.stack }}</p>
                     <p class="mb-0">{{ doc.date }}.</p>
                  </div>
               </div>
               <div class="w-full h-1/4">
                  <img :alt="`${doc.titlePage} Image`" :class="{ 'object-top': doc.code === 'moon'}" class="__EIGHTEEN-PROJECT-IMAGE rounded-xl pointer-events-none select-none transition-all object-cover w-full h-1/4" :src="`/projects/${doc.code}.webp`" />
               </div>
               <nuxt-link to="/" class="flex my-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Return to index page.
               </nuxt-link>
            </div>
         </template>
         <template #not-found>
            <h2 class="xl:text-7xl my-4 lg:text-6xl text-black text-5xl font-bold w-fit">
               This page doesn't exist.
            </h2>
            <div id="__EIGHTEEN-BLOG-CONTAINER" class="text-black flex flex-col gap-2 pb-12 w-full">
               <nuxt-link to="/" class="flex mt-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Return to index page.
               </nuxt-link>
            </div>
         </template>
      </ContentDoc>
   </div>
</template>

<style>
.line {
   @apply border-t-1 border-solid border-b-0 border-x-0 border-black/25;
   content: "";
   left: -15px;
   position: absolute;
   width: 25px
}
</style>

<script setup>
useSeoMeta({ title: 'Work ~ Aexhell' });
</script>

