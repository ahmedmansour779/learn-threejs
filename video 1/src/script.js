import * as dat from 'dat.gui';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import stars from "./img/stars.jpg";

console.log(stars);


const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

// renderer.domElement.style.backgroundColor = "#f00"
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,                                     // fov
    window.innerWidth / window.innerHeight, // aspect
    0.1,                                    // near
    1000                                    // far
);

const orbit = new OrbitControls(camera, renderer.domElement)

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper)

// camera.position.z = 5
// camera.position.y = 2
// camera.position.x = 2
// another way 
camera.position.set(-10, 30, 30)

orbit.enableDamping = true;

const boxGeometry = new THREE.BoxGeometry(5, 5, 5);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.y = 2.51;
box.position.x = 2.5;
box.position.z = 2.5;
scene.add(box);

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI
plane.receiveShadow = true;

const sphereGeometry = new THREE.SphereGeometry(2.5, 100, 100);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x0000ff,
    wireframe: false
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)
sphere.position.set(8, 2.5, 2.5)
sphere.castShadow = true;

const ambientLight = new THREE.AmbientLight(0x555555);
scene.add(ambientLight)

// const directionLight = new THREE.DirectionalLight(0xffffff, 0.8);
// scene.add(directionLight)
// directionLight.position.set(30, 50, 0)
// directionLight.castShadow = true;
// directionLight.shadow.camera.bottom = -12;

// // The third type is spotLight

// const dLightHelper = new THREE.DirectionalLightHelper(directionLight, 5)
// scene.add(dLightHelper)

// const dLightShadowHelper = new THREE.CameraHelper(directionLight.shadow.camera)
// scene.add(dLightShadowHelper)

const spotLight = new THREE.SpotLight(0xFFFFFF, 200);
scene.add(spotLight)
spotLight.position.set(20, 20, 0)
// spotLight.target = sphere;
// scene.add(spotLight.target);
spotLight.castShadow = true;
spotLight.angle = Math.PI / 6;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
spotLight.shadow.radius = 4;
spotLight.penumbra = 0.5;
spotLight.shadow.bias = -0.0001;

const sLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(sLightHelper)

// scene.fog = new THREE.Fog(0xFFFFFF, 0, 200)
// scene.fog = new THREE.FogExp2(0xFFFFFF, 0.01)

// renderer.setClearColor(0xFFEA00)

// this lines


const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load(stars);
// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
//     nebula,
//     nebula,
//     stars,
//     stars,
//     stars,
//     stars
// ]);

// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
//     stars,
//     nebula,
//     stars,
//     nebula,
//     stars,
//     nebula,
// ])

const gui = new dat.GUI();
const options = {
    sphereColor: '#ffea00',
    wireframe: false,
    speed: 0.01,
    angle: 0.2,
    penumbra: 0.5,
    intensity: 50
}
gui.addColor(options, 'sphereColor').onChange(function (e) {
    sphere.material.color.set(e)
})
gui.add(options, 'wireframe').onChange(function (e) {
    sphere.material.wireframe = e
})
gui.add(options, 'speed', 0, 0.1)
gui.add(options, 'angle', 0, 1)
gui.add(options, 'penumbra', 0, 1)
gui.add(options, 'intensity', 0, 300)

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

let step = 0;
// let speed = 0.01;

function animate(time) {
    orbit.update();

    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;

    step += options.speed;
    sphere.position.y = 2.5 + 2.5 * Math.abs(Math.sin(step))

    spotLight.angle = options.angle;
    spotLight.penumbra = options.penumbra;
    spotLight.intensity = options.intensity;
    sLightHelper.update()

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate)