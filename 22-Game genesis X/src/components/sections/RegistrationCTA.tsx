import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { EventConfig } from '../../types/event';
import gambitImg from '../../assets/gambit.png';

interface RegistrationCTAProps {
  event: EventConfig;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ event }) => {
  const [bgImageError, setBgImageError] = useState(false);

  if (!event.registration) return null;

  const { url, secondaryUrl, note } = event.registration;

  return (
    <section id="registration" className="py-24 bg-transparent relative z-10 overflow-hidden border-t border-[#1A0C1C]">
      
      {/* Subtle Cropped Background Image of Actual Gambit Character (Heavily Darkened) */}
      {!bgImageError && (
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none hidden md:block w-96 overflow-hidden">
          <img
            src={gambitImg}
            alt=""
            className="w-full h-full object-cover filter contrast-200 grayscale brightness-50"
            aria-hidden="true"
            onError={() => setBgImageError(true)}
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#140A15] border border-[#1A0C1C] rounded-xl p-8 sm:p-12 md:p-14"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display uppercase tracking-tight leading-none mb-6">
            YOUR GAME.<br />
            <span className="text-[#E626FF]">YOUR VISION.</span><br />
            <span className="text-[#FF3BE6]">YOUR MOVE.</span>
          </h2>

          {/* Action Buttons & Single Charged Card */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-6 relative">
            
            {/* Single Charged Card near button */}
            <div className="hidden sm:flex w-12 h-16 bg-[#050506] rounded border border-[#FF3BE6] p-1.5 flex-col justify-between shadow-[0_0_15px_rgba(255,59,230,0.5)]">
              <span className="text-[9px] font-mono font-bold text-[#FF3BE6]">♠</span>
              <span className="text-center text-[10px] text-[#E626FF]">★</span>
              <span className="text-[9px] font-mono font-bold text-[#FF3BE6] rotate-180">♠</span>
            </div>

            {/* REGISTER NOW ↗ Button */}
            <a
              href={url}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#050506] text-white hover:text-[#FF3BE6] font-mono font-bold text-sm rounded border border-[#E626FF] shadow-[0_0_20px_rgba(230,38,255,0.4)] hover:shadow-[0_0_35px_rgba(255,59,230,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {secondaryUrl && (
              <a
                href={secondaryUrl}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#050506] text-[#B8B0C4] hover:text-white font-mono font-medium text-sm rounded border border-[#1A0C1C] hover:border-[#8F26FF]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VIEW RULES</span>
              </a>
            )}
          </div>

          {/* Queue Mandate Note */}
          {note && (
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B8B0C4] bg-[#050506] px-4 py-2 rounded border border-[#1A0C1C]">
              <Clock className="w-3.5 h-3.5 text-[#E626FF]" />
              <span>{note}</span>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
};
