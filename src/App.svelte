<script lang="ts">
  import KnowledgeGraph from './lib/KnowledgeGraph.svelte'
  import logo from './../public/logo.png'
  import Counter from './lib/Counter.svelte'
  import './lib/Tailwind.css'
</script>

<main class="w-full snap-y text-mainfont">
  <section id="hero" class="snap-start w-full h-[90vh] bg-transparent select-none">
    <div class="mt-32 relative flex flex-col items-center justify-center h-fade-in">
      <div class="relative flex flex-col items-center flex-nowrap justify-center text-center font-black text-8xl w-fit animate-text drop-shadow-lg">
        
        <img class="object-center h-64 w-64 rounded-3xl" src={logo} alt="me using puter">
        <p class="absolute right-[17.5rem] top-1 font-semibold text-2xl rotate-3"><b class="underline">POV</b>: me coding</p>

        <h1 class="p-8 hover:text-glitch text-glitch-duration-ultra_slow">Hia, I'm <b class="text-9xl tracking-wider underline underline-offset-8">Hafi</b>!</h1>
        <p class="font-semibold text-2xl w-4/5">Just some average cat trying to fill the freetime 🕐<br>with some delightful ✨ problem solving<br>using Technology 🖥️</p>
      </div>
    </div>
    <canvas id="bg_glitch" class="absolute top-0 left-0 w-screen h-screen -z-10"></canvas>
  </section>

  <div class="w-full h-16 bg-gradient-to-b from-main to-main2"></div>

  <section id="introduction" class="bg-main2 snap-start w-full h-96">
    <div class="w-full h-full flex items-center justify-center">
      <h1 class="font-extrabold text-2xl">Introduction<h1>
    </div>
  </section>

  <section id="path" class="bg-neutral-900 snap-start w-full h-96">
    <div class="w-full h-full flex items-center justify-center">
      <h1 class="font-extrabold text-2xl">My Path<h1>
    </div>
  </section>

  <section id="path2" class="bg-neutral-900 snap-start w-full h-96">
    <div class="w-full h-full flex items-center justify-center">
      <h1 class="font-extrabold text-2xl">Under construction<h1>
    </div>
  </section>

  <section id="knowledgebase" class="bg-neutral-900 snap-start w-full h-fit">
    <div class="w-full h-full pb-8 flex flex-col items-center justify-center">
      <h1 class="font-extrabold pb-8 text-2xl">🗃️ Tech Knowledgebase 🗃️</h1>
        <KnowledgeGraph/>
    </div>
  </section>
  <div class="w-full h-16 bg-gradient-to-b from-main2 bg-neutral-700"></div>
  <footer id="footer" class="bg-neutral-700 snap-start w-full h-60"></footer>
</main>

<style>
</style>
