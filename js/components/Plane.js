function Plane(scene) {
	
	var modelLoader = new THREE.GLTFLoader()

	this.model;
 	this.planeBndBox;


	storageRef.child('enemy.glb').getDownloadURL()
		.then((url) => {
			modelLoader.load
			( 
			`${url}`, 
				(function(obj)
				{
					this.model = obj;

					// rotating, scaling down the plane model
					this.model.rotation.y = -Math.PI / 2;
					this.model.rotation.x = Math.PI / 24;

					this.model.position.set(x, 0, z);
					this.model.scale.set(0.0018, 0.0018, 0.0018);
					
					scene.add(this.model);

 					this.planeBndBox = new THREE.Box3().setFromObject(this.model);

				}).bind(this)
			)
			})
			.catch((error) => {
			    console.log(error);
			});
	this.update = function() {
				this.model.position.z -= 0.4;
			}
		
	this.handleInput = function(keyMap, camera) {

		if (keyMap[87]) {
			if (keyMap[16]) {
				this.model.position.z -= 1.5;
				camera.position.z -= 1.5;
			}
			else {
				this.model.position.z -= 1;
				camera.position.z -= 1;
			}
		}
		if (keyMap[83] && this.model.position.z < -1) {
			this.model.position.z += 1;
			camera.position.z += 1;
		}
		if (keyMap[68] && this.model.position.x < 15) {
			this.model.position.x += 0.2;			
			camera.position.x += 0.2;
		}
		if (keyMap[65] && this.model.position.x > -15) {
			this.model.position.x -= 0.2;
			camera.position.x -= 0.2;
		}
	}
	this.launchMissile = function() {

		var x = this.model.position.x;
		var z = this.model.position.z - this.planeBndBox.getSize().z;

		const m = new Missile(scene, x, z);

		return m;
	}
}
