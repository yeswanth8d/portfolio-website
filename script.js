// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

document.querySelectorAll('.cards-row .skill-card').forEach((c, i) => {
  c.style.transitionDelay = `${i * 0.08}s`;
  c.classList.add('reveal');
  observer.observe(c);
});


// Tech stack mini-tooltip info
const tagInfo = {
  'React':          'Core UI library — used for component-driven SPAs and complex state management.',
  'Next.js':        'React meta-framework for SSR & SSG. Powers most of my production sites.',
  'Vue':            'Used for lightweight, fast-moving projects where reactivity matters most.',
  'TypeScript':     'Type safety across all major projects. Catches bugs before runtime.',
  'Tailwind':       'Utility-first CSS — speeds up styling without leaving the HTML.',
  'HTML/CSS':       'The foundation. Pixel-perfect markup and hand-crafted stylesheets.',
  'Webpack':        'Module bundler for custom build pipelines and asset optimization.',
  'Vite':           'Lightning-fast dev server and build tool. My go-to for new projects.',
  'Figma':          'Primary design tool. Used for wireframes, hi-fi mockups & design systems.',
  'Adobe XD':       'Prototyping complex interactions before handing off to developers.',
  'Prototyping':    'Interactive prototypes that simulate real user flows and edge cases.',
  'Design Systems': 'Building reusable component libraries with consistent tokens and rules.',
  'Wireframing':    'Low-fidelity structure sketches to validate UX before visual design.',
  'User Research':  'Interviews, surveys & usability tests to back design decisions with data.',
  'React Native':   'Cross-platform mobile framework — one codebase for iOS & Android.',
  'Flutter':        "Google's UI toolkit for natively compiled mobile & desktop apps.",
  'Expo':           'React Native toolchain that simplifies builds, OTA updates & native APIs.',
  'iOS':            'App Store submission, provisioning profiles, and native API access.',
  'Android':        'Google Play deployment, Gradle builds, and Android-specific tuning.',
  'App Store':      'Full publishing pipeline — screenshots, metadata, review & updates.',
  'Push Notifications': 'FCM & APNs integration for targeted re-engagement notifications.',
  'Node.js':        'Server-side JS runtime powering my REST APIs and automation scripts.',
  'Python':         'Used for AI/ML pipelines, backend APIs, and data processing tasks.',
  'PostgreSQL':     'Primary relational DB. Complex queries, joins & performance tuning.',
  'MongoDB':        'Document DB used when schema flexibility and speed matter most.',
  'REST':           'Standard HTTP APIs with clean resource design and proper status codes.',
  'GraphQL':        'Query language for flexible, typed APIs — avoids over/under-fetching.',
  'Docker':         'Every project containerised. Compose for dev, consistent prod builds.',
  'AWS':            'EC2, S3, Lambda, RDS & CloudFront — full cloud deployment experience.',
  'Claude API':     'Primary LLM I build with daily — reasoning, coding, document analysis.',
  'OpenAI':         'GPT models used for comparison and tasks where OpenAI has an edge.',
  'RAG':            'Retrieval-Augmented Generation — grounds AI responses in real data.',
  'LangChain':      'Chaining LLM calls, tools & memory into multi-step AI workflows.',
  'n8n':            'Visual automation builder — connects APIs and orchestrates pipelines.',
  'Ollama':         'Runs open-source LLMs locally for private, offline AI experiments.',
  'HuggingFace':    'Hub for open models, embedding models, datasets & spaces.',
  'Embeddings':     'Vector representations of text used in semantic search & RAG systems.',
  'GSAP':           'The gold-standard animation library. Smooth, precise, 60fps.',
  'Framer Motion':  'React animation library — used for layout animations & page transitions.',
  'Three.js':       '3D in the browser. WebGL scenes, shaders & interactive experiences.',
  'CSS Animations': 'Performant keyframe animations and transitions without JS overhead.',
  'Lottie':         'After Effects animations rendered as lightweight JSON for the web.',
  'ScrollTrigger':  'GSAP plugin for scroll-driven storytelling and pinned sequences.',
};

