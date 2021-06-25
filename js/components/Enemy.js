
function Enemy(scene, x, z) {
	
	var modelLoader = new THREE.GLTFLoader()
	this.model;
	
   	storageRef.child('model.gltf').getDownloadURL()
        .then((url) => {
		modelLoader.load
		( 
		`${url}`, 
			(function(obj)
			{
				this.model = obj.scene;

				this.model.rotation.y = -Math.PI / 2;
				this.model.rotation.x = Math.PI / 24;

				this.model.position.set(x, 0, z);
				this.model.scale.set(0.1,0.1,0.1);

				scene.add(this.model);
			}).bind(this)
		)
        })
        .catch((error) => {
            console.log(error);
        });
	this.destroy = function() {
		scene.remove(this.model);
	}
}

