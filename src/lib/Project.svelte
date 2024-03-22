<script lang="ts">
	import { fade } from "svelte/transition";

	type Repo = { html_url: string; fork: boolean; description: string; name: string };
	export let repo: Repo;
	export let i = 0;
</script>

<a href={repo.html_url} transition:fade|global={{ delay: i * 50 }}>
	<div
		class="p-4 rounded-md shadow-xl transition-transform duration-300 transform hover:rotate-1 backdrop-blur-[5px] bg-white/10 lg:max-w-full w-full h-full"
	>
		<div class="flex flex-row justify-between items-center">
			<h1 class="font-black pb-2 tracking-wider text-ellipsis overflow-hidden ...">
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
			{/if}
		</div>
		{#if repo.description == null}
			<p class="pl-2">No description yet</p>
		{:else}
			<p class="pl-2 text-ellipsis text-justify overflow-hidden ...">{repo.description}</p>
		{/if}
	</div>
</a>
