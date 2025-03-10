<script>
	import '../app.css';
	import '../app.scss';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import SecondaryHeader from '../components/SecondaryHeader.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	import { onMount } from 'svelte';


	onMount(() => {
	window.requestAnimationFrame(() => {
		window.dispatchEvent(new Event('resize'));
	});
	});

</script>

<head>
	<link rel="stylesheet" href="https://use.typekit.net/uuh7xdh.css">
</head>

<div class="flex flex-col min-h-[100dvh] justify-between">

{#if $page.url.pathname === '/'}
	<Header />
{:else}
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







