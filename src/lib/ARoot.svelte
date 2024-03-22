<script lang="ts">
	import { slide } from "svelte/transition";
	import AEntry from "./AEntry.svelte";
	export let expanded = false;
	export let name: string;
	export let children: any[];
	function toggle() {
		expanded = !expanded;
	}
</script>

<button class:expanded on:click={toggle} class="flex flex-row justify-between p-2">
	{#if expanded == true}
		&#9660;
	{:else}
		&#9658;
	{/if}
	{name}
</button>

{#if expanded}
	<ul transition:slide={{ duration: 300 }} class="bg-white/10 p-2 rounded-lg">
		{#each children as entry}
			<li class="pl-2">
				{#if entry.children === undefined || entry.children.length === 0}
					<AEntry {...entry} />
				{:else}
					<svelte:self {...entry} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}
