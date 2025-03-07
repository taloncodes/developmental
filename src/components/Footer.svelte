<script>
    import instaIcon from '$lib/icons/insta_icon.png';
    import githhubIcon from '$lib/icons/github_icon.png';
    import mailIcon from '$lib/icons/mail_icon.png';

</script>

<footer>
    <div class="flex footer p-10 h-3 justify-center items-center border-t-3 border-accent-two darker">
        <div class="links flex gap-6">
            <div class="link border-accent-one border-2 rounded-full h-10 w-10">
                <a href="https://www.instagram.com/developmen_tal">
                    <img src={instaIcon} alt="instagram icon">
                </a>
            </div>

            <div class="flex flex-col justify-center">
                <span class="text-accent-two text-4xl">
                    /
                </span>
            </div>
            <div class="link border-accent-one border-2 rounded-full h-10 w-10">
                <a href="https://www.github.com/taloncodes">
                    <img src={githhubIcon} alt="github icon">
                </a>
            </div>
            <div class="flex flex-col justify-center">
                <span class="text-accent-two text-4xl">
                    /
                </span>
            </div>
            <div class="link border-accent-one border-2 rounded-full h-10 w-10">
                <a href="mailto:talon@developmental.pro">
                    <img src={mailIcon} alt="mail icon">
                </a>
            </div>
        </div>
    </div>

</footer>

<style>
    .footer{
        height: fit-content;
    }
</style>