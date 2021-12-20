import Utils from "../../services/Utils.js";

export const getEpisodes = async (id) => {
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
									<div class="flex flex-wrap sm:grid sm:grid-cols-12 sm:gap-2">
											<div class="sm:col-span-4 w-full">
												<a href="#/ep/${episode.id}">
													<img class="episode-image w-full" src="${episode.image.medium}" />
												</a>
											</div>

										<div class="order-3 col-span-1 sm:col-span-6 flex flex-wrap content-center">
											<a class="episode-link text-sm sm:text-3xl" href="#/ep/${episode.id}">
												${episode.name}
											</a>
										</div>

										<div class="justify-center order-2 sm:order-last col-span-1 sm:col-start-11 sm:col-span-2 flex flex-wrap content-center ml-6">
											<span class="w-24 sm:w-28 episode-number text-5xl sm:text-8xl">${
												index + 1
											}</span>
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
