import React, { useState, useEffect } from 'react';
import { ArrowRight, Radio } from 'lucide-react';
import { EVENT_DATA, REGISTRATION_URL } from '../config/eventData';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#050505]/95 backdrop-blur-xl border-t border-red-900/40 shadow-[0_-5px_25px_rgba(0,0,0,0.9)] animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded bg-black border border-red-900/40 flex items-center justify-center text-[#e31b23] shrink-0">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div className="min-w-0">
            <p className="font-heading font-black text-sm text-white truncate">CRIMINAL CHRONICLES 2.0</p>
            <p className="font-mono text-[10px] text-[#e31b23] truncate">PRIZE POOL: ₹6,000</p>
          </div>
        </div>

        <a
          href={REGISTRATION_URL}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-[#8b0000] via-[#c1121f] to-[#e31b23] shadow-[0_0_15px_rgba(227,27,35,0.4)] shrink-0"
        >
          <span>REGISTER</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
