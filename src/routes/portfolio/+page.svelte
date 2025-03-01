<script>
    import wags from '$lib/demo/wags.png';
</script>

<section class="top-0">
    <div class="flex justify-center">
        <div class="text-center sharp-corners-yellow p-3 w-3/4 md:w-1/3 mb-6 text-3xl text-accent-one"><strong>portfolio</strong></div>
    </div>

    <div class="portfolio-flex flex flex-col md:flex-row justify-center gap-5 p-5">

        <div class="stack sharp-corners md:w-1/4 flex flex-col justify-start">
            <h2 class="border-b-2 mb-6"> Tech Stack </h2>
            <p>
                This site was built using a simple yet powerful combination of technologies. The front-end is powered by vanilla HTML, CSS, and JavaScript, ensuring fast load times and a clean, responsive layout. On the back-end, a Node.js server is utilized for custom mail handling, integrated with Mailgun.js for efficient lead generation and communication. This setup provides a reliable and scalable solution for managing the site’s contact forms and client inquiries.
            </p>
        </div>

        <div class="demo md:w-1/2 relative">
            <img src={wags} alt="wags n whiskers demo" class="demo flex">
            <div class="absolute inset-0 opacity-0 overlay">
                <button 
                    on:click={window.location.href='https://wagsnwhiskers.co'} 
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-dark mbg-yellow rounded-xl shadow-2xl z-10 cursor-pointer transition-all duration-300 hover:bg-dark hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    Visit Site
                </button>
            </div>
        </div>

        <div class="features sharp-corners md:w-1/4 flex flex-col justify-start">
            <h2 class="border-b-2 mb-6 top-0"> Features </h2>
        <p>
            The website features key elements that enhance user experience and business performance. Google Analytics tracks user behavior, while subtle animations provide a dynamic yet smooth experience. The bespoke design aligns with the brand's voice and identity, and the site is optimized for speed, performance, and SEO to ensure fast load times and strong search rankings.
        </p>
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
</style>