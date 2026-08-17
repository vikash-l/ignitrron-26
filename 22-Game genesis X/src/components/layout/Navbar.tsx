import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { EventConfig, SectionKey } from '../../types/event';

interface NavbarProps {
  event: EventConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ event }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; href: string; sectionKey: SectionKey }[] = [
    { label: 'ABOUT', href: '#about', sectionKey: 'about' },
    { label: 'PITCH', href: '#highlights', sectionKey: 'highlights' },
    { label: 'RULES', href: '#rules', sectionKey: 'rules' },
    { label: 'PRIZES', href: '#prizes', sectionKey: 'prizes' },
    { label: 'FAQ', href: '#faq', sectionKey: 'faq' },
  ];

  const activeNavLinks = navLinks.filter(
    (link) => event.sections[link.sectionKey] !== false
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050506]/95 backdrop-blur-md border-b border-[#1A0C1C] py-3 shadow-md'
          : 'bg-[#050506]/80 border-b border-[#1A0C1C]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Event Identity */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-white uppercase">
              GAME GENESIS X
            </span>
            <span className="text-[#E626FF] font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#140A15]">
              IN.ZEROS
            </span>
          </a>

          {/* Center: Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {activeNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono tracking-widest text-[#B8B0C4] hover:text-[#FF3BE6] transition-colors relative group py-1"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right: Clean Register Button */}
          {event.sections.registration !== false && event.registration && (
            <div className="hidden sm:block">
              <a
                href={event.registration.url}
                className="px-4 py-2 bg-[#140A15] text-[#F8F5FC] hover:text-[#FF3BE6] font-mono font-bold text-xs rounded border border-[#8F26FF]/40 hover:border-[#E626FF] transition-all inline-flex items-center gap-1 cursor-pointer"
              >
                <span>REGISTER</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E626FF]" />
              </a>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#F8F5FC] hover:text-[#E626FF] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#050506]/98 backdrop-blur-xl border-b border-[#1A0C1C] px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {activeNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-mono text-[#F8F5FC] hover:text-[#FF3BE6] rounded transition-colors flex items-center justify-between border-b border-[#140A15]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E626FF]" />
                </a>
              ))}

              {event.sections.registration !== false && event.registration && (
                <div className="pt-3">
                  <a
                    href={event.registration.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 bg-[#140A15] text-[#FF3BE6] border border-[#8F26FF]/40 font-mono font-bold text-xs rounded flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>REGISTER</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
