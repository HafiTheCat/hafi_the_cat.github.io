<script lang="ts" type="module">
	import Panel from "./Panel.svelte";
	import Timeslice from "./TimeSlice.svelte";
	let selected = "html";
</script>

<div
	id="history-chart"
	class="w-full lg:grid lg:grid-cols-2 lg:gap-4 xl:justify-items-center content-margins"
>
	<div class="lg:hidden flex flex-row gap-2 mb-2">
		<Timeslice
			from="from-orange-500"
			to="to-orange-700"
			active={selected == "html"}
			slice="html"
			small={true}
			on:selected={() => (selected = "html")}
		/>
		<Timeslice
			from="from-purple-500"
			to="to-purple-700"
			active={selected == "c#"}
			slice="c#"
			small={true}
			on:selected={() => (selected = "c#")}
		/>
		<Timeslice
			from="from-green-500"
			to="to-green-800"
			active={selected == "node"}
			slice="node"
			small={true}
			on:selected={() => (selected = "node")}
		/>
		<Timeslice
			from="from-blue-700"
			to="to-blue-900"
			active={selected == "ts"}
			slice="ts"
			small={true}
			on:selected={() => (selected = "ts")}
		/>
		<Timeslice
			small={true}
			from="from-yellow-400"
			to="to-yellow-600"
			active={selected == "python"}
			slice="python"
			on:selected={() => (selected = "python")}
		/>
		<Timeslice
			from="from-neutral-600"
			to="to-neutral-800"
			active={selected == "rust"}
			slice="rust"
			small={true}
			on:selected={() => (selected = "rust")}
		/>
	</div>
	<div class="w-full h-full lg:grid lg:place-items-center lg:max-w-[calc(24rem_*_2)]">
		{#if selected == "html"}
			{#key selected}
				<Panel from="from-orange-500" to="to-orange-700" title="First interest in HTML (not 5)">
					I've always enjoyed creating and coming up with ideas, both silly and not. My interest in
					web development began during my secondary education. I first learned the now older Hyper
					Text Markup Language (HTML).
				</Panel>
			{/key}
		{:else if selected == "c#"}
			{#key selected}
				<Panel from="from-purple-500" to="to-purple-700" title="Introduced to C#">
					During my tertiary education, we were taught informatics using the programming language
					<strong>C#</strong>. Basic programming concepts, such as flow control, loops, and classes,
					are the starting point for most programming studies. Initially, I found the latter
					confusing and didn't understand how it worked. However, I eventually figured it out on my
					own. Showing the value of self-interest over education.
				</Panel>
			{/key}
		{:else if selected == "node"}
			{#key selected}
				<Panel from="from-green-500" to="to-green-800" title="First Backend Service">
					I first encountered the concept of a backend when developing a service for a
					vehicle-sharing program. Having prior expertise with web technologies, adopting <strong
						>NodeJs</strong
					>
					was intuitive. I also learned about <strong>MongoDB</strong>, a database solution. For my
					bachelor's project, I created a backend with a parser that converts between query
					languages.
				</Panel>
			{/key}
		{:else if selected == "ts"}
			{#key selected}
				<Panel from="from-blue-700" to="to-blue-900" title="Typing with TypeScript">
					After experiencing strange <strong>JavaScript</strong> behaviors, I sought a solution and
					discovered <strong>TypeScript</strong>. I really liked the versatility that its type
					system provided.I experimented with writing generic functions instead of specialized ones,
					resulting in improved code design and less discomfort.In the process, I developed a strong
					interest in its type system.
				</Panel>
			{/key}
		{:else if selected == "python"}
			{#key selected}
				<Panel from="from-yellow-400" to="to-yellow-600" title="Tinkering with Python">
					To be honest, my first encounter with Python was really uncomfortable. We used it to
					create graphs for a statistics question, but it didn't make sense. However, it quickly
					became a crucial tool for rapid prototyping, particularly in machine learning and math
					applications.
				</Panel>
			{/key}
		{:else if selected == "rust"}
			{#key selected}
				<Panel from="from-neutral-600" to="to-neutral-800" title="First Contact with Rust">
					I originally learned about the <strong>Rust Programming Language</strong> while working on
					a game project. I love Rust's strict compiler, which helps me write code that meets memory
					safety guarantees. I have always been fascinated by rust ever since.
				</Panel>
			{/key}
		{/if}
	</div>
	<div class="hidden lg:block">
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
