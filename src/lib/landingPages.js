const websitePricingFaqs = [
	{
		question: 'How much does a small business website start from?',
		answer:
			'A typical website for a service-based business starts from £500. That usually covers a clean, responsive website with core pages, clear content structure, basic SEO foundations, a contact route and launch checks.'
	},
	{
		question: 'What can increase the price?',
		answer:
			'The price can increase with extra pages, deeper SEO setup, custom branding elements, copywriting, booking or payment functionality, integrations, unusual layouts or anything that needs more custom development.'
	},
	{
		question: 'How is payment usually handled?',
		answer:
			'For typical website projects, payment is usually split half up front and half on completion. Payment plans can also be discussed where that makes more sense for the project.'
	},
	{
		question: 'How does this compare with agency pricing?',
		answer:
			'UK agency-built small business websites are commonly priced in the low-thousands, and regional agency projects are often several thousand pounds once strategy, project management, design, build and revisions are included. Working directly with a freelance developer can keep the cost lower for a focused service-business website.'
	},
	{
		question: 'Do custom apps use the same pricing?',
		answer:
			'No. Custom apps, portals and specialist business tools depend much more on the workflow, user roles, payments, data, integrations and admin features. For those, it is better to talk through the shape of the project first.'
	},
	{
		question: 'Do you offer support after launch?',
		answer:
			'Yes. Maintenance and support plans are available for ongoing development work, security monitoring, bug fixing, updates and practical improvements after the site is live.'
	}
];

const setupFaqs = [
	{
		question: 'Can you help with domain setup?',
		answer:
			'Yes. I can help connect a domain to the website, check DNS records, handle redirects where needed and make sure the launch basics are not left half-finished.'
	},
	{
		question: 'Can you set up business email?',
		answer:
			'Yes. I can help with business email setup and the DNS records that email needs, such as MX, SPF, DKIM and DMARC where appropriate.'
	},
	{
		question: 'Where does Google Business Profile fit?',
		answer:
			'Google Business Profile sits closest to local SEO. It helps local businesses show clear contact details, service areas, opening information and links back to the website.'
	}
];

const supportFaqs = [
	{
		question: 'What can a website support plan include?',
		answer:
			'A support plan can cover bug fixing, small design or content updates, performance checks, security monitoring, analytics checks, SEO improvements and practical development work after launch.'
	},
	{
		question: 'Is maintenance only for websites you built?',
		answer:
			'No. Existing websites can be reviewed first, then support can be planned around what the site needs and how it is currently built.'
	},
	{
		question: 'Can support include ongoing development?',
		answer:
			'Yes. Support can include new features, small improvements, conversion fixes, technical cleanup and keeping the site aligned with how the business changes over time.'
	},
	{
		question: 'Can support be ad hoc instead of monthly?',
		answer:
			'Yes. Some businesses need a monthly support plan, while others only need occasional help with updates, fixes or improvements.'
	}
];

