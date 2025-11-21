<script>
    import '../../app.css';
    import '../../app.scss'
    import Form from '../../components/Form.svelte';
    import { tick } from 'svelte';
    import { onMount } from 'svelte';
    import plus from '$lib/graphics/plus.png';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let modalOpen = $state(false);
  
    let sections = $state([
      { id: 'web-design',title: 'Web Design', isOpen: false,
        content: 'We create visually appealing, user-friendly websites that engage your visitors and enhance their experience.'
       },
      { id: 'web-dev', title: 'Web Development', isOpen: false,
        content: 'Our web development services ensure that your website is fast, functional, and optimized for all devices.'
       },
      { id: 'logo', title: 'Logo & Branding', isOpen: false,
        content: 'We help you establish a strong brand identity with custom logos and branding elements that resonate with your audience.'
       },
      { id: 'site-audit', title: 'Site Audit', isOpen: false,
        content: 'Our site audit service provides an in-depth analysis of your website’s performance, and SEO.'
       },
      { id: 'optimisation', title: 'On-Page Optimisation', isOpen: false,
        content: 'We enhance your website’s content, structure, and performance to improve search engine rankings and user experience.'
       },
      { id: 'custom', title: 'Custom Solutions', isOpen: false,
        content: "Streamline and automate your business processes. Whether that's an invoice generator, a quote calculator, or something completely unique to you"
       },
    ]);

    function toggleSection(id) {
      sections = sections.map(section =>
        section.id === id
          ? { ...section, isOpen: !section.isOpen }
          : section
		);
	}


    const textSegments = [
    { text: "/", class: "text-accent-primary" },
    { text: "services", class: "text-accent-one" }
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
  <p class="text-xl py-5 md:py-10">We provide comprehensive solutions for businesses looking to grow their online presence. No matter what stage you are currently at. 
    <br><br>
   Need a new website to showcase your brand? Custom software to automate your business processes? 
   Or maybe you already have a website that's not performing as you'd expect? 
   <br><br>
   <b>Tap on a service below to learn more</b>
</div>

<section>

  <div class="p-10 md:p-20">

  {#each sections as section (section.id)}

	<div class="dot-hover" class:active={section.isOpen === true}>
    <button class="image-button flex gap-8" onclick={() => toggleSection(section.id)}>
    <h2 class='text-4xl py:5 md:py-10'><b>{section.title}</b></h2>
    <h2 class='text-4xl py:5 md:py-10'><b>{section.isOpen ? '–' : '+'}</b></h2></button>	
		
	</div>


	{#if section.isOpen}
		<div 
    class="modal text-xl section-text"
    transition:fade={{duration: 250, delay: 250}}
    >{section.content}</div>
	{/if}
{/each}
</div>

</section>


    
    

    <div class="flex mb-12 mt-6">

    <button 
                onclick={openModal} 
                class="px-6 m-auto w-fit py-3 text-xl text-dark mbg-yellow rounded-xl shadow-2xl z-3 cursor-pointer transition-all hover:bg-dark hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <strong>Ready To Go? Get In Touch!</strong>
            </button>

          </div>
  </section>
  

<style>


  .dot-hover {
      position: relative;
    }
  

    .dot-hover::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;        
      height: 6px;
      background: currentColor;
      transform: scaleX(0);
      transform-origin: left;
      border-radius: 2px;
      opacity: 0;
      transition:
        opacity .25s cubic-bezier(.4,0,.2,1),
        transform .25s cubic-bezier(.4,0,.2,1);
    }
  
    .dot-hover:hover::after {
      opacity: 1;
      transform: scaleX(.25);
    }
  
    .dot-hover.active::after {
      opacity: 1;
      transform: scaleX(1);
    }

    .hero-animated {
    background: radial-gradient(
        circle at 30% 40%,
        #E8E1D8,
        #EDEDED 80%
    );
    background-size: cover;
    }

    .section-text{
      padding-top: 20px
    }

</style>