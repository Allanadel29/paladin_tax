// Service details data

const services = [
  { id: 1, icon: 'fa-solid fa-lightbulb', 
    title: 'Income Tax Computation Services', 
    desc: 'Preparation of detailed income tax computations aligned with statutory and acounting requirements.', 
    keyDeliverables: [
      'Detailed income tax computation',
      'Capital allowance computations',
      'Tax loss schedules and carry‑forward tracking',
      'Deferred tax computation',
      'Management summary of tax position',
      'Identification of tax risks and planning opportunities'
    ]
  },

  { id: 2, icon: 'fa-solid fa-file-invoice-dollar', 
    title: 'Income Tax Return Filing Services', 
    desc: 'Ed-to-end preparation and submission of annualincome tax returns.',
    keyDeliverables: [
      'Completed annual income tax return (ITF form)',
      'Electronic submission to ZRA',
      'ZRA acknowledgement of receipt'
    ]
  },

  { id: 3, icon: 'fa-solid fa-calculator', 
    title: 'Value Added Tax (VAT) Filing Services', 
    desc: 'Monthly VAT return preparation and submission',
    keyDeliverables: [
      'Monthly VAT return preparation and submision',
      'VAT reconciliation to accouting records',
      'ZRA filing acknowledgements',
      'Support during VAT audits'
    ]
  },

  { id: 4, icon: 'fa-solid fa-chart-line', 
    title: 'Withholding Tax (WHT) Filing Services', 
    desc: 'Compliance services for accurate with holding tax computation, filing and reporting.',
    keyDeliverables: [
      'WHT return preparation and submission',
      'WHT certificates for suppliers and service providers', 
    ]
  },

  { id: 5, icon: 'fa-solid fa-scale-balanced', 
    title: 'NAPSA Filing Services', 
    desc: 'Social security compliance services coverinng employee contributions and statutory reporting.',
    keyDeliverables: [
      'NAPSA return preparation and submission',
      'Employee contribution schedules',
      'Payroll to NAPSA reconciliation',
      'Audits and inspections support'
    ]
  },

  { id: 6, icon: 'fa-solid fa-heart', 
    title: 'NHIMA Filing Services', 
    desc: 'Healthy insurance contribution compliance and reporting services.',
    keyDeliverables: [
      'Monthly NHIMA return preparation and submission',
      'PAyroll reconciliation'
    ]
  },

  { id: 7, icon: 'fa-solid fa-money-check-dollar', 
    title: 'Payroll Management Services', 
    desc: 'Payroll processing and statutory deduction management aligned with employment and tax regulations.',
    keyDeliverables: [
      'Monthly payroll processing',
      'Payroll registers and reports',
      'Employee payslips',
    ]
  },

  { id: 8, icon: 'fa-solid fa-file-contract', 
    title: 'PAYE Filing Services', 
    desc: 'Employee tax deduction computation and statutory filing services.',
    keyDeliverables: [
      'PAYE return preparation and electronic submission',
      'Annual PAYE reconciliation',
      'ZRA filing confirmation'
    ]
  },

  { id: 9, icon: 'fa-solid fa-shield-alt', 
    title: 'Tax Advisory Services', 
    desc: 'Strategic tax advisory services supporting informed decision making and risk management.',
    keyDeliverables: [
      'Tax planning and structuring memoranda',
      'Transaction tax impact assessments',
      'Business model and operational tax efficiency reviews',
      'Tax risk identification and mitigation reports',
      'Advisory on tax incentives, exemptions, and investment reliefs',
      'M&A and restructuring tax support',
      'Cross-border tax advisory and PE analysis',
      'Written technical opinions'
    ]
  },

  { id: 10, icon: 'fa-solid fa-users', 
    title: 'Country-By-Country Reporting (CbCR) Services', 
    desc: 'We support multinational groups and qualifying local entities meeting Country-By-Country Reporting obligations.',
    keyDeliverables: [
      'Assessment of CbCR applicability and threshold requirements',
      'Identification of reporting entity and constituent entities',
      'Preparation of Country-by-Country Report (CbCR XML format)',
      'Preparation of CbCR cover letter to ZRA',
      'Preparation and submission of CbCR notification forms',
      'Electronic filing of CbCR with ZRA',
      'Review and validation of financial and tax data consistency',
      'Coordination with group headquarters and foreign advisors'
    ]
  },

  { id: 11, icon: 'fa-solid fa-scale-balanced', 
    title: 'Transfer Pricing Documentation Services', 
    desc: 'Structured transfer pricing documentation services to support regulatory compliance, internal alignment and audit preparedness across different business sizes.',
    keyDeliverables: [
      'Local file preparation',
      'Company analysis',
      'Detailed industry analysis',
      'Detailed functional analysis',
      'Economic Analysis',
      'Benchmarking report with financial updates',
      'Intercompany agreement review',
      'Transfer pricing policy design',
      'Value chain analysis',
      'Custom risk analysis'
    ]
  },

  { id: 12, icon: 'fa-solid fa-file-invoice-dollar', 
    title: 'Transfer Pricing Controversy Services', 
    desc: 'Support services focused on audit readiness, active dispute handling, and resolution of transfer pricing matters with tax authorities.',
    keyDeliverables: [
      'Pre-Audit Support',
      'Active Audit Support',
      'Dispute Resolution'
    ],
    subDeliverables: {
      'Pre-Audit Support': [
        'Audit readiness assessment',
        'Documentation gap analysis',
        'ZRA risk scoring',
        'Pre-audit strategy memorandum'
      ],
      'Active Audit Support': [
        'ZRA audit response coordination',
        'Negotiation support',
        'Attendance at ZRA meetings',
        'Adjustment impact analysis'
      ],
      'Dispute Resolution':[
        'Objection preparation',
        'Appeals support',
        'Alternative dispute resolution assistance',
        'Settlement strategy development'
      ]
    }
  },

    { id: 13, icon: 'fa-solid fa-heart-pulse', 
    title: 'Transfer Pricing Health Check Services', 
    desc: 'Independent reviews of existing transfer pricing frameworks to identify exposure, misalignment and remediation opportunities.',
    keyDeliverables: [
      'TP Diagnostic Review',
      'Operational TP Review'
    ],
    subDeliverables: {
      'TP Diagnostic Review': [
        'Review of tp documentation and intercompany agreements',
        'Transaction mapping and profitability',
        'ZRA risk indicator analysis',
        'Compliance scoring',
        'Exposure heat map',
        'Remediation roadmap'
      ],
      'Operational TP Review': [
        'Alignment review between accounting systems and tp policies',
        'Invoicing flow analysis',
        'Mark-up testing',
        'Customs vs income tax consistency checks',
        'Management fee substantiation review'
      ]
    }
  },

    { id: 14, icon: 'fa-solid fa-handshake', 
    title: 'Customs Advisory & Compliance Services', 
    desc: 'Paladin Tax and Transfer Pricing Solutions Limited provides end-to-end customs advisory, compliance, and transactional support to businesses.',
    keyDeliverables: [
      'Customs Compliance & Regulatory Advisory',
      'Tariff Classification & Valuation',
      'Customs Duty & Tax Optimization',
      'Import & Export Documentation Review',
      'Customs Audits, Reviews & Risk Assessments',
      'Customs Dispute Resolution & Representation',
      'Customs Process Training & Capacity Building'
    ]
  },

     { id: 15, icon: 'fa-solid fa-clipboard-check', 
    title: 'General Tax & Compliance Health Checks', 
    desc: 'Comprehensive reviews of overall tax and statutory compliance status.',
    keyDeliverables: [
      'Corporate tax liability review (CIT, VAT, PAYE, WHT)',
      'Statutory compliance review (NAPSA, NHIMA, PACRA)',
      'ZRA Portal verification and reconciliations',
      'Detailed risk report with remediation strategy'
    ]
  },

];

