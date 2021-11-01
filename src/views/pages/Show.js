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

		return /*html*/ `
			<section class="section">
				<h1 class="title">Episodes</h1>
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
