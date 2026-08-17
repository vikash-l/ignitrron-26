import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame, ArrowRight } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { Button } from '../ui/Button';

export interface NavbarProps {
  event: EventConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ event }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'EVENT', href: '#about' },
    { label: 'SHOW', href: '#experience' },
    { label: 'MACHINES', href: '#machines' },
    { label: 'DETAILS', href: '#venue' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030303]/90 backdrop-blur-xl border-b border-[#4A0A07]/50 shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Left */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label={`${event.name} Home`}
          >
            <div className="h-9 w-9 rounded bg-[#101010] border border-[#4A0A07] group-hover:border-[#FF6A00] flex items-center justify-center transition-all shadow-[0_0_12px_rgba(215,38,20,0.3)]">
              <Flame className="w-5 h-5 text-[#FF6A00] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-black font-display text-lg sm:text-xl tracking-tight text-[#F5F2EC] group-hover:text-[#FF6A00] transition-colors leading-none">
                {event.name}
              </span>
              <span className="text-[10px] font-mono-tech text-[#858585] tracking-widest uppercase mt-0.5">
                {event.edition}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101010]/80 border border-[#4A0A07]/60 rounded px-3 py-1 backdrop-blur-md" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-mono-tech font-bold tracking-widest text-[#858585] hover:text-[#F5F2EC] hover:bg-[#17110D] rounded transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="fire"
              as="a"
              href="#venue"
              icon={<ArrowRight className="w-4 h-4 text-[#030303]" />}
              className="hidden sm:inline-flex"
            >
              ENTER SHOW →
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded bg-[#101010] border border-[#4A0A07] text-[#F5F2EC] hover:border-[#FF6A00] focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#030303]/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-8"
          >
            <div className="flex flex-col gap-2 my-auto">
              <div className="mb-4 pb-2 border-b border-[#4A0A07]/60">
                <span className="text-xs font-mono-tech text-[#858585] uppercase tracking-widest">
                  EVENT NAVIGATION
                </span>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg font-bold font-display uppercase tracking-widest text-[#F5F2EC] hover:text-[#FF6A00] hover:bg-[#101010] rounded transition-colors flex items-center justify-between border border-transparent hover:border-[#4A0A07]"
                >
                  <span>{item.label}</span>
                  <Flame className="w-4 h-4 text-[#FF6A00]" />
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#4A0A07]/60 mt-auto">
              <Button
                size="lg"
                variant="fire"
                className="w-full justify-center"
                as="a"
                href="#venue"
                onClick={() => setMobileMenuOpen(false)}
              >
                ENTER SHOW →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
