import { soundEngine } from './sound.js';

// ============================================================
// OFFICIAL GOOGLE FORM REGISTRATION LINK (SINGLE LOCATION CONFIG)
// Replace "GOOGLE_FORM_LINK_HERE" with your actual Google Form URL
// ============================================================
export const GOOGLE_FORM_URL = "https://www.theticket9.com/event/ignitrron-26";

export function initModalsAndControls() {
  // Mobile Nav Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Integrated Header Audio Toggle Button
  const headerAudioBtn = document.getElementById('header-audio-btn');
  if (headerAudioBtn) {
    headerAudioBtn.addEventListener('click', () => {
      const isAudioOn = soundEngine.toggleAudio();
      if (isAudioOn) {
        headerAudioBtn.classList.remove('muted');
        headerAudioBtn.setAttribute('title', 'AUDIO: ON');
      } else {
        headerAudioBtn.classList.add('muted');
        headerAudioBtn.setAttribute('title', 'AUDIO: MUTED');
      }
    });
  }

  // Bind all registration CTAs across the site to open GOOGLE_FORM_URL in a new tab
  const googleFormCtas = document.querySelectorAll('[data-registration-cta="google-form"]');
  googleFormCtas.forEach(cta => {
    cta.setAttribute('href', GOOGLE_FORM_URL);
    cta.setAttribute('target', '_blank');
    cta.setAttribute('rel', 'noopener noreferrer');
  });

  // Rules Accordion Toggles
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        accordionItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active');
        soundEngine.playBeep(440, 'triangle', 0.05);
      });
    }
  });
}
