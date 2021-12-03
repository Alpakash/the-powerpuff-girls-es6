import Utils from "../../services/Utils.js";

const getEpisodes = async (id) => {
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

const Show = {
	render: async () => {
		const request = Utils.parseRequestURL();
		const episodesList = await getEpisodes(request.id);
		const firstButton = document.getElementById("first-button");

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
										<div class="grid-item">
											<a href="#/ep/${episode.id}">
												<img class="episode-image" src="${episode.image.medium}" />
											</a>
										</div>
										<div class="grid-item">
											<a class="episode-link" href="#/ep/${episode.id}">${episode.name}</a>
										</div>

										<div class="grid-item">
										<span class="episode-number">${index + 1}</span>
										</div>
									</div>
								`
							)
							.join("\n ")}

			</section>
		`;
	}
};

export default Show;