export const landingPages = {
	'small-business-web-design': {
		path: '/small-business-web-design',
		title: 'Small Business Web Design | Developmental',
		desc: 'Custom small business web design for businesses that need a fast, modern website built around clear content, strong usability and practical goals.',
		heading: '/small-business-web-design',
		visualType: 'laptop',
		intro:
			'Custom websites for small businesses that need to look credible, load quickly and make it easy for people to take the next step.',
		body: [
			'I design and build websites around your business, not around a template. The focus is simple structure, clear messaging, fast performance and a design that feels like it belongs to your brand.',
			'That usually means a clean homepage, service pages, contact routes, basic SEO foundations and a site you can keep improving over time. No bloated agency process, just a practical website that does its job.'
		],
		sections: [
			{
				title: 'What this suits',
				items: ['New small businesses', 'Service businesses', 'Local trades', 'Solo founders']
			},
			{
				title: 'What I focus on',
				items: [
					'Clear page structure',
					'Fast loading pages',
					'Mobile-first layouts',
					'Simple enquiry routes'
				]
			}
		],
		pricing: {
			title: 'Typical websites start from £500',
			body: [
				'For a straightforward service-based business website, pricing starts from £500. That usually suits a clear, practical site with the main pages, mobile responsive build, basic SEO foundations, contact route and launch checks.',
				'The price can increase when the project needs deeper SEO setup, custom branding elements, additional pages, copywriting, integrations, booking or payment flows, or more bespoke functionality.'
			],
			items: [
				'Core page structure',
				'Responsive build',
				'Basic SEO setup',
				'Contact route',
				'Launch checks'
			]
		},
		faqs: websitePricingFaqs,
		related: [
			{ label: 'View services', href: '/services' },
			{ label: 'See portfolio', href: '/portfolio' },
			{ label: 'Website pricing', href: '/website-pricing' },
			{ label: 'Domain, email & local setup', href: '/domain-email-google-business-setup' },
			{ label: 'Website design basics', href: '/articles/website-design-branding-basics' },
			{ label: 'AI website guide', href: '/articles/ai-website-builder-small-business' },
			{ label: 'Website pages guide', href: '/articles/small-business-website-pages' },
			{ label: 'Website cost guide', href: '/articles/small-business-website-cost' }
		],
		ctaHeading: 'Need a small business website that feels properly yours?'
	},
	'website-pricing': {
		path: '/website-pricing',
		title: 'Website Pricing for Small Businesses | Developmental',
		desc: 'Small business website pricing from £500 for typical service business websites, with guidance on what affects cost, ongoing support and custom app pricing.',
		heading: '/website-pricing',
		visualType: 'poundCoin',
		intro:
			'Clear starting prices for small business websites, without pretending every project is exactly the same.',
		body: [
			'A typical website for a service-based business starts from £500. That is intended for businesses that need a clean, useful website with the core structure in place and a clear route for people to enquire.',
			'Some projects stay close to that starting point. Others need more content, SEO setup, branding, integrations or custom functionality. The useful thing is to know what is included, what changes the scope and when a proper conversation is needed.'
		],
		sections: [
			{
				title: 'Usually included',
				items: ['Core pages', 'Responsive build', 'Basic SEO', 'Contact route']
			},
			{
				title: 'Can increase with',
				items: ['Extra pages', 'Copywriting', 'Branding', 'Custom features']
			}
		],
		pricing: {
			title: 'New service business websites from £500',
			body: [
				'A typical starter website can include a homepage, service content, about or trust content, contact route, mobile responsive layout, basic metadata, simple internal links and launch checks.',
				'For context, published UK pricing guides commonly put agency-built small business websites in the low-thousands, with regional agency projects often several thousand pounds once strategy, project management, design, build and revisions are included.',
				'Payment is typically split half up front and half on completion. Payment plans can be discussed as an option where that makes more sense for the project.',
				'Ad-hoc support such as design tweaks, copywriting, domain setup, business email setup or Google Business Profile help can be handled separately when a full website project is not needed.'
			],
			items: [
				'Good for service businesses',
				'Simple and practical scope',
				'Optional SEO setup',
				'Optional support plan'
			]
		},
		faqs: websitePricingFaqs,
		related: [
			{ label: 'Small business web design', href: '/small-business-web-design' },
			{ label: 'Website cost guide', href: '/articles/small-business-website-cost' },
			{ label: 'Domain, email & local setup', href: '/domain-email-google-business-setup' },
			{ label: 'Custom business software', href: '/custom-business-software' }
		],
		ctaHeading: 'Want to talk through what your website would cost?'
	},
	'website-support-maintenance': {
		path: '/website-support-maintenance',
		title: 'Website Support & Maintenance | Developmental',
		desc: 'Website support and maintenance for small businesses that need updates, bug fixes, performance checks, SEO improvements and ongoing development help.',
		heading: '/website-support',
		visualType: 'laptop',
		intro:
			'Website support and maintenance for businesses that want the site to keep working after launch.',
		body: [
			'A website is not finished just because it is live. Content changes, small bugs, tracking checks, performance issues, SEO improvements and new business needs all appear over time.',
			'I can help keep a website useful with practical support: small updates, bug fixing, technical checks, conversion improvements and ongoing development when the business needs more than a one-off build.'
		],
		sections: [
			{
				title: 'Support work',
				items: ['Bug fixes', 'Content updates', 'SEO improvements', 'Performance checks']
			},
			{
				title: 'Ongoing help',
				items: ['Small features', 'Analytics checks', 'Security monitoring', 'Technical cleanup']
			}
		],
		pricing: {
			title: 'Flexible support after launch',
			body: [
				'Support can be handled as occasional ad-hoc work or as an ongoing plan where the website needs regular attention.',
				'The right setup depends on the site, the business and how often changes are likely to be needed. A simple site might only need occasional updates, while a custom app or busy local business site may benefit from more regular checks and improvements.'
			],
			items: ['Ad-hoc support', 'Monthly maintenance', 'Improvement work', 'Post-launch checks']
		},
		faqs: supportFaqs,
		related: [
			{ label: 'Website pricing', href: '/website-pricing' },
			{ label: 'Website audit & SEO', href: '/website-audit-seo' },
			{ label: 'Small business web design', href: '/small-business-web-design' },
			{ label: 'Custom business software', href: '/custom-business-software' },
			{ label: 'Website audit checklist', href: '/articles/website-audit-checklist' }
		],
		ctaHeading: 'Need ongoing support for your website?'
	},
	'website-audit-seo': {
		path: '/website-audit-seo',
		title: 'Website Audit & SEO Services | Developmental',
		desc: 'Website audits and SEO support for small businesses that need clearer fixes for performance, search visibility, content structure and conversions.',
		heading: '/website-audit-seo',
		visualType: 'auditSeo',
		intro:
			'Website audits for businesses that already have a site, but know it is not working as well as it should.',
		body: [
			'I review the useful parts: page structure, performance, technical SEO, metadata, content clarity, mobile usability, local visibility signals and the route from visitor to enquiry.',
			'The aim is not to hand over a vague report. It is to show you what is holding the site back, what is worth fixing first and which changes are likely to make the biggest difference.'
		],
		sections: [
			{
				title: 'Useful for',
				items: ['Slow websites', 'Low enquiry rates', 'Thin page content', 'Poor local visibility']
			},
			{
				title: 'Checks include',
				items: ['Metadata', 'Internal links', 'Page speed', 'Google Business Profile']
			}
		],
		faqs: [
			{
				question: 'What does a website audit check?',
				answer:
					'It can cover page structure, metadata, performance, mobile usability, technical SEO, content gaps, internal links, local signals and the route from visitor to enquiry.'
			},
			{
				question: 'Does this include Google Business Profile?',
				answer:
					'Where local visibility matters, yes. A Google Business Profile can be reviewed alongside the website so the business details, service areas and website links are consistent.'
			},
			{
				question: 'Can you fix the issues after the audit?',
				answer:
					'Yes. The audit can be a standalone review, or it can lead into practical fixes, content improvements, technical cleanup or an ongoing support plan.'
			}
		],
		related: [
			{ label: 'View services', href: '/services' },
			{ label: 'Small business web design', href: '/small-business-web-design' },
			{ label: 'Domain, email & local setup', href: '/domain-email-google-business-setup' },
			{ label: 'Website audit checklist', href: '/articles/website-audit-checklist' },
			{ label: 'Local SEO basics', href: '/articles/local-seo-small-business' }
		],
		ctaHeading: 'Want a clearer picture of what your website needs?'
	},
	'domain-email-google-business-setup': {
		path: '/domain-email-google-business-setup',
		title: 'Domain, Email & Google Business Profile Setup | Developmental',
		desc: 'Domain setup, business email, DNS records, website launch support and Google Business Profile setup for small businesses that need the practical foundations handled properly.',
		heading: '/website-setup',
		visualType: 'setupRoute',
		intro:
			'Practical website setup support for the bits around a site that still need to work properly.',
		body: [
			'A website does not sit on its own. Domains, DNS records, business email, tracking, redirects and local profile details all affect how professional the business looks and how easy it is to find.',
			'I can help set up or tidy the essentials so your website launch is not held back by disconnected accounts, broken records, missing email routes or an unfinished Google Business Profile.'
		],
		sections: [
			{
				title: 'Setup support',
				items: ['Domain setup', 'Business email', 'DNS records', 'Launch checks']
			},
			{
				title: 'Local visibility',
				items: ['Google Business Profile', 'Contact details', 'Service areas', 'Tracking basics']
			}
		],
		faqs: setupFaqs,
		related: [
			{ label: 'Small business web design', href: '/small-business-web-design' },
			{ label: 'Website audit & SEO', href: '/website-audit-seo' },
			{ label: 'Local business websites', href: '/websites-for-local-businesses' },
			{ label: 'Local SEO basics', href: '/articles/local-seo-small-business' }
		],
		ctaHeading: 'Need the setup side of your website handled properly?'
	},
	'custom-business-software': {
		path: '/custom-business-software',
		title: 'Custom Business Software | Developmental',
		desc: 'Custom business software, web tools and workflow automation for small businesses that need practical systems built around the way they work.',
		heading: '/custom-business-software',
		visualType: 'spinningCog',
		intro:
			'Custom web tools for businesses that are still relying on spreadsheets, paper forms or awkward admin workarounds.',
		body: [
			'I build practical systems for the jobs that slow a business down: form workflows, quote tools, invoice generators, PDF output, dashboards, customer portals and internal apps.',
			'The best custom software is usually focused. It solves a specific process, removes repeat admin and gives your team something simple enough to use every day.'
		],
		sections: [
			{
				title: 'Examples',
				items: ['Quote calculators', 'Digital forms', 'PDF generators', 'Customer portals']
			},
			{
				title: 'Built around',
				items: ['Your workflow', 'Mobile use', 'Secure access', 'Useful automation']
			}
		],
		faqs: [
			{
				question: 'How is custom software priced?',
				answer:
					'Custom software depends on the workflow, users, data, integrations, payments, admin features and ongoing support needs. It is better to scope it properly rather than force it into a generic website price.'
			},
			{
				question: 'Can you start with a small version first?',
				answer:
					'Yes. The best custom tools often start with one high-value workflow, then grow once the useful shape is clear.'
			},
			{
				question: 'Do you provide ongoing support?',
				answer:
					'Yes. Support plans can cover ongoing development, bug fixing, security monitoring, small improvements and keeping the tool aligned with how the business works.'
			}
		],
		related: [
			{ label: 'View portfolio', href: '/portfolio' },
			{ label: 'SiteRecs case study', href: '/portfolio/siterecs' },
			{ label: 'SCC case study', href: '/portfolio/scc-forms' },
			{ label: 'App development', href: '/app-development' },
			{ label: 'Automation ideas', href: '/articles/business-automation-ideas' }
		],
		ctaHeading: 'Got a process that needs turning into a proper tool?'
	},
	'app-development': {
		path: '/app-development',
		title: 'App Development for Small Businesses | Developmental',
		desc: 'Custom progressive web app development for small businesses that need installable apps for payments, user accounts, admin and workflows.',
		heading: '/app-development',
		visualType: 'phone',
		intro:
			'Custom app development for businesses that need a proper tool for payments, users, admin and day-to-day workflows.',
		body: [
			'I build progressive web apps that can be installed to a device as well as used from the browser, giving you the benefits of a native app with the compatibility and reach of a website.',
			'That could mean taking payments, managing users, speeding up admin, handling bookings, generating PDFs, building portals or turning a repeat business process into something faster and easier to run.'
		],
		sections: [
			{
				title: 'Good for',
				items: ['Payments', 'User accounts', 'Admin tools', 'Client portals']
			},
			{
				title: 'Typical features',
				items: ['Installable app', 'Secure accounts', 'Stripe payments', 'Workflow automation']
			}
		],
		faqs: [
			{
				question: 'What is a progressive web app?',
				answer:
					'A progressive web app is an app-style website that can be used in the browser and, where supported, installed to a device. It can support accounts, payments, admin tools and custom workflows.'
			},
			{
				question: 'How much does a custom app cost?',
				answer:
					'Custom app pricing depends on the features, users, payments, data, integrations and admin tools involved. A quick conversation is usually the right starting point.'
			},
			{
				question: 'Can you maintain the app after launch?',
				answer:
					'Yes. Ongoing support can cover bug fixing, security monitoring, new features, performance improvements and practical development work after launch.'
			}
		],
		related: [
			{ label: 'Custom business software', href: '/custom-business-software' },
			{ label: 'SiteRecs case study', href: '/portfolio/siterecs' },
			{ label: 'ClearCut case study', href: '/portfolio/clearcut-compliance' },
			{ label: 'When to build a custom app', href: '/articles/app-development-for-business-admin' }
		],
		ctaHeading: 'Need a custom app for your business?'
	},
	'websites-for-trades': {
		path: '/websites-for-trades',
		title: 'Websites for Trades | Developmental',
		desc: 'Websites and web tools for tradespeople and contractors who need clear services, local visibility, enquiries and practical job workflows.',
		heading: '/websites-for-trades',
		visualType: 'laptop',
		intro:
			'Websites for tradespeople who need to show what they do, where they work and why customers should get in touch.',
		body: [
			'Trade websites need to be clear quickly. People want to see services, locations, examples of work, contact details and signs that the business is reliable.',
			'I can also build practical tools around the website, such as quote forms, job paperwork, RAMS workflows, PDF generation and customer enquiry systems.'
		],
		sections: [
			{
				title: 'Useful pages',
				items: ['Services', 'Areas covered', 'Recent work', 'Contact']
			},
			{
				title: 'Helpful tools',
				items: ['Quote forms', 'Job forms', 'PDF output', 'Mobile workflows']
			}
		],
		related: [
			{ label: 'Custom business software', href: '/custom-business-software' },
			{ label: 'SiteRecs case study', href: '/portfolio/siterecs' },
			{ label: 'ClearCut case study', href: '/portfolio/clearcut-compliance' },
			{ label: 'Small business web design', href: '/small-business-web-design' },
			{ label: 'Automation ideas', href: '/articles/business-automation-ideas' }
		],
		ctaHeading: 'Need a trade website that makes enquiries easier?'
	},
	'websites-for-pet-services': {
		path: '/websites-for-pet-services',
		title: 'Websites for Pet Services | Developmental',
		desc: 'Websites for dog walkers, pet sitters, groomers and pet service businesses that need clear services, trust signals and easy enquiry routes.',
		heading: '/websites-for-pet-services',
		visualType: 'laptop',
		intro:
			'Websites for pet service businesses that need to feel friendly, trustworthy and easy to use.',
		body: [
			'Pet service websites need to answer simple questions quickly: what you offer, where you cover, how enquiries work and whether people can trust you with their pets.',
			'I build sites with clear service pages, enquiry routes, useful content and a design that supports your brand without making the site feel cluttered.'
		],
		sections: [
			{
				title: 'Useful for',
				items: ['Dog walkers', 'Pet sitters', 'Groomers', 'Pet care brands']
			},
			{
				title: 'Page priorities',
				items: ['Services', 'Reviews', 'Areas covered', 'Enquiry forms']
			}
		],
		related: [
			{ label: 'Wags n Whiskers case study', href: '/portfolio/wags-n-whiskers' },
			{ label: 'Small business web design', href: '/small-business-web-design' },
			{ label: 'Website pages guide', href: '/articles/small-business-website-pages' }
		],
		ctaHeading: 'Need a pet service website that brings in better enquiries?'
	},
	'websites-for-local-businesses': {
		path: '/websites-for-local-businesses',
		title: 'Websites for Local Businesses | Developmental',
		desc: 'Websites for local businesses that need better search visibility, clearer services, stronger trust signals and simple contact routes.',
		heading: '/websites-for-local-businesses',
		visualType: 'laptop',
		intro:
			'Local business websites built to make services, locations and contact routes easy to find.',
		body: [
			'A good local business website should make the basics obvious: what you do, where you work, who you help and how someone can contact you.',
			'I build clean, fast websites with sensible page structure, local content, internal links and practical setup foundations, including Google Business Profile support where it is relevant.'
		],
		sections: [
			{
				title: 'Core pages',
				items: ['Home', 'Services', 'Locations', 'Contact']
			},
			{
				title: 'Local signals',
				items: ['Service area copy', 'Clear contact details', 'Google profile', 'Internal links']
			}
		],
		faqs: [
			{
				question: 'Do local businesses need a Google Business Profile?',
				answer:
					'For many local businesses, yes. It supports local visibility, gives customers clear contact information and helps connect searches, maps and the website.'
			},
			{
				question: 'Can you help with local setup as well as the website?',
				answer:
					'Yes. Domain setup, business email, DNS records, tracking basics and Google Business Profile setup can be handled alongside the website where they are relevant.'
			},
			{
				question: 'How much does a local business website start from?',
				answer:
					'A typical service-based business website starts from £500, with the final price depending on page count, content, SEO setup, branding and any extra functionality.'
			}
		],
		related: [
			{ label: 'Web design in Sandiacre', href: '/web-design-sandiacre' },
			{ label: 'Web design in Nottingham', href: '/web-design-nottingham' },
			{ label: 'Domain, email & local setup', href: '/domain-email-google-business-setup' },
			{ label: 'Local SEO basics', href: '/articles/local-seo-small-business' }
		],
		ctaHeading: 'Need a local business website that is easier to find?'
	},
	'web-design-sandiacre': {
		path: '/web-design-sandiacre',
		title: 'Web Design in Sandiacre | Developmental',
		desc: 'Freelance web design in Sandiacre for small businesses that need modern websites, local search foundations and direct support.',
		heading: '/web-design-sandiacre',
		visualType: 'laptop',
		intro:
			'Freelance web design in Sandiacre for small businesses that want a practical, modern website without the agency feel.',
		body: [
			'I am currently based in Sandiacre, working with small businesses that need websites, web apps, audits and custom digital tools.',
			'That local context helps when a site needs to speak clearly to nearby customers across Sandiacre, Stapleford, Long Eaton, Ilkeston, Beeston, Nottingham, Derby and the wider East Midlands.'
		],
		sections: [
			{
				title: 'Local work',
				items: ['Web design', 'Website audits', 'Custom tools', 'Ongoing updates']
			},
			{
				title: 'Nearby areas',
				items: ['Sandiacre', 'Stapleford', 'Long Eaton', 'Ilkeston']
			}
		],
		related: [
			{ label: 'UK web design', href: '/web-design-uk' },
			{ label: 'Web design near Sandiacre', href: '/web-design-near-sandiacre' },
			{ label: 'East Midlands web design', href: '/web-design-east-midlands' },
			{ label: 'Web design in Nottingham', href: '/web-design-nottingham' },
			{ label: 'Local SEO basics', href: '/articles/local-seo-small-business' }
		],
		ctaHeading: 'Need a local web developer near Sandiacre?'
	},
	'web-design-near-sandiacre': {
		path: '/web-design-near-sandiacre',
		title: 'Web Design Near Sandiacre | Erewash, Broxtowe & Nottingham',
		desc: 'Freelance web design near Sandiacre for businesses in nearby Erewash, Broxtowe, Nottingham and Derby areas.',
		heading: '/web-design-near-sandiacre',
		visualType: 'laptop',
		intro:
			'Web design near Sandiacre for local businesses across the surrounding Nottinghamshire and Derbyshire towns.',
		body: [
			'Sandiacre sits on the Derbyshire and Nottinghamshire border, so the most relevant local area is wider than the village itself. I cover nearby towns and suburbs including Stapleford, Long Eaton, Ilkeston, Beeston, Toton, Sawley, Breaston, Draycott and Borrowash.',
			'Rather than creating lots of near-identical location pages, this page keeps the local coverage in one place: useful for businesses around Erewash, Broxtowe, Nottingham, Derby and the M1/A52 corridor that need a clear website, audit or custom web tool.'
		],
		sections: [
			{
				title: 'Closest areas',
				items: ['Sandiacre', 'Stapleford', 'Long Eaton', 'Ilkeston']
			},
			{
				title: 'Nearby towns',
				items: ['Beeston', 'Toton', 'Sawley', 'Breaston']
			},
			{
				title: 'Wider coverage',
				items: ['Draycott', 'Borrowash', 'Risley', 'West Hallam']
			},
			{
				title: 'City links',
				items: ['Nottingham', 'Derby', 'Broxtowe', 'Erewash']
			}
		],
		faqs: [
			{
				question: 'Which places near Sandiacre do you cover?',
				answer:
					'I cover Sandiacre, Stapleford, Long Eaton, Ilkeston, Beeston, Toton, Sawley, Breaston, Draycott, Borrowash, Risley, West Hallam and nearby Nottingham or Derby areas.'
			},
			{
				question: 'Why not make a separate web design page for every town?',
				answer:
					'Separate pages only make sense when they can add genuinely specific local detail. For nearby towns around Sandiacre, one stronger area page is cleaner, easier to maintain and less likely to feel like thin SEO content.'
			},
			{
				question: 'Can you work with businesses outside this area?',
				answer:
					'Yes. Local work around Sandiacre is useful for nearby businesses, but most website design, development, audit and support work can also be handled remotely across the UK.'
			}
		],
		related: [
			{ label: 'Web design in Sandiacre', href: '/web-design-sandiacre' },
			{ label: 'Websites for local businesses', href: '/websites-for-local-businesses' },
			{ label: 'East Midlands web design', href: '/web-design-east-midlands' },
			{ label: 'Local SEO basics', href: '/articles/local-seo-small-business' }
		],
		ctaHeading: 'Need a website for a business near Sandiacre?'
	},
	'web-design-uk': {
		path: '/web-design-uk',
		title: 'Remote Web Design in the UK | Developmental',
		desc: 'Remote freelance web design across the UK for small businesses that need modern websites, web apps, audits and custom digital tools.',
		heading: '/web-design-uk',
		visualType: 'laptop',
		intro:
			'Remote web design across the UK for small businesses that need clear websites and practical web tools.',
		body: [
			'I am based in Sandiacre, but most web design and development work can be handled remotely with clear communication, simple reviews and practical handover.',
			'This is useful if you need a custom website, progressive web app, audit or business tool, but do not need a local agency meeting process to get it done properly.'
		],
		sections: [
			{
				title: 'Remote work',
				items: ['Web design', 'Web apps', 'SEO audits', 'Custom tools']
			},
			{
				title: 'Good for',
				items: ['UK businesses', 'Solo founders', 'Service teams', 'Growing projects']
			}
		],
		related: [
			{ label: 'Small business web design', href: '/small-business-web-design' },
			{ label: 'Custom business software', href: '/custom-business-software' },
			{ label: 'Website cost guide', href: '/articles/small-business-website-cost' }
		],
		ctaHeading: 'Need a UK web developer who can work remotely?'
	},
	'web-design-east-midlands': {
		path: '/web-design-east-midlands',
		title: 'Web Design in the East Midlands | Developmental',
		desc: 'Freelance web design across the East Midlands for small businesses that need fast websites, clear content and practical digital tools.',
		heading: '/web-design-east-midlands',
		visualType: 'laptop',
		intro:
			'Web design across the East Midlands for small businesses that need a clearer online presence.',
		body: [
			'I work with businesses around the East Midlands, including Derby, Nottingham and the surrounding towns, building websites and web tools that are clean, fast and easy to use.',
			'The focus stays practical: strong service pages, clear local signals, useful internal links, sensible SEO foundations and direct communication from start to launch.'
		],
		sections: [
			{
				title: 'Services',
				items: ['Web design', 'App development', 'SEO audits', 'Custom software']
			},
			{
				title: 'Areas',
				items: ['East Midlands', 'Derby', 'Nottingham', 'Sandiacre']
			}
		],
		related: [
			{ label: 'UK web design', href: '/web-design-uk' },
			{ label: 'Web design in Derby', href: '/web-design-derby' },
			{ label: 'Web design in Nottingham', href: '/web-design-nottingham' },
			{ label: 'Local SEO basics', href: '/articles/local-seo-small-business' }
		],
		ctaHeading: 'Need a website built for an East Midlands business?'
	},
	'web-design-derby': {
		path: '/web-design-derby',
		title: 'Web Design in Derby | Developmental',
		desc: 'Freelance web design for Derby businesses that need modern websites, practical SEO foundations and clear enquiry routes.',
		heading: '/web-design-derby',
		visualType: 'laptop',
		intro:
			'Web design for Derby businesses that need a clean site, clear content and a better route into enquiries.',
		body: [
			'I build websites for small businesses near Derby and across the surrounding area, with a focus on speed, structure and content that explains the business clearly.',
			'Whether you need a new site, a website audit or a custom web tool, the aim is to build something useful, easy to maintain and shaped around your goals.'
		],
		sections: [
			{
				title: 'Useful for',
				items: ['Derby businesses', 'Service providers', 'Trades', 'Local teams']
			},
			{
				title: 'Priorities',
				items: ['Local SEO', 'Fast pages', 'Clear services', 'Simple contact']
			}
		],
		related: [
			{ label: 'UK web design', href: '/web-design-uk' },
			{ label: 'East Midlands web design', href: '/web-design-east-midlands' },
			{ label: 'Websites for trades', href: '/websites-for-trades' },
			{ label: 'Website audit checklist', href: '/articles/website-audit-checklist' }
		],
		ctaHeading: 'Need a Derby business website that works harder?'
	},
	'web-design-nottingham': {
		path: '/web-design-nottingham',
		title: 'Web Design in Nottingham | Developmental',
		desc: 'Freelance web design for Nottingham businesses that need fast, modern websites, practical SEO and custom web development support.',
		heading: '/web-design-nottingham',
		visualType: 'laptop',
		intro:
			'Web design for Nottingham businesses that need a modern website with clear structure and practical SEO foundations.',
		body: [
			'I build clean, fast websites and web apps for small businesses around Nottingham, Sandiacre and the wider East Midlands.',
			'The work can be a straightforward business website, a more advanced app-style build or a focused audit to improve what you already have.'
		],
		sections: [
			{
				title: 'Support for',
				items: ['New websites', 'Redesigns', 'Web apps', 'SEO audits']
			},
			{
				title: 'Built with',
				items: ['Clear copy', 'Responsive layouts', 'Fast loading', 'Direct support']
			}
		],
		related: [
			{ label: 'UK web design', href: '/web-design-uk' },
			{ label: 'Web design in Sandiacre', href: '/web-design-sandiacre' },
			{ label: 'App development', href: '/app-development' },
			{ label: 'Website redesign checklist', href: '/articles/website-redesign-checklist' }
		],
		ctaHeading: 'Need a Nottingham business website that feels clear and polished?'
	}
};

export const landingPagePaths = Object.values(landingPages).map((page) => page.path);

export const landingPageMeta = Object.fromEntries(
	Object.values(landingPages).map((page) => [
		page.path,
		{
			title: page.title,
			desc: page.desc,
			ogType: 'website'
		}
	])
);
