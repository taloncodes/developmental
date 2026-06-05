<script>
	import { fadeOnScroll } from '$lib/fadeOnScroll';
	import ThreeCoin from './ThreeCoin.svelte';
</script>

<footer class="site-footer">
	<div class="footer-inner fade-on-scroll" use:fadeOnScroll>
		<div class="footer-brand fade-on-scroll" use:fadeOnScroll>
			<a href="/" class="footer-logo" aria-label="Developmental home">
				<ThreeCoin colourway="flipped" size="footer" showShadow={false} />
			</a>
			<p>Quality web solutions, tailored to you.</p>
		</div>

		<nav class="footer-group fade-on-scroll" aria-label="Footer sitemap" use:fadeOnScroll>
			<h2>Sitemap</h2>
			<a href="/">Home</a>
			<a href="/portfolio">Portfolio</a>
			<a href="/services">Services</a>
		</nav>

		<div class="footer-group fade-on-scroll" use:fadeOnScroll>
			<h2>Contact</h2>
			<a href="mailto:talon@developmental.pro">
				<svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M4 6.5h16v11H4z" />
					<path d="m4.5 7 7.5 6 7.5-6" />
				</svg>
				<span>talon@developmental.pro</span>
			</a>
			<a href="tel:+447306123054">
				<svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M7.5 4.5 10 7.4l-1.7 2.1c1 2.1 2.7 3.8 4.8 4.8l2.1-1.7 2.9 2.5-.8 3.2c-.2.7-.8 1.2-1.6 1.2C9.4 19.5 4.5 14.6 4.5 8.3c0-.8.5-1.4 1.2-1.6l1.8-.4Z"
					/>
				</svg>
				<span>+44 7306 123054</span>
			</a>
		</div>

		<div class="footer-social fade-on-scroll" use:fadeOnScroll>
			<h2>Social</h2>
			<div class="social-links">
				<a href="https://www.instagram.com/developmen_tal" aria-label="Instagram">
					<svg class="social-icon" viewBox="0 0 100 100" aria-hidden="true">
						<circle cx="50" cy="50" r="49" />
						<rect x="28" y="28" width="44" height="44" rx="13" />
						<circle cx="50" cy="50" r="12" />
						<circle cx="64" cy="36" r="4.5" />
					</svg>
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=61586867661440"
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<svg class="social-icon facebook-icon" viewBox="0 0 100 100" aria-hidden="true">
						<circle cx="50" cy="50" r="49" />
						<path
							d="M59 31h8V20h-9c-11 0-18 7-18 18v8H30v12h10v22h13V58h11l2-12H53v-7c0-5 2-8 6-8Z"
						/>
					</svg>
				</a>
				<a href="mailto:talon@developmental.pro" aria-label="Email">
					<svg class="social-icon" viewBox="0 0 100 100" aria-hidden="true">
						<circle cx="50" cy="50" r="49" />
						<rect x="24" y="32" width="52" height="38" rx="4" />
						<path d="M28 36 50 54 72 36" />
					</svg>
				</a>
			</div>
		</div>
	</div>

	<div class="footer-bottom fade-on-scroll" use:fadeOnScroll>
		<span>© 2026 Developmental</span>
		<span>Built by Talon</span>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 3px solid #ededed;
		background: #1b1b1b;
		color: #e8e1d8;
	}

	.footer-inner {
		display: grid;
		grid-template-columns:
			minmax(12rem, 1.1fr) minmax(7rem, 0.65fr) minmax(16rem, 1.1fr)
			minmax(10rem, 0.8fr);
		gap: clamp(1.5rem, 4vw, 3rem);
		width: min(100%, 1200px);
		margin: 0 auto;
		padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 5rem);
	}

	.footer-brand {
		display: flex;
		align-items: center;
		gap: clamp(0.8rem, 2vw, 1.1rem);
		min-width: 0;
	}

	.footer-logo {
		display: grid;
		flex: 0 0 auto;
		width: 3.2rem;
		aspect-ratio: 1;
		place-items: center;
		text-decoration: none;
	}

	.footer-brand p {
		max-width: 18rem;
		margin: 0;
		color: rgba(232, 225, 216, 0.74);
		line-height: 1.55;
	}

	.footer-group,
	.footer-social {
		display: grid;
		align-content: start;
		gap: 0.75rem;
		min-width: 0;
	}

	h2 {
		color: #e8e1d8;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		line-height: 1;
		text-transform: uppercase;
	}

	a {
		color: rgba(232, 225, 216, 0.78);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	a:hover {
		color: #dee2a6;
	}

	.footer-group a {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		width: fit-content;
		max-width: 100%;
		line-height: 1.4;
	}

	.footer-group a span {
		min-width: 0;
		overflow-wrap: anywhere;
	}

	.contact-icon {
		width: 1rem;
		height: 1rem;
		flex: 0 0 auto;
		fill: none;
		stroke: currentColor;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 1.8;
	}

	.social-links {
		display: flex;
		gap: 0.8rem;
	}

	.social-links a {
		display: grid;
		place-items: center;
		width: 2.6rem;
		aspect-ratio: 1;
		border-radius: 50%;
		overflow: hidden;
	}

	.social-icon {
		display: block;
		width: 100%;
		height: 100%;
	}

	.social-icon circle {
		fill: #dee2a6;
	}

	.social-icon rect,
	.social-icon path,
	.social-icon circle:not(:first-child) {
		fill: none;
		stroke: #1b1b1b;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 5;
	}

	.facebook-icon path {
		fill: #1b1b1b;
		stroke: none;
	}

	.footer-bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.75rem;
		width: min(100%, 1200px);
		margin: 0 auto;
		padding: 1rem clamp(1.5rem, 5vw, 5rem) 1.25rem;
		border-top: 1px solid rgba(232, 225, 216, 0.18);
		color: rgba(232, 225, 216, 0.58);
		font-size: 0.9rem;
	}

	@media (max-width: 1040px) {
		.footer-inner {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.footer-brand {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 560px) {
		.footer-inner {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.footer-brand {
			align-items: flex-start;
		}

		.footer-logo {
			width: 3rem;
		}

		.footer-brand p {
			max-width: 15rem;
			line-height: 1.45;
		}

		.footer-bottom {
			flex-direction: column;
		}
	}
</style>
