<template>
   <div id="AEXHELL-CONTENT" class="w-full h-full box-border md:p-10 relative overflow-hidden">
      <div class="absolute xl:flex hidden left-0 px-0 top-0 w-12 h-full justify-center items-start py-[0.7rem]">
         <nuxt-link to="/">
            <img class="w-5 h-5" src="/logo.svg">
         </nuxt-link>
      </div>
      <img style="z-index: 1" alt="Gradient background" src="/gradient.svg" class="fixed animate-pulse-slow object-cover top-0 left-0 w-full h-full pointer-events-none select-none">
      <main role="main" :class="{ 'opacity-100': loaded }" class="w-full xl:overflow-clip overflow-y-auto opacity-0 duration-700 transition-opacity md:border md:flex-row flex-col flex items-center border-solid border-black h-full relative z-30">
         <Transition>
            <h1 id="AEXHELL-TITLE" :class="{ 'opacity-100': loaded }" class="opacity-0 duration-700 transition-opacity pointer-events-none select-none xl:block hidden font-regular uppercase absolute left-[-3rem]" v-text="currentRoute" />
         </Transition>
         <div class="xl:w-1/2 xl:px-48 xl:py-24 p-8">
            <h2 class="xl:hidden uppercase font-regular lg:text-8xl sm:text-6xl text-4xl mt-0 mb-4">
               Aexhell
            </h2>
            <p class="uppercase font-bold">
               Web Developer & UX Designer
            </p>
            <p class="xl:text-md sm:text-sm text-xs xl:leading-6 pr-8 my-0 uppercase">
               Digital architect weaving the virtual tapestry of the internet, fabricating immersive online experiences.
            </p>
            <div class="mt-4">
               <div class="mb-2" v-for="item of menu" :key="item.link">
                  <nuxt-link class="font-serif font-medium uppercase text-4xl" :to="item.link">{{ item.text }}</nuxt-link>
               </div>
            </div>
         </div>
         <div class="xl:w-full w-auto lg:pr-12 px-8">
            <slot />
         </div>
      </main>
   </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<script setup>
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const loaded = ref(false);
const route = useRoute();
const currentRoute = ref('');
const menu = ref([
   {
      text: "About",
      link: "/about"
   },
   {
      text: "Works",
      link: "/works"
   },
]);

watch(() => route.fullPath, () => {
   switch(route.fullPath) {
      case "/works":
         currentRoute.value = "Works";
         break;
      case "/about":
         currentRoute.value = "About";
         break;
      default:
         currentRoute.value = "Aexhell";
         break;
      }
   },
);

onMounted(() => {
   switch(route.fullPath) {
      case "/works":
         currentRoute.value = "Works";
         break;
      case "/about":
         currentRoute.value = "About";
         break;
      default:
         currentRoute.value = "Aexhell";
         break;
   }

   const h1 = document.getElementById("AEXHELL-TITLE");
   const main = document.getElementsByTagName("main");

   h1.style.width = `${main[0].clientHeight}px`;
   h1.style.fontSize = `${main[0].clientHeight / 4.5}px`;

   /* Pa otra ocasión tal vez
   const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 );
   const renderer = new THREE.WebGLRenderer({ alpha: true });
   renderer.setSize( window.innerWidth, window.innerHeight );
   document.body.appendChild( renderer.domElement );

   const geometry = new THREE.TorusKnotGeometry(8, 0.2, 58, 20, 18, 25);
   const wireframe = new THREE.WireframeGeometry(geometry);
   const line = new THREE.LineSegments(wireframe);
   line.material.depthTest = false;
   line.material.opacity = 0;
   line.material.color = 0x000000;
   line.material.transparent = true;
   scene.add(line);

   camera.position.y = 1;
   camera.position.z = 5;
   line.rotation.x = 0.15;
   line.position.x = 7;

   window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
   };

   if (WebGL.isWebGLAvailable() && !window.mobileCheck() false) {
      animate();
   }

   function animate() {
      requestAnimationFrame(animate);

      line.rotation.x += 0.0015;
      line.rotation.y += 0.0015;

      if (line.material.opacity < 0.05) line.material.opacity += 0.0005;

      renderer.render(scene, camera);
   }*/

   function onWindowResize() {
      // camera.aspect = window.innerWidth / window.innerHeight;
      // camera.updateProjectionMatrix();

      const h1 = document.getElementById("AEXHELL-TITLE");
      const main = document.getElementsByTagName("main");
      h1.style.width = `${main[0].clientHeight}px`;
      h1.style.fontSize = `${main[0].clientHeight / 4.5}px`;

      // renderer.setSize(window.innerWidth, window.innerHeight);
   }

   window.addEventListener('resize', onWindowResize);
   loaded.value = true;
});
</script>