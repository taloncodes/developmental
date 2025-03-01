<script>
	import '../app.css';
	import '../app.scss';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import SecondaryHeader from '../components/SecondaryHeader.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<head>
	<link rel="stylesheet" href="https://use.typekit.net/uuh7xdh.css">
</head>

<div class="flex flex-col min-h-screen justify-between">

	{#if $page.url.pathname === '/'}
	<Header />
  	{:else}
	<SecondaryHeader />
  	{/if}
  

<main>
	{@render children()}
</main>

<Footer />
</div>






