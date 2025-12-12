<script>
    import { page } from '$app/stores';
    import { isMenuOpen } from '../store.svelte';
  
    let activePage = '';
  
    $: {
      const p = $page.url.pathname;
      if (p === '/about') activePage = 'about';
      else if (p === '/services') activePage = 'services';
      else if (p === '/portfolio') activePage = 'portfolio';
      else activePage = '';
    }
  
    function handleClick() {
      isMenuOpen.open = !isMenuOpen.open;
      document.body.style.overflow = isMenuOpen.open ? 'hidden' : 'visible';
    }
  
    function handleClose() {
      isMenuOpen.open = false;
      document.body.style.overflow = 'visible';
    }
  </script>
  
  <header id="header">
    <div class="p-5 flex justify-between items-center second-header border-b-3">
      <a href="/" class="">
        <span class="text-4xl md:text-4xl text-accent-two">.</span>
        <span class="text-4xl md:text-4xl text-accent-two">/</span>
      </a>
  
      <ul class="gap-6 hidden md:flex items-center">
        <li>
          <a
            href="/"
            class=" finer text-2xl navlink dot-hover"
            class:active={activePage === ''}
          >Home</a>
        </li>
        <li>
          <a
            href="/portfolio"
            class="finer text-2xl navlink dot-hover"
            class:active={activePage === 'portfolio'}
          >Portfolio</a>
        </li>
        <li>
          <a
            href="/services"
            class=" finer text-2xl navlink dot-hover"
            class:active={activePage === 'services'}
          >Services</a>
        </li>
      </ul>
  
      <button
        class="relative burger md:hidden flex h-10 flex-col justify-around px-2 py-2"
        onclick={handleClick}
        aria-label="mobile nav menu button"
      >
        <div class="flex flex-col items-end gap-[7px]">
            <span class="block lettuce w-8 h-[3px] bg-white"></span>
            <span class="block cheese w-6 h-[3px]  bg-white"></span>
            <span class="block tomato w-4 h-[3px] bg-white"></span>
        </div>
      </button>
    </div>
  </header>
  
  {#if isMenuOpen.open}
    <div
      class="overlay fixed inset-0 bg-black/50 backdrop-blur-lg transition-opacity duration-300"
      role="button"
      tabindex="0"
      onclick={handleClose}
      onkeydown={(e) => (e.key === 'Enter' || (e.key === ' ' && handleClose()))}>
    </div>
  {/if}
  
  <div class={`fixed top-0 right-0 nav-menu h-full w-3/4 p-6 shadow-lg transform transition-transform duration-300 ${isMenuOpen.open ? 'translate-x-0' : 'translate-x-full'}`}>
    <ul class="mt-10 space-y-4">
      <li>
        <a
          href="/"
          class="block text-lg px-3 py-1 dot-hover"
          class:active={activePage === ''}
          onclick={handleClose}
        >Home</a>
      </li>
      <li>
        <a
          href="/services"
          class="block text-lg px-3 py-1 dot-hover"
          class:active={activePage === 'services'}
          onclick={handleClose}
        >Services</a>
      </li>
      <li>
        <a
          href="/portfolio"
          class="block text-lg px-3 py-1 dot-hover"
          class:active={activePage === 'portfolio'}
          onclick={handleClose}
        >Portfolio</a>
      </li>
    </ul>
  </div>
  
  <style>
    .second-header {
      background-color: #1B1B1B;
    }
  
    .navlink { color: #E8E1D8; }
    .navlink { padding: 5px 10px; }
  
    .burger { border-color: #E8E1D8; }
    .lettuce, .cheese, .tomato { background-color: #E8E1D8; }
  

    .dot-hover {
      position: relative;
      display: inline-block;
    }
  

    .dot-hover::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -4px;
      width: 75px;             
      height: 2px;
      background: currentColor;
      transform: translateX(-50%) scaleX(0.1); 
      transform-origin: center;
      border-radius: 2px;
      opacity: 0;
      transition:
        opacity .25s cubic-bezier(.4,0,.2,1),
        transform .25s cubic-bezier(.4,0,.2,1);
    }
  
    .dot-hover:hover::after {
      opacity: 1;
      transform: translateX(-50%) scaleX(0.25);
    }
  
    .dot-hover.active::after {
      opacity: 1;
      transform: translateX(-50%) scaleX(1);
    }
  
    .nav-menu {
      background-color: #1B1B1B;
      z-index: 1000;
      overflow: hidden;
    }
  
    .overlay { z-index: 9; }
    :global(body.menu-open) { overflow: hidden; }
  </style>
  