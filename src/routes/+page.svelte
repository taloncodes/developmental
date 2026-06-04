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
	import slatersLogo from '$lib/logos/slaters-contracting-consultancy.png';
	import wagsLogo from '$lib/logos/wags-n-whiskers.png';

	const textSegments = [
		{ text: 'developmen', class: 'text-primary' },
		{ text: '/', class: 'hero-link-blue' },
		{ text: 'tal', class: 'text-primary' }
	];

	let fullText = textSegments.map((segment) => segment.text).join('');
	let displayText = $state('');
	let heroIntroComplete = $state(false);
	const reviewsFullText = './reviews';
	let reviewsDisplayText = $state('');
	let reviewsHeading;
	let reviewsTypewriterStarted = false;
	const clientReviews = [
		{
			quote:
				"The lads have only had positive feedback for the app, it's been a game changer for me.",
			author: 'Lucy',
			company: 'Slaters Contracting & Consultancy',
			logo: slatersLogo,
			logoAlt: 'Slaters Contracting and Consultancy logo'
		},
		{
			quote: "Absolutely recommend! Love my website and it's producing so many leads!",
			author: 'Alice',
			company: 'Wags n Whiskers Pet Services',
			logo: wagsLogo,
			logoAlt: 'Wags n Whiskers logo'
		}
	];
	let activeReviewIndex = $state(0);

	async function typewriterEffect() {
		heroIntroComplete = false;

		for (let i = 0; i <= fullText.length; i++) {
			displayText = fullText.slice(0, i);
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 75));
		}

		await new Promise((resolve) => setTimeout(resolve, 120));
		heroIntroComplete = true;
	}

	async function reviewsTypewriterEffect() {
		if (reviewsTypewriterStarted) return;

		reviewsTypewriterStarted = true;
		reviewsDisplayText = '';

		for (let i = 0; i <= reviewsFullText.length; i++) {
			reviewsDisplayText = reviewsFullText.slice(0, i);
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 75));
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

	function openModal() {
		modalOpen = !modalOpen;
		document.querySelector('body').style.overflow = 'hidden';
	}

	let headerHeight = $state(0);
	let heroSection;

	function lockHeroHeight() {
		if (heroSection) {
			const fullHeight = heroSection.offsetHeight;
			heroSection.style.height = `${fullHeight}px`;
		}
	}

	function scrollToAbout() {
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
		const reviewTimer = window.setInterval(() => {
			activeReviewIndex = (activeReviewIndex + 1) % clientReviews.length;
		}, 6500);

		let reviewsObserver;
		if (reviewsHeading) {
			reviewsObserver = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						reviewsTypewriterEffect();
						reviewsObserver.unobserve(reviewsHeading);
					}
				},
				{ threshold: 0.4 }
			);

			reviewsObserver.observe(reviewsHeading);
		}

		return () => {
			window.clearInterval(reviewTimer);
			reviewsObserver?.disconnect();
		};
	});
</script>

<svelte:head>
	<link
		rel="preload"
		as="image"
		href={laptop}
		type="image/svg+xml"
		fetchpriority="high"
		loading="eager"
		decoding="async"
	/>
</svelte:head>

<Form bind:visible={modalOpen} />

