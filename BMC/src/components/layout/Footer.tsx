import React from 'react';
import { ArrowUp } from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playUiSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#00ff88]/20 bg-[#050816] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#cbd5e1]/10">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#0b0f14] border border-[#00ff88]/40 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#00ff88]" viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#00ff88" strokeWidth="8" />
                  <path d="M35 40 L50 28 L65 40 L65 60 L50 72 L35 60 Z" fill="#00ff88" />
                </svg>
              </div>
              <div>
                <h3 className="font-orbitron font-extrabold text-lg text-white tracking-wider">
                  IGNITRRON'26
                </h3>
                <span className="text-xs font-mono font-bold text-[#00ff88] tracking-widest uppercase">
                  BMC – Business Model Canvas
                </span>
              </div>
            </div>
            <p className="text-sm font-semibold text-white/90 tracking-wide mt-1">
              Transform Ideas into Sustainable Businesses
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => playUiSound('hover')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b0f14] border border-[#00ff88]/30 text-[#00ff88] hover:bg-[#00ff88]/10 hover:border-[#00ff88]/60 transition-all text-xs font-mono font-bold shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#cbd5e1]/60 gap-4 text-center sm:text-left">
          <div>
            © 2026 IGNITRRON'26 // Corporate Innovation & Venture Acceleration Division.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#00ff88]">Oscorp Corporate Innovation Architecture</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
