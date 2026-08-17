import React from 'react';
import { Shield, ChevronUp, Radio } from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050E] border-t border-slate-800 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Subtle top laser border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#0A2342] border border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(29,78,216,0.4)]">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-orbitron font-extrabold text-2xl text-white tracking-wider">
                MILAN <span className="text-red-500">'26</span>
              </span>
            </div>

            <p className="text-sm font-space font-medium text-slate-200 max-w-md">
              {MILAN_DATA.footer.line1}
            </p>

            <p className="text-xs font-mono text-blue-400">
              {MILAN_DATA.footer.line2}
            </p>
          </div>

          {/* Center / Right Host Badge & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center sm:text-left">
              <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                PRESENTED UNDER
              </div>
              <div className="text-base font-orbitron font-bold text-white tracking-wider">
                {MILAN_DATA.footer.host}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/40 text-slate-300 hover:text-white hover:bg-blue-900/60 transition-all duration-200 shadow-md group"
              aria-label="Back to top"
            >
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>MILAN '26 CONCLAVE // ALL RIGHTS RESERVED</span>
          </div>
          <div>
            INSPIRED BY LEADERSHIP, INNOVATION & EXCELLENCE
          </div>
        </div>
      </div>
    </footer>
  );
};
