let Bottombar = {
	render: async () => {
		let view = /*html*/ `
		 <footer class="border-t border-gray-200 ">
			<div
				class="
					container
					flex flex-col flex-wrap
					px-4
					py-16
					mx-auto
					md:items-center
					lg:items-start
					md:flex-row md:flex-nowrap
				"
			>
				<div
					class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"
			style="-webkit-transform: scaleX(-1);transform: scaleX(-1);"
				>
					<img src="./assets/proff.png" width="150px;">

				</div>
				<div class="justify-between w-full mt-4 text-center lg:flex">
					<div class="w-full px-4 lg:w-1/3 md:w-1/2">
						<h2 class="mb-2 font-bold tracking-widest text-gray-900">
							About this wonderful app
						</h2>
						 <p class="mt-2 text-sm text-gray-500">
						Sugar, spice, and everything nice.
						These were the ingredients chosen to create the perfect little girl, but Professor Utonium accidentally
						added an extra ingredient to the concoction-- Chemical X!
						Thus, The Powerpuff Girls were born. Using their ultra-super powers Blossom, Bubbles, and Buttercup
						have dedicated their lives to fighting crime and the forces of evil!
				 	 </p>
					</div>

					<div class="w-full px-4 lg:w-1/3 md:w-1/2 text-right">
						<h2 class="mb-2 font-bold tracking-widest text-gray-900">
							Quick Navigation
						</h2>
						<ul class="mb-8 space-y-2 text-sm list-none">
							<li>
								<a href="/#" class="text-gray-600 hover:text-gray-800">Home</a>
							</li>
							<li>
								<a href="/#/show/1955" class="text-gray-600 hover:text-gray-800">Episodes</a>
							</li>
							<li>
								<a href="/#/ep/160178" class="text-gray-600 hover:text-gray-800">First Episode</a>
							</li>
							<li>
								<a href="/#/object" class="text-gray-600 hover:text-gray-800">Random 3D Object</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
		`;
		return view;
	},
};

export default Bottombar;
