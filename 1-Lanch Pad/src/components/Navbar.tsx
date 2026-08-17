import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Zap } from 'lucide-react';
import { soundFx } from '../utils/soundFx';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFx.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundFx.playClick();
    }
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'CHALLENGE', href: '#challenge' },
    { name: 'PRIZES', href: '#prizes' },
    { name: 'CREW', href: '#crew' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Top-Left */}
        <a
          href="#"
          onClick={() => soundFx.playClick()}
          className="group flex items-center gap-3 text-decoration-none"
        >
          {/* Spider-web Node Emblem */}
          <div className="relative w-8 h-8 flex items-center justify-center bg-black border border-[#ff003c] rounded transform group-hover:rotate-45 transition-transform duration-300 shadow-[0_0_10px_#ff003c]">
            <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-ping absolute" />
            <span className="w-2 h-2 bg-[#00f0ff] rounded-full relative z-10" />
            {/* Spider web geometry line overlays */}
            <svg className="absolute inset-0 w-full h-full text-[#ff003c]/40 stroke-current" viewBox="0 0 32 32">
              <line x1="0" y1="0" x2="32" y2="32" strokeWidth="1" />
              <line x1="32" y1="0" x2="0" y2="32" strokeWidth="1" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-anton tracking-wider text-xl sm:text-2xl text-white group-hover:text-[#ff003c] transition-colors">
              LAUNCHPAD
            </span>
            <span className="font-space text-[9px] tracking-widest text-[#00f0ff] uppercase -mt-1 font-semibold">
              Design Club • Ignitrron
            </span>
          </div>
        </a>

        {/* Desktop Navigation Top-Right */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => soundFx.playClick()}
              className="relative font-bebas tracking-wider text-lg text-gray-300 hover:text-white transition-colors group py-1"
            >
              <span className="relative z-10">{link.name}</span>
              {/* Spider-web Node Hover Indicator */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff003c] group-hover:w-full transition-all duration-300 shadow-[0_0_6px_#ff003c]" />
              <span className="absolute -top-1 right-0 w-1.5 h-1.5 bg-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-[0_0_4px_#00f0ff]" />
            </a>
          ))}

          {/* Sound Synthesizer Audio Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? 'Enable Retro Audio SFX' : 'Mute Retro Audio SFX'}
            className="p-2 border border-white/20 rounded-full hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all text-gray-400 hover:shadow-[0_0_12px_#00f0ff]"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-gray-500" /> : <Volume2 className="w-4 h-4 text-[#00f0ff] animate-pulse" />}
          </button>

          {/* Header Action Button */}
          <button
            onClick={() => {
              soundFx.playWebShoot();
              onOpenRegister();
            }}
            className="relative group overflow-hidden px-5 py-2 font-bebas tracking-wider text-lg bg-[#ff003c] text-white rounded border border-[#ff003c] hover:border-[#00f0ff] shadow-spider-red transition-all duration-200 active:translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Zap className="w-4 h-4 fill-white group-hover:text-[#00f0ff] transition-colors" />
              JOIN CHALLENGE
            </span>
            <div className="absolute inset-0 bg-[#00f0ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-0 opacity-20" />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleSound}
            className="p-2 border border-white/20 rounded-full text-gray-400"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#00f0ff]" />}
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 text-white hover:text-[#ff003c] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-[#ff003c]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c]/95 border-b border-[#ff003c]/40 px-4 pt-4 pb-6 space-y-3 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="block font-bebas text-2xl tracking-wider text-gray-200 hover:text-[#ff003c] border-l-2 border-transparent hover:border-[#00f0ff] pl-3 py-1 transition-all"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              soundFx.playWebShoot();
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="w-full mt-4 py-3 font-bebas text-xl bg-[#ff003c] text-white rounded border border-[#ff003c] shadow-spider-red flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5 fill-white" />
            ENTER THE CHALLENGE
          </button>
        </div>
      )}
    </header>
  );
};
