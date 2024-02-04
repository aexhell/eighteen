<template>
   <div id="__ENDLESSVALLEY-HOME" class="w-full h-full relative flex">
      <img class="w-2/5 h-2/5 m-auto" src="/logo.svg">
   </div>
</template>

<script setup>
useSeoMeta({ title: null });
</script>

<style>
.transition-op-w {
   transition-property: width, opacity, margin;
}
</style>

<script>
export default {
   data () {
      return {
         active: 0,
         projects: [
            {
               code: 'puroto',
               title: 'Puroto',
               position: 'Front-end',
               description: 'Social media for furries.',
               link: '/works/puroto',
               customtext: false,
               enabled: true
            },
            {
               code: 'mylium',
               title: 'Mylium',
               position: 'Founder',
               description: 'Connecting people with you.',
               link: '/works/mylium',
               customtext: false,
               enabled: true
            }
         ]
      }
   }
}
</script>

<style>
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
