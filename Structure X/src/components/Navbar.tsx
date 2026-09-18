import React, { useState, useEffect } from 'react';
import { Layers, Menu, X } from 'lucide-react';

interface NavbarProps {
  blueprintMode: boolean;
  setBlueprintMode: (active: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  blueprintMode,
  setBlueprintMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'CHALLENGE', href: '#challenge' },
    { name: 'STRUCTURES', href: '#world-of-structures' },
    { name: 'ANALYSIS', href: '#tower-cutaway' },
    { name: 'TIMELINE', href: '#construction-flow' },
    { name: 'PRESENTATION', href: '#presentation-guide' },
    { name: 'EVALUATION', href: '#evaluation' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05080d]/90 backdrop-blur-xl border-b border-[#00d9ff]/20 shadow-2xl py-3'
          : 'bg-[#05080d]/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between">
          {/* Magneto-Inspired Profile Branding Badge (Top Left) */}
          <a href="https://ignitrron-26.freelancerskpriet.workers.dev/" className="flex items-center gap-3 group"
            title="CONTROL THE FORCE. COMMAND THE STRUCTURE."
          >
            {/* Uploaded Magneto Profile Character Image */}
            <div className="w-11 h-11 rounded-lg bg-[#0e111a] border border-[#e11d48]/40 group-hover:border-[#e11d48] transition-all shadow-[0_0_20px_rgba(225,29,72,0.35)] overflow-hidden flex items-center justify-center relative">
              <img
                src="assets/magneto_profile.jpg"
                alt="Magneto Character Profile"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Branding Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base font-black tracking-wider text-white font-mono uppercase group-hover:text-[#e11d48] transition-colors">
                  MAGNETO
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#e11d48]/20 text-[#e11d48] border border-[#e11d48]/40 font-bold">
                  2026
                </span>
              </div>
              <span className="text-[9px] text-gray-400 tracking-widest font-mono uppercase">
                MASTER OF MAGNETISM
              </span>
            </div>
          </a>

          {/* Center Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono tracking-wider text-gray-300 hover:text-[#00d9ff] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00d9ff] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side: Blueprint Mode & Register Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setBlueprintMode(!blueprintMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                blueprintMode
                  ? 'bg-[#00d9ff]/20 text-[#00d9ff] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.5)] font-bold'
                  : 'bg-[#07111b] text-gray-300 border-[#1b2538] hover:border-[#00d9ff]/50 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4 text-[#00d9ff]" />
              <span>{blueprintMode ? 'BLUEPRINT ON' : 'BLUEPRINT MODE'}</span>
            </button>

            <a
              href="https://www.theticket9.com/event/ignitrron-26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-[#00d9ff] to-[#3b82f6] hover:from-[#00b3d6] hover:to-[#2563eb] border border-cyan-400/40 shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all cursor-pointer no-underline"
            >
              <span>REGISTER NOW</span>
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setBlueprintMode(!blueprintMode)}
              className={`p-2 rounded border text-xs ${
                blueprintMode
                  ? 'bg-[#00d9ff]/20 text-[#00d9ff] border-[#00d9ff]'
                  : 'bg-[#07111b] text-gray-300 border-[#1b2538]'
              }`}
            >
              <Layers className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05080d]/95 backdrop-blur-xl border-b border-[#1b2538] px-6 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-gray-300 hover:text-[#00d9ff] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1b2538]">
            <button
              onClick={() => {
                setBlueprintMode(!blueprintMode);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono bg-[#07111b] text-[#00d9ff] border border-[#00d9ff]/40"
            >
              <Layers className="w-4 h-4" />
              {blueprintMode ? 'EXIT BLUEPRINT MODE' : 'ACTIVATE BLUEPRINT MODE'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
