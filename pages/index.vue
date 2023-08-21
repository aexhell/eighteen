<template>
   <div id="__EIGHTEEN-HOME" class="flex overflow-y-auto w-full h-full">
      <div class="lg:w-1/2 md:px-24 w-full px-8">
         <div class="relative lg:my-0 lg:mb-24 md:mb-28 mb-28 md:mt-6 mt-12 w-full">
            <Transition>
               <h2 :key="lang" class="xl:text-6xl absolute my-0 lg:text-6xl md:text-5xl text-black dark:text-white text-3xl font-bold w-auto" v-html="strs[lang]" />
            </Transition>
         </div>
         <div id="__EIGHTEEN-HOME-CONTAINER" class="text-black dark:text-white">
            <p class="xl:text-lg w-fit">
               I am <code>aexhell</code>, a web developer creating new experiences for you. My pronouns are he/them but you can refer to me as a development team.
               Around 2014, I discovered GameMaker and started using it as a playground for coding. 
            </p>
            <p class="xl:text-lg w-fit">
               In 2018 I joined the <a href="https://fandom.com">Fandom</a> wiki platform, learning basic web stack (HTML, JS, CSS). By 2019-2020, I started using the <a href="https://vuejs.org">Vue.js</a> framework.
               In 2021 I started using <a href="https://nuxt.com">Nuxt</a>. In 2022-2023 I updated my tech stack, using technologies as React, Svelte and PHP.
            </p>
            <p class="xl:text-lg w-fit">
               <nuxt-link to="/works">Wanna see my works?</nuxt-link>
            </p>
         </div>
      </div>
   </div>
</template>

<script setup>
useSeoMeta({ title: 'Home ~ ' });
</script>

<script>
export default {
   mounted () {
      setInterval(() => {
         if (this.lang === this.strs.length-1) this.lang = 0;
         else this.lang += 1;
      }, 2500);
   },
   data () {
      return {
         lang: 0,
         strs: ['Reach for the <span class="text-fill-stroke">moon</span>.', '伸手去够<span class="text-fill-stroke">月亮</span>。', '<span class="text-fill-stroke">月</span>に手を伸ばして。', '달에 도<span class="text-fill-stroke">달</span>.'],
      }
   }
}
</script>

<style>
html.dark span.dark\:text-stroke, .text-stroke {
   -webkit-text-stroke: 1px white;
   background: none
}

html.dark .dark\:text-fill-stroke, .text-fill-stroke {
   background: url("/gradient.svg");
   background-size: 300%;
   background-position: 100% 15%;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out
}

.v-enter-from {
   transform: translateX(-25%)
}

.v-leave-to {
   transform: translateX(25%)
}

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
