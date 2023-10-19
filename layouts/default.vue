<template>
   <div class="w-full h-full">
      <Topbar />
      <img alt="Gradient background" src="/gradient.svg" class="absolute opacity-75 object-cover top-0 left-0 w-full h-full pointer-events-none select-none">
      <main role="main" class="w-full flex justify-center items-start h-auto relative z-10">
         <slot />
      </main>
   </div>
</template>
