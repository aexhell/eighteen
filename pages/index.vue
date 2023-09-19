<template>
   <div id="__EIGHTEEN-HOME" class="flex overflow-y-auto overflow-x-hidden w-full h-full">
      <Transition mode="out-in">
         <div v-if="!aboutMe" class="md:px-24 w-full px-8" :class="{ 'absolute': aboutMe}">
            <div class="relative xl:mb-32 lg:mb-28 md:mb-28 sm:mb-32 mb-28 md:mt-4 mt-12 w-full">
               <Transition appear>
                  <h2 :key="lang" class="xl:text-7xl absolute my-0 lg:text-6xl text-black dark:text-white sm:text-5xl text-3xl font-bold w-fit" v-html="strs[lang]" />
               </Transition>
            </div>
            <div id="__EIGHTEEN-HOME-CONTAINER" class="lg:w-1/2 text-black dark:text-white">
               <p class="xl:text-lg w-fit">
                  I am <code>aexhell</code>, a web developer creating new experiences for you. My pronouns are he/them but you can refer to me as a development team.
                  Around 2014, I discovered GameMaker and started using it as a playground for coding. 
               </p>
               <p class="xl:text-lg w-fit">
                  In 2018 I joined the <a href="https://fandom.com">Fandom</a> wiki platform, learning basic web stack (HTML, JS, CSS). By 2019-2020, I started using the <a href="https://vuejs.org">Vue.js</a> framework.
                  In 2021 I started using <a href="https://nuxt.com">Nuxt</a>. In 2022-2023 I updated my tech stack, using technologies as React, Svelte and PHP.
               </p>
               <p v-if="false" class="xl:text-lg w-fit">
                  <button
                     class="rounded-lg flex items-center bg-white/20 text-black w-fit dark:text-white dark:bg-white/10 md:px-4 px-2 py-1 border border-solid border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 backdrop-blur-[2px] relative z-10 transition uppercase text-xs"
                     @click="aboutMe = !aboutMe"
                  >
                     Read more
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-black/50 dark:text-white/30 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                     </svg>
                  </button>
               </p>
               <p v-else class="xl:text-lg w-fit">
                  <nuxt-link
                     to="/works"
                     class="rounded-lg flex items-center bg-white/20 text-black w-fit dark:text-white dark:bg-white/5 hover:dark:bg-white/10 md:px-4 px-2 py-1 border border-solid border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 backdrop-blur-[2px] relative z-10 transition uppercase text-xs"
                  >
                     Wanna see my works?
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-black/50 dark:text-white/30 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                     </svg>
                  </nuxt-link>
               </p>
            </div>
         </div>
         <div v-else class="md:px-24 w-full px-8" :class="{ 'absolute': !aboutMe}">
            <button class="md:mt-4 mt-12" @click="aboutMe = !aboutMe">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </button>
            <div class="relative xl:mb-32 lg:mb-28 md:mb-28 sm:mb-32 mb-28 md:mt-4 mt-12 w-full">
               <h2 class="xl:text-7xl absolute my-0 lg:text-6xl text-black dark:text-white sm:text-5xl text-3xl font-bold w-fit">
                  I am <span class="text-fill-stroke">Aexhell</span>.
               </h2>
            </div>
            <div id="__EIGHTEEN-HOME-CONTAINER" class="lg:w-1/2 text-black dark:text-white">
               <p class="xl:text-lg w-fit">

               </p>
            </div>
         </div>
      </Transition>
   </div>
</template>

<script setup>
useSeoMeta({ title: 'Home ~ ' });
</script>

<script>
export default {
   mounted () {
      setInterval(() => {
         if (!this.aboutMe) {
            if (this.lang === this.strs.length-1) this.lang = 0;
            else this.lang += 1;
         }
      }, 2500);
   },
   data () {
      return {
         aboutMe: false,
         lang: 0,
         strs: ['Reach for the <span class="text-fill-stroke">moon</span>.', '伸手去够<span class="text-fill-stroke">月亮</span>。', 'Alcanza la <span class="text-fill-stroke">luna</span>.', '<span class="text-fill-stroke">月</span>に手を伸ばして。', '<span class="text-fill-stroke">달</span>에 도달하다.'],
      }
   }
}
</script>

<style>
html.dark span.dark\:text-stroke, .text-stroke {
   -webkit-text-stroke: 1px white;
   background: none
}

html.dark .dark\:text-fill-stroke, html.dark .text-fill-stroke {
   background-position: 100% 50%
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
