/* @jest-environment jsdom */
const assert = require("chai").assert;
import Show, { getEpisodes } from "../src/views/pages/Show";
import fetch from "cross-fetch";

// now reading https://swizec.com/blog/mocking-and-testing-fetch-requests-with-jest <- got to mock my fetch request
// Watching https://www.youtube.com/watch?v=yhUep7E9O20&t=4s; after that will continue another (more important) project
describe("The show page", () => {
	test("The list with episodes should contain 3 list items", () => {
		const getEpisodes = async (id) => {
			fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					return data;
				})
				.catch((error) => console.log("Error getting documents", error));
			};

		});
});
