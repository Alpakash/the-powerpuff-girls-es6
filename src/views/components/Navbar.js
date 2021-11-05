let Navbar = {
	render: async () => {
		let view = /*html*/ `
			<nav>
				<img
					src="./assets/copyright-powerpuffs.png"
					alt="The powerpuff girls are flying"
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
