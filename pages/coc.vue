<template>
   <div id="__EIGHTEEN-COC" class="flex flex-col overflow-hidden w-full md:px-auto justify-start">
      <h2 class="xl:text-7xl my-4 lg:text-6xl text-5xl font-bold w-fit">Code of Conduct</h2>
      <ContentDoc path="/coc" />
      <div id="__EIGHTEEN-COC-CONTAINER" class="flex flex-col gap-2 pb-12 w-full">
         <hr class="w-full">
         <nuxt-link to="/about" class="flex mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Return to Contact page.
         </nuxt-link>
      </div>
   </div>
</template>

<script setup>
useSeoMeta({ title: 'Code of Conduct ~ ' });
</script>
