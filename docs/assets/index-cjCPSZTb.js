(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();console.log("JavaScript loading...");const w=document.querySelector("#app");w?(console.log("Setting innerHTML..."),x()):(console.error("App element not found!"),document.body.innerHTML="<h1>Error: App element not found</h1>");function x(){w.innerHTML=`
  <header class="portfolio-header">
    <nav id="main-nav" class="nav-container" aria-label="Main navigation">
      <a href="#hero" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#services" class="nav-link">Services</a>
      <a href="#experience" class="nav-link">Skills</a>
      <a href="#portfolio" class="nav-link">Portfolio</a>
      <a href="#contact-form" class="nav-link">Contact</a>
    </nav>
    <div class="partner-banner" role="note" aria-label="Partnership announcement">
      In partnership with SparQ Digital Media Marketing Company —
      <a class="partner-banner__link" href="https://www.getsparqd.com" target="_blank" rel="noopener">www.getsparqd.com</a>
    </div>
  </header>

  <section id="hero" class="hero-section">
    <div class="hero-content">
      <h1>
        <span class="highlight hero-greeting-line">
          <span id="greeting-text" class="hero-greeting-word">Hello</span>
          <span class="hero-greeting-rest">, I'm Harold Ligon</span>
        </span>
      </h1>
      <h2 class="professional-title">Full-Stack Developer & UI/UX Designer</h2>
      <p class="value-proposition">Transforming business ideas into powerful digital solutions. I deliver high-performance web applications, intuitive user experiences, and data-driven results that drive growth and efficiency for forward-thinking companies.</p>
      <div class="hero-stats">
        <div class="stat-container">
          <div class="stat-item">
            <span class="stat-number">15+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
        </div>
        <div class="stat-container">
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Client Satisfaction</span>
          </div>
        </div>
        <div class="stat-container">
          <div class="stat-item">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Support Available</span>
          </div>
        </div>
      </div>
      <div class="hero-actions">
        <a href="#portfolio" class="cta-btn primary">View My Work</a>
        <a href="#contact" class="cta-btn secondary">Get Free Quote</a>
      </div>
    </div>
  </section>

  <section id="about" class="about-section">
    <div class="section-header">
      <h2>Professional Profile</h2>
      <p class="section-subtitle">Delivering excellence through innovation and expertise</p>
    </div>
    <div class="about-content">
      <div class="about-text">
        <p class="lead">
          As a dedicated Full-Stack Developer and UI/UX Designer, I specialize in creating scalable web solutions that drive business growth. Currently pursuing advanced studies in Software Development at Ivy Tech Community College, I combine academic excellence with real-world expertise.
        </p>
        <div class="expertise-grid">
          <div class="expertise-item">
            <h4>Development Excellence</h4>
            <p>Modern frameworks, clean code, scalable architecture</p>
          </div>
          <div class="expertise-item">
            <h4>Design Leadership</h4>
            <p>User-centered design, conversion optimization, brand consistency</p>
          </div>
          <div class="expertise-item">
            <h4>Business Impact</h4>
            <p>ROI-focused solutions, performance optimization, growth strategies</p>
          </div>
          <div class="expertise-item">
            <h4>Client Partnership</h4>
            <p>Collaborative approach, transparent communication, ongoing support</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="services-section">
    <div class="section-header">
      <h2>Services & Solutions</h2>
      <p class="section-subtitle">Comprehensive digital solutions for modern businesses</p>
    </div>
    <div class="services-grid">
      <div class="service-card">
        <h3>Full-Stack Development</h3>
        <p>Custom web applications built with modern technologies like React, Node.js, and TypeScript. Scalable, secure, and performance-optimized solutions.</p>
        <ul class="service-features">
          <li>Responsive Web Applications</li>
          <li>API Development & Integration</li>
          <li>Database Design & Optimization</li>
          <li>Performance & Security</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>UI/UX Design</h3>
        <p>User-centered design that converts visitors into customers. From wireframes to high-fidelity prototypes, creating experiences users love.</p>
        <ul class="service-features">
          <li>User Research & Analysis</li>
          <li>Wireframing & Prototyping</li>
          <li>Brand Identity Design</li>
          <li>Conversion Optimization</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Mobile Solutions</h3>
        <p>Cross-platform mobile applications and responsive web solutions that work seamlessly across all devices and platforms.</p>
        <ul class="service-features">
          <li>Progressive Web Apps</li>
          <li>Mobile-First Design</li>
          <li>Cross-Platform Development</li>
          <li>App Store Optimization</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Digital Strategy</h3>
        <p>Strategic consulting to help businesses leverage technology for growth. SEO optimization, performance audits, and digital transformation.</p>
        <ul class="service-features">
          <li>SEO & Performance Audits</li>
          <li>Technology Consulting</li>
          <li>Digital Transformation</li>
          <li>Ongoing Maintenance</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="experience" class="experience-section">
    <div class="section-header">
      <h2>Technical Expertise</h2>
      <p class="section-subtitle">Cutting-edge technologies delivering measurable results</p>
    </div>
    <div class="tech-categories">
      <div class="tech-category">
        <h3>Frontend Development</h3>
        <div class="tech-grid">
          <div class="tech-item">
            <img src="skills/react.svg" alt="React" loading="lazy" />
            <span>React</span>
            <div class="proficiency">Expert</div>
          </div>
          <div class="tech-item">
            <img src="skills/typescript.svg" alt="TypeScript" loading="lazy" />
            <span>TypeScript</span>
            <div class="proficiency">Advanced</div>
          </div>
          <div class="tech-item">
            <img src="skills/javascript.svg" alt="JavaScript" loading="lazy" />
            <span>JavaScript</span>
            <div class="proficiency">Expert</div>
          </div>
          <div class="tech-item">
            <img src="skills/css3.svg" alt="CSS" loading="lazy" />
            <span>CSS3</span>
            <div class="proficiency">Expert</div>
          </div>
          <div class="tech-item">
            <img src="skills/html5.svg" alt="HTML" loading="lazy" />
            <span>HTML5</span>
            <div class="proficiency">Expert</div>
          </div>
        </div>
      </div>
      <div class="tech-category">
        <h3>Backend & Database</h3>
        <div class="tech-grid">
          <div class="tech-item">
            <picture>
              <source srcset="tools/node.webp" type="image/webp">
              <img src="tools/node.png" alt="Node.js" loading="lazy" />
            </picture>
            <span>Node.js</span>
            <div class="proficiency">Advanced</div>
          </div>
          <div class="tech-item">
            <img src="skills/python.svg" alt="Python" loading="lazy" />
            <span>Python</span>
            <div class="proficiency">Intermediate</div>
          </div>
        </div>
      </div>
      <div class="tech-category">
        <h3>Design & Development Tools</h3>
        <div class="tech-grid">
          <div class="tech-item">
            <picture>
              <source srcset="tools/figma.webp" type="image/webp">
              <img src="tools/figma.png" alt="Figma" loading="lazy" />
            </picture>
            <span>Figma</span>
            <div class="proficiency">Expert</div>
          </div>
          <div class="tech-item">
            <picture>
              <source srcset="tools/photoshop.webp" type="image/webp">
              <img src="tools/photoshop.png" alt="Photoshop" loading="lazy" />
            </picture>
            <span>Photoshop</span>
            <div class="proficiency">Advanced</div>
          </div>
          <div class="tech-item">
            <picture>
              <source srcset="tools/vsCode.webp" type="image/webp">
              <img src="tools/vsCode.png" alt="VS Code" loading="lazy" />
            </picture>
            <span>VS Code</span>
            <div class="proficiency">Expert</div>
          </div>
          <div class="tech-item">
            <picture>
              <source srcset="tools/gitHub.webp" type="image/webp">
              <img src="tools/gitHub.png" alt="GitHub" loading="lazy" />
            </picture>
            <span>Git/GitHub</span>
            <div class="proficiency">Advanced</div>
          </div>
          <div class="tech-item">
            <picture>
              <source srcset="tools/canva.webp" type="image/webp">
              <img src="tools/canva.png" alt="Canva" loading="lazy" />
            </picture>
            <span>Canva</span>
            <div class="proficiency">Advanced</div>
          </div>
          <div class="tech-item">
            <picture>
              <source srcset="tools/excel.webp" type="image/webp">
              <img src="tools/excel.png" alt="Excel" loading="lazy" />
            </picture>
            <span>Excel</span>
            <div class="proficiency">Intermediate</div>
          </div>
          <div class="tech-item">
            <picture>
              <source srcset="tools/godot.webp" type="image/webp">
              <img src="tools/godot.png" alt="Godot" loading="lazy" />
            </picture>
            <span>Godot</span>
            <div class="proficiency">Intermediate</div>
          </div>
          <div class="tech-item">
            <picture>
              <source srcset="tools/powerPoint.webp" type="image/webp">
              <img src="tools/powerPoint.png" alt="PowerPoint" loading="lazy" />
            </picture>
            <span>PowerPoint</span>
            <div class="proficiency">Intermediate</div>
          </div>
          <div class="tech-item">
            <picture>
              <source srcset="tools/wordPress.webp" type="image/webp">
              <img src="tools/wordPress.png" alt="WordPress" loading="lazy" />
            </picture>
            <span>WordPress</span>
            <div class="proficiency">Intermediate</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="portfolio" class="portfolio-section">
    <div class="section-header">
      <h2>Featured Projects</h2>
      <p class="section-subtitle">Real solutions driving real business results</p>
    </div>
    <div class="portfolio-filters">
      <button class="filter-btn active" data-filter="all">All Projects</button>
      <button class="filter-btn" data-filter="web">Web Applications</button>
      <button class="filter-btn" data-filter="webpages">Business Websites</button>
      <button class="filter-btn" data-filter="games">Interactive Media</button>
    </div>
    <div class="portfolio-grid">
      <div class="portfolio-card featured" data-type="web">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/pizzabyu.webp" type="image/webp">
              <img src="/projects/pizzabyu.png" alt="PizzaByU" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>JavaScript</span>
              <span>UI</span>
              <span>Ordering Flow</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>PizzaByU</h3>
          <p class="portfolio-desc">Interactive pizza builder with size/crust/sauce/toppings selection and a guided checkout flow.</p>
          <div class="portfolio-actions">
            <a href="https://hligon35.github.io/pizzabyu/" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a>
          </div>
        </div>
      </div>

      <div class="portfolio-card" data-type="web">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/cedar&gold_lebanese.webp" type="image/webp">
              <img src="/projects/cedar&gold_lebanese.png" alt="Cedar & Gold Lebanese" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>SEO</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>Cedar & Gold Lebanese Restaraunt Website</h3>
          <p class="portfolio-desc">Restaurant marketing site with menu, about/contact pages, and a mobile-first layout for quick browsing.</p>
          <div class="portfolio-actions">
            <a href="https://hligon35.github.io/cedarngoldlebanese/" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a>
          </div>
        </div>
      </div>

      <div class="portfolio-card" data-type="webpages">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/luxurious_cakes.webp" type="image/webp">
              <img src="/projects/luxurious_cakes.png" alt="Luxurious Cakes Indy" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>WordPress</span>
              <span>SEO</span>
              <span>Performance</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>Luxurious Cakes Indy</h3>
          <p class="portfolio-desc">Business website optimized for showcasing products, driving inquiries, and improving discoverability.</p>
          <div class="portfolio-actions">
            <a href="https://www.luxuriouscakesindy.com/" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a>
          </div>
        </div>
      </div>

      <div class="portfolio-card" data-type="webpages">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/life_prep_academy_foundation.webp" type="image/webp">
              <img src="/projects/life_prep_academy_foundation.png" alt="Life Prep Academy Foundation" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>Web Design</span>
              <span>Content</span>
              <span>SEO</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>Life Prep Academy Foundation</h3>
          <p class="portfolio-desc">Organization website designed to communicate mission, improve trust, and make it easy to engage with programs.</p>
          <div class="portfolio-actions">
            <a href="https://www.lifeprepacademyfoundation.com/" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a>
          </div>
        </div>
      </div>

      <div class="portfolio-card" data-type="games">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/coinDash.webp" type="image/webp">
              <img src="/projects/coinDash.png" alt="Coin Dash" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>Godot</span>
              <span>Web Export</span>
              <span>WebGL2</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>Coin Dash</h3>
          <p class="portfolio-desc">Arcade-style web game built with Godot and exported for the browser.</p>
          <div class="portfolio-actions">
            <a href="https://hligon35.github.io/coinDash/" class="btn btn-primary" target="_blank" rel="noopener">Play Demo</a>
          </div>
        </div>
      </div>

      <div class="portfolio-card" data-type="games">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/infiniteFlyer.webp" type="image/webp">
              <img src="/projects/infiniteFlyer.png" alt="Infinite Flyer" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>Godot</span>
              <span>Web Export</span>
              <span>WebGL2</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>Infinite Flyer</h3>
          <p class="portfolio-desc">Endless flyer with quick sessions, score chasing, and lightweight performance for the web.</p>
          <div class="portfolio-actions">
            <a href="https://hligon35.github.io/infiniteFlyer/" class="btn btn-primary" target="_blank" rel="noopener">Play Now</a>
          </div>
        </div>
      </div>

      <div class="portfolio-card" data-type="web">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/bearVoice.webp" type="image/webp">
              <img src="/projects/bearVoice.png" alt="Bear Voice" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>Website</span>
              <span>Interactive</span>
              <span>Portfolio</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>The Bear Voice</h3>
          <p class="portfolio-desc">Voiceover portfolio website showcasing commercial/narration/character demos, voice styles, studio equipment, delivery platforms, coaching, and a contact form.</p>
          <div class="portfolio-actions">
            <a href="https://hligon35.github.io/thebearvoice/" class="btn btn-primary" target="_blank" rel="noopener">View Project</a>
          </div>
        </div>
      </div>

      <div class="portfolio-card" data-type="games">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/jungleJumper.webp" type="image/webp">
              <img src="/projects/jungleJumper.png" alt="Jungle Jumper" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>Game Development</span>
              <span>WebGL</span>
              <span>Interactive</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>Jungle Jumper</h3>
          <p class="portfolio-desc">Exciting platformer game with jungle adventures, challenging levels, and smooth web-based gameplay.</p>
          <div class="portfolio-actions">
            <a href="#contact" class="btn btn-primary">Play Game</a>
          </div>
        </div>
      </div>

      <div class="portfolio-card" data-type="web">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/non-profit.webp" type="image/webp">
              <img src="/projects/non-profit.png" alt="MMMBC" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>Website</span>
              <span>Business</span>
              <span>Interactive</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>MMMBC</h3>
          <p class="portfolio-desc">Multi-page church website for Mt. Moriah Missionary Baptist Church featuring worship times, ministries, leadership, upcoming events, FAQs, and contact/social links.</p>
          <div class="portfolio-actions">
            <a href="https://hligon35.github.io/mmmbc/" class="btn btn-primary" target="_blank" rel="noopener">View Project</a>
          </div>
        </div>
      </div>

      <div class="portfolio-card" data-type="games">
        <div class="portfolio-image">
            <picture>
              <source srcset="/projects/space_rocks.webp" type="image/webp">
              <img src="/projects/space_rocks.png" alt="Space Rocks" loading="lazy" />
            </picture>
          <div class="portfolio-overlay">
            <div class="portfolio-tech">
              <span>Game Development</span>
              <span>WebGL</span>
              <span>Interactive</span>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3>Space Rocks</h3>
          <p class="portfolio-desc">Exciting space-themed game with asteroid shooting, cosmic adventures, and challenging gameplay.</p>
          <div class="portfolio-actions">
            <a href="https://hligon35.github.io/spaceRocks/" class="btn btn-primary" target="_blank" rel="noopener">Play Game</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-value-prop">
        <h2>Why Choose Our Services?</h2>
        <div class="value-grid">
          <div class="value-item">
            <h4>Fast Delivery</h4>
            <p>Most projects completed within 2-4 weeks</p>
          </div>
          <div class="value-item">
            <h4>Competitive Pricing</h4>
            <p>High-quality solutions at fair market rates</p>
          </div>
          <div class="value-item">
            <h4>Ongoing Support</h4>
            <p>1 month free maintenance included</p>
          </div>
          <div class="value-item">
            <h4>Business Results</h4>
            <p>Solutions designed to drive ROI</p>
          </div>
        </div>
      </div>
      
      <div class="section-header" style="margin-top: 4rem;">
        <h2>Let's Build Something Great Together</h2>
        <p class="section-subtitle">Ready to transform your vision into reality? Let's discuss your project.</p>
        <div class="hero-actions" style="margin-top: 3rem;">
          <button id="project-request-btn" class="cta-btn primary">Let's Make It Happen!</button>
        </div>
      </div>

      <div id="contact-form" class="basic-contact-card" aria-label="Contact form" style="margin-top: 3rem;">
        <div class="section-header" style="margin-top: 0;">
          <h2>Send a Message</h2>
          <p class="section-subtitle">Email me directly at <a href="mailto:info@hldesignedit.com">info@hldesignedit.com</a> or use the form below.</p>
        </div>

        <form id="basic-contact-form" class="basic-contact-form" novalidate>
          <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;" />
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
              <label class="form-label" for="contact-phone">Phone (optional)</label>
              <input id="contact-phone" name="phone" type="tel" class="form-input" autocomplete="tel" placeholder="(555) 123-4567" />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-subject">Subject (optional)</label>
              <input id="contact-subject" name="subject" type="text" class="form-input" autocomplete="off" placeholder="What can I help with?" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label required" for="contact-message">Message</label>
            <textarea id="contact-message" name="message" class="form-textarea" placeholder="Tell me about your project..." required></textarea>
          </div>

          <div class="basic-contact-actions">
            <button type="submit" class="cta-btn primary">Send Email</button>
            <p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-cta">
        <div class="footer-cta__text">
          <h3>Ready to build something great?</h3>
          <p>Tell me what you need—I'll help you ship a site that looks sharp and performs.</p>
        </div>
        <div class="footer-cta__actions">
          <a href="#contact" class="cta-btn primary">Start a Project</a>
          <a href="#portfolio" class="cta-btn secondary">View Work</a>
          <a href="#contact" class="cta-btn secondary">Support Nonprofits</a>
        </div>
      </div>

      <div class="footer-grid" aria-label="Footer navigation">
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">My Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <a href="#services">Web Applications</a>
          <a href="#services">Business Websites</a>
          <a href="#services">UI/UX Design</a>
          <a href="#contact">Maintenance & Updates</a>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <a href="#contact">Request a quote</a>
          <a href="#contact">Ask a question</a>
          <a href="#contact">Project request form</a>
        </div>

        <div class="footer-col">
          <h4>Social</h4>
          <a href="https://github.com/hligon35" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital</a>
        </div>
      </div>

      <div class="footer-bottom">
        <a class="footer-backtotop" href="#hero">Back to top ↑</a>
        <div class="footer-partner">In partnership with <a href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital Media Marketing Company</a></div>
        <div class="footer-legal">© <span id="footer-year">2026</span> Harold Ligon</div>
      </div>
    </div>
  </footer>
  
  <!-- Project Request Modal -->
  <div id="project-modal" class="modal-overlay" style="display: none;">
    <div class="modal-content">
      <div class="modal-header">
        <button id="modal-close" class="modal-close">&times;</button>
        <h2>Project Request Form</h2>
        <p>Let's bring your vision to life with professional development</p>
        <a href="assets/forms/project-request-form.pdf" download="Project-Request-Form.pdf" class="pdf-download">
          📄 Download PDF Version
        </a>
      </div>
      
      <div class="modal-body">
        <form id="project-form" class="project-form">
          <div class="form-group">
            <label class="form-label required">Date Submitted (MM/DD/YYYY)</label>
            <div class="date-input">
              <div class="date-group">
                <label>Month</label>
                <input type="number" name="submittedMonth" min="1" max="12" placeholder="MM" class="form-input" required>
              </div>
              <div class="date-group">
                <label>Day</label>
                <input type="number" name="submittedDay" min="1" max="31" placeholder="DD" class="form-input" required>
              </div>
              <div class="date-group">
                <label>Year</label>
                <input type="number" name="submittedYear" min="2024" max="2030" placeholder="YYYY" class="form-input" required>
              </div>
            </div>
          </div>

          <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;" />
  
          <div class="form-section">
            <h3><span class="form-section-icon">👤</span>Section 1: Basic Information</h3>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label required">Full Name</label>
                <input type="text" name="fullName" class="form-input" placeholder="Enter your full name" required>
              </div>
              <div class="form-group">
                <label class="form-label">Organization (if applicable)</label>
                <input type="text" name="organization" class="form-input" placeholder="Company or organization name">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label required">Email Address</label>
                <input type="email" name="email" class="form-input" placeholder="your.email@example.com" required>
              </div>
              <div class="form-group">
                <label class="form-label">Phone Number (optional)</label>
                <input type="tel" name="phone" class="form-input" placeholder="(555) 123-4567">
              </div>
            </div>
          </div>
  
          <div class="form-section">
            <h3><span class="form-section-icon">💡</span>Section 2: Project Overview</h3>
            <div class="form-group">
              <label class="form-label required">Project Title</label>
              <input type="text" name="projectTitle" class="form-input" placeholder="Enter a descriptive project title" required>
            </div>
            <div class="form-group">
              <label class="form-label required">One-Sentence Summary of Your Project</label>
              <textarea name="projectSummary" class="form-textarea" placeholder="Describe your project in one clear sentence..." required></textarea>
            </div>
            <div class="form-group">
              <label class="form-label required">Project Type (check one)</label>
              <div class="checkbox-group">
                <div class="checkbox-item">
                  <input type="radio" name="project-type" value="website" id="type-website" required>
                  <label for="type-website">Website or Web App</label>
                </div>
                <div class="checkbox-item">
                  <input type="radio" name="project-type" value="mobile" id="type-mobile">
                  <label for="type-mobile">Mobile App</label>
                </div>
                <div class="checkbox-item">
                  <input type="radio" name="project-type" value="ai" id="type-ai">
                  <label for="type-ai">AI-powered Tool or Feature</label>
                </div>
                <div class="checkbox-item">
                  <input type="radio" name="project-type" value="branding" id="type-branding">
                  <label for="type-branding">Branding or Marketing Content</label>
                </div>
                <div class="checkbox-item">
                  <input type="radio" name="project-type" value="data" id="type-data">
                  <label for="type-data">Data Analysis / Dashboard</label>
                </div>
                <div class="checkbox-item">
                  <input type="radio" name="project-type" value="presentation" id="type-presentation">
                  <label for="type-presentation">Presentation or Proposal</label>
                </div>
                <div class="checkbox-item">
                  <input type="radio" name="project-type" value="other" id="type-other">
                  <label for="type-other">Other</label>
                </div>
              </div>
              <div class="other-input" id="other-project-type">
                <input type="text" name="otherProjectType" class="form-input" placeholder="Please specify other project type...">
              </div>
            </div>
          </div>
  
          <div class="form-section">
            <h3><span class="form-section-icon">⚙️</span>Section 3: Functionality & Features</h3>
            <div class="form-group">
              <label class="form-label required">Main Goals of the Project</label>
              <textarea name="mainGoals" class="form-textarea large" placeholder="Describe the primary objectives and what you want to achieve (3 main goals)..." required></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Key Features You'd Like Included</label>
              <textarea name="keyFeatures" class="form-textarea large" placeholder="List the specific features and functionality you need (3 key features)..."></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">AI Capabilities You're Interested In</label>
              <textarea name="aiCapabilities" class="form-textarea" placeholder="Describe any AI features like chatbots, automation, data analysis..."></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Preferred Platforms or Devices</label>
              <textarea name="platforms" class="form-textarea" placeholder="Desktop, mobile, iOS, Android, web browsers..."></textarea>
            </div>
          </div>
  
          <div class="form-section">
            <h3>Section 4: Style & Branding</h3>
            <div class="form-group">
              <label class="form-label">Tone of Voice</label>
              <input type="text" name="toneOfVoice" class="form-input" placeholder="e.g., professional, fun, supportive, modern...">
            </div>
            <div class="form-group">
              <label class="form-label">Visual Style or Inspirations</label>
              <textarea name="visualStyle" class="form-textarea" placeholder="Describe your preferred style or share links to inspiring designs..."></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Preferred Colors / Fonts / Logos (if applicable)</label>
              <textarea name="branding" class="form-textarea" placeholder="Specify brand colors, font preferences, or logo requirements..."></textarea>
            </div>
          </div>
  
          <div class="form-section">
            <h3><span class="form-section-icon">📄</span>Section 5: Content & Data</h3>
            <div class="form-group">
              <label class="form-label">Will you provide content (text, images, copy)?</label>
              <div class="radio-group">
                <div class="radio-item">
                  <input type="radio" name="provide-content" value="yes" id="content-yes" required>
                  <label for="content-yes">Yes</label>
                </div>
                <div class="radio-item">
                  <input type="radio" name="provide-content" value="no" id="content-no">
                  <label for="content-no">No, I'll need help</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Do you have data or files to include?</label>
              <div class="radio-group">
                <div class="radio-item">
                  <input type="radio" name="have-data" value="yes" id="data-yes" required>
                  <label for="data-yes">Yes</label>
                </div>
                <div class="radio-item">
                  <input type="radio" name="have-data" value="no" id="data-no">
                  <label for="data-no">No</label>
                </div>
              </div>
              <div class="form-group" style="margin-top: 1rem;">
                <label class="form-label">If yes, please describe</label>
                <textarea name="dataDescription" class="form-textarea" placeholder="Describe the data or files you have available..."></textarea>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Keywords or Messaging to Feature</label>
              <textarea name="keywords" class="form-textarea" placeholder="Important keywords, taglines, or messaging to highlight..."></textarea>
            </div>
          </div>
  
          <div class="form-section">
            <h3>Section 6: Timing & Budget</h3>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Ideal Timeline or Launch Date</label>
                <input type="text" name="timeline" class="form-input" placeholder="e.g., 2-3 months, by March 2024...">
              </div>
              <div class="form-group">
                <label class="form-label">Budget Range</label>
                <div class="radio-group">
                  <div class="radio-item">
                    <input type="radio" name="budget" value="1000-2000" id="budget-1" required>
                    <label for="budget-1">$1,000–$2,000</label>
                  </div>
                  <div class="radio-item">
                    <input type="radio" name="budget" value="2000-3500" id="budget-2">
                    <label for="budget-2">$2,000–$3,500</label>
                  </div>
                  <div class="radio-item">
                    <input type="radio" name="budget" value="5000+" id="budget-3">
                    <label for="budget-3">$5,000+</label>
                  </div>
                  <div class="radio-item">
                    <input type="radio" name="budget" value="open" id="budget-4">
                    <label for="budget-4">Open to discussion</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="form-section">
            <h3><span class="form-section-icon">🎯</span>Section 7: Success Criteria</h3>
            <div class="form-group">
              <label class="form-label required">How will you know this project is successful?</label>
              <textarea name="successCriteria" class="form-textarea large" placeholder="Define success metrics, goals, or outcomes you're looking for (3 criteria)..." required></textarea>
            </div>
          </div>
  
          <div class="form-section">
            <h3><span class="form-section-icon">💭</span>Section 8: Final Notes or Ideas</h3>
            <div class="form-group">
              <label class="form-label">Anything else you'd like to share?</label>
              <textarea name="finalNotes" class="form-textarea large" placeholder="Additional thoughts, questions, or specific requirements..." maxlength="1000"></textarea>
              <div class="char-counter">0 / 1000 characters</div>
            </div>
          </div>
        </form>
      </div>
      
      <div class="modal-actions">
        <div class="form-progress">Step 8 of 8 - Complete</div>
        <div class="action-buttons">
          <button type="button" id="modal-cancel" class="modal-btn modal-btn-secondary">Cancel</button>
          <button type="submit" form="project-form" class="modal-btn modal-btn-primary">
            <span class="loading-spinner" style="display: none;"></span>
            Submit Request
          </button>
        </div>
      </div>
    </div>
  </div>`,S()}let b={};function u(e){return b[e]||(b[e]=document.getElementById(e)),b[e]}function S(){requestAnimationFrame(()=>{P(),q()}),setTimeout(()=>{j(),L(),D(),C(),k()},100)}function k(){const e=document.getElementById("basic-contact-form");if(!e)return;const s=()=>window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8787/api/forms":"https://hldesignedit.com/api/forms",l=document.getElementById("basic-contact-status"),o=document.getElementById("contact-name"),t=document.getElementById("contact-email"),a=document.getElementById("contact-message"),r=p=>{l&&(l.textContent=p)};e.addEventListener("submit",p=>{p.preventDefault();const c=new FormData(e),n=String(c.get("name")||"").trim(),i=String(c.get("email")||"").trim(),m=String(c.get("phone")||"").trim(),y=String(c.get("subject")||"").trim(),h=String(c.get("message")||"").trim();if(!n){r("Please enter your name."),o&&o.focus();return}if(!i||!/^\S+@\S+\.\S+$/.test(i)){r("Please enter a valid email address."),t&&t.focus();return}if(!h){r("Please enter a message."),a&&a.focus();return}const g=s(),v=e.querySelector('button[type="submit"]');v&&(v.disabled=!0),r("Sending..."),fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({formType:"contact",honeypot:String(c.get("company")||""),pageUrl:window.location.href,data:{name:n,email:i,phone:m,subject:y,message:h}})}).then(async d=>{const f=await d.json().catch(()=>null);if(!d.ok||!(f!=null&&f.ok))throw new Error((f==null?void 0:f.error)||"Unable to send message.");r("Message sent! I will reply within 24 hours."),e.reset()}).catch(()=>{r("Could not send right now. Please email info@hldesignedit.com.")}).finally(()=>{v&&(v.disabled=!1)})})}function j(){const e=u("footer-year");e&&(e.textContent=new Date().getFullYear().toString())}function P(){const e=document.querySelectorAll(".filter-btn"),s=document.querySelectorAll(".portfolio-card");!e.length||!s.length||document.querySelector(".portfolio-filters").addEventListener("click",l=>{if(!l.target.classList.contains("filter-btn"))return;e.forEach(t=>t.classList.remove("active")),l.target.classList.add("active");const o=l.target.dataset.filter.trim().toLowerCase();requestAnimationFrame(()=>{s.forEach(t=>{const a=(t.dataset.type||"").trim().toLowerCase(),r=o==="all"||a===o;t.style.display=r?"":"none"})})},{passive:!0})}function q(){document.addEventListener("click",e=>{const s=e.target.closest('a[href^="#"]');if(!s)return;e.preventDefault();const l=s.getAttribute("href"),o=document.querySelector(l);if(o){const r=o.offsetTop-80;window.scrollTo({top:r,behavior:"smooth"})}},{passive:!1})}function L(){const e=u("greeting-text");if(!e)return;const s=["Hola","Bonjour","Ciao","こんにちは","你好","Hello"];let l=0;const o=()=>{e.style.opacity="0",setTimeout(()=>{e.textContent=s[l],e.style.opacity="1",l=(l+1)%s.length},200)};e.style.transition="opacity 0.2s ease",setTimeout(()=>{o(),setInterval(o,3e3)},2e3)}function D(){const e=document.querySelector(".portfolio-header");if(!e)return;let s=!1;const l=()=>{const o=window.scrollY>100;e.style.background=o?"rgba(255, 255, 255, 0.98)":"rgba(255, 255, 255, 0.95)",e.style.boxShadow=o?"0 4px 6px -1px rgba(0, 0, 0, 0.1)":"",s=!1};window.addEventListener("scroll",()=>{s||(requestAnimationFrame(l),s=!0)},{passive:!0})}function C(){const e=u("project-modal"),s=u("project-request-btn"),l=u("modal-close"),o=u("modal-cancel"),t=u("project-form"),a=u("other-project-type");if(!e||!s||!t)return;const r=()=>{e.style.display="none",document.body.style.overflow="auto",t.reset(),a&&a.classList.remove("active")};s.addEventListener("click",n=>{n.preventDefault(),e.style.display="flex",document.body.style.overflow="hidden"}),l&&l.addEventListener("click",r),o&&o.addEventListener("click",r),e.addEventListener("click",n=>{n.target===e&&r()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&e.style.display==="flex"&&r()}),t.addEventListener("change",n=>{if(n.target.name==="project-type"){const i=n.target.value==="other"&&n.target.checked;if(a){a.classList.toggle("active",i);const m=a.querySelector("input");m&&(m.required=i,i||(m.value=""))}}},{passive:!0});const p=t.querySelector('textarea[name="finalNotes"]'),c=t.querySelector(".char-counter");p&&c&&p.addEventListener("input",()=>{const n=p.value.length;c.textContent=`${n} / 1000 characters`,c.classList.toggle("warning",n>800)},{passive:!0}),t.addEventListener("submit",async n=>{n.preventDefault();const i=t.querySelector(".modal-btn-primary");if(!i)return;const m=i.innerHTML;i.disabled=!0,i.innerHTML='<span class="loading-spinner"></span> Submitting...';const h=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8787/api/forms":"https://hldesignedit.com/api/forms";try{const g=Object.fromEntries(new FormData(t).entries()),v=await fetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({formType:"project",honeypot:String(g.company||""),pageUrl:window.location.href,data:g})}),d=await v.json().catch(()=>null);if(!v.ok||!(d!=null&&d.ok))throw new Error((d==null?void 0:d.error)||"Unable to submit request.");i.innerHTML="✓ Request Submitted!",i.style.background="linear-gradient(135deg, #059669, #10b981)",setTimeout(()=>{alert("Thank you! Your project request has been submitted successfully. I will review it and get back to you within 24 hours."),r(),i.innerHTML=m,i.style.background="",i.disabled=!1},800)}catch{i.innerHTML="Error - Please Try Again",i.style.background="linear-gradient(135deg, #dc2626, #ef4444)",setTimeout(()=>{i.innerHTML=m,i.style.background="",i.disabled=!1},2500)}})}