const INTERVAL = 10000;
let current = 0;
let timer = null;

const display = document.getElementById('service-display');
const dotsContainer = document.getElementById('service-dots');
const detailOverlay = document.getElementById('detail-overlay');
const detailContent = document.querySelector('.detail-content');
const globalCloseBtn = document.getElementById('global-close-btn');

// Function to show overlay with key deliverables for service 13
function showKeyDeliverablesOverlay(service) {
  if (!detailOverlay || !detailContent) return;
  
  stopTimer(); // Stop the carousel timer when overlay is open
  
  const hasSubDeliverables = service.subDeliverables && Object.keys(service.subDeliverables).length > 0;
  
  let deliverablesContent;
  if (hasSubDeliverables) {
    deliverablesContent = `
      <div class="key-deliverables">
        ${service.keyDeliverables.map(deliverable => `
          <button class="deliverable-btn" data-deliverable="${deliverable}">${deliverable}</button>
        `).join('')}
      </div>
    `;
  } else {
    deliverablesContent = `
      <ul class="key-deliverables-list">
        ${service.keyDeliverables.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <button class="get-quote-btn">Get Quotation</button>
    `;
  }
  
  detailContent.innerHTML = `
    <h2><i class="${service.icon}" style="color: var(--primary)"></i> ${service.title}</h2>
    <p>${service.desc}</p>
    <h3>Key Deliverables</h3>
    ${deliverablesContent}
  `;
  
  detailOverlay.classList.add('active');
  globalCloseBtn.classList.add('show');
  
  if (hasSubDeliverables) {
    // Add click handlers for deliverable buttons
    const deliverableBtns = detailContent.querySelectorAll('.deliverable-btn');
    deliverableBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const deliverable = btn.dataset.deliverable;
        showSubDeliverablesOverlay(service, deliverable);
      });
    });
  } else {
    // Add get quote button handler
    const getQuoteBtn = detailContent.querySelector('.get-quote-btn');
    getQuoteBtn.addEventListener('click', () => {
      closeOverlay();
      scrollToContact(service.title);
    });
  }
}