// ── SKILL MODAL DATA ──
const skillData = {
  frontend: {
    icon: '⚛️', title: 'Frontend Dev', desc: 'Building blazing-fast, pixel-perfect interfaces that users love. I obsess over performance, accessibility, and smooth interactions that make products feel premium.',
    tags: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind', 'HTML/CSS', 'Webpack', 'Vite'],
    detail: 'From landing pages to complex SPAs, I architect frontend systems that scale. I focus on component-driven development, state management, and seamless API integration.',
    highlights: ['Built 30+ production-grade React applications', 'Expert in performance optimization & Core Web Vitals', 'Strong eye for design systems & component libraries', 'Experience with SSR, SSG, and hybrid rendering strategies']
  },
  design: {
    icon: '🎨', title: 'UI / UX Design', desc: 'Design is not just how it looks — it\'s how it works. I bridge the gap between raw aesthetics and real usability, creating interfaces that convert and delight.',
    tags: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'Wireframing', 'User Research'],
    detail: 'I create comprehensive design systems, interactive prototypes, and polished visual identities. My designs are always built with the developer handoff in mind.',
    highlights: ['Designed full brand identities from concept to delivery', 'Built reusable Figma component libraries for large teams', 'Expertise in responsive, mobile-first design patterns', 'Strong understanding of typography, color theory & layout']
  },
  mobile: {
    icon: '📱', title: 'Mobile Dev', desc: 'Cross-platform mobile development that delivers native-quality experiences. One codebase, every platform — without compromising on feel.',
    tags: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android', 'App Store', 'Push Notifications'],
    detail: 'I build mobile apps that users actually enjoy using. From smooth animations to offline-first architecture, I cover the full mobile development lifecycle.',
    highlights: ['Published apps on both App Store and Google Play', 'Expert in React Native + Expo ecosystem', 'Native module integration for device APIs', 'Experience with push notifications, deep linking & analytics']
  },
  fullstack: {
    icon: '🕸️', title: 'Full Stack', desc: 'I own the entire stack — from database design and API architecture to deployment pipelines. I build systems that scale and don\'t break at 3am.',
    tags: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST', 'GraphQL', 'Docker', 'AWS'],
    detail: 'Full ownership of backend systems, microservices, and cloud infrastructure. I design APIs that are intuitive, secure, and built for scale.',
    highlights: ['Designed REST & GraphQL APIs serving 50k+ daily users', 'Experience with microservices and event-driven architecture', 'Strong DevOps skills — CI/CD, Docker, cloud deployments', 'Database optimization, caching strategies, and query tuning']
  },
  ai: {
    icon: '🧠', title: 'AI / LLMs', desc: 'Integrating intelligent systems into real products — not just wrappers, but deeply embedded AI that actually solves problems for users.',
    tags: ['Claude API', 'OpenAI', 'RAG', 'LangChain', 'n8n', 'Ollama', 'HuggingFace', 'Embeddings'],
    detail: 'I build AI-powered features including chatbots, document analysis tools, RAG pipelines, and automation workflows using the latest LLM tooling.',
    highlights: ['Built production RAG pipelines with vector databases', 'Designed multi-agent automation workflows using n8n', 'Experience with prompt engineering and fine-tuning', 'Integrated LLMs into mobile and web applications']
  },
  motion: {
    icon: '✦', title: 'Motion & 3D', desc: 'The difference between a good interface and a great one is often motion. I create animations that guide attention, delight users, and reinforce brand personality.',
    tags: ['GSAP', 'Framer Motion', 'Three.js', 'CSS Animations', 'Lottie', 'ScrollTrigger'],
    detail: 'From scroll-driven storytelling to 3D scene composition, I use motion as a design tool — purposeful, performant, and always in service of the user experience.',
    highlights: ['Complex scroll-based animations with GSAP ScrollTrigger', 'Interactive 3D experiences with Three.js and WebGL', 'Micro-interaction systems for design libraries', 'Performance-first animation: 60fps on all devices']
  }
};

// ── SKILL MODAL LOGIC ──
const overlay  = document.getElementById('skillModalOverlay');
const modal    = document.getElementById('skillModal');
const closeBtn = document.getElementById('skillModalClose');

