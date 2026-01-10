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


	import { onMount } from 'svelte';

	afterNavigate((nav) => {
		gtag('config', 'G-5CRM59K9MX', {
		page_path: nav.to?.url.pathname
		});
	});

	onMount(() => {
	window.requestAnimationFrame(() => {
		window.dispatchEvent(new Event('resize'));
	});
	console.log(pageMeta)

	});

        
</script>

<svelte:head>
<title>{pageMeta[activePath].title}</title>
<meta name="description" content={pageMeta[activePath].desc}>
<link rel="canonical" href={`https://developmental.pro${activePath}`} />
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5CRM59K9MX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5CRM59K9MX');

  let fontLink;

  function handleFontLoad() {
    fontLink.rel = 'stylesheet';
  }
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link
  bind:this={fontLink}
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  onload={handleFontLoad}
/>

<noscript>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  />
</noscript>



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







