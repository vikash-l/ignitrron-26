import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { EventConfig, SectionConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export interface NavbarProps {
  event: EventConfig;
  sections: SectionConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ event, sections }) => {
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
    { label: 'MISSION', href: '#about', visible: sections.about },
    { label: 'PROTOCOL', href: '#rounds', visible: sections.rounds },
    { label: 'TIMELINE', href: '#timeline', visible: sections.timeline },
    { label: 'RULES', href: '#rules', visible: sections.rules },
    { label: 'REWARDS', href: '#prizes', visible: sections.prizes },
    { label: 'FAQ', href: '#faq', visible: sections.faq },
  ].filter((link) => link.visible);

  const regLabel = 'REGISTER // ↗';
  const regUrl = event.registration?.url || '#registration';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#070809]/95 backdrop-blur-md border-b border-[#262A33] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Logo Area: Minimal Abstract Ultron-Style Geometric Insignia */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#F04444] p-1"
          >
            <div className="w-8 h-8 bg-[#14161A] border border-[#3A404E] group-hover:border-[#F04444] flex items-center justify-center relative clip-corner-sm transition-colors">
              <span className="font-mono font-black text-sm text-[#E8EAED]">L</span>
              <span className="absolute top-1 right-1 w-1 h-1 bg-[#F04444] rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-industrial font-extrabold text-sm tracking-wider text-[#E8EAED] uppercase group-hover:text-[#F04444] transition-colors truncate max-w-[180px] sm:max-w-none">
                LEGACY CODE RESCUE
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#9CA3AA]">
                ULTRON PROTOCOL V4.0
              </span>
            </div>
          </a>

          {/* Minimal Industrial Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono tracking-widest text-[#9CA3AA] hover:text-[#E8EAED] transition-colors relative py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F04444] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {sections.registration && (
              <Button
                href={regUrl}
                size="sm"
                variant="primary"
                className="hidden sm:inline-flex text-xs font-mono"
              >
                {regLabel}
              </Button>
            )}

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 bg-[#14161A] border border-[#262A33] text-[#E8EAED] hover:bg-[#1C1F26] focus:outline-none focus:ring-1 focus:ring-[#F04444] cursor-pointer clip-corner-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0D0F11] border-b border-[#262A33] overflow-hidden"
          >
            <Container size="lg" className="py-6 space-y-4">
              <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-mono tracking-widest text-[#9CA3AA] hover:text-[#E8EAED] py-2 border-b border-[#1E222A] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {sections.registration && (
                <div className="pt-2">
                  <Button
                    href={regUrl}
                    fullWidth
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {regLabel}
                  </Button>
                </div>
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
