<script>
    import '../../app.css';
    import '../../app.scss'
    import Form from '../../components/Form.svelte';
    let modalOpen = $state(false);

    function openModal(){
        modalOpen = !modalOpen;
        document.querySelector('body').style.overflow = 'hidden';

    };
</script>

<section>

  <Form bind:visible={modalOpen} />

  <div class="w-full p-5 px-[10%] darker xl:px-20 flex text-xl justify-center text-center mb-6 text-accent-one">
    At Developmental Web Services, we provide comprehensive solutions for businesses looking to grow their online presence. Explore our wide range of services, tailored to meet your unique needs.
</div>

    <div class="container mx-auto text-center">
      
      <div class="grid p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Web Design Service -->
        <div class="service-card p-6 rounded-lg shadow-lg sharp-corners">
          <h3 class="text-3xl font-semibold mb-4 text-accent-one border-b-3 pb-3">Web Design</h3>
          <p class="text-gray-600 mb-4 text-lg">
            We create visually appealing, user-friendly websites that engage your visitors and enhance their experience.
          </p>
        </div>
  
        <!-- Web Development Service -->
        <div class="service-card p-6 rounded-lg shadow-lg sharp-corners">
          <h3 class="text-3xl font-semibold mb-4 text-accent-one border-b-3 pb-3">Web Development</h3>
          <p class="text-gray-600 mb-4 text-lg">
            Our web development services ensure that your website is fast, functional, and optimized for all devices.
          </p>
        </div>
  
        <!-- Logo & Branding Service -->
        <div class="service-card p-6 rounded-lg shadow-lg sharp-corners">
          <h3 class="text-3xl font-semibold mb-4 text-accent-one border-b-3 pb-3">Logo & Branding</h3>
          <p class="text-gray-600 mb-4 text-lg">
            We help you establish a strong brand identity with custom logos and branding elements that resonate with your audience.
          </p>
        </div>
  
        <!-- Site Audit Service -->
        <div class="service-card p-6 rounded-lg shadow-lg sharp-corners">
          <h3 class="text-3xl font-semibold mb-4 text-accent-one border-b-3 pb-3">Site Audit</h3>
          <p class="text-gray-600 mb-4 text-lg">
            Our site audit service provides an in-depth analysis of your website’s performance, and SEO.
          </p>
        </div>
  
        <!-- On-page Optimisation Service -->
        <div class="service-card p-6 rounded-lg shadow-lg sharp-corners">
          <h3 class="text-3xl font-semibold mb-4 text-accent-one border-b-3 pb-3">On-Page Optimisation</h3>
          <p class="text-gray-600 mb-4 text-lg">
            We enhance your website’s content, structure, and performance to improve search engine rankings and user experience.
          </p>
        </div>
  
        <!-- Off-page Optimisation Service -->
        <div class="service-card p-6 rounded-lg shadow-lg sharp-corners">
          <h3 class="text-3xl font-semibold mb-4 text-accent-one border-b-3 pb-3">Custom Solutions</h3>
          <p class="text-gray-600 mb-4 text-lg">
             Streamline and automate your business processes. Whether that's an invoice generator, a quote calculator, or something completely unique to you.
          </p>
        </div>
      </div>
    </div>

    
    

    <div class="flex mb-12 mt-6">

    <button 
                on:click={openModal} 
                class="px-6 m-auto w-fit py-3 text-xl text-dark mbg-yellow rounded-xl shadow-2xl z-3 cursor-pointer transition-all hover:bg-dark hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <strong>Ready To Go? Get In Touch!</strong>
            </button>

          </div>
  </section>
  

<style>

    p {
        color: #FAFAFA;
    }
</style>