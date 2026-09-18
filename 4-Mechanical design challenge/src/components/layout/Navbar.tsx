import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sparkles } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Event Flow', href: '#event-flow' },
    { label: 'Rules', href: '#rules' },
    { label: 'Software', href: '#software' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Why Join', href: '#why-participate' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06070c]/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Department Brand */}
          <a href="https://ignitrron-26.freelancerskpriet.workers.dev/" className="flex items-center gap-3 group no-underline">
            <div className="relative w-10 h-10 rounded-xl bg-black border border-[#ff0055] flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(255,0,85,0.5)] group-hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff0055]/30 to-[#00f0ff]/30 opacity-70" />
              <Cpu className="w-5 h-5 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#ff0055] to-[#00f0ff]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#ff0055] transition-colors glitch-hover">
                  CAD FORGE <span className="text-[#00f0ff]">2026</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-tech bg-[#ff0055]/20 text-[#ff0055] border border-[#ff0055]/40 uppercase tracking-widest font-bold">
                  {cadForgeData.event.festName}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono-tech tracking-tight hidden sm:block">
                {cadForgeData.event.department}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono-tech uppercase tracking-wider text-slate-300 hover:text-[#00f0ff] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff0055] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Glowing Register Now Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://www.theticket9.com/event/ignitrron-26"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-5 py-2 rounded-xl bg-gradient-to-r from-[#ff0055] to-[#e60049] text-white font-orbitron font-bold text-xs uppercase tracking-wider overflow-hidden shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.7)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
              <span>Register Now</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06070c]/98 border-b border-cyan-500/30 backdrop-blur-2xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            <div className="text-[11px] font-mono-tech text-[#00f0ff] pb-2 border-b border-white/10">
              {cadForgeData.event.department} • {cadForgeData.event.festName}
            </div>
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono-tech text-slate-200 hover:text-[#ff0055] transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#00f0ff] text-xs">→</span>
              </a>
            ))}
            <a
              href="https://www.theticket9.com/event/ignitrron-26"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-[#ff0055] to-[#00f0ff] text-white font-orbitron font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,0,85,0.4)]"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
