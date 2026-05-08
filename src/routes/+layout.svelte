<script>
	import '../app.css';
	import '../app.scss';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import SecondaryHeader from '../components/SecondaryHeader.svelte';
	import { page } from '$app/stores';
	import { pageMeta } from '$lib/pageMeta';
	import { afterNavigate } from '$app/navigation';

	let { children, data } = $props();

	let activePath = $derived($page.url.pathname);
	const defaultMeta = {
		title: 'Developmental',
		desc: 'Modern, affordable websites for small businesses.'
	};
	let currentMeta = $derived(pageMeta[activePath] ?? defaultMeta);


	import { onMount } from 'svelte';

	afterNavigate((nav) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: nav.to?.url.pathname
    });
  	}
	});


	onMount(() => {
		window.requestAnimationFrame(() => {
			window.dispatchEvent(new Event('resize'));
		});

	});

        
</script>

<svelte:head>
  <title>{currentMeta.title}</title>
  <meta name="description" content={currentMeta.desc} />
  <link rel="canonical" href={`https://developmental.pro${activePath}`} />
</svelte:head>


<div class="flex flex-col min-h-[100dvh] justify-between">

{#if $page.url.pathname }
	<SecondaryHeader />
{/if}

{#if $page.url.pathname === "/"}
<main class="flex-grow flex flex-col justify-center">
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






