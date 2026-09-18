import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { eventData, navSections } from '../../data/event';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);

      const scrollPos = window.scrollY + 140;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(navSections[i].id);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#25292E] py-2.5 shadow-2xl shadow-black'
          : 'bg-[#050505]/70 backdrop-blur-sm border-b border-[#25292E]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <div
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => scrollToSection('hero')}
          >
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center font-display text-[#E8E8E8] text-base font-bold transition-transform group-hover:scale-105 border border-[#A30F18]/50"
              style={{
                background: 'linear-gradient(135deg, #191C20 0%, #111316 100%)',
                boxShadow: '0 0 12px rgba(163, 15, 24, 0.25)',
              }}
            >
              {eventData.logoText}
            </div>
            <div>
              <div className="text-[#E8E8E8] font-display text-base tracking-wider uppercase leading-none group-hover:text-[#A30F18] transition-colors">
                {eventData.name}
              </div>
              <div className="text-[#A30F18] font-mono-tech text-[10px] tracking-widest uppercase mt-0.5 font-semibold">
                {eventData.festName}
              </div>
            </div>
          </div>

          {/* Primary Desktop Navigation: 5 Reference-Matched Items */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 font-mono-tech text-xs uppercase tracking-wider transition-all rounded-md cursor-pointer ${
                    isActive 
                      ? 'text-[#E8E8E8] bg-[#111316] border border-[#A30F18] font-bold shadow-[0_0_12px_rgba(163,15,24,0.25)]' 
                      : 'text-[#777D83] hover:text-[#E8E8E8] hover:bg-[#191C20]/50'
                  }`}
                >
                  <span className="mr-1.5 font-bold text-[#A30F18]">
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA: REGISTER NOW ↗ */}
          <div className="flex items-center gap-3">
            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#A30F18] hover:bg-[#D51F2A] text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-widest font-bold transition-all duration-200 glow-btn-red cursor-pointer no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#FFFFFF]" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded text-[#777D83] hover:text-[#E8E8E8] hover:bg-[#191C20]/60 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#25292E] bg-[#050505]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          <div className="space-y-1 py-1">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs font-mono-tech uppercase tracking-wider rounded transition-colors ${
                    isActive 
                      ? 'text-[#E8E8E8] bg-[#111316] border border-[#A30F18] font-semibold' 
                      : 'text-[#777D83] hover:text-[#E8E8E8] hover:bg-[#191C20]/50'
                  }`}
                >
                  <span className="text-[#A30F18] mr-2 font-bold">{item.index}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-[#25292E]">
            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-[#A30F18] hover:bg-[#D51F2A] text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 glow-btn-red cursor-pointer no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-4 w-4 text-[#FFFFFF]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};




