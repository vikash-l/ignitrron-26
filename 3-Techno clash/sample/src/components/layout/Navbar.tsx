import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sound } from '../../utils/audio';

interface NavbarProps {
  sections: { [key: string]: boolean };
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(sound.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'prelims', label: 'PRELIMS' },
    { id: 'round1', label: 'ROUND 1' },
    { id: 'final-boss', label: 'FINAL BOSS' },
    { id: 'requirements', label: 'REQUIREMENTS' },
    { id: 'rules', label: 'RULES' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id: string) => {
    sound.playClick();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const isMuted = sound.toggleMute();
    setMuted(isMuted);
    if (!isMuted) sound.playClick();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050814]/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5'
          : 'bg-gradient-to-b from-[#050814]/90 via-[#050814]/50 to-transparent border-b border-cyan-500/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & HUD Status */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 font-extrabold text-white text-lg shadow-[0_0_15px_#00F0FF] transition-transform duration-200 group-hover:scale-105">
              <Cpu className="w-5 h-5 text-slate-950 animate-pulse" />
            </div>
            <div>
              <div className="font-mono text-lg sm:text-xl font-black tracking-widest text-white flex items-center gap-2">
                TECHNO <span className="text-cyan-400">CLASH</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[9px] font-mono text-cyan-400/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>ONLINE PRELIMS → TOP 10</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-5 font-mono text-xs tracking-wider">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={() => sound.playHover()}
                className="text-slate-300 hover:text-cyan-400 font-bold transition-colors duration-200 cursor-pointer relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right Controls: Mute Toggle & Register CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleSound}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 transition"
              title={muted ? "Unmute HUD Audio" : "Mute HUD Audio"}
            >
              {muted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onRegisterClick();
              }}
              onMouseEnter={() => sound.playHover()}
              className="relative group overflow-hidden px-5 py-2.5 text-xs font-mono font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all transform hover:scale-105"
            >
              <span className="flex items-center gap-1.5 relative z-10 text-white">
                <Sparkles className="w-3.5 h-3.5" /> REGISTER NOW
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400"
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-cyan-400 bg-slate-900 border border-cyan-500/30"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden border-t border-cyan-500/30 bg-[#050814]/95 backdrop-blur-xl overflow-hidden font-mono text-xs"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col items-stretch">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 transition"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onRegisterClick();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-center"
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
