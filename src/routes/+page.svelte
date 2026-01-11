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
import { fadeOnScroll } from '$lib/fadeOnScroll';
import lappytappy from '$lib/graphics/lappytappy.png';
import laptop from '$lib/graphics/hero_layer_1v3.webp';
import shadow from '$lib/graphics/hero_layer_2.svg';

const textSegments = [
  { text: "developmen", class: "text-primary" },
  { text: "/", class: "text-accent-primary" },
  { text: "tal", class: "text-accent-primary" }
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

function scrollToAbout(){
  const el = document.getElementById('about');
  el?.scrollIntoView({ behavior: 'smooth' });
}

onMount(() => {
  const header = document.getElementById('header');
  if (header) {
    headerHeight = header.offsetHeight;
  }

  if (heroSection) {
    heroSection.style.height = `calc(100dvh - ${headerHeight}px)`;
  }

  requestAnimationFrame(() => {
    lockHeroHeight();
  });

  typewriterEffect();
});
</script>

<svelte:head>
  <link rel="preload" as="image" href={laptop} type="image/svg+xml" fetchpriority="high" loading="eager" decoding="async" />
</svelte:head>

<Form bind:visible={modalOpen} />

<section bind:this={heroSection} class="hero top-0 hero-animated border-black border-b-2 flex">
  <div class="w-full flex items-center justify-center px-6 py-14 sm:py-16 md:py-20 lg:py-24">
    <div class="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 lg:gap-20">

      <!-- TEXT -->
      <div class="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-8 text-center md:text-left relative z-20  sm:pl-0 md:pl-[clamp(24px,10%,64px)]">

        <div class="w-full hidden md:block">
          <a href="/">
            <h1 class="text-4xl md:text-5xl lg:text-6xl flex md:justify-start justify-center">
              <span class="text-accent-primary"><b>.</b></span>
              <span><b>{@html getSegmentedText(displayText)}</b></span>
            </h1>
          </a>

          <h2 class="text-xl md:text-3xl lg:text-4xl text-primary mt-3 md:mt-4">
            Quality web solutions, tailored to you.
          </h2>
        </div>

        <button
  onclick={openModal}
  class="px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl text-dark rounded-lg mbg-yellow home-nav-button mx-auto md:mx-0
         flex items-center justify-center gap-2 md:gap-3"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.75"
    stroke="currentColor"
    class="w-5 h-5 md:w-6 md:h-6 relative top-[1px]"
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

      <!-- IMAGE -->
      <div class="order-1 md:order-2 w-full md:w-1/2 flex flex-col items-center md:items-end relative z-10">

        <!-- mobile heading + tagline -->
        <div class="w-full block md:hidden text-center mb-6">
          <a href="/">
            <h1 class="hero-title text-[2.875rem] sm:text-5xl flex justify-center">
              <span class="text-accent-primary"><b>.</b></span>
              <span><b>{@html getSegmentedText(displayText)}</b></span>
            </h1>
          </a>
          <h2 class="text-2xl text-primary mt-3">
            Quality web solutions, tailored to you.
          </h2>
        </div>

        <!-- laptop -->
        <div class="relative w-full max-w-[420px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px] aspect-[16/10]">
          <img
            src={laptop}
            alt="mock-up website"
            class="hero-macbook__device object-contain absolute inset-0 m-auto block"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
          <div class="hero-macbook__shadow"></div>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="about" use:fadeOnScroll class="fade-on-scroll">
  <div class="py-10 md:py-20 px-10 md:px-20 max-w-[1200px] mx-auto">
    <h2 class="text-3xl md:text-4xl py-5 md:py-10"><b>A bit about me</b></h2>
<p class="text-xl space-y-4">
  <span class="block">
    I'm Talon, a freelance web developer with a background in digital media, education and marketing.
  </span>
  <span class="block">
    I design and build modern, high-performance websites and love helping businesses bring their ideas to life.
  </span>
</p>

<hr class="mt-5 md:mt-12 border-black/20" />

    <h2 class="text-3xl md:text-4xl py-5 md:py-10"><b>My Process</b></h2>
<p class="text-xl space-y-4">
  <span class="block">
    I create custom websites designed around your brand, not pulled from a generic template.
  </span>
  <span class="block">
    Every site I build focuses on clean design, strong performance, and helping <b>you</b> achieve <b>your</b> business goals.
  </span>
</p>

<hr class="mt-5 md:mt-12 border-black/20" />

    <h2 class="text-3xl md:text-4xl py-5 md:py-10"><b>Why Developmental?</b></h2>
<p class="text-xl space-y-4">
  <span class="block">
    No bloated templates. No agency fees.
  </span>
  <span class="block">
    Just one person dedicated to building your site the right way, with full control over design, performance and personal service every step of the way.
  </span>
</p>

<hr class="mt-5 md:mt-12 border-black/20" />

    <h2 class="text-3xl md:text-4xl py-5 md:py-10"><b>How it works</b></h2>
<p class="text-xl space-y-4">
  <span class="block">
    Tell me about your goals so I can understand your business. This can be done via the contact form,
    or by emailing me at
    <a class="link" href="mailto:talon@developmental.pro">talon@developmental.pro</a>.
  </span>

  <span class="block">
    Once we agree on a plan, I’ll get to work on your site and keep you updated throughout the process.
  </span>

  <span class="block">
    Before launch, you’ll receive a preview and can request any final changes.
  </span>

  <span class="block">
    After your site goes live, I’ll remain available for ongoing support, updates and maintenance.
  </span>
</p>

<hr class="mt-5 md:mt-12 border-black/20" />



    <h2 class="text-3xl md:text-4xl py-5 md:py-10"><b>
        <button class="link" alt="click here to get started" onclick={openModal}>Click here</button> to get started.</b></h2>
  </div>
</section>

<style>
h1 {
  white-space: nowrap;
  animation: blink 1.2s steps(2, start) infinite;
}

.hero-animated {
  background: radial-gradient(
    circle at 30% 40%,
    #E8E1D8,
    #EDEDED 80%
  );
  background-size: cover;
}

.link {
  color: #0000FF;
  cursor: pointer;
}

.hero-macbook__device {
  animation: macbookFloat 4s ease-in-out infinite;
  z-index: 1;
}

.hero-macbook__shadow {
  position: absolute;
  bottom: -6%;
  left: 18%;
  transform: translateX(-50%);
  width: 60%;
  height: 18%;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  animation: shadowPulse 4s ease-in-out infinite;
  z-index: 0;
}

@keyframes macbookFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes shadowPulse {
  0%, 100% { transform: scale(.8); opacity: 0.4; }
  50% { transform: scale(0.7); opacity: 0.4; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-macbook__device,
  .hero-macbook__shadow {
    animation: none;
  }
}

@media (max-width: 380px) {
  .hero-title {
    font-size: 2.25rem; /* text-4xl */
  }
}

</style>
