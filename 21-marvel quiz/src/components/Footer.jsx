import React from 'react';
import { ChevronUp, ExternalLink, Globe, Mail, Send } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const Footer = () => {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030504] pt-16 pb-12 border-t border-[#38E39A]/15 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38E39A]/60 to-transparent" />
      <div className="absolute inset-0 bg-timeline-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#38E39A]/10">
          
            {/* Brand Col */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full border border-[#38E39A]/60 shadow-[0_0_10px_rgba(56,227,154,0.3)] overflow-hidden bg-[#07100B]">
                  <img
                    src="/marvel-quiz/loki_avatar.png"
                    alt="Avengers: The Auction War"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <span className="font-display font-bold text-xl tracking-wider text-[#F4F5F3] block">
                    IGNITRRON '26
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#B99A45]">
                    DAY 01 // AVENGERS: THE AUCTION WAR
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#8E9A94] leading-relaxed max-w-sm font-sans font-normal">
                KPRIET's flagship two-day techno-management fest. Avengers: The Auction War is a Day 1 tactical tournament featuring a Marvel Quiz preliminary and a Marvel Auction finale for the top 15 teams.
              </p>

              <div className="font-mono text-[10px] text-[#B99A45] tracking-widest uppercase">
                ASSEMBLE • BID • CONQUER
              </div>
            </div>

            {/* Nav Links */}
            <div className="md:col-span-3 font-mono text-xs space-y-3">
              <span className="text-[#B99A45] font-bold tracking-widest block uppercase mb-4">
                TACTICAL PROTOCOLS
              </span>
              <ul className="space-y-2 text-[#8E9A94]">
                <li><a href="#hero" className="hover:text-[#38E39A] transition-colors">01. HOME</a></li>
                <li><a href="#overview" className="hover:text-[#38E39A] transition-colors">02. EVENT DOSSIER</a></li>
                <li><a href="#rounds" className="hover:text-[#38E39A] transition-colors">03. EVENT ROUNDS</a></li>
                <li><a href="#timeline" className="hover:text-[#38E39A] transition-colors">04. TIMELINE</a></li>
                <li><a href="#rules" className="hover:text-[#38E39A] transition-colors">05. RULES</a></li>
                <li><a href="#team" className="hover:text-[#38E39A] transition-colors">06. EVENT TEAM</a></li>
                <li><a href="#faq" className="hover:text-[#38E39A] transition-colors">07. FAQ</a></li>
              </ul>
            </div>

          {/* Official Website Link & Contact */}
          <div className="md:col-span-4 font-mono text-xs space-y-4">
            <span className="text-[#B99A45] font-bold tracking-widest block uppercase mb-2">
              OFFICIAL IGNITRRON FESTIVAL
            </span>
            
            <a
              href="https://ignitrron26.kpriet.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel glass-panel-hover flex items-center justify-between text-[#38E39A] border-[#38E39A]/30 group cursor-pointer pointer-events-auto"
            >
              <span>VISIT IGNITRRON MAIN PORTAL</span>
              <ExternalLink className="w-4 h-4 text-[#B99A45] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://ignitrron26.kpriet.ac.in" target="_blank" rel="noopener noreferrer" title="Main Portal" className="p-2.5 rounded-xl glass-panel text-[#8E9A94] hover:text-[#38E39A]">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" title="Festival Stream" className="p-2.5 rounded-xl glass-panel text-[#8E9A94] hover:text-[#38E39A]">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" title="Contact Email" className="p-2.5 rounded-xl glass-panel text-[#8E9A94] hover:text-[#38E39A]">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8E9A94]">
          <div>
            © 2026 IGNITRRON '26 — AVENGERS: THE AUCTION WAR (DAY 01 EVENT). ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 rounded-lg glass-panel hover:text-[#38E39A] transition-colors cursor-pointer pointer-events-auto"
          >
            <span>RETURN TO TOP</span>
            <ChevronUp className="w-4 h-4 text-[#38E39A]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
