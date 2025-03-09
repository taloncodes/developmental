<script>
    import '../../app.css';
    import '../../app.scss';
    import wave from '$lib/icons/wave_icon.png';
    import qMark from '$lib/icons/question_icon.png';
    import tools from '$lib/icons/tools_icon.png';
</script>

<section>

    <div class="w-full p-5 px-[10%] darker xl:px-20 flex xl:text-xl justify-center text-center mb-6 text-accent-one">
        <h1 class="text-3xl">Inside <span class="text-accent-two">.</span><span class="text-primary">developmen</span><span class="text-accent-two">./</span><span class="text-accent-one">tal</span></h1>
    </div>

   

    <div class=" p-[5%]">

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
            <h2 class="text-xl border-b-2 pb-3 mb-3 top-0 text-accent-one inline"> Welcome!</h2>

        <div class="flex flex-col md:flex-row">

        <img src={wave} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="wave icon">
        <ul class="flex h-auto flex-col justify-evenly">
            Hi, I'm Talon, the owner of Developmental. I have a diverse background in creative digital media, having worked professionally as a developer, a computer science teacher, and a marketing executive. I love using technology as a creative expression and helping others bring their visions to life.
        </ul>
        

    </div>
    </div>

    

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        <h2 class="text-xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> What We Do </h2>

        <div class="flex flex-col-reverse md:flex-row">
        
        <ul class="flex flex-col justify-evenly h-auto">
            At Developmental, we specialise in crafting modern, functional websites tailored specifically to you. Our goal is to highlight your individuality and help you stand our from your competitors, creating a digital presence that's not only memorable but also authentic.
            We use the latest technologies and best practices to ensure your website looks amazing, performs flawlessly, and is optimised for speed and efficiency.
        </ul>
        <img src={tools} class="m-auto about-icon w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:w-[125px] lg:h-[125px]" alt="tools icon">
    </div>
    </div>

    <div class="about sharp-corners w-full flex mb-10 flex-col justify-start">
        
        <h2 class="text-xl border-b-2 pb-3 mb-3 top-0 text-accent-one"> Why Choose Us? </h2>
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

    <div class="w-full p-5 px-[10%] darker xl:px-20 flex xl:text-xl justify-center text-center mb-6 text-accent-one">
        Mobile-First Design
    </div>

    <div class="about_container p-10 sm:p-2 flex justify-center w-screen">
        <p class="w-9/10 md:w-1/2 sharp-corners p-5">
        With over (x)% of the world now accessing the internet through mobile devices, it's crucial that your website is optimised for mobile users. That's why our design process is built around a mobile-first approach. We ensure that no matter the screen size, your site will always look right at home, whether it's on a smartphone, tablet or desktop.
        </p>
    </div>

    <div>***** To include some examples of mobile vs desktop design</div>
      
    

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