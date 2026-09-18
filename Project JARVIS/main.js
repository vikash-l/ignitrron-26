/**
 * PROJECT J.A.R.V.I.S. — IGNITRRON'26
 * MARVEL / IRON MAN CINEMATIC & STARK OS INTERACTIVE ENGINE
 */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════════
     1. DECRYPTED PLAINTEXT DATA
     ══════════════════════════════════════════════════════════════ */
  const DOSSIER_DECRYPTED = {
    tag: 'PROTOCOL J.A.R.V.I.S. // CLEARED FOR ALL SQUADS',
    p1: 'Project J.A.R.V.I.S. is the flagship 24-hour software hackathon presented by IGNITRRON\'26. Hosted physically inside the state-of-the-art laboratories at KPR Institute of Engineering and Technology, this competition challenges elite squads of 2 to 4 engineers to design, build, and deploy high-impact software solutions under relentless time constraints.',
    p2: 'From machine learning architectures and digital twins to climate tech, healthcare telemetry, and decentralized cybersecurity systems, this is your arena to prove your engineering prowess to industry leaders and judges.',
    quote: '“Transform real-world problems into innovative, functional, and impactful software solutions.”',
    title1: '24 Hours Non-Stop',
    desc1: 'From 11:00 AM on 18 Sept to 11:00 AM on 19 Sept. An intense, uninterrupted engineering sprint with full lab infrastructure.',
    title2: '100% Software Purity',
    desc2: 'Web apps, mobile solutions, AI/ML models, distributed APIs, and cloud microservices. No physical hardware needed.',
    title3: '₹50,000 Bounty Vault',
    desc3: 'Four award tiers: ₹15,000 Champion (1st), ₹10,000 Runner-Up (2nd), ₹5,000 2nd Runner-Up (3rd), and ₹2,000 Special Honors (10 Teams).',
    title4: 'Squad Architecture',
    desc4: '2 to 4 engineers per squad. Cross-disciplinary skill sets in frontend, backend, AI/ML, and UI/UX are heavily encouraged.'
  };

  /* ══════════════════════════════════════════════════════════════
     2. DOMAINS TELEMETRY DATABASE (STARK COMMAND TABLE)
     ══════════════════════════════════════════════════════════════ */
  /* ══════════════════════════════════════════════════════════════
     2. DOMAINS TELEMETRY DATABASE (STARK COMMAND TABLE)
     ══════════════════════════════════════════════════════════════ */
  const DOMAINS_DATA = [
    {
      badge: 'SECTOR 01 // TELEMETRY ACTIVE',
      tag: 'AI & AGENTS',
      title: 'AI & AGENTIC ARCHITECTURES',
      desc: 'Autonomous multi-agent networks, computer vision pipelines, LLM reasoning engines, and self-orchestrating intelligent software systems that perceive, reason, and act.',
      focus: 'LLMs, Multi-Agent Swarms, Vision AI, Intelligent Automation',
      metrics: [
        { label: 'LATENCY', val: '0.14ms', cls: 'text-cyan' },
        { label: 'WEIGHTS', val: '4.8B SWARM', cls: 'text-gold' },
        { label: 'CLEARANCE', val: 'LVL-9 SECURE', cls: 'text-white' }
      ],
      svg: `<defs>
        <linearGradient id="stw-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.4"/>
        </linearGradient>
      </defs>
      <circle cx="170" cy="90" r="70" fill="none" stroke="rgba(0, 240, 255, 0.15)" stroke-width="1" stroke-dasharray="4 6" class="spin-slow"/>
      <circle cx="170" cy="90" r="50" fill="rgba(0, 240, 255, 0.03)" stroke="rgba(0, 240, 255, 0.35)" stroke-width="1.5"/>
      <path d="M 145 60 C 160 45, 180 45, 195 60 C 205 70, 208 85, 202 105 C 198 118, 188 132, 170 142 C 152 132, 142 118, 138 105 C 132 85, 135 70, 145 60 Z" 
            fill="none" stroke="url(#stw-glow-grad)" stroke-width="2" filter="drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))"/>
      <line x1="170" y1="50" x2="170" y2="135" stroke="rgba(0, 240, 255, 0.4)" stroke-width="1" stroke-dasharray="2 3"/>
      <line x1="145" y1="80" x2="195" y2="80" stroke="rgba(0, 240, 255, 0.4)" stroke-width="1"/>
      <line x1="150" y1="105" x2="190" y2="105" stroke="rgba(251, 191, 36, 0.5)" stroke-width="1"/>
      <circle cx="170" cy="65" r="4" fill="#ffffff" filter="drop-shadow(0 0 6px #00f0ff)"/>
      <circle cx="155" cy="80" r="3.5" fill="#00f0ff"/>
      <circle cx="185" cy="80" r="3.5" fill="#00f0ff"/>
      <circle cx="160" cy="105" r="3" fill="#fbbf24"/>
      <circle cx="180" cy="105" r="3" fill="#fbbf24"/>
      <circle cx="170" cy="120" r="3.5" fill="#00f0ff"/>
      <text x="170" y="165" fill="rgba(0, 240, 255, 0.8)" font-family="var(--font-mono)" font-size="9" text-anchor="middle" letter-spacing="2">AUTONOMOUS REASONING // 100%</text>`
    },
    {
      badge: 'SECTOR 02 // TELEMETRY ACTIVE',
      tag: 'INDUSTRY 4.0',
      title: 'ROBOTICS & SMART INDUSTRY 4.0',
      desc: 'Industrial IoT sensors, automated cyber-physical assembly lines, digital twin simulations, and predictive smart manufacturing workflows.',
      focus: 'Digital Twins, IoT Telemetry, Industrial Automation',
      metrics: [
        { label: 'PRECISION', val: '±0.002mm', cls: 'text-gold' },
        { label: 'KINEMATICS', val: '6-AXIS DUAL', cls: 'text-cyan' },
        { label: 'CYCLE TIME', val: '0.08 SEC', cls: 'text-white' }
      ],
      svg: `<defs>
        <linearGradient id="ind-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0.6"/>
        </linearGradient>
      </defs>
      <line x1="70" y1="140" x2="270" y2="140" stroke="rgba(251, 191, 36, 0.25)" stroke-width="1.5"/>
      <circle cx="130" cy="140" r="18" fill="rgba(251, 191, 36, 0.08)" stroke="#fbbf24" stroke-width="2"/>
      <path d="M 130 140 L 160 90 L 210 80 L 235 110" fill="none" stroke="url(#ind-grad)" stroke-width="4" stroke-linecap="round" filter="drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))"/>
      <circle cx="130" cy="140" r="5" fill="#ffffff"/>
      <circle cx="160" cy="90" r="6" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)"/>
      <circle cx="210" cy="80" r="5" fill="#fbbf24"/>
      <path d="M 235 110 L 245 125 M 235 110 L 225 125" stroke="#00f0ff" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="235" y1="120" x2="235" y2="140" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="2 2" filter="drop-shadow(0 0 8px #00f0ff)"/>
      <circle cx="235" cy="140" r="3" fill="#ffffff" filter="drop-shadow(0 0 8px #00f0ff)"/>
      <circle cx="235" cy="110" r="14" fill="none" stroke="rgba(0, 240, 255, 0.4)" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="170" y="165" fill="rgba(251, 191, 36, 0.85)" font-family="var(--font-mono)" font-size="9" text-anchor="middle" letter-spacing="2">6-AXIS KINEMATICS // ACTIVE</text>`
    },
    {
      badge: 'SECTOR 03 // TELEMETRY ACTIVE',
      tag: 'SUSTAINABILITY',
      title: 'CLEAN ENERGY & ECO-INTELLIGENCE',
      desc: 'Decentralized renewable micro-grids, carbon offset verification models, climate intelligence analytics, and autonomous circular sustainability platforms.',
      focus: 'Smart Grid, Carbon Accounting, ESG Metrics, Renewables',
      metrics: [
        { label: 'GRID EFFICIENCY', val: '99.8%', cls: 'text-cyan' },
        { label: 'CARBON OFFSET', val: '42.6 MT/YR', cls: 'text-gold' },
        { label: 'ENERGY HARVEST', val: '1.21 GW CLEAN', cls: 'text-white' }
      ],
      svg: `<defs>
        <linearGradient id="earth-grad-w" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.95"/>
          <stop offset="50%" stop-color="#10b981" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.6"/>
        </linearGradient>
        <radialGradient id="earth-core-w" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
          <stop offset="70%" stop-color="#00f0ff" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="transparent"/>
        </radialGradient>
      </defs>
      <circle cx="170" cy="85" r="55" fill="url(#earth-core-w)"/>
      <circle cx="170" cy="85" r="55" fill="none" stroke="url(#earth-grad-w)" stroke-width="2" filter="drop-shadow(0 0 15px rgba(0, 240, 255, 0.6))"/>
      <ellipse cx="170" cy="85" rx="55" ry="20" fill="none" stroke="rgba(0, 240, 255, 0.45)" stroke-width="1.2"/>
      <ellipse cx="170" cy="85" rx="55" ry="40" fill="none" stroke="rgba(16, 185, 129, 0.35)" stroke-width="1"/>
      <line x1="170" y1="30" x2="170" y2="140" stroke="rgba(0, 240, 255, 0.5)" stroke-width="1" stroke-dasharray="3 3"/>
      <ellipse cx="170" cy="85" rx="80" ry="28" fill="none" stroke="rgba(251, 191, 36, 0.4)" stroke-width="1.5" stroke-dasharray="14 8" transform="rotate(-15 170 85)"/>
      <circle cx="150" cy="75" r="3.5" fill="#10b981" filter="drop-shadow(0 0 6px #10b981)"/>
      <circle cx="185" cy="70" r="4" fill="#00f0ff" filter="drop-shadow(0 0 8px #00f0ff)"/>
      <circle cx="160" cy="100" r="3" fill="#fbbf24"/>
      <circle cx="195" cy="95" r="3.5" fill="#10b981"/>
      <circle cx="135" cy="90" r="3" fill="#00f0ff"/>
      <text x="170" y="165" fill="rgba(16, 185, 129, 0.9)" font-family="var(--font-mono)" font-size="9" text-anchor="middle" letter-spacing="2">ZERO-CARBON QUANTUM GRID // OPTIMAL</text>`
    },
    {
      badge: 'SECTOR 04 // TELEMETRY ACTIVE',
      tag: 'HEALTHCARE',
      title: 'BIOMETRIC HEALTH & MEDICAL AI',
      desc: 'AI diagnostic computer vision, real-time vital sign telemetry streaming, wearable healthcare interfaces, and secure patient data pipelines.',
      focus: 'Bio-Telemetry, Medical Diagnostics, Accessibility, AI Vitals',
      metrics: [
        { label: 'PULSE SYNC', val: '72 BPM', cls: 'text-cyan' },
        { label: 'PRECISION', val: '99.4% AI', cls: 'text-gold' },
        { label: 'TELEMETRY', val: 'CONTINUOUS', cls: 'text-white' }
      ],
      svg: `<defs>
        <linearGradient id="bio-grad-w" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0.7"/>
        </linearGradient>
      </defs>
      <circle cx="170" cy="85" r="55" fill="none" stroke="rgba(0, 240, 255, 0.15)" stroke-width="1" stroke-dasharray="6 4"/>
      <path d="M 80 100 L 130 100 L 145 75 L 155 120 L 165 60 L 175 115 L 185 95 L 195 100 L 260 100" 
            fill="none" stroke="#00f0ff" stroke-width="2.2" stroke-linecap="round" filter="drop-shadow(0 0 8px #00f0ff)"/>
      <circle cx="145" cy="75" r="4" fill="#ffffff" filter="drop-shadow(0 0 6px #00f0ff)"/>
      <circle cx="155" cy="120" r="3.5" fill="#dc2626"/>
      <circle cx="165" cy="60" r="4.5" fill="#fbbf24" filter="drop-shadow(0 0 6px #fbbf24)"/>
      <circle cx="175" cy="115" r="3.5" fill="#00f0ff"/>
      <circle cx="185" cy="95" r="3" fill="#ffffff"/>
      <line x1="170" y1="35" x2="170" y2="55" stroke="rgba(220, 38, 38, 0.6)" stroke-width="1.5"/>
      <line x1="170" y1="115" x2="170" y2="135" stroke="rgba(220, 38, 38, 0.6)" stroke-width="1.5"/>
      <text x="170" y="165" fill="rgba(0, 240, 255, 0.8)" font-family="var(--font-mono)" font-size="9" text-anchor="middle" letter-spacing="2">VITALS: 72 BPM // 100% SYNC</text>`
    },
    {
      badge: 'SECTOR 05 // TELEMETRY ACTIVE',
      tag: 'FINTECH & CYBER',
      title: 'DECENTRALIZED FINTECH & CYBERSECURITY',
      desc: 'High-frequency transaction protocols, zero-knowledge proofs, decentralized ledger security, and automated fraud prevention vaults.',
      focus: 'Zero-Trust, Fraud AI, Cryptography, Quantum Vaults',
      metrics: [
        { label: 'CIPHER', val: 'AES-256-GCM', cls: 'text-cyan' },
        { label: 'ZK-PROOF', val: 'VERIFIED', cls: 'text-gold' },
        { label: 'PROTECTION', val: 'QUANTUM-MAX', cls: 'text-white' }
      ],
      svg: `<defs>
        <linearGradient id="shield-grad-w" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="#fbbf24" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0.4"/>
        </linearGradient>
      </defs>
      <polygon points="170,35 215,55 215,110 170,135 125,110 125,55" 
               fill="rgba(0, 240, 255, 0.04)" stroke="url(#shield-grad-w)" stroke-width="2.2" filter="drop-shadow(0 0 12px rgba(0, 240, 255, 0.5))"/>
      <circle cx="170" cy="85" r="26" fill="rgba(0, 0, 0, 0.6)" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="6 3"/>
      <circle cx="170" cy="85" r="13" fill="none" stroke="#00f0ff" stroke-width="2"/>
      <circle cx="170" cy="85" r="5" fill="#ffffff" filter="drop-shadow(0 0 6px #00f0ff)"/>
      <line x1="170" y1="35" x2="170" y2="57" stroke="#00f0ff" stroke-width="1.5"/>
      <line x1="170" y1="113" x2="170" y2="135" stroke="#00f0ff" stroke-width="1.5"/>
      <line x1="125" y1="82" x2="142" y2="85" stroke="#fbbf24" stroke-width="1.5"/>
      <line x1="198" y1="85" x2="215" y2="82" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="170" y="165" fill="rgba(251, 191, 36, 0.85)" font-family="var(--font-mono)" font-size="9" text-anchor="middle" letter-spacing="2">AES-256-GCM // QUANTUM SECURE</text>`
    }
  ];

  /* ══════════════════════════════════════════════════════════════
     3. ASK J.A.R.V.I.S. KNOWLEDGE BASE (EXPANDED FAQS)
     ══════════════════════════════════════════════════════════════ */
  const JARVIS_VOICE_KB = {
    team: {
      query: 'What is the team size and composition?',
      response: 'Squads must consist of 2 to 4 engineers. Interdisciplinary skill sets across full-stack engineering, AI/ML, cloud architecture, cybersecurity, and UI/UX are heavily encouraged. Solo participation is prohibited.'
    },
    eligibility: {
      query: 'Who is eligible to participate in Project J.A.R.V.I.S.?',
      response: 'All engineering students, developers, and tech innovators across all years and departments are eligible. Inter-college and cross-department squads are fully permitted.'
    },
    fee: {
      query: 'Is there any registration fee?',
      response: 'Registration details and pass tiers are managed directly through the official Ticket9 portal. Click the "SUIT UP" button to verify squad eligibility and secure your team pass.'
    },
    ps: {
      query: 'When are problem statements revealed?',
      response: 'Problem statements across all 5 sectors remain strictly classified until 11:00 AM on 18 September 2026. All squads receive their domain-specific challenges simultaneously at the launch bell.'
    },
    venue: {
      query: 'Where is the physical venue and lab infrastructure located?',
      response: 'Project J.A.R.V.I.S. is hosted physically at KPR Institute of Engineering and Technology, Coimbatore. Each verified squad is allocated designated workstation benches with high-speed fiber connectivity and uninterrupted power bays.'
    },
    food: {
      query: 'Will food, refreshments, and power backup be provided?',
      response: 'Yes. Full catering is arranged for all 24 hours, including lunch, dinner, midnight energy rations, morning breakfast, and continuous refreshments. High-capacity UPS generators ensure zero power downtime.'
    },
    domains: {
      query: 'How are domain preferences allocated?',
      response: 'Following registration on Ticket9, squads will receive an official Google Form to submit their 1st, 2nd, and 3rd sector preferences. Final domain allocations and lab workspaces are confirmed prior to launch.'
    },
    tools: {
      query: 'Can we use open-source tools, APIs, and AI models?',
      response: 'Yes. Public APIs, open-source frameworks, cloud microservices, and pre-trained AI foundation models are permitted. However, all core application logic and integrations must be built during the 24-hour sprint.'
    },
    nightops: {
      query: 'What happens during the overnight Night Ops sprint?',
      response: 'Night Ops spans 08:00 PM to 06:00 AM with technical mentors conducting live code reviews, midnight power snacks, surprise mini-challenges, and continuous developer support.'
    },
    shortlist: {
      query: 'How does judging and shortlisting work?',
      response: 'Following initial checkpoint reviews, projects are evaluated on technical innovation, architecture robustness, UI/UX design, and real-world viability. Shortlisted finalists advance to the Grand Jury Defense.'
    },
    certificates: {
      query: 'Will certificates and OD (on-duty) attendance be issued?',
      response: 'Yes. All verified participants receive official Certificate of Participation credentials and official On-Duty (OD) attendance endorsement letters for their academic institutions.'
    },
    submit: {
      query: 'What are the final submission and demo rules?',
      response: 'Squads must commit their complete source code repository before the 11:00 AM Day 2 deadline and deliver a live, functional demonstration of their working software to the evaluation committee.'
    }
  };

  /* ══════════════════════════════════════════════════════════════
     4. WEB AUDIO API SYNTHESIZER (CINEMATIC SFX)
     ══════════════════════════════════════════════════════════════ */
  let audioCtx = null;
  let soundEnabled = true;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type, duration, vol) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(vol || 0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }

  function playRepulsorCharge() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 1.0);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.4);
    } catch (e) {}
  }

  function initAudioToggle() {
    const btn = document.getElementById('btn-audio');
    if (btn) {
      btn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        const icon = document.getElementById('audio-icon') || btn;
        if (soundEnabled) {
          icon.textContent = '🔊';
          btn.title = 'Sound FX: ON';
          btn.style.borderColor = 'rgba(0, 240, 255, 0.5)';
          btn.style.color = 'var(--arc-cyan)';
          playRepulsorCharge();
        } else {
          icon.textContent = '🔇';
          btn.title = 'Sound FX: OFF';
          btn.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          btn.style.color = 'var(--text-muted)';
        }
      });
    }
  }

  /* ══════════════════════════════════════════════════════════════
     5. STARK CURSOR SYSTEM (MODEL: S.C.S v2.0.26 - RED ENERGY TRAIL)
     ══════════════════════════════════════════════════════════════ */
  function initStarkCursor() {
    const cursor = document.getElementById('stark-cursor');
    const hudText = document.getElementById('sc-hud-text');
    const trailCanvas = document.getElementById('cursor-trail-canvas');
    if (!cursor) return;

    // --- Dynamic Red Energy Trail Engine ---
    let ctx = null;
    let trailPoints = [];
    let trailSparks = [];
    let prevX = null;
    let prevY = null;
    let lastMoveTime = Date.now();

    if (trailCanvas) {
      ctx = trailCanvas.getContext('2d');
      const resizeCanvas = () => {
        trailCanvas.width = window.innerWidth;
        trailCanvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
    }

    function addTrailPoint(x, y) {
      const now = Date.now();
      let speed = 0;
      if (prevX !== null && prevY !== null) {
        const dx = x - prevX;
        const dy = y - prevY;
        const dt = Math.max(now - lastMoveTime, 1);
        speed = Math.sqrt(dx * dx + dy * dy) / dt;

        // Spawn glowing crimson sparks on movement
        if (speed > 0.3 && Math.random() < 0.65) {
          trailSparks.push({
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 1.4 - dx * 0.06,
            vy: (Math.random() - 0.5) * 1.4 - dy * 0.06,
            radius: Math.random() * 2 + 1,
            color: Math.random() > 0.35 ? '#ff2222' : '#ffaa00',
            alpha: 1,
            decay: Math.random() * 0.02 + 0.012 // lasts ~0.9 seconds
          });
        }
      }
      prevX = x;
      prevY = y;
      lastMoveTime = now;

      trailPoints.push({ x, y, time: now, speed: Math.min(speed, 5) });
    }

    function renderTrail() {
      if (ctx && trailCanvas) {
        ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
        const now = Date.now();
        const maxAge = 900; // Perfect balanced ~0.9s duration with smooth fade

        // Filter active points
        trailPoints = trailPoints.filter((p) => now - p.time < maxAge);

        // Draw Sparks
        for (let i = trailSparks.length - 1; i >= 0; i--) {
          const s = trailSparks[i];
          s.x += s.vx;
          s.y += s.vy;
          s.vx *= 0.96;
          s.vy *= 0.96;
          s.alpha -= s.decay;

          if (s.alpha <= 0) {
            trailSparks.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * s.alpha, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = s.alpha * 0.85;
          ctx.shadowColor = s.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.restore();
        }

        // Draw Smooth Segmented Red Energy Ribbons with Progressive Fade
        if (trailPoints.length > 2) {
          // 1. Outer Crimson Glow Ribbon
          ctx.save();
          for (let i = 0; i < trailPoints.length - 1; i++) {
            const p1 = trailPoints[i];
            const p2 = trailPoints[i + 1];
            const age = now - p1.time;
            const alpha = Math.max(0, 1 - age / maxAge);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineCap = 'round';
            ctx.strokeStyle = `rgba(239, 68, 68, ${alpha * 0.45})`;
            ctx.lineWidth = 5.5 * (0.4 + 0.6 * alpha);
            ctx.shadowColor = '#ff1111';
            ctx.shadowBlur = 14 * alpha;
            ctx.stroke();
          }
          ctx.restore();

          // 2. Core Intense Hot Red/Gold Energy Beam
          ctx.save();
          for (let i = 0; i < trailPoints.length - 1; i++) {
            const p1 = trailPoints[i];
            const p2 = trailPoints[i + 1];
            const age = now - p1.time;
            const alpha = Math.max(0, 1 - age / maxAge);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineCap = 'round';
            ctx.strokeStyle = `rgba(255, ${Math.floor(68 + 120 * alpha)}, ${Math.floor(68 + 40 * alpha)}, ${alpha * 0.9})`;
            ctx.lineWidth = 2.2 * (0.5 + 0.5 * alpha);
            ctx.shadowColor = '#ffffff';
            ctx.shadowBlur = 6 * alpha;
            ctx.stroke();
          }
          ctx.restore();

          // 3. Weaving Sub-Strands (Sinusoidal Stark Ribbon)
          ctx.save();
          ctx.beginPath();
          for (let i = 0; i < trailPoints.length; i++) {
            const p = trailPoints[i];
            const age = now - p.time;
            const alpha = Math.max(0, 1 - age / maxAge);
            const wave = Math.sin(i * 0.6 + now * 0.008) * 3.5 * alpha;
            if (i === 0) {
              ctx.moveTo(p.x + wave, p.y + wave);
            } else {
              ctx.lineTo(p.x + wave, p.y + wave);
            }
          }
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.32)';
          ctx.lineWidth = 1;
          ctx.shadowColor = '#fbbf24';
          ctx.shadowBlur = 4;
          ctx.stroke();
          ctx.restore();
        }
      }
      requestAnimationFrame(renderTrail);
    }
    renderTrail();

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      addTrailPoint(e.clientX, e.clientY);
    });

    window.addEventListener('mousedown', () => {
      cursor.classList.add('is-clicking');
    });

    window.addEventListener('mouseup', () => {
      cursor.classList.remove('is-clicking');
    });

    const interactiveTargets = document.querySelectorAll(
      'a, button, .probe-node, .mtl-card-item, .f-chip, .coord-person-row, .hms-card, .pillar-card, .bounty-tier-card, .core-telemetry-sidebyside, .accordion-header, .vault-btn, .ask-query-chip, input, select'
    );

    interactiveTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hover');
        if (hudText) {
          if (el.classList.contains('btn-stark-suitup') || el.classList.contains('btn-ch-suitup') || el.classList.contains('btn-vault-action')) {
            hudText.textContent = 'ACCESS MISSION';
          } else if (el.tagName === 'A' && el.classList.contains('ch-link')) {
            hudText.textContent = 'NAVIGATE';
          } else if (el.classList.contains('probe-node') || el.classList.contains('mtl-card-item')) {
            hudText.textContent = 'ACCESS PROTOCOL';
          } else if (el.classList.contains('f-chip') || el.classList.contains('ask-query-chip') || el.classList.contains('btn-jarvis-speak')) {
            hudText.textContent = 'QUERY J.A.R.V.I.S.';
          } else {
            hudText.textContent = 'TARGET ACQUIRED';
          }
        }
      });

      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hover');
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     6. INTERACTIVE 3D HOLOGRAPHIC CARD ENGINE (TILT & GLOW)
     ══════════════════════════════════════════════════════════════ */
  function initInteractiveCards() {
    const cards = document.querySelectorAll('.hms-card, .pillar-card, .dossier-narrative-card, .bounty-tier-card, .core-telemetry-sidebyside, .coord-column-card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });

      card.addEventListener('click', () => {
        playTone(720, 'triangle', 0.08, 0.1);
        cards.forEach((c) => c.classList.remove('is-inspected'));
        card.classList.add('is-inspected');
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     7. STARK HERO TECHNOLOGY ENVIRONMENT (PARALLAX & HUD ENGINE)
     ══════════════════════════════════════════════════════════════ */
  function initStarkHeroEngine() {
    const heroSection = document.getElementById('scene-hero');
    if (!heroSection) return;

    const bgLayer = document.getElementById('hero-bg-layer');
    const glowLens = document.getElementById('hero-reactor-glow');
    const titleHud = document.getElementById('hero-title-hud');
    const hudModules = document.getElementById('hero-hud-modules');
    const cursorLight = document.getElementById('hero-cursor-light');
    const canvas = document.getElementById('hero-energy-canvas');

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    // Track mouse movement inside hero section
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const normX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const normY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      targetX = Math.max(-1, Math.min(1, normX));
      targetY = Math.max(-1, Math.min(1, normY));

      if (cursorLight) {
        cursorLight.style.left = `${e.clientX - rect.left}px`;
        cursorLight.style.top = `${e.clientY - rect.top}px`;
        cursorLight.style.opacity = '1';
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      if (cursorLight) cursorLight.style.opacity = '0';
    });

    // 60FPS Smooth Parallax Lerp Loop
    function renderHeroParallax() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      // 1. Background Reactor moves very slightly OPPOSITE to cursor
      if (bgLayer) {
        bgLayer.style.transform = `scale(1.04) translate(${-currentX * 16}px, ${-currentY * 12}px)`;
      }
      if (glowLens) {
        glowLens.style.transform = `translate(calc(-50% + ${-currentX * 16}px), calc(-50% + ${-currentY * 12}px))`;
      }

      // 2. Title box shifts slightly with cursor
      if (titleHud) {
        titleHud.style.transform = `translate(${currentX * 10}px, ${currentY * 8}px)`;
      }

      // 3. Information modules shift slightly
      if (hudModules) {
        hudModules.style.transform = `translate(${currentX * 16}px, ${currentY * 12}px)`;
      }

      requestAnimationFrame(renderHeroParallax);
    }
    renderHeroParallax();

    // Ambient Micro-Particles on #hero-energy-canvas
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let w = (canvas.width = heroSection.offsetWidth);
      let h = (canvas.height = heroSection.offsetHeight);

      window.addEventListener('resize', () => {
        if (heroSection) {
          w = canvas.width = heroSection.offsetWidth;
          h = canvas.height = heroSection.offsetHeight;
        }
      });

      const embers = [];
      const emberColors = ['rgba(255, 184, 0, 0.4)', 'rgba(0, 217, 255, 0.35)', 'rgba(255, 255, 255, 0.3)'];
      for (let i = 0; i < 28; i++) {
        embers.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -Math.random() * 0.4 - 0.1,
          size: Math.random() * 1.6 + 0.5,
          color: emberColors[Math.floor(Math.random() * emberColors.length)],
          alpha: Math.random() * 0.5 + 0.2
        });
      }

      function renderEmbers() {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < embers.length; i++) {
          const e = embers[i];
          e.x += e.vx;
          e.y += e.vy;

          if (e.y < -10) e.y = h + 10;
          if (e.x < -10) e.x = w + 10;
          if (e.x > w + 10) e.x = -10;

          ctx.beginPath();
          ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
          ctx.fillStyle = e.color;
          ctx.globalAlpha = e.alpha;
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;
        requestAnimationFrame(renderEmbers);
      }
      renderEmbers();
    }

    // Audio Telemetry Feedback for HUD Modules & Buttons
    const hudMods = document.querySelectorAll('.stark-hud-mod');
    hudMods.forEach((mod) => {
      mod.addEventListener('mouseenter', () => {
        playTone(680, 'sine', 0.06, 0.04);
      });
    });

    const suitupBtn = document.getElementById('btn-hero-suitup');
    if (suitupBtn) {
      suitupBtn.addEventListener('mouseenter', () => {
        playTone(440, 'triangle', 0.08, 0.05);
      });
    }

    const missionBtn = document.getElementById('btn-hero-mission');
    if (missionBtn) {
      missionBtn.addEventListener('mouseenter', () => {
        playTone(560, 'sine', 0.08, 0.04);
      });
    }
  }

  /* ══════════════════════════════════════════════════════════════
     8. DECRYPTION SOLVER ANIMATION (DOSSIER & 4 PILLARS)
     ══════════════════════════════════════════════════════════════ */
  function initAuthDossier() {
    const btn = document.getElementById('btn-auth-trigger');
    const statusText = document.getElementById('auth-status-text');
    const statusDot = document.getElementById('auth-status-dot');
    const tagEl = document.getElementById('decrypt-tag');
    const p1El = document.getElementById('decrypt-p1');
    const p2El = document.getElementById('decrypt-p2');
    const quoteEl = document.getElementById('decrypt-quote');
    const title1El = document.getElementById('p-title-1');
    const title2El = document.getElementById('p-title-2');
    const title3El = document.getElementById('p-title-3');
    const title4El = document.getElementById('p-title-4');
    const desc1El = document.getElementById('p-desc-1');
    const desc2El = document.getElementById('p-desc-2');
    const desc3El = document.getElementById('p-desc-3');
    const desc4El = document.getElementById('p-desc-4');

    const chars = 'ABCDEF0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

    function scrambleDecode(element, targetText, duration) {
      if (!element) return;
      let frame = 0;
      const totalFrames = Math.floor(duration / 30);

      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const revealedLength = Math.floor(progress * targetText.length);

        let output = targetText.substring(0, revealedLength);
        for (let i = revealedLength; i < targetText.length; i++) {
          if (targetText[i] === ' ') {
            output += ' ';
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        element.textContent = output;

        if (frame >= totalFrames) {
          clearInterval(interval);
          element.textContent = targetText;
          element.classList.remove('is-garbled');
        }
      }, 30);
    }

    if (btn) {
      btn.addEventListener('click', () => {
        playRepulsorCharge();
        btn.innerHTML = '<span>⚡</span> AUTHENTICATED';
        btn.disabled = true;

        if (statusText) statusText.textContent = 'SECURITY CLEARANCE LEVEL 10 // ACCESS GRANTED';
        if (statusDot) {
          statusDot.style.background = 'var(--arc-cyan)';
          statusDot.style.boxShadow = '0 0 12px var(--arc-cyan)';
        }

        if (tagEl) tagEl.textContent = DOSSIER_DECRYPTED.tag;
        scrambleDecode(p1El, DOSSIER_DECRYPTED.p1, 900);
        scrambleDecode(p2El, DOSSIER_DECRYPTED.p2, 1100);
        scrambleDecode(quoteEl, DOSSIER_DECRYPTED.quote, 800);

        scrambleDecode(title1El, DOSSIER_DECRYPTED.title1, 500);
        scrambleDecode(desc1El, DOSSIER_DECRYPTED.desc1, 750);
        scrambleDecode(title2El, DOSSIER_DECRYPTED.title2, 600);
        scrambleDecode(desc2El, DOSSIER_DECRYPTED.desc2, 850);
        scrambleDecode(title3El, DOSSIER_DECRYPTED.title3, 700);
        scrambleDecode(desc3El, DOSSIER_DECRYPTED.desc3, 950);
        scrambleDecode(title4El, DOSSIER_DECRYPTED.title4, 800);
        scrambleDecode(desc4El, DOSSIER_DECRYPTED.desc4, 1050);
      });
    }

    // Scene 02 (Static Background & Clean Hover States)
    const sceneAbout = document.getElementById('scene-about');
    const bgLayer = document.getElementById('dossier-bg-layer');
    const spotlight = document.getElementById('dossier-cursor-spotlight');

    if (bgLayer) {
      bgLayer.style.transform = 'none';
    }

    if (sceneAbout && spotlight) {
      sceneAbout.addEventListener('mousemove', (e) => {
        const rect = sceneAbout.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlight.style.left = `${x}px`;
        spotlight.style.top = `${y}px`;
        spotlight.style.opacity = '1';
      });

      sceneAbout.addEventListener('mouseleave', () => {
        spotlight.style.opacity = '0';
      });
    }
  }

  /* ══════════════════════════════════════════════════════════════
     9. J.A.R.V.I.S. CORE SYSTEMS INTERACTIVE MODULES (SIDE-BY-SIDE)
     ══════════════════════════════════════════════════════════════ */
  function initCommandTable() {
    const domainBtns = document.querySelectorAll('.cs-domain-btn');
    const sectorBadge = document.getElementById('stw-sector-badge');
    const tagEl = document.getElementById('stw-tag');
    const titleEl = document.getElementById('stw-title');
    const descEl = document.getElementById('stw-desc');
    const focusEl = document.getElementById('stw-focus');
    const workstation = document.getElementById('stark-telemetry-workstation');
    
    // Metrics elements
    const mLbl1 = document.getElementById('m-lbl-1');
    const mVal1 = document.getElementById('m-val-1');
    const mLbl2 = document.getElementById('m-lbl-2');
    const mVal2 = document.getElementById('m-val-2');
    const mLbl3 = document.getElementById('m-lbl-3');
    const mVal3 = document.getElementById('m-val-3');

    domainBtns.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        playTone(659.25, 'sine', 0.04, 0.03);
      });

      btn.addEventListener('click', () => {
        playTone(784, 'sine', 0.12, 0.08);
        
        const idx = parseInt(btn.getAttribute('data-domain-idx'), 10);
        const data = DOMAINS_DATA[idx];
        if (!data) return;

        // Set active class
        domainBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        // Pulse / highlight workstation
        if (workstation) {
          workstation.style.borderColor = 'rgba(251, 191, 36, 0.9)';
          workstation.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.95), 0 0 45px rgba(251, 191, 36, 0.35)';
          setTimeout(() => {
            workstation.style.borderColor = 'rgba(0, 240, 255, 0.35)';
            workstation.style.boxShadow = '0 16px 50px rgba(0, 0, 0, 0.95), 0 0 35px rgba(0, 240, 255, 0.12)';
          }, 400);
        }

        // Update Text & Telemetry
        if (sectorBadge) sectorBadge.textContent = data.badge;
        if (tagEl) tagEl.textContent = data.tag;
        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.desc;
        if (focusEl) focusEl.textContent = data.focus;

        // Update Metrics
        if (data.metrics && data.metrics.length >= 3) {
          if (mLbl1) mLbl1.textContent = data.metrics[0].label;
          if (mVal1) {
            mVal1.textContent = data.metrics[0].val;
            mVal1.className = `sscm-val ${data.metrics[0].cls}`;
          }

          if (mLbl2) mLbl2.textContent = data.metrics[1].label;
          if (mVal2) {
            mVal2.textContent = data.metrics[1].val;
            mVal2.className = `sscm-val ${data.metrics[1].cls}`;
          }

          if (mLbl3) mLbl3.textContent = data.metrics[2].label;
          if (mVal3) {
            mVal3.textContent = data.metrics[2].val;
            mVal3.className = `sscm-val ${data.metrics[2].cls}`;
          }
        }
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     10. INTERACTIVE 24-HOUR CONTINUOUS MISSION SERPENTINE TIMELINE
     ══════════════════════════════════════════════════════════════ */
  /* ══════════════════════════════════════════════════════════════
     10. 24-HOUR MISSION TACTICAL MAP & INVESTIGATION LOG ENGINE
     ══════════════════════════════════════════════════════════════ */
  const TACTICAL_TIMELINE_STOPS = [
    { id: 1, phaseKey: "day1", time: "09:00 AM", title: "Participant Arrival & Registration", shortTitle: "Participant Registration", desc: "Desk verification, ID credential badge issuance, welcome kit pickup, and dedicated laboratory seat assignment in CSE Block.", venue: "CSE BLOCK ATRIUM", pos: { x: 11.0, y: 23.1 }, color: "cyan" },
    { id: 2, phaseKey: "day1", time: "09:30 – 10:30 AM", title: "Inauguration & Launch", shortTitle: "Inauguration & Launch", desc: "Official inauguration ceremony, dignitary address, keynote presentation, and operational hackathon guidelines reveal.", venue: "MAIN AUDITORIUM", pos: { x: 20.0, y: 18.5 }, color: "gold" },
    { id: 3, phaseKey: "day1", time: "11:00 AM", title: "Problem Statements Unlocked", shortTitle: "Problem Statements Unlocked", desc: "All 5 core system domains officially unsealed! The 24-hour uninterrupted engineering sprint begins immediately across all labs.", venue: "CSE CENTRAL LABS", pos: { x: 30.0, y: 24.6 }, color: "cyan" },
    { id: 4, phaseKey: "day1", time: "11:00 AM – 01:00 PM", title: "Sprint 01 — Architecture & Core Stack", shortTitle: "Sprint 01: Core Stack", desc: "Initial git repository setup, microservice/API scaffolding, DB schema definition, and task distribution across squads.", venue: "LAB BAYS 1–6", pos: { x: 41.0, y: 19.2 }, color: "cyan" },
    { id: 5, phaseKey: "day1", time: "01:00 – 02:00 PM", title: "Lunch & Strategy Sync", shortTitle: "Lunch & Strategy Sync", desc: "Nutritional catering served in designated dining hospitality suites. Squads sync sprint velocity and refine milestones.", venue: "HOSPITALITY SUITE", pos: { x: 51.0, y: 26.9 }, color: "gold" },
    { id: 6, phaseKey: "day1", time: "03:00 – 05:00 PM", title: "Mentoring Round — Technical Review", shortTitle: "Mentoring Round", desc: "Industry experts, AI researchers, and senior engineers visit lab bays to review architecture, unblock roadblocks, and validate logic.", venue: "LAB BAYS 1–6", pos: { x: 61.0, y: 36.9 }, color: "cyan" },
    { id: 7, phaseKey: "day1", time: "05:30 PM", title: "Refresh & Networking Break", shortTitle: "Refresh & Networking", desc: "High-octane caffeine recharge, energy snacks, and informal discussions with fellow hackers and technical mentors.", venue: "COMMON LOUNGE", pos: { x: 74.0, y: 47.7 }, color: "gold" },
    { id: 8, phaseKey: "day1", time: "06:00 – 08:00 PM", title: "Sprint 02 — Model Training & Backend", shortTitle: "Sprint 02: Model Training", desc: "Model training, pipeline integration, core algorithm deployment, and integration of external cloud and agentic APIs.", venue: "LAB BAYS 1–6", pos: { x: 86.0, y: 50.8 }, color: "cyan" },
    { id: 9, phaseKey: "day1", time: "08:00 – 09:00 PM", title: "Dinner & Mid-Mission Realignment", shortTitle: "Dinner & Realignment", desc: "Dinner service across dining bays. Squads evaluate prototype status before heading into the nocturnal overnight sprint.", venue: "DINING HALL", pos: { x: 91.0, y: 64.6 }, color: "gold" },
    { id: 10, phaseKey: "day1", time: "09:30 – 11:30 PM", title: "Sprint 03 — Night-Shift Acceleration", shortTitle: "Sprint 03: Night Crunch", desc: "Full-stack integration, UI components connection, database stress-testing, and initial end-to-end user workflow execution.", venue: "LAB BAYS 1–6", pos: { x: 81.0, y: 68.5 }, color: "cyan" },
    { id: 11, phaseKey: "night", time: "11:30 PM – 12:20 AM", title: "Midnight Break & Fun", shortTitle: "Midnight Fun & Trivia", desc: "Midnight gaming trivia, techno playlists, energy boosts, and high-adrenaline challenges to revitalize squad energy.", venue: "AMPHITHEATRE", pos: { x: 69.0, y: 63.1 }, color: "crimson" },
    { id: 12, phaseKey: "night", time: "02:30 – 03:00 AM", title: "Repository & Demo Check", shortTitle: "Repo & Demo Check", desc: "Mandatory intermediate git commit checkpoint and demo readiness check to guarantee operational software health.", venue: "CENTRAL COMMAND", pos: { x: 56.0, y: 56.9 }, color: "crimson" },
    { id: 13, phaseKey: "night", time: "03:00 – 06:00 AM", title: "Sprint 04 — Final Push", shortTitle: "Sprint 04: Final Push", desc: "The critical final engineering window: bug elimination, CSS polish, performance optimization, and edge-case handling.", venue: "LAB BAYS 1–6", pos: { x: 42.0, y: 64.6 }, color: "crimson" },
    { id: 14, phaseKey: "day2", time: "06:00 – 07:00 AM", title: "Final Repository & Demo Submission", shortTitle: "Final Submission", desc: "Code repositories lock permanently at 07:00 AM! Final GitHub commits, demo video uploads, and submission verification.", venue: "SUBMISSION PORTAL", pos: { x: 28.0, y: 57.7 }, color: "gold" },
    { id: 15, phaseKey: "day2", time: "07:00 – 09:00 AM", title: "Breakfast & Refreshment", shortTitle: "Breakfast & Refreshment", desc: "Morning breakfast buffet, team freshen-up, and morning refreshments in hospitality lounge.", venue: "HOSPITALITY LOUNGE", pos: { x: 16.0, y: 64.6 }, color: "cyan" },
    { id: 16, phaseKey: "day2", time: "09:00 – 10:00 AM", title: "Shortlist Announcement", shortTitle: "Shortlist Announcement", desc: "Evaluation committee reveals the top finalist squads advancing to the Grand Jury Stage for live software demonstration.", venue: "MAIN AUDITORIUM", pos: { x: 12.0, y: 83.1 }, color: "gold" },
    { id: 17, phaseKey: "day2", time: "10:00 – 11:00 AM", title: "Final Countdown & Prep", shortTitle: "Final Countdown", desc: "AV system checks, projector setup, live software environment testing, and stage dry-runs for finalist presenters.", venue: "STAGE PIT", pos: { x: 25.0, y: 86.9 }, color: "cyan" },
    { id: 18, phaseKey: "day2", time: "11:00 AM – 12:00 PM", title: "Mission Complete: Final Presentations", shortTitle: "Final Presentations", desc: "Live Grand Jury defense, executive scoring, ₹50,000 cash bounty awarding, and official valedictory celebration.", venue: "MAIN AUDITORIUM", pos: { x: 42.0, y: 86.2 }, color: "gold" }
  ];

  function initMissionTimeline() {
    const pinsLayer = document.getElementById('tmb-pins-layer');
    const activeRoutePath = document.getElementById('tmb-route-active');
    const particleCanvas = document.getElementById('tmb-particle-canvas');
    const section = document.getElementById('scene-timeline');
    const board = document.getElementById('tactical-mission-board');

    const stopTag = document.getElementById('tmc-stop-tag');
    const dateTag = document.getElementById('tmc-date-tag');
    const cardTitle = document.getElementById('tmc-title');
    const cardTime = document.getElementById('tmc-time-chip');
    const cardDesc = document.getElementById('tmc-desc');
    const cardVenue = document.getElementById('tmc-venue');
    const btnPrev = document.getElementById('btn-tmc-prev');
    const btnNext = document.getElementById('btn-tmc-next');

    const hudStatus = document.getElementById('tmb-hud-status');
    const progressCounter = document.getElementById('tmb-progress-counter');
    const phaseTabs = document.querySelectorAll('.btn-tmb-tab');

    let currentStopIndex = 0;
    let routeLength = 2400;

    if (activeRoutePath) {
      try {
        routeLength = activeRoutePath.getTotalLength() || 2400;
        activeRoutePath.style.strokeDasharray = routeLength;
        activeRoutePath.style.strokeDashoffset = routeLength;
      } catch (e) {}
    }

    // Render 18 Metallic Milestone Pins
    if (pinsLayer) {
      pinsLayer.innerHTML = '';

      TACTICAL_TIMELINE_STOPS.forEach((item, idx) => {
        const pinEl = document.createElement('div');
        pinEl.className = `tmb-pin ${idx === 0 ? 'is-active' : ''}`;
        pinEl.setAttribute('data-stop-id', item.id);
        pinEl.style.left = `${item.pos.x}%`;
        pinEl.style.top = `${item.pos.y}%`;

        pinEl.innerHTML = `
          <div class="tmb-pin-radar"></div>
          <div class="tmb-pin-bead"></div>
          <div class="tmb-pin-pill">
            <span class="tpp-time">${item.time}</span>
            <span class="tpp-title">${item.shortTitle}</span>
          </div>
        `;

        pinEl.addEventListener('mouseenter', () => {
          selectStop(idx, true, false);
        });

        pinEl.addEventListener('click', (e) => {
          e.stopPropagation();
          selectStop(idx, true, true);
        });

        pinsLayer.appendChild(pinEl);
      });
    }

    // Select Milestone Stop Handler
    function selectStop(idx, playSound = true, smoothScroll = false) {
      if (idx < 0) idx = 0;
      if (idx >= TACTICAL_TIMELINE_STOPS.length) idx = TACTICAL_TIMELINE_STOPS.length - 1;
      currentStopIndex = idx;
      const data = TACTICAL_TIMELINE_STOPS[idx];
      if (!data) return;

      if (playSound) {
        if (data.color === 'crimson') {
          playTone(440, 'sawtooth', 0.08, 0.05);
        } else if (data.color === 'gold') {
          playTone(784, 'triangle', 0.08, 0.06);
        } else {
          playTone(659.25, 'sine', 0.06, 0.05);
        }
      }

      // Update Pin Highlights & Passed Trail
      const pins = document.querySelectorAll('.tmb-pin');
      pins.forEach((pin, i) => {
        if (i === idx) {
          pin.classList.add('is-active');
          pin.classList.remove('is-passed');
        } else if (i < idx) {
          pin.classList.remove('is-active');
          pin.classList.add('is-passed');
        } else {
          pin.classList.remove('is-active');
          pin.classList.remove('is-passed');
        }
      });

      // Trigger Celebratory Red Sparks & Confetti Cannon upon reaching Finale (Stop 18)
      if (idx === TACTICAL_TIMELINE_STOPS.length - 1) {
        if (!confettiHasFired) {
          confettiHasFired = true;
          launchRedSparksConfetti();
        }
      } else if (idx < TACTICAL_TIMELINE_STOPS.length - 2) {
        confettiHasFired = false;
      }

      // Update Floating Card Content
      if (stopTag) stopTag.textContent = `STOP ${data.id} OF 18`;
      if (dateTag) dateTag.textContent = idx < 13 ? '18 SEPT 2026' : '19 SEPT 2026';
      if (cardTitle) cardTitle.textContent = data.title;
      if (cardTime) cardTime.textContent = data.time;
      if (cardDesc) cardDesc.textContent = data.desc;
      if (cardVenue) cardVenue.textContent = data.venue;

      // Update Top HUD Bar
      if (hudStatus) hudStatus.textContent = `24-HOUR MISSION ACTIVE // ${data.time} · ${data.title.toUpperCase()}`;
      if (progressCounter) progressCounter.textContent = `STOP ${String(data.id).padStart(2, '0')} / 18`;

      // Smoothly animate active laser route to current stop
      if (activeRoutePath) {
        const progress = idx / (TACTICAL_TIMELINE_STOPS.length - 1);
        activeRoutePath.style.transition = 'stroke-dashoffset 0.4s ease-out';
        activeRoutePath.style.strokeDashoffset = routeLength * (1 - progress);
      }

      // Update Phase Tabs
      if (phaseTabs) {
        phaseTabs.forEach((tab) => {
          const filter = tab.getAttribute('data-phase-filter');
          if (filter === data.phaseKey) {
            tab.classList.add('is-active');
          } else if (filter !== 'all') {
            tab.classList.remove('is-active');
          }
        });
      }
    }

    // Prev / Next Navigation Buttons
    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        selectStop(currentStopIndex - 1, true, false);
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        selectStop(currentStopIndex + 1, true, false);
      });
    }

    // Phase Tab Navigation
    phaseTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        phaseTabs.forEach((t) => t.classList.remove('is-active'));
        tab.classList.add('is-active');

        const filter = tab.getAttribute('data-phase-filter');
        let targetIdx = 0;
        if (filter === 'day1') targetIdx = 0;
        else if (filter === 'night') targetIdx = 10;
        else if (filter === 'day2') targetIdx = 13;

        selectStop(targetIdx, true, false);
      });
    });

    // Touch swipe support for mobile timeline navigation
    let touchStartX = 0;
    let touchStartY = 0;

    const boardAndCard = document.querySelectorAll('#tactical-mission-board, #tmb-milestone-card');
    boardAndCard.forEach((el) => {
      el.addEventListener('touchstart', (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          touchStartX = e.changedTouches[0].screenX;
          touchStartY = e.changedTouches[0].screenY;
        }
      }, { passive: true });

      el.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          const diffX = e.changedTouches[0].screenX - touchStartX;
          const diffY = e.changedTouches[0].screenY - touchStartY;

          if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0) {
              selectStop(currentStopIndex + 1, true, false);
            } else {
              selectStop(currentStopIndex - 1, true, false);
            }
          }
        }
      }, { passive: true });
    });

    // Particle Pulses along Active Route Canvas
    if (particleCanvas && particleCanvas.getContext) {
      const ctx = particleCanvas.getContext('2d');
      let animId = null;

      function resizeCanvas() {
        if (!board) return;
        particleCanvas.width = board.offsetWidth;
        particleCanvas.height = board.offsetHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const particles = Array.from({ length: 16 }, (_, i) => ({
        t: i / 16,
        speed: 0.0012 + Math.random() * 0.0008,
        size: 2 + Math.random() * 2,
        color: i % 2 === 0 ? '#00f0ff' : '#fbbf24'
      }));

      function renderParticles() {
        if (!ctx || !board) return;
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

        if (activeRoutePath && activeRoutePath.getPointAtLength) {
          const totalLen = activeRoutePath.getTotalLength() || 2400;
          const scaleX = particleCanvas.width / 1000;
          const scaleY = particleCanvas.height / 650;

          particles.forEach((p) => {
            p.t += p.speed;
            if (p.t > 1) p.t = 0;

            const pt = activeRoutePath.getPointAtLength(p.t * totalLen);
            const px = pt.x * scaleX;
            const py = pt.y * scaleY;

            ctx.beginPath();
            ctx.arc(px, py, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
          });
        }

        animId = requestAnimationFrame(renderParticles);
      }

      renderParticles();
    }

    // ══════════════════════════════════════════════════════════════
    // CELEBRATORY RED SPARKS & CONFETTI CANNON (FINALE REACHED)
    // ══════════════════════════════════════════════════════════════
    const confettiCanvas = document.getElementById('tmb-confetti-canvas');
    let confettiParticles = [];
    let confettiAnimId = null;
    let confettiHasFired = false;

    function resizeConfettiCanvas() {
      if (!board || !confettiCanvas) return;
      confettiCanvas.width = board.offsetWidth;
      confettiCanvas.height = board.offsetHeight;
    }
    resizeConfettiCanvas();
    window.addEventListener('resize', resizeConfettiCanvas);

    function launchRedSparksConfetti() {
      if (!confettiCanvas || !board) return;
      resizeConfettiCanvas();

      // Audio celebration fanfare
      playTone(587.33, 'triangle', 0.12, 0.08);
      setTimeout(() => playTone(880, 'sine', 0.18, 0.1), 100);
      setTimeout(() => playTone(1174.66, 'sawtooth', 0.22, 0.12), 220);

      // Finale Stop coordinates: 42.0% X, 86.2% Y
      const originX = confettiCanvas.width * 0.42;
      const originY = confettiCanvas.height * 0.862;

      // Color Palette: Stark Crimson, Hot Ruby, Radiant Gold, Pure Arc White
      const palette = [
        '#ff003c', '#ef4444', '#dc2626', '#f43f5e', '#b91c1c', 
        '#fbbf24', '#f59e0b', '#ffffff', '#00f0ff', '#ff4d6d'
      ];

      // Spawn 150 celebratory particles & sparks
      confettiParticles = [];
      for (let i = 0; i < 150; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.0; // fountain upwards
        const speed = 8 + Math.random() * 18;
        const color = palette[Math.floor(Math.random() * palette.length)];

        confettiParticles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 4,
          vy: Math.sin(angle) * speed - 5,
          gravity: 0.28 + Math.random() * 0.15,
          drag: 0.982,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 5 + 3,
          length: Math.random() * 14 + 6,
          alpha: 1.0,
          decay: 0.006 + Math.random() * 0.008,
          color: color,
          type: i % 3 === 0 ? 'rect' : (i % 3 === 1 ? 'spark' : 'ribbon')
        });
      }

      if (!confettiAnimId) {
        renderConfettiLoop();
      }
    }

    function renderConfettiLoop() {
      if (!confettiCanvas) return;
      const ctx = confettiCanvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

      for (let i = confettiParticles.length - 1; i >= 0; i--) {
        const p = confettiParticles[i];

        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.y > confettiCanvas.height + 50) {
          confettiParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'rect') {
          // 3D spinning confetti tile
          const scaleY = Math.cos(p.rotation * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fillRect(-p.size / 2, (-p.size * scaleY) / 2, p.size, p.size * scaleY);
        } else if (p.type === 'ribbon') {
          // Elongated celebratory spark ribbon
          const scaleY = Math.cos(p.rotation * 1.5);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.fillRect(-p.size / 2, (-p.length * scaleY) / 2, p.size, p.length * scaleY);
        } else {
          // Blazing spark / glowing star point
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 14;
          ctx.fill();

          // Core bright center
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }

        ctx.restore();
      }

      if (confettiParticles.length > 0) {
        confettiAnimId = requestAnimationFrame(renderConfettiLoop);
      } else {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiAnimId = null;
      }
    }

    // Scroll-Linked Route Drawing & Active Stop Synchronization
    function updateTimelineScroll() {
      if (!section || !activeRoutePath) return;
      const rect = section.getBoundingClientRect();
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = rect.top + scrollY;
      const sectionHeight = section.offsetHeight;
      const totalScroll = sectionHeight - window.innerHeight;

      if (totalScroll > 0) {
        if (scrollY >= sectionTop && scrollY <= sectionTop + totalScroll) {
          const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / totalScroll));
          activeRoutePath.style.strokeDashoffset = routeLength * (1 - progress);

          const targetIdx = Math.min(
            TACTICAL_TIMELINE_STOPS.length - 1,
            Math.floor(progress * TACTICAL_TIMELINE_STOPS.length)
          );

          if (targetIdx !== currentStopIndex) {
            selectStop(targetIdx, false, false);
          }
        } else if (scrollY < sectionTop) {
          activeRoutePath.style.strokeDashoffset = routeLength;
          if (currentStopIndex !== 0) selectStop(0, false, false);
        } else if (scrollY > sectionTop + totalScroll) {
          activeRoutePath.style.strokeDashoffset = 0;
          if (currentStopIndex !== TACTICAL_TIMELINE_STOPS.length - 1) {
            selectStop(TACTICAL_TIMELINE_STOPS.length - 1, false, false);
          }
        }
      }
    }

    window.addEventListener('scroll', updateTimelineScroll, { passive: true });
    window.addEventListener('resize', updateTimelineScroll, { passive: true });

    // Initial Stop Selection (Starts cleanly at Stop 1: 09:00 AM)
    selectStop(0, false, false);
  }

  /* ══════════════════════════════════════════════════════════════
     11. ASK J.A.R.V.I.S. (INTELLIGENT SPEECH SYNTHESIS & VOICE FX)
     ══════════════════════════════════════════════════════════════ */
  function initAskJarvis() {
    const terminal = document.getElementById('voice-jarvis-terminal');
    const waveform = document.getElementById('voice-waveform');
    const queryEl = document.getElementById('jarvis-voice-query');
    const responseEl = document.getElementById('jarvis-voice-response');
    const statusTextEl = document.getElementById('vcb-status-text');
    const statusBadgeEl = document.getElementById('vcb-status-badge');
    const speakBtn = document.getElementById('btn-jarvis-speak');
    const speakBtnLabel = document.getElementById('bvr-label');
    const muteBtn = document.getElementById('btn-voice-mute');
    const muteIcon = document.getElementById('vbm-icon');
    const pulseDot = document.getElementById('vjt-pulse-dot');
    const particlesCanvas = document.getElementById('vjt-particles-canvas');
    const chips = document.querySelectorAll('.f-chip');
    const bars = waveform ? Array.from(waveform.querySelectorAll('.vw-bar')) : [];

    let typeInterval = null;
    let analyzeTimeout1 = null;
    let analyzeTimeout2 = null;
    let resetTimeout = null;
    let speechSafetyTimeout = null;
    let activeUtterance = null;
    let isSpeaking = false;
    let voiceMuted = false;
    let currentQueryText = 'What is the team size and composition?';
    let currentAnswerText = JARVIS_VOICE_KB.team ? JARVIS_VOICE_KB.team.response : '';
    let jarvisVoice = null;
    let waveAnimFrame = null;

    function selectJarvisVoice() {
      if (!('speechSynthesis' in window)) return null;
      const voices = window.speechSynthesis.getVoices() || [];
      return (
        voices.find((v) => v.name && (v.name.includes('Daniel') || v.name.includes('Google UK English Male') || v.name.includes('Alex') || v.name.includes('Natural') || v.name.includes('Male'))) ||
        voices.find((v) => v.lang && v.lang.startsWith('en')) ||
        voices[0] ||
        null
      );
    }

    if ('speechSynthesis' in window) {
      jarvisVoice = selectJarvisVoice();
      window.speechSynthesis.onvoiceschanged = () => {
        jarvisVoice = selectJarvisVoice();
      };
    }

    function animateWaveform(active) {
      if (!bars || bars.length === 0) return;
      if (!active) {
        if (waveAnimFrame) cancelAnimationFrame(waveAnimFrame);
        bars.forEach((bar) => { bar.style.height = '4px'; });
        return;
      }
      const animate = () => {
        bars.forEach((bar) => {
          const randomH = Math.floor(Math.random() * 24) + 4;
          bar.style.height = `${randomH}px`;
        });
        waveAnimFrame = requestAnimationFrame(animate);
      };
      animate();
    }

    function setConsoleState(state) {
      if (terminal) {
        terminal.classList.toggle('is-active-mainframe', state === 'speaking' || state === 'analyzing');
      }
      if (pulseDot) {
        pulseDot.classList.toggle('is-active', state === 'speaking' || state === 'analyzing');
      }
      if (statusBadgeEl) {
        statusBadgeEl.setAttribute('data-state', state);
      }
      if (statusTextEl) {
        switch (state) {
          case 'query-received':
            statusTextEl.textContent = 'QUERY RECEIVED';
            break;
          case 'analyzing':
            statusTextEl.textContent = 'ANALYZING REPOSITORY...';
            break;
          case 'speaking':
            statusTextEl.textContent = 'AUDIO TRANSMITTING...';
            break;
          case 'complete':
            statusTextEl.textContent = 'TRANSMISSION COMPLETE';
            break;
          default:
            statusTextEl.textContent = 'J.A.R.V.I.S. AUDIO MAINFRAME // SELECT QUERY TO STREAM';
        }
      }
      animateWaveform(state === 'speaking');
    }

    function playStream(queryText, answerText) {
      // 1. Cancel previous stream & timeouts cleanly
      if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
      if (typeInterval) clearInterval(typeInterval);
      if (analyzeTimeout1) clearTimeout(analyzeTimeout1);
      if (analyzeTimeout2) clearTimeout(analyzeTimeout2);
      if (resetTimeout) clearTimeout(resetTimeout);
      if (speechSafetyTimeout) clearTimeout(speechSafetyTimeout);

      const safeQuery = queryText || 'Query Transmission Received';
      const safeAnswer = answerText || 'Information currently unavailable for this category module.';

      currentQueryText = safeQuery;
      currentAnswerText = safeAnswer;
      isSpeaking = false;

      if (queryEl) queryEl.textContent = safeQuery;
      if (responseEl) {
        responseEl.classList.add('is-animating');
        responseEl.textContent = safeAnswer;
      }

      // STEP 1: QUERY RECEIVED
      setConsoleState('query-received');
      playTone(784, 'sine', 0.05, 0.06);

      // STEP 2: ANALYZING (State transition delay: 100ms)
      analyzeTimeout1 = setTimeout(() => {
        setConsoleState('analyzing');
        playTone(987.77, 'sine', 0.06, 0.05);

        // STEP 3: RESPONSE READY & SPEAKING (140ms after analysis)
        analyzeTimeout2 = setTimeout(() => {
          isSpeaking = true;
          setConsoleState('speaking');
          playTone(1174.66, 'sine', 0.08, 0.07);

          // Typewriter Text Output Synchronized
          if (responseEl) {
            responseEl.classList.remove('is-animating');
            responseEl.textContent = '';
            let idx = 0;
            typeInterval = setInterval(() => {
              if (idx < safeAnswer.length) {
                responseEl.textContent += safeAnswer.charAt(idx);
                idx++;
              } else {
                clearInterval(typeInterval);
              }
            }, 12);
          }

          const finishOnce = (() => {
            let done = false;
            return () => {
              if (done) return;
              done = true;
              if (speechSafetyTimeout) clearTimeout(speechSafetyTimeout);
              finishSpeechTransmission();
            };
          })();

          // Voice Speech Audio Output with GC protection
          if ('speechSynthesis' in window && !voiceMuted) {
            try {
              if (!jarvisVoice) jarvisVoice = selectJarvisVoice();
              activeUtterance = new SpeechSynthesisUtterance(safeAnswer);
              if (jarvisVoice) activeUtterance.voice = jarvisVoice;
              activeUtterance.rate = 0.98;
              activeUtterance.pitch = 0.92;
              activeUtterance.volume = 1.0;

              activeUtterance.onend = finishOnce;
              activeUtterance.onerror = finishOnce;

              window.speechSynthesis.speak(activeUtterance);
            } catch (err) {
              finishOnce();
            }
          } else {
            // Speech synthesis not available or muted
            const readDuration = Math.max(2500, safeAnswer.length * 45);
            speechSafetyTimeout = setTimeout(finishOnce, readDuration);
          }

          // Guaranteed Safety Timeout fallback so console never freezes
          const estDuration = Math.max(2500, safeAnswer.length * 45);
          speechSafetyTimeout = setTimeout(finishOnce, estDuration);

        }, 140);
      }, 100);
    }

    function finishSpeechTransmission() {
      isSpeaking = false;
      setConsoleState('complete');
      playTone(587.33, 'sine', 0.12, 0.04);

      // STEP 4: Reset gracefully back to ready state after 2.0s
      resetTimeout = setTimeout(() => {
        setConsoleState('query-received');
      }, 2000);
    }

    // ──────────────────────────────────────────────────────────
    // E. CHIP CLICK & KEYBOARD ACCESSIBILITY BINDING
    // ──────────────────────────────────────────────────────────
    window.handleAskJarvisQuery = function (key) {
      if (!key) return;
      const allChips = document.querySelectorAll('.f-chip');
      let targetChip = Array.from(allChips).find((c) => c.getAttribute('data-query') === key);
      
      const data = JARVIS_VOICE_KB[key] || {
        query: targetChip ? targetChip.textContent.trim() : 'Query Transmission Received',
        response: 'Information currently unavailable for this module.'
      };

      allChips.forEach((c) => c.classList.remove('is-active'));
      if (targetChip) {
        targetChip.classList.add('is-active');
      }

      playStream(data.query, data.response);
    };

    const handleChipSelection = (chip) => {
      const key = chip.getAttribute('data-query');
      if (key && window.handleAskJarvisQuery) {
        window.handleAskJarvisQuery(key);
      }
    };

    chips.forEach((chip) => {
      chip.addEventListener('click', (e) => {
        if (e) e.preventDefault();
        handleChipSelection(chip);
      });

      chip.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleChipSelection(chip);
        }
      });
    });

    if (speakBtn) {
      speakBtn.addEventListener('click', (e) => {
        if (e) e.preventDefault();
        playStream(currentQueryText, currentAnswerText);
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener('click', (e) => {
        if (e) e.preventDefault();
        voiceMuted = !voiceMuted;
        muteBtn.classList.toggle('is-muted', voiceMuted);
        if (muteIcon) {
          muteIcon.textContent = voiceMuted ? '🔇' : '🔊';
        }
        muteBtn.title = voiceMuted ? 'Voice Audio: MUTED' : 'Voice Audio: ACTIVE';
        if (voiceMuted && 'speechSynthesis' in window) {
          try { window.speechSynthesis.cancel(); } catch (err) {}
          if (isSpeaking) {
            finishSpeechTransmission();
          }
        }
      });
    }
  }

  /* ══════════════════════════════════════════════════════════════
     11B. CONSTELLATION PARTICLES ENGINE (CURSOR CONNECTING DOTS)
     ══════════════════════════════════════════════════════════════ */
  function initConstellationEffect(sceneId, canvasId) {
    const scene = document.getElementById(sceneId);
    const canvas = document.getElementById(canvasId);
    if (!scene || !canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = scene.offsetWidth);
    let height = (canvas.height = scene.offsetHeight);

    let mouseX = -9999;
    let mouseY = -9999;
    let isHovering = false;

    function resize() {
      if (!scene || !canvas) return;
      width = canvas.width = scene.offsetWidth;
      height = canvas.height = scene.offsetHeight;
    }
    window.addEventListener('resize', resize);

    scene.addEventListener('mousemove', (e) => {
      const rect = scene.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovering = true;
    });

    scene.addEventListener('mouseleave', () => {
      isHovering = false;
      mouseX = -9999;
      mouseY = -9999;
    });

    // High-density constellation node field (120-180 dots)
    const dotCount = Math.min(180, Math.max(90, Math.floor((width * height) / 9000)));
    const dots = Array.from({ length: dotCount }, () => {
      const colorRand = Math.random();
      const color = colorRand > 0.35 ? '#00f0ff' : (colorRand > 0.15 ? '#ffffff' : '#fbbf24');
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 1.2 + Math.random() * 2.0,
        color: color,
        baseAlpha: 0.3 + Math.random() * 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      };
    });

    function renderConstellation() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        d.pulsePhase += d.pulseSpeed;

        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;

        const currentAlpha = d.baseAlpha * (0.75 + 0.25 * Math.sin(d.pulsePhase));

        // Draw dot node with bloom glow
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.globalAlpha = currentAlpha;
        ctx.shadowColor = d.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect dots to each other if within 125px
        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j];
          const dist = Math.hypot(d.x - d2.x, d.y - d2.y);
          if (dist < 125) {
            const lineAlpha = (1 - dist / 125) * 0.24;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = '#00f0ff';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect dots to Cursor if mouse is hovering within 200px
        if (isHovering) {
          const mouseDist = Math.hypot(d.x - mouseX, d.y - mouseY);
          if (mouseDist < 200) {
            const cursorLineAlpha = (1 - mouseDist / 200) * 0.7;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = '#00f0ff';
            ctx.globalAlpha = cursorLineAlpha;
            ctx.lineWidth = 1.2;
            ctx.shadowColor = '#00f0ff';
            ctx.shadowBlur = 10;
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Smooth gravitational pull towards cursor
            const pull = (200 - mouseDist) / 200 * 0.025;
            d.x += (mouseX - d.x) * pull;
            d.y += (mouseY - d.y) * pull;
          }
        }
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(renderConstellation);
    }
    renderConstellation();
  }

  /* ══════════════════════════════════════════════════════════════
     12. LAUNCH COUNTDOWN ENGINE (18 SEPT 2026 11:00 AM)
     ══════════════════════════════════════════════════════════════ */
  function initCountdown() {
    const targetDate = new Date('2026-09-18T11:00:00+05:30').getTime();
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    function update() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minsEl) minsEl.textContent = '00';
        if (secsEl) secsEl.textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  /* ══════════════════════════════════════════════════════════════
     13. SCENE SCROLL OBSERVER & PAGINATION
     ══════════════════════════════════════════════════════════════ */
  function initSceneObserver() {
    const scenes = document.querySelectorAll('.cinema-scene');
    const navLinks = document.querySelectorAll('.ch-link');
    const pagDots = document.querySelectorAll('.spd-dot');

    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset + 300;
      let activeId = 'scene-hero';

      scenes.forEach((scene) => {
        if (scrollPos >= scene.offsetTop) {
          activeId = scene.id;
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      });

      pagDots.forEach((dot) => {
        const href = dot.getAttribute('href');
        if (href === `#${activeId}`) {
          dot.classList.add('is-active');
        } else {
          dot.classList.remove('is-active');
        }
      });
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════════════════
     14. BIOMETRIC FINGERPRINT AUTHENTICATION (2-SECOND CIRCLE HOLD)
     ══════════════════════════════════════════════════════════════ */
  function initBiometricBountyScanner() {
    const cards = document.querySelectorAll('.bounty-tier-card');
    const cursor = document.getElementById('stark-cursor');
    const hudLabel = document.getElementById('sc-hud-text');

    cards.forEach((card) => {
      const scannerPad = card.querySelector('.vfo-scanner-pad');
      if (!scannerPad) return;

      const timerEl = card.querySelector('.vfo-hold-timer');
      const circleFill = card.querySelector('.vfo-cm-fill');
      const progressFill = card.querySelector('.vfo-progress-fill');
      const promptText = card.querySelector('.vfo-prompt');

      let holdInterval = null;
      let isHolding = false;
      const HOLD_DURATION = 2000; // Strict 2.0 seconds hold requirement

      // Switch cursor to biometric fingerprint mode when hovering over circle scanner pad
      scannerPad.addEventListener('mouseenter', () => {
        if (!card.classList.contains('is-locked')) return;
        if (cursor) cursor.classList.add('is-fingerprint-mode');
        if (hudLabel) hudLabel.textContent = 'HOLD 2s TO UNLOCK';
        if (promptText) promptText.textContent = 'PRESS & HOLD 2s INSIDE CIRCLE';
      });

      scannerPad.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('is-fingerprint-mode');
        if (hudLabel) hudLabel.textContent = 'TARGET ACQUIRED';
        if (isHolding) {
          abortHold('SCAN ABORTED // CURSOR EXITED CIRCLE');
        } else if (card.classList.contains('is-locked') && promptText) {
          promptText.textContent = 'HOLD 2s INSIDE CIRCLE TO REVEAL';
        }
      });

      function startHold(e) {
        if (!card.classList.contains('is-locked')) return;
        if (e) e.preventDefault();
        isHolding = true;
        scannerPad.classList.add('is-holding');
        card.classList.add('is-scanning');

        if (cursor) cursor.classList.add('is-fingerprint-mode');
        if (hudLabel) hudLabel.textContent = 'AUTHENTICATING...';
        if (promptText) promptText.textContent = 'BIOMETRIC SCAN IN PROGRESS...';

        playTone(360, 'sine', 0.1, 0.08);

        const startTime = performance.now();
        clearInterval(holdInterval);

        holdInterval = setInterval(() => {
          if (!isHolding) {
            clearInterval(holdInterval);
            return;
          }

          const elapsed = performance.now() - startTime;
          const progress = Math.min(1.0, elapsed / HOLD_DURATION);

          // Update Circular SVG Meter (circumference = 283)
          const offset = 283 * (1 - progress);
          if (circleFill) circleFill.style.strokeDashoffset = offset;

          // Update Horizontal Progress Bar
          if (progressFill) progressFill.style.width = `${progress * 100}%`;

          // Update Live Countdown Timer
          const remainingSecs = Math.max(0, (HOLD_DURATION - elapsed) / 1000).toFixed(1);
          if (timerEl) timerEl.textContent = `${remainingSecs}s`;

          // Rising tone audio telemetry every 250ms
          if (Math.floor(elapsed) % 250 < 30) {
            playTone(360 + progress * 520, 'sine', 0.05, 0.05);
          }

          // 2.0 Seconds Reached -> ACCESS GRANTED!
          if (elapsed >= HOLD_DURATION) {
            clearInterval(holdInterval);
            isHolding = false;
            scannerPad.classList.remove('is-holding');
            card.classList.remove('is-scanning');
            card.classList.remove('is-locked');

            if (cursor) cursor.classList.remove('is-fingerprint-mode');
            if (hudLabel) hudLabel.textContent = 'ACCESS GRANTED';
            if (timerEl) timerEl.textContent = '0.0s';
            if (promptText) promptText.textContent = 'CLASSIFIED SPECIFICATION UNLOCKED';

            playTone(960, 'triangle', 0.25, 0.15);
            playRepulsorCharge();
          }
        }, 25);
      }

      function abortHold(reason = 'HOLD INCOMPLETE') {
        if (!isHolding) return;
        isHolding = false;
        clearInterval(holdInterval);
        scannerPad.classList.remove('is-holding');
        card.classList.remove('is-scanning');

        if (circleFill) circleFill.style.strokeDashoffset = 283;
        if (progressFill) progressFill.style.width = '0%';
        if (timerEl) timerEl.textContent = '2.0s';
        if (promptText) promptText.textContent = reason;
        if (hudLabel && card.classList.contains('is-locked')) hudLabel.textContent = 'HOLD 2s TO UNLOCK';

        playTone(220, 'sawtooth', 0.1, 0.06);
      }

      // Mouse Events: strictly initiated inside the scanner circle pad
      scannerPad.addEventListener('mousedown', startHold);
      window.addEventListener('mouseup', () => {
        if (isHolding && card.classList.contains('is-locked')) {
          abortHold('HOLD 2s INSIDE CIRCLE TO REVEAL');
        }
      });

      // Touch Events: mobile touch & hold inside circle pad
      scannerPad.addEventListener('touchstart', startHold, { passive: false });
      scannerPad.addEventListener('touchend', () => {
        if (isHolding && card.classList.contains('is-locked')) {
          abortHold('HOLD 2s INSIDE CIRCLE TO REVEAL');
        }
      });
      scannerPad.addEventListener('touchcancel', () => {
        if (isHolding && card.classList.contains('is-locked')) {
          abortHold('HOLD 2s INSIDE CIRCLE TO REVEAL');
        }
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     14B. PARTICIPANT CREDENTIAL // IDENTITY CONSOLE (LANDSCAPE 3:2)
     ══════════════════════════════════════════════════════════════ */
  function initMissionIdGenerator() {
    const form = document.getElementById('mid-form');
    if (!form) return;

    // Inputs
    const nameInput = document.getElementById('mid-input-name');
    const teamInput = document.getElementById('mid-input-team');
    const instInput = document.getElementById('mid-input-inst');
    const roleSelect = document.getElementById('mid-select-role');
    const photoInput = document.getElementById('mid-photo-input');
    const uploadTriggerBtn = document.getElementById('btn-upload-trigger');
    const removePhotoBtn = document.getElementById('btn-remove-photo');
    const filenameLabel = document.getElementById('mpz-filename');
    const generateBtn = document.getElementById('btn-generate-mission-id');
    const generateText = document.getElementById('bmg-text');

    // Preview Elements
    const cardWrapper = document.getElementById('mid-preview-wrapper');
    const cardName = document.getElementById('jmc-card-name');
    const cardTeam = document.getElementById('jmc-card-team');
    const cardInst = document.getElementById('jmc-card-inst');
    const cardRole = document.getElementById('jmc-card-role');
    const cardOpid = document.getElementById('jmc-card-opid');
    const displayPhoto = document.getElementById('jmc-display-photo');
    const defaultAvatar = document.getElementById('jmc-default-avatar');
    const qrCanvas = document.getElementById('jmc-qr-canvas');
    const syncBadge = document.getElementById('mid-sync-badge');
    const syncText = document.getElementById('mid-sync-text');

    // Export buttons
    const downloadBtn = document.getElementById('btn-mid-download');
    const linkedinBtn = document.getElementById('btn-mid-linkedin');
    const copyBtn = document.getElementById('btn-mid-copy');
    const copyLabel = document.getElementById('btn-copy-label');

    let uploadedImageData = null;
    let uploadedImageElement = null;

    // Cache the Reactor Watermark Image for Canvas Export
    const reactorWatermark = new Image();
    reactorWatermark.src = 'jarvis-reactor-bg.png';

    // ──────────────────────────────────────────────────────────
    // STANDALONE QR CODE GENERATOR (Byte Mode, ISO/IEC 18004)
    // ──────────────────────────────────────────────────────────
    const QRCodeEngine = (function() {
      const PAD0 = 0xEC, PAD1 = 0x11;
      const RS_TABLE = {
        1: [26, 16, 10, 1],
        2: [44, 28, 16, 1],
        3: [70, 44, 26, 1],
        4: [100, 64, 18, 2],
        5: [134, 86, 24, 2]
      };
      const GF_EXP = new Array(512);
      const GF_LOG = new Array(256);
      (function initGF() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
          GF_EXP[i] = x;
          GF_LOG[x] = i;
          x <<= 1;
          if (x & 0x100) x ^= 0x11D;
        }
        for (let i = 255; i < 512; i++) GF_EXP[i] = GF_EXP[i - 255];
      })();

      function gfMul(x, y) {
        if (x === 0 || y === 0) return 0;
        return GF_EXP[GF_LOG[x] + GF_LOG[y]];
      }

      function rsPoly(n) {
        let g = [1];
        for (let i = 0; i < n; i++) {
          let g2 = new Array(g.length + 1).fill(0);
          for (let j = 0; j < g.length; j++) {
            g2[j] ^= gfMul(g[j], GF_EXP[i]);
            g2[j + 1] ^= g[j];
          }
          g = g2;
        }
        return g;
      }

      function calcEC(data, ecCount) {
        const gen = rsPoly(ecCount);
        const msg = data.concat(new Array(ecCount).fill(0));
        for (let i = 0; i < data.length; i++) {
          const coef = msg[i];
          if (coef !== 0) {
            for (let j = 0; j < gen.length; j++) {
              msg[i + j] ^= gfMul(gen[j], coef);
            }
          }
        }
        return msg.slice(data.length);
      }

      return {
        generateMatrix: function(text) {
          const bytes = Array.from(new TextEncoder().encode(text));
          let version = 1;
          for (let v = 1; v <= 5; v++) {
            const capacity = RS_TABLE[v][1] - 2;
            if (bytes.length <= capacity) { version = v; break; }
          }
          const [, dataCw, ecCw] = RS_TABLE[version];
          const size = 17 + 4 * version;
          
          let bits = [];
          function pushBits(val, len) {
            for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
          }
          pushBits(4, 4);
          pushBits(bytes.length, 8);
          for (let b of bytes) pushBits(b, 8);
          pushBits(0, 4);
          while (bits.length % 8 !== 0) bits.push(0);
          
          let codewords = [];
          for (let i = 0; i < bits.length; i += 8) {
            let b = 0;
            for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
            codewords.push(b);
          }
          let padToggle = false;
          while (codewords.length < dataCw) {
            codewords.push(padToggle ? PAD1 : PAD0);
            padToggle = !padToggle;
          }
          
          const ec = calcEC(codewords, ecCw);
          const allCodewords = codewords.concat(ec);
          const matrix = Array.from({length: size}, () => new Array(size).fill(null));
          const isReserved = Array.from({length: size}, () => new Array(size).fill(false));

          function setModule(r, c, val, reserved = true) {
            if (r >= 0 && r < size && c >= 0 && c < size) {
              matrix[r][c] = val;
              if (reserved) isReserved[r][c] = true;
            }
          }

          function addFinder(or, oc) {
            for (let r = -1; r <= 7; r++) {
              for (let c = -1; c <= 7; c++) {
                if (or + r < 0 || or + r >= size || oc + c < 0 || oc + c >= size) continue;
                const inOuter = (r >= 0 && r <= 6 && (c === 0 || c === 6)) || (c >= 0 && c <= 6 && (r === 0 || r === 6));
                const inInner = (r >= 2 && r <= 4 && c >= 2 && c <= 4);
                setModule(or + r, oc + c, (inOuter || inInner), true);
              }
            }
          }
          addFinder(0, 0);
          addFinder(0, size - 7);
          addFinder(size - 7, 0);

          if (version >= 2) {
            const alignPos = version === 2 ? 18 : (version === 3 ? 22 : (version === 4 ? 26 : 30));
            for (let r = -2; r <= 2; r++) {
              for (let c = -2; c <= 2; c++) {
                const val = (Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0));
                setModule(alignPos + r, alignPos + c, val, true);
              }
            }
          }

          for (let i = 8; i < size - 8; i++) {
            setModule(6, i, i % 2 === 0, true);
            setModule(i, 6, i % 2 === 0, true);
          }
          setModule(4 * version + 9, 8, true, true);

          for (let i = 0; i < 9; i++) {
            setModule(8, i, false, true);
            setModule(i, 8, false, true);
            if (i < 8) setModule(8, size - 1 - i, false, true);
            if (i < 7) setModule(size - 1 - i, 8, false, true);
          }

          let allBits = [];
          for (let cw of allCodewords) {
            for (let i = 7; i >= 0; i--) allBits.push((cw >> i) & 1);
          }
          let bitIdx = 0;
          let dir = -1;
          for (let c = size - 1; c > 0; c -= 2) {
            if (c === 6) c--;
            for (let step = 0; step < size; step++) {
              const r = dir === -1 ? size - 1 - step : step;
              for (let dc = 0; dc < 2; dc++) {
                const col = c - dc;
                if (!isReserved[r][col]) {
                  let bit = bitIdx < allBits.length ? allBits[bitIdx++] : 0;
                  if ((r + col) % 2 === 0) bit ^= 1;
                  matrix[r][col] = (bit === 1);
                }
              }
            }
            dir = -dir;
          }

          const formatBits = [1,0,1,0,1,0,0,0,0,0,1,0,0,1,0];
          for (let i = 0; i < 6; i++) matrix[8][i] = (formatBits[i] === 1);
          matrix[8][7] = (formatBits[6] === 1);
          matrix[8][8] = (formatBits[7] === 1);
          matrix[7][8] = (formatBits[8] === 1);
          for (let i = 9; i < 15; i++) matrix[14 - i][8] = (formatBits[i] === 1);
          for (let i = 0; i < 8; i++) matrix[size - 1 - i][8] = (formatBits[i] === 1);
          for (let i = 8; i < 15; i++) matrix[8][size - 15 + i] = (formatBits[i] === 1);

          return { size, matrix };
        },

        renderToCanvas: function(canvas, text, bg = '#ffffff', fg = '#020917', padding = 2) {
          if (!canvas) return;
          const { size, matrix } = this.generateMatrix(text);
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          
          const totalSize = size + padding * 2;
          const cellSize = canvas.width / totalSize;

          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.fillStyle = fg;
          for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
              if (matrix[r][c]) {
                ctx.fillRect(
                  (c + padding) * cellSize,
                  (r + padding) * cellSize,
                  cellSize + 0.3,
                  cellSize + 0.3
                );
              }
            }
          }
        },

        drawToContext: function(ctx, text, x, y, width, height, bg = '#ffffff', fg = '#020917', padding = 2) {
          const { size, matrix } = this.generateMatrix(text);
          const totalSize = size + padding * 2;
          const cellSize = width / totalSize;

          ctx.fillStyle = bg;
          ctx.fillRect(x, y, width, height);

          ctx.fillStyle = fg;
          for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
              if (matrix[r][c]) {
                ctx.fillRect(
                  x + (c + padding) * cellSize,
                  y + (r + padding) * cellSize,
                  cellSize + 0.3,
                  cellSize + 0.3
                );
              }
            }
          }
        }
      };
    })();

    // Profile Photo Upload Handling
    if (uploadTriggerBtn && photoInput) {
      uploadTriggerBtn.addEventListener('click', () => photoInput.click());
    }

    if (photoInput) {
      photoInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          uploadedImageData = event.target.result;
          
          const img = new Image();
          img.onload = () => {
            uploadedImageElement = img;
            
            if (displayPhoto) {
              displayPhoto.src = uploadedImageData;
              displayPhoto.style.display = 'block';
              displayPhoto.classList.remove('is-hidden');
            }
            if (defaultAvatar) {
              defaultAvatar.style.display = 'none';
              defaultAvatar.classList.add('is-hidden');
            }
            if (filenameLabel) {
              filenameLabel.textContent = file.name.toUpperCase();
              filenameLabel.style.color = 'var(--arc-cyan)';
            }
            if (removePhotoBtn) {
              removePhotoBtn.style.display = 'inline-block';
              removePhotoBtn.classList.remove('is-hidden');
            }

            playTone(880, 'sine', 0.08, 0.05);
          };
          img.src = uploadedImageData;
        };
        reader.readAsDataURL(file);
      });
    }

    // Remove Photo
    if (removePhotoBtn) {
      removePhotoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        uploadedImageData = null;
        uploadedImageElement = null;
        if (photoInput) photoInput.value = '';
        if (filenameLabel) {
          filenameLabel.textContent = 'NO FILE CHOSEN';
          filenameLabel.style.color = 'var(--text-silver)';
        }
        if (displayPhoto) {
          displayPhoto.src = '';
          displayPhoto.style.display = 'none';
          displayPhoto.classList.add('is-hidden');
        }
        if (defaultAvatar) {
          defaultAvatar.style.display = 'flex';
          defaultAvatar.classList.remove('is-hidden');
        }
        removePhotoBtn.style.display = 'none';
        removePhotoBtn.classList.add('is-hidden');
        playTone(440, 'sine', 0.06, 0.05);
      });
    }

    // Generate Credential Sequence
    if (generateBtn) {
      generateBtn.addEventListener('click', () => {
        syncPreview();
        playTone(784, 'sine', 0.06, 0.06);

        generateBtn.classList.add('is-generating');
        if (cardWrapper) cardWrapper.classList.add('is-scanning');

        const steps = [
          { text: 'VERIFYING PARTICIPANT IDENTITY...', time: 300, tone: 880 },
          { text: 'REGISTERING WITH HACKATHON CORE...', time: 650, tone: 988 },
          { text: 'SIGNING DIGITAL CREDENTIAL...', time: 1000, tone: 1174 },
          { text: 'CREDENTIAL READY', time: 1350, tone: 1318 }
        ];

        steps.forEach(step => {
          setTimeout(() => {
            if (generateText) generateText.textContent = step.text;
            playTone(step.tone, 'sine', 0.06, 0.06);
          }, step.time);
        });

        setTimeout(() => {
          generateBtn.classList.remove('is-generating');
          if (cardWrapper) cardWrapper.classList.remove('is-scanning');
          if (generateText) generateText.textContent = '⚡ GENERATE AGAIN';
          
          const card = document.getElementById('jarvis-mission-card');
          if (card) {
            card.style.transform = 'perspective(1000px) scale(1.02)';
            setTimeout(() => { card.style.transform = 'perspective(1000px) scale(1)'; }, 350);
          }
        }, 1600);
      });
    }

    // ──────────────────────────────────────────────────────────
    // 2400 x 1600 (3:2 LANDSCAPE) HIGH-RESOLUTION EXPORT ENGINE
    // Renders the exact Ticket Pass layout matching the reference mockup
    // ──────────────────────────────────────────────────────────
    function renderHighResCanvas(callback) {
      const W = 2400;
      const H = 1600;
      const c = document.createElement('canvas');
      c.width = W;
      c.height = H;
      const ctx = c.getContext('2d');
      if (!ctx) return;

      const name = (nameInput && nameInput.value ? nameInput.value : '').trim() || 'TONY STARK';
      const team = (teamInput && teamInput.value ? teamInput.value : '').trim() || 'AVENGERS PRIME';
      const inst = (instInput && instInput.value ? instInput.value : '').trim() || 'STARK INDUSTRIES';
      const role = (roleSelect ? roleSelect.value : 'Participant').toUpperCase();

      // 1. Deep Metallic Radial Dark Background
      const bgGrad = ctx.createRadialGradient(W * 0.45, H * 0.45, 120, W / 2, H / 2, W * 0.85);
      bgGrad.addColorStop(0, '#0a1b38');
      bgGrad.addColorStop(0.65, '#030a1c');
      bgGrad.addColorStop(1, '#010309');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Helper function for rounded rectangles
      function roundRect(x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
      }

      // 3. Precision Cybernetic Outer Border
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 4;
      ctx.shadowColor = 'rgba(0, 240, 255, 0.45)';
      ctx.shadowBlur = 24;
      roundRect(50, 50, W - 100, H - 100, 28);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 4. Corner Reticle Brackets
      const bLen = 50;
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#00f0ff';
      ctx.beginPath(); ctx.moveTo(42, 42 + bLen); ctx.lineTo(42, 42); ctx.lineTo(42 + bLen, 42); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(W - 42 - bLen, 42); ctx.lineTo(W - 42, 42); ctx.lineTo(W - 42, 42 + bLen); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(42, H - 42 - bLen); ctx.lineTo(42, H - 42); ctx.lineTo(42 + bLen, H - 42); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(W - 42 - bLen, H - 42); ctx.lineTo(W - 42, H - 42); ctx.lineTo(W - 42, H - 42 - bLen); ctx.stroke();

      // Top Left Brand
      ctx.textAlign = 'left';
      ctx.font = 'bold 54px "Cinzel", "Times New Roman", serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('PROJECT ', 110, 135);
      const projW = ctx.measureText('PROJECT ').width;
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('J.A.R.V.I.S.', 110 + projW, 135);
      ctx.fillStyle = '#00f0ff';
      ctx.font = 'bold 24px "Montserrat", sans-serif';
      ctx.fillText("IGNITRRON'26 · 24-HOUR SOFTWARE HACKATHON", 110, 175);

      // Top Right Verified Badge
      const badgeW = 240;
      const badgeH = 58;
      const badgeX = W - 110 - badgeW;
      const badgeY = 105;
      ctx.fillStyle = 'rgba(16, 185, 129, 0.16)';
      roundRect(badgeX, badgeY, badgeW, badgeH, 10);
      ctx.fill();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2.5;
      roundRect(badgeX, badgeY, badgeW, badgeH, 10);
      ctx.stroke();
      ctx.font = 'bold 24px "Montserrat", sans-serif';
      ctx.fillText('VERIFIED', badgeX + 54, badgeY + 38);

      // ══════════════════════════════════════════════════════════
      // MAIN CONTENT (Left Photo ~30% + Right Identity ~70%)
      // ══════════════════════════════════════════════════════════

      // Left: Rounded Photo Frame (Large & Highly Visible)
      const photoX = 110;
      const photoY = 240;
      const photoW = 580;
      const photoH = 780;

      ctx.save();
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 4;
      ctx.shadowColor = 'rgba(0, 240, 255, 0.45)';
      ctx.shadowBlur = 28;
      roundRect(photoX, photoY, photoW, photoH, 24);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Clip inside rounded photo
      ctx.clip();

      if (uploadedImageElement) {
        const img = uploadedImageElement;
        const imgRatio = img.width / img.height;
        const boxRatio = photoW / photoH;
        let sW, sH, sX, sY;
        if (imgRatio > boxRatio) {
          sH = img.height;
          sW = img.height * boxRatio;
          sX = (img.width - sW) / 2;
          sY = 0;
        } else {
          sW = img.width;
          sH = img.width / boxRatio;
          sX = 0;
          sY = (img.height - sH) / 2;
        }
        ctx.drawImage(img, sX, sY, sW, sH, photoX, photoY, photoW, photoH);
      } else {
        ctx.fillStyle = 'rgba(4, 11, 28, 0.85)';
        ctx.fillRect(photoX, photoY, photoW, photoH);

        const avCenterX = photoX + photoW / 2;
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.9)';
        ctx.lineWidth = 9;
        ctx.beginPath(); ctx.arc(avCenterX, photoY + 270, 120, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(avCenterX, photoY + 690, 240, Math.PI, 0); ctx.stroke();

        ctx.fillStyle = '#00f0ff';
        ctx.font = 'bold 28px "Montserrat", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('PARTICIPANT PHOTO', avCenterX, photoY + 440);
      }
      ctx.restore();

      // Subtag below photo
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 24px "Montserrat", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('OFFICIAL PARTICIPATION CARD', photoX + photoW / 2, photoY + photoH + 45);

      // Right: Expansive Event Hero + Participant Stack
      const cX = 760;
      ctx.textAlign = 'left';

      // "I'm Participating in" (Script font)
      ctx.fillStyle = '#00f0ff';
      ctx.font = 'italic bold 46px "Kaushan Script", "Caveat", cursive';
      ctx.shadowColor = 'rgba(0, 240, 255, 0.45)';
      ctx.shadowBlur = 15;
      ctx.fillText("I'm Participating in", cX, 360);
      ctx.shadowBlur = 0;

      // "IGNITRRON'26" (Main event title, dominant visual hero)
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 96px "Montserrat", sans-serif';
      ctx.fillText("IGNITRRON'26", cX, 455);

      // "PROJECT J.A.R.V.I.S."
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 42px "Cinzel", "Times New Roman", serif';
      ctx.fillText('PROJECT ', cX, 515);
      const proj2W = ctx.measureText('PROJECT ').width;
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('J.A.R.V.I.S.', cX + proj2W, 515);

      // "24-HOUR SOFTWARE HACKATHON"
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px "Montserrat", sans-serif';
      ctx.fillText('24-HOUR SOFTWARE HACKATHON', cX, 560);

      // Cyan HUD Divider Line
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.55)';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cX, 605); ctx.lineTo(W - 110, 605); ctx.stroke();

      // Hero Full Name (Dynamically scaled for long names)
      ctx.fillStyle = '#ffffff';
      let nameFontSize = 74;
      if (name.length > 20) {
        nameFontSize = 50;
      } else if (name.length > 14) {
        nameFontSize = 62;
      }
      ctx.font = `bold ${nameFontSize}px "Cinzel", "Times New Roman", serif`;
      ctx.shadowColor = 'rgba(0, 240, 255, 0.35)';
      ctx.shadowBlur = 20;
      ctx.fillText(name.toUpperCase(), cX, 700);
      ctx.shadowBlur = 0;

      // Role Pill Badge
      const rPillW = 280;
      const rPillH = 56;
      ctx.fillStyle = 'rgba(0, 240, 255, 0.16)';
      roundRect(cX, 735, rPillW, rPillH, 10);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.75)';
      ctx.lineWidth = 2;
      roundRect(cX, 735, rPillW, rPillH, 10);
      ctx.stroke();

      ctx.fillStyle = '#00f0ff';
      ctx.font = 'bold 28px "Montserrat", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(role, cX + rPillW / 2, 773);

      // Team Line
      ctx.textAlign = 'left';
      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 32px "Montserrat", sans-serif';
      ctx.fillText('TEAM: ', cX, 850);
      const teamLblW = ctx.measureText('TEAM: ').width;
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 34px "Montserrat", sans-serif';
      ctx.fillText(team.toUpperCase(), cX + teamLblW + 8, 850);

      // College / Institution Line
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 32px "Montserrat", sans-serif';
      ctx.fillText(inst.toUpperCase(), cX, 915);



      // ══════════════════════════════════════════════════════════
      // FULL WIDTH FOOTER BAR (y = 1380 to 1480)
      // ══════════════════════════════════════════════════════════
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.28)';
      ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(110, H - 210); ctx.lineTo(W - 110, H - 210); ctx.stroke();

      // Left: Building / Venue info
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(110, H - 180, 48, 56);
      ctx.beginPath();
      ctx.moveTo(110, H - 150); ctx.lineTo(158, H - 150);
      ctx.moveTo(134, H - 180); ctx.lineTo(134, H - 124);
      ctx.stroke();

      ctx.textAlign = 'left';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 34px "Montserrat", sans-serif';
      ctx.fillText('18–19 SEPTEMBER 2026', 185, H - 160);
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 28px "Montserrat", sans-serif';
      ctx.fillText('KPR INSTITUTE OF ENGINEERING AND TECHNOLOGY', 185, H - 124);

      // Center: Multi-Ring Arc Reactor
      const rX = W / 2 - 40;
      const rY = H - 145;
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.arc(rX, rY, 50, 0, Math.PI * 2); ctx.stroke();
      ctx.save();
      ctx.setLineDash([8, 6]);
      ctx.beginPath(); ctx.arc(rX, rY, 38, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();
      ctx.fillStyle = '#03152d';
      ctx.beginPath(); ctx.arc(rX, rY, 26, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(rX, rY, 16, 0, Math.PI * 2); ctx.fill();

      // Right: Branding (Calculated right-alignment to prevent overlaps)
      ctx.textAlign = 'right';
      ctx.font = 'bold 34px "Montserrat", sans-serif';
      const rightEdge = W - 110;
      const fY = H - 138;
      
      ctx.fillStyle = '#fbbf24';
      ctx.fillText("IGNITRRON'26", rightEdge, fY);
      const ignW = ctx.measureText("IGNITRRON'26").width;
      
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(' // ', rightEdge - ignW, fY);
      const slashW = ctx.measureText(' // ').width;
      
      ctx.fillStyle = '#00f0ff';
      ctx.fillText('PROJECT J.A.R.V.I.S.', rightEdge - ignW - slashW, fY);

      if (callback) callback(c);
    }

    // Trigger Download Function (Captures the exact website card DOM element)
    function downloadCredentialImage() {
      if (!uploadedImageElement && !uploadedImageData) {
        showHudToast('📷 PLEASE UPLOAD YOUR PHOTO BEFORE DOWNLOADING CREDENTIAL');
        if (photoInput) photoInput.click();
        return;
      }

      const card = document.getElementById('jarvis-mission-card');
      if (!card) return;

      const name = (nameInput && nameInput.value ? nameInput.value : 'PARTICIPANT').trim().replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();

      // Temporarily normalize card transform for pixel-perfect screenshot
      const oldTransform = card.style.transform;
      card.style.transform = 'none';

      const triggerDownload = (canvas) => {
        card.style.transform = oldTransform;
        const link = document.createElement('a');
        link.download = `IGNITRRON_CREDENTIAL_${name}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        playTone(1174, 'sine', 0.1, 0.08);
      };

      if (window.html2canvas) {
        window.html2canvas(card, {
          scale: 3,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#010309',
          logging: false
        }).then(triggerDownload).catch(() => {
          card.style.transform = oldTransform;
          renderHighResCanvas(triggerDownload);
        });
      } else {
        card.style.transform = oldTransform;
        renderHighResCanvas(triggerDownload);
      }
    }

    // Robust Clipboard Copy Engine
    function copyTextToClipboard(text) {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text).catch(() => fallbackCopyText(text));
      }
      return fallbackCopyText(text);
    }

    function fallbackCopyText(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {}
      document.body.removeChild(textArea);
      return Promise.resolve();
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', downloadCredentialImage);
    }

    // LinkedIn Sharing Action
    if (linkedinBtn) {
      linkedinBtn.addEventListener('click', () => {
        const caption = getLinkedInCaption();
        
        // Copy personalized caption to clipboard
        copyTextToClipboard(caption);

        // Auto download the Credential card
        downloadCredentialImage();

        // Inform user clearly
        showHudToast('Caption copied — paste it into your LinkedIn post.');

        // Open official LinkedIn share endpoint
        setTimeout(() => {
          const officialPage = 'https://www.linkedin.com/company/ignitrronkpriet/';
          const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(officialPage)}`;
          window.open(shareUrl, '_blank', 'noopener,noreferrer');
        }, 400);
      });
    }

    // Copy Caption Button
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const caption = getLinkedInCaption();
        copyTextToClipboard(caption).then(() => {
          if (copyLabel) copyLabel.textContent = '✅ POST COPIED!';
          showHudToast('Caption copied — paste it into your LinkedIn post.');
          setTimeout(() => {
            if (copyLabel) copyLabel.textContent = 'COPY LINKEDIN POST';
          }, 2600);
        });
      });
    }

    // Initial sync
    syncPreview();
  }

  /* ══════════════════════════════════════════════════════════════
     14B. J.A.R.V.I.S. LIQUID GLASS BACKGROUND ENGINE (SCENE 06)
     ══════════════════════════════════════════════════════════════ */
  function initLiquidGlassBackground() {
    const scene = document.getElementById('scene-mission-id');
    const canvas = document.getElementById('mid-liquid-glass-canvas');
    const identityCore = document.getElementById('mlg-identity-core');
    const formPanel = document.querySelector('.mid-form-panel');
    const previewPanel = document.querySelector('.mid-preview-panel');

    if (!scene || !canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = scene.offsetWidth);
    let height = (canvas.height = scene.offsetHeight);

    // Reduced motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      renderStaticGlass();
      return;
    }

    // ──────────────────────────────────────────────────────────
    // 1. PROCEDURAL TECHNICAL BLUEPRINT & CIRCUITRY NODES
    // ──────────────────────────────────────────────────────────
    let circuitPaths = [];
    let technicalNodes = [];
    let icBlocks = [];

    function generateCircuitry() {
      circuitPaths = [];
      technicalNodes = [];
      icBlocks = [];

      const cols = 12;
      const rows = 8;
      const cellW = width / cols;
      const cellH = height / rows;

      // A. Primary Circuit Traces (45° and 90° Stark PCB Traces)
      for (let i = 0; i < 45; i++) {
        const startCol = Math.floor(Math.random() * cols);
        const startRow = Math.floor(Math.random() * rows);
        let curX = startCol * cellW + (Math.random() * 0.6 + 0.2) * cellW;
        let curY = startRow * cellH + (Math.random() * 0.6 + 0.2) * cellH;

        const points = [{ x: curX, y: curY }];
        const segments = Math.floor(Math.random() * 4) + 3;

        for (let s = 0; s < segments; s++) {
          const dir = Math.floor(Math.random() * 4);
          const len = Math.random() * 90 + 40;

          if (dir === 0) curX += len;
          else if (dir === 1) curY += len;
          else if (dir === 2) { curX += len * 0.707; curY += len * 0.707; }
          else if (dir === 3) { curX -= len * 0.707; curY += len * 0.707; }

          curX = Math.max(20, Math.min(width - 20, curX));
          curY = Math.max(20, Math.min(height - 20, curY));
          points.push({ x: curX, y: curY });
        }

        circuitPaths.push({
          points,
          pulseOffset: Math.random() * 100,
          pulseSpeed: 0.4 + Math.random() * 0.8,
          isFormTrace: startCol < cols * 0.48,
          isCardTrace: startCol >= cols * 0.48
        });
      }

      // B. Technical Telemetry Hubs & Circular Nodes
      const techLabels = ['SYS_BUS_01', 'OPTICAL_CHAN_A', 'SEC_TOKEN_26', 'CORE_REGISTRY', 'I/O_SYNC_PORT', 'NEURAL_LINK_V4', 'STARK_MATRIX', 'BIOMETRIC_LOCK'];
      for (let i = 0; i < 14; i++) {
        const nx = Math.random() * (width - 120) + 60;
        const ny = Math.random() * (height - 120) + 60;
        technicalNodes.push({
          x: nx,
          y: ny,
          radius: 5 + Math.random() * 12,
          hasCrosshair: Math.random() > 0.4,
          label: Math.random() > 0.4 ? techLabels[Math.floor(Math.random() * techLabels.length)] : null,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }

      // C. Integrated Circuit Footprints (IC Chip Blocks)
      for (let i = 0; i < 8; i++) {
        icBlocks.push({
          x: Math.random() * (width - 200) + 100,
          y: Math.random() * (height - 160) + 80,
          w: 50 + Math.random() * 60,
          h: 30 + Math.random() * 35,
          pins: Math.floor(Math.random() * 4) + 4
        });
      }
    }

    generateCircuitry();

    function resize() {
      if (!scene || !canvas) return;
      width = canvas.width = scene.offsetWidth;
      height = canvas.height = scene.offsetHeight;
      generateCircuitry();
    }
    window.addEventListener('resize', resize);

    // ──────────────────────────────────────────────────────────
    // 2. CURSOR & INTERACTION PHYSICS
    // ──────────────────────────────────────────────────────────
    let targetX = width * 0.5;
    let targetY = height * 0.4;
    let cursorX = targetX;
    let cursorY = targetY;
    let prevCursorX = cursorX;
    let prevCursorY = cursorY;

    let isHovering = false;
    let lightAlpha = 0.0;
    let targetLightAlpha = 0.0;
    let lastMoveTime = 0;

    let formExcitation = 0.0;
    let cardExcitation = 0.0;

    // Fading Cursor Light Smear Trail Buffer (300-600ms memory)
    const trailBuffer = [];
    const MAX_TRAIL = 10;

    scene.addEventListener('mousemove', (e) => {
      const rect = scene.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      isHovering = true;
      targetLightAlpha = 1.0;
      lastMoveTime = performance.now();

      // Detect hover on left form panel or right card panel
      if (formPanel) {
        const fRect = formPanel.getBoundingClientRect();
        const overForm = e.clientX >= fRect.left - 40 && e.clientX <= fRect.right + 40 &&
                         e.clientY >= fRect.top - 40 && e.clientY <= fRect.bottom + 40;
        formExcitation = overForm ? 1.0 : 0.0;
      }

      if (previewPanel) {
        const pRect = previewPanel.getBoundingClientRect();
        const overCard = e.clientX >= pRect.left - 40 && e.clientX <= pRect.right + 40 &&
                         e.clientY >= pRect.top - 40 && e.clientY <= pRect.bottom + 40;
        cardExcitation = overCard ? 1.0 : 0.0;
        if (identityCore) {
          identityCore.classList.toggle('is-excited', overCard);
        }
      }
    });

    scene.addEventListener('mouseleave', () => {
      isHovering = false;
      targetLightAlpha = 0.0;
      formExcitation = 0.0;
      cardExcitation = 0.0;
      if (identityCore) identityCore.classList.remove('is-excited');
    });

    // Static fallback for reduced motion
    function renderStaticGlass() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.035)';
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }
    }

    // ──────────────────────────────────────────────────────────
    // 3. CONTINUOUS LIQUID GLASS RENDER LOOP
    // ──────────────────────────────────────────────────────────
    let frameCount = 0;

    function renderLiquidGlass(now) {
      if (!ctx) return;
      frameCount++;

      // Easing cursor position
      prevCursorX = cursorX;
      prevCursorY = cursorY;
      cursorX += (targetX - cursorX) * 0.088;
      cursorY += (targetY - cursorY) * 0.088;

      const speed = Math.hypot(cursorX - prevCursorX, cursorY - prevCursorY);

      // Smooth light alpha transition
      // Settle down after 3.0s of inactivity to rest state
      if (isHovering && now - lastMoveTime > 3000) {
        targetLightAlpha = 0.18;
      }
      lightAlpha += (targetLightAlpha - lightAlpha) * 0.06;

      // Update trail points
      if (isHovering && speed > 0.8) {
        trailBuffer.unshift({ x: cursorX, y: cursorY, time: now, alpha: 1.0 });
        if (trailBuffer.length > MAX_TRAIL) trailBuffer.pop();
      }

      // Fade existing trail buffer points
      for (let i = trailBuffer.length - 1; i >= 0; i--) {
        const pt = trailBuffer[i];
        const age = now - pt.time;
        pt.alpha = Math.max(0, 1 - age / 520);
        if (pt.alpha <= 0.01) trailBuffer.splice(i, 1);
      }

      ctx.clearRect(0, 0, width, height);

      // ── STEP A: FAINT TECHNICAL GRID (BASE 2.5% -> ILLUMINATED 8%) ──
      const gridSize = 56;
      const illumRadius = 350 + Math.min(speed * 8, 80);

      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += gridSize) {
        const dx = Math.abs(x - cursorX);
        const gridGlow = Math.max(0, 1 - dx / illumRadius) * lightAlpha;
        const alpha = 0.025 + gridGlow * 0.06;

        ctx.strokeStyle = '#00f0ff';
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        const dy = Math.abs(y - cursorY);
        const gridGlow = Math.max(0, 1 - dy / illumRadius) * lightAlpha;
        const alpha = 0.025 + gridGlow * 0.06;

        ctx.strokeStyle = '#00f0ff';
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Grid Intersection Plus Marks (+)
      ctx.font = '8px monospace';
      ctx.fillStyle = '#00f0ff';
      for (let x = gridSize; x < width; x += gridSize * 2) {
        for (let y = gridSize; y < height; y += gridSize * 2) {
          const dist = Math.hypot(x - cursorX, y - cursorY);
          const plusGlow = Math.max(0, 1 - dist / illumRadius) * lightAlpha;
          if (plusGlow > 0.1) {
            ctx.globalAlpha = 0.03 + plusGlow * 0.18;
            ctx.fillText('+', x - 3, y + 3);
          }
        }
      }

      // ── STEP B: HIDDEN CIRCUIT TRACES & BLUEPRINTS ──
      circuitPaths.forEach((cp, idx) => {
        const pts = cp.points;
        if (pts.length < 2) return;

        // Calculate minimum distance from cursor to any point on trace
        let minDist = 9999;
        for (let p of pts) {
          const d = Math.hypot(p.x - cursorX, p.y - cursorY);
          if (d < minDist) minDist = d;
        }

        // Proximity illumination
        const illum = Math.max(0, 1 - minDist / illumRadius) * lightAlpha;
        let traceAlpha = 0.04 + illum * 0.22;

        // Extra excitation if over form or card
        if (cp.isFormTrace && formExcitation > 0.05) {
          traceAlpha += formExcitation * 0.12;
        }
        if (cp.isCardTrace && cardExcitation > 0.05) {
          traceAlpha += cardExcitation * 0.12;
        }

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }

        ctx.strokeStyle = illum > 0.25 ? '#00f0ff' : '#64748b';
        ctx.globalAlpha = Math.min(0.35, traceAlpha);
        ctx.lineWidth = illum > 0.35 ? 1.4 : 0.8;

        if (illum > 0.3) {
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.stroke();
        ctx.shadowBlur = 0;

        // Trace Terminating Solder Pads (Small Nodes)
        const endPt = pts[pts.length - 1];
        ctx.beginPath();
        ctx.arc(endPt.x, endPt.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#00f0ff';
        ctx.globalAlpha = Math.min(0.4, traceAlpha * 1.5);
        ctx.fill();

        // Traveling Electron Signal Packet (When illuminated)
        if (illum > 0.2 || (cp.isFormTrace && formExcitation > 0.2)) {
          const t = ((frameCount * cp.pulseSpeed + cp.pulseOffset) % 100) / 100;
          const segCount = pts.length - 1;
          const totalIdx = t * segCount;
          const segIdx = Math.min(segCount - 1, Math.floor(totalIdx));
          const segT = totalIdx - segIdx;

          const p1 = pts[segIdx];
          const p2 = pts[segIdx + 1];
          if (p1 && p2) {
            const px = p1.x + (p2.x - p1.x) * segT;
            const py = p1.y + (p2.y - p1.y) * segT;

            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.globalAlpha = Math.min(0.8, (illum + 0.3) * lightAlpha);
            ctx.shadowColor = '#00f0ff';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      });

      // ── STEP C: IC CHIP FOOTPRINTS ──
      icBlocks.forEach((ic) => {
        const icDist = Math.hypot(ic.x + ic.w / 2 - cursorX, ic.y + ic.h / 2 - cursorY);
        const icIllum = Math.max(0, 1 - icDist / illumRadius) * lightAlpha;
        const icAlpha = 0.035 + icIllum * 0.18;

        ctx.strokeStyle = '#00f0ff';
        ctx.globalAlpha = icAlpha;
        ctx.lineWidth = 0.8;
        ctx.strokeRect(ic.x, ic.y, ic.w, ic.h);

        // IC Corner Notch
        ctx.beginPath();
        ctx.arc(ic.x + 8, ic.y + 8, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#00f0ff';
        ctx.fill();

        // Pins
        const pinGap = ic.w / (ic.pins + 1);
        for (let p = 1; p <= ic.pins; p++) {
          ctx.beginPath();
          ctx.moveTo(ic.x + p * pinGap, ic.y);
          ctx.lineTo(ic.x + p * pinGap, ic.y - 4);
          ctx.moveTo(ic.x + p * pinGap, ic.y + ic.h);
          ctx.lineTo(ic.x + p * pinGap, ic.y + ic.h + 4);
          ctx.stroke();
        }
      });

      // ── STEP D: TELEMETRY HUBS & MICRO LABELS ──
      technicalNodes.forEach((tn) => {
        const tDist = Math.hypot(tn.x - cursorX, tn.y - cursorY);
        const tIllum = Math.max(0, 1 - tDist / illumRadius) * lightAlpha;
        const tAlpha = 0.03 + tIllum * 0.25;

        ctx.strokeStyle = '#00f0ff';
        ctx.globalAlpha = tAlpha;
        ctx.lineWidth = 0.8;

        ctx.beginPath();
        ctx.arc(tn.x, tn.y, tn.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (tn.hasCrosshair && tIllum > 0.15) {
          ctx.beginPath();
          ctx.moveTo(tn.x - tn.radius - 4, tn.y);
          ctx.lineTo(tn.x + tn.radius + 4, tn.y);
          ctx.moveTo(tn.x, tn.y - tn.radius - 4);
          ctx.lineTo(tn.x, tn.y + tn.radius + 4);
          ctx.stroke();
        }

        if (tn.label && tIllum > 0.22) {
          ctx.font = '7px "Courier New", monospace';
          ctx.fillStyle = '#94a3b8';
          ctx.globalAlpha = tAlpha * 1.4;
          ctx.fillText(tn.label, tn.x + tn.radius + 6, tn.y + 3);
        }
      });

      // ── STEP E: LIQUID GLASS LIGHT SMEAR TRAIL ──
      if (trailBuffer.length > 1) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        for (let i = 0; i < trailBuffer.length; i++) {
          const pt = trailBuffer[i];
          const trGrad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 160);
          trGrad.addColorStop(0, `rgba(0, 240, 255, ${0.07 * pt.alpha * lightAlpha})`);
          trGrad.addColorStop(0.5, `rgba(2, 132, 199, ${0.025 * pt.alpha * lightAlpha})`);
          trGrad.addColorStop(1, 'transparent');

          ctx.fillStyle = trGrad;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 160, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // ── STEP F: MAIN CURSOR-REACTIVE LIQUID GLASS LIGHT FIELD ──
      if (lightAlpha > 0.01) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        const mainRadius = 300 + Math.min(speed * 10, 80);
        const glassLight = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, mainRadius);
        
        glassLight.addColorStop(0, `rgba(0, 240, 255, ${0.16 * lightAlpha})`);
        glassLight.addColorStop(0.28, `rgba(0, 217, 255, ${0.08 * lightAlpha})`);
        glassLight.addColorStop(0.60, `rgba(2, 132, 199, ${0.03 * lightAlpha})`);
        glassLight.addColorStop(0.85, `rgba(0, 240, 255, ${0.008 * lightAlpha})`);
        glassLight.addColorStop(1, 'transparent');

        ctx.fillStyle = glassLight;
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, mainRadius, 0, Math.PI * 2);
        ctx.fill();

        // Soft Asymmetric Glass Specular Shimmer Highlight
        const specGrad = ctx.createRadialGradient(cursorX - 25, cursorY - 20, 0, cursorX, cursorY, 130);
        specGrad.addColorStop(0, `rgba(255, 255, 255, ${0.06 * lightAlpha})`);
        specGrad.addColorStop(0.4, `rgba(0, 240, 255, ${0.02 * lightAlpha})`);
        specGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = specGrad;
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, 130, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(renderLiquidGlass);
    }

    requestAnimationFrame(renderLiquidGlass);
  }

  /* ══════════════════════════════════════════════════════════════
     14C. "LIVING SHADOW / MEMORY VAULT" INTERACTIVE BACKGROUND ENGINE
     ══════════════════════════════════════════════════════════════ */
  function initLivingShadowMemoryVault() {
    const scene = document.getElementById('scene-chronicles-gallery');
    const canvas = document.getElementById('gallery-vault-canvas');
    const sheenEl = document.getElementById('gvb-ambient-sheen');
    if (!scene || !canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = scene.offsetWidth);
    let height = (canvas.height = scene.offsetHeight);

    // Mouse coordinates (interpolated for physical weight & inertia)
    let targetX = width * 0.5;
    let targetY = height * 0.5;
    let currentX = width * 0.5;
    let currentY = height * 0.5;
    let isHovering = false;
    let lightIntensity = 0.12;
    let targetIntensity = 0.12;

    // Resize Handler
    function handleResize() {
      if (!scene || !canvas) return;
      width = canvas.width = scene.offsetWidth;
      height = canvas.height = scene.offsetHeight;
    }
    window.addEventListener('resize', handleResize, { passive: true });

    // Cursor Tracking over Section
    scene.addEventListener('mousemove', (e) => {
      const rect = scene.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      isHovering = true;
      targetIntensity = 0.32;
    });

    scene.addEventListener('mouseenter', () => {
      isHovering = true;
      targetIntensity = 0.32;
    });

    scene.addEventListener('mouseleave', () => {
      isHovering = false;
      targetX = width * 0.5;
      targetY = height * 0.5;
      targetIntensity = 0.12;
    });

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Main Render Loop
    function renderVault() {
      if (prefersReducedMotion) {
        drawStaticVault();
        return;
      }

      // Smooth Lerping (physical easing)
      currentX += (targetX - currentX) * 0.045;
      currentY += (targetY - currentY) * 0.045;
      lightIntensity += (targetIntensity - lightIntensity) * 0.035;

      // Normalized coordinates (-1 to +1)
      const normX = (currentX / width - 0.5) * 2;
      const normY = (currentY / height - 0.5) * 2;

      // Update ambient sheen position in CSS variable
      if (sheenEl) {
        const sheenPctX = ((currentX / width) * 100).toFixed(1);
        const sheenPctY = ((currentY / height) * 100).toFixed(1);
        sheenEl.style.setProperty('--vault-sheen-x', `${sheenPctX}%`);
        sheenEl.style.setProperty('--vault-sheen-y', `${sheenPctY}%`);
      }

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // ── Layer 1: Deep Metallic Architectural Panels (Deep Parallax) ──
      const deepPx = normX * 8;
      const deepPy = normY * 5;

      // Base gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5 + deepPx, height * 0.5 + deepPy, 50,
        width * 0.5 + deepPx, height * 0.5 + deepPy, Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, '#030815');
      bgGrad.addColorStop(0.5, '#01040b');
      bgGrad.addColorStop(1, '#000206');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Large Geometric Panel Seams (Faint metallic bevel lines)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      
      // Vertical bulkhead panels
      const panelSpacing = 340;
      const panelOffset = (deepPx * 0.8) % panelSpacing;
      for (let x = -panelSpacing + panelOffset; x < width + panelSpacing; x += panelSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + 40, height);
        ctx.stroke();
      }

      // ── Layer 2: Curved Vault Wall Ribs & Circular Bulkhead Shadows (Counter-Parallax) ──
      // Shadows move slightly in the OPPOSITE direction of cursor
      const shadowX = -normX * 16;
      const shadowY = -normY * 10;

      // Large Structural Vault Arches
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(width * 0.5 + shadowX, height * 0.95 + shadowY, width * 0.65, height * 0.7, 0, Math.PI, 0);
      ctx.strokeStyle = 'rgba(10, 24, 48, 0.35)';
      ctx.lineWidth = 40;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(width * 0.5 + shadowX, height * 0.95 + shadowY, width * 0.42, height * 0.5, 0, Math.PI, 0);
      ctx.strokeStyle = 'rgba(4, 12, 28, 0.5)';
      ctx.lineWidth = 28;
      ctx.stroke();
      ctx.restore();

      // Recessed Structural Aperture Rings (Left & Right background depths)
      const apertureLeftX = width * 0.18 + shadowX * 0.7;
      const apertureRightX = width * 0.82 + shadowX * 0.7;
      const apertureY = height * 0.45 + shadowY * 0.7;

      ctx.save();
      ctx.beginPath();
      ctx.arc(apertureLeftX, apertureY, 140, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(1, 3, 8, 0.45)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(apertureRightX, apertureY, 140, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(1, 3, 8, 0.45)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // ── Layer 3: Soft Directional Illumination (Controlled by Cursor Position) ──
      const lightRadius = Math.max(380, width * 0.35);
      const lightGrad = ctx.createRadialGradient(
        currentX, currentY, 0,
        currentX, currentY, lightRadius
      );
      lightGrad.addColorStop(0, `rgba(18, 45, 82, ${lightIntensity})`);
      lightGrad.addColorStop(0.35, `rgba(10, 26, 52, ${lightIntensity * 0.55})`);
      lightGrad.addColorStop(0.7, `rgba(4, 12, 26, ${lightIntensity * 0.2})`);
      lightGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = lightGrad;
      ctx.fillRect(0, 0, width, height);

      // ── Layer 4: Faint Blue Glass Surface Sheen & Specular Depth ──
      const sheenX = currentX + normX * 45;
      const glassGrad = ctx.createLinearGradient(
        sheenX - 250, 0,
        sheenX + 250, height
      );
      glassGrad.addColorStop(0, 'rgba(0, 212, 255, 0)');
      glassGrad.addColorStop(0.5, `rgba(0, 180, 255, ${lightIntensity * 0.12})`);
      glassGrad.addColorStop(1, 'rgba(0, 212, 255, 0)');

      ctx.fillStyle = glassGrad;
      ctx.fillRect(0, 0, width, height);

      // ── Photo Depth & Proximity Field (Smooth Subconscious Scale/Depth) ──
      const items = scene.querySelectorAll('.nh-item');
      if (items.length > 0) {
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width * 0.5;
          const distToCursor = Math.abs(cardCenterX - (currentX + scene.getBoundingClientRect().left));
          const maxInfluence = 450;

          if (distToCursor < maxInfluence) {
            const factor = 1 - (distToCursor / maxInfluence);
            const scale = 1 + factor * 0.035; // max 1.035x (subtle)
            const opacity = 0.92 + factor * 0.08;
            item.style.setProperty('--nh-scale', scale.toFixed(3));
            item.style.setProperty('--nh-opacity', opacity.toFixed(2));
          } else {
            item.style.setProperty('--nh-scale', '0.985');
            item.style.setProperty('--nh-opacity', '0.86');
          }
        });
      }

      requestAnimationFrame(renderVault);
    }

    function drawStaticVault() {
      ctx.fillStyle = '#010309';
      ctx.fillRect(0, 0, width, height);
    }

    requestAnimationFrame(renderVault);
  }

  /* ══════════════════════════════════════════════════════════════
     14D. "PROOF THAT TONY STARK HAS A HEART" CINEMATIC LANDING
     ══════════════════════════════════════════════════════════════ */
  function initStarkHeartLandingSequence() {
    const landingEl = document.getElementById('stark-heart-landing');
    if (!landingEl) return;

    let hasOpened = false;

    function triggerOpening() {
      if (hasOpened) return;
      hasOpened = true;

      // Step 1: Center laser slicing ignite
      landingEl.classList.add('is-cutting');

      // Play laser audio if sound is available
      if (typeof playSuitUpAudio === 'function') {
        try { playSuitUpAudio(); } catch (e) {}
      }

      // Step 2: Cut down the middle & split shutters horizontally
      setTimeout(() => {
        landingEl.classList.add('is-opening');
      }, 420);

      // Step 3: Complete opening & release pointer events to main page
      setTimeout(() => {
        landingEl.classList.add('is-finished');
        landingEl.style.display = 'none';
        
        // Trigger subtle hero element entry highlights
        const heroTitle = document.querySelector('.sh-title');
        if (heroTitle) {
          heroTitle.classList.add('hero-revealed');
        }
      }, 1600);
    }

    // User interactions to trigger split cut immediately
    landingEl.addEventListener('click', triggerOpening);
    landingEl.addEventListener('touchstart', triggerOpening, { passive: true });

    window.addEventListener('keydown', (e) => {
      if (!hasOpened) {
        triggerOpening();
      }
    });

    // Automatic cinematic trigger timer (auto-splits after 5.0s)
    setTimeout(() => {
      if (!hasOpened) {
        triggerOpening();
      }
    }, 5000);
  }

  /* ══════════════════════════════════════════════════════════════
     14E. MOBILE SLIDE-OUT DRAWER NAVIGATION CONTROLLER
     ══════════════════════════════════════════════════════════════ */
  function initMobileNavDrawer() {
    const hamburger = document.getElementById('ch-hamburger');
    const drawer = document.getElementById('ch-mobile-drawer');
    const backdrop = document.getElementById('ch-drawer-backdrop');
    const closeBtn = document.getElementById('ch-drawer-close');
    const drawerLinks = document.querySelectorAll('.ch-drawer-link');

    if (!hamburger || !drawer) return;

    function openDrawer() {
      hamburger.classList.add('is-active');
      hamburger.setAttribute('aria-expanded', 'true');
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (typeof playSuitUpAudio === 'function') {
        try { playTone(600, 'sine', 0.04, 0.03); } catch (e) {}
      }
    }

    function closeDrawer() {
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function toggleDrawer() {
      if (drawer.classList.contains('is-open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    }

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDrawer();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeDrawer();
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }

    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  /* ══════════════════════════════════════════════════════════════
     15. INITIALIZATION & GLOBAL FALLBACKS
     ══════════════════════════════════════════════════════════════ */
  window.handleAskJarvisQuery = function (key) {
    if (!key) return;
    const allChips = document.querySelectorAll('.f-chip');
    const targetChip = Array.from(allChips).find((c) => c.getAttribute('data-query') === key);
    allChips.forEach((c) => c.classList.remove('is-active'));
    if (targetChip) targetChip.classList.add('is-active');

    const kb = typeof JARVIS_VOICE_KB !== 'undefined' ? JARVIS_VOICE_KB[key] : null;
    const query = kb ? kb.query : (targetChip ? targetChip.textContent.trim() : '');
    const response = kb ? kb.response : '';

    const queryEl = document.getElementById('jarvis-voice-query');
    const responseEl = document.getElementById('jarvis-voice-response');
    if (queryEl && query) queryEl.textContent = query;
    if (responseEl && response) responseEl.textContent = response;
  };

  function startInitialization() {
    const initializers = [
      { name: 'initStarkHeartLandingSequence', fn: initStarkHeartLandingSequence },
      { name: 'initMobileNavDrawer', fn: initMobileNavDrawer },
      { name: 'initStarkCursor', fn: initStarkCursor },
      { name: 'initInteractiveCards', fn: initInteractiveCards },
      { name: 'initStarkHeroEngine', fn: initStarkHeroEngine },
      { name: 'initAudioToggle', fn: initAudioToggle },
      { name: 'initAuthDossier', fn: initAuthDossier },
      { name: 'initCommandTable', fn: initCommandTable },
      { name: 'initMissionTimeline', fn: initMissionTimeline },
      { name: 'initLivingShadowMemoryVault', fn: initLivingShadowMemoryVault },
      { name: 'initBiometricBountyScanner', fn: initBiometricBountyScanner },
      { name: 'initMissionIdGenerator', fn: initMissionIdGenerator },
      { name: 'initLiquidGlassBackground', fn: initLiquidGlassBackground },
      { name: 'initAskJarvis', fn: initAskJarvis },
      { name: 'initConstellationEffect-ask-jarvis', fn: () => initConstellationEffect('scene-ask-jarvis', 'ask-jarvis-constellation-canvas') },
      { name: 'initConstellationEffect-coordinators', fn: () => initConstellationEffect('scene-coordinators', 'coordinators-constellation-canvas') },
      { name: 'initCountdown', fn: initCountdown },
      { name: 'initSceneObserver', fn: initSceneObserver }
    ];

    initializers.forEach((mod) => {
      try {
        if (typeof mod.fn === 'function') mod.fn();
      } catch (err) {
        console.warn(`[J.A.R.V.I.S.] Non-critical initialization warning in ${mod.name}:`, err);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startInitialization);
  } else {
    startInitialization();
  }

})();
