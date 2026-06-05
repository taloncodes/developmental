import wags from '$lib/demo/newmockups/wags4mockup.webp';
import journal from '$lib/demo/newmockups/aiformockup.webp';
import scc from '$lib/demo/newmockups/scc4mockup.webp';
import siterecs from '$lib/demo/newmockups/siterecs4mockup.webp';
import clearcut from '$lib/demo/newmockups/clearcut4mockup.webp';
import lvm from '$lib/demo/newmockups/music4mockup.webp';

export const caseStudies = {
	siterecs: {
		slug: 'siterecs',
		path: '/portfolio/siterecs',
		group: 'client',
		title: 'SiteRecs',
		metaTitle: 'SiteRecs Case Study | Custom Trade Software | Developmental',
		desc: 'A custom RAMS and paperwork platform for trade contractors, built around mobile field use, secure access, Stripe billing and branded PDFs.',
		category: 'Software',
		siteUrl: 'https://siterecs.com',
		image: siterecs,
		imageAlt: 'SiteRecs web app mockup',
		imageStyle: 'mockup',
		summary: [
			'A digital RAMS and paperwork platform for trade contractors. SiteRecs helps teams create RAMS, complete checks, collect signatures and keep job records together.',
			'Built with a focus on field usability and simple office admin. Secure access, Stripe billing and branded PDF generation keep everything running smoothly.'
		],
		problem: [
			'Trade paperwork can quickly spread across templates, folders, emails and printed forms. That makes it harder for teams to repeat the same process cleanly and harder for office staff to keep records organised.',
			'The product needed to support people working on site as well as the admin side of the business, without turning every job into a software training exercise.'
		],
		solution: [
			'I built an account-based web app with RAMS creation, job records, digital signatures, user seats, Stripe billing and branded PDF output.',
			'The interface is kept direct and mobile-first, so contractors can complete the important parts from site while the business keeps a cleaner record of what has been produced.'
		],
		outcome: [
			'SiteRecs gives trade teams a focused system for repeat paperwork, rather than relying on disconnected files and manual document editing.',
			'It also creates a clearer route for scaling the product commercially, with subscriptions, secure user access and reusable document workflows built in from the start.'
		],
		services: ['Custom software', 'App development', 'Stripe payments', 'PDF generation'],
		tech: ['SvelteKit', 'JavaScript', 'Node', 'Supabase', 'PostgreSQL', 'Stripe', 'Playwright'],
		features: [
			'Secure Authentication & RLS',
			'User Seats & Roles',
			'Stripe Billing',
			'RAMS Builder & Library',
			'Brandable PDF Generation',
			'Digital Signatures',
			'Job-Centric Paperwork',
			'Mobile-First Trade Workflow'
		],
		related: [
			{ label: 'Custom business software', href: '/custom-business-software' },
			{ label: 'App development', href: '/app-development' },
			{ label: 'Websites for trades', href: '/websites-for-trades' },
			{ label: 'Automation ideas', href: '/articles/business-automation-ideas' }
		]
	},
	'clearcut-compliance': {
		slug: 'clearcut-compliance',
		path: '/portfolio/clearcut-compliance',
		group: 'client',
		title: 'ClearCut',
		metaTitle: 'ClearCut Case Study | Compliance Web App | Developmental',
		desc: 'A compliance platform for outdoor teams, built for RAMS templates, site checks, team access, subscriptions and branded PDF records.',
		category: 'Software',
		siteUrl: 'https://clearcutcompliance.com',
		image: clearcut,
		imageAlt: 'ClearCut compliance app mockup',
		imageStyle: 'mockup',
		summary: [
			'A compliance platform for tree surgeons, landscapers and forestry teams who need RAMS, checks and site paperwork without the usual admin drag.',
			'The product keeps repeat forms, team access, subscriptions and branded PDFs in one place, shaped around outdoor work and practical site records.'
		],
		problem: [
			'Outdoor teams need paperwork that reflects the reality of site work. Generic form systems can feel too broad, while manual documents are slow to repeat and easy to store badly.',
			'ClearCut needed a focused product experience for arborist and outdoor compliance workflows, with enough structure to support paying teams.'
		],
		solution: [
			'I built a subscription web app with secure accounts, team seats, arborist-focused RAMS templates, submissions, branded PDFs and a workflow that works from mobile devices.',
			'The structure keeps the product specific: create the right record, keep it attached to the job and make the finished document usable outside the app.'
		],
		outcome: [
			'ClearCut turns repeat compliance work into a productised workflow instead of a collection of editable documents.',
			'The result is easier to sell, easier to use in the field and better suited to teams who need consistent records without a heavy back-office process.'
		],
		services: ['Custom software', 'App development', 'Subscriptions', 'Compliance workflows'],
		tech: ['SvelteKit', 'JavaScript', 'Node', 'Supabase', 'PostgreSQL', 'Stripe', 'Playwright'],
		features: [
			'Secure Authentication & RLS',
			'User Seats & Roles',
			'Stripe Billing',
			'Arborist RAMS Templates',
			'Brandable PDF Generation',
			'Installable Web App',
			'Job Records & Submissions',
			'Mobile-First Site Workflow'
		],
		related: [
			{ label: 'Custom business software', href: '/custom-business-software' },
			{ label: 'App development', href: '/app-development' },
			{ label: 'Websites for trades', href: '/websites-for-trades' },
			{ label: 'When to build a custom app', href: '/articles/app-development-for-business-admin' }
		]
	},
	'wags-n-whiskers': {
		slug: 'wags-n-whiskers',
		path: '/portfolio/wags-n-whiskers',
		group: 'client',
		title: 'Wags n Whiskers',
		metaTitle: 'Wags n Whiskers Case Study | Pet Service Website | Developmental',
		desc: 'A custom pet service website with a bold visual style, fast pages, clear service content and simple enquiry routes.',
		category: 'Client Website',
		siteUrl: 'https://wagsnwhiskers.co',
		image: wags,
		imageAlt: 'Wags n Whiskers website mockup',
		imageStyle: 'mockup',
		summary: [
			'A custom website for Wags n Whiskers with a bold visual style, fast loading pages and clear routes into customer enquiries and service requests.',
			'It gives the brand a stronger online presence while making services, requests and customer information easy for visitors to find.'
		],
		problem: [
			'Pet service websites need to build trust quickly. Visitors want to understand the services, the personality behind the business and how to make an enquiry without digging around.',
			'The site needed to feel friendly and distinctive while staying practical enough for people checking it quickly on a phone.'
		],
		solution: [
			'I built a bespoke website with clear service content, direct contact routes, fast-loading pages and a visual style that gives the business more character than a generic template.',
			'The structure keeps the essentials visible: what is offered, who it is for and how to get started.'
		],
		outcome: [
			'The finished site gives Wags n Whiskers a clearer online home and a stronger route from visitor interest to enquiry.',
			'It also gives the brand a design direction that can be reused across content, service pages and future updates.'
		],
		services: ['Web design', 'Responsive development', 'SEO foundations', 'Enquiry forms'],
		tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'Mailgun'],
		features: [
			'Google Analytics',
			'E-mail Notifications',
			'Contact Form',
			'Bespoke Design',
			'SEO Optimisation',
			'Performance Optimisation'
		],
		related: [
			{ label: 'Websites for pet services', href: '/websites-for-pet-services' },
			{ label: 'Small business web design', href: '/small-business-web-design' },
			{ label: 'Website design basics', href: '/articles/website-design-branding-basics' },
			{ label: 'Website pages guide', href: '/articles/small-business-website-pages' }
		]
	},
	'scc-forms': {
		slug: 'scc-forms',
		path: '/portfolio/scc-forms',
		group: 'client',
		title: 'SCC',
		metaTitle: 'SCC Case Study | Digital Field Forms | Developmental',
		desc: 'A custom internal field workflow system for digital forms, signatures, calculations, PDF generation and cloud record storage.',
		category: 'Client Software',
		image: scc,
		imageAlt: 'SCC digital forms app mockup',
		imageStyle: 'mockup',
		summary: [
			'SCC needed a practical internal system to replace paper forms with simple digital workflows for teams working out in the field.',
			'Forms, signatures, calculations and PDFs are brought together so records are easier to complete, store and review later.'
		],
		problem: [
			'Paper forms and scattered documents make field records harder to complete consistently. They also create extra admin when records need to be filed, checked or sent on after the job.',
			'SCC needed a workflow that could handle structured form data, signatures and calculations without making the field team work around a desktop process.'
		],
		solution: [
			'I built a secure internal system with dynamic multi-step forms, digital signature capture, fatigue and HAVS calculators, generated PDFs and Dropbox uploads.',
			'The system is designed around mobile field use first, then turns the completed data into cleaner records for review and storage.'
		],
		outcome: [
			'SCC can complete more of the paperwork process digitally, with fewer manual steps between the field and the stored record.',
			'The result is a more consistent workflow for compliance-heavy tasks, while still keeping the interface practical for people using it on site.'
		],
		services: ['Custom software', 'Digital forms', 'PDF generation', 'Workflow automation'],
		tech: ['SvelteKit', 'JavaScript', 'Node', 'Supabase', 'PostgreSQL', 'Dropbox API', 'Puppeteer'],
		features: [
			'Secure Authentication & RLS',
			'Dynamic Multi-Step Forms',
			'Digital Signature Capture',
			'Automated PDF Generation',
			'Dropbox Cloud Uploads',
			'Fatigue and HAVS Calculators',
			'Compliance & Audit-Ready Records',
			'Mobile-First Field Workflow'
		],
		related: [
			{ label: 'Custom business software', href: '/custom-business-software' },
			{ label: 'App development', href: '/app-development' },
			{ label: 'Websites for trades', href: '/websites-for-trades' },
			{ label: 'Automation ideas', href: '/articles/business-automation-ideas' }
		]
	},
	'ai-journal': {
		slug: 'ai-journal',
		path: '/portfolio/ai-journal',
		group: 'personal',
		title: 'AI Journal',
		metaTitle: 'AI Journal Project | Developmental',
		desc: 'A calm journalling app with mood tracking, calendar views and AI summaries that turn everyday notes into useful prompts.',
		category: 'Project',
		image: journal,
		imageAlt: 'AI Journal app mockup',
		imageStyle: 'mockup',
		summary: [
			'A calm journalling app where users can record reflections, track mood and revisit previous entries through a simple calendar.',
			'AI summaries help turn everyday notes into useful prompts and action points without making the experience feel busy.'
		],
		problem: [
			'Journalling tools can become too heavy when they try to do everything. The useful part is often simple: write, reflect, notice patterns and come back to previous entries easily.',
			'The project needed to explore AI without letting the AI become the whole product.'
		],
		solution: [
			'I built a responsive journalling app with secure accounts, CRUD entries, mood tracking, calendar navigation and AI summaries.',
			'The AI layer is used as a support tool, turning entries into prompts and action points while keeping the core writing experience quiet.'
		],
		outcome: [
			'The project shows how AI can sit inside a product as a useful feature rather than a novelty.',
			'It also gave me a practical space to test product structure, account flows and AI-assisted content features in a focused interface.'
		],
		services: ['App development', 'AI-assisted features', 'Product design', 'Responsive UI'],
		tech: ['SvelteKit', 'JavaScript', 'Node', 'MongoDB', 'Tailwind CSS', 'DeepSeek AI'],
		features: [
			'Secure Authentication',
			'CRUD Journal Entries',
			'AI Summaries & Actions',
			'Mood Slider',
			'Calendar View',
			'Responsive UI'
		],
		related: [
			{ label: 'App development', href: '/app-development' },
			{ label: 'AI website guide', href: '/articles/ai-website-builder-small-business' },
			{ label: 'When to build a custom app', href: '/articles/app-development-for-business-admin' }
		]
	},
	'custom-ep-player': {
		slug: 'custom-ep-player',
		path: '/portfolio/custom-ep-player',
		group: 'personal',
		title: 'Custom EP Player',
		metaTitle: 'Custom EP Player Project | Developmental',
		desc: 'A bespoke interactive music player with custom track controls, audio filters, animation and Web Audio API feedback.',
		category: 'Project',
		image: lvm,
		imageAlt: 'Custom EP player mockup',
		imageStyle: 'mockup',
		summary: [
			'A bespoke music player built to give an electronic EP a more memorable, interactive and visually polished listening experience.',
			'Listeners can switch tracks, play with audio filters and see subtle visual feedback while the music plays.'
		],
		problem: [
			'Standard embedded players are useful, but they rarely feel connected to the artwork, sound or mood of a release.',
			'The project needed a more distinctive listening experience without making the controls confusing.'
		],
		solution: [
			'I built a custom web player with track selection, play controls, Web Audio API filters, frequency analysis and subtle animation.',
			'The interface keeps the expected controls visible while adding a more tactile layer around the music.'
		],
		outcome: [
			'The result is a more memorable way to present a short music release online.',
			'It also works as a useful example of how interaction, motion and sound can support a creative web experience without needing a large app.'
		],
		services: ['Interactive design', 'Frontend development', 'Audio UI', 'Creative web'],
		tech: ['Svelte', 'CSS', 'HTML', 'JavaScript', 'Web Audio API'],
		features: [
			'Audio Play/Stop',
			'Track Select',
			'Frequency Analyser',
			'Hi-Pass Filter',
			'Lo-Pass Filter',
			'Subtle Animation'
		],
		related: [
			{ label: 'Website design basics', href: '/articles/website-design-branding-basics' },
			{ label: 'Small business web design', href: '/small-business-web-design' },
			{ label: 'View services', href: '/services' }
		]
	}
};

export const caseStudyList = Object.values(caseStudies);
export const clientCaseStudies = caseStudyList.filter((study) => study.group === 'client');
export const personalCaseStudies = caseStudyList.filter((study) => study.group === 'personal');

export const caseStudyMeta = Object.fromEntries(
	caseStudyList.map((study) => [
		study.path,
		{
			title: study.metaTitle,
			desc: study.desc,
			ogType: 'article',
			image: study.image
		}
	])
);
