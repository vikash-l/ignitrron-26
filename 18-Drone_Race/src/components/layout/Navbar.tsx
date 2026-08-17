import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { eventData, navSections } from '../../data/event';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('race');

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
          ? 'bg-[#050607]/94 backdrop-blur-md border-b border-[#d6a84f]/25 py-3 shadow-xl shadow-black/60'
          : 'bg-[#050607]/50 backdrop-blur-sm border-b border-[#d6a84f]/15 py-4'
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
              className="w-8 h-8 rounded flex items-center justify-center font-display text-[#050607] text-lg font-bold transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #f2d58a 0%, #d6a84f 50%, #8c6a2d 100%)',
                boxShadow: '0 0 16px rgba(214, 168, 79, 0.45)',
              }}
            >
              {eventData.logoText}
            </div>
            <div>
              <div className="text-[#f3f3ef] font-display text-base tracking-wider uppercase leading-none group-hover:text-[#f2d58a] transition-colors">
                {eventData.name}
              </div>
              <div className="text-[#d6a84f] font-mono-tech text-[10px] tracking-widest uppercase mt-0.5">
                {eventData.festName}
              </div>
            </div>
          </div>

          {/* Primary Desktop Navigation: 5 Clean Items (01  RACE to 05  FAQ) */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 font-mono-tech text-xs uppercase tracking-wider transition-all rounded cursor-pointer ${
                    isActive 
                      ? 'text-[#f2d58a] bg-[#121b1e] border border-[#d6a84f]/40 font-semibold shadow-sm shadow-[#d6a84f]/10' 
                      : 'text-[#879296] hover:text-[#f3f3ef] hover:bg-[#0d1416]'
                  }`}
                >
                  <span className={`mr-2 font-bold ${isActive ? 'text-[#d6a84f]' : 'text-[#65757a]'}`}>{item.index}</span>
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
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded bg-gradient-to-r from-[#d6a84f] via-[#e8a63a] to-[#d6a84f] hover:from-[#f2d58a] hover:to-[#e8a63a] text-[#050607] font-mono-tech text-xs uppercase tracking-widest font-bold transition-all duration-200 shadow-md shadow-[#d6a84f]/25 hover:shadow-[#d6a84f]/45 cursor-pointer no-underline"
            >
              <span>REGISTER NOW ↗</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded text-[#879296] hover:text-[#f3f3ef] hover:bg-[#0d1416] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-5 w-5 text-[#f2d58a]" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#d6a84f]/20 bg-[#050607]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          <div className="space-y-1 py-1">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs font-mono-tech uppercase tracking-wider rounded transition-colors ${
                    isActive 
                      ? 'text-[#f2d58a] bg-[#121b1e] border border-[#d6a84f]/40 font-semibold' 
                      : 'text-[#879296] hover:text-[#f3f3ef] hover:bg-[#0d1416]'
                  }`}
                >
                  <span className="text-[#d6a84f] mr-2 font-bold">{item.index}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-[#d6a84f]/20">
            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded bg-gradient-to-r from-[#d6a84f] via-[#e8a63a] to-[#d6a84f] hover:from-[#f2d58a] hover:to-[#e8a63a] text-[#050607] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-[#d6a84f]/30 cursor-pointer no-underline"
            >
              <span>REGISTER NOW ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
