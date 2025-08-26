// CSS is now linked directly in index.html
// import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="portfolio-header">
    <div class="logo"><span>Harold Ligon | Web Developer</span></div>
    <div class="nav-mobile-toggle" role="button" aria-controls="main-nav" aria-expanded="false" title="Menu"></div>
    <nav id="main-nav">
      <a href="#services">Services</a>
      <a href="#projects">Portfolio</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <button id="theme-toggle" title="Toggle dark/light mode" style="text-align:center;">🌙</button>
    </nav>
  </header>
  <section id="hero" class="hero-section">
  <h1><span class="highlight">Need a Website That Grows Your Business?</span></h1>
    <p class="subtitle">I design and build modern, high-performing websites that help you stand out, attract customers, and achieve your business goals. From concept to launch, I deliver professional, mobile-friendly, and SEO-optimized solutions tailored to your needs.</p>
    <a href="#contact" class="cta-btn" style="font-size:1.3em;">Request a Free Consultation</a>
    <div style="margin-top:2em; font-size:1.1em; color:#fff;">
      <strong>Specializing in:</strong> Business Websites, E-Commerce, Portfolios, Non-Profits, and More
    </div>
  </section>
  <section id="services" class="about-section">
    <h2>Web Development Services</h2>
    <ul style="text-align:left; max-width:600px; margin:0 auto; font-size:1.15em; line-height:1.7;">
      <li><strong>Custom Website Design &amp; Development</strong> – Unique, branded sites built for your goals</li>
      <li><strong>Mobile-First &amp; Responsive</strong> – Looks great on any device</li>
      <li><strong>SEO Optimization</strong> – Get found on Google and drive more traffic</li>
      <li><strong>Fast, Secure, and Accessible</strong> – Modern best practices for performance and safety</li>
      <li><strong>Ongoing Support</strong> – Reliable help, updates, and advice after launch</li>
    </ul>
    <div style="margin-top:2em; text-align:center;">
      <a href="#projects" class="cta-btn">See My Work</a>
    </div>
  </section>
  <section id="about" class="about-section">
    <h2>Why Work With Me?</h2>
    <ul style="text-align:left; max-width:600px; margin:0 auto; font-size:1.15em; line-height:1.7;">
      <li><strong>Personalized Service:</strong> You work directly with me, not an agency.</li>
      <li><strong>Results-Focused:</strong> Every site is built to help you achieve your business goals.</li>
      <li><strong>Transparent Process:</strong> Clear communication and no hidden fees.</li>
      <li><strong>Proven Track Record:</strong> See my portfolio and client testimonials below.</li>
    </ul>
  </section>
  <section id="tools" class="tools-section">
    <h2>Tools</h2>
    <div class="tools-list">
      <div class="tool-item"><img src="tools/excel.png" alt="Excel" /><span>Excel</span></div>
      <div class="tool-item"><img src="tools/figma.png" alt="Figma" /><span>Figma</span></div>
      <div class="tool-item"><img src="tools/gitHub.png" alt="GitHub" /><span>GitHub</span></div>
      <div class="tool-item"><img src="tools/godot.png" alt="Godot" /><span>Godot</span></div>
      <div class="tool-item"><img src="tools/oneDrive.png" alt="OneDrive" /><span>OneDrive</span></div>
      <div class="tool-item"><img src="tools/outlook.png" alt="Outlook" /><span>Outlook</span></div>
      <div class="tool-item"><img src="tools/photoshop.png" alt="Photoshop" /><span>Photoshop</span></div>
      <div class="tool-item"><img src="tools/powerPoint.png" alt="PowerPoint" /><span>PowerPoint</span></div>
      <div class="tool-item"><img src="tools/vsCode.png" alt="VS Code" /><span>VS Code</span></div>
      <div class="tool-item"><img src="tools/word.png" alt="Word" /><span>Word</span></div>
      <div class="tool-item"><img src="tools/wordPress.png" alt="WordPress" /><span>WordPress</span></div>
      <div class="tool-item"><img src="tools/canva.png" alt="Canva" /><span>Canva</span></div>
    </div>
  </section>
  <section id="skills" class="skills-section">
    <h2>Skills</h2>
    <div class="skills-list">
      <div class="skill"><img src="skills/css.png" alt="CSS" /><span>CSS</span></div>
      <div class="skill"><img src="skills/html.png" alt="HTML" /><span>HTML</span></div>
      <div class="skill"><img src="skills/javaScript.png" alt="JavaScript" /><span>JavaScript</span></div>
      <div class="skill"><img src="skills/node.png" alt="Node.js" /><span>Node.js</span></div>
      <div class="skill"><img src="skills/python.png" alt="Python" /><span>Python</span></div>
      <div class="skill"><img src="skills/react.png" alt="React" /><span>React</span></div>
      <div class="skill"><img src="skills/typeScript.png" alt="TypeScript" /><span>TypeScript</span></div>
    </div>
  </section>
  <section id="projects" class="projects-section">
    <h2>Projects</h2>
    <div class="project-filters">
      <button class="filter-btn" data-filter="web" style="text-align:center;">Web Apps</button>
      <button class="filter-btn" data-filter="webpages" style="text-align:center;">Web Pages</button>
      <button class="filter-btn" data-filter="design" style="text-align:center;">Graphic Design</button>
      <button class="filter-btn" data-filter="games" style="text-align:center;">Games</button>
      <button class="filter-btn active" data-filter="all" style="text-align:center;">All</button>      
    </div>
    <div class="projects-grid">
      <!-- PizzaByU -->
      <div class="project-card project-card-flex" data-type="web">
        <div class="project-card-imgcol">
          <img src="projects/pizzabyu.png" alt="PizzaByU" class="project-card-img" />
          <a href="https://hligon35.github.io/pizzabyu/" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Project</a>
        </div>
        <div class="project-card-content">
          <h3>Interactive Dashboard</h3>
          <p class="project-card-desc">A dynamic dashboard with real-time charts and filters.</p>
          <div class="project-card-label"><span class="tag">Web App</span></div>
        </div>
      </div>
      <!-- E-Commerce App -->
      <div class="project-card project-card-flex" data-type="web">
        <div class="project-card-imgcol">
          <img src="projects/comingSoon.png" alt="E-Commerce" class="project-card-img" />
          <a href="" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Project<br>(Coming Soon!)</a>
        </div>
        <div class="project-card-content">
          <h3>E-Commerce</h3>
          <p class="project-card-desc">An interactive and reactive e-commerce web application.</p>
          <div class="project-card-label"><span class="tag">Web App</span></div>
        </div>
      </div>
      <!-- Infinite Flyer -->
      <div class="project-card project-card-flex" data-type="games">
        <div class="project-card-imgcol">
          <img src="projects/infiniteFlyer.png" alt="Infinite Flyer" class="project-card-img" />
          <a href="https://hligon35.github.io/infiniteFlyer/" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Project</a>
        </div>
        <div class="project-card-content">
          <h3>Infinite Flyer</h3>
          <p class="project-card-desc">A 3D flyer built with Godot.</p>
          <div class="project-card-label"><span class="tag">Game</span></div>
        </div>
      </div>
      <!-- Coin Dash -->
      <div class="project-card project-card-flex" data-type="games">
        <div class="project-card-imgcol">
          <img src="projects/coinDash.png" alt="Coin Dash" class="project-card-img" />
          <a href="https://hligon35.github.io/coinDash/" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Project</a>
        </div>
        <div class="project-card-content">
          <h3>Coin Dash</h3>
          <p class="project-card-desc">A 2D top-down, coin collector made with Godot.</p>
          <div class="project-card-label"><span class="tag">Game</span></div>
        </div>
      </div>
      <!-- Jungle Jumper -->
      <div class="project-card project-card-flex" data-type="games">
        <div class="project-card-imgcol">
          <img src="projects/jungleJumper.png" alt="Jungle Jumper" class="project-card-img" />
          <a href="https://hligon35.github.io/jungleJumper/" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Project</a>
        </div>
        <div class="project-card-content">
          <h3>Jungle Jumper</h3>
          <p class="project-card-desc">A 2D platformer made with Godot.</p>
          <div class="project-card-label"><span class="tag">Game</span></div>
        </div>
      </div>
      <!-- Voice-Over Portfolio -->
      <div class="project-card project-card-flex" data-type="webpages">
        <div class="project-card-imgcol">
          <img src="projects/bearVoice.png" alt="Portfolio Site" class="project-card-img" />
          <a href="https://hligon35.github.io/thebearvoice/" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Project</a>
        </div>
        <div class="project-card-content">
          <h3>Voice-over Portfolio</h3>
          <p class="project-card-desc">This creative portfolio webpage, showcases your work and skills.</p>
          <div class="project-card-label"><span class="tag">Web Page</span></div>
        </div>
      </div>
      <!-- Non-Profit Site -->
      <div class="project-card project-card-flex" data-type="webpages">
        <div class="project-card-imgcol">
          <img src="projects/non-profit.png" alt="Portfolio Site" class="project-card-img" />
          <a href="https://hligon35.github.io/mmmbc/" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Project</a>
        </div>
        <div class="project-card-content">
          <h3>Non-Profit Website</h3>
          <p class="project-card-desc">Bring in donors for your non-profit.</p>
          <div class="project-card-label"><span class="tag">Web Page</span></div>
        </div>
      </div>
      <!-- Graphic Design Example -->
      <div class="project-card project-card-flex" data-type="design">
        <div class="project-card-imgcol">
          <img src="graphicDesign/Logos.png" alt="Logos" class="project-card-img" />
          <a href="graphicDesign/Logos.png" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Graphic</a>
        </div>
        <div class="project-card-content">
          <h3>Graphic Sample A</h3>
          <p class="project-card-desc">A vibrant event flyer designed using Canva.</p>
          <div class="project-card-label"><span class="tag">Graphic Design</span></div>
        </div>
      </div>
      <!-- Graphic Design Example -->
      <div class="project-card project-card-flex" data-type="design">
        <div class="project-card-imgcol">
          <img src="graphicDesign/Flyers.png" alt="Flyer" class="project-card-img" />
          <a href="graphicDesign/Flyers.png" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Graphic</a>
        </div>
        <div class="project-card-content">
          <h3>Graphic Sample B</h3>
          <p class="project-card-desc">A vibrant event flyer designed using Canva.</p>
          <div class="project-card-label"><span class="tag">Graphic Design</span></div>
        </div>
      </div>
      <!-- Graphic Design Example -->
      <div class="project-card project-card-flex" data-type="design">
        <div class="project-card-imgcol">
          <img src="graphicDesign/banners.png" alt="Banners" class="project-card-img" />
          <a href="graphicDesign/banners.png" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Graphic</a>
        </div>
        <div class="project-card-content">
          <h3>Graphic Sample C</h3>
          <p class="project-card-desc">A vibrant event flyer designed using Canva.</p>
          <div class="project-card-label"><span class="tag">Graphic Design</span></div>
        </div>
      </div>
      <!-- Graphic Design Example -->
      <div class="project-card project-card-flex" data-type="design">
        <div class="project-card-imgcol">
          <img src="graphicDesign/graphicA.png" alt="Graphic D" class="project-card-img" />
          <a href="graphicDesign/graphicA.png" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Graphic</a>
        </div>
        <div class="project-card-content">
          <h3>Graphic Sample D</h3>
          <p class="project-card-desc"></p>
          <div class="project-card-label"><span class="tag">Graphic Design</span></div>
        </div>
      </div>
      <!-- Graphic Design Example -->
      <div class="project-card project-card-flex" data-type="design">
        <div class="project-card-imgcol">
          <img src="graphicDesign/graphicB.png" alt="Graphic E" class="project-card-img" />
          <a href="graphicDesign/graphicB.png" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Graphic</a>
        </div>
        <div class="project-card-content">
          <h3>Graphic Sample E</h3>
          <p class="project-card-desc"></p>
          <div class="project-card-label"><span class="tag">Graphic Design</span></div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="contact-section">
    <h2>Let's Build Your Website</h2>
    <p style="text-align:center; font-size:1.1em; margin-bottom:1.5em; color:var(--text);">Ready to take your business online or upgrade your current site? Fill out the form below for a free, no-obligation consultation. I respond within 24 hours.</p>
    <form id="contact-form" action="https://formspree.io/f/xpwrryky" method="POST">
      <input type="text" name="name" placeholder="Your Name or Business" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Tell me about your project, goals, or any questions you have..." required></textarea>
      <button type="submit" style="text-align:center;">Request Consultation</button>
    </form>
    <div class="contact-socials">
      <a href="https://github.com/hligon35" title="GitHub"><img src="icons/github.png" alt="GitHub" style="width:50px;height:50px;vertical-align:middle;" /><span>GitHub</span></a>
      <a href="https://www.linkedin.com/in/hligon/" title="LinkedIn"><img src="icons/linkedin.png" alt="LinkedIn" style="width:50px;height:50px;vertical-align:middle;" /><span>LinkedIn</span></a>
    </div>
    <div style="margin-top:2em; text-align:center; color:var(--accent); font-size:1.05em;">
      <strong>100% Satisfaction Guarantee –</strong> I’m committed to delivering a website you’ll love.
    </div>
  </section>
  <div class="visitor-counter">
    <div class="counter-container">
      <span class="counter-icon">👁️</span>
      <span class="counter-text">Visitors: </span>
      <span id="visitor-count" class="counter-number">Loading...</span>
    </div>
  </div>
  <footer class="footer">
    <p>Ready to grow your business with a professional website? <a href="#contact" style="color:var(--accent);text-decoration:underline;">Contact me today</a> for a free consultation.</p>
    <p style="margin-top:1em;">Proudly serving businesses, entrepreneurs, and organizations with creative, results-driven web solutions.</p>
    <p style="margin-top:1em;">&copy; 2025 Harold Ligon. All rights reserved.</p>
  </footer>
