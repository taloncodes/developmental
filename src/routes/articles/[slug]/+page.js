import { error } from '@sveltejs/kit';
import { articles } from '$lib/articles';

export function load({ params }) {
	const article = articles[params.slug];

	if (!article) {
		error(404, 'Article not found');
	}

	return {
		article
	};
}
