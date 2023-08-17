<template>
   <axhl-carousel class="w-full relative h-full flex">
      <div id="__EIGHTEEN-CAROUSEL-CONTROLLER">
         <button id="__EIGHTEEN-CAROUSEL-RIGHT" class="right-[-40px] bg-transparent absolute h-full flex z-80" @click="forward">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rounded-full flex text-black dark:text-white cursor-pointer m-auto">
               <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
         </button>
         <button id="__EIGHTEEN-CAROUSEL-LEFT" class="left-[-40px] bg-transparent absolute h-full flex my-auto z-80" @click="back">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rounded-full flex text-black dark:text-white cursor-pointer m-auto">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
         </button>
      </div>
      <Transition>
         <Project :data="data[current]" />
      </Transition>
   </axhl-carousel>
</template>

<script>
export default {
   name: 'Carousel',
   methods: {
      forward () {
         if (this.current === this.data.length-1) this.current = 0;
         else this.current += 1;
      },
      back () {
         if (this.current === 0) this.current = this.data.length-1;
         else this.current -= 1;
      }
   },
   data () {
      return {
         current: 0,
         prev: 0
      }
   },
   props: [
      'data'
   ],
}
</script>