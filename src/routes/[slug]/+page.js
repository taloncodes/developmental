import { error, redirect } from '@sveltejs/kit';
import { landingPages } from '$lib/landingPages';

const redirects = {
	'pwa-app-development': '/app-development'
};

export function load({ params }) {
	if (redirects[params.slug]) {
		redirect(301, redirects[params.slug]);
	}

	const landingPage = landingPages[params.slug];

	if (!landingPage) {
		error(404, 'Page not found');
	}

	return {
		landingPage
	};
}