function openModal(skillKey) {
  const d = skillData[skillKey]; if (!d) return;
  document.getElementById('modalIcon').textContent   = d.icon;
  document.getElementById('modalTitle').textContent  = d.title;
  document.getElementById('modalDesc').textContent   = d.desc;
  document.getElementById('modalDetail').textContent = d.detail;
  document.getElementById('modalTags').innerHTML     = d.tags.map(t=>{
    const tip = tagInfo[t] || '';
    return `<span class="modal-tag-item" data-tip="${tip}">${t}${tip ? '<span class="tag-minipop"></span>' : ''}</span>`;
  }).join('');
  document.getElementById('modalList').innerHTML     = d.highlights.map(h=>`<li>${h}</li>`).join('');
  overlay.classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeModal() { overlay.classList.remove('open'); document.body.style.overflow = ''; }

// ── TAG MINI-TOOLTIP ──
let activeMiniPop = null;
document.addEventListener('mouseover', e => {
  const tag = e.target.closest('.modal-tag-item[data-tip]');
  if (!tag || !tag.dataset.tip) return;
  // Remove any existing
  if (activeMiniPop) { activeMiniPop.remove(); activeMiniPop = null; }
  const pop = document.createElement('div');
  pop.className = 'tag-minipop-bubble';
  pop.textContent = tag.dataset.tip;
  document.body.appendChild(pop);
  activeMiniPop = pop;
  // Position above the tag
  const rect = tag.getBoundingClientRect();
  pop.style.left = rect.left + rect.width / 2 + 'px';
  pop.style.top  = (rect.top + window.scrollY - 8) + 'px';
  requestAnimationFrame(() => pop.classList.add('visible'));
});
document.addEventListener('mouseout', e => {
  const tag = e.target.closest('.modal-tag-item[data-tip]');
  if (!tag) return;
  if (activeMiniPop) { activeMiniPop.remove(); activeMiniPop = null; }
});

document.querySelectorAll('.bento-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.skill));
});
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── LOAD MORE PROJECTS ──
const loadMoreBtn = document.getElementById('loadMoreBtn');
const extraProjects = document.getElementById('extraProjects');
if (loadMoreBtn && extraProjects) {
  loadMoreBtn.addEventListener('click', () => {
    if (extraProjects.style.display === 'none') {
      extraProjects.style.display = 'grid';
      requestAnimationFrame(() => {
        extraProjects.classList.add('visible');
        // re-observe new cards for reveal
        extraProjects.querySelectorAll('.proj-card').forEach((c, i) => {
          c.style.opacity = '0';
          c.style.transform = 'translateY(30px)';
          c.style.transition = `opacity 0.5s ${i * 0.07}s ease, transform 0.5s ${i * 0.07}s ease`;
          setTimeout(() => {
            c.style.opacity = '1';
            c.style.transform = 'translateY(0)';
          }, 50);
        });
      });
      loadMoreBtn.querySelector('span:last-child').textContent = 'Loaded ✓';
      loadMoreBtn.querySelector('.load-more-icon').textContent = '✦';
      loadMoreBtn.style.borderColor = 'rgba(227,28,28,0.5)';
    }
  });
}


