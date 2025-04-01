<script>
    import wags from '$lib/demo/wags.png';
    import lvm from '$lib/demo/lvm.png';
    import journal from '$lib/demo/journal.png';
    import { goto } from '$app/navigation';
    import {onMount} from 'svelte';
    import backBtn from '$lib/icons/backBtn.png';
    import nextBtn from '$lib/icons/nextBtn.png';
    import { slide } from 'svelte/transition';
    import {fade} from 'svelte/transition';

    let currentItem = $state(0);

    let portfolioItems = [
        
        {
            item : 0,
            name : 'journal',
            src : journal,
            desc : "This full-stack journaling app was crafted using SvelteKit and MongoDB, with Open Router API integration to generate tailored summaries and action points with DeepSeek. Users can log daily reflections, track mood with a slider, and revisit past entries through a calendar interface. Designed with a focus on mindfulness, responsive design, and seamless user experience.",
            stack : "<li>SvelteKit</li><li>JavaScript</li><li>MongoDB</li><li>Tailwind CSS</li><li>DeepSeek AI</li>",
            features : "<li>Secure Auth</li><li>CRUD Journal Entries</li><li>AI Summaries & Actions</li><li>Mood Slider</li><li>Calendar View</li><li>Responsive UI</li>",
            url : "https://ai-journal-brown.vercel.app/",
        },
        {  
            item : 1,
            name : 'wags',
            src : wags,
            desc : "This custom-built website for Wags & Whiskers Pet Services was designed with speed and brand identity at its core. Fully responsive, showcasing the business's key features while promoting a strong brand voice. The client aimed to enhance their online presence, attract organic traffic, and provide an easy way for customers to make direct booking enquiries.",
            stack : "<li>HTML</li><li>CSS</li><li>JavaScript</li><li>Node.js</li><li>Mailgun</li>",
            features : "<li>Google analytics</li><li>Subtle Animation</li> <li>Contact Form</li><li>Bespoke design</li> <li>SEO Optimised</li><li>Speed Optimised</li>",
            url : "https://wagsnwhiskers.co",
        },
        {
            item : 2,
            name : 'lvm',
            src : lvm,
            desc : "A custom music player designed specifically for LVM with a bespoke, responsive design that aligns with their personality. This interactive web app aims to enhance the artist's vision, offering a unique platform to showcase their EP. With engaging features to enhance listening experience, allowing fans to explore the music in a whole new way.",
            stack : "<li>HTML</li><li>CSS</li><li>JavaScript</li><li>Svelte</li><li>Vite</li><li>Input-knobs.js</li>",
            features : "<li>Audio Play/Stop</li><li>Track Select</li><li>Frequency analyser</li><li>Hi Pass Filter</li><li>Lo Pass Filter</li>Subtle Animation<li>",
            url : "https://custom-music-player-eight.vercel.app/",

        },
        

    ];

    console.log(portfolioItems.length);

    function nextItem(){
        if (currentItem === portfolioItems.length - 1){
            currentItem = 0;
        }

        else (currentItem++)
    }

    function prevItem(){
        if (currentItem === 0){
            currentItem = portfolioItems.length - 1
        }
        else {
            currentItem--;
        }
    }

    let {data} = $props();

</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content="{data.description}" />
</svelte:head>

<section class="top-0">

    <div class="flex xl:hidden justify-center sticky top-0 z-4 items-center gap-10 md:gap-20 lg:gap-30 py-3 w-[100%] border-b-3 mx-auto darker border-accent-two">
        <div class="xl:order-none xl:hidden inline">
            <button class="portButton" on:click={prevItem} aria-label="view next showcase"><img src={backBtn} alt="back button"/></button>
        </div>

        <h1 class="text-2xl text-accent-one">Portfolio</h1>

        <div class="xl:order-none xl:hidden inline">
            <button class="portButton" on:click={nextItem} aria-label="view next showcase"><img src={nextBtn} alt="next button"/> </button>
        </div>

    </div>


    <div class="w-full p-5 px-[10%] darker xl:px-20 flex text-xl justify-center text-center mb-6 text-accent-one">
        {portfolioItems[currentItem].desc}
    </div>

    <div class="wrapper xl:flex xl:justify-center">

    <div class="portfolio-flex flex flex-col xl:flex-row shrink-0 items-center justify-around xl:w-[95%] gap-10 p-2 w-[90%] m-auto xl:m-0">

        <div class="xl:order-none xl:inline hidden">
            <button class="portButton" on:click={prevItem} aria-label="view next showcase"><img src={backBtn} alt="back button"/></button>
        </div>

        <div class="stack sharp-corners w-full xl:h-[396px] xl:max-w-[300px] flex flex-col justify-start">
            <h2 class="border-b-2 pb-3 mb-3 text-accent-one"> Tech Stack </h2>
            <ul class="flex h-full flex-col justify-evenly">
                {@html portfolioItems[currentItem].stack}
            </ul>

        </div>

        <div class="demo xl:min-w-[650px] order-first
         xl:order-none relative xl:min-w-[700px]">
            <img src={portfolioItems[currentItem].src} alt="client website demo" class="demo flex m-auto shrink-0">
            <div class="absolute inset-0 opacity-100 lg:opacity-0 overlay">
                <button 
                    on:click={window.location.href=portfolioItems[currentItem].url} 
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-dark mbg-yellow rounded-xl shadow-2xl z-3 cursor-pointer transition-all duration-300 hover:bg-dark hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    Visit Site
                </button>
            </div>
        </div>

        <div class="features xl:h-[396px] xl:max-w-[300px] sharp-corners w-full flex mb-10 xl:mb-0 flex-col justify-start">
            <h2 class="border-b-2 pb-3 mb-3 top-0 text-accent-one"> Features </h2>
            <ul class="flex h-full flex-col justify-evenly">
                {@html portfolioItems[currentItem].features}
            </ul>
        </div>

        <div class="xl:order-none xl:inline hidden">
            <button class="portButton" on:click={nextItem} aria-label="view next showcase"><img src={nextBtn} alt="next button"/> </button>
        </div>

    </div>

    </div>

</section>

<style>
    .demo{
        border-radius: 15px;
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
        flex-shrink: 1;
        min-width: 150px;
        max-height: 370px;
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

    .portButton{
        transition: ease 0.3s;
        width: 40px;
    }

    .portButton:hover{
        transform: scale(1.2);

    }

    .portButtonFull{
        transition: ease 0.3s;

    }

    .portButtonFull:hover{
        transform: scale(1.2);

    }

</style>