<script>
	import '../../app.css';
	import '../../app.scss';
	import Form from '../../components/Form.svelte';
	import { tick } from 'svelte';
	import { onMount } from 'svelte';
	import plus from '$lib/graphics/plus.png';
	import { flip } from 'svelte/animate';
	import { fadeOnScroll } from '$lib/fadeOnScroll';
	import appPhone from '$lib/graphics/app-development-phone.png';
	import laptop from '$lib/graphics/hero_layer_1v3.webp';
	import ThreeCoin from '../../components/ThreeCoin.svelte';
	import AuditScore from '../../components/AuditScore.svelte';

	let modalOpen = $state(false);

	let sections = $state([
		{
			id: 'web-design',
			title: 'Web Design',
			isOpen: false,
			content:
				'Visually appealing, user-friendly and modern website designs that align with your brand aesthetic, engage visitors and elevate their experience.',
			visualLabel: 'Website mockup',
			visualType: 'laptop',
			cta: { label: 'View portfolio', href: '/portfolio' }
		},
		{
			id: 'app-dev',
			title: 'App Development',
			isOpen: false,
			content:
				'I build installable apps as modern PWAs, optimised to feel fast, reliable and polished across mobile, tablet and desktop.',
			visualLabel: 'App mockup',
			visualType: 'phone',
			cta: { label: 'View portfolio', href: '/portfolio' }
		},
		{
			id: 'logo',
			title: 'Logo & Branding',
			isOpen: false,
			content:
				'Establish a strong brand identity with custom logos and branding elements, tailored to you, that resonate with your audience.',
			visualLabel: 'Brand image',
			visualType: 'coin'
		},
		{
			id: 'audit-seo',
			title: 'Audit & SEO',
			isOpen: false,
			content:
				'I review your site performance, SEO and user experience, then give you clear fixes to improve speed, visibility and conversions.',
			visualLabel: 'Audit and SEO score',
			visualType: 'auditSeo'
		},
		{
			id: 'custom',
			title: 'Custom Solutions',
			isOpen: false,
			content:
				'Streamline and automate your business processes with custom solutions, from invoice generators and quote calculators to something completely unique to you.',
			visualLabel: 'Custom solution image',
			visualType: 'custom'
		}
	]);

	function toggleSection(id) {
		sections = sections.map((section) =>
			section.id === id ? { ...section, isOpen: !section.isOpen } : section
		);
	}

	const textSegments = [
		{ text: '/', class: 'blue-dot' },
		{ text: 'services', class: 'text-accent-one' }
	];

	let fullText = textSegments.map((segment) => segment.text).join('');
	let displayText = $state('');

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

	onMount(() => {
		typewriterEffect();
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
				<span> <b>{@html getSegmentedText(displayText)}</b></span>
			</h1>

			<p class="fade-on-scroll py-5 text-xl md:py-10" use:fadeOnScroll>
				I provide tailored solutions for businesses looking to grow their online presence, no matter
				what stage you're currently at.
				<br /><br />
				Need a new website to showcase your brand? Custom software to automate your business processes?
				Or maybe you already have a website that's not performing as you'd expect?
				<br /><br />
				<b>Tap on a service below to learn more</b>
			</p>
		</div>
	</div>

	<section>
		<div class="mx-auto max-w-[1200px] px-10 py-10 md:px-16 md:py-20">
			{#each sections as section (section.id)}
				<div
					class="dot-hover fade-on-scroll border-b border-black/20"
					class:active={section.isOpen === true}
					use:fadeOnScroll
				>
					<button
						class="image-button flex w-full items-center justify-between gap-4 py-6 text-left md:py-10"
						onclick={() => toggleSection(section.id)}
						aria-expanded={section.isOpen}
						aria-controls={`${section.id}-content`}
					>
						<h2 class="text-3xl leading-tight font-bold md:text-4xl">
							{section.title}<span class="blue-dot">.</span>
						</h2>

						<span class="shrink-0 text-4xl leading-none font-bold md:text-4xl">
							{section.isOpen ? '–' : '+'}
						</span>
					</button>
				</div>

				<div
					id={`${section.id}-content`}
					class="modal section-text fade-on-scroll text-xl"
					class:open={section.isOpen}
					class:section-text--coin={section.visualType === 'coin'}
					aria-hidden={!section.isOpen}
					inert={!section.isOpen}
					use:fadeOnScroll
				>
					<div class="service-detail" class:service-detail--coin={section.visualType === 'coin'}>
						<div class="service-detail__copy fade-on-scroll" use:fadeOnScroll>
							<p>{section.content}</p>
						</div>

						<figure
							class="service-detail__visual fade-on-scroll"
							aria-label={section.visualType === 'coin'
								? 'Spinning Developmental coin logo'
								: section.visualType === 'laptop'
									? 'Floating website laptop mockup'
									: section.visualType === 'phone'
										? 'Floating app phone mockup'
										: section.visualLabel}
							use:fadeOnScroll
						>
							{#if section.visualType === 'laptop'}
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
							{:else if section.visualType === 'phone'}
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
							{:else if section.visualType === 'coin'}
								<div class="service-detail__coin-wrap">
									<ThreeCoin />
								</div>
							{:else if section.visualType === 'auditSeo'}
								<div class="service-detail__score-wrap">
									<AuditScore active={section.isOpen} />
								</div>
							{:else if section.visualType === 'custom'}
								<div class="service-detail__graphic-wrap">
									<div class="service-graphic service-graphic--custom" aria-hidden="true">
										<span class="custom-path custom-path--top"></span>
										<span class="custom-path custom-path--right"></span>
										<span class="custom-path custom-path--bottom"></span>
										<span class="custom-path custom-path--left"></span>
										<span class="custom-node custom-node--top custom-node--form"></span>
										<span class="custom-node custom-node--right custom-node--output"></span>
										<span class="custom-node custom-node--bottom custom-node--invoice"></span>
										<span class="custom-node custom-node--left custom-node--data"></span>
										<div class="custom-core">./</div>
									</div>
								</div>
							{:else}
								<div class="service-detail__placeholder">
									<span>{section.visualLabel}</span>
								</div>
							{/if}
						</figure>

						{#if section.cta}
							<div class="service-detail__cta-wrap fade-on-scroll" use:fadeOnScroll>
								<a class="service-detail__cta" href={section.cta.href}>{section.cta.label}</a>
							</div>
						{/if}
					</div>
				</div>

				<hr
					class="section-divider fade-on-scroll border-black/20"
					class:open={section.isOpen}
					use:fadeOnScroll
				/>
			{/each}
		</div>
	</section>

	<div class="fade-on-scroll mb-10 flex md:mb-20" use:fadeOnScroll>
		<button
			onclick={openModal}
			class="text-dark mbg-yellow hover:bg-dark z-3 m-auto flex w-fit cursor-pointer items-center gap-2 rounded-xl px-6 py-3 text-xl shadow-2xl transition-all hover:scale-105 hover:text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none active:scale-95"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.75"
				stroke="currentColor"
				class="relative top-[1px] h-5 w-5"
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
</section>

<style>
	.dot-hover {
		position: relative;
	}

	.dot-hover::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -4px;
		width: 100%;
		height: 6px;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: left;
		border-radius: 2px;
		opacity: 0;
		transition:
			opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
			transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.dot-hover:hover::after {
		opacity: 1;
		transform: scaleX(0.25);
	}

	.dot-hover.active::after {
		opacity: 1;
		transform: scaleX(1);
	}

	.hero-animated {
		background: radial-gradient(circle at 30% 40%, #e8e1d8, #ededed 80%);
		background-size: cover;
	}

	:global(.blue-dot) {
		color: #1b1b1b;
	}

	.section-text {
		max-height: 0;
		overflow: hidden;
		padding-top: 0;
		opacity: 0;
		transition:
			max-height 250ms ease,
			opacity 250ms ease,
			padding-top 250ms ease;
	}

	.section-text.open {
		max-height: 36rem;
		padding-top: clamp(1.25rem, 3vw, 2rem);
		opacity: 1;
	}

	.service-detail {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
	}

	.service-detail__copy {
		display: flex;
		min-width: 0;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: clamp(1.25rem, 3vw, 1.75rem);
	}

	.service-detail__copy p {
		max-width: 42rem;
		line-height: 1.45;
	}

	.service-detail__cta-wrap {
		display: flex;
		justify-content: flex-start;
		min-width: 0;
	}

	.service-detail__cta {
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

	.service-detail__cta::before {
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
	}

	.service-detail__cta::after {
		content: '→';
		margin-left: 12px;
	}

	.service-detail__cta:hover {
		transform: translateX(3px);
	}

	.service-detail__visual {
		margin: 0;
		min-width: 0;
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

	.service-detail__laptop-wrap {
		position: relative;
		display: grid;
		min-height: clamp(12rem, 23vw, 17rem);
		place-items: center;
		overflow: visible;
	}

	.service-detail__laptop {
		position: relative;
		z-index: 1;
		display: block;
		width: min(100%, 28rem);
		max-height: clamp(12rem, 22vw, 16rem);
		object-fit: contain;
		animation: macbookFloat 4s ease-in-out infinite;
	}

	.service-detail__laptop-shadow {
		--shadow-x: -50%;
		position: absolute;
		bottom: 4%;
		left: 50%;
		z-index: 0;
		width: min(62%, 17rem);
		height: 16%;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.25);
		transform: translateX(var(--shadow-x));
		animation: shadowPulse 4s ease-in-out infinite;
	}

	.service-detail__phone-wrap {
		position: relative;
		display: grid;
		min-height: clamp(12rem, 23vw, 17rem);
		place-items: center;
		overflow: visible;
	}

	.service-detail__phone {
		position: relative;
		z-index: 1;
		display: block;
		width: min(86%, 20rem);
		max-height: clamp(13rem, 24vw, 18rem);
		object-fit: contain;
		animation: macbookFloat 4s ease-in-out infinite;
	}

	.service-detail__phone-shadow {
		--shadow-x: -64%;
		position: absolute;
		bottom: 2%;
		left: 50%;
		z-index: 0;
		width: min(44%, 10.5rem);
		height: 13%;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.25);
		transform: translateX(var(--shadow-x));
		animation: shadowPulse 4s ease-in-out infinite;
	}

	.service-detail__graphic-wrap {
		position: relative;
		display: grid;
		min-height: clamp(12rem, 23vw, 17rem);
		place-items: center;
		overflow: visible;
	}

	.service-detail__score-wrap {
		display: grid;
		min-height: clamp(11rem, 21vw, 15rem);
		place-items: center;
		overflow: visible;
	}

	.service-graphic {
		position: relative;
		z-index: 1;
		width: min(100%, 23rem);
		min-height: clamp(11rem, 20vw, 15rem);
		overflow: hidden;
		border: 1px solid rgba(27, 27, 27, 0.18);
		border-radius: 8px;
		background: rgba(237, 237, 237, 0.72);
		color: #1b1b1b;
		animation: macbookFloat 4s ease-in-out infinite;
	}

	.service-graphic--custom {
		display: grid;
		place-items: center;
		min-height: clamp(12rem, 20vw, 15rem);
		overflow: visible;
		border: 0;
		background: transparent;
		animation: none;
	}

	.service-graphic--custom::before {
		content: none;
	}

	.custom-core {
		position: relative;
		z-index: 3;
		display: grid;
		width: clamp(3.75rem, 6.4vw, 4.8rem);
		aspect-ratio: 1;
		place-items: center;
		border: 2px solid #ededed;
		border-radius: 50%;
		background: #1b1b1b;
		color: #ededed;
		font-size: clamp(1.6rem, 3vw, 2.1rem);
		font-weight: 800;
		line-height: 1;
		box-shadow: 0 0 0 1px rgba(27, 27, 27, 0.24);
	}

	.custom-path {
		position: absolute;
		z-index: 1;
		display: block;
		background: #1b1b1b;
		opacity: 0;
	}

	.custom-path--top,
	.custom-path--bottom {
		left: 50%;
		width: 2px;
		height: 22%;
		transform: translateX(-50%);
		transform-origin: center bottom;
		animation: customPathFlowY 4.8s ease-in-out infinite;
	}

	.custom-path--top {
		top: 19%;
		animation-delay: 0s;
	}

	.custom-path--bottom {
		bottom: 19%;
		animation-delay: 2.4s;
		transform-origin: center top;
	}

	.custom-path--left,
	.custom-path--right {
		top: 50%;
		width: 20%;
		height: 2px;
		transform: translateY(-50%);
		transform-origin: right center;
		animation: customPathFlowX 4.8s ease-in-out infinite;
	}

	.custom-path--left {
		left: 25%;
		animation-delay: 3.6s;
	}

	.custom-path--right {
		right: 25%;
		animation-delay: 1.2s;
		transform-origin: left center;
	}

	.custom-node {
		position: absolute;
		z-index: 2;
		display: grid;
		width: clamp(2rem, 4vw, 2.7rem);
		aspect-ratio: 1;
		place-items: center;
		border: 1px solid rgba(27, 27, 27, 0.22);
		border-radius: 50%;
		background: #e8e1d8;
		box-shadow: 0 0 0 0 rgba(27, 27, 27, 0.14);
		animation: customNodePulse 4.8s ease-in-out infinite;
	}

	.custom-node::before {
		content: '';
		display: block;
	}

	.custom-node::after {
		content: '';
		position: absolute;
		display: block;
	}

	.custom-node--form::before {
		width: 40%;
		height: 48%;
		border: 2px solid #1b1b1b;
		border-top-width: 5px;
		border-radius: 2px;
	}

	.custom-node--form::after {
		width: 22%;
		height: 2px;
		background: #ededed;
		box-shadow: 0 0.28rem 0 #ededed;
		transform: translateY(-0.02rem);
	}

	.custom-node--output::before {
		width: 46%;
		height: 2px;
		background: #1b1b1b;
		box-shadow:
			0 0.34rem 0 #1b1b1b,
			0 -0.34rem 0 #1b1b1b;
	}

	.custom-node--invoice::before {
		width: 40%;
		height: 50%;
		border: 2px solid #1b1b1b;
		border-radius: 2px;
	}

	.custom-node--invoice::after {
		width: 22%;
		height: 2px;
		background: #1b1b1b;
		box-shadow:
			0 0.3rem 0 #1b1b1b,
			0 -0.3rem 0 #1b1b1b;
	}

	.custom-node--data::before {
		width: 50%;
		height: 34%;
		border: 2px solid #1b1b1b;
		border-radius: 50%;
		transform: translateY(-18%);
	}

	.custom-node--data::after {
		width: 50%;
		height: 34%;
		border: 2px solid #1b1b1b;
		border-top: 0;
		border-radius: 0 0 50% 50%;
		transform: translateY(18%);
	}

	.custom-node--top {
		top: 11%;
		left: 50%;
		transform: translateX(-50%);
		animation-delay: 0.42s;
	}

	.custom-node--left {
		top: 50%;
		left: 20%;
		transform: translateY(-50%);
		animation-delay: 4.02s;
	}

	.custom-node--right {
		top: 50%;
		right: 20%;
		transform: translateY(-50%);
		animation-delay: 1.62s;
	}

	.custom-node--bottom {
		bottom: 11%;
		left: 50%;
		transform: translateX(-50%);
		animation-delay: 2.82s;
	}

	.service-detail__coin-wrap {
		display: grid;
		min-height: clamp(10rem, 18vw, 13.5rem);
		place-items: center;
		overflow: visible;
	}

	.section-divider {
		margin-top: 0;
		opacity: 0;
		transition:
			margin-top 250ms ease,
			opacity 250ms ease;
	}

	.section-divider.open {
		margin-top: 1.25rem;
		opacity: 1;
	}

	@media (min-width: 768px) {
		.service-detail {
			grid-template-columns: minmax(0, 1.05fr) minmax(17rem, 0.75fr);
			align-items: center;
		}

		.service-detail__visual {
			grid-column: 2;
			grid-row: 1 / span 2;
		}

		.service-detail__cta-wrap {
			grid-column: 1;
			grid-row: 2;
			justify-content: flex-end;
			align-self: start;
			margin-top: calc(clamp(1.5rem, 4vw, 3rem) * -0.4);
		}

		.section-divider.open {
			margin-top: 3rem;
		}

		.service-detail--coin {
			grid-template-columns: minmax(0, 1fr) minmax(12rem, 0.48fr);
			gap: clamp(2rem, 4vw, 4rem);
		}

		.service-detail--coin .service-detail__copy {
			align-self: center;
		}

		.service-detail--coin .service-detail__visual {
			justify-self: center;
		}
	}

	@media (max-width: 767px) {
		.section-text.open {
			max-height: 52rem;
		}

		.section-text--coin.open {
			max-height: 43rem;
		}

		.service-detail__cta-wrap {
			justify-content: flex-end;
		}

		.service-detail__coin-wrap {
			min-height: 11rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.service-detail__laptop,
		.service-detail__laptop-shadow,
		.service-detail__phone,
		.service-detail__phone-shadow,
		.service-graphic,
		.custom-path,
		.custom-node {
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

	@keyframes customPathFlowY {
		0%,
		9% {
			opacity: 0;
			transform: translateX(-50%) scaleY(0);
		}

		18%,
		56% {
			opacity: 1;
			transform: translateX(-50%) scaleY(1);
		}

		72%,
		100% {
			opacity: 0;
			transform: translateX(-50%) scaleY(1);
		}
	}

	@keyframes customPathFlowX {
		0%,
		9% {
			opacity: 0;
			transform: translateY(-50%) scaleX(0);
		}

		18%,
		56% {
			opacity: 1;
			transform: translateY(-50%) scaleX(1);
		}

		72%,
		100% {
			opacity: 0;
			transform: translateY(-50%) scaleX(1);
		}
	}

	@keyframes customNodePulse {
		0%,
		12%,
		100% {
			background: #ededed;
			box-shadow: 0 0 0 0 rgba(27, 27, 27, 0);
		}

		20%,
		38% {
			background: #e8e1d8;
			box-shadow: 0 0 0 0.42rem rgba(27, 27, 27, 0.08);
		}

		54% {
			background: #ededed;
			box-shadow: 0 0 0 0 rgba(27, 27, 27, 0);
		}
	}
</style>
