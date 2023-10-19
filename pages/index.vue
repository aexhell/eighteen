<template>
   <div id="__EIGHTEEN-HOME" class="flex flex-col md:w-1/2 w-full h-full md:px-auto px-12 justify-start items-start">
      <h2 class="xl:text-7xl mt-0 mb-4 lg:text-6xl text-white text-5xl font-bold w-full">Welcome</h2>
      <p class="xl:text-lg lg:text-md text-lg">
         I am Aexhell, a {{ new Date().getFullYear() - 2005 }}-yo web developer specialized on front-end and UI/UX designer.
         In 2018 I joined the <a href="https://fandom.com">Fandom</a> wiki platform, learning basic web stack (HTML, JS, CSS). By 2019-2020, I started using the <a href="https://vuejs.org">Vue.js</a> framework.
         In 2021 I started using <a href="https://nuxt.com">Nuxt</a>. In 2022-2023 I updated my tech stack, using technologies as React, Svelte and PHP.
      </p>
      <nuxt-link class="xl:mb-8 lg:mb-6 mb-4 flex items-center" to="/about">
         Wanna know more about me?
         <svg class="ml-2 animate-slide" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
      </nuxt-link>
      <div id="__EIGHTEEN-BLOGS-CONTAINER" class="w-full h-auto">
         <h3 class="xl:text-4xl mt-4 md:mb-8 mb-4 lg:text-3xl text-white text-2xl font-bold w-fit">Latest blogs</h3>
         <div v-if="blogs.length" id="__EIGHTEEN-BLOGS" class="w-full flex-wrap flex gap-4 px-0 pb-8">
            <BlogPost
               v-for="blog of blogs"
               :key="blog.code"
               :author="blog.author"
               :title="blog.titlePage"
               :date="blog.date"
               :link="blog._path"
               :description="blog.description"
               :enable_time="false"
            />
         </div>
         <div v-else class="w-full flex-wrap flex gap-4 px-0" id="__EIGHTEEN-BLOGS">
            <nuxt-link v-for="index in 2" :key="index" to="#" class="text-white no-underline w-full bg-white/5 hover:bg-white/10 border border-solid border-white/20 hover:border-white/40 transition rounded-lg px-12 py-8">
               <div class="mb-8 w-full">
                  <div class="mt-0 mb-4 bg-white/50 rounded-md animate-pulse w-full h-4" />
                  <div class="flex items-center relative">
                     <div class="w-4 h-4 bg-white/50 rounded-md animate-pulse absolute" />
                     <div class="z-10 bg-white/50 rounded-md animate-pulse w-12 h-1 ml-6"></div>
                  </div>
               </div>
               <div class="m-0 bg-white/50 rounded-md animate-pulse w-1/2 h-1"></div>
            </nuxt-link>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data () {
      return {
         blogs: []
      }
   },
   async created () {
      this.blogs = await queryContent('blog').find();
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
