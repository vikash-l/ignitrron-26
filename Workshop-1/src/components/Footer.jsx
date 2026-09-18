import React from 'react';

export const Footer = ({ onNavClick }) => {
  const links = [
    { label: 'Events', id: 'events' },
    { label: 'Schedule', id: 'schedule' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="w-full border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] py-12 transition-colors duration-300">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-100 dark:border-zinc-800/60">
          
          {/* Left Brand */}
          <div className="space-y-1">
            <h3 className="text-lg font-black tracking-wider text-slate-900 dark:text-zinc-100 font-sans flex items-center gap-1.5">
              IGNITRRON’26
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
            </h3>
            <p className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 font-semibold">
              FUEL THE SPARK WITHIN
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 sm:gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavClick(link.id)}
                className="text-xs font-mono font-semibold text-slate-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                {link.label}
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Copyright & Venue */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 dark:text-zinc-500 gap-4">
          <p>© 2026 IGNITRRON’26. All rights reserved.</p>
          <p>PROMPT://OVERDRIVE • ADC LAB • Sept 20-21, 2026</p>
        </div>

      </div>
    </footer>
  );
};
