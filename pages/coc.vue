<template>
   <div id="__EIGHTEEN-COC" class="flex flex-col overflow-hidden md:w-1/2 w-full md:px-auto px-12 justify-start">
      <h2 class="xl:text-7xl my-4 lg:text-6xl text-white text-5xl font-bold w-fit">Code of Conduct</h2>
      <div id="__EIGHTEEN-COC-CONTAINER" class="text-white flex flex-col gap-2 pb-12 w-full">
         <div id ="__EIGHTEEN-COC-PRELUDE">
            <h3 class="xl:text-4xl my-4 lg:text-3xl text-white text-2xl font-bold w-fit">Prelude</h3>
            <p class="xl:text-lg lg:text-md text-lg">
               Welcome to Aexhell! To be sure you can have a cordial and clear communication with me, you are required to agree to the following points and rules in order to request my services as a developer.
               Any attempt to contact me for business matters that does <b>not</b> follow these instructions will be ignored.
            </p>
         </div>
         <hr class="w-full">
         <div id ="__EIGHTEEN-COC-ONE">
            <h3 class="xl:text-4xl my-4 lg:text-3xl text-white text-2xl font-bold w-fit">1. Project Type</h3>
            <p class="xl:text-lg lg:text-md text-lg">
               As Aexhell is <span class="underline">not a development team</span>, any type of offer to carry out a <i>relatively large</i> scale project, see social networks or any type of web/mobile application that requires full-stack knowledge,
               <b>will be rejected</b>. It must be clarified that this does not apply to any type of small project together with a team as a whole. Aexhell may accept project offers as a volunteer.
            </p>
         </div>
         <div id ="__EIGHTEEN-COC-TWO">
            <h3 class="xl:text-4xl my-4 lg:text-3xl text-white text-2xl font-bold w-fit">2. Contributions</h3>
            <p class="xl:text-lg lg:text-md text-lg">
               Aexhell will <b>not</b> accept formal job offers where it is required to sign legal agreements.
               Exceptions are made to offers where only the signing of <a href="https://en.wikipedia.org/wiki/Non-disclosure_agreement">NDAs</a> is required.
               Aexhell contributions must be made through the <a href="https://git-scm.com/">Git</a> system, preferably <a href="https://github.com/">GitHub</a>.
            </p>
         </div>
         <div id ="__EIGHTEEN-COC-THREE">
            <h3 class="xl:text-4xl my-4 lg:text-3xl text-white text-2xl font-bold w-fit">3. Language</h3>
            <p class="xl:text-lg lg:text-md text-lg">
               Communications between Aexhell must be made on English or Spanish, preferably Spanish. Any job offer that requires the use or communication of any other language will be rejected.
            </p>
         </div>
         <div id ="__EIGHTEEN-COC-FOUR">
            <h3 class="xl:text-4xl my-4 lg:text-3xl text-white text-2xl font-bold w-fit">4. Payment</h3>
            <p class="xl:text-lg lg:text-md text-lg">
               As of now, payments must be made through PayPal, PaySafeCard and, in extremely rare cases, bank transfer. As specified in point one, volunteer projects are <span class="underline">free</span>.
            </p>
         </div>
         <div id ="__EIGHTEEN-COC-FIVE">
            <h3 class="xl:text-4xl my-4 lg:text-3xl text-white text-2xl font-bold w-fit">5. Tech Stack</h3>
            <p class="xl:text-lg lg:text-md text-lg">
               Depending on the project type, Aexhell accepts web frameworks such as <a href="https://nuxt.com/">Nuxt (2/3)</a>, <a href="https//vue.js.org/">Vue</a>, <a href="https://react.dev/">React</a> (<a href="https://reactnative.dev">Native</a> included) and PHP (<a href="https://www.codeigniter.com/user_guide/intro/index.html">CodeIgniter 4</a>). Any other technologies (such as Angular, Svelte, etc.) will be rejected.
            </p>
         </div>
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
