<script>
    	import { page } from '$app/stores';
        let activePage;

        $: {
            if ($page.url.pathname === '/about') {
            activePage = 'about';
            } else if ($page.url.pathname === '/services') {
            activePage = 'services';
            } else if ($page.url.pathname === '/portfolio') {
            activePage = 'portfolio';
            } else {
            activePage = ''; // Clear if it's none of the above
            }
        }

</script>

<header>
    <div class="p-5 flex justify-between items-center second-header border-b-3 md:border-b-0">
        <a href="/" class="">
            <span class="text-3xl md:text-5xl text-accent-two">./</span>
            <span class="text-3xl md:text-5xl text-accent-one">tal</span>
        </a>
        <ul class="flex gap-6">
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
        
    </div>
</header>

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

</style>