<section bind:this={heroSection} class="hero hero-animated top-0 flex border-b-2 border-black">
	<div class="flex w-full items-center justify-center px-6 py-14 sm:py-16 md:py-20 lg:py-24">
		<div
			class="flex w-full max-w-6xl flex-col items-center justify-center gap-10 md:flex-row md:gap-14 lg:gap-20"
		>
			<!-- TEXT -->
			<div
				class="relative z-20 order-2 flex w-full flex-col justify-center gap-6 text-center sm:pl-0 md:order-1 md:w-1/2 md:gap-8 md:pl-[clamp(24px,10%,64px)] md:text-left"
			>
				<div class="fade-on-scroll hidden w-full md:block" use:fadeOnScroll>
					<a href="/">
						<h1 class="flex justify-center text-4xl md:justify-start md:text-5xl lg:text-6xl">
							<span class="hero-link-blue"><b>.</b></span>
							<span class="typewriter-stack">
								<span class="typewriter-ghost" aria-hidden="true"
									><b>{@html getSegmentedText(fullText)}</b></span
								>
								<span class="typewriter-live"><b>{@html getSegmentedText(displayText)}</b></span>
							</span>
						</h1>
					</a>

					<h2
						class="text-primary hero-tagline hero-tagline-desktop mt-3 text-xl md:mt-4 md:text-3xl lg:text-4xl"
						class:visible={heroIntroComplete}
					>
						<span class="hero-tagline-part">Quality web solutions,</span>
						<span class="hero-tagline-part">tailored to you.</span>
					</h2>
				</div>

				<button
					onclick={openModal}
					class="home-nav-button home-hero-cta fade-on-scroll mx-auto flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-lg
         md:mx-0 md:gap-3 md:px-6 md:py-4 md:text-xl"
					use:fadeOnScroll
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.75"
						stroke="currentColor"
						class="relative top-[1px] h-5 w-5 md:h-6 md:w-6"
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
			<div
				class="relative z-10 order-1 flex w-full flex-col items-center md:order-2 md:w-1/2 md:items-end"
			>
				<!-- mobile heading + tagline -->
				<div class="fade-on-scroll mb-6 block w-full text-center md:hidden" use:fadeOnScroll>
					<a href="/">
						<h1 class="hero-title flex justify-center text-[2.875rem] sm:text-5xl">
							<span class="hero-link-blue"><b>.</b></span>
							<span class="typewriter-stack">
								<span class="typewriter-ghost" aria-hidden="true"
									><b>{@html getSegmentedText(fullText)}</b></span
								>
								<span class="typewriter-live"><b>{@html getSegmentedText(displayText)}</b></span>
							</span>
						</h1>
					</a>
					<h2 class="text-primary hero-tagline mt-3 text-2xl" class:visible={heroIntroComplete}>
						<span class="hero-tagline-part">Quality web solutions,</span>
						<span class="hero-tagline-part"> tailored to you.</span>
					</h2>
				</div>

				<!-- laptop -->
				<div
					class="fade-on-scroll relative aspect-[16/10] w-full max-w-[420px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px]"
					use:fadeOnScroll
				>
					<img
						src={laptop}
						alt="mock-up website"
						class="hero-macbook__device absolute inset-0 m-auto block object-contain"
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