`;

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggle.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
  
  // On mobile, hide the navigation after toggling the theme
  if (window.innerWidth <= 768) {
    setTimeout(hideMobileNav, 150);
  }
});

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter').trim().toLowerCase();
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      // Only show cards that match the filter exactly (no partial matches)
      const type = (card.dataset.type || '').trim().toLowerCase();
      if (filter === 'all') {
        card.style.removeProperty('display');
      } else if (type === filter) {
        card.style.removeProperty('display');
      } else {
        card.style.setProperty('display', 'none', 'important');
      }
    });
  });
});

// Contact form with Formspree
document.getElementById('contact-form').addEventListener('submit', e => {
  // No need to prevent default - let the form submit to Formspree
  
  // Just show a loading state on the button
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;
  
  // The form will automatically redirect back to the page after submission
  // We can add a success parameter to the URL to show a thank you message
  
  // Check if we were redirected back after a successful submission
  if (window.location.search.includes('?success=true')) {
    alert('Thank you for your message! I will get back to you soon.');
    // Clear the success parameter from URL to prevent showing the message multiple times
    history.replaceState(null, '', window.location.pathname);
  }
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-mobile-toggle');
const header = document.querySelector('.portfolio-header');
const navLinks = document.querySelectorAll('#main-nav a');

// Function to show mobile nav
function showMobileNav() {
  header.classList.add('nav-mobile-visible');
  const toggle = document.querySelector('.nav-mobile-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'true');
}

// Function to hide mobile nav
function hideMobileNav() {
  header.classList.remove('nav-mobile-visible');
  const toggle = document.querySelector('.nav-mobile-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

// Toggle navigation visibility on mobile
if (navToggle) {
  navToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    
    if (header.classList.contains('nav-mobile-visible')) {
      hideMobileNav();
    } else {
      showMobileNav();
    }
  });
  // Keyboard accessibility for toggle
  navToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (header.classList.contains('nav-mobile-visible')) {
        hideMobileNav();
      } else {
        showMobileNav();
      }
    }
  });
}

// Hide navigation when clicking outside of it
document.addEventListener('click', function(e) {
  if (header.classList.contains('nav-mobile-visible')) {
    // Check if click is outside the navigation
    if (!e.target.closest('#main-nav') && !e.target.closest('.nav-mobile-toggle')) {
      hideMobileNav();
    }
  }
});

// Smooth scroll with header offset and active link highlight
function getHeaderOffset() {
  const h = document.querySelector('.portfolio-header');
  return h ? h.offsetHeight : 0;
}

function smoothScrollToId(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  const headerOffset = getHeaderOffset();
  const bodyPad = parseInt(getComputedStyle(document.body).paddingTop || '0', 10) || 0;
  const effectiveOffset = Math.max(headerOffset - bodyPad, 0);
  const y = target.getBoundingClientRect().top + window.pageYOffset - effectiveOffset + 8;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function setActiveLink(hash) {
  navLinks.forEach(a => a.classList.remove('active'));
  const active = Array.from(navLinks).find(a => a.getAttribute('href') === hash);
  if (active) active.classList.add('active');
}

// Handle nav link clicks
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      // Update the URL hash for shareable deep links
      if (history.pushState) {
        history.pushState(null, '', href);
      } else {
        window.location.hash = href;
      }
      smoothScrollToId(href);
      setActiveLink(href);
      if (window.innerWidth <= 768) setTimeout(hideMobileNav, 150);
    }
  });
});

// Update active link on scroll
const sectionIds = ['#services', '#projects', '#about', '#contact'];
const sections = sectionIds
  .map(id => ({ id, el: document.querySelector(id) }))
  .filter(s => !!s.el);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    const headerOffset = getHeaderOffset();
    // Pick the entry closest to the top and intersecting
    const visible = entries
      .filter(en => en.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (visible) {
      const id = '#' + visible.target.id;
      setActiveLink(id);
    }
  }, { root: null, rootMargin: `-${getHeaderOffset()}px 0px 0px 0px`, threshold: 0.35 });

  sections.forEach(s => observer.observe(s.el));
}

// Fallback: if IntersectionObserver isn't available, update active link on scroll
else if (sections.length) {
  const onScroll = () => {
    const headerOffset = getHeaderOffset();
    let current = sections[0].id;
    for (const s of sections) {
      const top = s.el.getBoundingClientRect().top - headerOffset;
      if (top <= 20) current = s.id; else break;
    }
    setActiveLink(current);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// If page loads with a hash, adjust scroll for header
function initHashScroll() {
  if (window.location.hash) {
    const hash = window.location.hash;
    // Defer to allow layout to settle
    setTimeout(() => {
      smoothScrollToId(hash);
      setActiveLink(hash);
    }, 50);
  }
}

// Visitor Counter Functionality
function initVisitorCounter() {
  const counterElement = document.getElementById('visitor-count');
  
  // Get visitor count from localStorage or initialize
  let visitorCount = localStorage.getItem('visitorCount');
  
  if (!visitorCount) {
    // First time visitor
    visitorCount = Math.floor(Math.random() * 500) + 100; // Start with a random number between 100-600
    localStorage.setItem('visitorCount', visitorCount);
    localStorage.setItem('lastVisit', Date.now());
  } else {
    // Check if it's been more than 24 hours since last visit
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const hoursSinceLastVisit = (now - parseInt(lastVisit)) / (1000 * 60 * 60);
    
    if (hoursSinceLastVisit >= 24) {
      // Increment counter for returning visitor after 24+ hours
      visitorCount = parseInt(visitorCount) + 1;
      localStorage.setItem('visitorCount', visitorCount);
      localStorage.setItem('lastVisit', now);
    }
  }
  
  // Add some random increment to simulate other visitors
  const sessionVisitors = Math.floor(Math.random() * 5) + 1;
  const totalCount = parseInt(visitorCount) + sessionVisitors;
  
  // Animate the counter
  animateCounter(counterElement, totalCount);
}

function animateCounter(element, targetValue) {
  let currentValue = 0;
  const increment = Math.ceil(targetValue / 30); // Animate over 30 steps
  const duration = 2000; // 2 seconds
  const stepTime = duration / 30;
  
  const timer = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(timer);
    }
    element.textContent = currentValue.toLocaleString();
  }, stepTime);
}

// ...existing code...
// ...existing code...

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initVisitorCounter, 300);
  initHashScroll();
  // Default active link when no hash
  if (!window.location.hash) {
    setActiveLink('#services');
  }
  // Keep active state fresh after resizes (header height may change)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Close mobile nav on desktop resize
      if (window.innerWidth > 768) hideMobileNav();
      // Update active link to the section closest to top
      const headerOffset = getHeaderOffset();
      let current = sections.length ? sections[0].id : '#services';
      for (const s of sections) {
        const top = s.el.getBoundingClientRect().top - headerOffset;
        if (top <= 20) current = s.id; else break;
      }
      setActiveLink(current);
    }, 120);
  });
});
