<script lang="ts">
	import KnowledgeGraph from "./lib/KnowledgeGraph.svelte";
	import TimeGraph from "./lib/TimeGraph.svelte";
	import Interest from "./lib/Interest.svelte";
	import Projects from "./lib/Projects.svelte";
	import Header from "./lib/Header.svelte";
	import logo from "./../public/logo.png";
	import Card from "./lib/Card.svelte";
	import { onMount } from "svelte";
	import "./lib/Tailwind.css";

	onMount(() => {
		window.addEventListener(
			"scroll",
			() => {
				document.body.style.setProperty(
					"--scroll",
					window.scrollY / (document.body.offsetHeight - window.innerHeight)
				);
			},
			false
		);

		// Get all the elements you want to show on scroll
		const targets = document.querySelectorAll(".show-fade-in");

		// Callback for IntersectionObserver
		const callback = function (entries) {
			entries.forEach((entry) => {
				// Is the element in the viewport?
				const animationType = entry.target.dataset.animateType;

				if (entry.isIntersecting) {
					entry.target.classList.add(animationType);
					entry.target.classList.remove("opacity-0");
				} else {
					entry.target.classList.remove(animationType);
					entry.target.classList.add("opacity-0");
				}
			});
		};

		// Set up a new observer
		const observer = new IntersectionObserver(callback);

		// Loop through each of the target
		targets.forEach(function (target) {
			// Hide the element
			target.classList.add("opacity-0");

			// Add the element to the watcher
			observer.observe(target);
		});
	});
</script>

<main class="w-full snap-proximity snap-y scroll-smooth text-mainfont">
	<section id="hero" class="snap-start snap-normal w-full h-[80vh] bg-transparent select-none">
		<div class="z-10 mt-48 relative flex flex-col items-center justify-center h-fade-in">
			<div
				class="flex flex-col items-center flex-nowrap justify-center text-center font-black text-8xl w-fit animate-text drop-shadow-lg"
			>
				<div class="relative hover:brightness-125 transition duration-300 ease-in-out">
					<a href="https://c.tenor.com/Wl-KdhG1N24AAAAC/tenor.gif">
						<img class="object-center h-64 w-64 rounded-3xl" src={logo} alt="me using puter" />
					</a>
					<p class="absolute right-5 top-1 font-semibold text-2xl rotate-3">
						<b class="underline">POV</b>: me coding
					</p>
				</div>
				<h1 class="p-8 hover:text-glitch text-glitch-duration-ultra_slow">
					Hia, I'm <b
						class="text-glitch-duration-ultra_slow text-9xl tracking-wider underline underline-offset-8 text-glitch"
						>Hafi</b
					>!
				</h1>
				<p class="font-semibold text-2xl w-4/5">
					Just some average cat trying to fill the freetime 🕐<br />with some delightful ✨ problem
					solving<br />using Technology 🖥️
				</p>
			</div>
		</div>
		<canvas id="bg_glitch" class="absolute top-0 w-screen h-screen max-w-full min-w-full"></canvas>
	</section>

	<section id="introduction" class="snap-normal w-full h-[calc(10rem_*_2)] select-none">
		<div class="w-full h-full flex flex-col items-center justify-center">
			<Header title="Who this" symbol="❓" />
			<div
				id="card-container"
				class="flex flex-row flex-wrap justify-center w-2/4 h-fit gap-3 animate-text drop-shadow-lg max-w-[128rem] z-20"
			>
				<Card label="OPEN MINDED" icon="🔭" bg="#00FFFF" fg="#333333" />
				<Card label="STUDENT" icon="🎓" bg="#007EC6" fg="#FFF" />
				<Card label="LEARNING FOR LIFE" icon="📚" bg="#006400" fg="#FFF" />
				<Card label="GAME DEVELOPMENT" icon="🎲" bg="#8A2BE2" fg="#FFF" />
				<Card label="MUSIC ENGINEERING" icon="🎹" bg="#800080" fg="#FFF" />
				<Card label="NOISE ENJOYER" icon="🎵" bg="#A52A74" fg="#FFF" />
				<Card label="PHILOSOPHY" icon="📜" bg="#F5F5DC" fg="#333333" />
				<Card label="RUSTACEAN" icon="🦀" bg="#000000" fg="#FFF" />
			</div>
		</div>
		<!-- <div class="absolute w-full h-full flex flex-col items-stretch flex-nowrap z-10">
      <div class="bg-gradient-to-b from-white flex-grow"></div>
      <div class="flex-grow"></div>
      <div class="bg-gradient-to-t from-white flex-grow"></div>
    </div>
    <div class="absolute h-full w-full clouds-pattern -z-10"></div> -->
	</section>

	<!-- <div class="w-full h-16 bg-gradient-to-b to-white/10 from-main2"></div> -->

	<section id="favorites" class="snap-normal snap-start w-full h-[calc(24rem_*_1.5)] select-none">
		<div
			data-animate-type="animate-fadein"
			class="w-full h-full flex flex-col items-center duration-300 justify-center opacity-0 show-fade-in"
		>
			<Header title="Current Interests" symbol="🌠" subtitle="2024" />
			<div
				data-animate-type="animate-fadein"
				class="w-fit h-fit flex flex-row gap-8 items-center flex-wrap justify-center opacity-0 duration-500 show-fade-in z-20"
			>
				<Interest label="Rust" slice="rust" />
				<Interest label="TypeScript" slice="ts" />
				<Interest label="Potassco Clingo" slice="clingo" />
				<Interest label="Typst" slice="typst" />
				<Interest label="Obsidian" slice="obsidian" />
			</div>
			<!-- <div class="absolute w-full h-full flex flex-col items-stretch flex-nowrap z-10">
        <div class="bg-gradient-to-b from-main2 flex-grow"></div>
        <div class="flex-grow"></div>
        <div class="bg-gradient-to-t from-main flex-grow"></div>
      </div> -->
		</div>
	</section>

	<!-- <div class="w-full h-16 bg-gradient-to-b from-white to-main"></div> -->

	<section id="path" class="snap-start snap-normal w-full h-fit select-none pb-16">
		<div class="w-full h-full flex flex-col items-center justify-center overflow-hidden">
			<Header title="Pathways through Time" symbol="⏳" />
			<div class="w-full h-full">
				<!-- <TimeGraph /> -->
			</div>
		</div>
	</section>

	<div class="w-full h-16 bg-gradient-to-b to-main from-main2"></div>

	<section
		id="knowledgebase"
		class="bg-neutra0l-90 snap-start snap-normal w-full h-fit select-none"
	>
		<div class="w-full h-full pb-8 flex flex-col items-center justify-center">
			<Header title="Tech Knowledgebase" symbol="🗃️" />
			<!-- <KnowledgeGraph /> -->
		</div>
	</section>

	<div class="w-full h-16 bg-gradient-to-t from-main to-neutral-900"></div>

	<section
		id="projects"
		class="clouds-pattern bg-white snap-start snap-normal w-full h-fit select-none"
	>
		<div class="w-full h-full pb-8 flex flex-col items-center justify-center">
			<Header title="Projects" symbol="📁" />
			<!-- <Projects /> -->
		</div>
	</section>

	<div class="w-full h-16 bg-gradient-to-b from-main bg-neutral-900"></div>
	<footer id="footer" class="bg-neutral-900 snap-start w-full h-48">
    For any enquiries please use my relay email: <code class=" select-all">ufq0x4vbq@mozmail.com</code>
  </footer>
</main>

<style>
</style>
