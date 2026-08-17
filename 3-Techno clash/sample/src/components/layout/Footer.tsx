import React from 'react';
import { Cpu } from 'lucide-react';
import { eventData } from '../../data/event';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-cyan-900/40 py-12 text-slate-400 font-mono text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-black text-lg">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>TECHNO <span className="text-cyan-400">CLASH</span></span>
            </div>
            <p className="text-slate-500 text-xs mt-1">
              National Technical Quiz Competition • Powered by NEXA Neural Grid
            </p>
          </div>

          <div className="text-slate-400 space-y-1 text-xs">
            <div>Email: <span className="text-cyan-400">{eventData.contact.email}</span></div>
            <div>Location: <span className="text-slate-300">{eventData.contact.location}</span></div>
          </div>

          <div className="text-slate-500 text-[11px]">
            © 2026 TECHNO CLASH. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
