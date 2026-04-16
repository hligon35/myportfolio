(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const N="/assets/hldiLogo-BtyvKZxo.png",$=[{key:"home",label:"Home",href:"/"},{key:"services",label:"Services",href:"/services.html"},{key:"portfolio",label:"Portfolio",href:"/portfolio.html"},{key:"about",label:"About",href:"/about.html"},{key:"contact",label:"Contact",href:"/contact.html"}],o={start:"/contact.html?path=new",fix:"/contact.html?path=fix",quote:"/contact.html?path=new"},L=[{type:"service",label:"Service business website",title:"Black Bridge Mindset",image:"/projects/bbm.png",alt:"Black Bridge Mindset website screenshot",problem:"The business needed a site that looked established fast and made the offer easier to understand.",changed:"Clearer offer framing, stronger trust cues, and a booking path that felt more direct.",impact:"Stronger first impression, cleaner inquiry flow, and better support for qualified conversations.",href:"https://blackbridgemindset.com/"},{type:"food",label:"Restaurant website",title:"Cedar & Gold Lebanese Restaurant",image:"/projects/cedar&gold_lebanese.png",alt:"Cedar and Gold Lebanese restaurant website screenshot",webp:"/projects/cedar&gold_lebanese.webp",problem:"Visitors needed fast access to the menu, location details, and the basics that drive restaurant decisions.",changed:"Mobile-first layout, clearer page order, and business info placed where customers actually look first.",impact:"Better mobile usability, easier customer action, and a stronger first impression for new visitors.",href:"https://hligon35.github.io/cedarngoldlebanese/"},{type:"food",label:"Small business website",title:"Luxurious Cakes Indy",image:"/projects/luxurious_cakes.png",alt:"Luxurious Cakes Indy website screenshot",webp:"/projects/luxurious_cakes.webp",problem:"The business needed a site that made the product line easier to browse and the brand easier to trust.",changed:"Sharper product presentation, clearer browsing flow, and stronger local business positioning.",impact:"Better first impression, easier inquiry flow, and stronger support for quote-driven sales.",href:"https://www.luxuriouscakesindy.com/"},{type:"organization",label:"Organization website",title:"Life Prep Academy Foundation",image:"/projects/life_prep_academy_foundation.png",alt:"Life Prep Academy Foundation website screenshot",webp:"/projects/life_prep_academy_foundation.webp",problem:"The organization needed a clearer way to explain its mission and make involvement feel easier.",changed:"Cleaner content hierarchy, stronger trust signals, and simpler access to program information.",impact:"More clarity for visitors, stronger trust, and easier support for community engagement.",href:"https://www.lifeprepacademyfoundation.com/"}],O={home:{bodyClass:"page-home",main:`
      <section class="hero-section hero-section--home">
        <div class="hero-shell">
          <div class="hero-copy">
            <p class="eyebrow">For local service businesses, coaches, restaurants, nonprofits, and small brands</p>
            <h1>No website? I'll build it. Have one already? I'll fix it.</h1>
            <p class="hero-lead">
              Whether you need a website built from scratch or your current one fixed, I help business owners create a site that looks credible and supports more calls, quote requests, bookings, and inquiries.
            </p>
            <div class="hero-actions">
              <a href="${o.start}" class="cta-btn primary">Start Your Website</a>
              <a href="${o.fix}" class="cta-btn secondary">Fix My Website</a>
            </div>
            <div class="hero-proof">
              <span>Built from scratch</span>
              <span>Fixes weak inquiry flow</span>
              <span>Supports calls, quotes, and bookings</span>
            </div>
          </div>

          <aside class="hero-panel" aria-label="Online presence outcomes preview">
            <div class="hero-panel__card hero-panel__card--image">
              <img class="section-visual__image" src="/hero image.png" alt="Website mockup shown on desktop and mobile screens" loading="eager" decoding="async" />
              <p class="section-visual__caption">A stronger first impression on desktop and mobile helps the business look more established from the first visit.</p>
            </div>
            <div class="hero-panel__card hero-panel__card--primary">
              <p class="hero-panel__label">Two ways businesses usually show up here</p>
              <ul class="hero-panel__list">
                <li>No website yet and no real online home</li>
                <li>A website exists, but it is not bringing in leads</li>
                <li>People are finding the business but not taking action</li>
              </ul>
            </div>
            <div class="hero-panel__card">
              <p class="hero-panel__label">What the site should help support</p>
              <div class="hero-panel__stats">
                <div>
                  <strong>Stronger credibility</strong>
                  <span>The business should look real, current, and worth contacting.</span>
                </div>
                <div>
                  <strong>Clearer offer</strong>
                  <span>Visitors should know what you do and what to do next without hunting.</span>
                </div>
                <div>
                  <strong>More lead capture</strong>
                  <span>The site should make it easier to inquire, call, book, or request a quote.</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      ${D()}

      ${Q()}

      <section class="problem-section">
        <div class="section-header">
          <p class="eyebrow">Where businesses usually get stuck</p>
          <h2>The problem is usually simple: no website, or the wrong website.</h2>
          <p class="section-subtitle">
            Some businesses are invisible because they do not have a real website yet. Others are online already, but the current site is too weak to build trust or produce leads.
          </p>
        </div>
        <div class="problem-grid">
          <article class="problem-card">
            <h3>No website means no real online home</h3>
            <p>If people can only find a social profile or a placeholder page, the business looks smaller and harder to trust.</p>
          </article>
          <article class="problem-card">
            <h3>Your current website is not earning inquiries</h3>
            <p>You are online, but the site is not doing its job. It looks fine, yet leads stay flat.</p>
          </article>
          <article class="problem-card">
            <h3>The message is too unclear</h3>
            <p>If visitors cannot tell what you do fast, they leave before the page has a chance to help.</p>
          </article>
          <article class="problem-card">
            <h3>The next step is buried or weak</h3>
            <p>No clear call to action means no clear path to contact, quote requests, or booked calls.</p>
          </article>
        </div>
      </section>

      <section class="services-section">
        <div class="section-header">
          <p class="eyebrow">Services</p>
          <h2>Services for businesses that need a stronger online home or a stronger website.</h2>
          <p class="section-subtitle">
            Clear offers for business owners who either need a website from scratch or need their current one to stop wasting attention, trust, and inquiries.
          </p>
        </div>
        <div class="services-grid">
          ${R()}
        </div>
        <div class="section-cta section-cta--dual">
          <a href="${o.start}" class="cta-btn primary">Start Your Website</a>
          <a href="${o.fix}" class="cta-btn secondary">Fix My Website</a>
        </div>
      </section>

      <section class="about-section">
        <div class="about-layout">
          <div class="about-copy">
            <p class="eyebrow">Why business owners hire me</p>
            <h2>I build websites that help the business look more credible and make customer action easier.</h2>
            <p>
              I am not here to sell you a trendy layout and hope for the best. I look at your website like a business tool.
              If you do not have one yet, the job is to get you online fast with something credible and usable. If you already have one, the job is to fix what is blocking trust and leads.
            </p>
            <p>
              My approach is blunt on purpose: clarify the offer, tighten the structure, improve the user path, and make it easier for the right people to call, book, request a quote, or send an inquiry.
            </p>
          </div>
          <div class="about-points">
            <article class="about-point">
              <h3>Business-first thinking</h3>
              <p>I care about what the site is supposed to support: stronger credibility, easier inquiry flow, and better-quality leads.</p>
            </article>
            <article class="about-point">
              <h3>Clear strategy</h3>
              <p>I understand what needs to be on the page, what can wait, and how to match the website to the stage the business is actually in.</p>
            </article>
            <article class="about-point">
              <h3>Specific decisions</h3>
              <p>No fluff, no generic digital-solution language, no endless jargon. You get direct recommendations and clean execution.</p>
            </article>
          </div>
        </div>
        <div class="trust-strip trust-strip--home">
          <div class="trust-item"><strong>Best fit</strong><span>Local service businesses, coaches, consultants, restaurants, nonprofits, and small brands that need a stronger first impression.</span></div>
          <div class="trust-item"><strong>What clients usually come for</strong><span>No website yet, weak redesigns, confusing messaging, poor mobile usability, and inquiry flow that is too weak.</span></div>
          <div class="trust-item"><strong>What the work focuses on</strong><span>Clearer offers, stronger trust signals, easier customer action, and a cleaner path to calls, bookings, and quote requests.</span></div>
          <div class="trust-item"><strong>What makes the approach different</strong><span>The work starts with the business need, not with design trends or generic filler copy.</span></div>
        </div>
        <div class="section-cta section-cta--dual">
          <a href="${o.start}" class="cta-btn primary">Start Your Website</a>
          <a href="${o.fix}" class="cta-btn secondary">Fix My Website</a>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-header">
          <p class="eyebrow">Selected work</p>
          <h2>Website work that improved clarity, trust, and customer action.</h2>
          <p class="section-subtitle">
            These examples are here to show the kind of businesses I work with and the kind of improvements the website was built to support.
          </p>
        </div>
        <div class="portfolio-grid">
          ${F(L.slice(0,3))}
        </div>
        <div class="section-cta section-cta--dual">
          <a href="${o.fix}" class="cta-btn primary">Fix My Website</a>
          <a href="${o.start}" class="cta-btn secondary">Start Your Website</a>
        </div>
      </section>

      <section class="process-section">
        <div class="section-header">
          <p class="eyebrow">Process</p>
          <h2>A simple process that works for both paths.</h2>
          <p class="section-subtitle">Whether the business needs a brand-new site or a stronger version of the one it already has, the workflow stays direct.</p>
        </div>
        <div class="process-grid">
          ${G()}
        </div>
      </section>

      ${k("No website? I will build it. Have one already? I will fix it.","The goal is the same either way: an online presence that makes the business look credible and makes it easier to bring in leads.",o.start,"Start Your Website",o.fix,"Fix My Website")}
    `},services:{bodyClass:"page-interior",main:`
      ${y("services","Services","Website services for business owners who either need to get online or need their current site fixed.","If you do not have a website yet, I build the full online presence. If you already have one, I fix the parts that are costing you trust and leads.")}
      <section class="content-section">
        <div class="service-group">
          <div class="section-header section-header--left">
            <p class="eyebrow">For businesses without a website</p>
            <h2>Get online with something that looks credible and helps people contact you.</h2>
            <p class="section-subtitle">If you are starting from scratch, the point is not to just “have a website.” The point is to give the business a real online presence that makes trust and lead capture easier.</p>
          </div>
          <div class="detail-grid detail-grid--services">
            <article class="detail-card">
              <p class="service-kicker">01</p>
              <h2>Website Builds</h2>
              <p>A full website for businesses that need a clear, credible place online where people can understand the offer and reach out.</p>
              <ul class="service-features">
                <li>Clear offer and message from the first screen</li>
                <li>Mobile-ready layout that looks established</li>
                <li>Contact flow built to turn attention into inquiries</li>
              </ul>
            </article>
            <article class="detail-card">
              <p class="service-kicker">02</p>
              <h2>Online Presence Setup</h2>
              <p>A complete setup to get your business online and visible, not just another half-finished page with no plan behind it.</p>
              <ul class="service-features">
                <li>Website build that gives the business a real online home</li>
                <li>Mobile optimization so the site works where most people actually browse</li>
                <li>Basic SEO setup so the business is easier to find</li>
                <li>Contact and lead capture system so visitors can take the next step</li>
                <li>Optional Google Business Profile setup for local visibility</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="service-group">
          <div class="section-header section-header--left">
            <p class="eyebrow">For businesses with a website</p>
            <h2>Fix the site you already have so it stops leaking trust and leads.</h2>
            <p class="section-subtitle">If the current website feels outdated, vague, or dead, the fix is usually better structure, stronger messaging, and a clearer path to action.</p>
          </div>
          <div class="detail-grid detail-grid--three">
            <article class="detail-card">
              <p class="service-kicker">03</p>
              <h2>Website Redesigns</h2>
              <p>For businesses with a site that exists but looks dated, feels unclear, or undersells the business the moment someone lands on it.</p>
              <ul class="service-features">
                <li>Stronger first impression and cleaner trust signals</li>
                <li>Clearer page flow so people stop guessing</li>
                <li>Better path to quote requests, calls, or form submissions</li>
              </ul>
            </article>
            <article class="detail-card">
              <p class="service-kicker">04</p>
              <h2>Conversion Optimization</h2>
              <p>Fix the parts of your current site that are wasting attention and making visitors leave without taking action.</p>
              <ul class="service-features">
                <li>Sharper calls to action and page hierarchy</li>
                <li>Less confusion between message and next step</li>
                <li>More qualified inquiries from the traffic you already have</li>
              </ul>
            </article>
            <article class="detail-card">
              <p class="service-kicker">05</p>
              <h2>Landing Pages</h2>
              <p>Focused pages for one offer, one service, or one campaign where the goal is simple: get the right person to act.</p>
              <ul class="service-features">
                <li>One message and one next step instead of scattered options</li>
                <li>Better support for promotions, ads, or service-specific offers</li>
                <li>Cleaner lead capture without extra friction</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="section-visual section-visual--split">
          <div class="section-visual__copy">
            <p class="eyebrow">Conversion path</p>
            <h2>Good website work should make the path from visitor to lead easier to follow.</h2>
            <p>The site does not need more clutter. It needs a clearer message, a clearer next step, and fewer places for attention to die before someone contacts the business.</p>
          </div>
          <div class="section-visual__frame">
            <img class="section-visual__image" src="/web conv.png" alt="Diagram showing a website conversion flow from visitor to website to lead form" loading="lazy" />
          </div>
        </div>
      </section>

      <section class="insight-section">
        <div class="section-header">
          <p class="eyebrow">What these services fix</p>
          <h2>Most businesses do not need more features. They need the right website for where they are right now.</h2>
          <p class="section-subtitle">If you want proof first, review the <a class="inline-link" href="/portfolio.html">portfolio examples</a>. If you are ready to move, choose the path that fits: <a class="inline-link" href="${o.start}">start your website</a> or <a class="inline-link" href="${o.fix}">fix the current one</a>.</p>
        </div>
        <div class="problem-grid">
          <article class="problem-card"><h3>No online home</h3><p>Without a real website, the business is harder to find, harder to trust, and easier to skip.</p></article>
          <article class="problem-card"><h3>Weak first impression</h3><p>If the site looks outdated or unclear, the business feels smaller than it is.</p></article>
          <article class="problem-card"><h3>Confusing page flow</h3><p>Good websites guide attention. Weak ones make people work too hard to understand the offer.</p></article>
          <article class="problem-card"><h3>Lead loss</h3><p>If the next step is vague, hidden, or weak, the traffic you already have turns into nothing.</p></article>
        </div>
      </section>

      ${k("Choose the path that matches the business.","If you need a full build, start there. If the current website is the problem, fix that instead.",o.start,"Start Your Website",o.fix,"Fix My Website")}
    `},portfolio:{bodyClass:"page-interior",main:`
      ${y("portfolio","Portfolio","Website work framed around business impact, not random screenshots.","These projects show the kind of website work that helps service businesses, restaurants, and organizations look more established and make customer action easier.")}
      <section class="portfolio-section portfolio-section--interior">
        <div class="portfolio-filters">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="service">Service Businesses</button>
          <button class="filter-btn" data-filter="food">Food & Hospitality</button>
          <button class="filter-btn" data-filter="organization">Organizations</button>
        </div>
        <div class="portfolio-grid">
          ${F(L,!0)}
        </div>
        <div class="section-visual section-visual--split section-visual--proof">
          <div class="section-visual__copy">
            <p class="eyebrow">Before and after</p>
            <h2>Fixing a weak site usually means making the offer, layout, and CTA easier to understand fast.</h2>
            <p>The improvement is not just visual. It is about moving from vague messaging and cluttered pages to a site that looks more credible and guides people toward action.</p>
          </div>
          <div class="section-visual__frame">
            <img class="section-visual__image" src="/beforevsafteer.png" alt="Before and after website comparison showing a weak layout transformed into a clearer business website" loading="lazy" />
          </div>
        </div>
      </section>
      <section class="trust-section">
        <div class="trust-strip">
          <div class="trust-item"><strong>Industries served</strong><span>Service businesses, restaurants, small brands, nonprofits, and organizations that need a clearer online presence.</span></div>
          <div class="trust-item"><strong>What the work improved</strong><span>Stronger first impression, clearer offer presentation, easier customer action, and better mobile usability.</span></div>
          <div class="trust-item"><strong>Proof style</strong><span>No fake metrics, no inflated claims. The language stays honest about what the work improved and what it helped support.</span></div>
          <div class="trust-item"><strong>Next step</strong><span>If your current website feels weak or unclear, <a class="inline-link" href="${o.fix}">fix my website</a>. If you need a full build, <a class="inline-link" href="${o.start}">start your website</a>.</span></div>
        </div>
      </section>
      ${k("If your business needs this kind of website work, the next step is simple.","If you are starting from scratch, I can build the online presence. If you already have a site, I can fix the part that is killing results.",o.start,"Start Your Website",o.fix,"Fix My Website")}
    `},about:{bodyClass:"page-interior",main:`
      ${y("about","About","I help businesses get online from scratch or turn weak websites into lead-generating tools.","Some clients show up with no website at all. Others show up with a website that looks busy and produces nothing. The job is to fix the business problem, not decorate it.")}
      <section class="content-section">
        <div class="about-layout about-layout--interior">
          <div class="about-copy">
            <p class="eyebrow">Positioning</p>
            <h2>I do not treat websites like decoration.</h2>
            <p>I look at your website like a business tool. If the business is not online yet, the site needs to establish credibility fast. If the site already exists but does not convert, the structure, message, and CTA need work.</p>
            <p>That is the difference between a portfolio mindset and a business mindset. I build for clarity, credibility, and conversion. If you want the short version, review the <a class="inline-link" href="/services.html">service breakdown</a> or see the <a class="inline-link" href="/portfolio.html">website examples</a>.</p>
          </div>
          <div class="about-points">
            <article class="about-point"><h3>Blunt on purpose</h3><p>You get straight answers about what is wrong, what matters, and what can wait.</p></article>
            <article class="about-point"><h3>Analytical approach</h3><p>I care about messaging order, layout hierarchy, lead flow, and whether the site matches the stage the business is actually in.</p></article>
            <article class="about-point"><h3>Built for business owners</h3><p>This is not “hire me for dev work” positioning. It is website strategy and execution for businesses that either need to get online or need better outcomes from what they already have.</p></article>
          </div>
        </div>
      </section>
      <section class="insight-section">
        <div class="section-header">
          <p class="eyebrow">How I think</p>
          <h2>A website should answer three questions fast.</h2>
        </div>
        <div class="section-visual section-visual--split section-visual--compact">
          <div class="section-visual__copy">
            <p>The first part of strategy is usually diagnosis. Weak headlines, unclear calls to action, and confusing layouts are common because the page was never built around what the business actually needs the visitor to do.</p>
          </div>
          <div class="section-visual__frame">
            <img class="section-visual__image" src="/web brkdwn.png" alt="Website critique graphic highlighting weak headline, unclear CTA, and confusing layout" loading="lazy" />
          </div>
        </div>
        <div class="process-grid process-grid--wide">
          <article class="process-card"><span class="process-number">01</span><h3>What does this business do?</h3><p>If that is not obvious immediately, the site is losing attention.</p></article>
          <article class="process-card"><span class="process-number">02</span><h3>Why should someone trust it?</h3><p>Layout, tone, proof, and structure all shape trust before a word is spoken.</p></article>
          <article class="process-card"><span class="process-number">03</span><h3>What should the visitor do next?</h3><p>Every page needs a clear next step. If there is no direction, there is no conversion path.</p></article>
        </div>
      </section>
      ${k("If that approach sounds like what your business needs, choose the right path and move.","Start with a new build if you have no website. Start with a fix if the current one is underperforming.",o.start,"Start Your Website",o.fix,"Fix My Website")}
    `},contact:{bodyClass:"page-interior page-contact",main:`
      ${y("contact","Contact","Start your website or fix the one you already have.","Choose the path that matches your business right now. If you need a new online presence, I will build it. If your current site is not getting leads, I will fix what is broken.")}
      <section class="contact-section contact-section--page">
        <div class="contact-layout">
          <div class="contact-copy">
            <p class="eyebrow">Best fit</p>
            <h2>This is for businesses that either need to get online or need their current site fixed.</h2>
            <p>If you have no website, I can build the full online presence. If you already have one and it is not producing inquiries, I can fix the message, structure, and lead path. If you need more context first, look at the <a class="inline-link" href="/services.html">services</a> or the <a class="inline-link" href="/portfolio.html">recent website work</a>.</p>
            <div class="contact-benefits">
              <div class="contact-benefit"><strong>Best for:</strong><span>New website builds, online presence setup, redesigns, landing pages, and conversion cleanup.</span></div>
              <div class="contact-benefit"><strong>What to send:</strong><span>Business name, whether you need a new website or a fix, and what outcome you want from the site.</span></div>
              <div class="contact-benefit"><strong>Reply:</strong><span>I will review the request and respond by email.</span></div>
            </div>
            <div class="contact-visual">
              <img class="section-visual__image" src="/hero image.png" alt="Mockup of a business website displayed on desktop and mobile" loading="lazy" />
              <p class="section-visual__caption">The goal is simple: a website that looks established, works on every screen, and gives people a clear way to contact you.</p>
            </div>
          </div>
          <div class="basic-contact-card" aria-label="Website project form">
            <div class="section-header section-header--left">
              <h2>Start Your Website or Fix It</h2>
              <p class="section-subtitle">Prefer email? Reach me at <a href="mailto:info@hldesignedit.com">info@hldesignedit.com</a>.</p>
            </div>
            ${V()}
          </div>
        </div>
      </section>
    `}};function se(e){const s=document.querySelector("#app");if(!s){document.body.innerHTML="<h1>App failed to load.</h1>";return}const t=O[e];if(!t){document.body.innerHTML="<h1>Page not found.</h1>";return}document.body.className=t.bodyClass||"",s.innerHTML=`
    ${Y()}
    ${j(e)}
    <main>${t.main}</main>
    ${z()}
  `,U()}function Y(){return`
    <div class="partner-banner" role="note" aria-label="Marketing partner link">
      <div class="partner-banner__content">
        Need marketing after the site is built or fixed?
        <a class="partner-banner__link" href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital can handle that.</a>
      </div>
    </div>
  `}function j(e){return`
    <div class="header-logo" aria-label="Site logo">
      <div class="header-logo__inner">
        <a class="header-logo__link" href="/" aria-label="Go to top">
          <img class="header-logo__img" src="${N}" alt="HLDI logo" loading="eager" decoding="async" />
        </a>
      </div>
    </div>
    <header class="site-header">
      <nav class="nav-container" aria-label="Main navigation">
        <div id="mobile-nav" class="nav-links">
          ${$.map(s=>`
            <a href="${s.href}" class="nav-link${s.key===e?" is-active":""}"${s.key===e?' aria-current="page"':""}>${s.label}</a>
          `).join("")}
          <a href="${o.start}" class="cta-btn nav-cta">Start Your Website</a>
          <a href="${o.fix}" class="cta-btn secondary nav-cta nav-cta--secondary">Fix My Website</a>
        </div>
      </nav>
      <button class="nav-hamburger" type="button" aria-label="Open menu" aria-controls="mobile-nav" aria-expanded="false">
        <span class="nav-hamburger__lines" aria-hidden="true">
          <span class="nav-hamburger__line"></span>
          <span class="nav-hamburger__line"></span>
          <span class="nav-hamburger__line"></span>
        </span>
      </button>
    </header>
  `}function z(){return`
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-cta">
          <div class="footer-cta__text">
            <h3>Your business either needs a website or needs a better one.</h3>
            <p>Start from scratch if you need to get online. Fix the current site if it is weak, unclear, or not bringing in leads.</p>
          </div>
          <div class="footer-cta__actions">
            <a href="${o.start}" class="cta-btn primary">Start Your Website</a>
            <a href="${o.fix}" class="cta-btn secondary">Fix My Website</a>
          </div>
        </div>
        <div class="footer-grid" aria-label="Footer navigation">
          <div class="footer-col">
            <h4>Navigation</h4>
            ${$.map(e=>`<a href="${e.href}">${e.label}</a>`).join("")}
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a href="/services.html">Website Builds</a>
            <a href="/services.html">Online Presence Setup</a>
            <a href="/services.html">Website Redesigns</a>
            <a href="/services.html">Conversion Optimization</a>
            <a href="/services.html">Landing Pages</a>
          </div>
          <div class="footer-col">
            <h4>Proof</h4>
            <a href="/portfolio.html">Selected Work</a>
            <a href="/about.html">Why Work With Me</a>
            <a href="${o.quote}">Get a Quote</a>
          </div>
          <div class="footer-col">
            <h4>Elsewhere</h4>
            <a href="mailto:info@hldesignedit.com">info@hldesignedit.com</a>
            <a href="https://github.com/hligon35" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital</a>
          </div>
        </div>
        <div class="footer-bottom">
          <a class="footer-backtotop" href="#top">Back to top</a>
          <div class="footer-partner">Need traffic support too? <a href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital</a></div>
          <div class="footer-legal">© <span id="footer-year">2026</span> Harold Ligon</div>
        </div>
      </div>
    </footer>
  `}function y(e,s,t,r){return`
    <section class="page-hero">
      <div class="page-hero__inner">
        ${H(e)}
        <p class="eyebrow">${s}</p>
        <h1>${t}</h1>
        <p class="hero-lead">${r}</p>
      </div>
    </section>
  `}function H(e){const s=$.find(t=>t.key===e);return s?`
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol class="breadcrumbs__list">
        <li class="breadcrumbs__item"><a href="/">Home</a></li>
        <li class="breadcrumbs__item" aria-current="page">${s.label}</li>
      </ol>
    </nav>
  `:""}function R(){return`
    <article class="service-card">
      <p class="service-kicker">01</p>
      <h3>Website Builds</h3>
      <p>For businesses that need a full website from scratch so people can find the business, trust it, and reach out.</p>
      <ul class="service-features"><li>Clear offer and page structure</li><li>Lead capture built into the flow</li><li>Mobile-ready from day one</li></ul>
    </article>
    <article class="service-card">
      <p class="service-kicker">02</p>
      <h3>Online Presence Setup</h3>
      <p>A complete setup to get your business online and visible with a proper website, lead capture, and search-ready basics.</p>
      <ul class="service-features"><li>Website build and mobile optimization</li><li>Basic SEO setup</li><li>Optional Google Business Profile support</li></ul>
    </article>
    <article class="service-card">
      <p class="service-kicker">03</p>
      <h3>Website Redesigns</h3>
      <p>For businesses with a website that looks dated, feels unclear, or makes the business look weaker than it is.</p>
      <ul class="service-features"><li>Stronger trust on first visit</li><li>Clearer message and layout</li><li>Better path to inquiries</li></ul>
    </article>
    <article class="service-card">
      <p class="service-kicker">04</p>
      <h3>Conversion Optimization</h3>
      <p>For businesses that already have traffic but need the website to do a better job turning that attention into leads.</p>
      <ul class="service-features"><li>Stronger calls to action</li><li>Cleaner lead flow</li><li>Less drop-off before contact</li></ul>
    </article>
  `}function G(){return`
    <article class="process-card"><span class="process-number">01</span><h3>Pick the right path</h3><p>We start by deciding whether the business needs a full website build or a fix for what already exists.</p></article>
    <article class="process-card"><span class="process-number">02</span><h3>Clarify the offer</h3><p>We tighten the message, what matters most on the page, and the action visitors should take.</p></article>
    <article class="process-card"><span class="process-number">03</span><h3>Build or rebuild</h3><p>I create the site around credibility, mobile usability, lead capture, and clear structure.</p></article>
    <article class="process-card"><span class="process-number">04</span><h3>Launch with a lead path</h3><p>The finished site goes live with a cleaner way for people to inquire, book, or request a quote.</p></article>
  `}function D(){return`
    <section class="user-path-section">
      <div class="section-header">
        <p class="eyebrow">Choose your path</p>
        <h2>Two different situations. Two clear starting points.</h2>
        <p class="section-subtitle">Do not lump both problems together. If you already have a website, the work is about fixing performance. If you do not have one, the work is about building the full online presence.</p>
      </div>
      <div class="user-path-grid">
        <article class="user-path-card">
          <p class="user-path-card__label">Path A</p>
          <h3>I already have a website</h3>
          <p>Your business is online, but the site is not doing enough. It is not getting leads, not building trust fast enough, or not making the next step obvious.</p>
          <a href="${o.fix}" class="cta-btn primary">Fix My Website</a>
        </article>
        <article class="user-path-card">
          <p class="user-path-card__label">Path B</p>
          <h3>I don't have a website yet</h3>
          <p>You need a real online presence so people can find the business, understand the offer, and contact you without bouncing off a weak first impression.</p>
          <a href="${o.start}" class="cta-btn primary">Start Your Website</a>
        </article>
      </div>
    </section>
  `}function Q(){return`
    <section class="best-fit-section">
      <div class="section-header">
        <p class="eyebrow">Best fit</p>
        <h2>This site is built for business owners who need a clearer, more credible online presence.</h2>
        <p class="section-subtitle">If you are trying to look more established, make your offer easier to understand, and make customer action simpler, you are in the right place.</p>
      </div>
      <div class="best-fit-grid">
        <article class="best-fit-card"><h3>Local service businesses</h3><p>For businesses that need more calls, quote requests, and inquiry form submissions from the website.</p></article>
        <article class="best-fit-card"><h3>Coaches and consultants</h3><p>For offers that need clearer positioning, better trust, and a more direct path to booked conversations.</p></article>
        <article class="best-fit-card"><h3>Restaurants and food brands</h3><p>For brands that need stronger mobile usability, clearer browsing, and easier customer action.</p></article>
        <article class="best-fit-card"><h3>Nonprofits and community organizations</h3><p>For organizations that need to explain the mission clearly and make support or engagement easier.</p></article>
        <article class="best-fit-card"><h3>Small businesses building credibility</h3><p>For owners who need a stronger first impression than a social page, weak template, or outdated site can give them.</p></article>
      </div>
    </section>
  `}function F(e,s=!1){return e.map((t,r)=>`
    <article class="portfolio-card${r===0&&s?" featured":""}" data-type="${t.type}">
      <div class="portfolio-image">
        ${t.webp?`
          <picture>
            <source srcset="${t.webp}" type="image/webp">
            <img src="${t.image}" alt="${t.alt}" loading="lazy" />
          </picture>
        `:`<img src="${t.image}" alt="${t.alt}" loading="lazy" />`}
      </div>
      <div class="portfolio-content">
        <p class="portfolio-label">${t.label}</p>
        <h3>${t.title}</h3>
        <p class="portfolio-desc"><strong>Business need:</strong> ${t.problem}</p>
        <p class="portfolio-desc"><strong>What this improved:</strong> ${t.changed}</p>
        <p class="portfolio-desc"><strong>What this helped support:</strong> ${t.impact}</p>
        <div class="portfolio-actions">
          <a href="${t.href}" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a>
        </div>
      </div>
    </article>
  `).join("")}function k(e,s,t,r,i,a){return`
    <section class="cta-section">
      <div class="cta-panel">
        <div>
          <p class="eyebrow">Call to action</p>
          <h2>${e}</h2>
          <p>${s}</p>
        </div>
        <div class="cta-panel__actions">
          <a href="${t}" class="cta-btn primary">${r}</a>
          <a href="${i}" class="cta-btn secondary">${a}</a>
        </div>
      </div>
    </section>
  `}function V(){return`
    <form id="basic-contact-form" class="basic-contact-form" novalidate>
      <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" />
      <div class="form-group">
        <label class="form-label required">What do you need?</label>
        <div class="request-path-grid" role="radiogroup" aria-label="What do you need help with?">
          <label class="request-path-card" for="request-type-new">
            <input id="request-type-new" name="requestType" type="radio" value="new" />
            <span class="request-path-card__eyebrow">New website</span>
            <strong>I need a new website</strong>
            <span>Build the online presence from scratch and make it easy for people to contact the business.</span>
          </label>
          <label class="request-path-card" for="request-type-fix">
            <input id="request-type-fix" name="requestType" type="radio" value="fix" />
            <span class="request-path-card__eyebrow">Current website</span>
            <strong>I need help with my current website</strong>
            <span>Fix the weak message, weak structure, or weak conversion path that is costing you leads.</span>
          </label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label required" for="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" class="form-input" autocomplete="name" placeholder="Your name" required />
        </div>
        <div class="form-group">
          <label class="form-label required" for="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" class="form-input" autocomplete="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label required" for="contact-business">Business Name</label>
          <input id="contact-business" name="businessName" type="text" class="form-input" autocomplete="organization" placeholder="Your business" required />
        </div>
        <div class="form-group" data-request-visible="new" hidden>
          <label class="form-label" for="contact-google-profile">Need Google Business Profile setup too?</label>
          <select id="contact-google-profile" name="googleBusinessProfile" class="form-input">
            <option value="">Not sure yet</option>
            <option value="yes">Yes, include it</option>
            <option value="no">No, website only</option>
          </select>
        </div>
      </div>
      <div class="form-group" data-request-visible="fix" hidden>
        <label class="form-label required" for="contact-website">Current Website</label>
        <input id="contact-website" name="website" type="url" class="form-input" autocomplete="url" placeholder="https://yourwebsite.com" />
      </div>
      <div class="form-group">
        <label id="contact-message-label" class="form-label required" for="contact-message">What do you need help with?</label>
        <p id="contact-form-note" class="form-note">Pick the path above and keep it simple. Tell me the business goal and what the website needs to do.</p>
        <textarea id="contact-message" name="message" class="form-textarea" placeholder="Tell me what your business does, what you need online, and what should happen when someone lands on the site." required></textarea>
      </div>
      <div class="basic-contact-actions">
        <button type="submit" class="cta-btn primary">Get a Quote</button>
        <p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p>
      </div>
    </form>
  `}function U(){requestAnimationFrame(()=>{Z(),X(),te()}),setTimeout(()=>{K(),ee(),J()},100)}function J(){const e=document.getElementById("basic-contact-form");if(!e)return;const s=document.getElementById("basic-contact-status"),t=e.querySelector('button[type="submit"]'),r=document.getElementById("contact-name"),i=document.getElementById("contact-email"),a=document.getElementById("contact-business"),c=document.getElementById("contact-website"),h=document.getElementById("contact-message"),m=document.getElementById("contact-message-label"),p=document.getElementById("contact-form-note"),g=Array.from(e.querySelectorAll('input[name="requestType"]')),E=Array.from(e.querySelectorAll(".request-path-card")),P=Array.from(e.querySelectorAll("[data-request-visible]")),x=new URLSearchParams(window.location.search).get("path"),f=x==="new"||x==="fix"?x:"",M=()=>window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://127.0.0.1:8787/api/forms":"https://hldesignedit.hligon.workers.dev/api/forms",u=l=>{s&&(s.textContent=l)},q=l=>{E.forEach(n=>{const d=n.querySelector('input[name="requestType"]');n.classList.toggle("is-selected",!!(d!=null&&d.checked))}),P.forEach(n=>{const d=n.dataset.requestVisible===l;n.hidden=!d}),c instanceof HTMLInputElement&&(c.required=l==="fix"),m&&h instanceof HTMLTextAreaElement&&t instanceof HTMLButtonElement&&(l==="fix"?(m.textContent="What is your current website not doing?",h.placeholder="Tell me what is broken: weak leads, outdated design, confusing layout, poor conversion, buried CTA, or anything else that feels off.",t.textContent="Fix My Website",p&&(p.textContent="Include your current website and what feels weak or unclear.")):l==="new"?(m.textContent="What does your business need online?",h.placeholder="Tell me what your business does, what pages you need, and what should happen when someone lands on the site.",t.textContent="Start Your Website",p&&(p.textContent="Keep it simple. Tell me what the business does and what the website needs to help you accomplish.")):(m.textContent="What do you need help with?",h.placeholder="Tell me what your business needs online or what your current website is failing to do.",t.textContent="Get a Quote",p&&(p.textContent="Pick the path above and keep it simple. Tell me the business goal and what the website needs to do.")))};if(f){const l=g.find(n=>n.value===f);l&&(l.checked=!0)}q(f),g.forEach(l=>{l.addEventListener("change",()=>{q(l.value),u("")})}),e.addEventListener("submit",l=>{var C;l.preventDefault();const n=new FormData(e),d=String(n.get("requestType")||"").trim(),W=String(n.get("name")||"").trim(),_=String(n.get("email")||"").trim(),S=String(n.get("businessName")||"").trim(),v=String(n.get("website")||"").trim(),I=String(n.get("googleBusinessProfile")||"").trim(),w=String(n.get("message")||"").trim();if(d!=="new"&&d!=="fix"){u("Choose whether you need a new website or help with your current one."),(C=g[0])==null||C.focus();return}if(!W){u("Enter your name."),r==null||r.focus();return}if(!_||!/^\S+@\S+\.\S+$/.test(_)){u("Enter a valid email address."),i==null||i.focus();return}if(!S){u("Enter your business name."),a==null||a.focus();return}if(d==="fix"&&!v){u("Enter your current website."),c==null||c.focus();return}if(!w){u("Tell me what you need help with."),h==null||h.focus();return}t instanceof HTMLButtonElement&&(t.disabled=!0,u(d==="fix"?"Sending website fix request...":"Sending new website request..."),fetch(M(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({formType:"project",honeypot:String(n.get("company")||""),pageUrl:window.location.href,data:{requestType:d,fullName:W,email:_,businessName:S,website:v,googleBusinessProfile:I,projectTitle:d==="fix"?"Fix My Website Request":"Start Your Website Request",projectSummary:w,message:w,details:`Request Type: ${d==="fix"?"Fix my current website":"Start a new website"}
Business: ${S}${v?`
Current Website: ${v}`:""}${I?`
Google Business Profile Setup: ${I}`:""}

Needs: ${w}`}})}).then(async T=>{const b=await T.json().catch(()=>null);if(!T.ok||!(b!=null&&b.ok))throw new Error((b==null?void 0:b.error)||"Unable to send request.");if(u("Request sent. I will review it and reply by email."),e.reset(),f){const B=g.find(A=>A.value===f);B&&(B.checked=!0)}q(f)}).catch(()=>{u("Could not send right now. Email info@hldesignedit.com.")}).finally(()=>{t.disabled=!1}))})}function K(){const e=document.getElementById("footer-year");e&&(e.textContent=new Date().getFullYear().toString())}function Z(){const e=document.querySelector(".portfolio-filters"),s=document.querySelectorAll(".filter-btn"),t=document.querySelectorAll(".portfolio-card");!e||!s.length||!t.length||e.addEventListener("click",r=>{const i=r.target.closest(".filter-btn");if(!i)return;s.forEach(c=>c.classList.remove("active")),i.classList.add("active");const a=(i.dataset.filter||"all").trim().toLowerCase();requestAnimationFrame(()=>{t.forEach(c=>{const h=(c.dataset.type||"").trim().toLowerCase();c.style.display=a==="all"||h===a?"":"none"})})})}function X(){document.addEventListener("click",e=>{e.target.closest('a[href="#top"]')&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))})}function ee(){const e=document.querySelector(".site-header");if(!e)return;let s=!1;const t=()=>{e.classList.toggle("is-scrolled",window.scrollY>30),s=!1};window.addEventListener("scroll",()=>{s||(requestAnimationFrame(t),s=!0)},{passive:!0})}function te(){const e=document.querySelector(".site-header"),s=e==null?void 0:e.querySelector(".nav-hamburger"),t=document.getElementById("mobile-nav");if(!e||!s||!t)return;const r=()=>e.classList.contains("is-menu-open"),i=a=>{e.classList.toggle("is-menu-open",a),s.setAttribute("aria-expanded",String(a)),s.setAttribute("aria-label",a?"Close menu":"Open menu")};s.addEventListener("click",a=>{a.preventDefault(),i(!r())}),t.addEventListener("click",a=>{a.target.closest("a")&&i(!1)}),document.addEventListener("click",a=>{r()&&(a.target.closest(".site-header")||i(!1))}),document.addEventListener("keydown",a=>{a.key==="Escape"&&r()&&i(!1)})}export{se as r};
