import { landingPages } from '$lib/landingPages';
import { articleList } from '$lib/articles';
import { caseStudyList } from '$lib/caseStudies';

const SITE_URL = 'https://developmental.pro';
const BUSINESS_ID = `${SITE_URL}/#business`;
const PERSON_ID = `${SITE_URL}/#talon`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const homepageReviews = [
	{
		author: 'Lucy',
		company: 'Slaters Contracting & Consultancy',
		reviewBody:
			"The lads have only had positive feedback for the app, it's been a game changer for me."
	},
	{
		author: 'Alice',
		company: 'Wags n Whiskers Pet Services',
		reviewBody: "Absolutely recommend! Love my website and it's producing so many leads!"
	}
];

const services = [
	{
		id: 'web-design',
		name: 'Web Design',
		description:
			'Custom website design and development for small businesses that need fast, modern and easy-to-use websites.'
	},
	{
		id: 'app-development',
		name: 'App Development',
		description:
			'Installable progressive web apps and custom web applications for business workflows across mobile, tablet and desktop.'
	},
	{
		id: 'logo-branding',
		name: 'Logo & Branding',
		description:
			'Logo design and brand identity support for businesses that need a clearer and more consistent visual presence.'
	},
	{
		id: 'audit-seo',
		name: 'Audit & SEO',
		description:
			'Website audits covering performance, search visibility, Google Business Profile signals and user experience, with practical recommendations for improvement.'
	},
	{
		id: 'setup-local',
		name: 'Domain, Email & Local Setup',
		description:
			'Domain setup, business email, DNS records, launch checks and Google Business Profile setup for small businesses.'
	},
	{
		id: 'custom-solutions',
		name: 'Custom Business Software',
		description:
			'Custom web tools such as quote calculators, invoice generators, form systems and process automation for small businesses.'
	}
];

const pathLabels = {
	'/': 'Home',
	'/services': 'Services',
	'/portfolio': 'Portfolio',
	'/about': 'About',
	'/articles': 'Articles'
};

const articlesByPath = Object.fromEntries(articleList.map((article) => [article.path, article]));
const caseStudiesByPath = Object.fromEntries(caseStudyList.map((study) => [study.path, study]));

function getBreadcrumbItems(path, article, caseStudy, landingPage) {
	if (path === '/') {
		return [{ name: 'Home', url: `${SITE_URL}/` }];
	}

	if (article) {
		return [
			{ name: 'Home', url: `${SITE_URL}/` },
			{ name: 'Articles', url: `${SITE_URL}/articles` },
			{ name: article.title, url: `${SITE_URL}${article.path}` }
		];
	}

	if (caseStudy) {
		return [
			{ name: 'Home', url: `${SITE_URL}/` },
			{ name: 'Portfolio', url: `${SITE_URL}/portfolio` },
			{ name: caseStudy.title, url: `${SITE_URL}${caseStudy.path}` }
		];
	}

	if (landingPage) {
		return [
			{ name: 'Home', url: `${SITE_URL}/` },
			{ name: 'Services', url: `${SITE_URL}/services` },
			{ name: landingPage.title.replace(' | Developmental', ''), url: `${SITE_URL}${path}` }
		];
	}

	return [
		{ name: 'Home', url: `${SITE_URL}/` },
		{ name: pathLabels[path] ?? 'Page', url: `${SITE_URL}${path}` }
	];
}

function buildBreadcrumbList(path, canonicalUrl, article, caseStudy, landingPage) {
	return {
		'@type': 'BreadcrumbList',
		'@id': `${canonicalUrl}#breadcrumb`,
		itemListElement: getBreadcrumbItems(path, article, caseStudy, landingPage).map(
			(item, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: item.name,
				item: item.url
			})
		)
	};
}

function buildServiceCatalog() {
	return {
		'@type': 'OfferCatalog',
		name: 'Developmental web services',
		itemListElement: services.map((service) => ({
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				'@id': `${SITE_URL}/services#${service.id}`,
				name: service.name,
				description: service.description,
				provider: { '@id': BUSINESS_ID },
				areaServed: {
					'@type': 'Country',
					name: 'United Kingdom'
				}
			}
		}))
	};
}

function buildServiceNodes() {
	return services.map((service) => ({
		'@type': 'Service',
		'@id': `${SITE_URL}/services#${service.id}`,
		name: service.name,
		description: service.description,
		provider: { '@id': BUSINESS_ID },
		serviceType: service.name,
		url: `${SITE_URL}/services`,
		areaServed: {
			'@type': 'Country',
			name: 'United Kingdom'
		}
	}));
}

