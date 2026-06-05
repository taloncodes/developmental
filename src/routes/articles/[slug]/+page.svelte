<script>
	import '../../../app.css';
	import '../../../app.scss';
	import Form from '../../../components/Form.svelte';
	import ReadySection from '../../../components/ReadySection.svelte';
	import TypewriterText from '../../../components/TypewriterText.svelte';
	import { fadeOnScroll } from '$lib/fadeOnScroll';

	let { data } = $props();
	let article = $derived(data.article);
	let modalOpen = $state(false);
	let fullText = $derived(article.path);

	function openModal() {
		modalOpen = !modalOpen;
		document.querySelector('body').style.overflow = 'hidden';
	}

	function needsTitleDot(title) {
		return !/[?!.]$/.test(title.trim());
	}
</script>

<article>
	<Form bind:visible={modalOpen} />

	<header class="main_wrap article-hero border-b-2 border-black">
		<div class="mx-auto max-w-[1200px] px-10 py-10 md:px-16 md:py-20">
			<a href="/articles" class="article-back-link fade-on-scroll" use:fadeOnScroll>
				<span class="route-back-arrow" aria-hidden="true">&larr;</span>
				<span><span class="blue-dot">.</span><span>/articles</span></span>
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

			<p class="article-intro fade-on-scroll" use:fadeOnScroll>
				{article.intro}
			</p>

			<div class="article-meta fade-on-scroll" use:fadeOnScroll>
				<span>{article.category}</span>
				<span>{article.readTime}</span>
			</div>
		</div>
	</header>

	<section>
		<div class="article-shell mx-auto max-w-[1200px] px-10 py-10 md:px-16 md:py-20">
			<div class="article-content">
				<h2 class="article-title fade-on-scroll" use:fadeOnScroll>
					{article.title}{#if needsTitleDot(article.title)}<span class="blue-dot">.</span>{/if}
				</h2>

				{#each article.sections as section}
					<section class="article-section fade-on-scroll" use:fadeOnScroll>
						<h2>{section.title}<span class="blue-dot">.</span></h2>

						{#each section.body as paragraph}
							<p>{paragraph}</p>
						{/each}
					</section>
				{/each}
			</div>

			<aside class="article-side fade-on-scroll" use:fadeOnScroll>
				<section class="article-panel">
					<h2>Key points<span class="blue-dot">.</span></h2>
					<ul>
						{#each article.keyTakeaways as takeaway}
							<li>{takeaway}</li>
						{/each}
					</ul>
				</section>

				<section class="article-panel">
					<h2>Related pages<span class="blue-dot">.</span></h2>
					<div class="related-links">
						{#each article.related as link}
							<a href={link.href}>{link.label}</a>
						{/each}
					</div>
				</section>
			</aside>
		</div>
	</section>

	<ReadySection
		heading="Want a second pair of eyes on your website?"
		tail="if you want a practical review."
		onAction={openModal}
	/>
</article>

<style>
	.article-hero {
		background: radial-gradient(circle at 30% 40%, #e8e1d8, #ededed 80%);
		background-size: cover;
	}

	:global(.blue-dot) {
		color: #1b1b1b;
	}

	:global(.text-accent-one) {
		color: #0000ff;
	}

	.article-back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: clamp(1.1rem, 3vw, 1.6rem);
		color: #0000ff;
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.2;
		text-decoration: none;
		transition: transform 180ms ease;
	}

	.article-back-link:hover {
		transform: translateX(-3px);
	}

	.route-back-arrow {
		display: inline-block;
		font-size: 1.25em;
		line-height: 1;
	}

	h1 {
		max-width: 58rem;
		line-height: 1.05;
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

	.article-intro {
		max-width: 52rem;
		padding: clamp(1.25rem, 3vw, 2rem) 0 0;
		font-size: clamp(1.15rem, 2.5vw, 1.45rem);
		line-height: 1.45;
	}

	.article-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		padding-top: clamp(1.3rem, 3vw, 2rem);
	}

	.article-meta span {
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

	.article-shell {
		display: grid;
		gap: clamp(2.5rem, 6vw, 4rem);
		align-items: start;
	}

	.article-content {
		display: grid;
		gap: clamp(2rem, 5vw, 3rem);
		max-width: 48rem;
	}

	.article-section {
		display: grid;
		gap: 1rem;
	}

	.article-section + .article-section {
		padding-top: clamp(1.25rem, 3vw, 2rem);
		border-top: 1px solid rgba(27, 27, 27, 0.2);
	}

	.article-title,
	.article-section h2,
	.article-panel h2 {
		font-size: clamp(1.8rem, 4vw, 2.4rem);
		font-weight: 700;
		line-height: 1.1;
	}

	.article-section p {
		font-size: 1.12rem;
		line-height: 1.55;
	}

	.article-side {
		display: grid;
		gap: clamp(2rem, 5vw, 3rem);
		min-width: 0;
	}

	.article-panel {
		display: grid;
		gap: 1rem;
	}

	.article-panel ul {
		display: grid;
		gap: 0.8rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.article-panel li {
		padding-bottom: 0.8rem;
		border-bottom: 1px solid rgba(27, 27, 27, 0.18);
		font-size: 1rem;
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

	@media (min-width: 900px) {
		.article-shell {
			grid-template-columns: minmax(0, 1fr) minmax(17rem, 0.42fr);
		}

		.article-side {
			position: sticky;
			top: 7rem;
		}
	}
</style>
