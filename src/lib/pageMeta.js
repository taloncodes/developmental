import { landingPageMeta } from '$lib/landingPages';
import { articleMeta } from '$lib/articles';
import { caseStudyMeta } from '$lib/caseStudies';

export const pageMeta = {
	'/': {
		title: 'Freelance Web Design for Small Businesses | Developmental',
		desc: 'Custom websites and web apps for small businesses, built by a freelance developer with clean design, fast performance and direct support.',
		ogType: 'website'
	},
	'/services': {
		title: 'Web Design, App Development & SEO Services | Developmental',
		desc: 'Explore web design, app development, branding, SEO audits and custom software services for small businesses that need practical digital tools.',
		ogType: 'website'
	},
	'/about': {
		title: 'About Talon, Freelance Web Developer | Developmental',
		desc: 'Learn about Developmental, a freelance web development service focused on clean, high-performance websites and practical web tools for small businesses.',
		ogType: 'profile'
	},
	'/portfolio': {
		title: 'Web Design Portfolio & Client Projects | Developmental',
		desc: 'See client websites, business software and personal web projects built by Developmental, from fast marketing sites to custom web applications.',
		ogType: 'website'
	},
	'/articles': {
		title: 'Web Design, SEO & App Development Articles | Developmental',
		desc: 'Practical articles on small business websites, SEO audits, local SEO, app development, business automation, website costs and redesigns.',
		ogType: 'website'
	},
	...landingPageMeta,
	...articleMeta,
	...caseStudyMeta
};
