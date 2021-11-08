import Utils from "../../services/Utils.js";

let getEpisodes = async (id) => {
	try {
		const response = await fetch(
			`https://api.tvmaze.com/shows/${id}/episodes`
		);
		const json = await response.json();

		return json;
	} catch (err) {
		console.log("Error getting documents", err);
	}
};

let Show = {
	render: async () => {
		let request = Utils.parseRequestURL();
		let episodesList = await getEpisodes(request.id);
		let firstButton = document.getElementById("first-button");

		document.getElementById("title").innerHTML = "EPISODES";
		document.getElementById("subtitle").innerText = "";
		document.getElementById("description").innerHTML = "Click on an episode in the list for more information.";
		firstButton.innerHTML = "Back";
		firstButton.classList.remove("hidden");
		firstButton.setAttribute("href", `/#`);

		document.getElementById("image").src = "./assets/powerpuff-birth.jpg";

		return /*html*/ `
			<section class="section">
						${episodesList
							.map(
								(episode, index) => /*html*/ `
									<div class="styled-list">
										<a href="#/ep/${episode.id}">
											<img class="episode-image" src="${episode.image.medium}" />
										</a>
										<a class="episode-link" href="#/ep/${episode.id}">${episode.name}</a>
										<span class="episode-number">${index + 1}</span>
									</div>
								`
							)
							.join("\n ")}

			</section>
		`;
	}
};

export default Show;
