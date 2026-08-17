import React, { useState, useEffect } from 'react';
import { comingSoonData } from '../../data/event';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const el = document.getElementById('next-chapter');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050807]/90 backdrop-blur-md border-b border-[#16A36A]/30 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent backdrop-blur-sm border-b border-[#16A36A]/15 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <div
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={scrollToTop}
          >
            {/* Mystic Emblem */}
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center font-display text-white text-base font-bold transition-transform group-hover:scale-105 border border-[#35E6A1]/40"
              style={{
                background: 'linear-gradient(135deg, #0A1512 0%, #16A36A 100%)',
                boxShadow: '0 0 16px rgba(22, 163, 106, 0.45)',
              }}
            >
              <span className="text-[#7CFFCB]">26</span>
            </div>
            <div>
              <div className="text-[#F1F5F2] font-display text-lg tracking-widest uppercase leading-none group-hover:text-[#35E6A1] transition-colors">
                {comingSoonData.festName}
              </div>
              <div className="text-[#82958C] font-mono-tech text-[9px] tracking-[0.22em] uppercase mt-0.5">
                OFFICIAL PORTAL
              </div>
            </div>
          </div>

          {/* Center Minimal Indicator */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={scrollToNext}
              className="text-[#82958C] hover:text-[#7CFFCB] font-mono-tech text-xs tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className="w-1 h-1 rounded-full bg-[#16A36A]" />
              <span>THE NEXT CHAPTER</span>
            </button>
          </div>

          {/* Right Status Indicator */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08110E]/90 border border-[#16A36A]/40 text-[#7CFFCB] font-mono-tech text-[10px] sm:text-xs uppercase tracking-widest shadow-sm shadow-[#16A36A]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35E6A1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35E6A1]"></span>
              </span>
              <span className="font-semibold text-[#F1F5F2]">{comingSoonData.status}</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
