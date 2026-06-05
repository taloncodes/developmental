<script>
	import { tick } from 'svelte';

	let { text = '', delay = 75, slashClass = 'blue-dot', textClass = 'text-accent-one' } = $props();

	let visibleCount = $state(0);
	let typewriterRun = 0;

	const tokens = $derived(getTypewriterTokens(text));

	function getCharacterClass(character) {
		return character === '/' ? slashClass : textClass;
	}

	function getTypewriterTokens(value) {
		const result = [];
		let tokenCharacters = [];

		for (let index = 0; index < value.length; index += 1) {
			const character = value[index];

			tokenCharacters.push({
				key: index,
				text: character,
				className: getCharacterClass(character)
			});

			if (character === '/' || character === '-') {
				result.push({
					key: `${index}-${character}`,
					characters: tokenCharacters
				});
				tokenCharacters = [];
			}
		}

		if (tokenCharacters.length > 0) {
			result.push({
				key: `${value.length}-tail`,
				characters: tokenCharacters
			});
		}

		return result;
	}

	async function typewriterEffect(value) {
		const run = ++typewriterRun;
		visibleCount = 0;

		for (let index = 0; index <= value.length; index += 1) {
			if (run !== typewriterRun) return;

			visibleCount = index;
			await tick();
			await new Promise((resolve) => setTimeout(resolve, delay));
		}
	}

	$effect(() => {
		void typewriterEffect(text);
	});
</script>

<span class="typewriter-text" aria-label={text}>
	<span aria-hidden="true">
		{#each tokens as token (token.key)}
			<span class="typewriter-token">
				{#each token.characters as character (character.key)}
					<span
						class={`${character.className} typewriter-char`}
						class:typewriter-char--hidden={character.key >= visibleCount}
					>
						{character.text}
					</span>
				{/each}
			</span>
		{/each}
	</span>
</span>

<style>
	.typewriter-text {
		display: inline;
	}

	.typewriter-token {
		display: inline-block;
	}

	.typewriter-char--hidden {
		visibility: hidden;
	}
</style>
