// CSS is now linked directly in index.html
// import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="portfolio-header">
    <div class="logo"><span>Harold Ligon | Creative Technologist</span></div>
    <div class="nav-mobile-toggle" aria-hidden="true"></div>
    <nav id="main-nav">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button id="theme-toggle" title="Toggle dark/light mode" style="text-align:center;">🌙</button>
    </nav>
  </header>
  <section id="hero" class="hero-section">
    <h1><span class="highlight"><span id="greeting-text">Hello</span>, I'm Harold Ligon</span></h1>
    <p class="subtitle">Leveraging a mature, creative eye for design and a genuine passion for the latest web technologies, I build stylish, high-performing websites for businesses and individuals. With a solid understanding of SEO tactics, I ensure your online presence is not only beautiful but also easily discoverable, helping you connect with your audience and achieve your digital goals. As an independent contractor, I offer dedicated, personalized service to bring your unique vision to life.</p>
    <a href="#projects" class="cta-btn">See My Work ↓</a>
  </section>
  <section id="about" class="about-section">
    <h2>About Me</h2>
    <p>
      I am a passionate web and software development student at Ivy Tech Community College, specializing in creative coding, UI/UX, and interactive design. I thrive on transforming complex challenges into elegant, user-friendly digital solutions that blend technology and design. My experience spans building responsive web applications, engaging games, and impactful graphic design projects. I am committed to continuous learning, staying current with emerging technologies, and collaborating to deliver innovative, high-quality results. Outside of coding, I enjoy exploring new tech trends and sketching creative ideas. I am eager to contribute my skills and creativity to forward-thinking teams and projects.
    </p>
  </section>
  <section id="tools" class="tools-section">
    <h2>Tools</h2>
    <div class="tools-list" style="flex-wrap: wrap; flex-direction: column; align-items: center;">
      <div style="display: flex; justify-content: center; gap: 2vw; margin-bottom: 1.5em;">
        <div class="tool-item"><img src="tools/excel.png" alt="Excel" /><span>Excel</span></div>
        <div class="tool-item"><img src="tools/figma.png" alt="Figma" /><span>Figma</span></div>
        <div class="tool-item"><img src="tools/gitHub.png" alt="GitHub" /><span>GitHub</span></div>
        <div class="tool-item"><img src="tools/godot.png" alt="Godot" /><span>Godot</span></div>
        <div class="tool-item"><img src="tools/oneDrive.png" alt="OneDrive" /><span>OneDrive</span></div>
        <div class="tool-item"><img src="tools/outlook.png" alt="Outlook" /><span>Outlook</span></div>
      </div>
      <div style="display: flex; justify-content: center; gap: 2vw;">
        <div class="tool-item"><img src="tools/photoshop.png" alt="Photoshop" /><span>Photoshop</span></div>
        <div class="tool-item"><img src="tools/powerPoint.png" alt="PowerPoint" /><span>PowerPoint</span></div>
        <div class="tool-item"><img src="tools/vsCode.png" alt="VS Code" /><span>VS Code</span></div>
        <div class="tool-item"><img src="tools/word.png" alt="Word" /><span>Word</span></div>
        <div class="tool-item"><img src="tools/wordPress.png" alt="WordPress" /><span>WordPress</span></div>
        <div class="tool-item"><img src="tools/canva.png" alt="Canva" /><span>Canva</span></div>
      </div>
    </div>
  </section>
  <section id="skills" class="skills-section">
    <h2>Skills</h2>
    <div class="skills-list" style="flex-wrap: wrap; flex-direction: column; align-items: center;">
      <div style="display: flex; justify-content: center; gap: 2vw; margin-bottom: 1.5em;">
        <div class="skill"><img src="skills/css.png" alt="CSS" /><span>CSS</span></div>
        <div class="skill"><img src="skills/html.png" alt="HTML" /><span>HTML</span></div>
        <div class="skill"><img src="skills/javaScript.png" alt="JavaScript" /><span>JavaScript</span></div>
        <div class="skill"><img src="skills/node.png" alt="Node.js" /><span>Node.js</span></div>
        <div class="skill"><img src="skills/python.png" alt="Python" /><span>Python</span></div>
        <div class="skill"><img src="skills/react.png" alt="React" /><span>React</span></div>
        <div class="skill"><img src="skills/typeScript.png" alt="TypeScript" /><span>TypeScript</span></div>
      </div>
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
    <h2>Contact For A Free Quote</h2>
    <form id="contact-form" action="https://formspree.io/f/xpwrryky" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit" style="text-align:center;">Send</button>
    </form>
    <div class="contact-socials">
      <a href="https://github.com/hligon35" title="GitHub"><img src="icons/github.png" alt="GitHub" style="width:50px;height:50px;vertical-align:middle;" /><span>GitHub</span>
      <a href="https://www.linkedin.com/in/hligon/" title="LinkedIn"><img src="icons/linkedin.png" alt="LinkedIn" style="width:50px;height:50px;vertical-align:middle;" /><span>LinkedIn</span>
      </a>
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
    <p>Thank you for visiting my portfolio! Feel free to connect with me on social media or send me a message.</p><br>
    <p>Crafted with creativity.</p>
    <p>&copy; 2025 Harold Ligon.</p>
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
}

