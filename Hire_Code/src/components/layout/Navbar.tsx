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
          ? 'bg-[#05070A]/92 backdrop-blur-md border-b border-[#00BFA6]/30 py-3 shadow-xl shadow-black/70'
          : 'bg-[#05070A]/60 backdrop-blur-sm border-b border-[#00BFA6]/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <div
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => scrollToSection('overview')}
          >
            <div 
              className="w-8 h-8 rounded flex items-center justify-center font-display text-[#05070A] text-base font-bold transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #00BFA6 0%, #22D3EE 100%)',
                boxShadow: '0 0 16px rgba(0, 191, 166, 0.45)',
              }}
            >
              {eventData.logoText}
            </div>
            <div>
              <div className="text-[#E8EEF2] font-display text-base tracking-wider uppercase leading-none group-hover:text-[#22D3EE] transition-colors">
                {eventData.name}
              </div>
              <div className="text-[#00BFA6] font-mono-tech text-[10px] tracking-widest uppercase mt-0.5">
                {eventData.festName}
              </div>
            </div>
          </div>

          {/* Primary Desktop Navigation: Exactly 5 Clean Items (01 OVERVIEW to 05 FAQ) */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 font-mono-tech text-xs uppercase tracking-wider transition-all rounded cursor-pointer ${
                    isActive 
                      ? 'text-[#E8EEF2] bg-[#0B1720]/90 border border-[#00BFA6]/60 font-semibold shadow-sm shadow-[#00BFA6]/20' 
                      : 'text-[#8997A3] hover:text-[#E8EEF2] hover:bg-[#08131C]/60'
                  }`}
                >
                  <span className={`mr-1.5 font-bold ${isActive ? 'text-[#22D3EE]' : 'text-[#00BFA6]'}`}>{item.index}</span>
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
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#00BFA6] hover:bg-[#22D3EE] text-[#05070A] font-mono-tech text-xs uppercase tracking-widest font-bold transition-all duration-200 shadow-md shadow-[#00BFA6]/30 hover:shadow-[#22D3EE]/40 cursor-pointer no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#05070A]" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded text-[#8997A3] hover:text-[#E8EEF2] hover:bg-[#0B1720]/60 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu — Exactly 5 items + CTA */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#00BFA6]/20 bg-[#05070A]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          <div className="space-y-1 py-1">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs font-mono-tech uppercase tracking-wider rounded transition-colors ${
                    isActive 
                      ? 'text-[#E8EEF2] bg-[#0B1720]/90 border border-[#00BFA6]/60 font-semibold' 
                      : 'text-[#8997A3] hover:text-[#E8EEF2] hover:bg-[#08131C]/40'
                  }`}
                >
                  <span className="text-[#00BFA6] mr-2 font-bold">{item.index}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-[#00BFA6]/20">
            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded bg-[#00BFA6] hover:bg-[#22D3EE] text-[#05070A] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-[#00BFA6]/30 cursor-pointer no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-4 w-4 text-[#05070A]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

