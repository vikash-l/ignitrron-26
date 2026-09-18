import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Cpu, Terminal, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const quotes = eventData.character.quotes;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  const handleNextQuote = () => {
    sound.playClick();
    setActiveQuoteIdx(prev => (prev + 1) % quotes.length);
  };

  return (
    <section 
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Grids */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />
      
      {/* Glow Spheres */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/15 rounded-full filter blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-violet-600/20 rounded-full filter blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-cyan-400" />
              <span>{eventData.category}</span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl xl:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                TECHNO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-glow-cyan">
                  CLASH
                </span>
              </h1>
              <p className="font-mono text-sm sm:text-base font-bold text-cyan-400 tracking-widest mt-3">
                MULTI-ROUND TECHNICAL QUIZ
              </p>
            </div>

            {/* Tagline */}
            <blockquote className="border-l-2 border-cyan-400 pl-4 py-1 text-slate-300 font-mono text-sm sm:text-base italic leading-relaxed">
              "THINK FAST. SOLVE FASTER. CLASH WITH TECHNOLOGY."
            </blockquote>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl font-sans">
              {eventData.description}
            </p>

            {/* Animated Official Competition Flow Bar */}
            <div className="bg-[#080d24]/90 border border-cyan-500/30 p-4 rounded-2xl backdrop-blur-md shadow-lg font-mono text-[11px] text-cyan-300">
              <div className="text-[10px] text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> OFFICIAL COMPETITION FLOW
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-slate-900 px-2.5 py-1 rounded border border-cyan-500/30">ONLINE PRELIMS</span>
                <span className="text-cyan-400 font-bold">→</span>
                <span className="bg-cyan-950/60 text-cyan-300 px-2.5 py-1 rounded border border-cyan-400/50 font-bold">TOP 25</span>
                <span className="text-cyan-400 font-bold">→</span>
                <span className="bg-slate-900 px-2.5 py-1 rounded border border-violet-500/30">PUZZLE & CODE</span>
                <span className="text-cyan-400 font-bold">→</span>
                <span className="bg-violet-950/60 text-violet-300 px-2.5 py-1 rounded border border-violet-400/50 font-bold">TOP 10</span>
                <span className="text-cyan-400 font-bold">→</span>
                <span className="bg-amber-950/60 text-amber-300 px-2.5 py-1 rounded border border-amber-400/50 font-bold flex items-center gap-1">
                  FINAL BOSS 👑
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.theticket9.com/event/ignitrron-26"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="group relative px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-mono font-black text-sm shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all transform hover:scale-105 flex items-center gap-3 no-underline"
              >
                <span className="text-white">REGISTER NOW</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition" />
              </a>

              <button
                onClick={() => {
                  sound.playClick();
                  document.getElementById('prelims')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-6 py-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-mono font-bold text-sm shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:bg-slate-800 transition flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-cyan-400" /> EXPLORE PRELIMS
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* TECHNO CORE */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full max-w-[480px] h-[480px] opacity-70 animate-spin-slow" viewBox="0 0 500 500">
                <circle cx="250" cy="250" r="230" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeDasharray="12 8" />
                <circle cx="250" cy="250" r="180" stroke="#7000FF" strokeWidth="2" fill="none" strokeDasharray="40 15" className="animate-spin-reverse" />
                <circle cx="250" cy="250" r="130" stroke="#00F0FF" strokeWidth="1" fill="none" strokeDasharray="6 4" />
                <line x1="250" y1="20" x2="250" y2="480" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="1" />
                <line x1="20" y1="250" x2="480" y2="250" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="1" />
              </svg>

              <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-500/30 to-violet-600/40 animate-pulse-core filter blur-md" />
            </div>

            {/* Character Image Box */}
            <motion.div 
              style={{ x: mousePos.x, y: mousePos.y }}
              className="relative z-20 w-full max-w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_60px_rgba(0,240,255,0.35)] glass-hud group"
            >
              <img 
                src={eventData.character.avatar} 
                alt="NEXA - Digital Guide"
                className="w-full h-full object-cover animate-float filter contrast-[1.08]"
              />

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-speed-lines" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-cyan-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/40">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  NEXA // DIGITAL GUIDE
                </span>
                <span>COMPETITION GRID</span>
              </div>

              {/* Character Speech Bubble */}
              <div 
                onClick={handleNextQuote}
                onMouseEnter={() => sound.playHover()}
                className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-xl border border-cyan-400/80 p-3.5 rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.3)] cursor-pointer hover:border-cyan-300 transition group/dialogue"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1">
                  <span className="flex items-center gap-1 font-bold">
                    <MessageSquareQuote className="w-3.5 h-3.5" /> DIGITAL GUIDE DIALOGUE
                  </span>
                  <span className="text-slate-400 text-[9px] group-hover/dialogue:text-cyan-300">Click to cycle</span>
                </div>
                <p className="text-xs font-mono text-white font-bold leading-snug">
                  "{quotes[activeQuoteIdx]}"
                </p>
              </div>

              <div className="absolute top-20 -left-6 hidden sm:flex bg-slate-900/90 border border-violet-500/50 p-2.5 rounded-xl font-mono text-[10px] text-violet-300 shadow-lg backdrop-blur-md items-center gap-2 animate-bounce">
                <Cpu className="w-4 h-4 text-violet-400" />
                <span>TOP 25 QUALIFIERS</span>
              </div>

              <div className="absolute top-36 -right-6 hidden sm:flex bg-slate-900/90 border border-amber-500/50 p-2.5 rounded-xl font-mono text-[10px] text-amber-300 shadow-lg backdrop-blur-md items-center gap-2 animate-pulse">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>TOP 10 FINAL BOSS</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
