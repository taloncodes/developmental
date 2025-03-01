<script>
	import '../app.css';
	import '../app.scss';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	let { children } = $props();
</script>

<head>
	<link rel="stylesheet" href="https://use.typekit.net/uuh7xdh.css">
</head>

<div class="flex flex-col min-h-screen justify-between">
<Header />

<main>
	{@render children()}
</main>

<Footer />
</div>






