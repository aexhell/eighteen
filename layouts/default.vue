<template>
   <div class="w-full h-full">
      <Topbar />
      <img alt="Gradient background" src="/gradient.svg" class="absolute opacity-40 top-0 right-0 h-full pointer-events-none select-none">
      <main role="main" class="w-full flex h-auto relative z-10">
         <slot />
      </main>
      <Cursor v-if="htmlElement" />
   </div>
</template>

<script>
export default {
   data () {
      return {
         htmlElement: false
      }
   },
   mounted () {
      var e = document.querySelector('html');
      var observer = new MutationObserver(event => {
         this.htmlElement = document.querySelector("html").classList.contains('cursor-enabled');
      });

      observer.observe(e, {
         attributes: true, 
         attributeFilter: ['class'],
         childList: false, 
         characterData: false
      });
   }
}
</script>
