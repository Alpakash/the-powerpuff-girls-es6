const assert = require("chai").assert;
import Show from "../src/views/pages/Show";
import fetch from "cross-fetch";

// I want to test this Show page. Tomorrows challenge it is.
// now reading https://swizec.com/blog/mocking-and-testing-fetch-requests-with-jest <- got to moch my fetch request
describe("The show page", () => {
	it("The list with episodes should contain 3 list items", () => {
			const getEpisodes = async (id) => {
				fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
					.then((response) => {return response.json()})
					.then((data) => {return data})
					.catch((error) => console.log("Error getting documents", error));
			};
	})
});