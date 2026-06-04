<script>
	import { onDestroy } from 'svelte';

	let { active = false, target = 100, duration = 1200 } = $props();
	let value = $state(0);
	let frameId;

	function stopAnimation() {
		if (frameId) cancelAnimationFrame(frameId);
		frameId = undefined;
	}

	function animateScore() {
		stopAnimation();
		value = 0;

		const start = performance.now();

		function tick(now) {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			value = Math.round(target * eased);

			if (progress < 1) {
				frameId = requestAnimationFrame(tick);
			}
		}

		frameId = requestAnimationFrame(tick);
	}

	$effect(() => {
		if (active) {
			animateScore();
		} else {
			stopAnimation();
			value = 0;
		}
	});

	onDestroy(stopAnimation);
</script>

<div class="audit-score-ring" style={`--score-progress: ${value}%`} aria-hidden="true">
	<span>{value}</span>
</div>

<style>
	.audit-score-ring {
		position: relative;
		display: grid;
		width: clamp(8.5rem, 15vw, 11rem);
		aspect-ratio: 1;
		place-items: center;
		color: #1b1b1b;
	}

	.audit-score-ring::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 50%;
		background: conic-gradient(from 0deg, #1b1b1b var(--score-progress), rgba(27, 27, 27, 0.14) 0);
		-webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 18px), #000 0);
		mask: radial-gradient(farthest-side, transparent calc(100% - 18px), #000 0);
	}

	.audit-score-ring span {
		position: relative;
		z-index: 1;
		font-family: Inter, sans-serif;
		font-size: clamp(2.1rem, 4vw, 3rem);
		font-weight: 800;
		line-height: 1;
		color: #1b1b1b;
	}

	@media (max-width: 767px) {
		.audit-score-ring {
			width: clamp(8rem, 42vw, 9.5rem);
		}

		.audit-score-ring::before {
			-webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 15px), #000 0);
			mask: radial-gradient(farthest-side, transparent calc(100% - 15px), #000 0);
		}
	}
</style>
