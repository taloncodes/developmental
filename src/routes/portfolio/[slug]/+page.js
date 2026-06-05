import { error } from '@sveltejs/kit';
import { caseStudies } from '$lib/caseStudies';

export function load({ params }) {
	const caseStudy = caseStudies[params.slug];

	if (!caseStudy) {
		error(404, 'Case study not found');
	}

	return {
		caseStudy
	};
}
