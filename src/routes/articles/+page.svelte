<script>
	import { tick } from 'svelte';
	import '../../app.css';
	import '../../app.scss';
	import Form from '../../components/Form.svelte';
	import ReadySection from '../../components/ReadySection.svelte';
	import { fadeOnScroll } from '$lib/fadeOnScroll';
	import { articleList } from '$lib/articles';

	let modalOpen = $state(false);
	const fullText = '/articles';
	let displayText = $state(fullText);
	let typewriterRun = 0;

	async function typewriterEffect(text) {
		const run = ++typewriterRun;
		displayText = '';

		for (let i = 0; i <= text.length; i++) {
			if (run !== typewriterRun) return;

			displayText = text.slice(0, i);
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 75));
		}
	}

	function getSegmentedText(displayText) {
		const slash = displayText.slice(0, 1);
		const text = displayText.slice(1);

		return `<span class="blue-dot">${slash}</span><span class="text-accent-one">${text}</span>`;
	}

	function openModal() {
		modalOpen = !modalOpen;
		document.querySelector('body').style.overflow = 'hidden';
	}

	function needsTitleDot(title) {
		return !/[?!.]$/.test(title.trim());
	}

	$effect(() => {
		void typewriterEffect(fullText);
	});
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
					<span class="typewriter-live"><b>{@html getSegmentedText(displayText)}</b></span>
				</span>
			</h1>

			<p class="fade-on-scroll py-5 text-xl md:py-10" use:fadeOnScroll>
				Practical notes on websites, SEO, local visibility, app development and business tools for
				business owners, developers, designers and technical professionals.
			</p>
		</div>
	</div>

	<section>
		<div class="mx-auto max-w-[1200px] px-10 py-10 md:px-16 md:py-20">
			<div class="articles-list">
				{#each articleList as article}
					<article class="article-row fade-on-scroll" use:fadeOnScroll>
						<div class="article-row__meta">
							<span>{article.category}</span>
							<span>{article.readTime}</span>
						</div>

						<div class="article-row__body">
							<h2>
								<a href={article.path}
									>{article.title}{#if needsTitleDot(article.title)}<span class="blue-dot">.</span
										>{/if}</a
								>
							</h2>
							<p>{article.desc}</p>

							<div class="related-links">
								<a href={article.path}>Read article</a>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<ReadySection
		heading="Need a clearer route for your website?"
		tail="to talk it through."
		onAction={openModal}
	/>
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
		white-space: nowrap;
		animation: blink 1.2s steps(2, start) infinite;
	}

	.typewriter-stack {
		display: inline-grid;
		grid-template-areas: 'typewriter';
		min-width: 0;
	}

	.typewriter-stack > span {
		grid-area: typewriter;
		justify-self: start;
		text-align: left;
	}

	.typewriter-ghost {
		visibility: hidden;
	}

	.articles-list {
		display: grid;
	}

	.article-row {
		display: grid;
		gap: clamp(1rem, 3vw, 2rem);
		padding: clamp(1.75rem, 4vw, 2.8rem) 0;
		border-bottom: 1px solid rgba(27, 27, 27, 0.2);
	}

	.article-row:first-child {
		padding-top: 0;
	}

	.article-row__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		align-content: start;
	}

	.article-row__meta span {
		display: inline-flex;
		align-items: center;
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

	.article-row__body {
		display: grid;
		gap: 1rem;
		min-width: 0;
	}

	.article-row h2 {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 700;
		line-height: 1.08;
	}

	.article-row h2 a {
		color: #1b1b1b;
		text-decoration: none;
	}

	.article-row p {
		max-width: 48rem;
		font-size: 1.12rem;
		line-height: 1.45;
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

	@media (min-width: 768px) {
		.article-row {
			grid-template-columns: minmax(11rem, 0.32fr) minmax(0, 1fr);
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
</style>
