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

    <!-- desktop nav -->
    <ul class="gap-6 hidden md:flex items-center">
      <li>
        <a href="/" class="finer text-2xl navlink dot-hover" class:active={activePage === ''}>Home</a>
      </li>
      <li>
        <a href="/portfolio" class="finer text-2xl navlink dot-hover" class:active={activePage === 'portfolio'}>Portfolio</a>
      </li>
      <li>
        <a href="/services" class="finer text-2xl navlink dot-hover" class:active={activePage === 'services'}>Services</a>
      </li>
    </ul>

    <!-- burger -->
    <button
      class="relative burger md:hidden flex h-10 flex-col justify-around px-2 py-2"
      onclick={handleClick}
      aria-label="mobile nav menu button"
    >
      <div class="flex flex-col items-end gap-[7px]">
        <span class="block lettuce w-8 h-[3px] bg-white"></span>
        <span class="block cheese w-6 h-[3px] bg-white"></span>
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
    onkeydown={(e) => (e.key === 'Enter' || (e.key === ' ' && handleClose()))}
  />
{/if}

<div
  class={`fixed top-0 right-0 nav-menu h-full w-3/4 p-6 shadow-lg transform transition-transform duration-300 ${
    isMenuOpen.open ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <!-- header -->
  <div class="menu-head">
    <h1 class="menu-title">./menu</h1>
    <div class="menu-rule"></div>
  </div>

  <!-- links -->
  <ul class="menu-links">
    <li>
      <a
        href="/"
        class="menu-link menu-dot"
        class:active={activePage === ''}
        onclick={handleClose}
      >Home</a>
    </li>

    <li>
      <a
        href="/services"
        class="menu-link menu-dot"
        class:active={activePage === 'services'}
        onclick={handleClose}
      >Services</a>
    </li>

    <li>
      <a
        href="/portfolio"
        class="menu-link menu-dot"
        class:active={activePage === 'portfolio'}
        onclick={handleClose}
      >Portfolio</a>
    </li>

    <li class="menu-cta-row">
      <a class="menu-cta" href="mailto:talon@developmental.pro" onclick={handleClose}>
        <span>Get In Touch</span>
        <span class="cta-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 7.5v9a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 16.5v-9A2.25 2.25 0 0 1 4.5 5.25h15A2.25 2.25 0 0 1 21.75 7.5Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="m3 7 9 6 9-6" />
          </svg>
        </span>
      </a>
    </li>
  </ul>

  <!-- footer pinned to bottom -->
  <div class="menu-footer">
    <div class="footer-rule"></div>

    <div class="social-row">
      <a class="social-btn" href="https://instagram.com/developmen_tal" target="_blank" rel="noreferrer" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75h9A3.75 3.75 0 0 1 20.25 7.5v9A3.75 3.75 0 0 1 16.5 20.25h-9A3.75 3.75 0 0 1 3.75 16.5v-9A3.75 3.75 0 0 1 7.5 3.75Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75A3.75 3.75 0 1 0 12 8.25a3.75 3.75 0 0 0 0 7.5Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75h.008v.008h-.008V6.75Z" />
        </svg>
      </a>

      <a class="social-btn" href="https://github.com/taloncodes" target="_blank" rel="noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .5C5.73.5.75 5.66.75 12.05c0 5.13 3.29 9.48 7.86 11.02.58.11.79-.26.79-.57v-2.1c-3.2.71-3.87-1.6-3.87-1.6-.52-1.36-1.28-1.72-1.28-1.72-1.05-.74.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.8 2.7 1.28 3.36.98.1-.77.4-1.28.72-1.58-2.55-.3-5.23-1.31-5.23-5.84 0-1.29.45-2.35 1.18-3.18-.12-.3-.52-1.52.11-3.16 0 0 .97-.32 3.18 1.21a10.7 10.7 0 0 1 2.9-.4c.98 0 1.97.14 2.9.4 2.21-1.53 3.18-1.21 3.18-1.21.63 1.64.23 2.86.11 3.16.73.83 1.18 1.89 1.18 3.18 0 4.54-2.69 5.54-5.25 5.83.41.36.78 1.09.78 2.2v3.26c0 .32.21.69.8.57 4.56-1.54 7.85-5.9 7.85-11.02C23.25 5.66 18.27.5 12 .5Z"
          />
        </svg>
      </a>
    </div>

    <a class="email-link" href="mailto:talon@developmental.pro">talon@developmental.pro</a>
  </div>
</div>

<style>
  .second-header { background-color: #1B1B1B; }

  .navlink { color: #E8E1D8; padding: 5px 10px; }

  .burger { border-color: #E8E1D8; }
  .lettuce, .cheese, .tomato { background-color: #E8E1D8; }

  /* desktop underline (unchanged) */
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
    color: #D9D2C8;
    z-index: 1000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .overlay { z-index: 999; }
  :global(body.menu-open) { overflow: hidden; }

  /* tidy layout */
  .menu-head { padding-top: 14px; }

  .menu-title {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #E8E1D8;
    margin: 0;
    line-height: 1;
  }

  /* full width ignoring p-6 */
  .menu-rule {
    height: 2.5px;
    background: #D9D2C8;
    width: calc(100% + 48px);
    margin-left: -24px;
    margin-top: 20px;
    border-radius: 2px;
  }

  .menu-links {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .menu-link {
    display: inline-block;
    font-size: 22px;
    padding: 6px 12px 6px 28px; /* left space for bullet */
    color: #D9D2C8;
    text-decoration: none;
    position: relative;
  }

  /* ============================================================
     MOBILE MENU: bullet indicator (hover + active)
     ============================================================ */
  .menu-dot::before {
    content: "•";
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%) scale(0.85);
    color: #EDEDED;
    opacity: 0;
    transition: opacity .2s ease, transform .2s ease;
  }

  .menu-dot:hover::before,
  .menu-dot.active::before {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }

  .menu-cta-row { margin-top: 10px; }

  .menu-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 14px;
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.15);
    color: #EDEDED;
    background: rgba(255,255,255,0.06);
    text-decoration: none;
    width: 100%;
    max-width: 280px;
    margin-left: 12px;
    transition: transform .2s ease, border-color .2s ease, background-color .2s ease;
  }

  .menu-cta:hover {
    transform: scale(1.02);
    border-color: rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.10);
  }

  .cta-icon { width: 18px; height: 18px; display: inline-flex; }
  .cta-icon svg { width: 18px; height: 18px; }

  .menu-footer {
    margin-top: auto;
    padding-top: 18px;
    padding-bottom: 6px;
  }

  .footer-rule {
    height: 1px;
    background: rgba(255,255,255,0.12);
    width: 100%;
    border-radius: 2px;
    margin-bottom: 14px;
  }

  .social-row {
    display: flex;
    gap: 10px;
    padding-left: 12px;
    margin-bottom: 12px;
  }

  .social-btn {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,0.14);
    color: rgba(255,255,255,0.85);
    background: rgba(255,255,255,0.05);
    text-decoration: none;
    transition: transform .2s ease, border-color .2s ease, background-color .2s ease;
  }

  .social-btn:hover {
    transform: scale(1.03);
    border-color: rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.08);
  }

  .social-btn svg { width: 20px; height: 20px; }

  .email-link {
    display: block;
    padding-left: 12px;
    font-size: 14px;
    color: rgba(255,255,255,0.65);
    text-decoration: none;
  }

  .email-link:hover { color: rgba(255,255,255,0.9); }
</style>
