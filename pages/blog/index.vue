<template>
   <div id="__EIGHTEEN-BLOG" class="flex flex-col overflow-hidden md:w-1/2 w-full md:px-auto px-12 justify-start">
      <h2 class="xl:text-7xl my-4 lg:text-6xl text-white text-5xl font-bold w-fit">Blogs</h2>
      <div id="__EIGHTEEN-BLOG-CONTAINER" class="text-white">
         <ul v-if="blogs.length" class="list-none flex-wrap flex gap-4 px-0" id="__EIGHTEEN-BLOGS">
            <nuxt-link v-for="blog of blogs" :key="blog.code" :to="blog._path" class="text-white no-underline w-full bg-white/5 hover:bg-white/10 border border-solid border-white/20 hover:border-white/40 transition rounded-lg p-12">
               <div class="mb-8 w-fit">
                  <h3 class="font-bold text-3xl mt-0 mb-2" v-text="blog.titlePage" />
                  <div class="flex items-center relative">
                     <img class="w-6 rounded-full absolute opacity-50" :src="`/${blog.author}.jpg`">
                     <span class="z-10 text-sm ml-4" v-text="`${blog.author}  •  ${blog.date}  •  ${blog.read_time} ${blog.read_type} read`" />
                  </div>
               </div>
               <p class="m-0" v-if="blog.description">{{ blog.description }}</p>
            </nuxt-link>
         </ul>
         <ul v-else class="list-none flex-wrap flex gap-4 px-0" id="__EIGHTEEN-BLOGS">
            <nuxt-link v-for="index in 2" :key="index" to="#" class="text-white no-underline w-full bg-white/5 hover:bg-white/10 border border-solid border-white/20 hover:border-white/40 transition rounded-lg p-12">
               <div class="mb-8 w-full">
                  <div class="mt-0 mb-4 bg-white/50 rounded-md animate-pulse w-full h-4" />
                  <div class="flex items-center relative">
                     <div class="w-4 h-4 bg-white/50 rounded-md animate-pulse absolute" />
                     <div class="z-10 bg-white/50 rounded-md animate-pulse w-12 h-1 ml-6"></div>
                  </div>
               </div>
               <div class="m-0 bg-white/50 rounded-md animate-pulse w-1/2 h-1"></div>
            </nuxt-link>
         </ul>
      </div>
   </div>
</template>

<script setup>
useSeoMeta({ title: 'Blog ~ ' });
</script>

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