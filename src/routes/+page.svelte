<script>
	import { tick } from 'svelte';
	import Form from '../components/Form.svelte';
	import '../app.css';
	import '../app.scss';
	import { onMount } from 'svelte';
	import { fadeOnScroll } from '$lib/fadeOnScroll';
	import laptop from '$lib/graphics/hero_layer_1v3.webp';
	import slatersLogo from '$lib/logos/slaters-contracting-consultancy.png';
	import wagsLogo from '$lib/logos/wags-n-whiskers.png';
	import { articles } from '$lib/articles';
	import { trackMainCta } from '$lib/conversionTracking';

	const textSegments = [
		{ text: 'developmen', class: 'text-primary' },
		{ text: '/', class: 'hero-link-blue' },
		{ text: 'tal', class: 'text-primary' }
	];

	let fullText = textSegments.map((segment) => segment.text).join('');
	let displayText = $state(fullText);
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
	const featuredArticleSlugs = [
		'ai-website-builder-small-business',
		'local-seo-small-business',
		'app-development-for-business-admin'
	];
	const featuredArticles = featuredArticleSlugs.map((slug) => articles[slug]);

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

	function openTrackedModal(location) {
		trackMainCta('Get In Touch', location);
		openModal();
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
	<link rel="preload" as="image" href={laptop} type="image/webp" fetchpriority="high" />
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
					onclick={() => openTrackedModal('home_hero')}
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
					I design and build modern, high-performance websites that give small businesses high
					quality results without the agency price tag.
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

			<p class="process-intro text-xl">
				Tell me about your goals, audience and what success looks like. I design your website with a
				focus on aesthetics, performance and achieving your business objectives, then we review,
				refine and launch with support for final changes and ongoing updates.
			</p>

			<div class="process-steps" aria-label="Website project process">
				<article class="process-step">
					<h3>Discover</h3>
				</article>

				<div class="process-arrow" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none">
						<path d="M5 12h14" />
						<path d="m13 6 6 6-6 6" />
					</svg>
				</div>

				<article class="process-step">
					<h3>Design &amp; Build</h3>
				</article>

				<div class="process-arrow" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none">
						<path d="M5 12h14" />
						<path d="m13 6 6 6-6 6" />
					</svg>
				</div>

				<article class="process-step">
					<h3>Launch &amp; Support</h3>
				</article>
			</div>
		</div>

		<hr class="fade-on-scroll mt-5 border-black/20 md:mt-12" use:fadeOnScroll />

		<div class="why-section fade-on-scroll" use:fadeOnScroll>
			<h2 class="text-3xl md:text-4xl">
				<b>Why Developmental<span class="hero-link-blue">?</span></b>
			</h2>

			<p class="why-intro text-xl">
				You get a custom website built around your business, not a bloated template or agency
				process. The focus is clean, fast code, fair pricing and direct communication from one
				person who understands the project from first idea to final launch.
			</p>

			<div class="why-cards" aria-label="Reasons to choose Developmental">
				<article class="why-card fade-on-scroll" use:fadeOnScroll>
					<span class="why-card__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
							<path d="M14 3v5h5" />
						</svg>
					</span>
					<h3>No bloated templates</h3>
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
				</article>

				<article class="why-card fade-on-scroll" use:fadeOnScroll>
					<span class="why-card__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<path d="m13 2-8 12h6l-1 8 8-12h-6z" />
						</svg>
					</span>
					<h3>Clean, fast code</h3>
				</article>

				<article class="why-card fade-on-scroll" use:fadeOnScroll>
					<span class="why-card__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<circle cx="12" cy="8" r="4" />
							<path d="M4 21a8 8 0 0 1 16 0" />
						</svg>
					</span>
					<h3>Personal service</h3>
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
				<div class="ready-section__inner">
					<h2 class="text-3xl md:text-4xl">
						<b>Ready to get your website sorted?</b>
					</h2>

					<h3 class="ready-cta text-3xl md:text-4xl">
						<button
							class="link ready-cta__inline-link"
							onclick={() => openTrackedModal('home_ready')}>Click here</button
						>
						to get started.
					</h3>
				</div>
			</section>

			<section class="home-articles" aria-labelledby="home-articles-heading">
				<div class="home-articles__inner">
					<div class="home-articles__head fade-on-scroll" use:fadeOnScroll>
						<h2 id="home-articles-heading" class="text-3xl md:text-4xl">
							<b>Useful reads<span class="hero-link-blue">.</span></b>
						</h2>
						<a href="/articles">View all articles</a>
					</div>

					<div class="home-articles__grid">
						{#each featuredArticles as article}
							<article class="home-article fade-on-scroll" use:fadeOnScroll>
								<div class="home-article__meta">
									<span>{article.category}</span>
									<span>{article.readTime}</span>
								</div>

								<h3>
									<a href={article.path}>{article.title}</a>
								</h3>

								<p>{article.desc}</p>

								<a class="home-article__link" href={article.path}>Read article</a>
							</article>
						{/each}
					</div>
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
		min-width: clamp(13.5rem, 24vw, 16rem);
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
		position: relative;
		isolation: isolate;
		overflow: hidden;
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		align-items: center;
		gap: clamp(1.25rem, 3vw, 2.25rem);
		min-height: 5.75rem;
		padding: clamp(1.25rem, 3vw, 1.75rem);
		border: 1px solid rgba(27, 27, 27, 0.12);
		border-radius: 8px;
		background: rgba(237, 237, 237, 0.58);
		box-shadow: 0 0.75rem 1.75rem rgba(27, 27, 27, 0.05);
	}

	.about-highlight::after {
		content: '';
		position: absolute;
		top: -45%;
		bottom: -45%;
		left: 0;
		z-index: 0;
		width: 42%;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(255, 255, 255, 0.08) 24%,
			rgba(226, 222, 215, 0.5) 42%,
			rgba(248, 246, 239, 0.78) 50%,
			rgba(205, 200, 191, 0.34) 62%,
			transparent 100%
		);
		filter: blur(0.5px);
		opacity: 0;
		transform: translateX(-170%) skewX(-18deg);
		animation: highlightSheen 5.8s ease-in-out infinite;
		pointer-events: none;
	}

	.about-highlight > * {
		position: relative;
		z-index: 1;
	}

	.about-highlight__icon {
		display: grid;
		place-items: center;
		width: clamp(3.25rem, 7vw, 4.25rem);
		aspect-ratio: 1;
		border-radius: 50%;
		background: #f6f6f6;
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

	@media (prefers-reduced-motion: reduce) {
		.about-highlight::after {
			animation: none;
		}
	}

	@keyframes highlightSheen {
		0%,
		58% {
			opacity: 0;
			transform: translateX(-170%) skewX(-18deg);
		}

		64% {
			opacity: 0.92;
		}

		78% {
			opacity: 0.82;
			transform: translateX(320%) skewX(-18deg);
		}

		82%,
		100% {
			opacity: 0;
			transform: translateX(320%) skewX(-18deg);
		}
	}

	@keyframes processStepPulse {
		0%,
		52%,
		100% {
			transform: scale(1);
		}

		62% {
			transform: scale(1.08);
		}

		72% {
			transform: scale(1);
		}
	}

	.process-section {
		padding: clamp(2rem, 5vw, 4rem) 0 clamp(1.5rem, 4vw, 3rem);
	}

	.process-intro {
		max-width: 48rem;
		margin-top: clamp(1.75rem, 4vw, 3rem);
		line-height: 1.65;
	}

	.process-steps {
		display: grid;
		gap: clamp(1rem, 3vw, 2rem);
		margin-top: clamp(2rem, 5vw, 3.5rem);
	}

	.process-step {
		display: grid;
		place-items: center;
		width: fit-content;
		max-width: 100%;
		padding: clamp(0.85rem, 2vw, 1.1rem) clamp(1.5rem, 4vw, 2.35rem);
		border: 2px solid #1b1b1b;
		border-radius: 999px;
		background: rgba(237, 237, 237, 0.44);
		justify-self: center;
		transform-origin: center;
		animation: processStepPulse 5.8s ease-in-out infinite;
		will-change: transform;
	}

	.process-step:nth-child(3) {
		animation-delay: 0.55s;
	}

	.process-step:nth-child(5) {
		animation-delay: 1.1s;
	}

	.process-step h3 {
		font-size: clamp(1.25rem, 2vw, 1.5rem);
		font-weight: 700;
		line-height: 1.15;
		text-align: center;
		white-space: nowrap;
	}

	@media (prefers-reduced-motion: reduce) {
		.process-step {
			animation: none;
		}
	}

	.process-arrow {
		display: flex;
		justify-content: center;
		align-self: center;
		justify-self: center;
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
	}

	@media (max-width: 899px) {
		.process-steps {
			justify-items: center;
		}

		.process-step {
			width: fit-content;
			justify-self: center;
		}

		.process-arrow {
			width: min(100%, 28rem);
			margin: -0.25rem 0;
			justify-self: center;
			transform: rotate(90deg);
		}
	}

	.why-section {
		padding: clamp(2rem, 5vw, 4rem) 0 0;
	}

	.why-intro {
		max-width: 48rem;
		margin-top: clamp(1.75rem, 4vw, 3rem);
		line-height: 1.65;
	}

	.why-cards {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: clamp(1rem, 2.5vw, 1.75rem);
		margin-top: clamp(2rem, 4vw, 3rem);
	}

	.why-card {
		display: flex;
		min-height: clamp(8.75rem, 16vw, 10.5rem);
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
		gap: clamp(1rem, 3vw, 1.75rem);
		margin-top: clamp(1.25rem, 4vw, 2rem);
	}

	.why-testimonial__card {
		display: grid;
		grid-template-areas: 'review';
		width: 100%;
		min-height: clamp(15rem, 26vw, 20rem);
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
		padding: clamp(1.5rem, 3vw, 2.25rem) clamp(2rem, 5vw, 4rem);
		color: #ededed;
		font-size: clamp(1.25rem, 2vw, 1.85rem);
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
		gap: 0.5rem;
		padding: clamp(0.75rem, 2vw, 1.1rem);
		border-top: 2px solid #ededed;
		text-align: center;
	}

	.why-testimonial__logo-placeholder {
		display: grid;
		place-items: center;
		min-width: clamp(8rem, 16vw, 11rem);
		min-height: clamp(2.25rem, 5vw, 3rem);
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
		max-height: clamp(1.8rem, 4vw, 2.75rem);
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
		width: 100vw;
		margin: clamp(2rem, 5vw, 3rem) 0 0 calc(50% - 50vw);
		border-color: #1b1b1b;
		border-top-width: 2px;
	}

	.ready-section {
		width: 100vw;
		margin-left: calc(50% - 50vw);
		background: radial-gradient(circle at 30% 40%, #e8e1d8, #ededed 80%);
		background-size: cover;
	}

	.ready-section__inner {
		display: flex;
		min-height: clamp(13rem, 18vw, 14rem);
		max-width: 1200px;
		margin: 0 auto;
		padding: clamp(2rem, 4vw, 3.25rem) 2.5rem;
		flex-direction: column;
		justify-content: center;
	}

	.ready-cta {
		margin-top: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 700;
		line-height: 1.18;
	}

	.ready-cta__inline-link {
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

	.home-articles {
		width: 100vw;
		margin-left: calc(50% - 50vw);
		margin-bottom: -2.5rem;
		border-top: 2px solid #1b1b1b;
		background: #e8e1d8;
	}

	.home-articles__inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: clamp(2rem, 5vw, 4rem) 2.5rem;
	}

	.home-articles__head {
		display: flex;
		flex-wrap: wrap;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
	}

	.home-articles__head a,
	.home-article__link {
		position: relative;
		display: inline-flex;
		align-items: center;
		width: fit-content;
		margin-bottom: 4px;
		color: #0000ff;
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.2;
		text-decoration: none;
		transition: transform 180ms ease;
	}

	.home-articles__head a::before,
	.home-article__link::before {
		content: '';
		position: absolute;
		right: 28px;
		bottom: -6px;
		left: 0;
		height: 3px;
		border-radius: 999px;
		background: currentColor;
		transform: scaleX(1);
		transform-origin: left;
	}

	.home-articles__head a::after,
	.home-article__link::after {
		content: '→';
		margin-left: 12px;
	}

	.home-articles__head a:hover,
	.home-article__link:hover {
		transform: translateX(3px);
	}

	.home-articles__grid {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
		margin-top: clamp(1.75rem, 4vw, 3rem);
	}

	.home-article {
		display: grid;
		align-content: start;
		gap: 1rem;
		min-width: 0;
		padding-top: clamp(1.25rem, 3vw, 1.75rem);
		border-top: 1px solid rgba(27, 27, 27, 0.22);
	}

	.home-article__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.home-article__meta span {
		display: inline-flex;
		align-items: center;
		min-height: 2.1rem;
		padding: 0.45rem 0.75rem;
		border: 1px solid rgba(27, 27, 27, 0.28);
		border-radius: 999px;
		background: rgba(237, 237, 237, 0.52);
		color: #1b1b1b;
		font-size: 0.8rem;
		font-weight: 700;
		line-height: 1.2;
	}

	.home-article h3 {
		max-width: 22rem;
		font-size: clamp(1.35rem, 2.5vw, 1.75rem);
		font-weight: 700;
		line-height: 1.12;
	}

	.home-article h3 a {
		color: #1b1b1b;
		text-decoration: none;
	}

	.home-article p {
		max-width: 24rem;
		color: rgba(27, 27, 27, 0.78);
		font-size: 1rem;
		line-height: 1.45;
	}

	@media (min-width: 768px) {
		.ready-section {
			margin-bottom: 0;
		}

		.ready-section__inner {
			padding-right: 5rem;
			padding-left: 5rem;
		}

		.home-articles {
			margin-bottom: -5rem;
		}

		.home-articles__inner {
			padding-right: 5rem;
			padding-left: 5rem;
		}
	}

	@media (min-width: 860px) {
		.home-articles__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 0;
			column-gap: 0;
		}

		.home-article {
			padding-top: 0;
			padding-right: clamp(1.5rem, 3vw, 2.25rem);
			border-top: 0;
		}

		.home-article + .home-article {
			padding-left: clamp(1.5rem, 3vw, 2.25rem);
			border-left: 1px solid rgba(27, 27, 27, 0.22);
		}
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
