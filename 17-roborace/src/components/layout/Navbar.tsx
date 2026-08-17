import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { eventData } from '../../data/event';

interface NavbarProps {
  sections: { [key: string]: boolean };
}

export const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', show: sections.about },
    { id: 'raceJourney', label: 'Race', show: sections.researchJourney },
    { id: 'rounds', label: 'Rounds', show: sections.rounds },
    { id: 'obstacles', label: 'Obstacles', show: sections.highlights },
    { id: 'rules', label: 'Rules', show: sections.rules },
    { id: 'prizes', label: 'Prizes', show: sections.prizes },
    { id: 'contact', label: 'Contact', show: true },
  ].filter(link => link.show);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#060608]/90 backdrop-blur-md border-zinc-800 shadow-xl'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Title */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded bg-sky-950/60 border border-sky-850 font-black text-white text-base transition-transform duration-120 group-hover:scale-105">
              🏎️
            </div>
            <span className="text-base sm:text-lg font-black tracking-widest text-white font-display uppercase">
              {eventData.name}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-mono">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-400 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors duration-120 cursor-pointer relative py-1.5 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-120 origin-left" />
              </button>
            ))}
          </div>

          {/* Registration CTA (Desktop) */}
          {sections.registration && eventData.registration && (
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('registration')}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-black rounded bg-gradient-to-r from-slate-200 to-zinc-400 hover:from-white hover:to-slate-250 text-zinc-950 transition-all active:scale-[0.98] cursor-pointer font-display tracking-widest"
              >
                {eventData.registration.label}
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-450 hover:text-white hover:bg-zinc-900 focus:outline-none transition-colors duration-120 cursor-pointer"
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
            transition={{ duration: 0.15 }}
            className="lg:hidden border-t border-zinc-900 bg-zinc-950/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-3 pt-4 pb-6 space-y-2 sm:px-4 flex flex-col items-stretch font-mono">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-3 py-2.5 rounded-md text-sm font-bold text-slate-450 hover:text-sky-400 hover:bg-zinc-900 transition-colors duration-120 cursor-pointer uppercase tracking-wider"
                >
                  {link.label}
                </button>
              ))}
              {sections.registration && eventData.registration && (
                <div className="pt-4 px-3">
                  <button
                    onClick={() => scrollToSection('registration')}
                    className="flex w-full items-center justify-center px-4 py-3 text-xs font-black rounded bg-gradient-to-r from-slate-200 to-zinc-400 text-zinc-950 transition-all cursor-pointer font-display tracking-widest"
                  >
                    {eventData.registration.label}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
