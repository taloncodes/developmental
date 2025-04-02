<script>
    import '../../app.css';
    import '../../app.scss';
    import wave from '$lib/icons/wave_icon.png';
    import qMark from '$lib/icons/question_icon.png';
    import tools from '$lib/icons/tools_icon.png';
    import response from '$lib/icons/mobile_first.svg';
    import shake from '$lib/icons/shake_icon.svg';
    import seo from '$lib/icons/seo_icon.svg';
    import downArrow from '$lib/icons/down_icon.svg';
    import hero from '$lib/graphics/hero.svg';
    import Form from '../../components/Form.svelte';
    import { onMount } from 'svelte';

    let modalOpen = $state(false);
    let headerHeight = $state(0);
    let heroSection;

    function lockHeroHeight() {
        if (heroSection) {
            const fullHeight = heroSection.offsetHeight;
            heroSection.style.height = `${fullHeight}px`;
        }
    }

    onMount(() => {
        const header = document.getElementById('header');
        if (header) {
            headerHeight = header.offsetHeight;
        }

        // Initially use dvh
        if (heroSection) {
            heroSection.style.height = `calc(100dvh - ${headerHeight}px)`;
        }

        // Once layout stabilizes, fix to px to avoid jumpiness
        requestAnimationFrame(() => {
            lockHeroHeight();
        });
    });

    function openModal() {
        modalOpen = !modalOpen;
        document.querySelector('body').style.overflow = 'hidden';
    }
</script>

