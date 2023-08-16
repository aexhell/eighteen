<template>
   <div id="__EIGHTEEN-HOME" class="flex overflow-y-auto w-full h-full">
      <div class="md:w-1/2 md:px-24 w-full px-8">
         <h2 class="xl:text-6xl lg:my-0 lg:mb-8 lg:text-6xl md:text-5xl text-black dark:text-white text-3xl font-bold w-fit">Reach for the <span class="text-fill-stroke">moon</span>.</h2>
         <div id="__EIGHTEEN-HOME-CONTAINER" class="text-black dark:text-white">
            <p class="xl:text-lg w-fit">
               I am <code>aexhell</code>, a web developer creating new experiences for you. My pronouns are he/them but you can refer to me as a development team.
               Around 2014, I discovered GameMaker and started using it as a playground for coding. 
            </p>
            <p class="xl:text-lg w-fit">
               In 2018 I joined the <a href="https://fandom.com">Fandom</a> wiki platform, learning basic web stack (HTML, JS, CSS). By 2019-2020, I started using the <a href="https://vuejs.org">Vue.js</a> framework.
               In 2021 I started using <a href="https://nuxt.com">Nuxt.js</a>. In 2021 I updated my tech stack, using technologies as React, Svelte and PHP.
            </p>
            <p class="xl:text-lg w-fit">
               <nuxt-link to="/works">Wanna see my works?</nuxt-link>
            </p>
         </div>
      </div>
   </div>
</template>

<style>
html.dark span.dark\:text-stroke, .text-stroke {
   -webkit-text-stroke: 1px white;
   background: none
}

html.dark .dark\:text-fill-stroke, .text-fill-stroke {
   background: url("/gradient.svg");
   background-size: 300%;
   background-position: right;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
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
