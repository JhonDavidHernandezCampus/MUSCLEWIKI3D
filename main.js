import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const ambientLight = new THREE.AmbientLight(0xffffff, 10) //Color blanco
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 10) //Color blanco
directionalLight.position.set(5,10,7.5);
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


let model

const loader = new GLTFLoader();
loader.load('/Laptop.glb', (gltf) => {
    model = gltf.scene;
    scene.add(model);
})

camera.position.z = 5;

function animate() {
	renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
renderer.setAnimationLoop( animate );