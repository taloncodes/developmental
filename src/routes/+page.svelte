<script>
    import { goto } from '$app/navigation';
    import Form from '../components/Form.svelte';

    let modalOpen = $state(false);

    function openModal(){
        modalOpen = !modalOpen;
        document.querySelector('body').style.overflow = 'hidden';

    };
</script>

<Form bind:visible={modalOpen} />

<div class="home-nav flex flex-col gap-5 p-10 justify-center items-center">
    <button onclick={() => goto('/about')} class="home-nav-button text-dark mbg-yellow p-4 text-xl">
        <strong>about</strong>
    </button>
    <button onclick={() => goto('/portfolio')} class="home-nav-button text-dark mbg-yellow p-4 text-xl">
        <strong>portfolio</strong>
    </button>
    <button onclick={() => goto('/services')} class="home-nav-button text-dark mbg-yellow p-4 text-xl">
        <strong>services</strong>
    </button>

    <button 
        onclick={openModal} 
        class="home-nav-button text-dark mbg-yellow p-4 text-xl">
        <strong>contact</strong>
    </button>

</div>

<style>



</style>