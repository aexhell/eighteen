<template>
   <div id="__EIGHTEEN-BLOG" class="flex flex-col overflow-hidden md:w-1/2 text-black w-full md:px-auto px-12 justify-start">
      <ContentDoc>
         <template #default="{ doc }">
            <h2 class="xl:text-7xl my-4 lg:text-6xl text-black text-5xl font-bold w-fit" v-text="doc.titlePage" />
            <div class="flex items-center mt-2 w-full mb-8 relative">
               <img class="w-6 rounded-full absolute opacity-50" :src="`/${doc.author}.jpg`">
               <div class="flex w-full justify-between">
                  <span class="z-10 text-sm ml-4">{{ doc.author }}  •  {{ doc.date }}</span>
                  <div class="z-10 text-sm ml-4 flex items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     <span><b>{{ doc.read_time }}</b> {{ doc.read_type }} read</span>
                  </div>
               </div>
            </div>
            <div id="__EIGHTEEN-BLOG-CONTAINER" class="flex flex-col gap-2 pb-12 w-full">
               <ContentRenderer :value="doc" />
               <hr class="w-full">
               <nuxt-link to="/blog" class="flex mt-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Return to Blogs page.
               </nuxt-link>
            </div>
         </template>
         <template #not-found>
            <h2 class="xl:text-7xl my-4 lg:text-6xl text-5xl font-bold w-fit">
               This page doesn't exist.
            </h2>
            <div id="__EIGHTEEN-BLOG-CONTAINER" class="flex flex-col gap-2 pb-12 w-full">
               <nuxt-link to="/blog" class="flex mt-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Return to Blogs page.
               </nuxt-link>
            </div>
         </template>
      </ContentDoc>
   </div>
</template>

<script setup>
useSeoMeta({ title: 'Blog Post ~ ' });
</script>