// Function to show sub-deliverables overlay
function showSubDeliverablesOverlay(service, deliverable) {
  const subItems = service.subDeliverables[deliverable];
  if (!subItems) return;
  
  detailContent.innerHTML = `
    <h2><i class="${service.icon}" style="color: var(--primary)"></i> ${deliverable}</h2>
    <ul class="sub-deliverables-list">
      ${subItems.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <div class="overlay-buttons">
      <button class="get-quote-btn">Get Quotation</button>
    </div>
  `;
  
  // Add get quote button handler
  const getQuoteBtn = detailContent.querySelector('.get-quote-btn');
  getQuoteBtn.addEventListener('click', () => {
    closeOverlay();
    scrollToContact(service.title);
  });
}

// Function to close the overlay
function closeOverlay() {
  if (detailOverlay) {
    detailOverlay.classList.remove('active');
  }
  if (globalCloseBtn) {
    globalCloseBtn.classList.remove('show');
  }
  startTimer(); // Restart the carousel timer when overlay is closed
}

// Function to scroll to contact section and set subject
function scrollToContact(serviceTitle) {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Set the subject input after a short delay to ensure scrolling is complete
    setTimeout(() => {
      const subjectInput = document.querySelector('.contact-form input[type="text"]');
      if (subjectInput) {
        subjectInput.value = `Quotation Request: ${serviceTitle}`;
        subjectInput.focus();
      }
    }, 1000);
  }
}

function renderService(i) {
  const s = services[i];
  const hasDeliverables = s.keyDeliverables && s.keyDeliverables.length > 0;
  const deliverableCount = hasDeliverables ? s.keyDeliverables.length : 0;
  
  display.innerHTML = `
    <div class="service-card" data-id="${s.id}" data-deliverables="${deliverableCount}">
      <i class="${s.icon}" style="color: var(--primary)"></i>
      <h2>${s.title}</h2>
      <p>${s.desc}</p>
      ${hasDeliverables ? `
        <a href="#service-details" class="read learn-more-btn" data-card="${s.id}" data-index="${i}">Learn More</a>
      ` : `
        <span class="read" style="opacity: 0.6; cursor: default;">No details available</span>
      `}
    </div>
  `;

  // Add click handler for Learn More button
  if (hasDeliverables) {
    const learnMoreBtn = display.querySelector('.learn-more-btn');
    
    if (learnMoreBtn) {
      learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showKeyDeliverablesOverlay(s);
      });
    }
  }
}

