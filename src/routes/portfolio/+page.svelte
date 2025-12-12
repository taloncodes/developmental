<script>
    import '../../app.css';
    import '../../app.scss'
    import Form from '../../components/Form.svelte';
    import { tick } from 'svelte';
    import { onMount } from 'svelte';
    import plus from '$lib/graphics/plus.png';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import wags from '$lib/demo/wags.png';
    import journal from '$lib/demo/journal.png';
    import lvm from '$lib/demo/lvm.png';

    let modalOpen = $state(false);
  
    let clients = $state([
      { id: 'wags-n-whiskers',title: 'Wags n Whiskers Pet Services', isOpen: false,
        content: "This custom-built website for Wags n Whiskers Pet Services was designed with speed and brand identity at its core. Fully responsive for all device types, it showcases the business's key features while promoting a strong brand voice. The client aimed to enhance their online presence, attract organic traffic, and provide an easy way for customers to make direct booking enquiries.",
        image: wags,
        tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'Mailgun'],
        features: ['Google Analytics', 'E-mail Notifications', 'Contact Form', 'Bespoke Design', 'SEO Optimisation', 'Performance Optimisation']
       },
    
    ]);


        let personal = $state([
      { id: 'ai-journal',title: 'AI Journal', isOpen: false,
        content: "This full-stack journalling app was crafted using SvelteKit and MongoDB, with Open Router API integration to generate tailored summaries and action points using DeepSeek AI. Users can log daily reflections, track their mood, and revisit past entries through a calendar interface. Designed with a focus on mindfulness, responsive design and a calming user experience.",
        image: journal,
        tech: ['SvelteKit', 'JavaScript', 'Node', 'MongoDB', 'Tailwind CSS', 'DeepSeek AI'],
        features: ['Secure Authentication', 'CRUD Journal Entires', 'AI Summaries & Actions', 'Mood Slider', 'Calendar View', 'Responsive UI']
       },
       { id: 'lvm-player',title: 'Interactive Music Player', isOpen: false,
        content: "A custom music player designed to showcase an electronic music EP. Bespoke, responsive design aligning with the artist's aesthetic. This interactive web app enhances the artist's vision, offering a unique listening experience that enables fans to explore the music in a new way.",
        image: lvm,
        tech: ['Svelte', 'CSS', 'HTML', 'JavaScript', 'Web Audio API'],
        features: ['Audio Play/Stop', 'Track Select', 'Frequency Analyser', 'Hi-Pass Filter', 'Lo-Pass Filter', 'Subtle Animation']
       },
       
       
    ]);


    const textSegments = [
    { text: "/", class: "text-accent-primary" },
    { text: "portfolio", class: "text-accent-one" }
    ];

let fullText = textSegments.map(segment => segment.text).join('');
let displayText = $state('');

    async function typewriterEffect() {
    for (let i = 0; i <= fullText.length; i++) {
        displayText = fullText.slice(0, i);
        await tick();
        await new Promise(resolve => setTimeout(resolve, 75));
    }
}

function getSegmentedText(displayText) {
    let output = '';
    let currentIndex = 0;

    for (const segment of textSegments) {
        const segmentText = displayText.slice(currentIndex, currentIndex + segment.text.length);
        output += `<span class="${segment.class}">${segmentText}</span>`;
        currentIndex += segment.text.length;
    }

    return output;
}

    function openModal(){
        modalOpen = !modalOpen;
        document.querySelector('body').style.overflow = 'hidden';

    };


    onMount(() => {
      typewriterEffect();
    });
</script>

<section>

  <Form bind:visible={modalOpen} />

  

<div class="p-10 md:p-20 hero-animated border-black border-b-2">

  <h1 class="text-5xl md:text-6xl flex text-start justify-start">
      <span class="text-accent-primary"><b>.</b></span>
      <span> <b>{@html getSegmentedText(displayText)}</b></span>
  </h1>
  <p class="text-xl py-5 md:py-10">Check out some samples of live client sites and personal projects that I've been working on below.
</div>

<section>

  <div class="p-10 md:p-20 border-black border-b-2">

    <h2 class="text-3xl md:text-4xl"><b>Client Showcase</b></h2>

 {#each clients as client (client.id)}
  <div class="mt-10 flex flex-col gap-4">
    <h2 class="text-2xl md:text-3xl font-semibold md:pt-5">
      {client.title}
    </h2>

    <p class="text-lg leading-relaxed max-w-3xl">
      {client.content}
    </p>

    <img
      class="client-container w-full max-w-4xl mt-4 rounded-2xl border border-black/10 shadow-sm"
      src={client.image}
      alt="{client.title} Homepage"
    />

    <div class="mt-6">
      <h3 class="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 mb-2">
        Tech stack
      </h3>
      <ul class="flex flex-wrap gap-2">
        {#each client.tech as tech}
          <li
            class="px-3 py-1 text-xs md:text-sm rounded-full border border-neutral-300/70 bg-white/70 backdrop-blur-sm text-neutral-800"
          >
            {tech}
          </li>
        {/each}
      </ul>
    </div>

    <div class="mt-4">
      <h3 class="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 mb-2">
        Features
      </h3>
      <ul class="flex flex-wrap gap-2">
        {#each client.features as feature}
          <li
            class="px-3 py-1 text-xs md:text-sm rounded-full bg-neutral-900 text-neutral-50"
          >
            {feature}
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/each}

</div>


<div class="p-10 md:p-20">

    <h2 class="text-3xl md:text-4xl"><b>Projects</b></h2>

 {#each personal as project (project.id)}
  <div class="mt-10 flex flex-col gap-4">
    <h2 class="text-2xl md:text-3xl font-semibold pt-5">
      {project.title}
    </h2>

    <p class="text-lg leading-relaxed max-w-3xl">
      {project.content}
    </p>

    <img
      class="client-container w-full max-w-4xl mt-4 rounded-2xl border border-black/10 shadow-sm"
      src={project.image}
      alt="{project.title} Homepage"
    />

    <div class="mt-6">
      <h3 class="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 mb-2">
        Tech stack
      </h3>
      <ul class="flex flex-wrap gap-2">
        {#each project.tech as tech}
          <li
            class="px-3 py-1 text-xs md:text-sm rounded-full border border-neutral-300/70 bg-white/70 backdrop-blur-sm text-neutral-800"
          >
            {tech}
          </li>
        {/each}
      </ul>
    </div>
    
    <div class="mt-4">
      <h3 class="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 mb-2">
        Features
      </h3>
      <ul class="flex flex-wrap gap-2">
        {#each project.features as feature}
          <li
            class="px-3 py-1 text-xs md:text-sm rounded-full bg-neutral-900 text-neutral-50"
          >
            {feature}
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/each}

</div>

</section>

    <div class="flex mb-12 mt-6">

    <button 
  onclick={openModal} 
  class="px-6 m-auto w-fit py-3 text-xl text-dark mbg-yellow rounded-xl shadow-2xl z-3 cursor-pointer transition-all flex items-center gap-2 hover:bg-dark hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.75"
    stroke="currentColor"
    class="w-5 h-5 relative top-[1px]"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0-9.75 6.75L2.25 6.75"
    />
  </svg>

  <span>Get In Touch</span>
</button>


          </div>
  </section>
  

<style>

    .hero-animated {
    background: radial-gradient(
        circle at 30% 40%,
        #E8E1D8,
        #EDEDED 80%
    );
    background-size: cover;
    }

    .client-container{
        border: solid, black, 1px;
        border-radius: 5px;
    }


</style>