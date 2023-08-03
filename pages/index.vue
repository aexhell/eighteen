<template>
   <div id="__EIGHTEEN_LANDING" class="md:w-2/5 flex overflow-y-auto w-full h-full">
      <img class="m-auto dark:text-white text-black" src="/logo.svg">
   </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out
}

.page-enter-from {
   transform: translateY(100%)
}

.page-leave-to {
   transform: translateY(100%)
}

.page-enter-from,
.page-leave-to {
   opacity: 0
}

span.text-fill-stroke {
   background: url("/gradient.svg");
   background-size: 200%;
   background-position: right;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}
</style>
