<script>
    let { visible = $bindable(false), ...props } = $props();
  
    const submitForm = () => {
      console.log('Form submitted!');
    };
  </script>


<section>

    <div class="modal" class:show={visible}>
        <div class="modal-content">
          <button class="close-btn" on:click={() => visible = false}>X</button>
          <h2>Web Development Enquiry</h2>
          <form on:submit|preventDefault={submitForm}>
            <label for="name">Name:</label>
            <input id="name" type="text" placeholder="Your name" required />
      
            <label for="email">Email:</label>
            <input id="email" type="email" placeholder="Your email" required />
      
            <label for="message">Message:</label>
            <textarea id="message" placeholder="Your message" required></textarea>
      
            <button type="submit">Submit</button>
          </form>
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
    }
  
    .modal.show {
      display: flex; /* Show modal when `visible` is true */
    }
  
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .close-btn {
      background: none;
      border: none;
      font-size: 20px;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  
    label {
      font-weight: bold;
    }
  
    input, textarea {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    button {
      background-color: #0078ff;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #005ecb;
    }
  </style>