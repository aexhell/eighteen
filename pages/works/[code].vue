<template>
   <div id="__EIGHTEEN-WORK" class="flex flex-col overflow-hidden w-full justify-center relative">
      <ContentDoc>
         <template #default="{ doc }">
            <div style="height: calc(100vh - 235px)" class="w-full h-screen relative flex flex-col">
               <h2 class="separator xl:text-[12rem] text-9xl m-auto text-black font-bold w-fit" v-text="doc.titlePage" />
            </div>
            <div id="__EIGHTEEN-BLOG-CONTAINER" class="text-black backdrop-blur-[4px] flex flex-col gap-2 mt-36 pb-12 w-full">
               <div class="flex lg:flex-row flex-col w-full justify-between">
                  <div class="lg:w-1/2 w-full pl-8 py-8 text-left">
                     <ContentRenderer :value="doc" />
                  </div>
                  <div class="lg:w-1/2 w-full my-4 pr-8 py-8 text-black/60 text-right">
                     <p class="mt-0">{{ doc.stack }}</p>
                     <p v-if="doc.position !== 'Founder'">{{ doc.date }}.</p>
                     <p class="mb-0">
                        I <span v-if="doc.position === 'Founder'">founded this project on <b v-text="doc.date"></b></span><span v-else>worked on this project as a <b v-text="doc.position" /></span>.
                     </p>
                  </div>
               </div>
               <div class="w-fit mt-12 px-8 h-1/4">
                  <img :alt="`${doc.titlePage} Image`" :class="{ 'object-top': doc.code === 'moon'}" class="__EIGHTEEN-PROJECT-IMAGE rounded-xl pointer-events-none select-none transition-all object-cover w-full h-1/4" :src="`/projects/${doc.code}.webp`" />
               </div>
               <nuxt-link to="/" class="flex pl-8 my-6">
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
   position: absolute;
   width: 25px
}
</style>

<script setup>
const route = useRouter();
const contentQuery = await queryContent('works', route.currentRoute.value.params.code).findOne();

useSeoMeta({ title: `Work: ${contentQuery.titlePage} ~` });
</script>

