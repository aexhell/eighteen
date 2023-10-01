<template>
   <div id="__EIGHTEEN-BLOG" class="flex flex-col overflow-hidden md:w-1/2 w-full md:px-auto px-12 justify-start">
      <h2 class="xl:text-7xl my-4 lg:text-6xl text-white text-5xl font-bold w-fit">Blogs</h2>
      <div id="__EIGHTEEN-BLOG-CONTAINER" class="text-white">
         <ul v-if="!true" class="list-none flex-wrap flex gap-4 px-0" id="__EIGHTEEN-BLOGS">
            <nuxt-link v-for="blog of blogs" :key="blog.code" :to="`/blog/${blog.code}`" class="text-white no-underline w-full bg-white/5 hover:bg-white/10 border border-solid border-white/20 hover:border-white/40 transition rounded-lg p-12">
               <div class="mb-8 w-fit">
                  <h3 class="font-bold text-3xl mt-0 mb-2" v-text="blog.title" />
                  <div class="flex items-center relative">
                     <img class="w-6 rounded-full absolute opacity-50" :src="`/${blog.author}.png`">
                     <span class="z-10 text-sm ml-4" v-text="`${blog.author}  •  ${blog.date}`" />
                  </div>
               </div>
               <p class="m-0" v-if="blog.content">{{ blog.content }}</p>
            </nuxt-link>
         </ul>
         <p class="my-8 xl:text-lg lg:text-md text-lg">No blogs currently available. <nuxt-link to="/">Return to Home.</nuxt-link></p>
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
         blogs: [
            {
               code: 1,
               author: 'aexhell',
               date: 'October 1st, 2023',
               title: 'Choices on web UX/UI',
               content: 'My thoughts about the process of creating an user interface on your website.',
            }
         ]
      }
   }
}
</script>