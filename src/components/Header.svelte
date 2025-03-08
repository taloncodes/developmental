<script>
    import { tick, onMount } from 'svelte';

    const textSegments = [
        { text: "developmen", class: "text-primary" },
        { text: "/", class: "text-accent-two" },
        { text: "tal", class: "text-accent-one" }
    ];

    let fullText = textSegments.map(segment => segment.text).join('');
    let displayText = '';

    async function typewriterEffect() {
        for (let i = 0; i <= fullText.length; i++) {
            displayText = fullText.slice(0, i);
            await tick();
            await new Promise(resolve => setTimeout(resolve, 75));
        }
    }

    function getSegmentedText(displayText) {
        let output = '';
        let currentIndex = 0;

        for (const segment of textSegments) {
            const segmentText = displayText.slice(currentIndex, currentIndex + segment.text.length);
            output += `<span class="${segment.class}">${segmentText}</span>`;
            currentIndex += segment.text.length;
        }

        return output;
    }

    onMount(() => {
        typewriterEffect();
    });
</script>
  
<header>
    <div class="p-5 pb-0">
        <a href="/">
            <h1 class="text-5xl flex items-center justify-center">
                <span class="text-accent-two">.</span>
                <span> {@html getSegmentedText(displayText)}</span>
            </h1>
        </a>
    </div>
</header>

<style>
    h1 {
        white-space: nowrap;
        overflow: hidden;
        animation: blink 1.2s steps(2, start) infinite;
    }
</style>
