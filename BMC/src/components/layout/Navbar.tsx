import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  ArrowRight
} from 'lucide-react';
import { playUiSound, toggleSound } from '../../utils/soundEffects';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About BMC', href: '#about' },
    { name: 'Format', href: '#format' },
    { name: 'What to Present', href: '#pillars' },
    { name: 'Strategy Canvas', href: '#canvas' },
    { name: 'Why Participate', href: '#why-participate' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
    if (nextState) playUiSound('select');
  };

  const handleNavClick = (href: string) => {
    playUiSound('click');
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050816]/85 backdrop-blur-xl border-b border-[#00ff88]/20 shadow-xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Corporate Branding */}
          <a href="https://ignitrron-26.freelancerskpriet.workers.dev/" className="flex items-center gap-3 group no-underline"
          >
            {/* Oscorp Innovation Hex Emblem */}
            <div className="relative w-10 h-10 rounded-xl bg-[#0b0f14] border border-[#00ff88]/50 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#00ff88]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 to-transparent pointer-events-none" />
              <svg className="w-6 h-6 text-[#00ff88]" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#00ff88" strokeWidth="8" />
                <path d="M35 40 L50 28 L65 40 L65 60 L50 72 L35 60 Z" fill="#00ff88" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-orbitron font-extrabold tracking-wider text-base text-white group-hover:text-[#00ff88] transition-colors">
                  IGNITRRON'26
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/40 rounded">
                  BMC
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#cbd5e1]/70">
                Business Model Canvas
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                onMouseEnter={() => playUiSound('hover')}
                className="px-3 py-1.5 text-xs font-semibold tracking-wide text-[#cbd5e1] hover:text-[#00ff88] rounded-lg transition-colors hover:bg-white/[0.03]"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-lg bg-[#0b0f14] border border-[#cbd5e1]/20 text-[#cbd5e1] hover:text-[#00ff88] hover:border-[#00ff88]/40 transition-colors"
              title={soundOn ? "Mute interactive audio" : "Enable interactive audio"}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Register CTA Button */}
            <a
              href="https://www.theticket9.com/event/ignitrron-26"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playUiSound('hover')}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#00ff88] text-[#050816] font-bold text-xs uppercase tracking-wider hover:bg-[#00c96b] transition-all shadow-lg shadow-[#00ff88]/25 hover:shadow-[#00ff88]/40 transform hover:-translate-y-0.5 no-underline"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                playUiSound('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-[#0b0f14] border border-[#cbd5e1]/20 text-[#cbd5e1] hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050816]/98 backdrop-blur-2xl border-b border-[#00ff88]/20 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-sm font-medium text-[#cbd5e1] hover:text-[#00ff88] hover:bg-[#00ff88]/5 rounded-lg transition-colors border-b border-white/[0.04]"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://www.theticket9.com/event/ignitrron-26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00ff88] text-[#050816] font-bold text-sm tracking-wide shadow-md shadow-[#00ff88]/30 no-underline"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
