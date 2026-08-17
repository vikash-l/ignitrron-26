import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { eventData, navSections } from '../../data/event';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

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
          ? 'bg-[#08090C]/94 backdrop-blur-md border-b border-[#C9A45C]/25 py-3 shadow-xl shadow-black/70'
          : 'bg-[#08090C]/60 backdrop-blur-sm border-b border-[#C9A45C]/15 py-4'
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
              className="w-8 h-8 rounded flex items-center justify-center font-display text-white text-base font-bold transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #C63C32 0%, #243B63 100%)',
                border: '1px solid rgba(201, 164, 92, 0.45)',
                boxShadow: '0 0 16px rgba(198, 60, 50, 0.45)',
              }}
            >
              <span className="text-[#F1E8D5] text-xs font-mono-tech tracking-tighter">JS</span>
            </div>
            <div>
              <div className="text-[#F1E8D5] font-display text-base tracking-wider uppercase leading-none group-hover:text-[#C9A45C] transition-colors">
                {eventData.name}
              </div>
              <div className="text-[#C9A45C] font-mono-tech text-[10px] tracking-widest uppercase mt-0.5">
                {eventData.festName}
              </div>
            </div>
          </div>

          {/* Primary Desktop Navigation: 5 Clean Items (01 EXPERIENCE to 05 FAQ) */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 font-mono-tech text-xs uppercase tracking-wider transition-all rounded cursor-pointer ${
                    isActive 
                      ? 'text-[#F1E8D5] bg-[#243B63]/60 border border-[#C9A45C]/50 font-semibold shadow-sm shadow-[#C63C32]/20' 
                      : 'text-[#9B9A96] hover:text-[#F1E8D5] hover:bg-[#101827]'
                  }`}
                >
                  <span className={`mr-2 font-bold ${isActive ? 'text-[#C63C32]' : 'text-[#C9A45C]'}`}>{item.index}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={eventData.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#C63C32] hover:bg-[#A82B22] text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md shadow-[#C63C32]/30 hover:shadow-[#C63C32]/50 cursor-pointer no-underline border border-[#C9A45C]/30"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#C9A45C]" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded text-[#9B9A96] hover:text-[#F1E8D5] hover:bg-[#101827] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu — Exactly 5 items + CTA */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#C9A45C]/25 bg-[#08090C]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          <div className="space-y-1 py-1">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs font-mono-tech uppercase tracking-wider rounded transition-colors ${
                    isActive 
                      ? 'text-[#F1E8D5] bg-[#243B63]/60 border border-[#C9A45C]/40 font-semibold' 
                      : 'text-[#9B9A96] hover:text-[#F1E8D5] hover:bg-[#101827]'
                  }`}
                >
                  <span className="text-[#C63C32] mr-2 font-bold">{item.index}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-[#C9A45C]/20">
            <a
              href={eventData.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded bg-[#C63C32] hover:bg-[#A82B22] text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-[#C63C32]/30 cursor-pointer no-underline border border-[#C9A45C]/40"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-4 w-4 text-[#C9A45C]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
