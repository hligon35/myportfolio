import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="portfolio-header">
    <div class="logo"><span>Harold Ligon | Creative Technologist</span></div>
    <nav id="main-nav">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button id="theme-toggle" title="Toggle dark/light mode" style="text-align:center;">🌙</button>
    </nav>
  </header>
  <section id="hero" class="hero-section">
    <h1><span class="highlight">Hi, I'm Harold Ligon</span></h1>
    <p class="subtitle">Leveraging a mature, creative eye for design and a genuine passion for the latest web technologies, I build stylish, high-performing websites for businesses and individuals. With a solid understanding of SEO tactics, I ensure your online presence is not only beautiful but also easily discoverable, helping you connect with your audience and achieve your digital goals. As an independent contractor, I offer dedicated, personalized service to bring your unique vision to life.</p>
    <a href="#projects" class="cta-btn">See My Work ↓</a>
  </section>
  <section id="about" class="about-section">
    <h2>About Me</h2>
    <p>
      I am a passionate web developer and software development student at Ivy Tech Community College, specializing in creative coding, UI/UX, and interactive design. I thrive on transforming complex challenges into elegant, user-friendly digital solutions that blend technology and design. My experience spans building responsive web applications, engaging games, and impactful graphic design projects. I am committed to continuous learning, staying current with emerging technologies, and collaborating to deliver innovative, high-quality results. Outside of coding, I enjoy exploring new tech trends and sketching creative ideas. I am eager to contribute my skills and creativity to forward-thinking teams and projects.
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
          <a href="https://hligon35.github.io/infiniteFlyer/" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Project<br>(Coming Soon!)</a>
        </div>
        <div class="project-card-content">
          <h3>Infinite Flyer</h3>
          <p class="project-card-desc">A 3D flyer game built with Godot.</p>
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
          <p class="project-card-desc">A 2D top-down, coin collector game made with Godot.</p>
          <div class="project-card-label"><span class="tag">Game</span></div>
        </div>
      </div>
      <!-- Jungle Jumper -->
      <div class="project-card project-card-flex" data-type="games">
        <div class="project-card-imgcol">
          <img src="projects/jungleJumper.png" alt="Jungle Jumper" class="project-card-img" />
          <a href="https://hligon35.github.io/jungleJumper/" class="cta-btn project-card-btn" target="_blank" style="text-align:center;">View Project<br>(Coming Soon!)</a>
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
          <img src="projects/bearvoice.png" alt="Portfolio Site" class="project-card-img" />
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
    <h2>Contact</h2>
    <form id="contact-form">
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

// Contact form with backend submission
document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  
  // Update button state
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;
  
  try {
    // Send to backend
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formProps),
    });
    
    const result = await response.json();
    
    if (response.ok) {
      // Success
      alert('Thank you for your message! I will get back to you soon.');
      e.target.reset();
    } else {
      // Error from server
      alert(`Error: ${result.error || 'Something went wrong. Please try again.'}`);
    }
  } catch (error) {
    // Network error
    console.error('Error submitting form:', error);
    alert('Failed to send message. Please check your internet connection and try again.');
  } finally {
    // Reset button
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
});
