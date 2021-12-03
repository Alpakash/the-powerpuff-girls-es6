import Utils from "../../services/Utils.js";

const getPost = async (id) => {
	try {
		const response = await fetch(`https://api.tvmaze.com/episodes/` + id);

		const json = await response.json();

		return json;
	} catch (err) {
		console.log("Error getting documents", err);
	}
};

const Episode = {
	render: async () => {
		const request = Utils.parseRequestURL();
		const episode = await getPost(request.id);
		const firstButton = document.getElementById("first-button");

		document.getElementById("image").src = episode.image.original;
		document.getElementById("title").innerHTML = episode.name;
		document.getElementById("subtitle").innerHTML = `Season ${episode.season} - Episode ${episode.number}`;
		document.getElementById("airdate").innerHTML = episode.airdate;
		document.getElementById("description").innerHTML = episode.summary;
		firstButton.innerHTML = "Back";
		firstButton.classList.remove("hidden");
		firstButton.setAttribute("href", `/#/show/1955`);
	}
};

export default Episode;
