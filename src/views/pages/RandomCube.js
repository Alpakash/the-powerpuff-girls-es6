let RandomCube = {
	render: async () => {
		document.getElementById("image").innerHTML = null;
		document.getElementById("title").innerHTML = null;
		document.getElementById("subtitle").innerHTML = null;
		document.getElementById("description").innerHTML = null;
		let view = /*html*/ `
					<model-viewer
						src="./assets/projectName.gltf"
						alt="Random 3d block"
						auto-rotate auto-rotate-delay=0
						ios-src="./assets/projectName.gltf"
					></model-viewer>
					`;
		return view;
	}
};

export default RandomCube;
