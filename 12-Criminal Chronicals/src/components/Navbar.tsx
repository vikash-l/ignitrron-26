import React, { useState, useEffect } from 'react';
import { Radio, Menu, X, ArrowRight } from 'lucide-react';
import { EVENT_DATA, REGISTRATION_URL } from '../config/eventData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'ROUNDS', href: '#rounds' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'RULES', href: '#rules' },
    { name: 'PRIZES', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-red-900/30 shadow-lg shadow-black/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-lg bg-black border border-red-900/40 flex items-center justify-center group-hover:border-[#e31b23] group-hover:shadow-[0_0_15px_rgba(227,27,35,0.4)] transition-all">
              <Radio className="w-5 h-5 text-[#e31b23] group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#e31b23] animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg sm:text-xl tracking-wider text-white group-hover:text-[#e31b23] transition-colors">
                CRIMINAL CHRONICLES <span className="text-[#e31b23]">2.0</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                {EVENT_DATA.organizer} • DAY 01 EVENT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-black/80 p-1.5 rounded-full border border-red-900/30 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-red-950 text-[#e31b23] font-bold border border-red-600/40 shadow-[0_0_10px_rgba(227,27,35,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={REGISTRATION_URL}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-[#8b0000] via-[#c1121f] to-[#e31b23] hover:from-[#c1121f] hover:to-[#e31b23] transition-all duration-300 shadow-[0_0_20px_rgba(227,27,35,0.4)] hover:shadow-[0_0_30px_rgba(227,27,35,0.7)] hover:scale-102 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-black border border-red-900/40 text-slate-300 hover:text-white hover:border-[#e31b23] focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/98 border-b border-red-900/40 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-mono tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-red-950 text-[#e31b23] font-bold border border-red-600/40'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23]" />}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-red-900/30">
              <a
                href={REGISTRATION_URL}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-bold tracking-wider text-white bg-gradient-to-r from-[#8b0000] via-[#c1121f] to-[#e31b23] shadow-[0_0_20px_rgba(227,27,35,0.4)]"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
