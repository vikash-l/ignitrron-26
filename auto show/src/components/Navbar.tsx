'use client';

import { useState } from 'react';
import { Menu, X, ChevronRight, Play } from 'lucide-react';
import { EVENT_CONFIG } from '@/config/eventData';

interface NavbarProps {
  onOpenTeaser?: () => void;
}

export default function Navbar({ onOpenTeaser }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'EXPERIENCE', href: '#hero', isExternal: false },
    { name: 'VEHICLES', href: '#vehicles', isExternal: false },
    { name: 'EXHIBITION', href: '#exhibition', isExternal: false },
    { name: 'EVENT', href: '#event', isExternal: false },
    { name: 'COORDINATORS', href: '#coordinators', isExternal: false },
    { name: 'REGISTER', href: EVENT_CONFIG.registrationUrl, highlight: true, isExternal: true },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 sm:px-6 lg:px-12 py-4 sm:py-5 transition-all duration-300 pointer-events-none">
      <nav className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 py-2 px-4 rounded-full glass-nav hover:border-neutral-700 transition-all duration-300"
        >
          <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300" />
          <span className="font-display text-sm md:text-base font-bold tracking-widest text-white">
            AUTO SHOW <span className="text-accent text-xs">’26</span>
          </span>
        </a>

        {/* Right: Desktop Navigation Links & Teaser Video Button */}
        <div className="hidden md:flex items-center gap-2">
          {onOpenTeaser && (
            <button
              onClick={onOpenTeaser}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-nav border border-accent/40 text-[11px] font-mono tracking-widest text-accent hover:bg-accent/20 hover:text-white transition-all duration-300 uppercase font-bold"
            >
              <Play className="w-3 h-3 text-accent fill-accent" />
              <span>TEASER VIDEO</span>
            </button>
          )}

          <div className="flex items-center gap-1 p-1.5 rounded-full glass-nav border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className={`px-4 py-2 rounded-full text-[11px] font-mono tracking-ultra transition-all duration-300 ${
                  link.highlight
                    ? 'bg-accent text-white font-bold hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/30'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 rounded-full glass-nav text-white hover:text-accent transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Slideout Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 p-6 glass-panel rounded-2xl border border-white/10 flex flex-col gap-4 z-50 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-300">
          {onOpenTeaser && (
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenTeaser();
              }}
              className="flex items-center justify-between p-3 rounded-xl bg-accent/20 border border-accent/40 text-xs font-mono tracking-widest text-accent font-bold"
            >
              <span className="flex items-center gap-2">
                <Play className="w-3.5 h-3.5 fill-accent" />
                WATCH TEASER VIDEO
              </span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </button>
          )}

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between p-3 rounded-xl text-xs font-mono tracking-widest ${
                link.highlight
                  ? 'bg-accent text-white font-bold'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
