<template>
   <div id="AXHL-CAROUSEL" class="w-full relative h-full">
      <div id="__ENDLESSVALLEY-CAROUSEL-CONTROLLER" class="w-full h-full absolute bottom-0">
         <button id="__ENDLESSVALLEY-CAROUSEL-RIGHT" class="right-[-40px] bottom-0 bg-transparent absolute h-full flex z-80" @click="forward">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rounded-full flex text-white cursor-pointer m-auto">
               <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
         </button>
         <button id="__ENDLESSVALLEY-CAROUSEL-LEFT" class="left-[-40px] bottom-0 bg-transparent absolute h-full flex my-auto z-80" @click="back">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rounded-full flex text-white cursor-pointer m-auto">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
         </button>
      </div>
      <div class="w-full h-full relative">
         <Transition :name="`carousel${pressed}`">
            <Project :key="current" :data="data[current]" />
         </Transition>
      </div>
   </div>
</template>

<style>
.carousel-enter-active,
.carousel-leave-active,
.carousel-back-enter-active,
.carousel-back-leave-active {
   width: 100%;
   transition: all 0.3s ease-in-out
}

.carousel-enter-from,
.carousel-leave-to,
.carousel-back-enter-from,
.carousel-back-leave-to {
   opacity: 1
}

.carousel-enter-from {
   transform: translateX(-200%)
}

.carousel-leave-to {
   transform: translateX(200%)
}

.carousel-back-enter-from {
   transform: translateX(200%)
}

.carousel-back-leave-to {
   transform: translateX(-200%)
}
</style>

<script>
export default {
   name: 'Carousel',
   methods: {
      forward () {
         this.pressed = '-back';

         if (this.current === this.data.length-1) this.current = 0;
         else this.current += 1;
      },
      back () {
         this.pressed = '';

         if (this.current === 0) this.current = this.data.length-1;
         else this.current -= 1;
      }
   },
   mounted () {
      let size = document.getElementsByClassName('__ENDLESSVALLEY-PROJECT-IMAGE');
      if (size.length) this.size = size[0].clientHeight;

      document.addEventListener("keydown", (e) => {
         if (e.keyCode === 37) {
            this.back();
         }
         else if (e.keyCode === 39) {
            this.forward();
         }
      }, false);
   },
   data () {
      return {
         pressed: '',
         current: 0,
         prev: 0,
         size: 0
      }
   },
   props: [
      'data'
   ],
}
</script>