const menuButton = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');

function closeMenu() {
  if (!menuButton || !mobileNav) return;
  mobileNav.classList.remove('open');
  menuButton.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuButton.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (mobileNav.classList.contains('open') && !mobileNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

/* Additive portfolio enhancements: no scroll loop, canvas, WebGL or requestAnimationFrame. */
document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('link[data-journey-styles]')) {
    const journeyStyles = document.createElement('link');
    journeyStyles.rel = 'stylesheet';
    journeyStyles.href = 'journey.css';
    journeyStyles.dataset.journeyStyles = 'true';
    document.head.appendChild(journeyStyles);
  }

  // Recruiter-first hero update while preserving the existing hero layout and 3D visual.
  const heroRole = document.querySelector('.hero-role');
  if (heroRole) heroRole.textContent = 'Software Engineering Student | Java & DSA | Full-Stack Developer';

  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy && !heroCopy.querySelector('.hero-support')) {
    const support = document.createElement('p');
    support.className = 'hero-support';
    support.textContent = 'I am a second-year B.Tech Computer Science and Engineering student specializing in Software Product Engineering through Kalvium. I enjoy identifying real-world problems and building practical software solutions using Java, DSA, backend development and full-stack technologies.';
    heroCopy.insertBefore(support, heroCopy.querySelector('.actions'));
  }

  const heroMeta = document.querySelector('.hero-meta');
  if (heroMeta) {
    heroMeta.innerHTML = '<div class="hero-indicators"><span>Java + DSA</span><span>Full-Stack Projects</span><span>Problem → Product</span></div><a href="https://github.com/thallamnithvik2900-droid" target="_blank" rel="noreferrer">github.com/thallamnithvik2900-droid ↗</a>';
  }

  const heroStat = document.querySelector('.glass-bottom span:last-child');
  if (heroStat) heroStat.textContent = 'Problem → Product';

  // Add Journey to the existing navigation without removing any current link.
  document.querySelectorAll('.nav-links, .mobile-nav').forEach((nav) => {
    if (!nav.querySelector('a[href="#journey"]')) {
      const link = document.createElement('a');
      link.href = '#journey';
      link.textContent = 'Journey';
      const contact = nav.querySelector('a[href="#contact"]');
      nav.insertBefore(link, contact || null);
      if (nav.classList.contains('mobile-nav')) link.addEventListener('click', closeMenu);
    }
  });

  // Build the Journey section from the supplied facts only.
  if (document.getElementById('journey')) return;
  const experience = document.getElementById('experience');
  if (!experience) return;

  const section = document.createElement('section');
  section.className = 'section journey';
  section.id = 'journey';
  section.setAttribute('aria-labelledby', 'journey-title');
  section.innerHTML = `
    <div class="section-kicker">05 / MY KALVIUM JOURNEY</div>
    <div class="journey-intro">
      <h2 id="journey-title">Learning software engineering by <em>building, solving and improving.</em></h2>
      <p>My journey through Software Product Engineering focuses on problem solving, real projects, backend engineering, full-stack development, and professional growth.</p>
    </div>

    <div class="journey-grid">
      <article class="journey-card journey-profile">
        <span class="journey-label">ABOUT ME</span>
        <h3>From academic learning to practical software engineering.</h3>
        <p>I am a second-year B.Tech Computer Science and Engineering student specializing in Software Product Engineering through Kalvium. My learning is centered on Java, DSA, backend systems, full-stack web development, and building practical products around real-world issues.</p>
        <div class="profile-lines">
          <div class="profile-line"><small>Name</small><strong>Thallam Venkata Sai Nithvik</strong></div>
          <div class="profile-line"><small>Degree</small><strong>B.Tech Computer Science and Engineering</strong></div>
          <div class="profile-line"><small>Track</small><strong>Software Product Engineering through Kalvium</strong></div>
          <div class="profile-line"><small>Current Year</small><strong>Second Year</strong></div>
          <div class="profile-line"><small>University</small><strong>Kalasalingam Academy of Research and Education (KARE)</strong></div>
          <div class="profile-line"><small>CGPA</small><strong>8.88 / 10</strong></div>
          <div class="profile-line"><small>Expected Graduation</small><strong>2029</strong></div>
        </div>
      </article>

      <article class="journey-card">
        <span class="journey-label">ABOUT KALVIUM</span>
        <h3>An industry-focused learning model.</h3>
        <p>Kalvium gives me the structure to combine academic learning with project-based software engineering. It helps me strengthen coding practice, product thinking, debugging, collaboration, and the ability to build real software rather than only study theory.</p>
        <p class="journey-second-p">The program encourages practical application through projects, coding assessments, technical feedback, and team-based development practices.</p>
      </article>

      <article class="journey-card">
        <span class="journey-label">LEARNING CYCLE</span>
        <h3>Learn → Practice → Build → Collaborate → Feedback → Improve</h3>
        <div class="journey-model">
          <div class="journey-model-step"><b>01</b><div><strong>Learn</strong><span>Understand Java, DSA, backend systems, and web development fundamentals.</span></div></div>
          <div class="journey-model-step"><b>02</b><div><strong>Practice</strong><span>Strengthen problem-solving through coding exercises and continuous practice.</span></div></div>
          <div class="journey-model-step"><b>03</b><div><strong>Build</strong><span>Create working applications using real product workflows and APIs.</span></div></div>
          <div class="journey-model-step"><b>04</b><div><strong>Collaborate</strong><span>Work with teams using Git, GitHub, code reviews, and feedback loops.</span></div></div>
          <div class="journey-model-step"><b>05</b><div><strong>Feedback</strong><span>Improve systems after reviews, debugging, and technical evaluation.</span></div></div>
          <div class="journey-model-step"><b>06</b><div><strong>Improve</strong><span>Refine deployments, user flows, and application quality through iteration.</span></div></div>
        </div>
      </article>
    </div>

    <div class="journey-progress-grid">
      <article class="journey-card progress-card">
        <span class="journey-label">CODING PROGRESS · PRIMARY</span>
        <h3>Java & Data Structures / Algorithms</h3>
        <div class="progress-number"><strong>5</strong><span>Java Dojo belts completed</span></div>
        <div class="progress-track" role="progressbar" aria-label="Java Dojo belts completed" aria-valuemin="0" aria-valuemax="5" aria-valuenow="5"><div class="progress-fill"></div></div>
        <p class="progress-copy">Java is my strongest language and a core part of my software engineering growth, with strong focus on DSA, algorithms, and backend reasoning.</p>
        <div class="progress-skills"><span>Arrays</span><span>Hashing</span><span>Sorting</span><span>Two Pointers</span><span>Recursion</span><span>Backtracking</span><span>DSA</span><span>Problem Solving</span></div>
      </article>

      <article class="journey-card progress-card">
        <span class="journey-label">CODING PROGRESS · SECONDARY</span>
        <h3>Python</h3>
        <div class="progress-number"><strong>4</strong><span>Python Dojo belts completed</span></div>
        <p>Python supports my general programming and backend problem-solving foundations alongside Java.</p>
        <div class="progress-skills"><span>Python</span><span>Programming</span><span>Problem Solving</span></div>
      </article>
    </div>

    <div class="readiness-grid">
      <article class="journey-card readiness-card"><span class="journey-label">FULL-STACK DEVELOPMENT</span><h3>React, Next.js, Node.js & MongoDB</h3><p>I have built practical apps using modern web stacks, REST APIs, authentication, database logic, and real user workflows.</p></article>
      <article class="journey-card readiness-card"><span class="journey-label">BACKEND & API WORK</span><h3>Security, validation, and flow design</h3><p>My projects highlight JWT-based authentication, protected routes, CRUD workflows, secure transfer logic, and backend validations.</p></article>
      <article class="journey-card readiness-card"><span class="journey-label">INTERNSHIP READINESS</span><h3>Preparing for a professional software engineering role</h3><p>I am actively seeking opportunities to contribute to real production work and strengthen Java, backend, and full-stack engineering skills in a team environment.</p></article>
    </div>

    <article class="journey-card project-learning">
      <span class="journey-label">PROJECTS</span>
      <h3>What I have built so far.</h3>
      <div class="learning-projects">
        <div class="learning-project"><span class="project-index">01</span><h4>Re-Tix</h4><strong>Ticket resale and verification platform</strong><p>Built a secure full-stack solution for ticket browsing, selling, buying, and transfer workflows with authentication and verification logic.</p></div>
        <div class="learning-project"><span class="project-index">02</span><h4>Ward Clean</h4><strong>Housekeeping task management app</strong><p>Collaborated on a Flutter app for task creation, assignment, tracking, and housekeeping coordination through a digital workflow.</p></div>
      </div>
    </article>

    <div class="readiness-grid">
      <article class="journey-card readiness-card"><span class="journey-label">SKILLS</span><h3>Core technical stack</h3><p>Java, Python, JavaScript, React, Next.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, MySQL, PostgreSQL, Firebase.</p></article>
      <article class="journey-card readiness-card"><span class="journey-label">TEAMWORK</span><h3>Collaborative growth</h3><p>I work with GitHub collaboration, debugging, feature building, and iterative improvement in team environments.</p></article>
      <article class="journey-card readiness-card"><span class="journey-label">CAREER GOAL</span><h3>Paid internship in software engineering</h3><p>My goal is to contribute to real production work, learn professional engineering practices, and grow as a Java/backend/full-stack developer.</p></article>
    </div>

    <article class="journey-card journey-goal">
      <div><span class="journey-label">CURRENT GOAL</span><h3>Secure a paid software engineering internship where I can <em>contribute and learn.</em></h3><p>I want to work on production-facing engineering, strengthen my backend and full-stack skills, and learn how professional software teams build and ship reliable systems.</p></div>
      <div class="focus"><strong>PRIMARY FOCUS</strong><span>Java · DSA · Backend Engineering · Full-Stack Development · Software Product Engineering</span><div class="journey-disclaimer">Actively seeking internship opportunities aligned with software engineering and product development.</div></div>
    </article>

    <article class="journey-card mindset">
      <span class="journey-label">ENGINEERING MINDSET</span>
      <h3>I am learning how to <em>identify problems, design solutions, build products, and improve through feedback.</em></h3>
      <p>My approach is to understand a real-world issue, turn it into a practical software solution, build it carefully, test it, and refine it through iteration and collaboration.</p>
      <div class="mindset-flow"><span>Problem</span><i>→</i><span>Understand</span><i>→</i><span>Design</span><i>→</i><span>Build</span><i>→</i><span>Test</span><i>→</i><span>Improve</span></div>
    </article>
  `;

  experience.parentNode.insertBefore(section, experience);
});

// Existing 3D project interaction: pointer-only, never a scroll/render loop.
const canHover = window.matchMedia('(pointer: fine)').matches;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canHover && !reduceMotion) {
  document.querySelectorAll('.tilt').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1100px) rotateX(${y * -2.8}deg) rotateY(${x * 3.2}deg) translateY(-3px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}
