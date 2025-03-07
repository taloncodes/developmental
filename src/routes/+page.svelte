<script>
    import { goto } from '$app/navigation';
</script>

<div class="home-nav flex flex-col gap-5 p-10 justify-center items-center">
    <button on:click={() => goto('/about')} class="home-nav-button text-dark mbg-yellow p-4">
        <strong>about</strong>
    </button>
    <button on:click={() => goto('/portfolio')} class="home-nav-button text-dark mbg-yellow p-4">
        <strong>portfolio</strong>
    </button>
    <button on:click={() => goto('/services')} class="home-nav-button text-dark mbg-yellow p-4">
        <strong>services</strong>
    </button>

</div>

<style>



</style>