function buildDots() {
  dotsContainer.innerHTML = '';
  services.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.dataset.slide = idx;
    dot.tabIndex = 0;
    dot.addEventListener('click', () => { show(idx); resetTimer(); });
    dot.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { show(idx); resetTimer(); } });
    dotsContainer.appendChild(dot);
  });
  updateDots();
}

function updateDots() {
  Array.from(dotsContainer.children).forEach((d, i) => d.classList.toggle('active', i === current));
}

function updateArrows() {
  const navArrowLeft = document.getElementById('nav-arrow-left');
  if (navArrowLeft) {
    if (current === 0) {
      navArrowLeft.classList.add('hidden');
    } else {
      navArrowLeft.classList.remove('hidden');
    }
  }
}

function show(i) {
  current = (i + services.length) % services.length;
  renderService(current);
  
  // Close overlay if open
  closeOverlay();
  
  updateDots();
  updateArrows();
}

function next() { show(current + 1); }

function startTimer() {
  stopTimer();
  timer = setInterval(next, INTERVAL);
}

function stopTimer() {
  if (timer) { clearInterval(timer); timer = null; }
}

function resetTimer() { stopTimer(); startTimer(); }

display?.addEventListener('mouseenter', stopTimer);
display?.addEventListener('mouseleave', () => {
  if (!detailOverlay.classList.contains('active')) {
    startTimer();
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const closeMobile = document.getElementById('close-mobile');
    const body = document.body;

    function openNav() {
        if (!mobileNav) return;
        mobileNav.setAttribute('aria-hidden', 'false');
        mobileNav.classList.add('open');
        body.style.overflow = 'hidden';
    }
    function closeNav() {
        if (!mobileNav) return;
        mobileNav.setAttribute('aria-hidden', 'true');
        mobileNav.classList.remove('open');
        body.style.overflow = 'auto';
    }

    menuBtn?.addEventListener('click', openNav);
    closeMobile?.addEventListener('click', closeNav);

    mobileNav?.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
    
    // Close overlay functionality
    if (globalCloseBtn) {
      globalCloseBtn.addEventListener('click', closeOverlay);
    }
    if (detailOverlay) {
      detailOverlay.addEventListener('click', (e) => {
        if (e.target === detailOverlay) {
          closeOverlay();
        }
      });
    }
    
    // Contact button functionality for mobile
    const contactBtnMobile = document.querySelector('.contact-btn-mobile');
    const contactForm = document.querySelector('.contact-form');
    if (contactBtnMobile && contactForm) {
      contactBtnMobile.addEventListener('click', () => {
        contactForm.style.display = contactForm.style.display === 'block' ? 'none' : 'block';
      });
    }
    
    // Arrow navigation functionality
    const navArrowLeft = document.getElementById('nav-arrow-left');
    const navArrowRight = document.getElementById('nav-arrow-right');
    
    if (navArrowLeft) {
      navArrowLeft.addEventListener('click', () => {
        show(current - 1);
        resetTimer();
      });
    }
    
    if (navArrowRight) {
      navArrowRight.addEventListener('click', () => {
        show(current + 1);
        resetTimer();
      });
    }
    
    buildDots();
    show(0);
    startTimer();

    // Typed.js animation for the home section
    if (typeof Typed === 'function') {
        new Typed(".text", {
            strings: ["clarity", "compliance", "confidence", "consultancy"],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1000,
            loop: true
        });
    } else {
        console.error('Typed.js not loaded. Ensure <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> is included before main.js');
    }

    // Counter animation for achievement section
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px 0px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps animation
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }
});
