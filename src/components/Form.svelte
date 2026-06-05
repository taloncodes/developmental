<script>
	import { eventNames, trackConversion } from '$lib/conversionTracking';

	let { visible = $bindable(false), ...props } = $props();
	let success = $state(false);

	function closeForm() {
		visible = false;
		success = false;
		document.querySelector('body').style.overflow = '';
	}

	function handleInput(event) {
		const input = event.target;

		if (input.id === 'phone') {
			input.value = input.value.replace(/[^\d+]/g, '');
		}

		if (input.value) {
			input.classList.add('filled');
		} else {
			input.classList.remove('filled');
		}
	}

	let fname = $state('');
	let lname = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = { fname, lname, email, phone, message };
		console.log('Form data being sent: ', formData);
		const rest = await fetch('/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		const response = await rest.json();

		if (rest.ok) {
			trackConversion(eventNames.contactFormSubmit, {
				form_name: 'contact_enquiry'
			});
			success = true;
		} else {
			alert('Form submission failed. Please wait a moment and try again');
		}
	};
</script>

<section>
	{#if visible}
		<div class="modal show">
			<div class="modal-content mbg-blue">
				{#if success}
					<div class="success" class:show={success}>
						<h2 class="text-primary m-auto mb-6 text-center text-2xl">Thank you!</h2>
						<p class="text-accent-one text-center">
							Your enquiry has been received. I will aim to get back to you within 48 hours.
						</p>
						<button class="text-accent-one mx-auto mt-6 block rounded-xl" onclick={closeForm}
							>Close</button
						>
					</div>
				{:else}
					<div class="formWrapper">
						<button class="close-btn" onclick={closeForm} aria-label="Close">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.75"
								stroke="currentColor"
								class="h-5 w-5"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						<h2 class="m-auto mb-8 flex items-center justify-center gap-2 text-center text-3xl">
							<span class="text-primary font-bold">./enquiry</span>
						</h2>

						<form onsubmit={handleSubmit}>
							<div class="form-group">
								<input
									id="fname"
									type="text"
									class="form-input rounded-xl"
									placeholder=" "
									required
									oninput={handleInput}
									bind:value={fname}
								/>
								<label for="fname" class="form-label">First Name</label>
							</div>

							<div class="form-group">
								<input
									id="lname"
									type="text"
									class="form-input rounded-xl"
									placeholder=" "
									required
									oninput={handleInput}
									bind:value={lname}
								/>
								<label for="lname" class="form-label">Last Name</label>
							</div>

							<div class="form-group">
								<input
									id="email"
									type="email"
									class="form-input rounded-xl"
									placeholder=" "
									required
									oninput={handleInput}
									bind:value={email}
								/>
								<label for="email" class="form-label">Email</label>
							</div>

							<div class="form-group">
								<input
									id="phone"
									type="tel"
									class="form-input rounded-xl"
									placeholder=" "
									required
									oninput={handleInput}
									bind:value={phone}
								/>
								<label for="phone" class="form-label">Phone Number</label>
							</div>

							<div class="form-group">
								<textarea
									id="message"
									class="form-input rounded-xl"
									placeholder=" "
									required
									oninput={handleInput}
									bind:value={message}
								></textarea>
								<label for="message" class="form-label">Message</label>
							</div>

							<button
								class="submitBt flex items-center justify-center gap-2 rounded-xl md:gap-3"
								type="submit"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.75"
									stroke="currentColor"
									class="relative top-[1px] h-5 w-5 md:h-6 md:w-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0-9.75 6.75L2.25 6.75"
									/>
								</svg>

								<span>Submit</span></button
							>
						</form>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</section>

<style>
	.modal {
		display: none; /* Initially hidden */
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
		justify-content: center;
		align-items: center;
		z-index: 1000;
		backdrop-filter: blur(10px); /* Blur effect */
		-webkit-backdrop-filter: blur(10px); /* Safari support */
	}

	.modal.show {
		display: flex; /* Show modal when `visible` is true */
	}

	.modal-content {
		position: relative;
		padding: 30px;
		border-radius: 8px;
		width: 90%;
		max-width: 500px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border: solid #1b1b1b 2px;
	}

	.close-btn {
		position: absolute;
		top: 12px;
		right: 12px;
		background: transparent;
		border: none;
		padding: 6px;
		cursor: pointer;
		color: #1b1b1b;
		border-radius: 6px;
		transition:
			background-color 0.2s ease,
			transform 0.2s ease;
	}

	.close-btn:hover {
		background-color: rgba(0, 0, 0, 0.06);
		transform: scale(1.05);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.form-group {
		position: relative;
	}

	.form-input {
		width: 100%;
		padding: 8px;
		border: 2px solid #1b1b1b;
		background-color: #ededed;
		font-size: 16px;
		padding-top: 8px;
		padding-bottom: 8px;
	}

	.form-label {
		position: absolute;
		left: 12px;
		top: 10px;
		font-size: 16px;
		color: #1b1b1b;
		transition: all 0.25s ease-in-out;
		pointer-events: none;
	}

	/* When input has focus or has text (is filled) */
	.form-input:focus ~ .form-label,
	.form-input:not(:placeholder-shown) ~ .form-label {
		top: -25px;
		left: 8px;
		font-size: 12px;
		color: #1b1b1b;
	}

	.form-input:valid {
		border-color: #69c647;
	}

	button {
		background-color: #1b1b1b;
		padding: 10px;
		border: none;
		cursor: pointer;

		color: #ededed;
	}

	.close-btn:hover {
		transition: ease 0.25s;
		transform: scale(1.05);
	}

	.submitBt:hover {
		transition: ease 0.25s;
		transform: scale(1.05);
	}

	textarea.form-input {
		min-height: 120px;
		resize: vertical;
	}

	.success {
		display: none;
	}

	.success.show {
		display: block;
	}
</style>
