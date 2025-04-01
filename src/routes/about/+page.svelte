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

    function setAppHeight() {
        const height = window.visualViewport?.height || window.innerHeight;
        document.documentElement.style.setProperty('--app-height', `${height}px`);
    }

    onMount(() => {
        const header = document.getElementById('header');
        if (header) {
            headerHeight = header.offsetHeight;
        }

        setAppHeight();
        window.visualViewport?.addEventListener('resize', setAppHeight);
        window.visualViewport?.addEventListener('scroll', setAppHeight);
        window.addEventListener('resize', setAppHeight);
    });

    /*onDestroy(() => {
        window.visualViewport?.removeEventListener('resize', setAppHeight);
        window.visualViewport?.removeEventListener('scroll', setAppHeight);
        window.removeEventListener('resize', setAppHeight);
    });
    */

    function openModal() {
        modalOpen = !modalOpen;
        document.querySelector('body').style.overflow = 'hidden';
    }
</script>


<section>

    <Form bind:visible={modalOpen} />

    <section style="height: calc(var(--app-height) - {headerHeight}px)" class="hero top-0 hero-animated px-[5%] xl:px-[10%] py-16 flex flex-col md:flex-row items-center justify-around gap-12">


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
            Hi, I'm Talon, a freelance web developer. I have a diverse background in creative digital media, having worked professionally as a developer, a computer science teacher, and a marketing executive. I love using technology as a creative expression and helping others bring their visions to life.
        </ul>
        

    </div>
    </div>

    

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> What We Do </h2>

        <div class="flex flex-col-reverse md:flex-row">
        
        <ul class="flex text-lg flex-col justify-evenly h-auto">
            At Developmental, we specialise in crafting modern, functional websites tailored specifically to you. Our goal is to highlight your individuality and help you stand our from your competitors, creating a digital presence that's not only memorable but also authentic.
            We use the latest technologies and best practices to ensure your website looks amazing, performs flawlessly, and is optimised for speed and efficiency.
        </ul>
        <img src={tools} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="tools icon">
    </div>
    </div>

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Why Choose Us? </h2>
        <div class="flex flex-col md:flex-row">
        <img src={qMark} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="question icon">
        <ul class="flex text-lg flex-col justify-evenly h-auto">
            Unlike many competitors who rely on generic templates, we build fully bespoke websites that balance performance and design. This means you can have as much (or as little) input in the design process as you like. The result? A site that's unique to your business and one that runs faster than a template-based site, without all the built-in bloat that slows things down.
        </ul>
    </div>
    </div>

    </div>

    <div class="w-full p-5 px-[10%] border-accent-two border-t-3 darker xl:px-20 flex xl:text-xl justify-center text-center mb-6 text-accent-one">
        <h1 class="text-4xl text-primary">Our Approach...</h1>
    </div>

    <div class="  px-[5%] xl:px-[10%]">

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Mobile First Design</h2>
        <div class="flex flex-col">
        <ul class="flex flex-col justify-evenly h-auto text-lg">
            Over half of website traffic comes from mobile devices and 90% of users regularly browse the web on their phones, so ensuring your site is mobile friendly is essential.<br><br> That's why our design process is built around a mobile-first approach. We ensure that no matter the screen size, your site will always look right at home, whether it's on a smartphone, tablet or desktop.
        </ul>

        <img src={response} width="800px" class="m-auto" alt="mobile to desktop responsiveness">
    </div>
    </div>



    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Client-Centric </h2>

        <div class="flex flex-col-reverse md:flex-row">
        
        <ul class="flex flex-col justify-evenly h-auto text-lg">

            The core of our service is understanding your business needs and goals. We believe in maintaining transparent, ongoing communication with regular check-ins to ensure we're always aligned with your vision and keep you involved during the process.<br><br>Our relationship doesn't end when the site is launched, our packages include support and maintenace as we continue to grow together.
        </ul>
        <img src={shake} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="tools icon">
    </div>
    </div>

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Speed And Performance </h2>
        <div class="flex flex-col md:flex-row">
            <img src={seo} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="question icon">
            <ul class="flex flex-col justify-evenly h-auto text-lg">
                Did you know that 53% of users will leave a website if it hans't loaded in 3 seconds? <br> <br> No need to worry! We prioritise speed and performance. Our websites are built for fast loading times using cutting edge tools and technology, enhancing the user experience and search engine rankings. Ensuring a good first impression for prospective clients.
            </ul>
        </div>
    </div>

    </div>

    <div class="w-full p-5 px-[10%] border-accent-two border-t-3 darker xl:px-20 flex xl:text-xl justify-center text-center mb-6 text-accent-one">
        <h1 class="text-4xl text-primary">How It Works...</h1>
    </div>

    <div class="  px-[5%] xl:px-[10%]">

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">

        
        
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Step 1. Make an Enquiry </h2>
        <p class="p-6 text-lg">Getting started is easy. You can reach out by sending an email to <a class="text-accent-two" href="mailto:talon@developmental.pro">talon@developmental.pro</a> - Or, for a quicker start, fill out our <button class="text-accent-two" onclick={openModal}>enquiry form.</button></p>
        <img src={downArrow} alt="down arrow" width="75px" class="m-auto pb-3">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Step 2. Tell Us About Your Goals </h2>
        <p class="p-6 text-lg">We'll send you a tailored package designed to gather the finer details about you and your website goals. This includes what you aim to achieve, along with any existing branding, logos, or designs you'd like us to incorporate.</p>
        <img src={downArrow} alt="down arrow" width="77px" class="m-auto pb-3">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Step 3. Planning & Design</h2>
        <p class="p-6 text-lg">Once we've collected everything we need and received your initial deposit, we'll begin mapping out your website's functionality and design. Throughout this stage, we'll stay in regular contact to keep you updated.</p>
        <img src={downArrow} alt="down arrow" width="75px" class="m-auto pb-3">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Step 4. Review & Refine</h2>
        <p class="p-6 text-lg">When the site is nearing completion, we'll provide you with early access so you can explore it firsthand. This is your opporunity to share feedback and request any revisions to ensure everything feels just right.</p>
        <img src={downArrow} alt="down arrow" width="75px" class="m-auto pb-3">
        <h2 class="text-3xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Step 5. Launch & Beyond </h2>
        <p class="p-6 text-lg">With your approval, we'll launch your website! But our support doesn't end there. If you ever need updates or changes, we offer flexible options. Choose from our ongoing maintenance packages or pay-as-you-go services with discounted rates for future adjustments.</p>

        <button 
        onclick={openModal} 
        class="px-6 formButton m-auto w-fit py-3 text-xl text-dark mbg-yellow rounded-xl shadow-2xl z-3 cursor-pointer transition-all hover:bg-dark hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500">
        <strong>Ready To Go? Get In Touch!</strong>
    </button>
    </div>

</div>

</section>

<style>

    formButton:hover {

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