import Home from './views/pages/Home.js'
import Show from './views/pages/Show.js'
import Episode from "./views/pages/Episode.js";
import Error404 from './views/pages/Error404.js'
import RandomObject from './views/pages/RandomObject.js'

import Navbar from './views/components/Navbar.js'
import Footer from './views/components/Footer.js'

import Utils from './services/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
	'/': Home,
	'/show/:id': Show,
	'/ep/:id': Episode,
	'/object': RandomObject,
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
	const header = document.getElementById('header_container');
	const content = document.getElementById('page_container');
	const footer = document.getElementById('footer_container');

	// Render the Header and footer of the page
	header.innerHTML = await Navbar.render();
	footer.innerHTML = await Footer.render();

	// Get the parsed URL
	let request = Utils.parseRequestURL();

	// Parse the URL and if it has an id part, change it with the string ":id"
	let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
	// Get the page from our hash of supported routes.
	// If the parsed URL is not in our list of supported routes, select the 404 page instead
	let page = routes[parsedURL] ? routes[parsedURL] : Error404;

	if ((await page.render()) === undefined) {
		content.innerHTML = "";
	} else {
		content.innerHTML = await page.render();
	}
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
