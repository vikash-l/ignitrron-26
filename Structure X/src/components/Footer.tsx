import React from 'react';
import { EVENT_DETAILS } from '../data/eventData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03050a] border-t border-[#1b2538] py-12 font-mono text-xs text-gray-400">
      <div className="site-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Event Identity */}
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xl font-bold text-white tracking-wider flex items-center justify-center md:justify-start gap-2">
              <span>{EVENT_DETAILS.name}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/40">
                2026
              </span>
            </div>
            <div className="text-xs text-[#00d9ff] font-bold tracking-widest">
              {EVENT_DETAILS.fest} • {EVENT_DETAILS.category}
            </div>
            <div className="text-[11px] text-gray-400 italic font-sans">
              "{EVENT_DETAILS.tagline}"
            </div>
          </div>

          {/* Navigation Links (NO REGISTER LINK) */}
          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <a href="#about" className="hover:text-[#00d9ff] transition-colors">
              ABOUT
            </a>
            <a href="#challenge" className="hover:text-[#00d9ff] transition-colors">
              CHALLENGE
            </a>
            <a href="#world-of-structures" className="hover:text-[#00d9ff] transition-colors">
              STRUCTURES
            </a>
            <a href="#tower-cutaway" className="hover:text-[#00d9ff] transition-colors">
              ANALYSIS
            </a>
            <a href="#construction-flow" className="hover:text-[#00d9ff] transition-colors">
              TIMELINE
            </a>
            <a href="#presentation-guide" className="hover:text-[#00d9ff] transition-colors">
              PRESENTATION
            </a>
            <a href="#evaluation" className="hover:text-[#00d9ff] transition-colors">
              EVALUATION
            </a>
          </div>
        </div>

        {/* Footer Bottom Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-[10px] text-gray-500 space-y-1">
          <p>© 2026 STRUCTURE X • IGNITRRON CIVIL ENGINEERING SYMPOSIUM.</p>
          <p>
            VENUE: {EVENT_DETAILS.venue} | SCHEDULE: {EVENT_DETAILS.day} ({EVENT_DETAILS.timing}) | FACULTY: {EVENT_DETAILS.faculty}
          </p>
        </div>
      </div>
    </footer>
  );
};
