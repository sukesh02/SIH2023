// import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// Load the glTF model
const loader = new THREE.GLTFLoader();
loader.load('moon.glb', (gltf) => {
    const model = gltf.scene;
    model.position.set(0, 0, 0);
    scene.add(model);

    // Calculate the center of the model
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());

    // Move the model to the center of the scene
    model.position.sub(center);
});

// Add some lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Add an animation loop
const animate = () => {
    requestAnimationFrame(animate);
    // Add any animations or interactions here
    renderer.render(scene, camera);
};
animate();

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// var scene, camera, renderer, controls;

// function init() {
//   // Create the scene
//   scene = new THREE.Scene();

//   // Create the camera
//   camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//   camera.position.set(0, 0, 10);

//   // Create the renderer and add it to the DOM
//   renderer = new THREE.WebGLRenderer({antialias: true});
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   // Create the OrbitControls
//   controls = new OrbitControls(camera, renderer.domElement);
//   controls.enableDamping = true;
//   controls.target.set(0, 0, 0);
//   controls.update();

//   // Load the model
//   var loader = new THREE.GLTFLoader();
//   loader.load(
//     "moon.glb",
//     function ( gltf ) {
//       var model = gltf.scene.children[0];
//       model.position.set(0, 0, 0);
//       scene.add(model);
//       animate();
//     },
//   );
// }

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// window.addEventListener('resize', onWindowResize, false);
// window.onload = init;

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }