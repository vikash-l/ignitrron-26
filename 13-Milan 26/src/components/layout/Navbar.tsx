import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight, Activity } from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        'hero',
        'about',
        'why-milan',
        'offerings',
        'collaborative-innovation',
        'future-ready',
        'manifesto',
      ];

      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Why MILAN', href: '#why-milan', id: 'why-milan' },
    { label: 'Offerings', href: '#offerings', id: 'offerings' },
    { label: 'Collaboration', href: '#collaborative-innovation', id: 'collaborative-innovation' },
    { label: 'Generation', href: '#future-ready', id: 'future-ready' },
    { label: 'Possibilities', href: '#manifesto', id: 'manifesto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040D1A]/90 backdrop-blur-xl border-b border-slate-700/40 shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
          : 'bg-gradient-to-b from-[#040D1A]/80 to-transparent backdrop-blur-sm'
      }`}
    >
      {/* Top Telemetry Bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1 bg-[#020610]/80 border-b border-blue-900/30 text-[11px] font-mono text-slate-400">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-blue-400">
            <Activity className="w-3 h-3 mr-1 text-blue-400 animate-pulse" />
            S.H.I.E.L.D. COMMAND CONCLAVE PROTOCOL // MILAN-2026
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">SECTOR: INDUSTRY–ACADEMIA NEXUS</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] tracking-wider">
            STATUS: ACTIVE CONCLAVE
          </span>
          <span className="text-slate-400">{MILAN_DATA.event.host}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo / Brand Mark */}
          <a href="#hero" className="flex items-center space-x-3 group">
            {/* Captain America Shield / S.H.I.E.L.D. Icon Emblem */}
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center p-[2px] bg-gradient-to-tr from-red-600 via-slate-300 to-blue-600 shadow-[0_0_15px_rgba(29,78,216,0.5)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-[#0A2342] flex items-center justify-center border border-slate-400/40">
                <Shield className="w-5 h-5 text-blue-400 fill-blue-500/20 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-orbitron font-extrabold text-xl tracking-wider text-white group-hover:text-blue-300 transition-colors">
                  MILAN <span className="text-red-500 font-bold">'26</span>
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest text-slate-300 bg-blue-900/60 border border-blue-500/40 px-1.5 py-0.5 rounded">
                  SUMMIT
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 tracking-tight line-clamp-1 max-w-[260px] sm:max-w-xs">
                Skilling Through Collaborative Innovation
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-md ${
                    isActive
                      ? 'text-white bg-blue-900/40 border border-blue-500/50 shadow-[0_0_12px_rgba(29,78,216,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-red-500 shadow-[0_0_8px_#DC2626]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#about"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase font-orbitron text-white rounded-md overflow-hidden group bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 border border-blue-400/40 shadow-[0_0_20px_rgba(29,78,216,0.4)] hover:shadow-[0_0_30px_rgba(29,78,216,0.7)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Explore Conclave
                <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-blue-500/30 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#040D1A]/95 backdrop-blur-2xl border-b border-slate-700/60 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="py-2 px-3 mb-2 rounded bg-blue-950/40 border border-blue-500/20 text-[11px] font-mono text-blue-300 flex items-center justify-between">
            <span>S.H.I.E.L.D. SUMMIT INTERFACE</span>
            <span className="text-red-400 font-bold">MILAN '26</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase text-slate-200 hover:text-white hover:bg-blue-900/30 border border-transparent hover:border-blue-500/30 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-bold tracking-wider uppercase font-orbitron text-white rounded-lg bg-gradient-to-r from-blue-700 to-red-600 border border-blue-400/40 shadow-lg"
            >
              Explore Conclave
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
