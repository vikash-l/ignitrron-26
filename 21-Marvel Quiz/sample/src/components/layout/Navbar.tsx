import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
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
    { id: 'eventInfo', label: 'Info', show: sections.eventInfo },
    { id: 'stats', label: 'Stats', show: sections.stats },
    { id: 'highlights', label: 'Highlights', show: sections.highlights },
    { id: 'rounds', label: 'Rounds', show: sections.rounds },
    { id: 'timeline', label: 'Timeline', show: sections.timeline },
    { id: 'rules', label: 'Rules', show: sections.rules },
    { id: 'prizes', label: 'Prizes', show: sections.prizes },
    { id: 'sponsors', label: 'Sponsors', show: sections.sponsors },
    { id: 'faq', label: 'FAQ', show: sections.faq },
  ].filter(link => link.show);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#020604]/90 backdrop-blur-md border-[#063D29]/60 shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
          : 'bg-[#020604]/60 border-[#063D29]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0B5D3B] to-[#063D29] border border-[#00E676]/40 font-extrabold text-[#C9A227] text-lg transition-all duration-200 group-hover:scale-105 group-hover:border-[#00E676] shadow-[0_0_12px_rgba(0,230,118,0.2)]">
              <Sparkles className="h-5 w-5 text-[#00E676]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-wider text-white flex items-center gap-1.5">
                <span>MARVEL</span>
                <span className="text-[#00E676]">QUIZ</span>
              </span>
              <span className="text-[10px] font-mono text-[#C9A227] tracking-widest uppercase -mt-1">
                IGNITRRON '26
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-400 hover:text-[#00E676] font-medium text-sm transition-colors duration-200 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,230,118,0.5)]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Registration CTA (Desktop) */}
          {sections.registration && eventData.registration && (
            <div className="hidden lg:block">
              <a
                href={eventData.registration.url}
                className="inline-flex items-center justify-center px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-[#0B5D3B] to-[#063D29] border border-[#00E676]/50 hover:border-[#00E676] text-[#00E676] hover:text-white shadow-[0_0_15px_rgba(0,230,118,0.2)] hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] transition-all active:scale-[0.98] cursor-pointer"
              >
                {eventData.registration.label} &nbsp; ↗
              </a>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-[#00E676] hover:bg-[#063D29]/40 focus:outline-none transition-colors duration-200 cursor-pointer"
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
            className="lg:hidden border-t border-[#063D29]/50 bg-[#020604]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 flex flex-col items-stretch">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-400 hover:text-[#00E676] hover:bg-[#063D29]/30 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              {sections.registration && eventData.registration && (
                <div className="pt-4 px-3">
                  <a
                    href={eventData.registration.url}
                    className="flex w-full items-center justify-center px-4 py-3 text-base font-semibold rounded-lg bg-gradient-to-r from-[#0B5D3B] to-[#063D29] border border-[#00E676]/50 text-[#00E676] shadow-md transition-all cursor-pointer"
                  >
                    {eventData.registration.label} &nbsp; ↗
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
