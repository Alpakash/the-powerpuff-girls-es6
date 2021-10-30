fetch("https://api.tvmaze.com/search/shows?q=the%20powerpuff%20girls")
	.then((response) => {
		if (!response.ok) throw Error(response.statusText);
		return response.json();
	})
	.then((data) => console.log("Succesfully Fetched: ", data[1]))
	.catch((error) => {
		console.error("Error:", error);
	});
