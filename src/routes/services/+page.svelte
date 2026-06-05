<script>
	import '../../app.css';
	import '../../app.scss';
	import Form from '../../components/Form.svelte';
	import ReadySection from '../../components/ReadySection.svelte';
	import { tick } from 'svelte';
	import { onMount } from 'svelte';
	import { fadeOnScroll } from '$lib/fadeOnScroll';
	import appPhone from '$lib/graphics/app-development-phone.png';
	import laptop from '$lib/graphics/hero_layer_1v3.webp';
	import ThreeCoin from '../../components/ThreeCoin.svelte';
	import AuditScore from '../../components/AuditScore.svelte';
	import SetupRoute from '../../components/SetupRoute.svelte';
	import SpinningCog from '../../components/SpinningCog.svelte';

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
			cta: { label: 'Small business web design', href: '/small-business-web-design' }
		},
		{
			id: 'app-dev',
			title: 'App Development',
			isOpen: false,
			content:
				'I build installable progressive web apps that work from the browser, can be added to a device and support payments, accounts and custom business workflows.',
			visualLabel: 'App mockup',
			visualType: 'phone',
			cta: { label: 'App development', href: '/app-development' }
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
				'I review your site performance, SEO and user experience, including local visibility signals like Google Business Profile where it matters, then give you clear fixes to improve speed, visibility and conversions.',
			visualLabel: 'Audit and SEO score',
			visualType: 'auditSeo',
			cta: { label: 'Website audit & SEO', href: '/website-audit-seo' }
		},
		{
			id: 'setup-local',
			title: 'Setup & Local Visibility',
			isOpen: false,
			content:
				'I can help with the practical launch pieces around a website too: domain setup, business email, DNS records, basic tracking and Google Business Profile setup for local businesses.',
			visualLabel: 'Setup workflow image',
			visualType: 'setupRoute',
			cta: { label: 'Domain, email & local setup', href: '/domain-email-google-business-setup' }
		},
		{
			id: 'custom',
			title: 'Custom Solutions',
			isOpen: false,
			content:
				'Streamline and automate your business processes with custom solutions, from invoice generators and quote calculators to something completely unique to you.',
			visualLabel: 'Custom solution image',
			visualType: 'spinningCog',
			cta: { label: 'Custom business software', href: '/custom-business-software' }
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
	let displayText = $state(fullText);

	async function typewriterEffect() {
		for (let i = 0; i <= fullText.length; i++) {
			displayText = fullText.slice(0, i);
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 75));
		}
	}

	function getSegmentedTextParts(displayText) {
		let currentIndex = 0;

		return textSegments.map((segment) => {
			const segmentText = displayText.slice(currentIndex, currentIndex + segment.text.length);
			currentIndex += segment.text.length;

			return {
				...segment,
				text: segmentText
			};
		});
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
				<span>
					<b>
						{#each getSegmentedTextParts(displayText) as segment (segment.class)}
							<span class={segment.class}>{segment.text}</span>
						{/each}
					</b>
				</span>
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
							{:else if section.visualType === 'setupRoute'}
								<SetupRoute routeId={`setup-route-${section.id}`} />
							{:else if section.visualType === 'spinningCog'}
								<SpinningCog />
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

			<section class="service-note fade-on-scroll" use:fadeOnScroll>
				<div>
					<h2>Pricing & support<span class="blue-dot">.</span></h2>
					<p>
						Typical websites for service-based businesses start from £500. Custom apps, specialist
						functionality and ongoing support plans are scoped around what the work needs to do.
					</p>
				</div>

				<div class="service-note__links">
					<a href="/website-pricing">Website pricing</a>
					<a href="/domain-email-google-business-setup">Setup support</a>
				</div>
			</section>
		</div>
	</section>

	<ReadySection
		heading="Need help with anything else web-related?"
		tail="to get in touch."
		onAction={openModal}
	/>
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

	.service-note {
		display: grid;
		gap: clamp(1.25rem, 3vw, 2rem);
		padding-top: clamp(2rem, 5vw, 3rem);
	}

	.service-note h2 {
		margin-bottom: 1rem;
		font-size: clamp(1.875rem, 4vw, 2.25rem);
		font-weight: 700;
		line-height: 1.15;
	}

	.service-note p {
		max-width: 48rem;
		font-size: 1.12rem;
		line-height: 1.55;
	}

	.service-note__links {
		display: flex;
		flex-wrap: wrap;
		gap: clamp(1rem, 3vw, 2rem);
	}

	.service-note__links a {
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

	.service-note__links a::before {
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

	.service-note__links a::after {
		content: '→';
		margin-left: 12px;
	}

	.service-note__links a:hover {
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

	.service-detail__score-wrap {
		display: grid;
		min-height: clamp(11rem, 21vw, 15rem);
		place-items: center;
		overflow: visible;
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

		.service-note {
			grid-template-columns: minmax(0, 1fr) minmax(17rem, 0.42fr);
			align-items: end;
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
