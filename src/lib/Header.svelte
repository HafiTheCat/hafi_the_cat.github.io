<script lang="ts">
	export let title: string = "TestTitle";
	export let symbol: string = "";
	export let subtitle: string | null = null;
</script>

<div class="mt-12 mb-12 select-none flex flex-col items-center justify-center">
	<h1 class="font-extrabold text-2xl md:text-5xl mb-1 z-20">{symbol} {title} {symbol}</h1>
	{#if subtitle != null}
		<p class="font-black tracking-widest z-20">2024</p>
	{/if}
</div>
