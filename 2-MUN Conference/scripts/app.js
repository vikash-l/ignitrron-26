/* ==========================================================================
   MODEL UNITED NATIONS — NICK FURY TACTICAL INTERACTION LOGIC (FINAL POLISH)
   ========================================================================== */

(function () {
  'use strict';

  // 1. Tactical Sound Synthesizer (Web Audio API - Zero External Dependencies)
  let audioCtx = null;
  let soundEnabled = true;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
  }

  function playTacticalSound(type) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx || audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      const now = audioCtx.currentTime;

      if (type === 'click') {
        // High frequency cyber blip
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(1400, now + 0.06);
        gainNode.gain.setValueAtTime(0.08, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'access-granted') {
        // S.H.I.E.L.D. double chime
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.setValueAtTime(780, now + 0.12);
        gainNode.gain.setValueAtTime(0.12, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'alert') {
        // Alert sonar blip
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.15);
        gainNode.gain.setValueAtTime(0.1, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      }
    } catch (e) {
      // Audio fallback silent
    }
  }

  // 2. DOM Ready Setup
  document.addEventListener('DOMContentLoaded', () => {
    // Audio Toggle Button
    const audioToggleBtn = document.getElementById('audio-toggle-btn');
    if (audioToggleBtn) {
      audioToggleBtn.addEventListener('click', () => {
        initAudio();
        soundEnabled = !soundEnabled;
        audioToggleBtn.classList.toggle('active', soundEnabled);
        audioToggleBtn.setAttribute('title', soundEnabled ? 'Tactical Audio: ON' : 'Tactical Audio: MUTED');
        if (soundEnabled) playTacticalSound('click');
      });
    }

    // Interactive Audio Hover on Tactical Buttons
    document.querySelectorAll('.btn-primary, .btn-secondary, .nav-link, .podium-card, .round-card, .coordinator-card').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        playTacticalSound('click');
      });
    });

    // 3. Live HUD Clock (IST / UTC)
    const hudClockEl = document.getElementById('hud-live-clock');
    function updateClock() {
      if (!hudClockEl) return;
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      hudClockEl.textContent = `${hours}:${minutes}:${seconds} IST`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    // 4. "ENTER THE BRIEFING" & "ACCEPT THE MISSION" Transition & Modal Trigger
    const enterBriefingBtn = document.getElementById('btn-enter-briefing');
    const acceptMissionBtn = document.getElementById('btn-accept-mission');
    const briefingModal = document.getElementById('classified-modal');
    const closeModalBtn = document.getElementById('btn-close-modal');
    const modalAcknowledgeBtn = document.getElementById('btn-modal-acknowledge');
    const accessToast = document.getElementById('access-granted-toast');

    function triggerAccessGrantedTransition(targetId = 'intelligence') {
      playTacticalSound('access-granted');

      // Show toast
      if (accessToast) {
        accessToast.classList.add('show');
        setTimeout(() => {
          accessToast.classList.remove('show');
        }, 3500);
      }

      // Smooth scroll to target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (enterBriefingBtn) {
      enterBriefingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        triggerAccessGrantedTransition('intelligence');
        if (briefingModal) {
          setTimeout(() => {
            briefingModal.classList.add('open');
          }, 300);
        }
      });
    }

    // Accept mission button behavior is now handled by the semantic anchor link in index.html

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        playTacticalSound('click');
        if (briefingModal) briefingModal.classList.remove('open');
      });
    }

    if (modalAcknowledgeBtn) {
      modalAcknowledgeBtn.addEventListener('click', () => {
        playTacticalSound('access-granted');
        if (briefingModal) briefingModal.classList.remove('open');
        const roundsSection = document.getElementById('rounds');
        if (roundsSection) roundsSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // 5. Sticky Navbar Scroll & Active Section Spy
    const navbar = document.querySelector('.hud-navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('header[id], section[id]');

    function handleScrollSpy() {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }

      const scrollPos = window.scrollY + 120;
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    // 6. Mobile Menu Drawer Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        playTacticalSound('click');
        mobileDrawer.classList.toggle('open');
      });

      document.querySelectorAll('.mobile-drawer-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
        });
      });
    }

    // 7. Copy Coordinator Phone Number to Clipboard with Toast
    document.querySelectorAll('.btn-copy-num').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const phone = btn.getAttribute('data-phone');
        if (phone) {
          navigator.clipboard.writeText(phone).then(() => {
            playTacticalSound('click');
            showToast(`COMMS COPIED: ${phone}`);
          }).catch(() => {
            showToast(`NUMBER: ${phone}`);
          });
        }
      });
    });

    function showToast(message) {
      let toast = document.getElementById('dynamic-hud-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'dynamic-hud-toast';
        toast.className = 'hud-toast-alert';
        document.body.appendChild(toast);
      }
      toast.innerHTML = `<span class="pulse-dot"></span> <span>${message}</span>`;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }

    // 8. Storyline Step Highlighting on Scroll
    const storyNodes = document.querySelectorAll('.storyline-node');
    if (storyNodes.length > 0) {
      const storyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-stage');
          }
        });
      }, { threshold: 0.35 });

      storyNodes.forEach(node => storyObserver.observe(node));
    }

  });
})();
