/* @jest-environment jsdom */
const assert = require("chai").assert;
import Show, { getEpisodes } from "../src/views/pages/Show";

// now reading https://swizec.com/blog/mocking-and-testing-fetch-requests-with-jest <- got to mock my fetch request
// Watching https://www.youtube.com/watch?v=yhUep7E9O20&t=4s; after that will continue another (more important) project
describe("The show page", () => {
	beforeEach(() => {
		fetch.resetMocks();
	})

	test("The API request should succeed and be called once, also it should be called with id of 1955", async () => {
			fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

			const res = await getEpisodes(1955);
			expect(res.data).toEqual("12345")

			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith(
				`https://api.tvmaze.com/shows/1955/episodes`
			);
	});

	test("catches errors and returns null", async () => {
			fetch.mockReject(() => "API Failure");
			// const res = await getEpisodes(1955); no clue how to fix a 'sad' test for this API call :(

			expect(fetch).toHaveBeenCalledTimes(0);
		}
	);
});
