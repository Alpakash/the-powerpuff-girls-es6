const Navbar = {
	render: async () => {
		document.getElementById("footer_container").classList.remove("hidden");

		const view = /*html*/ `
			<div class="relative bg-white overflow-hidden">
				<div class="mx-auto">
					<div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
						<svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>
						<div>
							<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
								<nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
									<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
										<div class="flex items-center justify-between w-full md:w-auto">
										<a href="/#">
											<span class="sr-only">Professor Utonium</span>
											<img class="h-8 w-auto sm:h-10" src="./assets/proff.png">
										</a>
										</div>
									</div>
									<div class="md:block md:ml-10 md:pr-4 md:space-x-8">
										<a class="font-medium text-gray-500 hover:text-gray-900" href="/#/">Home</a>
										<a class="font-medium text-gray-500 hover:text-gray-900" href="/#/show/1955">Episodes</a>
									</div>
								</nav>
							</div>

							<main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
								<img id="title-image" width="150px" class="mb-5 absolute bottom-0 right-20" />
								<div class="sm:text-center lg:text-left">
									<h3 id="airdate" class="block xl:inline italic text-3xl"></h3>
									<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
										<div id="title" class="block xl:inline">
											<!-- Here comes the title -->
										</div><br>
										<div id="subtitle" class="block text-indigo-600 xl:inline">
											<!-- Here comes the subtitle -->
										</div>
									</h1>
									<p id="description" class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
										<!-- Here comes the description -->
									</p>
									<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
										<div class="rounded-md shadow">
											<a id="first-button" href="#" class="hidden w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
												<!-- Here comes the button -->
											</a>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
					<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
							<img
								id="image"
								class="object-cover m:h-72 w-full"
							/>
					</div>
				</div>
			</div>
		`;
		return view;
	},
};

export default Navbar;
