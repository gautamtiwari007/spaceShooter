
function Enemy(scene, x, z) {
	
	const URL = "";
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
   	storageRef.child('enemy.glb').getDownloadURL()
        .then((url) => {
           URL = url;
        })
        .catch((error) => {
            console.log(error);
        });
	
	var modelLoader = new THREE.GLTFLoader()
	this.model;

	modelLoader.load
		( 
			URL, 
			(function(obj)
			{
				this.model = obj.scene;

				this.model.rotation.y = -Math.PI / 2;
				this.model.rotation.x = Math.PI / 24;

				this.model.position.set(x, 0, z);
				this.model.scale.set(0.0018,0.0018,0.0018);

				scene.add(this.model);
			}).bind(this)
		)

	this.destroy = function() {
		scene.remove(this.model);
	}
}

