<template>
   <div class="__EIGHTEEN-PROJECT z-20 py-20 md:mx-24 mx-8 rounded-lg relative shadow-xl bg-black/50 dark:bg-black/50 hover:backdrop-blur-sm hover:bg-black/75 dark:hover:bg-white/5 transition-all">
      <img :alt="`${data.title} Image`" class="__EIGHTEEN-PROJECT-IMAGE pointer-events-none rounded-lg select-none opacity-60 absolute transition-all top-0 left-0 object-cover w-full h-full" :src="`/projects/${data.code}.webp`" />
      <div class="__EIGHTEEN-PROJECT-TITLE absolute transition-all bottom-4 left-4 text-white">
         <h2 class="mt-0 mb-4 text-4xl transition-all" v-text="data.title" />
      </div>
      <div class="__EIGHTEEN-PROJECT-DETAILS absolute z-[-1] opacity-0 my-auto bottom-5 right-0 text-white">
         <div class="text-sm text-right">
            <div>
               <h3 class="my-0 text-sm uppercase font-bold">
                  Position
               </h3>
               {{ data.position || 'Contributor' }}
            </div>
            <div class="mt-4">
               <h3 class="my-0 text-sm uppercase font-bold">
                  Date
               </h3>
               {{ data.date }}
            </div>
         </div>
      </div>
   </div>
</template>

<style>
.__EIGHTEEN-PROJECT:hover .__EIGHTEEN-PROJECT-TITLE {
   @apply left-[40px]
}
.__EIGHTEEN-PROJECT:hover h2 {
   filter: drop-shadow(0px 0px 8px black)
}
</style>

<script>
export default {
   name: 'ProjectElem',
   props: [
      'data'
   ],
}
</script>