// Function to hide mobile nav
function hideMobileNav() {
  header.classList.remove('nav-mobile-visible');
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

// For mobile: once a navigation link is tapped, allow a second tap to navigate
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Only on mobile devices
    if (window.innerWidth <= 768) {
      if (!header.classList.contains('nav-mobile-visible')) {
        // If the nav isn't visible yet, show it and prevent navigation
        e.preventDefault();
        showMobileNav();
      } else {
        // Nav is visible and link is clicked - hide nav after a short delay
        // This allows the browser to start navigating before hiding the nav
        // Don't prevent default here to allow the navigation to happen
        setTimeout(hideMobileNav, 150);
      }
    }
  });
});

// Additional event to ensure nav links hide the menu after selection
navLinks.forEach(link => {
  link.addEventListener('touchend', function() {
    // Only on mobile devices
    if (window.innerWidth <= 768 && header.classList.contains('nav-mobile-visible')) {
      // Use a short delay to ensure the navigation has time to start
      setTimeout(hideMobileNav, 150);
    }
  });
});

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

// Multi-language greeting functionality
function initLanguageGreeting() {
  console.log('Initializing language greeting...');
  const greetingElement = document.getElementById('greeting-text');
  
  if (!greetingElement) {
    console.error('Greeting element not found!');
    return;
  }
  
  console.log('Greeting element found:', greetingElement);
  
  // Array of greetings in different languages
  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "Hola", lang: "Spanish" },
    { text: "Bonjour", lang: "French" },
    { text: "Hallo", lang: "German" },
    { text: "Ciao", lang: "Italian" },
    { text: "Olá", lang: "Portuguese" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "안녕하세요", lang: "Korean" },
    { text: "你好", lang: "Chinese" },
    { text: "Привет", lang: "Russian" },
    { text: "مرحبا", lang: "Arabic" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "Γεια σας", lang: "Greek" },
    { text: "Shalom", lang: "Hebrew" },
    { text: "Sawubona", lang: "Zulu" }
  ];
  
  let currentIndex = 0;
  
  function cycleGreeting() {
    console.log('Cycling greeting to:', greetings[currentIndex].text);
    
    // Add fade out effect
    greetingElement.style.opacity = '0';
    greetingElement.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      // Change the text
      greetingElement.textContent = greetings[currentIndex].text;
      console.log('Changed text to:', greetings[currentIndex].text);
      
      // Add fade in effect
      greetingElement.style.opacity = '1';
      greetingElement.style.transform = 'translateY(0)';
      
      // Move to next greeting
      currentIndex = (currentIndex + 1) % greetings.length;
    }, 300); // Wait for fade out to complete
  }
  
  // Set initial transition styles
  greetingElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  console.log('Set transition styles');
  
  // Start the cycling after a short delay
  console.log('Starting greeting cycle in 3 seconds...');
  setTimeout(() => {
    console.log('Starting greeting cycle now');
    cycleGreeting();
    // Continue cycling every 3 seconds
    setInterval(cycleGreeting, 3000);
  }, 3000); // Initial delay of 3 seconds
}

// Test function for debugging (can be called from browser console)
window.testGreeting = function() {
  console.log('Testing greeting functionality...');
  const element = document.getElementById('greeting-text');
  if (element) {
    console.log('Element found:', element);
    console.log('Current text:', element.textContent);
    element.textContent = 'Hola';
    console.log('Changed to: Hola');
    setTimeout(() => {
      element.textContent = 'Bonjour';
      console.log('Changed to: Bonjour');
    }, 2000);
  } else {
    console.error('greeting-text element not found!');
  }
};

// Force initialization function (can be called from browser console)
window.forceInitGreeting = function() {
  console.log('Force initializing greeting...');
  initLanguageGreeting();
};

// Initialize the visitor counter and language greeting when the page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - initializing features...');
  setTimeout(initVisitorCounter, 500); // Small delay for better UX
  setTimeout(() => {
    console.log('Starting language greeting initialization...');
    initLanguageGreeting();
  }, 1000); // Start language cycling after 1 second
});
