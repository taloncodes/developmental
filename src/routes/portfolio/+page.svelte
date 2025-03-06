<script>
    import wags from '$lib/demo/wags.png';
    import lvm from '$lib/demo/lvm.png';
    import { goto } from '$app/navigation';
    import {onMount} from 'svelte';

    let currentItem = $state(0);

    let portfolioItems = [
        {  
            item : 0,
            name : 'wags',
            src : wags,
            desc : "This custom-built website for Wags & Whiskers Pet Services was designed with speed and brand identity at its core. Fully responsive, it showcases the business's key features while promoting a strong brand voice. The client aimed to enhance their online presence, attract organic traffic, and provide an easy way for clients to connect and make direct booking inquiries.",
            stack : "<li> Vanilla HTML, CSS and JavaScript </li> <li> Node.js for custom mail handling </li> <li> Integrated with Mailgun API </li>",
            features : "<li>Google analytics</li> <li>Subtle Animations</li> <li>Bespoke design</li> <li> Optimsed for speed, performance and SEO</li>",
            url : "https://wagsnwhiskers.co",
        },
        {
            item : 1,
            name : 'lvm',
            src : lvm,
            desc : "lorem ipsum",
            stack : "<li> lorem </li> <li> ipsum </li>",
            features : "<li> lorem </li> <li> ipsum </li>",
            url : "https://custom-music-player-eight.vercel.app/",

        }
    ];

</script>

<section class="top-0">
    <div class="flex justify-center">
        <div class="flex justify-center items-center sharp-corners p-3 w-3/4 md:w-1/3 mb-6 text-3xl text-accent-one relative"><strong>portfolio</strong>
        <button on:click={ () => goto('/')} class="backIcon" aria-label="back button"></button>
        <button on:click={currentItem++}>next </button>
        </div>
    </div>

    <div class="w-full px-12 xl:px-20 flex justify-center text-center mb-6 text-accent-one">
        {portfolioItems[currentItem].desc}
      </div>
      
    <div class="wrapper xl:flex xl:justify-center">

    <div class="portfolio-flex flex flex-col xl:flex-row shrink-0 items-center justify-around xl:w-[90%] gap-10 p-2 w-4/5 m-auto xl:m-0">

        <div class="stack sharp-corners w-full xl:h-[396px] xl:max-w-[300px] flex flex-col justify-start">
            <h2 class="border-b-2 mb-6 text-accent-one"> Tech Stack </h2>
            {@html portfolioItems[currentItem].stack}
                

        </div>

        <div class="demo order-first xl:order-none relative xl:min-w-[700px]">
            <img src={portfolioItems[currentItem].src} alt="wags n whiskers demo" class="demo flex m-auto shrink-0">
            <div class="absolute inset-0 opacity-0 overlay">
                <button 
                    on:click={window.location.href=portfolioItems[currentItem].url} 
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-dark mbg-yellow rounded-xl shadow-2xl z-10 cursor-pointer transition-all duration-300 hover:bg-dark hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    Visit Site
                </button>
            </div>
        </div>

        <div class="features xl:h-[396px] xl:max-w-[300px] sharp-corners w-full flex flex-col justify-start">
            <h2 class="border-b-2 mb-6 top-0 text-accent-one"> Features </h2>
            {@html portfolioItems[currentItem].features}
    </div>

    </div>

    </div>
</section>

<style>
    .demo{
        border-radius: 10px;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .demo:hover{
        transform: scale(1.05);
        transition: 0.3s ease;
    }


    .overlay:hover{
        opacity: 100%;
        
    }

    .stack, .features {
        color: #FAFAFA;
        padding: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .backIcon {
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-right: 30px solid #DEE2A6;
        border-bottom: 15px solid transparent;
        position: absolute;
        left: 15px;
    }
</style>