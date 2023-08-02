<template>
   <div class="__EIGHTEEN-PROJECT z-20 py-24 mx-12 rounded-lg relative shadow-xl bg-black/50 hover:bg-white transition">
      <img :alt="`${data.title} Image`" class="pointer-events-none rounded-lg select-none opacity-75 hover:opacity-0 absolute transition-all top-0 left-0 object-cover w-full h-full" :src="`/projects/${data.code}.webp`" />
      <div class="__EIGHTEEN-PROJECT-DETAILS transition-all duration-500 absolute text-white left-6" :class="{ '__EIGHTEEN-PROJECT-NODESCR bottom-5': !data.description, 'bottom-0': data.description }">
         <span class="text-xs border-t border-white md:border-solid border-x-0 border-b-0 pt-2 my-0 font-medium uppercase" v-text="data.position || 'Contributor'" />
         <h2 class="mt-0 mb-4" v-text="data.title" />
         <p v-if="data.description" class="text-sm opacity-0 my-0 transition" v-text="data.description || 'Description'" />
      </div>
   </div>
</template>

<style>
.__EIGHTEEN-PROJECT-DETAILS span {
   transition: 0.25s border ease-in-out
}

.__EIGHTEEN-PROJECT:hover img {
   opacity: 0.2
}

.__EIGHTEEN-PROJECT:hover .__EIGHTEEN-PROJECT-DETAILS {
   @apply opacity-100 text-black md:text-white md:mix-blend-exclusion bottom-10
}

.__EIGHTEEN-PROJECT:hover .__EIGHTEEN-PROJECT-NODESCR {
   @apply md:left-[-40px] bottom-5
}

.__EIGHTEEN-PROJECT:hover .__EIGHTEEN-PROJECT-DETAILS p {
   @apply opacity-100 transition
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