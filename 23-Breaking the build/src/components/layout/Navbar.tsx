import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { eventData, navSections } from '../../data/event';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('session');

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
          ? 'bg-[#070506]/92 backdrop-blur-md border-b border-[#7F1D1D]/35 py-3 shadow-xl shadow-black/60'
          : 'bg-[#030304]/60 backdrop-blur-sm border-b border-[#7F1D1D]/20 py-4'
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
                background: 'linear-gradient(135deg, #B42318 0%, #F97316 100%)',
                boxShadow: '0 0 16px rgba(180, 35, 24, 0.45)',
              }}
            >
              {eventData.logoText}
            </div>
            <div>
              <div className="text-[#F5F1ED] font-display text-base tracking-wider uppercase leading-none group-hover:text-[#F97316] transition-colors">
                {eventData.name}
              </div>
              <div className="text-[#F97316] font-mono-tech text-[10px] tracking-widest uppercase mt-0.5">
                {eventData.festName}
              </div>
            </div>
          </div>

          {/* Primary Desktop Navigation: Exactly 5 Clean Items (01 SESSION to 05 FAQ) */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 font-mono-tech text-xs uppercase tracking-wider transition-all rounded cursor-pointer ${
                    isActive 
                      ? 'text-[#F5F1ED] bg-[#24100D]/80 border border-[#B42318]/60 font-semibold shadow-sm shadow-[#B42318]/20' 
                      : 'text-[#A8A09A] hover:text-[#F5F1ED] hover:bg-[#24100D]/40'
                  }`}
                >
                  <span className={`mr-1.5 font-bold ${isActive ? 'text-[#F97316]' : 'text-[#B42318]'}`}>{item.index}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#B42318] hover:bg-[#EF4444] text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md shadow-[#B42318]/30 hover:shadow-[#EF4444]/40 cursor-pointer no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#F59E0B]" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded text-[#A8A09A] hover:text-[#F5F1ED] hover:bg-[#24100D]/40 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu — Exactly 5 items + CTA */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#7F1D1D]/30 bg-[#070506]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          <div className="space-y-1 py-1">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs font-mono-tech uppercase tracking-wider rounded transition-colors ${
                    isActive 
                      ? 'text-[#F5F1ED] bg-[#24100D]/80 border border-[#B42318]/60 font-semibold' 
                      : 'text-[#A8A09A] hover:text-[#F5F1ED] hover:bg-[#24100D]/30'
                  }`}
                >
                  <span className="text-[#F97316] mr-2 font-bold">{item.index}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-[#7F1D1D]/20">
            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded bg-[#B42318] hover:bg-[#EF4444] text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-[#B42318]/30 cursor-pointer no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-4 w-4 text-[#F59E0B]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