// ── IN MY UNIVERSE ──
(function () {
  const stage   = document.getElementById('universeStage');
  const svgEl   = document.getElementById('threadSvg');
  const tooltip = document.getElementById('threadTooltip');
  const nodes   = document.querySelectorAll('.tool-node');
  const popup   = document.getElementById('nodePopup');
  const popupClose = document.getElementById('nodePopupClose');

  if (!stage || !svgEl) return;

  // SVG glow filter
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `<filter id="threadGlow" x="-60%" y="-60%" width="220%" height="220%">
    <feGaussianBlur stdDeviation="3" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>`;
  svgEl.appendChild(defs);

  // ── NODE DATA for popup ──
  const nodeInfo = {
    claude:      { cat:'AI Assistant',   desc:'My primary AI for coding, writing, and reasoning tasks. I build with the Claude API daily.',   level:5, label:'Expert' },
    n8n:         { cat:'Automation',     desc:'Visual workflow builder I use to connect APIs and automate repetitive pipelines without code.', level:4, label:'Advanced' },
    ollama:      { cat:'Local AI',       desc:'Runs LLMs locally on my machine. Perfect for private experiments and offline AI workflows.',    level:3, label:'Intermediate' },
    huggingface: { cat:'AI / ML Hub',    desc:'Source for open-source models, datasets, and spaces. I use it for embedding models and fine-tuning.', level:3, label:'Intermediate' },
    linkedin:    { cat:'Network',        desc:'Professional network where I share projects, connect with devs, and explore opportunities.',    level:5, label:'Active' },
    vscode:      { cat:'Code Editor',    desc:'My daily driver for code. Customised heavily with extensions for AI-assisted development.',    level:5, label:'Expert' },
    github:      { cat:'Version Control',desc:'All my projects live here. I use Actions for CI/CD and host open-source experiments.',          level:5, label:'Expert' },
    python:      { cat:'Language',       desc:'My go-to for AI/ML scripts, backend APIs, automation tools, and data processing pipelines.',   level:5, label:'Expert' },
    cursor:      { cat:'AI Editor',      desc:'AI-powered IDE that dramatically speeds up development with inline completions and chat.',      level:4, label:'Advanced' },
    llm:         { cat:'AI Technology',  desc:'Deep understanding of how large language models work — from transformers to RAG to fine-tuning.', level:4, label:'Advanced' },
    rag:         { cat:'AI Pattern',     desc:'Retrieval-Augmented Generation — I build RAG pipelines to ground AI responses in real data.',   level:4, label:'Advanced' },
    leetcode:    { cat:'DSA Practice',   desc:'Regular problem-solving practice to keep algorithms and data structures sharp.',               level:3, label:'Intermediate' },
    docker:      { cat:'Containers',     desc:'I containerise every project I deploy. Docker Compose for local dev, swarms for production.',  level:4, label:'Advanced' },
    react:       { cat:'UI Framework',   desc:'My frontend framework of choice. Built 30+ apps with React and its ecosystem.',               level:5, label:'Expert' },
    clawbot:     { cat:'AI Bot',         desc:'Custom AI-powered bot project I built and maintain for automation and assistant tasks.',       level:4, label:'Advanced' },
    openai:      { cat:'AI Provider',    desc:'GPT models used for comparison testing and specific tasks where OpenAI excels.',               level:4, label:'Advanced' },
    iot:         { cat:'Hardware / IoT', desc:'Building connected device projects — sensors, microcontrollers, and MQTT-based data pipelines.', level:2, label:'Beginner' },
    linux:       { cat:'OS',            desc:'My server OS of choice. Comfortable with bash, cron jobs, networking, and sys administration.', level:4, label:'Advanced' },
    fastapi:     { cat:'Backend',        desc:'Python-based API framework I use to build fast, documented REST APIs with async support.',      level:4, label:'Advanced' },
    langflow:    { cat:'AI Builder',     desc:'Visual LLM pipeline builder. I use it to prototype agentic workflows and multi-step AI flows.', level:3, label:'Intermediate' },
    postgres:    { cat:'Database',       desc:'Primary relational DB. I design schemas, write complex queries, and optimise performance.',    level:4, label:'Advanced' },
    aws:         { cat:'Cloud',          desc:'Deployed multiple projects on AWS — EC2, S3, Lambda, RDS, and CloudFront for CDN.',            level:3, label:'Intermediate' },
    redis:       { cat:'Cache / DB',     desc:'Used for session caching, pub/sub messaging, and rate limiting in backend applications.',      level:3, label:'Intermediate' },
  };

  // Positions as 0-1 fractions
  const positions = {};
  nodes.forEach(n => {
    positions[n.dataset.tool] = {
      px: parseFloat(n.style.left) / 100,
      py: parseFloat(n.style.top)  / 100
    };
    n.classList.add('floating');
  });

  const lines = {};

  function nodeCenter(node) {
    const pos = positions[node.dataset.tool];
    return {
      x: pos.px * stage.offsetWidth  + 31,
      y: pos.py * stage.offsetHeight + 31
    };
  }

  function headPos() {
    const sr     = stage.getBoundingClientRect();
    const svgFig = document.querySelector('.spiderman-svg');
    if (!svgFig) return { x: stage.offsetWidth / 2, y: stage.offsetHeight + 30 };
    const fr = svgFig.getBoundingClientRect();
    return {
      x: fr.left + fr.width / 2 - sr.left,
      y: stage.offsetHeight + (fr.top - sr.bottom) + 28
    };
  }

  function ensureLine(key) {
    if (!lines[key]) {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.classList.add('thread-line');
      svgEl.appendChild(path);
      lines[key] = path;
    }
    return lines[key];
  }

  function drawLine(node, state) {
    const key  = node.dataset.tool;
    const tc   = nodeCenter(node);
    const hc   = headPos();
    const path = ensureLine(key);
    const cx   = tc.x + (hc.x - tc.x) * 0.4;
    const cy   = tc.y + (hc.y - tc.y) * 0.45 - 50;
    path.setAttribute('d', `M ${tc.x} ${tc.y} Q ${cx} ${cy} ${hc.x} ${hc.y}`);
    path.classList.remove('active', 'ripple');
    if (state === 'active') path.classList.add('active');
    else if (state === 'ripple') path.classList.add('ripple');
  }

  function drawAll(activeKey, rippleAll) {
    nodes.forEach(n => {
      const key = n.dataset.tool;
      if (key === activeKey) drawLine(n, 'active');
      else if (rippleAll) drawLine(n, 'ripple');
      else drawLine(n, 'idle');
    });
  }

  requestAnimationFrame(() => setTimeout(() => drawAll(null, false), 250));
  window.addEventListener('resize', () => drawAll(null, false));

  const uSec = document.getElementById('universe');
  if (uSec) {
    new IntersectionObserver(e => {
      if (e[0].isIntersecting) setTimeout(() => drawAll(null, false), 150);
    }, { threshold: 0.05 }).observe(uSec);
  }

  // ── POPUP logic ──
  let activePopupNode = null;

  function openPopup(node) {
    const key  = node.dataset.tool;
    const info = nodeInfo[key];
    if (!info) return;

    // Position popup above the node
    const pos  = positions[key];
    const sw   = stage.offsetWidth;
    const sh   = stage.offsetHeight;
    const nodeX = pos.px * sw;
    const nodeY = pos.py * sh;
    const popW  = 220;
    const popH  = 220; // approximate height

    // Center popup horizontally on the node, open above it
    let left = nodeX + 31 - popW / 2;
    let top  = nodeY - popH - 12; // 12px gap above node icon top

    // Clamp horizontally
    if (left < 4) left = 4;
    if (left + popW > sw - 4) left = sw - popW - 4;
    // If goes above stage, show below instead
    if (top < 4) top = nodeY + 70;

    popup.style.left = left + 'px';
    popup.style.top  = top  + 'px';
    popup.style.transformOrigin = 'bottom center';

    // Fill content
    const iconEl = node.querySelector('.tool-icon').cloneNode(true);
    document.getElementById('popupIcon').innerHTML = '';
    document.getElementById('popupIcon').appendChild(iconEl.cloneNode(true));
    document.getElementById('popupName').textContent     = node.querySelector('span').textContent;
    document.getElementById('popupCategory').textContent = info.cat;
    document.getElementById('popupDesc').textContent     = info.desc;
    document.getElementById('popupLevelName').innerHTML  = `<em>${info.label}</em>`;

    // Bars — 5 total, fill based on level
    const bars = document.getElementById('popupBars');
    bars.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const b = document.createElement('div');
      b.className = 'node-popup-bar';
      if (i < info.level) {
        b.classList.add('filled');
      }
      bars.appendChild(b);
    }

    popup.classList.add('open');
    activePopupNode = node;
  }

  function closePopup() {
    popup.classList.remove('open');
    activePopupNode = null;
  }

  if (popupClose) popupClose.addEventListener('click', closePopup);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });

  // ── HOVER + CLICK on nodes ──
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      node.classList.add('hovered');
      // Ripple: active thread red, all others blue ripple
      drawAll(node.dataset.tool, true);
      tooltip.textContent = '🔗  ' + (node.dataset.label || node.querySelector('span').textContent);
      tooltip.classList.add('show');
    });
    node.addEventListener('mousemove', e => {
      tooltip.style.left = (e.clientX + 18) + 'px';
      tooltip.style.top  = (e.clientY - 12) + 'px';
    });
    node.addEventListener('mouseleave', () => {
      node.classList.remove('hovered');
      drawAll(null, false);
      tooltip.classList.remove('show');
      node.classList.add('floating');
    });

    node.addEventListener('click', e => {
      e.stopPropagation();
      if (activePopupNode === node) { closePopup(); return; }
      openPopup(node);
      drawAll(node.dataset.tool, true);
    });
  });

  // Close popup when clicking outside
  stage.addEventListener('click', e => {
    if (!e.target.closest('.tool-node') && !e.target.closest('.node-popup')) closePopup();
  });

  // ── DRAG ──
  let dragging = null, dragOff = { x:0, y:0 };

  nodes.forEach(node => {
    node.addEventListener('mousedown', e => {
      e.preventDefault();
      dragging = node; dragOff = { x:e.clientX, y:e.clientY };
      node.classList.remove('floating'); node.style.zIndex = 20;
      closePopup();
    });
    node.addEventListener('touchstart', e => {
      const t = e.touches[0];
      dragging = node; dragOff = { x:t.clientX, y:t.clientY };
      node.classList.remove('floating'); node.style.zIndex = 20;
    }, { passive:true });
  });

  function onMove(cx, cy) {
    if (!dragging) return;
    const key = dragging.dataset.tool;
    const dx = cx - dragOff.x, dy = cy - dragOff.y;
    dragOff = { x:cx, y:cy };
    let px = Math.max(0, Math.min(0.92, positions[key].px + dx / stage.offsetWidth));
    let py = Math.max(0, Math.min(0.88, positions[key].py + dy / stage.offsetHeight));
    positions[key] = { px, py };
    dragging.style.left = (px * 100) + '%';
    dragging.style.top  = (py * 100) + '%';
    drawAll(key, false);
  }

  document.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
  document.addEventListener('touchmove', e => { const t=e.touches[0]; onMove(t.clientX,t.clientY); }, { passive:true });

  function onUp() {
    if (!dragging) return;
    dragging.style.zIndex = '';
    dragging.classList.add('floating');
    dragging = null;
    drawAll(null, false);
  }
  document.addEventListener('mouseup', onUp);
  document.addEventListener('touchend', onUp);

})();
