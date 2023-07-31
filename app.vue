<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default {
  mounted () {
    function animate() {
      requestAnimationFrame( animate );

      line.rotation.x += 0.0015;
      line.rotation.y += 0.0015;

      controls.update();
      renderer.render( scene, camera );
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0xcccccc, 1, 15 );
    const mouse = new THREE.Vector2();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 5, 100);
    const renderer = new THREE.WebGLRenderer( { alpha: true } );

    renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls( camera, renderer.domElement );
    camera.position.set( 1, 5, 25 );
    controls.update();

    const listener = new THREE.AudioListener();
    camera.add( listener );

    const w = 1920;
    const h = 1080;
    const fullWidth = w * 3;
    const fullHeight = h * 2;
  
    camera.setViewOffset( fullWidth, fullHeight, w * 0.5, h * 0.5, w, h );

    const sound = new THREE.Audio( listener );
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('/revelation.ogg', buffer => {
      sound.setBuffer( buffer );
      sound.setLoop( true );
      sound.setVolume( 0.5 );
      sound.play();
    });

    const geometry = new THREE.OctahedronGeometry( 10, 3, 100, 2 ); 
    const wireframe = new THREE.EdgesGeometry( geometry );
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: Math.floor(Math.random() * 0.5) } );
    const points = new THREE.Points(geometry, material);
    // scene.add( points );

    const line = new THREE.LineSegments( wireframe );
    line.material.depthTest = true;
    line.material.opacity = 0.2;
    line.material.transparent = true;
    scene.add(line);

    document.body.appendChild(renderer.domElement);
    renderer.domElement.classList.add('select-none');
    renderer.domElement.classList.add('pointer-events-none');
    renderer.domElement.classList.add('z-10');

    if (WebGL.isWebGLAvailable() ) {
      animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById( 'container' ).appendChild( warning );
    }
  }
}
</script>
