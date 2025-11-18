<script>

import { tick } from 'svelte';
import { goto } from '$app/navigation';
import Form from '../components/Form.svelte';
import { page } from '$app/state';
import '../app.css';
import '../app.scss';
import wave from '$lib/icons/wave_icon.png';
import qMark from '$lib/icons/question_icon.png';
import tools from '$lib/icons/tools_icon.png';
import response from '$lib/icons/mobile_first.svg';
import shake from '$lib/icons/shake_icon.svg';
import seo from '$lib/icons/seo_icon.svg';
import downArrow from '$lib/icons/down_icon.svg';
import hero from '$lib/graphics/lol.png';
import { onMount } from 'svelte';
import arrow from '$lib/graphics/arrow.gif';

const textSegments = [
    { text: "developmen", class: "text-primary" },
    { text: "/", class: "text-accent-primary" },
    { text: "tal", class: "text-accent-one" }
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
     

    let modalOpen = $state(false);

    function openModal(){
        modalOpen = !modalOpen;
        document.querySelector('body').style.overflow = 'hidden';

    };

    

    let headerHeight = $state(0);
    let heroSection;

    function lockHeroHeight() {
        if (heroSection) {
            const fullHeight = heroSection.offsetHeight;
            heroSection.style.height = `${fullHeight}px`;
        }
    }

    onMount(() => {
        const header = document.getElementById('header');
        if (header) {
            headerHeight = header.offsetHeight;
        }

        // Initially use dvh
        if (heroSection) {
            heroSection.style.height = `calc(100dvh - ${headerHeight}px)`;
        }

        // Once layout stabilizes, fix to px to avoid jumpiness
        requestAnimationFrame(() => {
            lockHeroHeight();
        });

        typewriterEffect();
    });


</script>



<Form bind:visible={modalOpen} />

<section bind:this={heroSection} class="hero top-0 hero-animated">
    
    <div>
    <div class="flex flex-col md:flex-row justify-center p:10 md:p-20">
        <div class="flex flex-col justify-center text-start max-w-xl space-y-6">
            <div class="w-100%">
                <a href="/">
                    <h1 class="text-5xl md:text-6xl flex text-start justify-start">
                        <span class="text-accent-primary"><b>.</b></span>
                        <span> <b>{@html getSegmentedText(displayText)}</b></span>
                    </h1>
                </a>
            </div>
            <h2 class="text-4xl mb-[36px] text-primary">
                Quality web solutions, tailored to you.
            </h2>
            <button class="px-6 py-3 text-lg text-dark rounded-lg mbg-yellow home-nav-button" onclick={openModal}>
                Get in Touch
            </button>
        </div>
        <div class="flex min-w-[400px] max-w-[500px] align-middle">
            <img src={hero} alt="mock-up website" class="object-contain" />
        </div>
    </div>
    <div class="w-[150px] h-auto m-auto">
        <img src={arrow} alt="click to read more">
    </div>
</section>

<section>
    <div class="p:10 md:p-20">
    <h2 class="text-4xl py:5 md:py-10"><b>A bit about me...</b></h2>
    <p class="text-xl">Hi! I'm Talon, a freelance web developer with a background in digital media, education and marketing. I build modern, fast websites and love helping businesses bring their ideas to life.</p>
    <h2 class="text-4xl py:5 md:py-10"><b>My Process</b></h2>
    <p class="text-xl">I create custom websites that are designed for your brand, not pulled from a generic template. Every site I build is focused on clean design, great performance, and helping <b>you</b> achieve your business goals</p>
    <h2 class="text-4xl py:5 md:py-10"><b>Why work with Developmental?</b></h2>
    <p class="text-xl">No bloated templates. No agency fees. Just one person dedicated to building your site the right way, with full control over design, performance and personal service every step of the way.</p>
    <h2 class="text-4xl py:5 md:py-10"><b>Ready to get started?</b></h2>
    </div>

</section>



<style>

h1 {
        white-space: nowrap;
        overflow: hidden;
        animation: blink 1.2s steps(2, start) infinite;
    }



    .hero-animated {
    background: radial-gradient(
        circle at 30% 40%,
        #E8E1D8,
        #EDEDED 80%
    );
    background-size: cover;
    border-bottom: #E8E1D8 solid 3px;
    }



</style>