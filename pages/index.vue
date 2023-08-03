<template>
   <div id="__EIGHTEEN_LANDING" class="md:w-2/5 flex overflow-y-auto w-full h-full">
      <svg class="m-auto dark:text-white w-24 h-24 md:shadow-light text-black"  width="180" height="208" viewBox="0 0 180 208" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 0H53L89 58.24L127 0H180L164 24.96H127L91 83.2H89L53 24.96H16L0 0Z" fill="currentColor"/>
         <path d="M16 49.92H54L89 108.16H91L127 49.92H164L129 104L180 183.04H164L129 128.96L121 141.44L164 208H127L91 149.76H89L52 208H16L59 141.44L51 128.96L16 183.04H0L51 104L16 49.92Z" fill="currentColor"/>
      </svg>
   </div>
</template>

<style>
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
