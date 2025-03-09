<script>
    import '../../app.css';
    import '../../app.scss';
    import wave from '$lib/icons/wave_icon.png';
    import qMark from '$lib/icons/question_icon.png';
    import tools from '$lib/icons/tools_icon.png';
    import response from '$lib/icons/mobile_first.svg';
    import shake from '$lib/icons/shake_icon.svg';
    import seo from '$lib/icons/seo_icon.svg';

</script>

<section>

    <div class="w-full p-5 px-[10%] darker xl:px-20 flex xl:text-xl justify-center text-center mb-6 text-accent-one">
        <h1 class="text-4xl"><span class="text-accent-two">.</span><span class="text-primary">developmen</span><span class="text-accent-two">./</span><span class="text-accent-one">tal</span></h1>
    </div>

   

    <div class=" px-[5%] xl:px-[10%]">

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
            <h2 class="text-2xl border-b-2 pb-3 mb-3 top-0 text-accent-one inline"> Welcome!</h2>

        <div class="flex flex-col md:flex-row">

        <img src={wave} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="wave icon">
        <ul class="flex h-auto flex-col justify-evenly">
            Hi, I'm Talon, the owner of Developmental. I have a diverse background in creative digital media, having worked professionally as a developer, a computer science teacher, and a marketing executive. I love using technology as a creative expression and helping others bring their visions to life.
        </ul>
        

    </div>
    </div>

    

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        <h2 class="text-2xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> What We Do </h2>

        <div class="flex flex-col-reverse md:flex-row">
        
        <ul class="flex flex-col justify-evenly h-auto">
            At Developmental, we specialise in crafting modern, functional websites tailored specifically to you. Our goal is to highlight your individuality and help you stand our from your competitors, creating a digital presence that's not only memorable but also authentic.
            We use the latest technologies and best practices to ensure your website looks amazing, performs flawlessly, and is optimised for speed and efficiency.
        </ul>
        <img src={tools} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="tools icon">
    </div>
    </div>

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-2xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Why Choose Us? </h2>
        <div class="flex flex-col md:flex-row">
        <img src={qMark} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="question icon">
        <ul class="flex flex-col justify-evenly h-auto">
            Unlike many competitors who rely on generic templates, we build fully bespoke websites that balance performance and design. This means you can have as much (or as little) input in the design process as you like. The result? A site that's unique to your business and one that runs faster that a template-based site, without all the built-in bloat that slows things down.
        </ul>
    </div>
    </div>

    </div>

    <div class="w-full p-5 px-[10%] border-accent-two border-t-3 darker xl:px-20 flex xl:text-xl justify-center text-center mb-6 text-accent-one">
        <h1 class="text-3xl">Our Approach</h1>
    </div>

    <div class="  px-[5%] xl:px-[10%]">

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-2xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Mobile First Design</h2>
        <div class="flex flex-col">
        <ul class="flex flex-col justify-evenly h-auto">
            With over (x)% of the world now accessing the internet through mobile devices, it's crucial that your website is optimised for mobile users. That's why our design process is built around a mobile-first approach. We ensure that no matter the screen size, your site will always look right at home, whether it's on a smartphone, tablet or desktop.
        </ul>

        <img src={response} width="1000px" class="m-auto" alt="mobile to desktop responsiveness">
    </div>
    </div>



    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        <h2 class="text-2xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Client-Centric </h2>

        <div class="flex flex-col-reverse md:flex-row">
        
        <ul class="flex flex-col justify-evenly h-auto">

            The core of our service is understanding your business needs and goal. We believe in maintaining transparent, ongoing communication with regular check-ins to ensure we're always aligned with your vision and keep you involved during the process. Our relationship doesn't end when the site is launched, our packages include support and maintenace as we continue to grow together.
        </ul>
        <img src={shake} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="tools icon">
    </div>
    </div>

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-2xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Speed And Performance </h2>
        <div class="flex flex-col md:flex-row">
        <img src={seo} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="question icon">
        <ul class="flex flex-col justify-evenly h-auto">
            Did you know that 53% of users will leave a website if it hans't loaded in 3 seconds? <br> <br> No need to worry! We prioritise speed and performance. Our websites are built for fast loading times using cutting edge tools and technology, enhancing the user experience and search engine rankings. Ensuring a good first impression for prospective clients.
        </ul>
    </div>
    </div>

    </div>

    <div class="w-full p-5 px-[10%] border-accent-two border-t-3 darker xl:px-20 flex xl:text-xl justify-center text-center mb-6 text-accent-one">
        <h1 class="text-3xl">How It Works</h1>
    </div>



      
    

</section>

<style>

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



</style>