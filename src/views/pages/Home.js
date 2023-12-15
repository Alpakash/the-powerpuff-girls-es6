const getShow = async () => {
	try {
		const response = await fetch(
			`https://api.tvmaze.com/search/shows?q=the%20powerpuff%20girls`
		);
		const json = await response.json();
		console.log(json);

		return json[1];
	} catch (error) {
		console.log("Error getting documents", error);
	}
};

let isLoading = true;

const Home = {
	render: async () => {
		const data = await getShow();
		if (!data) {
            return;
        }
		isLoading = false;
		const show = data.show;
		const firstButton = document.getElementById("first-button");
		const image = document.getElementById("image");
		
		image.src = "../../assets/powerpuffs-art.jpg";
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
