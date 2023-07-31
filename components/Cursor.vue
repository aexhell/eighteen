<template>
   <div id="__EIGHTEEN-CURSOR" class="top-0 left-0 z-50 pointer-events-none md:block hidden select-none absolute">
      <div class="cursor-container rounded-full border-black border border-solid transition-all" :class="{ 'p-2': !mousePressed, 'p-1': mousePressed }">
         <div class="p-[3px] rounded-full" :class="{ 'bg-white border-black border-solid border mix-blend-difference': mousePressed, 'opacity-0': !mousePressed}"></div>
      </div>
   </div>
</template>

<script>
export default {
   data () {
      return {
         mousePressed: false,
      }
   },
   mounted () {
      const cursor = document.querySelector('#__EIGHTEEN-CURSOR');
      const cursorCircle = cursor.querySelector('#__EIGHTEEN-CURSOR div.cursor-container');
      const button = document.querySelectorAll('button,.__EIGHTEEN-PROJECT');

      const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
      const pos = { x: 0, y: 0 }; // cursor's coordinates
      const speed = 0.25; // between 0 and 1

      const updateCoordinates = e => {
         mouse.x = e.clientX;
         mouse.y = e.clientY;
      }

      window.addEventListener('mousemove', updateCoordinates);

      for (var i = 0; i < button.length; i++) {
         console.log(button)
         button[i].addEventListener('mouseover', () => this.mousePressed = true)
         button[i].addEventListener('mouseleave', () => this.mousePressed = false)
      }

      function getAngle(diffX, diffY) {
      return Math.atan2(diffY, diffX) * 180 / Math.PI;
      }

      function getSqueeze(diffX, diffY) {
      const distance = Math.sqrt(
         Math.pow(diffX, 2) + Math.pow(diffY, 2)
      );
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
      }


      const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);
      
      pos.x += diffX * speed;
      pos.y += diffY * speed;
      
      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);
      
      const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
      const translate = 'translate(' + pos.x + 'px ,' + pos.y + 'px)';

      cursor.style.transform = translate;
      cursorCircle.style.transform = scale;
      };

      function loop() {
         updateCursor();
         requestAnimationFrame(loop);
      }

      requestAnimationFrame(loop);

      const cursorModifiers = document.querySelectorAll('[cursor-class]');

      cursorModifiers.forEach(curosrModifier => {
      curosrModifier.addEventListener('mouseenter', function() {
         const className = this.getAttribute('cursor-class');
         cursor.classList.add(className);
      });
      
      curosrModifier.addEventListener('mouseleave', function() {
         const className = this.getAttribute('cursor-class');
         cursor.classList.remove(className);
      });
      });
   }
}
</script>