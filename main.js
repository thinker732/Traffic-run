import * as THREE from "three";

const scene = new THREE.Scene();

const playerCar = Car();

scene.add(playerCar);

//set up ligths

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirligth = new THREE.DirectionalLight(0xffffff, 0.6);
dirligth.position.set(100, -300, 400);
