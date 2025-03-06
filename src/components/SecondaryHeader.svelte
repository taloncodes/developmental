<script>
    	import { page } from '$app/stores';
        let activePage;


        let isMenuOpen = false;



        $: {
            if ($page.url.pathname === '/about') {
            activePage = 'about';
            } else if ($page.url.pathname === '/services') {
            activePage = 'services';
            } else if ($page.url.pathname === '/portfolio') {
            activePage = 'portfolio';
            } else {
            activePage = '';
            }
        }

</script>

<header>
    <div class="p-5 flex justify-between items-center second-header border-b-3 md:border-b-0">
        <a href="/" class="">
            <span class="text-3xl md:text-5xl text-accent-two">./</span>
            <span class="text-3xl md:text-5xl text-accent-one">tal</span>
        </a>
        <ul class="gap-6 hidden md:flex">
            <span class="text-2xl navlink">
                <a class:active={activePage === 'about'} href="/about">
                    about
                </a>
            </span>
            <span class="text-2xl navlink">
                <a class:active={activePage === 'portfolio'} href="/portfolio">
                    portfolio
                </a>
            </span>
            <span class="text-2xl navlink">
                <a class:active={activePage === 'services'} href="/services">
                    services
                </a>
            </span>
        </ul>

        <button class="relative burger md:hidden flex h-10 flex-col justify-around px-2 py-2 border-2 rounded-[10px] rounded-tl-none rounded-br-none" on:click={() => isMenuOpen = !isMenuOpen}>
            <span class="block lettuce w-6 h-[2px] bg-white"></span>
            <span class="block cheese w-6 h-[2px] bg-white"></span>
            <span class="block tomato w-6 h-[2px] bg-white"></span>
          </button>
    </div>
</header>

{#if isMenuOpen}
  <div 
    class="overlay fixed inset-0 bg-black/50 backdrop-blur-lg transition-opacity duration-300"
    on:click={() => isMenuOpen = false}
  ></div>
{/if}

<div class={`fixed top-0 right-0 nav-menu h-full w-3/4 p-6 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
  <ul class="mt-10 space-y-4">
    <li><a href="/about" class:active={activePage === 'about'} class="block text-lg px-3 py-1" on:click={() => isMenuOpen = false}>about</a></li>
    <li><a href="/services" class:active={activePage === 'services'} class="block text-lg px-3 py-1" on:click={() => isMenuOpen = false}>services</a></li>
    <li><a href="/portfolio" class:active={activePage === 'portfolio'} class="block text-lg px-3 py-1" on:click={() => isMenuOpen = false}>portfolio</a></li>
  </ul>
</div>

<style>
    .second-header{
        border-color: #B17A85;
        margin-bottom: 24px;
    }
    span.navlink {
        color: #DEE2A6;
    }

    .navlink a {
        padding: 5px 10px;
        border: solid #1D2030 2px;
    }

    .active{
        color: #B17A85;
        border: solid #B17A85 2px !important;
        border-radius: 10px;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
        
    }

    .navlink a:hover {
        border: solid #DEE2A6 2px !important;
        border-radius: 10px;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;

    }

    .burger{
        border-color: #DEE2A6;
    }

    .lettuce, .cheese, .tomato {
        background-color: #DEE2A6;
    }

    .nav-menu{
        background-color: #1D2030;
        color: #DEE2A6;
        z-index: 10;
        overflow: hidden;
    }

    .overlay{
        z-index: 9;
    }

    .noOverflow{
        overflow: hidden;
    }

    .overFlow{
        overflow: initial;
    }

</style>