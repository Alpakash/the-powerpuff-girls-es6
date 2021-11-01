let getShow = async () => {
	try {
		const response = await fetch(
			`https://api.tvmaze.com/search/shows?q=the%20powerpuff%20girls`
		);

		const json = await response.json();

		return json[2];
	} catch (error) {
		console.log("Error getting documents", err);
	}
};

let Home = {
	render: async () => {
		let data = await getShow();
		let show = data.show;

		console.log(show);

		let view = /*html*/ `
			<section class="section">
				<h1 class="title"> ${show.name} @ ${show.network.name} </h1>
				<h3 class="subtitle">Premiered: ${show.premiered}</h3>
				<img src=${show.image.original} width="250px;" />
				${show.summary}
				<a href="#/show/${show.id}">Watch episode list</a>
			</section>
		`;

		return view;
	}
};

export default Home;
