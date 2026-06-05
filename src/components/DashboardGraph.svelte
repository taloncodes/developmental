<script>
	let { gradientId = 'dashboard-wave-fill', label = 'Dashboard' } = $props();
</script>

<div class="dashboard-graph-wrap">
	<svg
		class="dashboard-graph"
		viewBox="0 0 520 320"
		role="img"
		aria-label="Animated dashboard graph"
	>
		<defs>
			<linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
				<stop offset="0%" stop-color="#1b1b1b" stop-opacity="0.36" />
				<stop offset="58%" stop-color="#8d887f" stop-opacity="0.16" />
				<stop offset="100%" stop-color="#e8e1d8" stop-opacity="0.02" />
			</linearGradient>
		</defs>

		<rect class="dashboard-graph__card" x="16" y="18" width="488" height="284" rx="8" />
		<text class="dashboard-graph__label" x="36" y="50">{label}</text>
		<text class="dashboard-graph__menu" x="462" y="48">...</text>

		<g class="dashboard-graph__guides" aria-hidden="true">
			<line x1="132" x2="132" y1="126" y2="278" />
			<line x1="196" x2="196" y1="98" y2="278" />
			<line x1="310" x2="310" y1="140" y2="278" />
			<line x1="424" x2="424" y1="132" y2="278" />
			<line class="dashboard-graph__baseline" x1="54" x2="466" y1="278" y2="278" />
		</g>

		<path
			class="dashboard-graph__area"
			style={`fill: url(#${gradientId})`}
			d="M58 206 C82 206 102 206 126 206 C150 206 170 206 194 206 C218 206 238 206 262 206 C286 206 306 206 330 206 C354 206 374 206 398 206 C420 206 440 206 462 206 L462 278 L58 278 Z"
		>
			<animate
				class="dashboard-graph__morph"
				attributeName="d"
				dur="6s"
				repeatCount="indefinite"
				values="M58 206 C82 206 102 206 126 206 C150 206 170 206 194 206 C218 206 238 206 262 206 C286 206 306 206 330 206 C354 206 374 206 398 206 C420 206 440 206 462 206 L462 278 L58 278 Z; M58 206 C84 204 102 188 126 178 C150 166 170 138 194 126 C218 116 238 162 262 176 C286 190 306 202 330 202 C354 202 374 198 398 198 C420 198 442 184 462 176 L462 278 L58 278 Z; M58 196 C82 198 102 202 126 204 C150 206 170 190 194 184 C218 178 238 140 262 128 C286 116 306 162 330 174 C354 186 374 210 398 210 C420 210 440 202 462 196 L462 278 L58 278 Z; M58 206 C82 204 102 200 126 198 C150 196 170 204 194 206 C218 208 238 194 262 188 C286 180 306 148 330 138 C354 128 374 164 398 170 C420 176 442 134 462 120 L462 278 L58 278 Z; M58 206 C82 206 102 206 126 206 C150 206 170 206 194 206 C218 206 238 206 262 206 C286 206 306 206 330 206 C354 206 374 206 398 206 C420 206 440 206 462 206 L462 278 L58 278 Z"
			/>
		</path>
		<path
			class="dashboard-graph__line"
			d="M58 206 C82 206 102 206 126 206 C150 206 170 206 194 206 C218 206 238 206 262 206 C286 206 306 206 330 206 C354 206 374 206 398 206 C420 206 440 206 462 206"
		>
			<animate
				class="dashboard-graph__morph"
				attributeName="d"
				dur="6s"
				repeatCount="indefinite"
				values="M58 206 C82 206 102 206 126 206 C150 206 170 206 194 206 C218 206 238 206 262 206 C286 206 306 206 330 206 C354 206 374 206 398 206 C420 206 440 206 462 206; M58 206 C84 204 102 188 126 178 C150 166 170 138 194 126 C218 116 238 162 262 176 C286 190 306 202 330 202 C354 202 374 198 398 198 C420 198 442 184 462 176; M58 196 C82 198 102 202 126 204 C150 206 170 190 194 184 C218 178 238 140 262 128 C286 116 306 162 330 174 C354 186 374 210 398 210 C420 210 440 202 462 196; M58 206 C82 204 102 200 126 198 C150 196 170 204 194 206 C218 208 238 194 262 188 C286 180 306 148 330 138 C354 128 374 164 398 170 C420 176 442 134 462 120; M58 206 C82 206 102 206 126 206 C150 206 170 206 194 206 C218 206 238 206 262 206 C286 206 306 206 330 206 C354 206 374 206 398 206 C420 206 440 206 462 206"
			/>
		</path>
	</svg>
</div>

<style>
	.dashboard-graph-wrap {
		display: grid;
		min-height: clamp(12rem, 23vw, 17rem);
		place-items: center;
		overflow: visible;
	}

	.dashboard-graph {
		display: block;
		width: min(100%, 28rem);
		height: auto;
		color: #1b1b1b;
		filter: drop-shadow(0 16px 24px rgba(27, 27, 27, 0.08));
	}

	.dashboard-graph__card {
		fill: rgba(237, 237, 237, 0.62);
		stroke: rgba(27, 27, 27, 0.16);
		stroke-width: 2;
	}

	.dashboard-graph__label {
		fill: rgba(27, 27, 27, 0.66);
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0;
	}

	.dashboard-graph__menu {
		fill: #1b1b1b;
		opacity: 0.82;
		font-size: 22px;
		font-weight: 900;
		letter-spacing: 4px;
	}

	.dashboard-graph__guides line {
		stroke: rgba(27, 27, 27, 0.12);
		stroke-dasharray: 7 7;
		stroke-linecap: round;
		stroke-width: 2;
	}

	.dashboard-graph__guides .dashboard-graph__baseline {
		stroke: rgba(27, 27, 27, 0.16);
		stroke-dasharray: none;
	}

	.dashboard-graph__line {
		fill: none;
		stroke: #1b1b1b;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 4;
	}

	@media (prefers-reduced-motion: reduce) {
		.dashboard-graph__morph {
			display: none;
		}
	}
</style>
