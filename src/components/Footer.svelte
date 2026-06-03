<script>
	import instaIcon from '$lib/icons/insta_icon.png';
	import mailIcon from '$lib/icons/mail_icon.png';
</script>

<footer>
	<div class="footer border-accent-two darker border-t-3">
		<div class="footer-content">
			<div class="links flex justify-center gap-6">
				<div class="link border-accent-one h-10 w-10 rounded-full border-2">
					<a href="https://www.instagram.com/developmen_tal">
						<img src={instaIcon} alt="instagram icon" />
					</a>
				</div>

				<div class="flex flex-col justify-center">
					<span class="text-accent-two text-4xl"> / </span>
				</div>
				<div class="link border-accent-one h-10 w-10 rounded-full border-2">
					<a
						href="https://www.facebook.com/profile.php?id=61586867661440"
						target="_blank"
						rel="noopener"
						aria-label="Facebook"
					>
						<svg class="facebook-icon" viewBox="0 0 100 100" aria-hidden="true">
							<circle cx="50" cy="50" r="45" />
							<path
								d="M59 31h8V20h-9c-11 0-18 7-18 18v8H30v12h10v22h13V58h11l2-12H53v-7c0-5 2-8 6-8Z"
							/>
						</svg>
					</a>
				</div>
				<div class="flex flex-col justify-center">
					<span class="text-accent-two text-4xl"> / </span>
				</div>
				<div class="link border-accent-one h-10 w-10 rounded-full border-2">
					<a href="mailto:talon@developmental.pro">
						<img src={mailIcon} alt="mail icon" />
					</a>
				</div>
			</div>
			<div class="footer-contact">
				<a href="mailto:talon@developmental.pro">
					<svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M4 6.5h16v11H4z" />
						<path d="m4.5 7 7.5 6 7.5-6" />
					</svg>
					<span>talon@developmental.pro</span>
				</a>
				<span class="contact-divider" aria-hidden="true"></span>
				<a href="tel:+447306123054">
					<svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M7.5 4.5 10 7.4l-1.7 2.1c1 2.1 2.7 3.8 4.8 4.8l2.1-1.7 2.9 2.5-.8 3.2c-.2.7-.8 1.2-1.6 1.2C9.4 19.5 4.5 14.6 4.5 8.3c0-.8.5-1.4 1.2-1.6l1.8-.4Z"
						/>
					</svg>
					<span>+44 7306 123054</span>
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		height: fit-content;
		padding: 2.75rem 2rem;
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
	}

	.link a {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	.facebook-icon {
		width: 100%;
		height: 100%;
	}

	.facebook-icon circle {
		fill: #dee2a6;
	}

	.facebook-icon path {
		fill: #1b1b1b;
	}

	.footer-contact {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.5rem 0.65rem;
		color: #e8e1d8;
		font-size: 0.95rem;
		line-height: 1.4;
	}

	.footer-contact a {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		color: inherit;
		text-decoration: none;
	}

	.footer-contact a:hover {
		color: #dee2a6;
	}

	.contact-icon {
		width: 0.95rem;
		height: 0.95rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.9;
		stroke-linecap: round;
		stroke-linejoin: round;
		flex: 0 0 auto;
	}

	.contact-divider {
		width: 4px;
		height: 4px;
		border-radius: 999px;
		background: #e8e1d8;
		flex: 0 0 auto;
	}
</style>
