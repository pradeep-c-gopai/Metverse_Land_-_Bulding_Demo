//0x5eBB1efCDaF599b6e7F6d7737DeaC4c3cC089407
//Contract Address on Polygon mumbai test network

import keyInput from "./keyInput.js";

import connect from "./Connect.js";

const ratio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();

scene.background = new THREE.Color( 0xa9f1f5);

const camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x404040);

const dlight = new THREE.DirectionalLight(0xfadcc5, 0.5);

light.add(dlight);

scene.add(light);

const geomerty = new THREE.BoxGeometry(50, 0.1, 50);

const material = new THREE.MeshPhongMaterial({ color: 0xc3d3db });

const ground = new THREE.Mesh(geomerty, material);

scene.add(ground);

camera.position.set(0, 15, 30);

function animate() {

	requestAnimationFrame(animate);

	//Checks for '^' key (Up key) pressed																									p
	if (keyInput.isPressed(38) && camera.position.y <= 20) {

		camera.position.y += 0.05;

	}

	//Checks for 'v' key (Down key) pressed																									r
	if (keyInput.isPressed(40) && camera.position.y >= 3) {

		camera.position.y -= 0.05;

	}

	//Checks for '>' key (Right key) pressed																								a
	if (keyInput.isPressed(39)) {

		camera.position.x += 0.05;

	}

	//Checks for '<' key (Left key) pressed																									d
	if (keyInput.isPressed(37)) {

		camera.position.x -= 0.05;

	}

	//Checks for '^' && 'ctrl' key pressed																									e
	if (keyInput.isPressed(38) && keyInput.isPressed(17)) {
		
		camera.position.z -= 0.05;

	}

	//Checks for 'v' && 'ctrl' key pressed																									e
	if (keyInput.isPressed(40) && keyInput.isPressed(17)) {

		camera.position.z  += 0.05;

	}

	camera.lookAt(ground.position);

	renderer.render(scene, camera);

}

animate();

connect.then((result) => {

	console.log(result);

	result.buildings.forEach((b, index) => {

		if (index <= result.supply) {

			const boxgeomerty = new THREE.BoxGeometry(b.w,b.h,b.d);

			const boxmaterial = new THREE.MeshPhongMaterial({ color: 0x898d8f });

			const box = new THREE.Mesh(boxgeomerty, boxmaterial);

			box.position.set(b.x,b.y,b.z);

			scene.add(box);
			
		}

	});

});