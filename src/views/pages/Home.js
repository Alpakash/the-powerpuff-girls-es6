const getShow = async () => {
	try {
		const response = await fetch(
			`https://api.tvmaze.com/search/shows?q=the%20powerpuff%20girls`
		);

		const json = await response.json();

		return json[2];
	} catch (error) {
		console.log("Error getting documents", error);
	}
};

const Home = {
	render: async () => {
		const data = await getShow();
		const show = data.show;
		const firstButton = document.getElementById("first-button");
		const image = document.getElementById("image");

		image.src = show.image.original;
		image.setAttribute("alt", "The powerpuff girls are flying");
		document.getElementById("title").innerHTML = show.name;
		document.getElementById("subtitle").innerText = show.network.name;
		document.getElementById("description").innerHTML = show.summary;
		firstButton.innerHTML = "Episode List";
		firstButton.classList.remove("hidden");
		firstButton.setAttribute("href", `#/show/${show.id}`);
	},
};

export default Home;
