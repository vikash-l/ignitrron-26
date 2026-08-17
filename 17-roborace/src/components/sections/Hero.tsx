import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, Gauge, Trophy } from 'lucide-react';
import { eventData } from '../../data/event';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Restrained horizontal ambient particles (speed feeling)
  const ambientParticles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 88 + 4}%`,
    width: `${Math.random() * 1.8 + 0.8}px`,
    height: `${Math.random() * 1.8 + 0.8}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 9 + 8}s`,
    opacity: Math.random() * 0.18 + 0.06,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent">
      
      {/* 4. Horizontal Ambient Particles (Slow drifting) */}
      {ambientParticles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-slate-350 pointer-events-none animate-horizontal-particle"
          style={{
            top: p.top,
            width: p.width,
            height: p.height,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
            left: '-10px',
            willChange: 'transform',
          }}
        />
      ))}

      {/* 5. Faint silver light streaks */}
      <div className="speed-streak-subtle top-[18%]" style={{ animationDelay: '0.2s' }} />
      <div className="speed-streak-subtle-fast top-[38%] right-24" style={{ animationDelay: '1.5s' }} />
      <div className="speed-streak-subtle top-[62%] left-12" style={{ animationDelay: '0.8s' }} />
      <div className="speed-streak-subtle-fast top-[82%]" style={{ animationDelay: '2.5s' }} />

      {/* 6. Faint perspective racing track disappearing into the distance */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 pointer-events-none opacity-[0.06] hidden md:block z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lane-silver-grad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lane-under-glow" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Surface */}
          <polygon points="120,100 460,0 540,0 880,100" fill="url(#lane-under-glow)" />
          {/* Borders */}
          <line x1="120" y1="100" x2="460" y2="0" stroke="url(#lane-silver-grad)" strokeWidth="1.5" />
          <line x1="880" y1="100" x2="540" y2="0" stroke="url(#lane-silver-grad)" strokeWidth="1.5" />
          {/* Chevrons on side */}
          <line x1="160" y1="88" x2="190" y2="88" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
          <line x1="210" y1="72" x2="235" y2="72" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
          <line x1="840" y1="88" x2="810" y2="88" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
          <line x1="790" y1="72" x2="765" y2="72" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
          {/* Center lane */}
          <line x1="500" y1="100" x2="500" y2="0" stroke="url(#lane-silver-grad)" strokeWidth="1" strokeDasharray="8 12" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content (Kept darker so title is highly readable) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              {/* Event Category Badge */}
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest text-slate-100 bg-zinc-900 border border-zinc-800 mb-6 font-mono">
                <Gauge className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
                {eventData.category}
              </span>
              
              {/* Event Name */}
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-2 leading-none font-display uppercase">
                <span className="text-chrome">ROBO RACE’26</span>
              </h1>
              
              {/* Theme Name */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase font-mono">// THEME:</span>
                <span className="text-xl sm:text-2xl font-black text-sky-400 tracking-wider uppercase font-display italic text-glow-icy flex items-center">
                  QUICKSILVER <span className="ml-1 text-slate-200">⚡</span>
                </span>
              </div>

              {/* Tagline */}
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-6 tracking-wide font-display italic uppercase">
                {eventData.tagline}
              </p>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {eventData.description}
              </p>

              {/* Event Metadata */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10 font-mono">
                {eventData.date && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900/80 border border-zinc-800 text-slate-350">
                    <Calendar className="h-3.5 w-3.5 text-sky-400" />
                    <span className="text-xs font-bold tracking-wider">{eventData.date}</span>
                  </div>
                )}
                {eventData.time && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900/80 border border-zinc-800 text-slate-350">
                    <Clock className="h-3.5 w-3.5 text-sky-400" />
                    <span className="text-xs font-bold tracking-wider">{eventData.time}</span>
                  </div>
                )}
                {eventData.venue && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900/80 border border-zinc-800 text-slate-350">
                    <MapPin className="h-3.5 w-3.5 text-sky-400" />
                    <span className="text-xs font-bold tracking-wider uppercase">{eventData.venue}</span>
                  </div>
                )}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900/80 border border-zinc-800 text-sky-450 border-sky-950 bg-sky-950/5">
                  <Trophy className="h-3.5 w-3.5 text-sky-450" />
                  <span className="text-xs font-bold tracking-wider">₹30,000 PRIZES</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-bold"
                  icon={<ArrowRight className="h-3.5 w-3.5" />}
                  onClick={() => handleScrollTo('registration')}
                >
                  ENTER THE RACE
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => handleScrollTo('rounds')}
                >
                  VIEW ROUNDS
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column - Quicksilver (PietroMaximoff) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Elegant silver speed trails directly behind the character card */}
            <div className="absolute -inset-10 bg-radial-gradient from-white/[0.04] to-transparent blur-3xl pointer-events-none z-0" />
            <div className="absolute top-[22%] left-[-20%] right-[-10%] h-[1px] bg-gradient-to-r from-transparent via-slate-400/25 to-transparent pointer-events-none z-0" />
            <div className="absolute top-[48%] left-[-10%] right-[-30%] h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/15 to-transparent pointer-events-none z-0" />
            <div className="absolute top-[75%] left-[-35%] right-[-20%] h-[1px] bg-gradient-to-r from-transparent via-slate-350/20 to-transparent pointer-events-none z-0" />
            
            <div className="absolute top-[-10%] bottom-[-10%] left-[20%] w-[1px] bg-gradient-to-b from-transparent via-slate-200/5 to-transparent skew-x-12 pointer-events-none z-0" />
            <div className="absolute top-[-10%] bottom-[-10%] left-[75%] w-[1.5px] bg-gradient-to-b from-transparent via-sky-400/5 to-transparent skew-x-12 pointer-events-none z-0" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-lg border border-zinc-850 bg-[#0d0e12]/60 backdrop-blur-md overflow-hidden shadow-2xl flex items-center justify-center group z-10"
            >
              {/* Chrome/Icy reflection glows */}
              <div className="absolute inset-0 bg-radial-gradient from-sky-500/15 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              
              {/* HUD dashboard layout borders */}
              <div className="absolute inset-3 border border-dashed border-zinc-800 pointer-events-none z-10" />
              <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-sky-400 z-10 pointer-events-none" />
              <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-slate-350 z-10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-slate-350 z-10 pointer-events-none" />
              <div className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-sky-400 z-10 pointer-events-none" />

              {/* Specific Quicksilver Image */}
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRX_uE1hyQ7YBfKgDgxStUfKq5Q4lCusfEGLdjndE39Q&s=10" 
                alt="Quicksilver Theme Character" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] z-0 filter contrast-[1.05] brightness-90"
              />

              {/* Racing telemetry / HUD overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 p-3.5 rounded border border-zinc-850 bg-zinc-950/85 backdrop-blur-md text-left font-mono">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sky-400 text-[9px] font-bold tracking-widest uppercase">
                    // VELOCITY INDICATOR
                  </span>
                  <span className="text-slate-400 text-[8px] font-medium tracking-wide">
                    MACH 4.6
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-white text-xs font-black tracking-widest font-display">
                    PIETRO MAXIMOFF
                  </span>
                  <div className="flex gap-0.5">
                    <div className="w-1 h-3 bg-sky-500" />
                    <div className="w-1 h-3 bg-sky-500" />
                    <div className="w-1 h-3 bg-sky-500" />
                    <div className="w-1 h-3 bg-sky-500" />
                    <div className="w-1 h-3 bg-zinc-800" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
