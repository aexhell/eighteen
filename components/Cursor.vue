<template>
   <div id="__EIGHTEEN-CURSOR" class="top-0 left-0 z-50 pointer-events-none overflow-hidden xl:block hidden select-none absolute">
      <div class="cursor-container bg-black/20 border p-[10px] border-solid transition-all" :class="{ 'animate-pulse border-white rounded-b-full rounded-r-full': mousePressed, 'border-white/50 rounded-full': !mousePressed }">
      </div>
   </div>
</template>

<script setup>
import { useMainStore } from '@/store/index';

const route = useRouter();
const store = useMainStore();
const mousePressed = ref(false);
const mouseDown = ref(false);
const mouse = { x: 0, y: 0 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.35; // between 0 and 1

onMounted(() => {
   const cursor = document.querySelector('#__EIGHTEEN-CURSOR');
   const main = document.getElementsByTagName('main')[0];
   const selectors = 'button,h1,h2,h3,h4,h5,h6,a,p,li,span,.clock-time,.__EIGHTEEN-PROJECT,svg,.__ENDLESS-VALLEY-TITLE,.AEXHELL-INTERACTION-COMPONENT';
   let button = document.querySelectorAll(selectors);

   const updateCoordinates = e => {
      mouse.x = e.clientX - 0;
      mouse.y = e.clientY - 0;

      store.updateCursor(mouse.x, mouse.y);
   }

   const mouseOnDown = () => {
      mouseDown.value = !mouseDown.value;
   }

   for (var i = 0; i < button.length; i++) {
      button[i].addEventListener('mouseover', () => mousePressed.value = true);
      button[i].addEventListener('mouseleave', () => mousePressed.value = false);
   }

   const updateCursor = () => {
      const diffX = Math.floor(mouse.x - pos.x);
      const diffY = Math.floor(mouse.y - pos.y);
            
      pos.x += diffX * speed;
      pos.y += diffY * speed;
         
      const translate = 'translate(' + pos.x + 'px ,' + pos.y + 'px)';
      cursor.style.transform = translate;

      if (button !== document.querySelectorAll(selectors)) {
         button = document.querySelectorAll(selectors);

         for (var i = 0; i < button.length; i++) {
            button[i].addEventListener('mouseover', () => mousePressed.value = true);
            button[i].addEventListener('mouseleave', () => mousePressed.value = false);
         }
      }
   }

   window.addEventListener('mousemove', updateCoordinates);
   window.addEventListener('mouseup', mouseOnDown);
   window.addEventListener('mousedown', mouseOnDown);
   // main.onwheel = mouseOnScroll;

   function loop() {
      updateCursor();
      requestAnimationFrame(loop);
   }

   function mouseOnScroll(e) {
      console.log(e)
      main.scrollBy(0, e.deltaY);
   }

   requestAnimationFrame(loop); 
});
</script>