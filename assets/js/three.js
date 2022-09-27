const THREE = require("three");
//import * as THREE from "../../node_modules/three/src/Three";
//import { boxMesh } from "../../main";
const { boxMesh } = require("./node_modules/my-modules/boxesMesh");

// init

//camara
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  100
);
camera.position.set(20, -5, 30);

//escena

const scene = new THREE.Scene();

//probando boxmesh

let cajaGrilla = boxMesh(4, 4);
for (let i = 0; i < cajaGrilla.length; i++) {
  for (let j = 0; j < cajaGrilla[i].length; j++) {
    scene.add(cajaGrilla[i][j]);
    console.log(cajaGrilla[i][j]);
  }
}
//console.log(cajaGrilla);

/*
//caja

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshPhongMaterial();
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);
*/

//plano

const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshPhongMaterial({
  color: 0xffff00,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, 0, 0);
scene.add(plane);

//plano2
const plane2Geometry = new THREE.PlaneGeometry(1, 1);
const plane2Material = new THREE.MeshPhongMaterial({
  color: 0x00ffff,
});
const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
plane2.position.set(1, 1, 1);
scene.add(plane2);

//luz

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 0, 100);
scene.add(directionalLight);

//renderer

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setAnimationLoop(animation);
renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

/* 
// animation

function animation(time) {
  box.rotation.x = time / 2000;
  box.rotation.y = time / 1000;

  renderer.render(scene, camera);
}
*/
