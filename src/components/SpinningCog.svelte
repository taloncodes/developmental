<script>
	import cog from '$lib/graphics/cog.png';

	let { label = 'Animated settings cog' } = $props();
</script>

<div class="spinning-cog-wrap">
	<img class="spinning-cog" src={cog} alt={label} loading="lazy" decoding="async" />
</div>

<style>
	.spinning-cog-wrap {
		display: grid;
		min-height: clamp(12rem, 23vw, 17rem);
		place-items: center;
		overflow: visible;
	}

	.spinning-cog {
		display: block;
		width: min(100%, 16.5rem);
		height: auto;
		filter: drop-shadow(0 14px 18px rgba(27, 27, 27, 0.1));
		transform-origin: center;
		will-change: transform;
		animation: cogMomentum 6.8s infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.spinning-cog {
			animation: none;
		}
	}

	@keyframes cogMomentum {
		0% {
			transform: rotate(0turn);
			animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
		}

		76%,
		100% {
			transform: rotate(3turn);
		}
	}
</style>
