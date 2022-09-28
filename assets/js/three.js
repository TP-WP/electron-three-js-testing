const THREE = require("three");
const {
  FlyControls,
} = require("./node_modules/three/examples/js/controls/FlyControls");
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

//rotating camera tryouts
//FlyControls
controls = new THREE.FlyControls(camera, renderer.domElement);
controls.movementSpeed = 100;
controls.rollSpeed = Math.PI / 24;
controls.autoForward = false;
controls.dragToLook = true;

//escena

const scene = new THREE.Scene();

//probando boxmesh

let cajaGrilla = boxMesh(4, 4);
for (let i = 0; i < cajaGrilla.length; i++) {
  for (let j = 0; j < cajaGrilla[i].length; j++) {
    scene.add(cajaGrilla[i][j]);
  }
}

//plano

const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshPhongMaterial({
  color: 0xffff00,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, 0, 0);
scene.add(plane);

//plano2 para marcar el centro
const plane2Geometry = new THREE.PlaneGeometry(1, 1);
const plane2Material = new THREE.MeshPhongMaterial({
  color: 0x00ffff,
});
const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
plane2.position.set(1, 1, 1);
scene.add(plane2);

//luz

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 0, 10);
scene.add(directionalLight);

//renderer

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setAnimationLoop(animation);
//renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

// animation

function animation(time) {
  //rotating cubes; will be deleted
  for (let i = 0; i < cajaGrilla.length; i++) {
    for (let j = 0; j < cajaGrilla[i].length; j++) {
      cajaGrilla[i][j].rotation.x = time / 2000;
      cajaGrilla[i][j].rotation.y = time / 1000;
    }
  }
  //updating camera
  controls.update(0.01);
  renderer.render(scene, camera);
}
