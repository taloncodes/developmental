<script>
  import '../../app.css';
  import '../../app.scss'
  import Form from '../../components/Form.svelte';
  import { tick } from 'svelte';
  import { onMount } from 'svelte';
  import wags from '$lib/demo/wags.png';
  import journal from '$lib/demo/journal.png';
  import scc from '$lib/demo/scc.png';
  import siterecs from '$lib/demo/siterecs.png';
  import clearcut from '$lib/demo/clearcut-compliance.png';
  import { fadeOnScroll } from '$lib/fadeOnScroll';  // ✅ added

  let modalOpen = $state(false);
  let scrollFill = $state(0);
  const marqueeCopies = Array.from({ length: 8 }, (_, index) => index);

  let clients = $state([
    {
      count: 1,
      id: 'siterecs',
      title: 'SiteRecs',
      category: 'Client Showcase',
      siteUrl: 'https://siterecs.com',
      contentHtml:`
        <span class="block">
          A digital RAMS and paperwork platform for trade contractors. SiteRecs helps teams create RAMS, complete checks, collect signatures, and keep job records together.
        </span>

        <span class="block">
          Built with a focus on field usability and simple office admin. Secure access, Stripe billing, and branded PDF generation keep everything running smoothly.
        </span>
      `,
      image: siterecs,
      tech: [
        'SvelteKit',
        'JavaScript',
        'Node',
        'Supabase',
        'PostgreSQL',
        'Stripe',
        'Playwright'
      ],
      features: [
        'Secure Authentication & RLS',
        'User Seats & Roles',
        'Stripe Billing',
        'RAMS Builder & Library',
        'Brandable PDF Generation',
        'Digital Signatures',
        'Job-Centric Paperwork',
        'Mobile-First Trade Workflow'
      ]
    },
    {
      count: 2,
      id: 'clearcut-compliance',
      title: 'ClearCut',
      category: 'Client Showcase',
      siteUrl: 'https://clearcutcompliance.com',
      contentHtml:`
        <span class="block">
          A compliance platform for tree surgeons, landscapers and forestry teams who need RAMS, checks and site paperwork without the usual admin drag.
        </span>

        <span class="block">
          The product keeps repeat forms, team access, subscriptions and branded PDFs in one place, shaped around outdoor work and practical site records.
        </span>
      `,
      image: clearcut,
      tech: [
        'SvelteKit',
        'JavaScript',
        'Node',
        'Supabase',
        'PostgreSQL',
        'Stripe',
        'Playwright'
      ],
      features: [
        'Secure Authentication & RLS',
        'User Seats & Roles',
        'Stripe Billing',
        'Arborist RAMS Templates',
        'Brandable PDF Generation',
        'Installable Web App',
        'Job Records & Submissions',
        'Mobile-First Site Workflow'
      ]
    },
    {
      count: 3,
      id: 'wags-n-whiskers',
      title: 'Wags n Whiskers',
      category: 'Client Showcase',
      siteUrl: 'https://wagsnwhiskers.co',
      contentHtml: `
        <span class="block">
          A custom website for
          <a class="link" href="https://wagsnwhiskers.co" target="_blank" rel="noopener">
            Wags n Whiskers
          </a>
          with a bold visual style, fast loading pages and clear routes into customer enquiries and service requests.
        </span>

        <span class="block">
          It gives the brand a stronger online presence while making services, requests and customer information easy for visitors to find.
        </span>
      `,
      image: wags,
      tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'Mailgun'],
      features: ['Google Analytics', 'E-mail Notifications', 'Contact Form', 'Bespoke Design', 'SEO Optimisation', 'Performance Optimisation']
    },
    {
      count: 4,
      id: 'scc_forms',
      title: 'SCC',
      category: 'Client Showcase',
      contentHtml:`
        <span class="block">
          SCC needed a practical internal system to replace paper forms with simple digital workflows for teams working out in the field.
        </span>

        <span class="block">
          Forms, signatures, calculations and PDFs are brought together so records are easier to complete, store and review later.
        </span>
      `,
      image: scc,
      tech: [
        'SvelteKit',
        'JavaScript',
        'Node',
        'Supabase',
        'PostgreSQL',
        'Dropbox API',
        'Puppeteer'
      ],
      features: [
        'Secure Authentication & RLS',
        'Dynamic Multi-Step Forms',
        'Digital Signature Capture',
        'Automated PDF Generation',
        'Dropbox Cloud Uploads',
        'Fatigue and HAVS Calculators',
        'Compliance & Audit-Ready Records',
        'Mobile-First Field Workflow'
      ]
    },
  ]);

  let personal = $state([
    {
      count: 1,
      id: 'ai-journal',
      title: 'AI Journal',
      category: 'Project',
      contentHtml: `
        <span class="block">
          A calm journalling app where users can record reflections, track mood and revisit previous entries through a simple calendar.
        </span>

        <span class="block">
          AI summaries help turn everyday notes into useful prompts and action points without making the experience feel busy.
        </span>
      `,
      image: journal,
      tech: ['SvelteKit', 'JavaScript', 'Node', 'MongoDB', 'Tailwind CSS', 'DeepSeek AI'],
      features: ['Secure Authentication', 'CRUD Journal Entires', 'AI Summaries & Actions', 'Mood Slider', 'Calendar View', 'Responsive UI']
    },
  ]);

  const textSegments = [
    { text: "/", class: "blue-dot" },
    { text: "portfolio", class: "text-accent-one" }
  ];

  let fullText = textSegments.map(segment => segment.text).join('');
  let displayText = $state('');

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

  function openModal(){
    modalOpen = !modalOpen;
    document.querySelector('body').style.overflow = 'hidden';
  };

  function updateScrollFill() {
    const documentElement = document.documentElement;
    const maxScroll = documentElement.scrollHeight - documentElement.clientHeight;
    scrollFill = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
  }

  function getMarqueeDuration(items) {
    return `${Math.max(items.length * 34, 180)}s`;
  }

  onMount(() => {
    typewriterEffect();
    updateScrollFill();
    window.addEventListener('scroll', updateScrollFill, { passive: true });
    window.addEventListener('resize', updateScrollFill);

    return () => {
      window.removeEventListener('scroll', updateScrollFill);
      window.removeEventListener('resize', updateScrollFill);
    };
  });