<section>
    <Form bind:visible={modalOpen} />

    <section bind:this={heroSection} class="hero top-0 hero-animated px-[5%] xl:px-[10%] py-16 flex flex-col md:flex-row items-center justify-around gap-12">
        <div class="flex flex-col items-center md:items-start text-center md:text-left max-w-xl space-y-6">
          <h1 class="text-5xl sm:text-5xl xl:text-6xl font-bold leading-tight">
            <span class="text-accent-two">.</span><span class="text-primary">developmen</span><span class="text-accent-two">/</span><span class="text-accent-one">tal</span>
          </h1>
          <h2 class="text-2xl sm:text-3xl mb-[36px] text-primary">
            simple websites, tailored to your business
          </h2>
          <button class="px-6 py-3 text-lg text-dark rounded-lg mbg-yellow home-nav-button" onclick={openModal}>
            Get in Touch
          </button>
        </div>

        <div class="w-full max-w-md">
          <img src={hero} alt="mock-up website" class="w-full h-auto object-contain border border-accent-two rounded-lg" />
        </div>
    </section>


   

    <div class=" px-[5%] xl:px-[10%]">

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
            <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one inline"> Welcome!</h2>

        <div class="flex flex-col md:flex-row">

        <img src={wave} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="wave icon">
        <ul class="flex h-auto flex-col justify-evenly text-lg">
            I'm Talon, a freelance web developer with a background in digital media, education and marketing. I build modern, fast websites and love helping small businesses bring their ideas to life.
        </ul>
        

    </div>
    </div>

    

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> My Process </h2>

        <div class="flex flex-col-reverse md:flex-row">
        
        <ul class="flex text-lg flex-col justify-evenly h-auto">
            I create custom websites that are designed for your brand, not pulled from a generic template. Every site I build is focused on clean design, great performance, and your business goals.
        </ul>
        <img src={tools} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="tools icon">
    </div>
    </div>

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Why Work With Me? </h2>
        <div class="flex flex-col md:flex-row">
        <img src={qMark} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="question icon">
        <ul class="flex text-lg flex-col justify-evenly h-auto">
            No bloated templates. No agency fees. Just one person dedicated to building your site the right way, with full control over design, performance and personal service every step of the way.
        </ul>
    </div>
    </div>

    </div>

    <div class="w-full p-5 px-[10%] border-accent-two border-t-3 darker xl:px-20 flex xl:text-xl justify-center text-center mb-6 text-accent-one">
        <h1 class="text-4xl text-primary">My Approach...</h1>
    </div>

    <div class="  px-[5%] xl:px-[10%]">

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Mobile First Design</h2>
        <div class="flex flex-col">
        <ul class="flex flex-col justify-evenly h-auto text-lg">
            Over half of web traffic is mobile, that's why I build with phones in mind from the start. Your site will look great and work fast on any screen.
        </ul>

        <img src={response} width="800px" class="m-auto" alt="mobile to desktop responsiveness">
    </div>
    </div>



    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Client-Focused</h2>

        <div class="flex flex-col-reverse md:flex-row">
        
        <ul class="flex flex-col justify-evenly h-auto text-lg">

            You'll never feel left in the dark. I'll keep you updated throughout the process, and you can have as much input as you like.
        </ul>
        <img src={shake} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="tools icon">
    </div>
    </div>

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Speed And Performance </h2>
        <div class="flex flex-col md:flex-row">
            <img src={seo} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="question icon">
            <ul class="flex flex-col justify-evenly h-auto text-lg">
               53% of visitors leave if a site takes over 3 seconds to load. I build lightweight, modern sites that load quickly and make a strong first impression.
            </ul>
        </div>
    </div>

    </div>

    <div class="w-full p-5 px-[10%] border-accent-two border-t-3 darker xl:px-20 flex xl:text-xl justify-center text-center mb-6 text-accent-one">
        <h1 class="text-4xl text-primary">How It Works...</h1>
    </div>

    <div class="  px-[5%] xl:px-[10%]">

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">

        
        
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> 1. Make an Enquiry </h2>
        <p class="p-6 text-lg">Email me at <a class="text-accent-two" href="mailto:talon@developmental.pro">talon@developmental.pro</a> or fill out the <button class="text-accent-two" onclick={openModal}>enquiry form</button> to get started.</p>
        <img src={downArrow} alt="down arrow" width="75px" class="m-auto pb-3">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> 2. Tell Me About Your Goals </h2>
        <p class="p-6 text-lg">I'll send over a quick form to learn more about your business and what you're after.</p>
        <img src={downArrow} alt="down arrow" width="77px" class="m-auto pb-3">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> 3. Design & Build</h2>
        <p class="p-6 text-lg">Once we agree on a plan, I'll get to work on your site and keep you in the loop.</p>
        <img src={downArrow} alt="down arrow" width="75px" class="m-auto pb-3">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> 4. Review & Refine</h2>
        <p class="p-6 text-lg">You'll get a preview and can request changes before launch.</p>
        <img src={downArrow} alt="down arrow" width="75px" class="m-auto pb-3">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> 5. Launch & Support </h2>
        <p class="p-6 text-lg">After launch, I'm still here. You can get updates, maintenance, or ongoing support - whatever works best for you.</p>

        <button 
        onclick={openModal} 
        class="px-6 formButton m-auto w-fit py-3 text-xl text-dark mbg-yellow rounded-xl shadow-2xl z-3 cursor-pointer transition-all hover:bg-dark ">
        <strong>Ready To Go? Get In Touch!</strong>
    </button>
    </div>

</div>

</section>

<style>

    .formButton{
        border: #11121b solid 2px;
        transition: 0.3s ease;
        margin-bottom: 10px;
    }

    .formButton:hover {

        border: #B17A85 solid 2px;
        border-radius: 15px;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
        background-color: #11121b;
        color: #DEE2A6;

    }

    p {
        color: #FAFAFA;
    }

    .about {
        color: #FAFAFA;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-shrink: 1;
        min-width: 150px;
    }

    .about-icon{
        max-width: 150px;
        max-height: 150px;
    }

    .hero-animated {
    background: radial-gradient(
        circle at 30% 40%,
        #1d2030,
        #11121b 80%
    );
    background-size: cover;
    border-bottom: #B17A85 solid 3px;
    margin-bottom: 40px;
    }





</style>