<script lang="ts">
	import { onMount } from "svelte";
	import * as test from "./../../public/local_test_data.json";
	$: repos = null;
	async function fetchGitHubRepositories(username: string): Promise<any[]> {
		const url = `https://api.github.com/users/${username}/repos`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Failed to fetch GitHub repositories for user ${username}`);
			}

			const repositories = await response.json();
			return repositories;
		} catch (error) {
			console.error("Error fetching GitHub repositories:", error);
			return [];
		}
	}

	// const username = "hafithecat";
	// fetchGitHubRepositories(username)
	// 	.then((repositories) => {
	// 		repos = repositories;
	// 		console.log("Repositories:", repositories);
	// 	})
	// 	.catch((error) => {
	// repos = "error"
	// 		console.error("Error:", error);
	// 	});
	onMount(() => {
		repos = test.default;
		console.log(repos);
	});
</script>

<div
	id="project-container"
	class="h-full w-full pl-4 pr-4 flex sm:flex-row flex-col flex-nowrap sm:flex-wrap gap-4 justify-center items-stretch"
>
	{#if repos==null}
		<div>
			<h1 class="text-font-black">Projects Loading...</h1>
		</div>
	{:else}
		{#each repos as repo}
			<a href={repo.html_url}>
				<!-- bg-gradient-to-br  from-[#291c64] to-[#2dccc9] -->
				<div
					class="sm:w-fit min-w-min p-4 flex-grow flex-1  rounded-md shadow-xl transition-transform duration-300 transform hover:rotate-1 backdrop-blur-[5px] bg-white/10"
				>
					<div class="flex flex-row justify-between items-center">
						<h1 class="font-black text-md pb-2 tracking-wider text-ellipsis overflow-hidden ...">
							{repo.name}
						</h1>
						{#if repo.fork == true}
							<div class="absolute top-2 right-2" title="This Project is a Fork">
								<svg
									aria-hidden="true"
									viewBox="0 0 16 16"
									version="1.1"
									data-view-component="true"
									class="fill-white border-4 p-1 rounded-lg h-9"
								>
									<path
										d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
									></path>
								</svg>
							</div>
							<!-- <p
							class="border-2 pl-2 pr-2 font-bold text-lg rounded-full text-green-500 border-green-500 bg-green-950"
						>
							FORK
						</p> -->
						{/if}
					</div>
					{#if repo.description == null}
						<p class="pl-2">No description yet</p>
					{:else}
						<p class="pl-2 text-ellipsis overflow-hidden ...">{repo.description}</p>
					{/if}
				</div>
			</a>
		{/each}
	{/if}
</div>
