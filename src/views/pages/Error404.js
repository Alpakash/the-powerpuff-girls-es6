let Error404 = {
	render: async () => {
		let view = /*html*/ `
			<section class="section">
				<h1> 404, page does not exist... </h1>
			</section>
		`;
		return view;
	}
};

export default Error404;
