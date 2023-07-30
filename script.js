const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const flagWidth = 6;
const flagHeight = 4;

const geometry = new THREE.PlaneGeometry(flagWidth, flagHeight);
const saffronMaterial = new THREE.MeshBasicMaterial({ color: 0xFF9933 });
const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x138808 });

const saffronStripe = new THREE.Mesh(geometry, saffronMaterial);
saffronStripe.position.z = -0.01;
scene.add(saffronStripe);

const whiteStripe = new THREE.Mesh(geometry, whiteMaterial);
scene.add(whiteStripe);

const greenStripe = new THREE.Mesh(geometry, greenMaterial);
greenStripe.position.z = 0.01;
scene.add(greenStripe);

const chakraRadius = 0.6;
const chakraGeometry = new THREE.CircleGeometry(chakraRadius, 32);
const chakraColor = 0x0000FF;
const chakraMaterial = new THREE.MeshBasicMaterial({ color: chakraColor });
const chakra = new THREE.Mesh(chakraGeometry, chakraMaterial);
scene.add(chakra);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);

  // Waving effect (rotating stripes)
  saffronStripe.rotation.z += 0.005;
  whiteStripe.rotation.z += 0.005;
  greenStripe.rotation.z += 0.005;

  renderer.render(scene, camera);
};

animate();
