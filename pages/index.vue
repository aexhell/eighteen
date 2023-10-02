<template>
   <div id="__EIGHTEEN-HOME" class="flex flex-col overflow-hidden md:w-1/2 w-full md:px-auto px-12 justify-start items-start">
      <h2 class="xl:text-7xl my-4 lg:text-6xl text-white text-5xl font-bold w-full">Welcome</h2>
      <p class="xl:text-lg lg:text-md text-lg">
         I am Aexhell, a {{ new Date().getFullYear() - 2005 }}-yo web developer specialized on front-end and UI/UX designer.
         In 2018 I joined the <a href="https://fandom.com">Fandom</a> wiki platform, learning basic web stack (HTML, JS, CSS). By 2019-2020, I started using the <a href="https://vuejs.org">Vue.js</a> framework.
         In 2021 I started using <a href="https://nuxt.com">Nuxt</a>. In 2022-2023 I updated my tech stack, using technologies as React, Svelte and PHP.
      </p>
      <nuxt-link class="mb-6 flex items-center" to="/about">
         Wanna know more about me?
         <svg class="ml-2 animate-slide" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
      </nuxt-link>
      <div id="__EIGHTEEN-BLOGS-CONTAINER">
         <h3 class="xl:text-4xl mt-4 mb-8 lg:text-3xl text-white text-2xl font-bold w-fit">Latest blogs</h3>
         <p class="xl:text-lg lg:text-md text-lg italic">No blogs currently available.</p>
      </div>
   </div>
</template>

<script>
export default {
   data () {
      return {
         blogs: []
      }
   }
}
</script>

<script setup>
useSeoMeta({ title: ' ' });
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
