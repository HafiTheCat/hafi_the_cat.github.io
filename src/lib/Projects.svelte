<script lang="ts">
	import * as testdata from "./../../public/local_test_data.json";
	import Project from "./Project.svelte";
	async function fetchGitHubRepositories(username: string): Promise<any[]> {
		console.log("Performing Request");
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
			throw new Error(`Failed to fetch GitHub repositories for user ${username}`);
		}
	}

	function fetchRepos(username: string) {
		return new Promise((res, rej) => {
			setTimeout(() => {
				if (false) {
					res((testdata as any).default);
				} else {
					rej();
				}
			}, 2000);
		});
	}
	async function retrieveGithubRepos(username: string): Promise<any[]> {
		return new Promise((res, rej) => {
			fetchGitHubRepositories(username)
				.then((v) => {
					localStorage.setItem("repos", JSON.stringify(v));
					res(v as any[]);
				})
				.catch(() => {
					let s = JSON.parse(localStorage.getItem("repos") ?? "");
					if (s == undefined || s == null) rej();
					console.log("Retrieved repository data from cache");
					res(s);
				});
		});
	}
</script>

<div
	id="project-container"
	class="h-full w-full content-margins gap-4 justify-center items-stretch flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5"
>
	{#await retrieveGithubRepos("hafithecat")}
		<div>
			<h1 class="font-black italic text-2xl tracking-widest">Projects Loading...</h1>
		</div>
	{:then repos}
		{#each repos as repo, i}
			<Project {i} {repo} />
		{/each}
	{:catch error}
		<p class="font-semibold italic text-xl tracking-widest text-center">
			Sadly, the projects could not loaded or retrieved from cache 😕
		</p>
	{/await}
</div>
