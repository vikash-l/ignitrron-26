import React from 'react';
import { soundFx } from '../utils/soundFx';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative py-12 px-4 bg-[#0a0a0c] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <a
            href="#"
            onClick={() => soundFx.playClick()}
            className="font-anton text-3xl text-white tracking-wider hover:text-[#ff003c] transition-colors"
          >
            LAUNCHPAD
          </a>
          <p className="font-bebas text-lg text-[#00f0ff] tracking-wider mt-0.5 uppercase">
            NEW BRAND. YOUR BRAND.
          </p>
        </div>

        <div className="flex flex-col sm:items-end">
          <span className="font-space text-xs text-gray-400 font-semibold tracking-widest uppercase">
            ORGANIZED BY
          </span>
          <span className="font-bebas text-2xl text-white tracking-wider">
            THE DESIGN CLUB
          </span>
          <span className="font-space text-[10px] text-gray-500 tracking-wider">
            OFFICIAL EVENT FOR IGNITRRON
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-space text-gray-500 gap-3">
        <p>© 2026 LAUNCHPAD • Design Club. All rights reserved.</p>
        <p className="text-[#ff003c]">SPIDER-VERSE INSPIRED BRANDING ADVENTURE</p>
      </div>
    </footer>
  );
};
