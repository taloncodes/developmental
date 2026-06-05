<script>
	import '../../app.css';
	import '../../app.scss';
	import Form from '../../components/Form.svelte';
	import ReadySection from '../../components/ReadySection.svelte';
	import AuditScore from '../../components/AuditScore.svelte';
	import SetupRoute from '../../components/SetupRoute.svelte';
	import SpinningCog from '../../components/SpinningCog.svelte';
	import ThreeCoin from '../../components/ThreeCoin.svelte';
	import TypewriterText from '../../components/TypewriterText.svelte';
	import { fadeOnScroll } from '$lib/fadeOnScroll';
	import appPhone from '$lib/graphics/app-development-phone.png';
	import laptop from '$lib/graphics/hero_layer_1v3.webp';

	let { data } = $props();
	let modalOpen = $state(false);
	let page = $derived(data.landingPage);
	let headingText = $derived(page.heading.replace(/^\//, ''));
	let fullText = $derived(`/${headingText}`);

	function getVisualLabel(visualType) {
		if (visualType === 'phone') return 'Floating app phone mockup';
		if (visualType === 'auditSeo') return 'Audit and SEO score';
		if (visualType === 'poundCoin') return 'Spinning pound sign coin';
		if (visualType === 'setupRoute') return 'Setup and local visibility signal';
		if (visualType === 'spinningCog') return 'Custom workflow automation graphic';
		if (visualType === 'laptop') return 'Floating website laptop mockup';

		return 'Landing page visual placeholder';
	}

	function openModal() {
		modalOpen = !modalOpen;
		document.querySelector('body').style.overflow = 'hidden';
	}
</script>

<section>
	<Form bind:visible={modalOpen} />

	<div class="main_wrap hero-animated border-b-2 border-black">
		<div class="mx-auto max-w-[1200px] px-10 py-10 md:px-16 md:py-20">
			<h1
				class="fade-on-scroll flex justify-start text-start text-5xl md:text-6xl"
				use:fadeOnScroll
			>
				<span class="blue-dot"><b>.</b></span>
				<span class="typewriter-stack">
					<span class="typewriter-ghost" aria-hidden="true"><b>{fullText}</b></span>
					<span class="typewriter-live">
						<b>
							<TypewriterText text={fullText} />
						</b>
					</span>
				</span>
			</h1>

			<p class="fade-on-scroll py-5 text-xl md:py-10" use:fadeOnScroll>
				{page.intro}
			</p>
		</div>
	</div>

	<section>
		<div class="mx-auto max-w-[1200px] px-10 py-10 md:px-16 md:py-20">
			<div class="landing-detail">
				<div class="landing-copy fade-on-scroll" use:fadeOnScroll>
					{#each page.body as paragraph (paragraph)}
						<p>{paragraph}</p>
					{/each}
				</div>

				<figure
					class="landing-visual fade-on-scroll"
					aria-label={getVisualLabel(page.visualType)}
					use:fadeOnScroll
				>
					{#if page.visualType === 'laptop'}
						<div class="service-detail__laptop-wrap">
							<img
								src={laptop}
								alt="Website mockup on laptop"
								class="service-detail__laptop"
								loading="lazy"
								decoding="async"
							/>
							<div class="service-detail__laptop-shadow"></div>
						</div>
					{:else if page.visualType === 'phone'}
						<div class="service-detail__phone-wrap">
							<img
								src={appPhone}
								alt="App mockup on phone"
								class="service-detail__phone"
								loading="lazy"
								decoding="async"
							/>
							<div class="service-detail__phone-shadow"></div>
						</div>
					{:else if page.visualType === 'auditSeo'}
						<div class="service-detail__score-wrap">
							<AuditScore active={true} />
						</div>
					{:else if page.visualType === 'poundCoin'}
						<div class="service-detail__coin-wrap">
							<ThreeCoin markType="pound" />
						</div>
					{:else if page.visualType === 'setupRoute'}
						<SetupRoute routeId={`landing-setup-route-${page.path.replace(/[^a-z0-9]/gi, '-')}`} />
					{:else if page.visualType === 'spinningCog'}
						<SpinningCog />
					{:else}
						<div class="service-detail__placeholder">
							<span>Visual placeholder</span>
						</div>
					{/if}
				</figure>
			</div>

			<hr class="section-divider fade-on-scroll border-black/20" use:fadeOnScroll />

			<div class="landing-grid">
				{#each page.sections as section (section.title)}
					<article class="landing-panel fade-on-scroll" use:fadeOnScroll>
						<h2>{section.title}<span class="blue-dot">.</span></h2>

						<div class="landing-tags" role="list">
							{#each section.items as item (item)}
								<span class="tag-pill" role="listitem">{item}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>

			{#if page.pricing}
				<hr class="section-divider fade-on-scroll border-black/20" use:fadeOnScroll />

				<section class="pricing-section fade-on-scroll" use:fadeOnScroll>
					<div class="pricing-copy">
						<h2>{page.pricing.title}<span class="blue-dot">.</span></h2>

						{#each page.pricing.body as paragraph (paragraph)}
							<p>{paragraph}</p>
						{/each}
					</div>

					<div class="pricing-tags" role="list">
						{#each page.pricing.items as item (item)}
							<span class="tag-pill" role="listitem">{item}</span>
						{/each}
					</div>
				</section>
			{/if}

			{#if page.faqs}
				<hr class="section-divider fade-on-scroll border-black/20" use:fadeOnScroll />

				<section class="faq-section fade-on-scroll" use:fadeOnScroll>
					<h2>Questions<span class="blue-dot">.</span></h2>

					<div class="faq-list">
						{#each page.faqs as faq (faq.question)}
							<article class="faq-item">
								<h3>{faq.question}</h3>
								<p>{faq.answer}</p>
							</article>
						{/each}
					</div>
				</section>
			{/if}

			{#if !page.faqs}
				<hr class="section-divider fade-on-scroll border-black/20" use:fadeOnScroll />
			{/if}

			<div class="related-section fade-on-scroll" use:fadeOnScroll>
				<h2>Related pages<span class="blue-dot">.</span></h2>

				<div class="related-links">
					{#each page.related as link (link.href)}
						<a href={link.href}>{link.label}</a>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<ReadySection heading={page.ctaHeading} tail="to get in touch." onAction={openModal} />
</section>

<style>
	.hero-animated {
		background: radial-gradient(circle at 30% 40%, #e8e1d8, #ededed 80%);
		background-size: cover;
	}

	:global(.blue-dot) {
		color: #1b1b1b;
	}

	:global(.text-accent-one) {
		color: #0000ff;
	}

	h1 {
		white-space: normal;
		animation: blink 1.2s steps(2, start) infinite;
	}

	.typewriter-stack {
		display: inline-grid;
		flex: 1 1 0;
		grid-template-areas: 'typewriter';
		min-width: 0;
		max-width: 100%;
	}

	.typewriter-stack > span {
		grid-area: typewriter;
		justify-self: start;
		text-align: left;
	}

	.typewriter-ghost {
		visibility: hidden;
	}

	.landing-detail {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
		align-items: center;
	}

	.landing-copy {
		display: grid;
		gap: clamp(1.25rem, 3vw, 1.75rem);
		max-width: 48rem;
		font-size: 1.25rem;
		line-height: 1.45;
	}

	.landing-visual {
		margin: 0;
		min-width: 0;
	}

	.section-divider {
		margin: clamp(2rem, 5vw, 3rem) 0;
	}

	.landing-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(1.5rem, 4vw, 3rem);
	}

	.landing-panel {
		display: grid;
		align-content: start;
		gap: clamp(1rem, 2.5vw, 1.5rem);
		min-width: 0;
	}

	.landing-panel h2,
	.related-section h2,
	.pricing-section h2,
	.faq-section h2 {
		font-size: clamp(1.875rem, 4vw, 2.25rem);
		font-weight: 700;
		line-height: 1.15;
	}

	.landing-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.tag-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 2.35rem;
		padding: 0.55rem 0.9rem;
		border: 1px solid rgba(27, 27, 27, 0.28);
		border-radius: 999px;
		background: #ededed;
		color: #1b1b1b;
		font-size: 0.88rem;
		font-weight: 700;
		line-height: 1.2;
	}

	.related-section {
		display: grid;
		gap: clamp(1rem, 2.5vw, 1.5rem);
		padding-top: clamp(1rem, 3vw, 1.75rem);
	}

	.pricing-section {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
		align-items: start;
	}

	.pricing-copy {
		display: grid;
		gap: 1rem;
		max-width: 48rem;
	}

	.pricing-copy p {
		font-size: 1.12rem;
		line-height: 1.55;
	}

	.pricing-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.faq-section {
		display: grid;
		gap: clamp(1.5rem, 4vw, 2.25rem);
	}

	.faq-list {
		display: grid;
		gap: 0;
	}

	.faq-item {
		display: grid;
		gap: 0.75rem;
		padding: clamp(1.25rem, 3vw, 1.8rem) 0;
		border-top: 1px solid rgba(27, 27, 27, 0.2);
	}

	.faq-item:last-child {
		border-bottom: 1px solid rgba(27, 27, 27, 0.2);
	}

	.faq-item h3 {
		font-size: clamp(1.25rem, 3vw, 1.55rem);
		font-weight: 700;
		line-height: 1.2;
	}

	.faq-item p {
		max-width: 48rem;
		font-size: 1.05rem;
		line-height: 1.55;
	}

	.related-links {
		display: flex;
		flex-wrap: wrap;
		gap: clamp(1rem, 3vw, 2rem);
	}

	.related-links a {
		position: relative;
		display: inline-flex;
		align-items: center;
		width: fit-content;
		margin-bottom: 4px;
		padding: 0;
		border: 0;
		color: #0000ff;
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.2;
		text-decoration: none;
		transition: transform 180ms ease;
	}

	.related-links a::before {
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

	.related-links a::after {
		content: '→';
		margin-left: 12px;
	}

	.related-links a:hover {
		transform: translateX(3px);
	}

	.service-detail__placeholder {
		display: grid;
		min-height: clamp(12rem, 23vw, 17rem);
		place-items: center;
		overflow: hidden;
		border: 1px solid rgba(27, 27, 27, 0.18);
		border-radius: 8px;
		background:
			linear-gradient(135deg, rgba(27, 27, 27, 0.05) 25%, transparent 25%) 0 0 / 18px 18px,
			linear-gradient(315deg, rgba(27, 27, 27, 0.05) 25%, transparent 25%) 0 0 / 18px 18px,
			#ededed;
	}

	.service-detail__placeholder span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: min(100%, 12rem);
		padding: 0.8rem 1rem;
		border: 1px dashed rgba(27, 27, 27, 0.32);
		border-radius: 6px;
		background: rgba(232, 225, 216, 0.78);
		color: rgba(27, 27, 27, 0.64);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		line-height: 1.2;
		text-align: center;
		text-transform: uppercase;
	}

	.service-detail__laptop-wrap,
	.service-detail__phone-wrap {
		position: relative;
		display: grid;
		min-height: clamp(12rem, 23vw, 17rem);
		place-items: center;
		overflow: visible;
	}

	.service-detail__laptop,
	.service-detail__phone {
		position: relative;
		z-index: 1;
		display: block;
		object-fit: contain;
		animation: macbookFloat 4s ease-in-out infinite;
	}

	.service-detail__laptop {
		width: min(100%, 28rem);
		max-height: clamp(12rem, 22vw, 16rem);
	}

	.service-detail__phone {
		width: min(86%, 20rem);
		max-height: clamp(13rem, 24vw, 18rem);
	}

	.service-detail__laptop-shadow,
	.service-detail__phone-shadow {
		position: absolute;
		left: 50%;
		z-index: 0;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.25);
		transform: translateX(var(--shadow-x));
		animation: shadowPulse 4s ease-in-out infinite;
	}

	.service-detail__laptop-shadow {
		--shadow-x: -50%;
		bottom: 4%;
		width: min(62%, 17rem);
		height: 16%;
	}

	.service-detail__phone-shadow {
		--shadow-x: -64%;
		bottom: 2%;
		width: min(44%, 10.5rem);
		height: 13%;
	}

	.service-detail__score-wrap {
		display: grid;
		min-height: clamp(11rem, 21vw, 15rem);
		place-items: center;
		overflow: visible;
	}

	.service-detail__coin-wrap {
		display: grid;
		min-height: clamp(12rem, 23vw, 17rem);
		place-items: center;
		overflow: visible;
	}

	@media (min-width: 768px) {
		.landing-detail {
			grid-template-columns: minmax(0, 1.05fr) minmax(17rem, 0.75fr);
		}

		.pricing-section {
			grid-template-columns: minmax(0, 1fr) minmax(17rem, 0.42fr);
		}
	}

	@media (max-width: 760px) {
		.landing-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.service-detail__laptop,
		.service-detail__laptop-shadow,
		.service-detail__phone,
		.service-detail__phone-shadow {
			animation: none;
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
			transform: translateX(var(--shadow-x, -50%)) scale(0.8);
			opacity: 0.4;
		}

		50% {
			transform: translateX(var(--shadow-x, -50%)) scale(0.7);
			opacity: 0.4;
		}
	}
</style>
