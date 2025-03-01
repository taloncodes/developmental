<script>
    import { goto } from '$app/navigation';
</script>

<div class="home-nav flex flex-col gap-5 p-10 justify-center items-center">
    <button on:click={() => goto('/about')} class="home-nav-button text-dark mbg-yellow p-4">
        about
    </button>
    <button on:click={() => goto('/portfolio')} class="home-nav-button text-dark mbg-yellow p-4">
        portfolio
    </button>
    <button on:click={() => goto('/services')} class="home-nav-button text-dark mbg-yellow p-4">
        services
    </button>

</div>

<style>

    .home-nav-button:hover{
        border: #B17A85 solid 2px;
        background-color: #1D2030;
        color: #DEE2A6;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }


    .home-nav-button {
        border: #DEE2A6 solid 2px;
        border-radius: 10px;
        width: 400px;
        max-width: 90%;
    }

</style>