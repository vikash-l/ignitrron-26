import React from 'react';
import { Cpu, ArrowUp } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040508] border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      {/* Spider-Verse background glow strip */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff0055] via-[#9d4edd] via-[#00f0ff] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-black border border-[#ff0055] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,0,85,0.4)]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-orbitron font-extrabold text-xl text-white tracking-wider">
                CAD FORGE <span className="text-[#00f0ff]">2026</span>
              </span>
            </div>

            <p className="font-orbitron font-bold text-sm text-[#ff0055] uppercase tracking-wider mb-1">
              {cadForgeData.event.festName}
            </p>
            <p className="font-mono-tech text-xs text-slate-400">
              {cadForgeData.event.department}
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 font-mono-tech text-xs uppercase tracking-wider text-slate-400">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#event-flow" className="hover:text-cyan-400 transition-colors">Event Flow</a>
            <a href="#rules" className="hover:text-cyan-400 transition-colors">Rules</a>
            <a href="#software" className="hover:text-cyan-400 transition-colors">Software</a>
            <a href="#why-participate" className="hover:text-cyan-400 transition-colors">Why Join</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 transition-all hover:scale-105 active:scale-95 group flex items-center gap-2 font-mono-tech text-xs cursor-pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-400 text-center sm:text-left">
          <div>
            &ldquo;{cadForgeData.event.tagline}&rdquo; • {cadForgeData.event.festName}
          </div>
          <div className="text-slate-400">
            {cadForgeData.event.department} | CAD Forge 2026
          </div>
        </div>

      </div>
    </footer>
  );
};
