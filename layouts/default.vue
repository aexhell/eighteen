<template>
   <div class="overflow-hidden cursor-none w-full h-full">
      <img src="/gradient.svg" class="absolute z-10 opacity-40 top-0 right-0 h-full pointer-events-none select-none">
      <slot />
      <Cursor />
   </div>
</template>