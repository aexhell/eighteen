<template>
   <div :class="{ 'relative mx-8': column, 'absolute': !column }" class="__EIGHTEEN-PROJECT z-50 lg:py-32 py-24 w-full h-auto rounded-lg shadow-xl bg-black/50 dark:bg-black/50 hover:backdrop-blur-[2px] hover:bg-black/40 dark:hover:bg-white/5 transition-all">
      <img :alt="`${data.title} Image`" class="__EIGHTEEN-PROJECT-IMAGE pointer-events-none rounded-lg select-none opacity-60 absolute transition-all top-0 left-0 object-cover w-full h-full" :src="`/projects/${data.code}.webp`" />
      <div class="__EIGHTEEN-PROJECT-TITLE absolute transition-all bottom-4 left-4 text-white">
         <p class="opacity-0 text-xs transition" v-text="data.description" />
         <h2 class="mt-0 mb-4 text-2xl transition-all" v-text="data.title" />
      </div>
      <div class="__EIGHTEEN-PROJECT-DETAILS absolute z-[-1] opacity-0 my-auto bottom-5 right-0 text-white">
         <div class="md:text-sm text-xs text-right">
            <div class="flex items-center justify-end">
               <div>
                  <h3 class="my-0 uppercase md:text-sm text-xs font-bold">
                     Tech stack
                  </h3>
                  {{ data.stack }}
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
               </svg>
            </div>
            <div class="md:mt-6 mt-2 flex items-center justify-end">
               <div>
                  <h3 class="my-0 uppercase md:text-sm text-xs font-bold">
                     Position
                  </h3>
                  {{ data.position }}
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
               </svg>
            </div>
            <div class="md:mt-6 mt-2 flex items-center justify-end">
               <div>
                  <h3 class="my-0 uppercase md:text-sm text-xs font-bold">
                     Date
                  </h3>
                  {{ data.date }}
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
               </svg>
            </div>
         </div>
      </div>
   </div>
</template>

<style>
.__EIGHTEEN-PROJECT:hover .__EIGHTEEN-PROJECT-TITLE {
   @apply md:left-[40px] left-[30px]
}

.__EIGHTEEN-PROJECT:hover .__EIGHTEEN-PROJECT-TITLE p {
   opacity: 1
}

.__EIGHTEEN-PROJECT:hover h2 {
   filter: drop-shadow(0px 0px 8px black)
}
</style>

<script>
export default {
   name: 'ProjectElem',
   props: [
      'data',
      'column'
   ],
}
</script>