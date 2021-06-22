
function Skybox(scene, height) {
	
	    var cubeMaterials = [];
	
	    storageRef.child('corona_ft.png').getDownloadURL()
		.then((url) => {
		 cubeMaterials[0] = new THREE.MeshBasicMaterial({ map: textureLoader.load(`${url}`), side: THREE.DoubleSide }); 
		})
		.catch((error) => {
		    console.log(error);
		});
	     storageRef.child('corona_bk.png').getDownloadURL()
		.then((url) => {
		 cubeMaterials[1] = new THREE.MeshBasicMaterial({ map: textureLoader.load(`${url}`), side: THREE.DoubleSide }); 
		})
		.catch((error) => {
		    console.log(error);
		});
	     storageRef.child('corona_up.png').getDownloadURL()
		.then((url) => {
		 cubeMaterials[2] = new THREE.MeshBasicMaterial({ map: textureLoader.load(`${url}`), side: THREE.DoubleSide }); 
		})
		.catch((error) => {
		    console.log(error);
		});
	     storageRef.child('corona_dn.png').getDownloadURL()
		.then((url) => {
		 cubeMaterials[3] = new THREE.MeshBasicMaterial({ map: textureLoader.load(`${url}`), side: THREE.DoubleSide }); 
		})
		.catch((error) => {
		    console.log(error);
		});
	      storageRef.child('corona_rt.png').getDownloadURL()
		.then((url) => {
		 cubeMaterials[4] = new THREE.MeshBasicMaterial({ map: textureLoader.load(`${url}`), side: THREE.DoubleSide }); 
		})
		.catch((error) => {
		    console.log(error);
		});
	      storageRef.child('corona_lf.png').getDownloadURL()
		.then((url) => {
		 cubeMaterials[5] = new THREE.MeshBasicMaterial({ map: textureLoader.load(`${url}`), side: THREE.DoubleSide }); 
		})
		.catch((error) => {
		    console.log(error);
		});


	const textureLoader = new THREE.TextureLoader()

	var geometry = new THREE.CubeGeometry(3000, 3000, 3000)

	var material = new THREE.MeshFaceMaterial(cubeMaterials)

	var cube = new THREE.Mesh(geometry, material)

	cube.rotation.x = Math.PI / 2;
	cube.position.z = -1490;
	// bg.position.y = 1000;

	scene.add(cube)

}

