<script lang="ts">
	export let icon = "I";
	export let label = "Label";
	export let bg = "bg-red-500";
	export let fg = "text-blue-500";
</script>

<div
	class="flex flex-row w-fit h-fit p-2 gap-2 rounded-sm hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out"
	style="background-color: {bg};"
>
	<p>{icon}</p>
	<p class="font-bold text-[{fg}] text-justify tracking-widest" style="color: {fg};">{label}</p>
</div>
