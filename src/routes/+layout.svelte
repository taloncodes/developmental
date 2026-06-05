<script>
	import '../app.css';
	import '../app.scss';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import SecondaryHeader from '../components/SecondaryHeader.svelte';
	import { page } from '$app/stores';
	import { pageMeta } from '$lib/pageMeta';
	import { buildStructuredData, stringifyStructuredData } from '$lib/structuredData';
	import { trackContactLinkClick } from '$lib/conversionTracking';
	import { afterNavigate } from '$app/navigation';

	let { children, data } = $props();

	let activePath = $derived($page.url.pathname);
	const siteName = 'Developmental';
	const siteUrl = 'https://developmental.pro';
	const defaultImage = `${siteUrl}/developmental_og_image.png`;
	const defaultMeta = {
		title: 'Freelance Web Design for Small Businesses | Developmental',
		desc: 'Custom websites and web apps for small businesses, built by a freelance developer with clean design, fast performance and direct support.',
		ogType: 'website'
	};
	let currentMeta = $derived(pageMeta[activePath] ?? defaultMeta);
	let canonicalUrl = $derived(`${siteUrl}${activePath}`);
	let ogImage = $derived(
		currentMeta.image
			? currentMeta.image.startsWith('http')
				? currentMeta.image
				: `${siteUrl}${currentMeta.image}`
			: defaultImage
	);
	let structuredData = $derived(
		buildStructuredData({
			path: activePath,
			title: currentMeta.title,
			description: currentMeta.desc,
			canonicalUrl,
			image: ogImage
		})
	);
	let structuredDataJson = $derived(stringifyStructuredData(structuredData));

	import { onMount } from 'svelte';

	afterNavigate((nav) => {
		if (typeof window.gtag === 'function') {
			window.gtag('event', 'page_view', {
				page_path: nav.to?.url.pathname
			});
		}
	});

	onMount(() => {
		function handleDocumentClick(event) {
			const link = event.target?.closest?.('a[href^="mailto:"], a[href^="tel:"]');
			if (link) trackContactLinkClick(link);
		}

		document.addEventListener('click', handleDocumentClick);

		window.requestAnimationFrame(() => {
			window.dispatchEvent(new Event('resize'));
		});

		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	});
</script>

<svelte:head>
	<title>{currentMeta.title}</title>
	<meta name="description" content={currentMeta.desc} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:site_name" content={siteName} />
	<meta property="og:type" content={currentMeta.ogType} />
	<meta property="og:title" content={currentMeta.title} />
	<meta property="og:description" content={currentMeta.desc} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content="Developmental freelance web design and web development" />
	<meta property="og:locale" content="en_GB" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={currentMeta.title} />
	<meta name="twitter:description" content={currentMeta.desc} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content="Developmental freelance web design and web development" />

	{@html `<script type="application/ld+json">${structuredDataJson}</script>`}
</svelte:head>

<div class="flex min-h-[100dvh] flex-col justify-between">
	{#if $page.url.pathname}
		<SecondaryHeader />
	{/if}

	{#if $page.url.pathname === '/'}
		<main class="flex flex-grow flex-col justify-center">
			{@render children()}
		</main>
	{:else}
		<main class="flex-grow">
			{@render children()}
		</main>
	{/if}

	<Footer />
</div>

<style>
	:global(body.menu-open) {
		overflow: hidden;
	}
</style>
