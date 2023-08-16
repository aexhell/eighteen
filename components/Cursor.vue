<template>
   <div id="__EIGHTEEN-CURSOR" class="top-0 left-0 z-50 pointer-events-none md:block hidden select-none absolute">
      <div class="cursor-container border-black border border-solid transition-all" :class="{ 'p-[2px] rounded-full': !mousePressed, 'p-1 rounded-br-full rounded-tr-full rounded-bl-full': mousePressed, 'translate-y-px': mouseDown }">
         <div class="p-[3px] rounded-full" :class="{ 'bg-white border-black border-solid border mix-blend-difference': mousePressed, 'opacity-0': !mousePressed}"></div>
      </div>
   </div>
</template>

<script setup>
const route = useRouter();
const mousePressed = ref(false);
const mouseDown = ref(false);
const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.3; // between 0 and 1

onMounted(() => {
   const cursor = document.querySelector('#__EIGHTEEN-CURSOR');
   const selectors = 'button,.__EIGHTEEN-PROJECT,h1,h2,h3,h4,h5,h6,a,p,li';
   let button = document.querySelectorAll(selectors);

   console.log(route)

   route.beforeEach(() => {
      button = document.querySelectorAll(selectors);
      console.log(button);
   });

   const updateCoordinates = e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
   }

   const mouseOnDown = () => {
      mouseDown.value = !mouseDown.value;
   }

   const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);
            
      pos.x += diffX * speed;
      pos.y += diffY * speed;
         
      const translate = 'translate(' + pos.x + 'px ,' + pos.y + 'px)';
      cursor.style.transform = translate;

      for (var i = 0; i < button.length; i++) {
         button[i].addEventListener('mouseover', () => mousePressed.value = true);
         button[i].addEventListener('mouseleave', () => mousePressed.value = false);
      }
   }

   window.addEventListener('mousemove', updateCoordinates);
   window.addEventListener('mousedown', mouseOnDown);

   function loop() {
      updateCursor();
      requestAnimationFrame(loop);
   }

   requestAnimationFrame(loop); 
});
</script>