<section id="about">
	<div class="mx-auto max-w-[1200px] px-10 py-10 md:px-20 md:py-20">
		<div class="about-intro-grid fade-on-scroll" use:fadeOnScroll>
			<div class="about-intro-copy">
				<h2 class="text-3xl md:text-4xl">
					<b>A bit about me<span class="hero-link-blue">.</span></b>
				</h2>
				<p class="text-xl">
					I'm Talon, a freelance web developer with a background in digital media, education and
					marketing.
				</p>
				<p class="text-xl">
					I design and build modern, high-performance websites that give small businesses
					agency-quality results without the agency price tag.
				</p>
			</div>

			<div class="about-highlights" aria-label="Developmental service highlights">
				<article class="about-highlight">
					<span class="about-highlight__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<circle cx="12" cy="8" r="4" />
							<path d="M4 21a8 8 0 0 1 16 0" />
						</svg>
					</span>
					<span>
						<strong>Solo developer</strong>
						<span>You work directly with me from start to finish.</span>
					</span>
				</article>

				<article class="about-highlight">
					<span class="about-highlight__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<rect x="3" y="5" width="18" height="14" rx="2" />
							<path d="m10 10-3 2 3 2" />
							<path d="m14 14 3-2-3-2" />
							<path d="m13 9-2 6" />
						</svg>
					</span>
					<span>
						<strong>Custom builds</strong>
						<span>Every site is tailored to your brand and goals.</span>
					</span>
				</article>

				<article class="about-highlight">
					<span class="about-highlight__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<path d="M4 14a8 8 0 0 1 16 0" />
							<path d="M12 14l4-4" />
							<path d="M6.4 8.4l1.4 1.4" />
							<path d="M17.6 8.4l-1.4 1.4" />
							<path d="M12 6v2" />
							<path d="M5 18h14" />
						</svg>
					</span>
					<span>
						<strong>Performance focused</strong>
						<span>Clean, fast and built with best practices.</span>
					</span>
				</article>
			</div>
		</div>

		<hr class="fade-on-scroll mt-5 border-black/20 md:mt-12" use:fadeOnScroll />

		<div class="process-section fade-on-scroll" use:fadeOnScroll>
			<h2 class="text-3xl md:text-4xl">
				<b>My Process<span class="hero-link-blue">.</span></b>
			</h2>

			<div class="process-steps" aria-label="Website project process">
				<article class="process-step">
					<span class="process-step__number">01</span>
					<div class="process-step__body">
						<h3>Discover</h3>
						<p>
							Tell me about your goals, audience and what success looks like via the contact form or
							email.
						</p>
					</div>
				</article>

				<div class="process-arrow" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none">
						<path d="M5 12h14" />
						<path d="m13 6 6 6-6 6" />
					</svg>
				</div>

				<article class="process-step">
					<span class="process-step__number">02</span>
					<div class="process-step__body">
						<h3>Design &amp; Build</h3>
						<p>
							I design your website with a focus on aesthetics, performance and achieving your
							business goals.
						</p>
					</div>
				</article>

				<div class="process-arrow" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none">
						<path d="M5 12h14" />
						<path d="m13 6 6 6-6 6" />
					</svg>
				</div>

				<article class="process-step">
					<span class="process-step__number">03</span>
					<div class="process-step__body">
						<h3>Launch &amp; Support</h3>
						<p>
							You review, we refine, then go live. I'm here for final changes, updates and ongoing
							support.
						</p>
					</div>
				</article>
			</div>
		</div>

		<hr class="fade-on-scroll mt-5 border-black/20 md:mt-12" use:fadeOnScroll />

		<div class="why-section fade-on-scroll" use:fadeOnScroll>
			<h2 class="text-3xl md:text-4xl">
				<b>Why Developmental<span class="hero-link-blue">?</span></b>
			</h2>

			<div class="why-cards" aria-label="Reasons to choose Developmental">
				<article class="why-card fade-on-scroll" use:fadeOnScroll>
					<span class="why-card__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
							<path d="M14 3v5h5" />
						</svg>
					</span>
					<h3>No bloated templates</h3>
					<p>Every site is built from the ground up for your business.</p>
				</article>

				<article class="why-card fade-on-scroll" use:fadeOnScroll>
					<span class="why-card__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<path d="M12 3v18" />
							<path
								d="M16 7.5c-.8-.9-2-1.5-3.6-1.5-2 0-3.4 1-3.4 2.6 0 4 7 1.9 7 6 0 1.8-1.6 3.4-4.1 3.4-1.8 0-3.3-.7-4.2-1.9"
							/>
						</svg>
					</span>
					<h3>No agency fees</h3>
					<p>You get expert work without the extra overhead.</p>
				</article>

				<article class="why-card fade-on-scroll" use:fadeOnScroll>
					<span class="why-card__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<path d="m13 2-8 12h6l-1 8 8-12h-6z" />
						</svg>
					</span>
					<h3>Clean, fast code</h3>
					<p>Optimised for speed, SEO and a smooth user experience.</p>
				</article>

				<article class="why-card fade-on-scroll" use:fadeOnScroll>
					<span class="why-card__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<circle cx="12" cy="8" r="4" />
							<path d="M4 21a8 8 0 0 1 16 0" />
						</svg>
					</span>
					<h3>Personal service</h3>
					<p>One point of contact who cares about your success.</p>
				</article>
			</div>

			<hr class="why-reviews-rule fade-on-scroll border-black/20" use:fadeOnScroll />

			<h2
				bind:this={reviewsHeading}
				class="why-reviews-heading fade-on-scroll text-3xl md:text-4xl"
				aria-label="./reviews"
				use:fadeOnScroll
			>
				<span class="typewriter-stack">
					<span class="typewriter-ghost" aria-hidden="true">{reviewsFullText}</span>
					<span class="typewriter-live">{reviewsDisplayText}</span>
				</span>
			</h2>

			<section
				class="why-testimonial fade-on-scroll"
				aria-live="polite"
				aria-label="Client reviews"
				use:fadeOnScroll
			>
				<div class="why-testimonial__card">
					{#each clientReviews as review, index}
						<div
							class="why-testimonial__slide"
							class:active={activeReviewIndex === index}
							aria-hidden={activeReviewIndex !== index}
						>
							<blockquote>
								<span class="why-testimonial__quote-mark" aria-hidden="true">“</span>
								<span class="why-testimonial__quote-text">{review.quote}</span>
								<span class="why-testimonial__quote-mark" aria-hidden="true">”</span>
							</blockquote>

							<div class="why-testimonial__footer">
								<div
									class="why-testimonial__logo-placeholder"
									class:has-logo={review.logo}
									aria-label={review.logo ? undefined : `${review.company} logo placeholder`}
								>
									{#if review.logo}
										<img src={review.logo} alt={review.logoAlt} />
									{:else}
										<span>Logo</span>
									{/if}
								</div>
								<p><b>{review.author}</b> - {review.company}</p>
							</div>
						</div>
					{/each}
				</div>

				<div
					class="why-testimonial__stars fade-on-scroll"
					aria-label="Five star review"
					use:fadeOnScroll
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</div>
			</section>

			<hr class="ready-rule border-black/20" />

			<section class="ready-section">
				<h2 class="text-3xl md:text-4xl">
					<b>Ready to get your website sorted?</b>
				</h2>

				<div class="ready-card">
					<h3>
						<button class="link ready-card__inline-link" onclick={openModal}>Click here</button>
						to get started.
					</h3>
				</div>
			</section>
		</div>
	</div>
</section>

<style>
	h1 {
		white-space: nowrap;
		animation: blink 1.2s steps(2, start) infinite;
	}

	.hero-animated {
		background: radial-gradient(circle at 30% 40%, #e8e1d8, #ededed 80%);
		background-size: cover;
	}

	.link {
		color: #0000ff;
		cursor: pointer;
	}

	:global(.hero-link-blue) {
		color: #1b1b1b;
	}

	.typewriter-stack {
		display: inline-grid;
		grid-template-areas: 'typewriter';
	}

	.typewriter-stack > span {
		grid-area: typewriter;
		justify-self: start;
		text-align: left;
	}

	.typewriter-ghost {
		visibility: hidden;
	}

	.hero-tagline {
		opacity: 1;
	}

	.hero-tagline-part {
		display: inline-block;
		opacity: 0;
		transition: opacity 0.6s ease-out;
	}

	.hero-tagline-desktop .hero-tagline-part {
		display: block;
	}

	.hero-tagline.visible .hero-tagline-part {
		opacity: 1;
	}

	.hero-tagline.visible .hero-tagline-part:nth-child(2) {
		transition-delay: 0.5s;
	}

	.home-hero-cta,
	.home-hero-cta:hover {
		width: fit-content;
		max-width: 100%;
		background-color: #1b1b1b;
		color: #e7e1d8;
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

	.about-intro-grid {
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		padding: clamp(1.25rem, 3vw, 2.5rem) 0;
	}

	.about-intro-copy {
		display: flex;
		flex-direction: column;
		gap: clamp(1.75rem, 3vw, 3rem);
	}

	.about-intro-copy p {
		max-width: 34rem;
		line-height: 1.65;
	}

	.about-highlights {
		align-self: start;
		display: grid;
		gap: clamp(1.25rem, 3vw, 2rem);
	}

	.about-highlight {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		align-items: center;
		gap: clamp(1.25rem, 3vw, 2.25rem);
		min-height: 5.75rem;
	}

	.about-highlight__icon {
		display: grid;
		place-items: center;
		width: clamp(3.25rem, 7vw, 4.25rem);
		aspect-ratio: 1;
		border-radius: 50%;
		background: #ededed;
		color: #1b1b1b;
	}

	.about-highlight__icon svg {
		width: 45%;
		height: 45%;
		stroke: currentColor;
		stroke-width: 1.75;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.about-highlight strong,
	.about-highlight span span {
		display: block;
	}

	.about-highlight strong {
		font-size: clamp(1.125rem, 2vw, 1.35rem);
		line-height: 1.2;
	}

	.about-highlight span span {
		margin-top: 0.35rem;
		color: rgba(27, 27, 27, 0.78);
		font-size: clamp(0.95rem, 1.4vw, 1.05rem);
		line-height: 1.35;
	}

	@media (min-width: 768px) {
		.about-intro-grid {
			grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.95fr);
			align-items: start;
		}
	}

	@media (max-width: 520px) {
		.about-highlight {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}

	.process-section {
		padding: clamp(2rem, 5vw, 4rem) 0 clamp(1.5rem, 4vw, 3rem);
	}

	.process-steps {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
		margin-top: clamp(2rem, 5vw, 4rem);
	}

	.process-step {
		display: grid;
		gap: 1.5rem;
	}

	.process-step__number {
		display: inline-grid;
		place-items: center;
		width: clamp(3.25rem, 6vw, 4rem);
		aspect-ratio: 1;
		border: 1px solid rgba(27, 27, 27, 0.22);
		border-radius: 50%;
		background: #ededed;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
		color: #1b1b1b;
		font-weight: 700;
		line-height: 1;
	}

	.process-step__body {
		padding-left: 0;
	}

	.process-step h3 {
		font-size: clamp(1.35rem, 2.6vw, 1.75rem);
		font-weight: 700;
		line-height: 1.15;
	}

	.process-step p {
		max-width: 22rem;
		margin-top: 1rem;
		color: rgba(27, 27, 27, 0.78);
		font-size: clamp(1rem, 1.5vw, 1.1rem);
		line-height: 1.65;
	}

	.process-arrow {
		display: none;
		align-self: center;
		color: #1b1b1b;
	}

	.process-arrow svg {
		width: clamp(2rem, 3vw, 2.75rem);
		height: clamp(2rem, 3vw, 2.75rem);
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	@media (min-width: 900px) {
		.process-steps {
			grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr);
			align-items: center;
		}

		.process-arrow {
			display: block;
			margin-top: clamp(2.5rem, 5vw, 4rem);
		}
	}

	@media (max-width: 899px) {
		.process-step {
			grid-template-columns: auto minmax(0, 1fr);
			align-items: start;
		}

		.process-step__body {
			min-height: 100%;
		}
	}

	.why-section {
		padding: clamp(2rem, 5vw, 4rem) 0 clamp(1.5rem, 4vw, 3rem);
	}

	.why-cards {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: clamp(1rem, 2.5vw, 1.75rem);
		margin-top: clamp(2rem, 4vw, 3rem);
	}

	.why-card {
		display: flex;
		min-height: 11.5rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: clamp(1rem, 2vw, 1.4rem);
		border: 1px solid rgba(27, 27, 27, 0.16);
		border-radius: 8px;
		background: #ededed;
		text-align: center;
	}

	.why-card__icon {
		display: grid;
		place-items: center;
		width: clamp(3.1rem, 5vw, 3.75rem);
		aspect-ratio: 1;
		border-radius: 50%;
		background: #e8e1d8;
		color: #1b1b1b;
	}

	.why-card__icon svg {
		width: 45%;
		height: 45%;
		stroke: currentColor;
		stroke-width: 1.75;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.why-card h3 {
		font-size: clamp(1rem, 1.3vw, 1.1rem);
		font-weight: 700;
		line-height: 1.2;
	}

	.why-card p {
		max-width: 13rem;
		color: rgba(27, 27, 27, 0.78);
		font-size: clamp(0.95rem, 1.25vw, 1rem);
		line-height: 1.55;
	}

	.why-reviews-rule {
		margin-top: clamp(2rem, 5vw, 3rem);
	}

	.why-reviews-heading {
		margin-top: clamp(1.5rem, 4vw, 2.5rem);
		color: #1b1b1b;
		font-weight: 700;
		line-height: 1.2;
	}

	.why-testimonial {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(1.5rem, 4vw, 2.5rem);
		margin-top: clamp(2rem, 5vw, 3rem);
	}

	.why-testimonial__card {
		display: grid;
		grid-template-areas: 'review';
		width: 100%;
		min-height: clamp(25rem, 44vw, 32rem);
		overflow: hidden;
		border: 2px solid #000;
		border-radius: 8px;
		background: #1b1b1b;
		color: #ededed;
		box-shadow: 0 1px 0 rgba(255, 255, 255, 0.14);
	}

	.why-testimonial__slide {
		display: grid;
		grid-area: review;
		grid-template-rows: 1fr auto;
		opacity: 0;
		transition: opacity 0.7s ease;
	}

	.why-testimonial__slide.active {
		opacity: 1;
	}

	.why-testimonial blockquote {
		position: relative;
		display: grid;
		align-items: center;
		justify-content: center;
		padding: clamp(3rem, 5vw, 4.5rem) clamp(3.25rem, 6vw, 5rem);
		color: #ededed;
		font-size: clamp(1.55rem, 2.6vw, 2.45rem);
		font-weight: 400;
		line-height: 1.28;
		text-align: center;
	}

	.why-testimonial__quote-mark {
		position: absolute;
		color: #ededed;
		font-size: clamp(3rem, 6vw, 4.75rem);
		font-weight: 700;
		line-height: 0.7;
	}

	.why-testimonial__quote-mark:first-child {
		top: clamp(1.25rem, 3vw, 2rem);
		left: clamp(1.25rem, 3vw, 2rem);
	}

	.why-testimonial__quote-mark:last-child {
		right: clamp(1.25rem, 3vw, 2rem);
		bottom: clamp(1.25rem, 3vw, 2rem);
	}

	.why-testimonial__quote-text {
		max-width: 54rem;
	}

	.why-testimonial__footer {
		display: grid;
		justify-items: center;
		gap: 0.75rem;
		padding: clamp(1rem, 2.5vw, 1.5rem);
		border-top: 2px solid #ededed;
		text-align: center;
	}

	.why-testimonial__logo-placeholder {
		display: grid;
		place-items: center;
		min-width: clamp(8rem, 16vw, 11rem);
		min-height: clamp(3rem, 6vw, 4rem);
		border: 1px dashed rgba(237, 237, 237, 0.7);
		border-radius: 6px;
		color: #ededed;
	}

	.why-testimonial__logo-placeholder.has-logo {
		min-width: clamp(9rem, 18vw, 13rem);
		border: 0;
	}

	.why-testimonial__logo-placeholder img {
		width: min(100%, 13rem);
		max-height: clamp(2.25rem, 5vw, 3.5rem);
		object-fit: contain;
	}

	.why-testimonial__logo-placeholder span {
		color: rgba(237, 237, 237, 0.74);
		font-size: clamp(0.85rem, 1.4vw, 1rem);
		font-weight: 700;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	.why-testimonial__footer p {
		color: #ededed;
		font-size: clamp(0.95rem, 1.5vw, 1.1rem);
		line-height: 1.4;
	}

	.why-testimonial__stars {
		display: flex;
		justify-content: flex-end;
		gap: clamp(0.35rem, 1vw, 0.6rem);
		width: 100%;
	}

	.why-testimonial__stars span {
		width: clamp(2.25rem, 5vw, 3.4rem);
		aspect-ratio: 1;
		background: #1b1b1b;
		clip-path: polygon(
			50% 0%,
			61% 35%,
			98% 35%,
			68% 57%,
			79% 91%,
			50% 70%,
			21% 91%,
			32% 57%,
			2% 35%,
			39% 35%
		);
	}

	.ready-rule {
		margin-top: clamp(2rem, 5vw, 3rem);
	}

	.ready-section {
		padding-top: clamp(1.5rem, 4vw, 2.5rem);
	}

	.ready-card {
		margin-top: clamp(1.5rem, 4vw, 2.5rem);
		padding: clamp(1.25rem, 3vw, 1.75rem) clamp(1.5rem, 4vw, 2.5rem);
		border-radius: 8px;
		background: #ededed;
	}

	.ready-card h3 {
		font-size: clamp(1.6rem, 3vw, 2.35rem);
		font-weight: 700;
		line-height: 1.18;
	}

	.ready-card__inline-link {
		display: inline;
		padding: 0;
		border: 0;
		background: transparent;
		color: #0000ff;
		cursor: pointer;
		font: inherit;
		font-weight: inherit;
		line-height: inherit;
		text-align: left;
	}

	@media (max-width: 980px) {
		.why-cards {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 560px) {
		.why-cards {
			grid-template-columns: 1fr;
		}

		.why-card {
			min-height: 0;
		}

		.why-testimonial {
			grid-template-columns: 1fr;
		}
	}

	@keyframes macbookFloat {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-12px);
		}
	}

	@keyframes shadowPulse {
		0%,
		100% {
			transform: scale(0.8);
			opacity: 0.4;
		}
		50% {
			transform: scale(0.7);
			opacity: 0.4;
		}
	}

	@keyframes talUnderlineComplete {
		0% {
			opacity: 0;
			transform: translateX(-50%) scaleX(0.1);
		}

		100% {
			opacity: 1;
			transform: translateX(-50%) scaleX(1);
		}
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
