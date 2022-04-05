import * as THREE from "three";

const scene = new THREE.Scene();

const playerCar = Car();

scene.add(playerCar);

//set up ligths

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirligth = new THREE.DirectionalLight(0xffffff, 0.6);
dirligth.position.set(100, -300, 400);
scene.add(dirligth);

//aspect ratio

const aspectRactio = window.innerWidth / window.innerHeight;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, //left
  cameraWidth / 2, //right
  cameraHeight / 2, //top
  cameraHeight / -2, //bottom
  0, //near plane
  100 //far plane
);

camera.position.set(200, -200, 300);
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

//set up the renderer

const renderer = new THREE.WebGL1Renderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);
