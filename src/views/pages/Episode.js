import Utils from "../../services/Utils.js";

let getPost = async (id) => {
	try {
		const response = await fetch(`https://api.tvmaze.com/episodes/` + id);

		const json = await response.json();

		return json;
	} catch (err) {
		console.log("Error getting documents", err);
	}
};

let Episode = {
	render: async () => {
		let request = Utils.parseRequestURL();
		let episode = await getPost(request.id);

		return /*html*/ `
			<section class="section">
				<img src="${episode.image.medium}" />
				<h1> Name: ${episode.name}</h1>
				<h3> Season: ${episode.season} - Episode ${episode.number}</h3>
				<h4>Aired ${episode.airdate}</h4>
				<p> Description: ${episode.summary} </p>
			</section>
		`;
	}
};

export default Episode;
