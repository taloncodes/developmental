<script>
	import { trackMainCta } from '$lib/conversionTracking';

	export let heading;
	export let tail = 'to get started.';
	export let actionLabel = 'Click here';
	export let trackingLocation = 'ready_section';
	export let onAction = () => {};

	function handleAction() {
		trackMainCta(actionLabel, trackingLocation);
		onAction();
	}
</script>

<hr class="ready-rule border-black/20" />

<section class="ready-section">
	<div class="ready-section__inner">
		<h2 class="text-3xl md:text-4xl">
			<b>{heading}</b>
		</h2>

		<h3 class="ready-cta text-3xl md:text-4xl">
			<button class="link ready-cta__inline-link" onclick={handleAction}>{actionLabel}</button>
			{tail}
		</h3>
	</div>
</section>

<style>
	.ready-rule {
		width: 100vw;
		margin: clamp(2rem, 5vw, 3rem) 0 0 calc(50% - 50vw);
		border-color: #1b1b1b;
		border-top-width: 2px;
	}

	.ready-section {
		width: 100vw;
		margin-left: calc(50% - 50vw);
		background: radial-gradient(circle at 30% 40%, #e8e1d8, #ededed 80%);
		background-size: cover;
	}

	.ready-section__inner {
		display: flex;
		min-height: clamp(13rem, 18vw, 14rem);
		max-width: 1200px;
		margin: 0 auto;
		padding: clamp(2rem, 4vw, 3.25rem) 2.5rem;
		flex-direction: column;
		justify-content: center;
	}

	.ready-cta {
		margin-top: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 700;
		line-height: 1.18;
	}

	.ready-cta__inline-link {
		display: inline;
		padding: 0;
		border: 0;
		background: transparent;
		color: #0000ff;
		cursor: pointer;
		font: inherit;
		font-weight: inherit;
		line-height: inherit;
		text-align: left;
	}

	@media (min-width: 768px) {
		.ready-section__inner {
			padding-right: 5rem;
			padding-left: 5rem;
		}
	}
</style>
