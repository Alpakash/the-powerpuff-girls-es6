let RandomObject = {
	render: async () => {
		document.getElementById("image").innerHTML = null;
		document.getElementById("title").innerHTML = null;
		document.getElementById("subtitle").innerHTML = null;
		document.getElementById("description").innerHTML = null;

		let view = /*html*/ `
			<model-viewer
				src="./assets/circle.glb"
				alt="A 3D model of a circle"
				auto-rotate
				auto-rotate-delay=0
				rotation-per-second="60deg"
				interaction-prompt="none"
				camera-controls=""
				background-color="#455A64"
			></model-viewer>
		`;

		return view;
	}
};

export default RandomObject;
