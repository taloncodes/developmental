<script>
	import '../../../app.css';
	import '../../../app.scss';
	import Form from '../../../components/Form.svelte';
	import ReadySection from '../../../components/ReadySection.svelte';
	import TypewriterText from '../../../components/TypewriterText.svelte';
	import { fadeOnScroll } from '$lib/fadeOnScroll';

	let { data } = $props();
	let study = $derived(data.caseStudy);
	let modalOpen = $state(false);
	let fullText = $derived(`/portfolio/${study.slug}`);
	const marqueeCopies = Array.from({ length: 8 }, (_, index) => index);

	function openModal() {
		modalOpen = !modalOpen;
		document.querySelector('body').style.overflow = 'hidden';
	}

	function getMarqueeDuration(items) {
		return `${Math.max(items.length * 34, 180)}s`;
	}
</script>

<article>
	<Form bind:visible={modalOpen} />

	<header class="main_wrap case-hero border-b-2 border-black">
		<div class="mx-auto max-w-[1200px] px-10 py-10 md:px-16 md:py-20">
			<a href="/portfolio" class="case-back-link fade-on-scroll" use:fadeOnScroll>
				<span class="route-back-arrow" aria-hidden="true">&larr;</span>
				<span><span class="blue-dot">.</span><span>/portfolio</span></span>
			</a>

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

			<p class="case-intro fade-on-scroll" use:fadeOnScroll>
				{study.desc}
			</p>

			<div class="case-meta-row fade-on-scroll" use:fadeOnScroll>
				<span>{study.category}</span>
				{#each study.services as service}
					<span>{service}</span>
				{/each}
			</div>
		</div>
	</header>

	<section>
		<div class="case-shell mx-auto max-w-[1200px] px-10 py-10 md:px-16 md:py-20">
			<h2 class="case-title fade-on-scroll" use:fadeOnScroll>
				{study.title}<span class="blue-dot">.</span>
			</h2>

			<div class="case-lead">
				<div class="case-summary fade-on-scroll" use:fadeOnScroll>
					{#each study.summary as paragraph}
						<p>{paragraph}</p>
					{/each}

					<div class="case-actions">
						{#if study.siteUrl}
							<a href={study.siteUrl} target="_blank" rel="noopener">View site</a>
						{/if}
						<a href="/portfolio">Back to portfolio</a>
					</div>
				</div>

				<figure class="case-visual fade-on-scroll" use:fadeOnScroll>
					<img
						class={`case-image ${study.imageStyle === 'mockup' ? 'case-image--mockup' : ''}`}
						src={study.image}
						alt={study.imageAlt}
						loading="eager"
						decoding="async"
					/>
				</figure>
			</div>

			<hr class="section-divider fade-on-scroll border-black/20" use:fadeOnScroll />

			<div class="case-detail-grid">
				<section class="case-section fade-on-scroll" use:fadeOnScroll>
					<h2>Problem<span class="blue-dot">.</span></h2>
					{#each study.problem as paragraph}
						<p>{paragraph}</p>
					{/each}
				</section>

				<section class="case-section fade-on-scroll" use:fadeOnScroll>
					<h2>Solution<span class="blue-dot">.</span></h2>
					{#each study.solution as paragraph}
						<p>{paragraph}</p>
					{/each}
				</section>

				<section class="case-section fade-on-scroll" use:fadeOnScroll>
					<h2>Outcome<span class="blue-dot">.</span></h2>
					{#each study.outcome as paragraph}
						<p>{paragraph}</p>
					{/each}
				</section>
			</div>

			<hr class="section-divider fade-on-scroll border-black/20" use:fadeOnScroll />

			<div class="case-tags-grid">
				<section class="tag-panel fade-on-scroll" use:fadeOnScroll>
					<h2>Tech Stack<span class="blue-dot">.</span></h2>
					<div class="tag-marquee">
						<div
							class="tag-track"
							style={`--tag-marquee-duration: ${getMarqueeDuration(study.tech)};`}
							role="list"
						>
							{#each marqueeCopies as copyIndex}
								<div class="tag-set" aria-hidden={copyIndex > 0}>
									{#each study.tech as tech}
										<span class="tag-pill" role="listitem">{tech}</span>
									{/each}
								</div>
							{/each}
						</div>
					</div>
				</section>

				<section class="tag-panel fade-on-scroll" use:fadeOnScroll>
					<h2>Features<span class="blue-dot">.</span></h2>
					<div class="tag-marquee">
						<div
							class="tag-track feature-list"
							style={`--tag-marquee-duration: ${getMarqueeDuration(study.features)};`}
							role="list"
						>
							{#each marqueeCopies as copyIndex}
								<div class="tag-set" aria-hidden={copyIndex > 0}>
									{#each study.features as feature}
										<span class="tag-pill" role="listitem">{feature}</span>
									{/each}
								</div>
							{/each}
						</div>
					</div>
				</section>
			</div>

			<hr class="section-divider fade-on-scroll border-black/20" use:fadeOnScroll />

			<div class="related-section fade-on-scroll" use:fadeOnScroll>
				<h2>Related pages<span class="blue-dot">.</span></h2>

				<div class="related-links">
					{#each study.related as link}
						<a href={link.href}>{link.label}</a>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<ReadySection
		heading="Need a project like this shaped properly?"
		tail="to get in touch."
		onAction={openModal}
	/>
</article>

<style>
	.case-hero {
		background: radial-gradient(circle at 30% 40%, #e8e1d8, #ededed 80%);
		background-size: cover;
	}

	:global(.blue-dot) {
		color: #1b1b1b;
	}

	:global(.text-accent-one) {
		color: #0000ff;
	}

	.case-back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		max-width: 100%;
		margin-bottom: clamp(1.1rem, 3vw, 1.6rem);
		color: #0000ff;
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.2;
		text-decoration: none;
		transition: transform 180ms ease;
	}

	.case-back-link:hover {
		transform: translateX(-3px);
	}

	.route-back-arrow {
		display: inline-block;
		font-size: 1.25em;
		line-height: 1;
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

	h1 {
		max-width: 58rem;
		line-height: 1.05;
	}

	.case-intro {
		max-width: 52rem;
		padding: clamp(1.25rem, 3vw, 2rem) 0 0;
		font-size: clamp(1.15rem, 2.5vw, 1.45rem);
		line-height: 1.45;
	}

	.case-meta-row {
		display: flex;
		align-items: flex-start;
		align-content: flex-start;
		gap: 0.8rem;
		flex-wrap: wrap;
		padding-top: clamp(1.3rem, 3vw, 2rem);
	}

	.case-meta-row span,
	.tag-pill {
		display: inline-flex;
		align-items: center;
		flex: 0 0 auto;
		min-height: 2.35rem;
		padding: 0.55rem 0.9rem;
		border: 1px solid rgba(27, 27, 27, 0.28);
		border-radius: 999px;
		background: #ededed;
		color: #1b1b1b;
		font-size: 0.88rem;
		font-weight: 700;
		line-height: 1.2;
		white-space: nowrap;
	}

	.tag-marquee {
		overflow: hidden;
		width: 100%;
		padding: 0.1rem 0 0.25rem;
		-webkit-mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
		mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
	}

	.tag-track {
		display: flex;
		width: max-content;
		animation: tag-marquee var(--tag-marquee-duration, 220s) linear infinite;
		will-change: transform;
	}

	.tag-track.feature-list {
		animation-direction: reverse;
	}

	.tag-marquee:hover .tag-track {
		animation-play-state: paused;
	}

	.tag-set {
		display: flex;
		flex: 0 0 auto;
		gap: 0.8rem;
		padding-right: 0.8rem;
	}

	.feature-list .tag-pill {
		border-color: #111;
		background: #111;
		color: #f2eee8;
	}

	.case-lead {
		display: grid;
		gap: clamp(2rem, 5vw, 4rem);
		align-items: center;
	}

	.case-title,
	.case-section h2,
	.tag-panel h2,
	.related-section h2 {
		font-size: clamp(1.8rem, 4vw, 2.4rem);
		font-weight: 700;
		line-height: 1.1;
	}

	.case-title {
		margin-bottom: clamp(2rem, 5vw, 3rem);
	}

	.case-summary {
		display: grid;
		gap: clamp(1.25rem, 3vw, 1.75rem);
		max-width: 46rem;
		font-size: 1.25rem;
		line-height: 1.45;
	}

	.case-visual {
		margin: 0;
		min-width: 0;
	}

	.case-image {
		display: block;
		width: 100%;
		border: 1px solid black;
		border-radius: 5px;
		box-shadow: 0 18px 34px rgba(0, 0, 0, 0.08);
	}

	.case-image--mockup {
		border: 0;
		border-radius: 0;
		box-shadow: none;
	}

	.section-divider {
		margin: clamp(2rem, 5vw, 3rem) 0;
	}

	.case-detail-grid,
	.case-tags-grid {
		display: grid;
		gap: clamp(2rem, 5vw, 3rem);
	}

	.case-section,
	.tag-panel,
	.related-section {
		display: grid;
		gap: 1rem;
		min-width: 0;
	}

	.case-section + .case-section {
		padding-top: clamp(1.25rem, 3vw, 2rem);
		border-top: 1px solid rgba(27, 27, 27, 0.2);
	}

	.case-section h2,
	.tag-panel h2,
	.related-section h2 {
		font-size: clamp(1.8rem, 4vw, 2.4rem);
		font-weight: 700;
		line-height: 1.1;
	}

	.case-section p {
		font-size: 1.12rem;
		line-height: 1.55;
	}

	.case-actions,
	.related-links {
		display: flex;
		flex-wrap: wrap;
		gap: clamp(1.4rem, 3vw, 2rem);
	}

	.case-actions a,
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

	.case-actions a::before,
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

	.case-actions a::after,
	.related-links a::after {
		content: '→';
		margin-left: 12px;
	}

	.case-actions a:hover,
	.related-links a:hover {
		transform: translateX(3px);
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}

	@keyframes tag-marquee {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-50%);
		}
	}

	@media (min-width: 900px) {
		.case-lead {
			grid-template-columns: minmax(360px, 0.82fr) minmax(480px, 1.18fr);
		}

		.case-detail-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.case-section + .case-section {
			padding-top: 0;
			padding-left: clamp(1.5rem, 3vw, 2rem);
			border-top: 0;
		}
	}

	@media (max-width: 899px) {
		.case-visual {
			order: -1;
		}
	}

	@media (max-width: 640px) {
		.case-route {
			font-size: 0.9rem;
		}

		.case-summary {
			font-size: 1.18rem;
		}
	}
</style>
