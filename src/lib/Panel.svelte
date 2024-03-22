<script lang="ts">
	import { fade } from "svelte/transition";
	export let from = "";
	export let to = "";
	export let title = "";
</script>

<!-- out:fade={{duration:50}}
in:fly={{ x: -200, delay:400, duration: 100 }} -->
<div
	transition:fade
	class="w-full h-fit p-4 flex flex-col gap-4 bg-gradient-to-br {from} {to} rounded-xl drop-shadow-lg lg:max-w-[40vw]"
>
	<h1
		class="pr-4 pl-4 pt-2 pb-2 font-bold tracking-wider bg-main2 h-fit w-full text-white text-2xl rounded-xl drop-shadow-lg"
	>
		{title}
	</h1>
	<p
		class="pr-4 pl-4 pt-2 pb-2 w-full h-full bg-main text-white rounded-xl text-justify font-semibold text-xl"
	>
		<slot />
	</p>
</div>
