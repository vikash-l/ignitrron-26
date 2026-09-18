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
    { id: 'researchJourney', label: 'Research Journey', show: sections.researchJourney },
    { id: 'rounds', label: 'Rounds', show: sections.rounds },
    { id: 'timeline', label: 'Timeline', show: sections.timeline },
    { id: 'rules', label: 'Rules', show: sections.rules },
    { id: 'prizes', label: 'Prizes', show: sections.prizes },
    { id: 'faq', label: 'FAQ', show: sections.faq },
    { id: 'contact', label: 'Contact', show: true },
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
      className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-900 shadow-lg'
          : 'bg-slate-950/40 border-slate-900/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Icon 'E' next to Event Name */}
          <a
            href="https://ignitrron-26.freelancerskpriet.workers.dev/"
            className="flex items-center gap-3 cursor-pointer group no-underline"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 font-extrabold text-white text-lg transition-transform duration-200 group-hover:scale-105">
              🔬
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-wider text-white">
              {eventData.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-400 hover:text-emerald-400 font-medium text-sm transition-colors duration-200 cursor-pointer"
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/25 transition-all active:scale-[0.98] cursor-pointer no-underline"
              >
                {eventData.registration.label} &nbsp; ↗
              </a>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none transition-colors duration-200 cursor-pointer"
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
            className="lg:hidden border-t border-slate-900 bg-slate-950/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 flex flex-col items-stretch">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              {sections.registration && eventData.registration && (
                <div className="pt-4 px-3">
                  <a
                    href={eventData.registration.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center px-4 py-3 text-base font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all cursor-pointer no-underline"
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