export function buildStructuredData({ path, title, description, canonicalUrl, image }) {
	const landingPage = landingPages[path.replace(/^\//, '')];
	const article = articlesByPath[path];
	const caseStudy = caseStudiesByPath[path];
	const graph = [
		{
			'@type': 'WebSite',
			'@id': WEBSITE_ID,
			name: 'Developmental',
			url: SITE_URL,
			description:
				'Freelance web design, web development and custom web applications for small businesses.',
			publisher: { '@id': BUSINESS_ID },
			inLanguage: 'en-GB'
		},
		{
			'@type': ['ProfessionalService', 'LocalBusiness'],
			'@id': BUSINESS_ID,
			name: 'Developmental',
			url: SITE_URL,
			image,
			logo: `${SITE_URL}/developmental_favi.png`,
			description:
				'Freelance web design, app development, SEO audits and custom web tools for small businesses.',
			email: 'talon@developmental.pro',
			telephone: '+447306123054',
			founder: { '@id': PERSON_ID },
			areaServed: {
				'@type': 'Country',
				name: 'United Kingdom'
			},
			sameAs: [
				'https://www.instagram.com/developmen_tal',
				'https://www.facebook.com/profile.php?id=61586867661440'
			],
			hasOfferCatalog: buildServiceCatalog()
		},
		{
			'@type': 'Person',
			'@id': PERSON_ID,
			name: 'Talon',
			jobTitle: 'Freelance Web Developer',
			email: 'talon@developmental.pro',
			telephone: '+447306123054',
			url: SITE_URL,
			worksFor: { '@id': BUSINESS_ID },
			knowsAbout: [
				'Web design',
				'Web development',
				'SvelteKit',
				'Search engine optimisation',
				'Progressive web apps',
				'Business process automation'
			]
		},
		{
			'@type': 'WebPage',
			'@id': `${canonicalUrl}#webpage`,
			url: canonicalUrl,
			name: title,
			description,
			isPartOf: { '@id': WEBSITE_ID },
			about: { '@id': BUSINESS_ID },
			breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
			primaryImageOfPage: {
				'@type': 'ImageObject',
				url: image
			},
			inLanguage: 'en-GB'
		},
		buildBreadcrumbList(path, canonicalUrl, article, caseStudy, landingPage)
	];

	if (path === '/services') {
		graph.push(...buildServiceNodes());
	}

	if (path === '/') {
		graph.push(
			...homepageReviews.map((review, index) => ({
				'@type': 'Review',
				'@id': `${SITE_URL}/#review-${index + 1}`,
				itemReviewed: { '@id': BUSINESS_ID },
				author: {
					'@type': 'Person',
					name: review.author,
					affiliation: {
						'@type': 'Organization',
						name: review.company
					}
				},
				reviewBody: review.reviewBody,
				inLanguage: 'en-GB'
			}))
		);
	}

	if (landingPage) {
		graph.push({
			'@type': 'Service',
			'@id': `${canonicalUrl}#service`,
			name: landingPage.title.replace(' | Developmental', ''),
			description: landingPage.desc,
			provider: { '@id': BUSINESS_ID },
			url: canonicalUrl,
			areaServed: {
				'@type': 'Country',
				name: 'United Kingdom'
			}
		});

		if (landingPage.faqs?.length) {
			graph.push({
				'@type': 'FAQPage',
				'@id': `${canonicalUrl}#faq`,
				mainEntity: landingPage.faqs.map((faq) => ({
					'@type': 'Question',
					name: faq.question,
					acceptedAnswer: {
						'@type': 'Answer',
						text: faq.answer
					}
				}))
			});
		}
	}

	if (article) {
		graph.push({
			'@type': 'BlogPosting',
			'@id': `${canonicalUrl}#article`,
			mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
			headline: article.title,
			description: article.desc,
			articleSection: article.category,
			keywords: article.keyTakeaways,
			datePublished: article.datePublished,
			dateModified: article.dateModified,
			author: { '@id': PERSON_ID },
			publisher: { '@id': BUSINESS_ID },
			image,
			url: canonicalUrl,
			inLanguage: 'en-GB'
		});
	}

	if (caseStudy) {
		graph.push({
			'@type': 'CreativeWork',
			'@id': `${canonicalUrl}#case-study`,
			mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
			name: caseStudy.title,
			headline: caseStudy.metaTitle,
			description: caseStudy.desc,
			creator: { '@id': PERSON_ID },
			provider: { '@id': BUSINESS_ID },
			about: caseStudy.services,
			keywords: [...caseStudy.services, ...caseStudy.tech, ...caseStudy.features],
			image,
			url: canonicalUrl,
			inLanguage: 'en-GB'
		});
	}

	return {
		'@context': 'https://schema.org',
		'@graph': graph
	};
}

export function stringifyStructuredData(data) {
	return JSON.stringify(data).replace(/</g, '\\u003c');
}
