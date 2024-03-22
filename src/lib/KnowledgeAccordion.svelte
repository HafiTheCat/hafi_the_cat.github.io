<script>
	import * as data from "./knowledgebase.json";
	import ARoot from "./ARoot.svelte";
</script>

<div id="accordionRoot" class="w-full h-fit content-margins font-semibold text-xl">
	<ARoot name="Root" children={data.children} expanded />
</div>
