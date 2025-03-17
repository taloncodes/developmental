<script>
  let { visible = $bindable(false), ...props } = $props();
  let success = $state(false);

  function closeForm(){
    visible = false;
    document.querySelector('body').style.overflow = '';
  }

  
  // Track input values and update filled state
  function handleInput(event) {
    const input = event.target;
    if (input.value) {
      input.classList.add('filled');
    } else {
      input.classList.remove('filled');
    }
  }

  let fname = '';
  let lname = '';
  let email = '';
  let phone = '';
  let message = '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { fname, lname, email, phone, message };
    console.log('Form data being sent: ', formData);
    const rest = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const response = await rest.json();

    if (rest.ok) {
      success = true;
      document.querySelector('.formWrapper').style.display = 'none';
    
    } else {
      alert("Form submission failed. Please wait a moment and try again");
    }   
  };
    
</script>

<section>
  <div class="modal" class:show={visible}>
    
    <div class="modal-content mbg-blue">

      <div class="success" class:show={success}>
        <h2 class="m-auto mb-6 text-center text-2xl text-primary">Thank you!</h2>
        <p class="text-center text-accent-one">Your enquiry has been received. We will aim to get back to you within 48 hours.</p>
        <button class="text-accent-one block mx-auto mt-6" on:click={closeForm}>Close</button>
      </div>

      <div class="formWrapper">

      <button class="close-btn" on:click={closeForm}>X</button>
      <h2 class="m-auto mb-8 text-center text-2xl"><span class="text-primary">Enquire with</span>
        <span class="text-accent-two">.</span><span class="text-primary">developmen</span><span class="text-accent-two">/</span><span class="text-accent-one">tal</span>
      </h2>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <input
            id="fname"
            type="text"
            class="form-input"
            placeholder=" "
            required
            on:input={handleInput}
            bind:value={fname}
          />
          <label for="fname" class="form-label">First Name</label>
        </div>

        <div class="form-group">
          <input
            id="lname"
            type="text"
            class="form-input"
            placeholder=" "
            required
            on:input={handleInput}
            bind:value={lname}
          />
          <label for="lname" class="form-label">Last Name</label>
        </div>

        <div class="form-group">
          <input
            id="email"
            type="email"
            class="form-input"
            placeholder=" "
            required
            on:input={handleInput}
            bind:value={email}
          />
          <label for="email" class="form-label">Email</label>
        </div>

        <div class="form-group">
          <input
            id="phone"
            type="tel"
            class="form-input"
            placeholder=" "
            required
            on:input={handleInput}
            bind:value={phone}
          />
          <label for="phone" class="form-label">Phone Number</label>
        </div>

        <div class="form-group">
          <textarea
            id="message"
            class="form-input"
            placeholder=" "
            required
            on:input={handleInput}
            bind:value={message}
          ></textarea>
          <label for="message" class="form-label">Message</label>
        </div>

        <button class="submitBtn" type="submit">Submit</button>
      </form>

    </div>
    </div>
  </div>
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
    border: solid #b17a85 2px;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background-color: #DEE2A6;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    border: solid #DEE2A6 2px;
    color: #11121b;
    padding: 3px 5px;
    
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #DEE2A6;
  }

  .form-group {
    position: relative;
  }

  .form-input {
    width: 100%;
    padding: 8px;
    border: 2px solid #b17a85;
    border-radius: 4px;
    background-color: #11121b;
    font-size: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .form-label {
    position: absolute;
    left: 12px;
    top: 12px;
    font-size: 16px;
    color: #b17a85;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }

  /* When input has focus or has text (is filled) */
  .form-input:focus ~ .form-label,
  .form-input.filled ~ .form-label,
  .form-input:not(:placeholder-shown) ~ .form-label {
    top: -25px;
    left: 8px;
    font-size: 12px;
    color: #b17a85;
  }

  .form-input:valid ~ .form-label{
    color: #DEE2A6;
  }

  .form-input:valid{
    border-color: #DEE2A6
  }

  button {
    background-color: #DEE2A6;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    border: solid #DEE2A6 2px;
    color: #11121b;
  }

  .close-btn:hover{
    border: #b17a85 solid 2px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #11121b;
    color: #DEE2A6;
  }

  .submitBtn:hover {
    border: #b17a85 solid 2px;
    border-radius: 15px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #11121b;
    color: #DEE2A6;
  }

  textarea.form-input {
  min-height: 120px;
  resize: vertical;
}

.success{
  display: none;
}

.success.show {
    display: block;
  }
</style>