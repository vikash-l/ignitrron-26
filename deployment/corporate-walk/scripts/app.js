/* ==========================================================================
   CORPORATE WALK — MAIN APPLICATION LOGIC
   Orchestration, scroll reveals, interactive rows, registration modal
   ========================================================================== */

(function () {
  'use strict';

  // 1. SCROLL REVEAL OBSERVER
  const revealElements = document.querySelectorAll('.reveal-init');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // 2. NAVBAR SCROLL EFFECT & ACTIVE SECTION TRACKING
  const navbar = document.getElementById('main-navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateNavbar() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSection = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // 3. MINDSET ROWS INTERACTION
  const mindsetRows = document.querySelectorAll('.mindset-row');
  mindsetRows.forEach((row) => {
    row.addEventListener('click', () => {
      const isActive = row.classList.contains('active');
      mindsetRows.forEach((r) => r.classList.remove('active'));
      if (!isActive) {
        row.classList.add('active');
      }
    });
  });

  // 4. MOBILE MENU TOGGLE
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav-drawer');
  const mobileClose = document.getElementById('mobile-nav-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.add('open');
    });
  }

  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.remove('open');
    });
  });
})();
