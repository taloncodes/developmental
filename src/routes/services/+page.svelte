<script>
    import '../../app.css';
    import '../../app.scss'
    import Form from '../../components/Form.svelte';
    import { tick } from 'svelte';
    import { onMount } from 'svelte';
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

  

<div class="p:10 md:p-20">

  <h1 class="text-5xl md:text-6xl flex text-start justify-start">
      <span class="text-accent-primary"><b>.</b></span>
      <span> <b>{@html getSegmentedText(displayText)}</b></span>
  </h1>
    We provide comprehensive solutions for businesses looking to grow their online presence. No matter what stage you are currently at. Need a new website to showcase your brand? Custom software to automate your business processes? Or maybe you already have a website that's not performing as you'd expect? Browse our services below to learn more.
</div>

<section>

  {#each sections as section}
	<div class="p:10 md:p-20">
		<h2 class='text-4xl py-5 md:py-10'><b>{section.title}</b></h2>
		<button onclick={() => toggleSection(section.id)}>+</button>
	</div>

	{#if section.isOpen}
		<div class="modal text-xl">{section.content}</div>
	{/if}
{/each}


    <div class="p:10 md:p-20">
    <h2 class="text-4xl py:5 md:py-10"><b>Web Design</b></h2>
    <p class="text-xl">We create visually appealing, user-friendly websites that engage your visitors and enhance their experience.</p>
    <h2 class="text-4xl py:5 md:py-10"><b>Web Development</b></h2>
    <p class="text-xl">Our web development services ensure that your website is fast, functional, and optimized for all devices.</p>
    <h2 class="text-4xl py:5 md:py-10"><b>Logo & Branding</b></h2>
    <p class="text-xl">We help you establish a strong brand identity with custom logos and branding elements that resonate with your audience.</p>
    <h2 class="text-4xl py:5 md:py-10"><b>Site Audit</b></h2>
    <p class="text-xl">Our site audit service provides an in-depth analysis of your website’s performance, and SEO.</p>
    <h2 class="text-4xl py:5 md:py-10"><b>On-Page Optimisation</b></h2>
    <p class="text-xl">We enhance your website's content, structure and improve search engine rankings </p>
    <h2 class="text-4xl py:5 md:py-10"><b>Custom Solutions</b></h2>
    <p class="text-xl">Streamline and automate your business processes. Whether that's an invoice generator, a quote calculator, or something completely unique to you.</p>
    
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

    p {
        color: #FAFAFA;
    }
</style>