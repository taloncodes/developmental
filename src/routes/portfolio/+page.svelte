<script>
	import '../../app.css';
	import '../../app.scss';
	import Form from '../../components/Form.svelte';
	import ReadySection from '../../components/ReadySection.svelte';
	import { tick } from 'svelte';
	import { onMount } from 'svelte';
	import { clientCaseStudies, personalCaseStudies } from '$lib/caseStudies';
	import { fadeOnScroll } from '$lib/fadeOnScroll'; // ✅ added

	let modalOpen = $state(false);
	let scrollFill = $state(0);
	const marqueeCopies = Array.from({ length: 8 }, (_, index) => index);
	const clients = clientCaseStudies;
	const personal = personalCaseStudies;

	const textSegments = [
		{ text: '/', class: 'blue-dot' },
		{ text: 'portfolio', class: 'text-accent-one' }
	];

	let fullText = textSegments.map((segment) => segment.text).join('');
	let displayText = $state(fullText);

	async function typewriterEffect() {
		for (let i = 0; i <= fullText.length; i++) {
			displayText = fullText.slice(0, i);
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

	function openModal() {
		modalOpen = !modalOpen;
		document.querySelector('body').style.overflow = 'hidden';
	}

	function updateScrollFill() {
		const documentElement = document.documentElement;
		const maxScroll = documentElement.scrollHeight - documentElement.clientHeight;
		scrollFill = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
	}

	function getMarqueeDuration(items) {
		return `${Math.max(items.length * 34, 180)}s`;
	}

	onMount(() => {
		typewriterEffect();
		updateScrollFill();
		window.addEventListener('scroll', updateScrollFill, { passive: true });
		window.addEventListener('resize', updateScrollFill);

		return () => {
			window.removeEventListener('scroll', updateScrollFill);
			window.removeEventListener('resize', updateScrollFill);
		};
	});
</script>

<section>
	<Form bind:visible={modalOpen} />

	<div class="main_wrap hero-animated mb:md-6 mb-4 border-b-2 border-black">
		<div class="mx-auto max-w-[1200px] px-10 py-10 md:px-16 md:py-20">
			<h1
				class="fade-on-scroll flex justify-start text-start text-5xl md:text-6xl"
				use:fadeOnScroll
			>
				<span class="blue-dot"><b>.</b></span>
				<span><b>{@html getSegmentedText(displayText)}</b></span>
			</h1>
			<p class="fade-on-scroll py-5 text-xl md:py-10" use:fadeOnScroll>
				Check out some samples of live client sites and personal projects that I've been working on
				below.
			</p>
		</div>
	</div>

	<section>
		<div>
			<div class="mx-auto max-w-[1200px] px-10 pt-10 pb-4 md:px-16 md:pt-20 md:pb-6">
				{#each clients as client, index (client.slug)}
					<article class="portfolio-case">
						<div
							class="case-heading-row fade-on-scroll"
							style={`--scroll-fill: ${scrollFill};`}
							use:fadeOnScroll
						>
							<span class="case-heading-line"></span>
							<span>{String(index + 1).padStart(2, '0')}</span>
						</div>

						<div class="case-grid has-actions">
							<div class="case-copy">
								<p class="case-kicker fade-on-scroll" use:fadeOnScroll>{client.category}</p>
								<h3 class="fade-on-scroll" use:fadeOnScroll>
									{client.title}<span class="blue-dot">.</span>
								</h3>

								<div class="case-body fade-on-scroll" use:fadeOnScroll>
									{#each client.summary as paragraph}
										<span class="block">{paragraph}</span>
									{/each}
								</div>
							</div>

							<figure class="case-figure fade-on-scroll" use:fadeOnScroll>
								<img
									class={`client-container ${client.imageStyle === 'mockup' ? 'client-container--mockup' : ''}`}
									src={client.image}
									alt={client.imageAlt}
									loading="lazy"
									decoding="async"
								/>
							</figure>

							<div class="case-actions fade-on-scroll" use:fadeOnScroll>
								<a href={client.path}>Read case study</a>
								{#if client.siteUrl}
									<a href={client.siteUrl} target="_blank" rel="noopener">View site</a>
								{/if}
							</div>
						</div>

						<div class="case-meta" id={`${client.slug}-stack`}>
							<div class="fade-on-scroll" use:fadeOnScroll>
								<h4>Tech Stack</h4>
								<div class="tag-marquee">
									<div
										class="tag-track"
										style={`--tag-marquee-duration: ${getMarqueeDuration(client.tech)};`}
										role="list"
									>
										{#each marqueeCopies as copyIndex}
											<div class="tag-set" aria-hidden={copyIndex > 0}>
												{#each client.tech as tech}
													<span class="tag-pill" role="listitem">{tech}</span>
												{/each}
											</div>
										{/each}
									</div>
								</div>
							</div>

							<div class="fade-on-scroll" use:fadeOnScroll>
								<h4>Features</h4>
								<div class="tag-marquee">
									<div
										class="tag-track feature-list"
										style={`--tag-marquee-duration: ${getMarqueeDuration(client.features)};`}
										role="list"
									>
										{#each marqueeCopies as copyIndex}
											<div class="tag-set" aria-hidden={copyIndex > 0}>
												{#each client.features as feature}
													<span class="tag-pill" role="listitem">{feature}</span>
												{/each}
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>

		<div>
			<div class="mx-auto max-w-[1200px] px-10 pt-4 pb-4 md:px-16 md:pt-8 md:pb-6">
				{#each personal as project, index (project.slug)}
					<article class="portfolio-case">
						<div
							class="case-heading-row fade-on-scroll"
							style={`--scroll-fill: ${scrollFill};`}
							use:fadeOnScroll
						>
							<span class="case-heading-line"></span>
							<span>{String(clients.length + index + 1).padStart(2, '0')}</span>
						</div>

						<div class="case-grid has-actions">
							<div class="case-copy">
								<p class="case-kicker fade-on-scroll" use:fadeOnScroll>{project.category}</p>
								<h3 class="fade-on-scroll" use:fadeOnScroll>
									{project.title}<span class="blue-dot">.</span>
								</h3>

								<div class="case-body fade-on-scroll" use:fadeOnScroll>
									{#each project.summary as paragraph}
										<span class="block">{paragraph}</span>
									{/each}
								</div>
							</div>

							<figure class="case-figure fade-on-scroll" use:fadeOnScroll>
								<img
									class={`client-container ${project.imageStyle === 'mockup' ? 'client-container--mockup' : ''}`}
									src={project.image}
									alt={project.imageAlt}
									loading="lazy"
									decoding="async"
								/>
							</figure>

							<div class="case-actions fade-on-scroll" use:fadeOnScroll>
								<a href={project.path}>Read case study</a>
								{#if project.siteUrl}
									<a href={project.siteUrl} target="_blank" rel="noopener">View site</a>
								{/if}
							</div>
						</div>

						<div class="case-meta" id={`${project.slug}-stack`}>
							<div class="fade-on-scroll" use:fadeOnScroll>
								<h4>Tech Stack</h4>
								<div class="tag-marquee">
									<div
										class="tag-track"
										style={`--tag-marquee-duration: ${getMarqueeDuration(project.tech)};`}
										role="list"
									>
										{#each marqueeCopies as copyIndex}
											<div class="tag-set" aria-hidden={copyIndex > 0}>
												{#each project.tech as tech}
													<span class="tag-pill" role="listitem">{tech}</span>
												{/each}
											</div>
										{/each}
									</div>
								</div>
							</div>

							<div class="fade-on-scroll" use:fadeOnScroll>
								<h4>Features</h4>
								<div class="tag-marquee">
									<div
										class="tag-track feature-list"
										style={`--tag-marquee-duration: ${getMarqueeDuration(project.features)};`}
										role="list"
									>
										{#each marqueeCopies as copyIndex}
											<div class="tag-set" aria-hidden={copyIndex > 0}>
												{#each project.features as feature}
													<span class="tag-pill" role="listitem">{feature}</span>
												{/each}
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<ReadySection
		heading="Ready to be the next portfolio piece?"
		tail="to get started."
		onAction={openModal}
	/>
</section>

<style>
	.hero-animated {
		background: radial-gradient(circle at 30% 40%, #e8e1d8, #ededed 80%);
		background-size: cover;
	}

	:global(.link) {
		color: #0000ff;
		cursor: pointer;
	}

	:global(.blue-dot) {
		color: #1b1b1b;
	}

	.portfolio-case {
		padding: clamp(16px, 2vw, 24px) 0 0;
	}

	.portfolio-case:first-of-type {
		padding-top: clamp(10px, 1.5vw, 18px);
	}

	.case-heading-row {
		display: flex;
		align-items: center;
		gap: clamp(14px, 2vw, 22px);
		margin-bottom: clamp(28px, 4vw, 42px);
		color: #1b1b1b;
		font-size: 0.86rem;
		font-weight: 800;
		letter-spacing: 0.08em;
	}

	.case-heading-line {
		position: relative;
		display: block;
		flex: 1 1 auto;
		height: 2px;
		overflow: visible;
		background: rgba(0, 0, 0, 0.2);
	}

	.case-heading-line::after {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 6px;
		background: #111;
		border-radius: 2px;
		transform: translateY(-50%) scaleX(var(--scroll-fill));
		transform-origin: left;
	}

	.case-heading-row > span:last-child {
		min-width: 2ch;
		line-height: 1;
	}

	.case-grid {
		display: grid;
		grid-template-columns: minmax(360px, 0.82fr) minmax(480px, 1.18fr);
		grid-template-areas: 'copy figure';
		column-gap: clamp(34px, 6vw, 78px);
		row-gap: clamp(22px, 3vw, 34px);
		align-items: center;
	}

	.case-grid.has-actions {
		grid-template-areas:
			'copy figure'
			'actions figure';
	}

	.case-copy {
		grid-area: copy;
		display: flex;
		min-width: 0;
		flex-direction: column;
		gap: clamp(14px, 2vw, 22px);
	}

	.case-kicker {
		color: rgba(0, 0, 0, 0.62);
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.28em;
		line-height: 1.2;
		text-transform: uppercase;
	}

	.case-copy h3 {
		max-width: none;
		font-size: 1.875rem;
		font-weight: 700;
		line-height: 2.25rem;
		letter-spacing: 0;
	}

	.case-body {
		max-width: 46rem;
		font-size: 1.25rem;
		line-height: 1.45;
	}

	.case-body :global(.block + .block) {
		margin-top: 22px;
	}

	.case-actions {
		grid-area: actions;
		display: flex;
		flex-wrap: wrap;
		gap: clamp(28px, 4vw, 46px);
		justify-content: flex-end;
		align-self: start;
	}

	.case-actions a {
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
		text-decoration: none;
		transition: transform 180ms ease;
	}

	.case-actions a::before {
		content: '';
		position: absolute;
		left: 0;
		right: 28px;
		bottom: -6px;
		height: 3px;
		background: currentColor;
		border-radius: 999px;
		transform: scaleX(1);
		transform-origin: left;
		transition: transform 180ms ease;
	}

	.case-actions a::after {
		content: '→';
		margin-left: 12px;
	}

	.case-actions a:hover {
		transform: translateX(3px);
	}

	.case-actions a:hover::before {
		transform: scaleX(1);
	}

	.case-figure {
		grid-area: figure;
		margin: 0;
		min-width: 0;
	}

	.client-container {
		display: block;
		width: 100%;
		border: 1px solid black;
		border-radius: 5px;
		box-shadow: 0 18px 34px rgba(0, 0, 0, 0.08);
	}

	.client-container--mockup {
		border: 0;
		border-radius: 0;
		box-shadow: none;
	}

	.case-meta {
		display: flex;
		flex-direction: column;
		gap: clamp(20px, 3vw, 30px);
		margin-top: clamp(34px, 5vw, 52px);
		padding-top: clamp(22px, 3vw, 28px);
		padding-bottom: clamp(18px, 3vw, 34px);
		border-top: 1px solid rgba(0, 0, 0, 0.28);
	}

	.case-meta h4 {
		margin-bottom: 12px;
		color: rgba(0, 0, 0, 0.5);
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.28em;
		text-transform: uppercase;
	}

	.tag-marquee {
		overflow: hidden;
		width: 100%;
		padding: 2px 0 4px;
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
		gap: 8px;
		padding-right: 8px;
	}

	.tag-pill {
		flex: 0 0 auto;
		border: 1px solid rgba(0, 0, 0, 0.42);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.5);
		padding: 7px 14px;
		color: #1b1b1b;
		font-size: 0.82rem;
		line-height: 1.1;
		white-space: nowrap;
	}

	.feature-list .tag-pill {
		border-color: #111;
		background: #111;
		color: #f2eee8;
	}

	@keyframes tag-marquee {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tag-track {
			animation: none;
			transform: translateX(0);
		}
	}

	@media (max-width: 900px) {
		.case-grid {
			grid-template-columns: 1fr;
			grid-template-areas:
				'copy'
				'figure';
		}

		.case-grid.has-actions {
			grid-template-areas:
				'copy'
				'figure'
				'actions';
		}

		.case-body {
			max-width: 48rem;
		}
	}

	@media (max-width: 640px) {
		.portfolio-case {
			padding-top: 16px;
		}

		.portfolio-case:first-of-type {
			padding-top: 10px;
		}

		.case-heading-row {
			margin-bottom: 26px;
		}

		.case-grid {
			row-gap: 24px;
		}

		.case-copy {
			gap: 16px;
		}

		.case-copy h3 {
			font-size: 2rem;
			line-height: 2.25rem;
		}

		.case-body {
			max-width: none;
			font-size: 1.25rem;
		}

		.case-actions {
			gap: 28px;
		}
	}

	@media (min-width: 768px) {
		.case-copy h3 {
			font-size: 2.25rem;
			line-height: 2.5rem;
		}
	}
</style>
