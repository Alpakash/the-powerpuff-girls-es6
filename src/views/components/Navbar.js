let Navbar = {
	render: async () => {
		let view = /*html*/ `
			<nav>
				<img
					src="http://assets.stickpng.com/images/59cfc988d3b1936210a5dde0.png"
					alt="The logo of Mojo Jojo"
					width="300px"
				/>
				<ul>
					<li><a href="/#/">Home</a></li>
					<li><a href="/#/about">About</a></li>
				</ul>
			</nav>
		`;
		return view;
	}
};

export default Navbar;
