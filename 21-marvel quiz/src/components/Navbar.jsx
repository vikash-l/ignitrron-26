import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Compass, ExternalLink, Sparkles } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EVENT', href: '#overview' },
    { name: 'ROUNDS', href: '#rounds' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'RULES', href: '#rules' },
    { name: 'PRIZES', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 lg:px-8 pt-4 pb-2 pointer-events-none">
      <nav
        className={`max-w-7xl mx-auto pointer-events-auto rounded-2xl transition-colors duration-300 relative z-[100] flex items-center justify-between ${
          isScrolled
            ? 'glass-panel bg-[#07100B]/90 py-3 px-6 shadow-emerald-glow border-[#38E39A]/20'
            : 'bg-transparent py-4 px-6 border border-transparent'
        }`}
      >
        {/* Left: Logo with Compact Circular Loki Avatar */}
        <a href="https://ignitrron-26.freelancerskpriet.workers.dev/"
          onClick={() => sounds.playClick()}
          className="flex items-center gap-3 group cursor-pointer pointer-events-auto z-[110] relative shrink-0"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#38E39A]/60 group-hover:border-[#38E39A] shadow-[0_0_10px_rgba(56,227,154,0.3)] group-hover:shadow-[0_0_18px_rgba(56,227,154,0.6)] transition-colors duration-200 overflow-hidden bg-[#07100B] shrink-0">
            <img
              src="/marvel-quiz/loki_avatar.png"
              alt="Loki Avatar Shadow"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-40 transition-opacity duration-200 translate-x-[2px] translate-y-[2px] filter blur-[0.5px]"
            />
            <img
              src="/marvel-quiz/loki_avatar.png"
              alt="Loki - God of Mischief"
              className="relative z-10 w-full h-full object-cover object-center transition-transform duration-200"
            />
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#38E39A] animate-ping z-20" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg tracking-wider text-[#F4F5F3] group-hover:text-[#38E39A] transition-colors">
                IGNITRRON'26
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#B99A45]/20 text-[#E1C66A] font-mono text-[9px] font-bold border border-[#B99A45]/40">
                DAY 01
              </span>
            </div>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#B99A45]">
              AVENGERS: THE AUCTION WAR
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 font-mono text-xs tracking-wider relative z-[110]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="text-[#8E9A94] hover:text-[#38E39A] transition-colors relative py-1 group cursor-pointer pointer-events-auto"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38E39A] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right: Informational Actions Aligned */}
        <div className="hidden sm:flex items-center gap-4 relative z-[110] shrink-0">
          {/* Audio Mute/Unmute */}
          <button
            onClick={handleSoundToggle}
            className="p-2.5 rounded-xl glass-panel text-[#8E9A94] hover:text-[#38E39A] hover:border-[#38E39A]/40 transition-colors duration-200 flex items-center gap-2 font-mono text-[11px] cursor-pointer pointer-events-auto shrink-0"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#38E39A] animate-pulse" />}
            <span className="text-[10px] text-[#8E9A94]">{isMuted ? 'MUTE' : 'AUDIO ON'}</span>
          </button>

          {/* REGISTER NOW Button */}
          <a
            href="https://www.theticket9.com/event/ignitrron-26"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="btn-timeline-glow px-5 py-2.5 rounded-xl font-mono font-semibold text-xs text-[#F4F5F3] flex items-center gap-2 group cursor-pointer pointer-events-auto relative z-[110] shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#38E39A] animate-pulse" />
            <span>REGISTER NOW →</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-3 relative z-[110]">
          <button onClick={handleSoundToggle} className="p-2 rounded-lg glass-panel text-[#8E9A94] cursor-pointer pointer-events-auto">
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#38E39A]" />}
          </button>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-lg glass-panel text-[#38E39A] cursor-pointer pointer-events-auto">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-2 p-6 glass-panel rounded-2xl pointer-events-auto bg-[#07100B]/95 border-[#38E39A]/30 flex flex-col gap-4 font-mono text-sm relative z-[120]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  sounds.playClick();
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#F4F5F3] hover:text-[#38E39A] py-2 border-b border-[#38E39A]/10 flex items-center cursor-pointer pointer-events-auto"
              >
                <span>{link.name}</span>
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="https://www.theticket9.com/event/ignitrron-26"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  sounds.playClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-[#16A66A] text-[#F4F5F3] font-semibold text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer pointer-events-auto"
              >
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
                <span>REGISTER NOW →</span>
              </a>

              <a
                href="https://ignitrron-events-website.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl border border-[#B99A45] text-[#E1C66A] font-semibold text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer pointer-events-auto"
              >
                <span>MAIN FESTIVAL PORTAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
