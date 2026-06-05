<script>
	let {
		routeId = 'setup-local-signal',
		label = 'Animated local visibility signal'
	} = $props();
</script>

<div class="setup-signal-wrap">
	<svg class="setup-signal" viewBox="80 35 360 230" role="img" aria-label={label}>
		<defs>
			<filter id={`${routeId}-shadow`} x="-40%" y="-40%" width="180%" height="180%">
				<feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#1b1b1b" flood-opacity="0.08" />
			</filter>
		</defs>

		<g class="setup-signal__links" aria-hidden="true">
			<line x1="260" x2="180" y1="160" y2="112" />
			<line x1="260" x2="348" y1="160" y2="106" />
			<line x1="260" x2="372" y1="160" y2="222" />
		</g>

		<g class="setup-signal__rings" aria-hidden="true">
			<circle class="setup-signal__ring setup-signal__ring--one" cx="260" cy="160" r="42" />
			<circle class="setup-signal__ring setup-signal__ring--two" cx="260" cy="160" r="42" />
			<circle class="setup-signal__ring setup-signal__ring--three" cx="260" cy="160" r="42" />
		</g>

		<g class="setup-signal__node setup-signal__node--one" aria-hidden="true">
			<circle class="setup-signal__node-shell" cx="180" cy="112" r="14" />
			<circle class="setup-signal__user-head" cx="180" cy="107" r="3.3" />
			<path class="setup-signal__user-body" d="M173.8 119c1-4.2 3.1-6.2 6.2-6.2s5.2 2 6.2 6.2" />
		</g>
		<g class="setup-signal__node setup-signal__node--two" aria-hidden="true">
			<circle class="setup-signal__node-shell" cx="348" cy="106" r="14" />
			<circle class="setup-signal__user-head" cx="348" cy="101" r="3.3" />
			<path class="setup-signal__user-body" d="M341.8 113c1-4.2 3.1-6.2 6.2-6.2s5.2 2 6.2 6.2" />
		</g>
		<g class="setup-signal__node setup-signal__node--three" aria-hidden="true">
			<circle class="setup-signal__node-shell" cx="372" cy="222" r="14" />
			<circle class="setup-signal__user-head" cx="372" cy="217" r="3.3" />
			<path class="setup-signal__user-body" d="M365.8 229c1-4.2 3.1-6.2 6.2-6.2s5.2 2 6.2 6.2" />
		</g>

		<g class="setup-signal__core" filter={`url(#${routeId}-shadow)`} aria-hidden="true">
			<circle cx="260" cy="160" r="30" />
			<text x="260" y="169">./</text>
		</g>
	</svg>
</div>

<style>
	.setup-signal-wrap {
		display: grid;
		min-height: clamp(12rem, 23vw, 17rem);
		place-items: center;
		overflow: visible;
	}

	.setup-signal {
		display: block;
		width: min(100%, 28rem);
		height: auto;
		color: #1b1b1b;
	}

	.setup-signal__links line {
		stroke: rgba(27, 27, 27, 0.14);
		stroke-linecap: round;
		stroke-width: 2;
	}

	.setup-signal__ring {
		fill: none;
		opacity: 0;
		stroke: #1b1b1b;
		stroke-width: 2;
		transform-box: fill-box;
		transform-origin: center;
		animation: setupSignalPulse 4.2s ease-out infinite;
	}

	.setup-signal__ring--two {
		animation-delay: 1.4s;
	}

	.setup-signal__ring--three {
		animation-delay: 2.8s;
	}

	.setup-signal__node {
		animation: setupNodeGlow 4.2s ease-in-out infinite;
		transform-box: fill-box;
		transform-origin: center;
	}

	.setup-signal__node--two {
		animation-delay: 1.4s;
	}

	.setup-signal__node--three {
		animation-delay: 2.8s;
	}

	.setup-signal__node-shell {
		fill: rgba(237, 237, 237, 0.86);
		stroke: rgba(27, 27, 27, 0.22);
		stroke-width: 1.5;
	}

	.setup-signal__user-head {
		fill: #1b1b1b;
	}

	.setup-signal__user-body {
		fill: none;
		stroke: #1b1b1b;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 2.4;
	}

	.setup-signal__core circle:first-child {
		fill: #1b1b1b;
	}

	.setup-signal__core text {
		fill: #ededed;
		font-size: 22px;
		font-weight: 800;
		letter-spacing: 0;
		line-height: 1;
		text-anchor: middle;
	}

	@media (prefers-reduced-motion: reduce) {
		.setup-signal__ring,
		.setup-signal__node {
			animation: none;
		}
	}

	@keyframes setupSignalPulse {
		0% {
			opacity: 0.2;
			transform: scale(1);
		}

		72%,
		100% {
			opacity: 0;
			transform: scale(2.48);
		}
	}

	@keyframes setupNodeGlow {
		0%,
		14%,
		100% {
			opacity: 0.52;
			transform: scale(1);
		}

		28%,
		46% {
			opacity: 1;
			transform: scale(1.08);
		}
	}
</style>
