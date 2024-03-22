<script lang="ts">
	import { fade } from "svelte/transition";
	import Reachables from "./Reachables.svelte";
	let copied = false;
	function copyToClipboard(text: string) {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				copied = true;
				setTimeout(() => {
					copied = false;
				}, 3000);
			})
			.catch((err) => {
				console.error(
					"Sorry, how about you view the website on a device where you have a clipboard lol"
				);
			});
	}
</script>

<div class="h-full w-full flex flex-col justify-center items-center mt-8 mb-8">
	<div class="flex flex-row md:p-8 md:gap-8">
		<Reachables el="github" />
		<Reachables on:copy-to-clipboard={(e) => copyToClipboard(e.detail.copiee)} el="discord" />
		<Reachables on:copy-to-clipboard={(e) => copyToClipboard(e.detail.copiee)} el="email" />
	</div>
	{#if copied == true}
		<dialog
			transition:fade
			class="static border-2 border-white text-main font-bold bg-white p-2 flex flex-row rounded-xl h-fit w-fit"
		>
			<p class="pl-2 pr-2 md:pl-4 md:pr-4">Copied to Clipboard</p>
			<button on:click={() => (copied = false)}>X</button>
		</dialog>
	{/if}
</div>
