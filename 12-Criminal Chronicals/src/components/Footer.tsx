import React from 'react';
import { Radio, ArrowUp } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#000000] border-t border-red-900/30 py-12 text-slate-400 font-mono text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-red-900/20">
          
          {/* Brand Left */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-black border border-red-900/40 flex items-center justify-center text-[#e31b23]">
                <Radio className="w-5 h-5" />
              </div>
              <span className="font-heading font-black text-xl text-white tracking-wider">
                CRIMINAL CHRONICLES <span className="text-[#e31b23]">2.0</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs">
              Official Day 01 Event of <span className="text-white font-bold">{EVENT_DATA.organizer}</span>
            </p>
            <p className="text-[#e31b23] text-[11px] tracking-widest uppercase font-semibold">
              {EVENT_DATA.primaryTagline}
            </p>
          </div>

          {/* Nav Links Center */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#e31b23] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-black border border-red-900/30 text-slate-300 hover:text-white hover:border-[#e31b23] transition-all flex items-center gap-2"
            title="Back to Top"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4 text-[#e31b23]" />
          </button>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 IGNITRRON'26. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Forensic Investigation Challenge • KPRIET Flagship Techno-Management Fest
          </p>
        </div>
      </div>
    </footer>
  );
};
