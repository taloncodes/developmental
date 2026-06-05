const eventNames = {
	contactFormSubmit: 'contact_form_submit',
	emailClick: 'email_click',
	phoneClick: 'phone_click',
	mainCtaClick: 'main_cta_click'
};

export function trackConversion(eventName, params = {}) {
	if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

	window.gtag('event', eventName, {
		event_category: 'conversion',
		...params
	});
}

export function trackContactLinkClick(link) {
	const href = link?.getAttribute('href') ?? '';

	if (href.startsWith('mailto:')) {
		trackConversion(eventNames.emailClick, {
			link_url: href,
			link_text: link.textContent?.trim() || link.getAttribute('aria-label') || 'email'
		});
	}

	if (href.startsWith('tel:')) {
		trackConversion(eventNames.phoneClick, {
			link_url: href,
			link_text: link.textContent?.trim() || link.getAttribute('aria-label') || 'phone'
		});
	}
}

export function trackMainCta(label, location) {
	trackConversion(eventNames.mainCtaClick, {
		cta_label: label,
		cta_location: location
	});
}

export { eventNames };
