/**
 * IGNITRRON - Application Orchestrator
 * Interactive Domain Explorer, Prize Pool Showcase, Event Protocol & Navigation
 */

(function () {
  let particleEngine = null;
  let audioContext = null;
  let soundEnabled = true;

  function initApp() {
    initParticles();
    renderDomains();
    renderPrizes();
    renderGuidelines();
    renderCoordinators();
    setupNavigation();
    setupSoundEffects();
    setupModalHandlers();
    setupScaleRegulator();
  }

  function initParticles() {
    if (typeof window.initQuantumParticles === 'function') {
      particleEngine = window.initQuantumParticles('quantum-canvas');
    }
  }

  function setupSoundEffects() {
    const btn = document.getElementById('audioToggleBtn');

    function getAudioCtx() {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      return audioContext;
    }

    window.playQuantumAudio = function (type = 'click') {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioCtx();
        const now = ctx.currentTime;

        if (type === 'click') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(1100, now);
          osc.frequency.exponentialRampToValueAtTime(550, now + 0.04);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.04);
        } else if (type === 'hover') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(420, now);
          osc.frequency.linearRampToValueAtTime(540, now + 0.05);
          gain.gain.setValueAtTime(0.02, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.05);
        } else if (type === 'transmission') {
          [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now + i * 0.08);
            gain.gain.setValueAtTime(0.06, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.7);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.7);
          });
        }
      } catch (e) {}
    };

    if (btn) {
      btn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        btn.classList.toggle('text-cyan-400', soundEnabled);
        btn.classList.toggle('text-slate-600', !soundEnabled);
        const txt = btn.querySelector('.audio-status-text');
        if (txt) txt.textContent = soundEnabled ? 'SFX ON' : 'SFX OFF';
        if (soundEnabled) window.playQuantumAudio('click');
      });
    }

    document.querySelectorAll('.quantum-interactive').forEach(el => {
      el.addEventListener('mouseenter', () => window.playQuantumAudio('hover'));
      el.addEventListener('click', () => window.playQuantumAudio('click'));
    });
  }

  function setupScaleRegulator() {
    const btns = document.querySelectorAll('[data-scale-mode]');
    btns.forEach(b => {
      b.addEventListener('click', () => {
        const mode = b.getAttribute('data-scale-mode');
        btns.forEach(btn => {
          btn.classList.remove('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300', 'font-bold');
          btn.classList.add('text-slate-400', 'border-slate-800');
        });
        b.classList.add('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300', 'font-bold');
        b.classList.remove('text-slate-400', 'border-slate-800');
        if (particleEngine) particleEngine.setScaleMode(mode);
        if (window.playQuantumAudio) window.playQuantumAudio('click');
      });
    });
  }

  // Render 5 Interactive Domain Cards
  function renderDomains() {
    const container = document.getElementById('domainsContainer');
    if (!container || !window.IGNITRRON_DATA) return;

    container.innerHTML = window.IGNITRRON_DATA.domains.map(d => `
      <div class="domain-card quantum-interactive group relative rounded-3xl bg-slate-900/60 border ${d.borderColor} p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_${d.glowColor}]">
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-mono font-bold tracking-widest text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-500/30">${d.code}</span>
            <span class="text-[10px] font-mono text-purple-300 bg-purple-950/50 px-2.5 py-1 rounded border border-purple-500/30 uppercase">PRIZE: ${d.prizes.total}</span>
          </div>

          <h3 class="text-2xl font-black font-orbitron text-white group-hover:text-cyan-300 transition-colors mb-1 tracking-wide">${d.title}</h3>
          <p class="text-xs font-semibold text-purple-400 mb-4 tracking-wide">${d.tagline}</p>
          <p class="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed font-light">${d.description}</p>

          <!-- Disciplines -->
          <div class="mb-6 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span class="text-[10px] font-mono uppercase text-slate-400 tracking-wider block mb-2">Target Disciplines:</span>
            <div class="flex flex-wrap gap-1.5">
              ${d.disciplines.map(disc => `
                <span class="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">${disc}</span>
              `).join('')}
            </div>
          </div>

          <!-- Topics Scope -->
          <div class="mb-6">
            <span class="text-[10px] font-mono uppercase text-slate-500 tracking-wider block mb-2">Illustrative Sub-Topics:</span>
            <ul class="space-y-1.5">
              ${d.topics.map(t => `
                <li class="flex items-center text-xs text-slate-300">
                  <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2 shrink-0"></span>
                  ${t}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Domain Footer with Prizes & Action -->
        <div class="pt-5 border-t border-slate-800 flex items-center justify-between">
          <div class="text-[11px] font-mono text-slate-400">
            1st: <span class="text-cyan-300 font-bold">${d.prizes.first}</span> | 2nd: <span class="text-purple-300 font-bold">${d.prizes.second}</span>
          </div>
          <button onclick="window.selectDomainForSubmission('${d.id}')" class="inline-flex items-center gap-1.5 text-xs font-orbitron font-bold text-cyan-300 hover:text-slate-950 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-400 border border-cyan-500/40 transition-all duration-200">
            <span>REGISTER DOMAIN</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    `).join('');
  }

  // Render 5 Domain Prize Pool Cards
  function renderPrizes() {
    const container = document.getElementById('prizeDomainCardsContainer');
    if (!container || !window.IGNITRRON_DATA) return;

    container.innerHTML = window.IGNITRRON_DATA.domains.map(d => `
      <div class="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-500/30">${d.code}</span>
            <span class="text-xs font-mono font-extrabold text-amber-400">${d.prizes.total} TOTAL</span>
          </div>
          <h4 class="text-lg font-bold font-orbitron text-white mb-2">${d.title}</h4>
          <p class="text-xs text-slate-400 mb-6 font-light">${d.disciplines.slice(0, 4).join(', ')}</p>
        </div>

        <div class="space-y-3 pt-4 border-t border-slate-800/80">
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
            <span class="text-xs font-mono text-slate-300">🥇 1st Prize</span>
            <span class="text-base font-extrabold font-mono text-cyan-400">${d.prizes.first}</span>
          </div>
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20">
            <span class="text-xs font-mono text-slate-300">🥈 2nd Prize</span>
            <span class="text-base font-extrabold font-mono text-purple-400">${d.prizes.second}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Guidelines
  function renderGuidelines() {
    const container = document.getElementById('guidelinesContainer');
    if (!container || !window.IGNITRRON_DATA) return;

    container.innerHTML = window.IGNITRRON_DATA.guidelines.map((g, idx) => `
      <div class="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all">
        <div class="flex items-center gap-3 mb-3">
          <span class="h-7 w-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center">0${idx + 1}</span>
          <h4 class="text-base font-bold text-white">${g.title}</h4>
        </div>
        <p class="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">${g.content}</p>
      </div>
    `).join('');
  }

  // Render Official Coordinators
  function renderCoordinators() {
    const container = document.getElementById('coordinatorsContainer');
    if (!container || !window.IGNITRRON_DATA) return;

    container.innerHTML = window.IGNITRRON_DATA.coordinators.map(c => `
      <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between">
        <div>
          <div class="text-xs font-mono text-cyan-400 font-semibold mb-1">${c.role}</div>
          <h4 class="text-base font-bold text-white">${c.name}</h4>
        </div>
        <a href="tel:${c.phone}" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-xs font-mono font-bold transition-all shadow-sm">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <span>${c.phone}</span>
        </a>
      </div>
    `).join('');
  }

  function setupNavigation() {
    const navbar = document.getElementById('main-navbar');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('bg-slate-950/90', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-2xl');
      } else {
        navbar.classList.remove('bg-slate-950/90', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-2xl');
      }

      const scrollPos = window.scrollY + 120;
      document.querySelectorAll('section[id]').forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          links.forEach(l => {
            if (l.getAttribute('href') === `#${id}`) {
              l.classList.add('text-cyan-400', 'border-cyan-400');
              l.classList.remove('text-slate-400', 'border-transparent');
            } else {
              l.classList.remove('text-cyan-400', 'border-cyan-400');
              l.classList.add('text-slate-400', 'border-transparent');
            }
          });
        }
      });
    });

    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', () => {
        drawer.classList.toggle('hidden');
        drawer.classList.toggle('flex');
      });
      drawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          drawer.classList.add('hidden');
          drawer.classList.remove('flex');
        });
      });
    }
  }

  function setupModalHandlers() {
    const openBtns = document.querySelectorAll('[data-open-modal="registration-modal"]');
    const modal = document.getElementById('registration-modal');
    const closeBtn = document.getElementById('closeModalBtn');
    const backHomeBtn = document.getElementById('backToHomeFromSuccess');

    function openModal() {
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        if (window.playQuantumAudio) window.playQuantumAudio('click');
      }
    }

    function closeModal() {
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
      }
    }

    openBtns.forEach(b => b.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backHomeBtn) backHomeBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
