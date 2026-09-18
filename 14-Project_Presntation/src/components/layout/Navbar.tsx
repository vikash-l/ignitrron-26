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
          ? 'bg-[#02040a]/92 backdrop-blur-md border-b border-blue-900/35 py-3 shadow-xl shadow-black/50'
          : 'bg-[#02040a]/50 backdrop-blur-sm border-b border-blue-900/20 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a
            href="https://ignitrron-26.freelancerskpriet.workers.dev/"
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0 no-underline"
          >
            <div 
              className="w-8 h-8 rounded flex items-center justify-center font-display text-white text-lg font-bold transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
                boxShadow: '0 0 16px rgba(37, 99, 235, 0.45)',
              }}
            >
              {eventData.logoText}
            </div>
            <div>
              <div className="text-white font-display text-base tracking-wider uppercase leading-none group-hover:text-blue-300 transition-colors">
                {eventData.name}
              </div>
              <div className="text-cyan-400 font-mono-tech text-[10px] tracking-widest uppercase mt-0.5">
                {eventData.festName}
              </div>
            </div>
          </a>

          {/* Primary Desktop Navigation: 5 Clean Items (01 ABOUT to 05 FAQ) */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 font-mono-tech text-xs uppercase tracking-wider transition-all rounded cursor-pointer ${
                    isActive 
                      ? 'text-cyan-300 bg-blue-900/30 border border-cyan-500/35 font-semibold shadow-sm shadow-cyan-500/10' 
                      : 'text-slate-300 hover:text-white hover:bg-blue-900/20'
                  }`}
                >
                  <span className={`mr-2 font-bold ${isActive ? 'text-cyan-400' : 'text-blue-400'}`}>{item.index}</span>
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
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 cursor-pointer no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-cyan-200" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded text-slate-400 hover:text-white hover:bg-blue-900/20 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu — Exactly 5 items + CTA */}
      {mobileOpen && (
        <div className="md:hidden border-t border-blue-900/30 bg-[#02040a]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          <div className="space-y-1 py-1">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs font-mono-tech uppercase tracking-wider rounded transition-colors ${
                    isActive 
                      ? 'text-cyan-300 bg-blue-900/30 border border-cyan-500/35 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-blue-900/20'
                  }`}
                >
                  <span className="text-blue-400 mr-2 font-bold">{item.index}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-blue-900/20">
            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30 cursor-pointer no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-4 w-4 text-cyan-200" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