</script>

<section>
  <Form bind:visible={modalOpen} />

  <div class="main_wrap hero-animated border-black border-b-2 mb-4 mb:md-6">
    <div class="py-10 md:py-20 px-10 md:px-16 max-w-[1200px] mx-auto">
      <h1 class="text-5xl md:text-6xl flex text-start justify-start fade-on-scroll" use:fadeOnScroll>
        <span class="blue-dot"><b>.</b></span>
        <span><b>{@html getSegmentedText(displayText)}</b></span>
      </h1>
      <p class="text-xl py-5 md:py-10 fade-on-scroll" use:fadeOnScroll>
        Check out some samples of live client sites and personal projects that I've been working on below.
      </p>
    </div>
  </div>

  <section>
    <div>
      <div class="pt-10 pb-10 md:pt-20 md:pb-14 px-10 md:px-16 max-w-[1200px] mx-auto">
        {#each clients as client (client.id)}
          <article class="portfolio-case">
            <div
              class="case-heading-row fade-on-scroll"
              style={`--scroll-fill: ${scrollFill};`}
              use:fadeOnScroll
            >
              <span class="case-heading-line"></span>
              <span>{String(client.count).padStart(2, '0')}</span>
            </div>

            <div class={`case-grid ${client.siteUrl ? 'has-actions' : ''}`}>
              <div class="case-copy">
                <p class="case-kicker fade-on-scroll" use:fadeOnScroll>{client.category}</p>
                <h3 class="fade-on-scroll" use:fadeOnScroll>{client.title}<span class="blue-dot">.</span></h3>

                <div class="case-body fade-on-scroll" use:fadeOnScroll>
                  {@html client.contentHtml}
                </div>
              </div>

              <figure class="case-figure fade-on-scroll" use:fadeOnScroll>
                <img
                  class="client-container"
                  src={client.image}
                  alt="{client.title} Homepage"
                />
              </figure>

              {#if client.siteUrl}
                <div class="case-actions fade-on-scroll" use:fadeOnScroll>
                  <a href={client.siteUrl} target="_blank" rel="noopener">View site</a>
                </div>
              {/if}
            </div>

            <div class="case-meta" id={`${client.id}-stack`}>
              <div class="fade-on-scroll" use:fadeOnScroll>
                <h4>Tech Stack</h4>
                <div class="tag-marquee">
                  <div
                    class="tag-track"
                    style={`--tag-marquee-duration: ${getMarqueeDuration(client.tech)};`}
                    role="list"
                  >
                    {#each marqueeCopies as copyIndex}
                      <div class="tag-set" aria-hidden={copyIndex > 0}>
                        {#each client.tech as tech}
                          <span class="tag-pill" role="listitem">{tech}</span>
                        {/each}
                      </div>
                    {/each}
                  </div>
                </div>
              </div>

              <div class="fade-on-scroll" use:fadeOnScroll>
                <h4>Features</h4>
                <div class="tag-marquee">
                  <div
                    class="tag-track feature-list"
                    style={`--tag-marquee-duration: ${getMarqueeDuration(client.features)};`}
                    role="list"
                  >
                    {#each marqueeCopies as copyIndex}
                      <div class="tag-set" aria-hidden={copyIndex > 0}>
                        {#each client.features as feature}
                          <span class="tag-pill" role="listitem">{feature}</span>
                        {/each}
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>

    <div>
      <div class="pt-4 pb-10 md:pt-8 md:pb-14 px-10 md:px-16 max-w-[1200px] mx-auto">
        {#each personal as project (project.id)}
          <article class="portfolio-case">
            <div
              class="case-heading-row fade-on-scroll"
              style={`--scroll-fill: ${scrollFill};`}
              use:fadeOnScroll
            >
              <span class="case-heading-line"></span>
              <span>{String(clients.length + project.count).padStart(2, '0')}</span>
            </div>

            <div class="case-grid">
              <div class="case-copy">
                <p class="case-kicker fade-on-scroll" use:fadeOnScroll>{project.category}</p>
                <h3 class="fade-on-scroll" use:fadeOnScroll>{project.title}<span class="blue-dot">.</span></h3>

                <div class="case-body fade-on-scroll" use:fadeOnScroll>
                  {@html project.contentHtml}
                </div>
              </div>

              <figure class="case-figure fade-on-scroll" use:fadeOnScroll>
                <img
                  class="client-container"
                  src={project.image}
                  alt="{project.title} Homepage"
                />
              </figure>

            </div>

            <div class="case-meta" id={`${project.id}-stack`}>
              <div class="fade-on-scroll" use:fadeOnScroll>
                <h4>Tech Stack</h4>
                <div class="tag-marquee">
                  <div
                    class="tag-track"
                    style={`--tag-marquee-duration: ${getMarqueeDuration(project.tech)};`}
                    role="list"
                  >
                    {#each marqueeCopies as copyIndex}
                      <div class="tag-set" aria-hidden={copyIndex > 0}>
                        {#each project.tech as tech}
                          <span class="tag-pill" role="listitem">{tech}</span>
                        {/each}
                      </div>
                    {/each}
                  </div>
                </div>
              </div>

              <div class="fade-on-scroll" use:fadeOnScroll>
                <h4>Features</h4>
                <div class="tag-marquee">
                  <div
                    class="tag-track feature-list"
                    style={`--tag-marquee-duration: ${getMarqueeDuration(project.features)};`}
                    role="list"
                  >
                    {#each marqueeCopies as copyIndex}
                      <div class="tag-set" aria-hidden={copyIndex > 0}>
                        {#each project.features as feature}
                          <span class="tag-pill" role="listitem">{feature}</span>
                        {/each}
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <div class="flex mb-12 mt-6 fade-on-scroll" use:fadeOnScroll>
    <button
      onclick={openModal}
      class="px-6 m-auto w-fit py-3 text-xl text-dark mbg-yellow rounded-xl shadow-2xl z-3 cursor-pointer transition-all flex items-center gap-2 hover:bg-dark hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-5 h-5 relative top-[1px]">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0-9.75 6.75L2.25 6.75" />
      </svg>

      <span>Get In Touch</span>
    </button>
  </div>
</section>

<style>
  .hero-animated {
    background: radial-gradient(circle at 30% 40%, #E8E1D8, #EDEDED 80%);
    background-size: cover;
  }

  :global(.link){
    color: #0000FF;
    cursor: pointer;
  }

  :global(.blue-dot) {
    color: #1B1B1B;
  }

  .portfolio-case {
    padding: clamp(16px, 2vw, 24px) 0 0;
  }

  .portfolio-case:first-of-type {
    padding-top: clamp(10px, 1.5vw, 18px);
  }

  .case-heading-row {
    display: flex;
    align-items: center;
    gap: clamp(14px, 2vw, 22px);
    margin-bottom: clamp(28px, 4vw, 42px);
    color: #1B1B1B;
    font-size: 0.86rem;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .case-heading-line {
    position: relative;
    display: block;
    flex: 1 1 auto;
    height: 2px;
    overflow: visible;
    background: rgba(0, 0, 0, 0.2);
  }

  .case-heading-line::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 6px;
    background: #111;
    border-radius: 2px;
    transform: translateY(-50%) scaleX(var(--scroll-fill));
    transform-origin: left;
  }

  .case-heading-row > span:last-child {
    min-width: 2ch;
    line-height: 1;
  }

  .case-grid {
    display: grid;
    grid-template-columns: minmax(250px, 0.55fr) minmax(520px, 1.35fr);
    grid-template-areas:
      "copy figure";
    column-gap: clamp(34px, 6vw, 78px);
    row-gap: clamp(22px, 3vw, 34px);
    align-items: center;
  }

  .case-grid.has-actions {
    grid-template-areas:
      "copy figure"
      "actions figure";
  }

  .case-copy {
    grid-area: copy;
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: clamp(14px, 2vw, 22px);
  }

  .case-kicker {
    color: rgba(0, 0, 0, 0.62);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.28em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .case-copy h3 {
    max-width: none;
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2.25rem;
    letter-spacing: 0;
  }

  .case-body {
    max-width: 27rem;
    font-size: clamp(1rem, 1.04vw, 1.08rem);
    line-height: 1.5;
  }

  .case-body :global(.block + .block) {
    margin-top: 22px;
  }

  .case-actions {
    grid-area: actions;
    display: flex;
    flex-wrap: wrap;
    gap: clamp(28px, 4vw, 46px);
    justify-content: flex-end;
    align-self: start;
  }

  .case-actions a {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 4px;
    padding: 0;
    border: 0;
    color: #0000FF;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    transition: transform 180ms ease;
  }

  .case-actions a::before {
    content: "";
    position: absolute;
    left: 0;
    right: 28px;
    bottom: -6px;
    height: 3px;
    background: currentColor;
    border-radius: 999px;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 180ms ease;
  }

  .case-actions a::after {
    content: "→";
    margin-left: 12px;
  }

  .case-actions a:hover {
    transform: translateX(3px);
  }

  .case-actions a:hover::before {
    transform: scaleX(1);
  }

  .case-figure {
    grid-area: figure;
    margin: 0;
    min-width: 0;
  }

  .client-container {
    display: block;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 18px 34px rgba(0, 0, 0, 0.08);
  }

  .case-meta {
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 3vw, 30px);
    margin-top: clamp(34px, 5vw, 52px);
    padding-top: clamp(22px, 3vw, 28px);
    padding-bottom: clamp(18px, 3vw, 34px);
    border-top: 1px solid rgba(0, 0, 0, 0.28);
  }

  .case-meta h4 {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.28em;
    text-transform: uppercase;
  }

  .tag-marquee {
    overflow: hidden;
    width: 100%;
    padding: 2px 0 4px;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
  }

  .tag-track {
    display: flex;
    width: max-content;
    animation: tag-marquee var(--tag-marquee-duration, 220s) linear infinite;
    will-change: transform;
  }

  .tag-track.feature-list {
    animation-direction: reverse;
  }

  .tag-marquee:hover .tag-track {
    animation-play-state: paused;
  }

  .tag-set {
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    padding-right: 8px;
  }

  .tag-pill {
    flex: 0 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.42);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.5);
    padding: 7px 14px;
    color: #1b1b1b;
    font-size: 0.82rem;
    line-height: 1.1;
    white-space: nowrap;
  }

  .feature-list .tag-pill {
    border-color: #111;
    background: #111;
    color: #f2eee8;
  }

  @keyframes tag-marquee {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tag-track {
      animation: none;
      transform: translateX(0);
    }
  }

  @media (max-width: 900px) {
    .case-grid {
      grid-template-columns: 1fr;
      grid-template-areas:
        "copy"
        "figure";
    }

    .case-grid.has-actions {
      grid-template-areas:
        "copy"
        "figure"
        "actions";
    }
  }

  @media (max-width: 640px) {
    .portfolio-case {
      padding-top: 16px;
    }

    .portfolio-case:first-of-type {
      padding-top: 10px;
    }

    .case-heading-row {
      margin-bottom: 26px;
    }

    .case-grid {
      row-gap: 24px;
    }

    .case-copy {
      gap: 16px;
    }

    .case-copy h3 {
      font-size: 2rem;
      line-height: 2.25rem;
    }

    .case-body {
      max-width: none;
      font-size: 1rem;
    }

    .case-actions {
      gap: 28px;
    }
  }

  @media (min-width: 768px) {
    .case-copy h3 {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }
</style>
