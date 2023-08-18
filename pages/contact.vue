<template>
   <div id="__EIGHTEEN-CONTACT" class="flex overflow-y-auto w-full h-full">
      <div class="md:w-1/2 md:px-24 w-full px-8">
         <h2 class="xl:text-6xl lg:my-0 lg:mb-8 lg:text-6xl md:text-5xl text-black dark:text-white text-3xl font-bold w-fit">Send your <span class="text-fill-stroke">signal</span>.</h2>
         <div id="__EIGHTEEN-CONTACT-CONTAINER" class="text-black dark:text-white">
            <p class="xl:text-lg">
               You may contact me using the following methods:
            </p>
            <ul class="list-none px-0" id="__EIGHTEEN-CONTACT-METHODS">
               <li v-for="method of methods" :key="method.code" class="flex items-center mb-2">
                  <div v-if="method.icon" v-html="method.icon"></div>
                  <span v-if="!method.icon">{{ method.title }}: </span>
                  <a v-if="method.href" :href="method.href">{{ method.content }}</a>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script setup>
useSeoMeta({ title: 'Contact ~ ' });
</script>

<script>
export default {
   data () {
      return {
         methods: [
            {
               code: 'email',
               icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 text-black dark:text-white align-middle"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>',
               title: 'Email',
               content: 'aexhell@gmail.com',
               href: 'mailto:aexhell@gmail.com'
            },
            {
               code: 'github',
               icon: '<svg class="w-6 h-6 mr-2 text-black dark:text-white align-middle" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24" fill="none"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
               title: 'GitHub',
               content: '@aexhell',
               href: 'https://github.com/aexhell'
            },
            {
               code: 'polywork',
               icon: '<svg class="w-6 h-6 mr-2 text-black dark:text-white align-middle" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.125 0H4.875A4.865 4.865 0 0 0 0 4.875v14.25C0 21.825 2.175 24 4.875 24h6.6c2.7 0 4.875-2.175 4.875-4.875V16.65h2.775c2.7 0 4.875-2.175 4.875-4.875v-6.9C24 2.175 21.825 0 19.125 0zM16.5 1.275h2.625a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.075 9v6.45H8.85V9h6.225zM8.85 1.2h6.225v6.375H8.85V1.2zM1.275 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.375H1.275V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.725H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.925zm7.575-3.525a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.925h6.225V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.225v2.85z" fill="currentColor" /></svg>',
               title: 'Polywork',
               content: '@aexhell',
               href: 'https://polywork.com/aexhell'
            }
         ]
      }
   }
}
</script>