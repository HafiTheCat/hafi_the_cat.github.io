<script lang="ts" type="module">
	import { onMount } from "svelte";
	import Panel from "./Panel.svelte";
	import Timeslice from "./TimeSlice.svelte";
	let selected = "html";
</script>

<!-- translate-x-[40vw] -->
<!--  relative -right-[100vw] -->
<div id="history-chart" class="grid grid-cols-2 gap-4 justify-items-stretch">
	<div class="w-full h-full ml-16">
		{#if selected == "html"}
			{#key selected}
				<Panel from="from-orange-500" to="to-orange-700" title="First interest in HTML (not 5)">
					Since my later childhood I have been very much interested in creating things and coming up
					with sometimes silly and sometimes not so silly ideas. My interest in <strong
						>Web Development</strong
					> started in the early years of my secondary education. That was the time where I first dived
					into the (now older) Hyper Text Markup Language (HTML).
				</Panel>
			{/key}
		{:else if selected == "c#"}
			{#key selected}
				<Panel from="from-purple-500" to="to-purple-700" title="Introduced to C#">
					During my tertiary education the informatics we got teached were based heavily on the
					programming language <strong>C#</strong>. It started with basic programming concepts as
					every programming related study starts, flow control, loops, classes, etc. Although at
					that time the latter was very confusing and it did not make sense to me in the beginning,
					however later I discovered how they work on my own. Showing that no education can beat
					study because self-interest.
				</Panel>
			{/key}
		{:else if selected == "node"}
			{#key selected}
				<Panel from="from-green-500" to="to-green-800" title="First Backend Service">
					<strong>abc</strong>
				</Panel>
			{/key}
		{:else if selected == "ts"}
			{#key selected}
				<Panel from="from-blue-700" to="to-blue-900" title="Typing with TypeScript">
					Fed with wierd behaviors and compiler errors, I searched for a solution, which it
					presented as <strong>TypeScript</strong>.
				</Panel>
			{/key}
		{:else if selected == "python"}
			{#key selected}
				<Panel from="from-yellow-400" to="to-yellow-600" title="Tinkering with Python">
					Already in the early semesters of my study i've used <strong>Python</strong>.
				</Panel>
			{/key}
		{:else if selected == "rust"}
			{#key selected}
				<Panel from="from-neutral-600" to="to-neutral-800" title="First Contact with Rust">
					I first heard of the <strong>Rust Programming Language</strong> in the
					<strong>Game Development</strong> context. I have come to appreciate Rust's harsh compiler
					that guides me to the right direction to write code i can atleast guarantee it will work. I
					have been in love with rust ever since.
				</Panel>
			{/key}
		{/if}
	</div>
	<div>
		<Timeslice active={selected == "html"} slice="html" on:selected={() => (selected = "html")} />
		<Timeslice active={selected == "c#"} slice="c#" on:selected={() => (selected = "c#")} />
		<Timeslice active={selected == "node"} slice="node" on:selected={() => (selected = "node")} />
		<Timeslice active={selected == "ts"} slice="ts" on:selected={() => (selected = "ts")} />
		<Timeslice
			active={selected == "python"}
			slice="python"
			on:selected={() => (selected = "python")}
		/>
		<Timeslice active={selected == "rust"} slice="rust" on:selected={() => (selected = "rust")} />
	</div>
</div>
