<script>
    	import { page } from '$app/stores';
</script>

<header>
    <div class="p-5 flex justify-between">
        <a href="/" class="">
            <span class="text-5xl text-accent-two">./</span>
            <span class="text-5xl text-accent-one">tal</span>
        </a>
        <div class="absolute left-1/2 transform -translate-x-1/2">
            {#if $page.url.pathname === '/services'}
            <div class="sharp-corners p-5 text-3xl text-accent-one">services</div>
            {:else if $page.url.pathname === '/portfolio'}
            <div class="sharp-corners p-5 text-3xl text-accent-one">portfolio</div>
            {:else if $page.url.pathname === '/about'}
            <div class="sharp-corners p-5 text-3xl text-accent-one">about</div>
            {/if}
        </div>
        
    </div>
</header>