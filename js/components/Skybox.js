
function Skybox(scene, height) {
	
	    var cubeMaterials = [];
	    var firebaseConfig = {
		apiKey: "AIzaSyB2up9-H2w7OgbTJjubL7OUAK9uWjDOkJI",
		authDomain: "ar-vr-12de3.firebaseapp.com",
		projectId: "ar-vr-12de3",
		storageBucket: "ar-vr-12de3.appspot.com",
		messagingSenderId: "233235157468",
		appId: "1:233235157468:web:62a38b06f5b83cc61dbf19",
		measurementId: "G-2S0NRB26DN",
	    };
	    // Initialize Firebase
	    firebase.initializeApp(firebaseConfig);

	    var storage = firebase.storage();
	    var storageRef = storage.ref();
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

