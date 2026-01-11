<script>
  import { page } from '$app/stores';
  import { isMenuOpen } from '../store.svelte';
  import instaIcon from '$lib/icons/insta_icon.png';
  import githhubIcon from '$lib/icons/github_icon.png';
  import mailIcon from '$lib/icons/mail_icon.png';

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

  
     
  <div class="p-5 flex justify-between items-center second-header border-b-3 h-[84px]">
    
    <a href="/" class="">
      <div class="relative">
      <div class="fixed top-4 left-4 z-[999]
       flex h-12 w-12 items-center justify-center
       rounded-full bg-[#1b1b1b]/25 backdrop-blur border-1 border-[#1b1b1b]">
      <span class="text-4xl md:text-4xl text-accent-two">.</span>
      <span class="text-4xl md:text-4xl text-accent-two">/</span>
          </div>
      </div>
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
     <div class="md:hidden fixed top-4 right-4 z-[999]
       flex h-12 w-16 items-center justify-center
       rounded-full bg-[#1b1b1b]/25 backdrop-blur border-1 border-[#1b1b1b]">
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
      >home</a>
    </li>

    <li>
      <a
        href="/services"
        class="menu-link menu-dot"
        class:active={activePage === 'services'}
        onclick={handleClose}
      >services</a>
    </li>

    <li>
      <a
        href="/portfolio"
        class="menu-link menu-dot"
        class:active={activePage === 'portfolio'}
        onclick={handleClose}
      >portfolio</a>
    </li>
  </ul>

  <!-- footer pinned to bottom -->
  <div class="menu-footer">
    <div class="footer-rule"></div>

    <div class="links flex gap-6 justify-center">
            <div class="link border-accent-one border-2 rounded-full h-10 w-10">
                <a href="https://www.instagram.com/developmen_tal">
                    <img src={instaIcon} alt="instagram icon">
                </a>
            </div>

            <div class="flex flex-col justify-center">
                <span class="text-accent-two text-4xl">
                    /
                </span>
            </div>
            <div class="link border-accent-one border-2 rounded-full h-10 w-10">
                <a href="https://www.github.com/taloncodes">
                    <img src={githhubIcon} alt="github icon">
                </a>
            </div>
            <div class="flex flex-col justify-center">
                <span class="text-accent-two text-4xl">
                    /
                </span>
            </div>
            <div class="link border-accent-one border-2 rounded-full h-10 w-10">
                <a href="mailto:talon@developmental.pro">
                    <img src={mailIcon} alt="mail icon">
                </a>
            </div>
        </div>
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
    font-size: 30px;
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
    padding: 6px 12px 6px 12px; /* left space for bullet */
    color: #D9D2C8;
    text-decoration: none;
    position: relative;
  }

  /* ============================================================
     MOBILE MENU: bullet indicator (hover + active)
     ============================================================ */
  .menu-dot::before {
    content: "/";
    font-weight: bold;
    position: absolute;
    left: 0;
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
