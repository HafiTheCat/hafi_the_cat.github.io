<script lang="ts">
	import KnowledgeGraph from "./lib/KnowledgeGraph.svelte";
	import TimeGraph from "./lib/TimeGraph.svelte";
	import Interest from "./lib/Interest.svelte";
	import Canvas from "./lib/Canvas.svelte";
	import Projects from "./lib/Projects.svelte";
	import Header from "./lib/Header.svelte";
	import logo from "/logo.webp";
	import Card from "./lib/Card.svelte";

	import { onMount } from "svelte";
	import "./lib/Tailwind.css";
	import Links from "./lib/Links.svelte";
	import KnowledgeAccordion from "./lib/KnowledgeAccordion.svelte";

	onMount(() => {
		// Get all the elements you want to show on scroll
		const targets = document.querySelectorAll(".show-fade-in");

		// Callback for IntersectionObserver
		const callback = function (entries: any) {
			entries.forEach((entry: any) => {
				// Is the element in the viewport?
				let animationType = entry.target.dataset.animateType;
				if (animationType == undefined || animationType == null) animationType = "animate-fadein";

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
	let now = new Date();
	let age = now.getFullYear() - 1999;
	const current_month = now.getMonth();
	if (current_month < 11) age -= 1;

	function convertToNumerationForm(number: number) {
		// Define an array of numeration forms for numbers 1 to 20
		const numerationForms = [
			"zeroth",
			"first",
			"second",
			"third",
			"fourth",
			"fifth",
			"sixth",
			"seventh",
			"eighth",
			"ninth",
			"tenth",
			"eleventh",
			"twelfth",
			"thirteenth",
			"fourteenth",
			"fifteenth",
			"sixteenth",
			"seventeenth",
			"eighteenth",
			"nineteenth",
		];

		// Define numeration forms for tens (20, 30, 40, etc.)
		const tensNumerationForms = [
			"",
			"",
			"twentieth",
			"thirtieth",
			"fortieth",
			"fiftieth",
			"sixtieth",
			"seventieth",
			"eightieth",
			"ninetieth",
		];

		// If number is between 1 and 19, directly return the numeration form from the array
		if (number >= 1 && number <= 19) {
			return numerationForms[number];
		}

		// If number is a multiple of 10, return its tens numeration form
		if (number % 10 === 0) {
			return tensNumerationForms[number / 10];
		}

		// For numbers greater than 20 and not multiples of 10, construct the numeration form by combining the tens and units
		const tensPlace = Math.floor(number / 10);
		const unitsPlace = number % 10;
		return `${tensNumerationForms[tensPlace]}-${numerationForms[unitsPlace]}`;
	}

	function getCurrentSemester(currentDate: Date) {
		const currentYear = currentDate.getFullYear();
		const currentMonth = currentDate.getMonth();
		const wsStartMonth = 9;
		let semesterNumber;
		if (currentYear === 2023 && currentMonth >= wsStartMonth) {
			semesterNumber = Math.floor((currentMonth - wsStartMonth) / 6) + 1;
		} else if (currentYear > 2023) {
			semesterNumber = Math.floor((currentYear - 2023) * 2);
			semesterNumber += currentMonth >= wsStartMonth ? 1 : 0;
		} else {
			semesterNumber = 0;
		}

		return convertToNumerationForm(semesterNumber);
	}
	const semster = getCurrentSemester(now);
</script>

<main class="w-full scroll-smooth text-mainfont">
	<section id="hero" class="snap-start snap-normal w-full h-[90vh] bg-transparent select-none">
		<div class="flex items-center justify-center mt-32 lg:mt-72 pl-16 pr-16 lg:pl-2 lg:pr-2">
			<div
				class="z-10 relative flex flex-col items-center justify-center h-fade-in max-w-prose xl:max-w-fit"
			>
				<div
					class="flex flex-col items-center flex-nowrap justify-center gap-4 xl:gap-8 text-center font-black w-fit animate-text drop-shadow-lg"
				>
					<div class="relative hover:brightness-125 transition duration-300 ease-in-out">
						<a href="https://c.tenor.com/Wl-KdhG1N24AAAAC/tenor.gif">
							<img
								class="object-center h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-96 xl:w-96 rounded-3xl"
								src={logo}
								alt="me using puter"
							/>
						</a>
						<p class="absolute right-5 top-1 font-semibold text-xl md:text-2xl rotate-3">
							<b class="underline">POV</b>: me coding
						</p>
					</div>
					<h1
						class="hover:text-glitch text-glitch-duration-ultra_slow md:text-5xl text-3xl lg:text-6xl xl:text-7xl"
					>
						Hia, I'm <b
							class="text-glitch-duration-ultra_slow text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider underline underline-offset-8 text-glitch"
							>Hafi</b
						>!
					</h1>
					<p class="font-semibold text-xl md:text-2xl xl:text-3xl text-center max-w-prose">
						Just some average cat trying to fill the freetime 🕐<br class="hidden sm:block" />with
						some delightful ✨ problem solving<br class="hidden sm:block" /> using Technology 🖥️
					</p>
				</div>
			</div>
		</div>
		<Canvas />
	</section>

	<section id="introduction" class="snap-normal w-full select-none">
		<div class="w-full h-full flex flex-col items-center justify-center content-margins">
			<Header title="WhoIs" symbol="❓" />
			<p class="prose">
				I was "<i class="tracking-wider">created</i>" in the year <strong>1999</strong>, thus the
				present time span of operation is roughly <strong>{age}</strong> years. I am currently
				pursuing a master's degree in informatics. In my spare time, I enjoy contemplating and
				solving future problems, as well as delving deeply into a variety of topics of interest. The
				following <strong>Traits</strong> provide a general summary of myself and my interests:
			</p>
			<div
				id="card-container"
				class="flex flex-col items-center md:flex-row md:flex-wrap justify-center h-fit gap-3 animate-text drop-shadow-lg max-w-prose z-20 mt-16 mb-16"
			>
				<Card label="GAME DEVELOPMENT" icon="🎲" bg="#8A2BE2" fg="#FFF" />
				<Card label="LEARNING FOR LIFE" icon="📚" bg="#006400" fg="#FFF" />
				<Card label="OPEN MINDED" icon="🔭" bg="#00FFFF" fg="#333333" />
				<Card label="STUDENT" icon="🎓" bg="#007EC6" fg="#FFF" />
				<Card label="RUSTACEAN" icon="🦀" bg="#000000" fg="#FFF" />
				<Card label="PHILOSOPHY" icon="📜" bg="#F5F5DC" fg="#333333" />
				<Card label="NOISE ENJOYER" icon="🎵" bg="#A52A74" fg="#FFF" />
				<Card label="MUSIC ENGINEERING" icon="🎹" bg="#800080" fg="#FFF" />
			</div>
			<p class="prose">
				In addition to the standard primary and secondary education, when I was exposed to more
				technical subjects during my five-year tertiary education, it became much more interesting.
				I completed two one-month internships during this time. The first involved working in a
				museum workshop, maintaining different props or assisting with the processing of building
				materials. The second was a position in warehouse logistics management at a company that
				distributes electric components. Here, I was in charge of general logistical duties and the
				production of distribution panels. Participating in a project that implemented a <i
					>Electric Differential Lock</i
				>
				on a snow plougher with a magnetic clutch helped me to finish my education. In this project I
				mostly focused on the planning/design, programming, and 3D printing aspects. In terms of higher
				education, in 2023 I completed my bachelor's degree with a focus on Human Computer Interaction
				(HCI) and Distributed Systems. As previously mentioned, I began my master's program in informatics
				in 2023. I would summarize my approximate educational path as follows:
			</p>
			<dl class="md:hidden font-semibold text-xl mt-8 mb-8">
				<dt class="pr-4"><strong>2023 - now</strong></dt>
				<dd class="mb-4">University (Informatics Masters Program)</dd>
				<dt class="pr-4"><strong>2019 - 2023</strong></dt>
				<dd class="mb-4">University (Bachelor Applied Informatics)</dd>
				<dt class="pr-4"><strong>2014 - 2019</strong></dt>
				<dd class="mb-4">Secondary Technical College (Electrical Engineering)</dd>
			</dl>
			<table class=" hidden md:block font-semibold text-xl m-8">
				<tr>
					<td class="pr-4"><strong>2023 - now</strong></td>
					<td>University (Informatics Masters Program)</td>
				</tr>
				<tr>
					<td class="pr-4"><strong>2019 - 2023</strong></td>
					<td>University (Bachelor Applied Informatics)</td>
				</tr>
				<tr>
					<td class="pr-4"><strong>2014 - 2019</strong></td>
					<td>Secondary Technical College (Electrical Engineering)</td>
				</tr>
			</table>

			<p class="prose">
				Let us now come to another more personal topic. I noticed early on that certain individuals
				might fit into specific behavioral groups. Years later I had learned about
				<strong>Myers-Briggs Personality Types</strong>, which validated my intuition. By the way,
				mine is <strong>INTP</strong>. Although not a scientifically recognized theory, being aware
				of these types can improve self-awareness and reduce conflict amongst individuals. And ever
				since, it has proven to be a very useful theory for understanding the motivations and
				behaviors of humans. In my free time, I enjoy working on anything that currently interests
				me and learning from it. I've used <strong>Obsidian</strong> for note-taking, sketching, and
				prototyping on multiple projects. I would describe myself as creative, and I prefer to create
				rather than consume. I strive to prioritize ideas that benefit humanity over those that harm
				it, despite challenges. It's important to recognize that technological advancements can also
				have negative consequences.
			</p>
			<span class="text-xl pt-4 pb-4 font-bold tracking-wider"><i> — Hafi</i></span>
			<p class="font-semibold text-xl text-justify max-w-prose"></p>

			<p class="prose">
				Since I don't like using traditional social media, these are the main ways that you can
				contact me. That being said, I am aware of spam and the potential for unknown system
				vulnerabilities. It is best to just write text in your message; this increases the
				likelihood that I will reply.
			</p>
			<Links />
		</div>
	</section>

	<div class="w-full h-32 bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-xl"></div>

	<section id="path" class="snap-start snap-normal w-full h-fit select-none pb-16">
		<div class="w-full h-full flex flex-col items-center justify-center overflow-hidden">
			<Header title="Pathways through Time" symbol="⏳" />
			<div class="w-full h-full">
				<TimeGraph />
			</div>
		</div>
	</section>

	<div class="w-full h-8 bg-gradient-to-t to-main from-neutral-950/20"></div>
	<section
		id="favorites"
		class="snap-normal snap-start w-full h-fit select-none flex flex-col items-center justify-center bg-neutral-950"
	>
		<div
			class="w-fit h-full flex flex-col items-center duration-300 justify-center rounded-lg content-margins"
		>
			<Header title="Current Interests" symbol="🌠" subtitle="2024" />
			<div
				data-animate-type="animate-fadein"
				class="w-fit h-fit flex flex-row lg:gap-8 xl:gap-16 mb-12 items-center flex-wrap justify-center duration-500 z-20"
			>
				<a href="https://www.rust-lang.org/">
					<Interest label="Rust" slice="rust" />
				</a>
				<a href="https://www.typescriptlang.org/">
					<Interest label="TypeScript" slice="ts" />
				</a>
				<a href="https://potassco.org/">
					<Interest label="Potassco Clingo" slice="clingo" />
				</a>
				<a href="https://typst.app/">
					<Interest label="Typst" slice="typst" />
				</a>
				<a href="https://obsidian.md/">
					<Interest label="Obsidian" slice="obsidian" />
				</a>
			</div>
		</div>
	</section>

	<div class="w-full h-8 bg-gradient-to-b from-neutral-950/20 to-main"></div>

	<section
		id="knowledgebase"
		class="bg-gradient-to-b from-main to-neutral-900 snap-start snap-normal w-full h-fit select-none"
	>
		<div class="w-full h-full pb-8 flex flex-col items-center justify-center">
			<Header title="Tech Knowledgebase" symbol="🗃️" />
			<div class="hidden xl:block h-full w-full">
				<KnowledgeGraph />
			</div>
			<div class="xl:hidden h-full w-full">
				<KnowledgeAccordion />
			</div>
		</div>
	</section>

	<div class="w-full h-16 bg-gradient-to-t from-main to-neutral-900"></div>

	<section
		id="projects"
		class="clouds-pattern bg-white snap-start snap-normal w-full h-fit select-none"
	>
		<div class="w-full h-full pb-8 flex flex-col items-center justify-center">
			<Header title="Projects" symbol="📁" />
			<Projects />
		</div>
	</section>

	<div class="w-full h-16 bg-gradient-to-b from-main bg-neutral-900"></div>
	<footer
		id="footer"
		class="bg-neutral-900 snap-start w-full h-96 content-margins flex justify-center select-none font-semibold text-xl"
	>
		<div>
			For any enquiries please use my relay email: <code
				class="bg-neutral-800 drop-shadow-md rounded-lg p-2 font-mono select-all"
				>ufq0x4vbq@mozmail.com</code
			>
		</div>
	</footer>
</main>

<style>
</style>
