let Error404 = {
	render: async () => {
		document.getElementById("image").src = "./assets/bubbles-cry.gif";
		document.getElementById("title").innerHTML = "404 Bubbles is lost...";
		document.getElementById("subtitle").innerHTML = "Go find professor";
		document.getElementById("first-button").innerHTML = "Go Back";
		document.getElementById("first-button").setAttribute("href", "/#");
		document.getElementById("first-button").classList.remove("hidden");
	}
};

export default Error404;
