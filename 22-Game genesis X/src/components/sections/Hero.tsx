import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { EventConfig } from '../../types/event';
import gambitImg from '../../assets/gambit.png';

interface HeroProps {
  event: EventConfig;
}

export const Hero: React.FC<HeroProps> = ({ event }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* DEPTH LAYER 1: BACKGROUND - Faint Dark Suit Watermarks & Subtle Radial Atmospheric Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] flex items-center justify-around font-mono text-9xl text-[#8F26FF] select-none">
        <span>♠</span>
        <span>♥</span>
        <span>♦</span>
        <span>♣</span>
      </div>

      {/* Atmospheric Soft Purple/Magenta Radial Haze behind Character (Following Silhouette, NO giant circle!) */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[650px] bg-gradient-to-br from-[#6B1FDB]/20 via-[#E626FF]/15 to-transparent rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Clean Horizontal Metadata Line */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-display uppercase leading-tight">
                GAME GENESIS X
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
                <span className="text-xl sm:text-2xl font-mono font-bold text-[#E626FF] tracking-wider uppercase">
                  IN.ZEROS
                </span>
                <span className="text-xs font-mono text-[#B8B0C4] uppercase">
                  • GAME DEVELOPMENT CLUB
                </span>
              </div>
            </motion.div>

            {/* Tagline & Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-3"
            >
              <p className="text-lg sm:text-xl font-bold text-[#FF3BE6] font-mono tracking-wide">
                "{event.tagline}"
              </p>
              <p className="text-base text-[#B8B0C4] max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                {event.description}
              </p>
            </motion.div>

            {/* Clean Horizontal Metadata Line: Date | Time | Venue | Team Size */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 pb-1 border-y border-[#1A0C1C] flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm font-mono text-[#F8F5FC]"
            >
              <span className="font-bold text-[#FF3BE6]">{event.date}</span>
              <span className="text-[#6B1FDB]">|</span>
              <span>{event.time}</span>
              <span className="text-[#6B1FDB]">|</span>
              <span className="font-bold text-[#E626FF]">{event.venue}</span>
              <span className="text-[#6B1FDB]">|</span>
              <span className="text-[#B8B0C4]">{event.teamSize}</span>
            </motion.div>

            {/* CTAs */}
            {event.registration && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <a
                  href={event.registration.url}
                  className="group relative w-full sm:w-auto px-8 py-3.5 bg-[#140A15] text-white font-mono font-bold text-sm rounded border border-[#E626FF]/60 shadow-[0_0_20px_rgba(230,38,255,0.35)] hover:border-[#FF3BE6] hover:shadow-[0_0_35px_rgba(255,59,230,0.85)] transition-all flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#6B1FDB]/0 via-[#E626FF]/30 to-[#6B1FDB]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative z-10">REGISTER NOW</span>
                  <ArrowUpRight className="relative z-10 w-4 h-4 text-[#E626FF] group-hover:text-[#FF3BE6]" />
                </a>

                {event.registration.secondaryUrl && (
                  <a
                    href={event.registration.secondaryUrl}
                    className="w-full sm:w-auto px-7 py-3.5 bg-transparent text-[#B8B0C4] hover:text-white font-mono font-medium text-sm rounded border border-[#1A0C1C] hover:border-[#8F26FF]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{event.registration.secondaryLabel || 'VIEW RULES'}</span>
                  </a>
                )}
              </motion.div>
            )}

          </div>

          {/* RIGHT COLUMN: GAMBIT CHARACTER ARTWORK (45-50% Desktop Visual Area - NO RECTANGULAR CARD BOX!) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-2">
            
            <div className="relative w-full max-w-[620px] flex items-center justify-center">
              
              {/* DEPTH LAYER 3: FOREGROUND - EXACT 3 STRATEGIC CARDS & THIN ENERGY TRAILS */}

              {/* CARD 1: MAIN CHARGED CARD NEAR GAMBIT'S HAND */}
              <motion.div
                className="absolute w-32 h-44 bg-[#050506]/95 rounded-lg border-2 border-[#E626FF] p-3 flex flex-col justify-between z-30 shadow-[0_0_30px_rgba(230,38,255,0.6)] backdrop-blur-sm"
                animate={{ y: [0, -8, 0], rotate: [-4, -1, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ top: '18%', left: '-4%' }}
              >
                <div className="flex justify-between font-mono text-xs text-[#FF3BE6]">
                  <span className="font-extrabold">A</span>
                  <span>♠</span>
                </div>
                
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto rounded-full bg-[#E626FF]/20 border border-[#FF3BE6] flex items-center justify-center text-[#FF3BE6] font-mono text-sm font-bold">
                    ♠
                  </div>
                  <span className="text-[9px] font-mono text-[#E626FF] font-bold tracking-widest block mt-1">
                    CHARGED
                  </span>
                </div>

                <div className="flex justify-between font-mono text-xs text-[#FF3BE6] rotate-180">
                  <span className="font-extrabold">A</span>
                  <span>♠</span>
                </div>
              </motion.div>

              {/* SINGLE SMALL GAMBIT TECHNICAL LABEL NEAR HAND */}
              <div className="absolute top-[12%] left-[-2%] z-30 px-2 py-0.5 rounded bg-[#050506]/90 border border-[#E626FF]/50 text-[10px] font-mono text-[#FF3BE6] tracking-widest uppercase shadow-md">
                KINETIC ENERGY // ACTIVE
              </div>

              {/* CARD 2: SUBTLE BACKGROUND CARD (UPPER RIGHT BEHIND GAMBIT) */}
              <motion.div
                className="absolute w-22 h-32 bg-[#140A15]/80 rounded border border-[#8F26FF]/30 p-2 flex flex-col justify-between opacity-50 z-10"
                animate={{ y: [0, -10, 0], rotate: [12, 16, 12] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{ top: '5%', right: '-2%' }}
              >
                <span className="font-mono text-[10px] text-[#E626FF]">♥</span>
                <span className="font-mono text-[10px] text-[#E626FF] text-right">♥</span>
              </motion.div>

              {/* CARD 3: SUBTLE CARD (BOTTOM RIGHT) */}
              <motion.div
                className="absolute w-24 h-34 bg-[#140A15]/80 rounded border border-[#E626FF]/30 p-2 flex flex-col justify-between opacity-50 z-10"
                animate={{ y: [0, -8, 0], rotate: [-10, -6, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ bottom: '8%', right: '-4%' }}
              >
                <span className="font-mono text-[10px] text-[#FF3BE6]">♦</span>
                <span className="font-mono text-[10px] text-[#FF3BE6] text-right">♦</span>
              </motion.div>

              {/* DEPTH LAYER 2: MIDGROUND - ACTUAL UNMODIFIED GAMBIT ARTWORK CUTOUT */}
              {!imageError ? (
                <motion.div
                  className="relative z-20 w-full flex justify-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative w-full flex justify-center">
                    <img
                      src={gambitImg}
                      alt="Gambit Character"
                      className="w-full max-w-[560px] h-auto object-contain filter drop-shadow-[0_15px_40px_rgba(230,38,255,0.4)]"
                      onError={() => setImageError(true)}
                    />

                    {/* Soft Vignette Fade at bottom edge naturally fading character into black */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050506] via-[#050506]/70 to-transparent pointer-events-none"></div>
                  </div>
                </motion.div>
              ) : (
                /* CLEAN EMPTY ASSET PLACEHOLDER (No fake/cartoon character generated!) */
                <div className="w-full h-96 rounded-xl border-2 border-dashed border-[#8F26FF]/40 bg-[#140A15]/50 flex flex-col items-center justify-center p-8 text-center space-y-3 z-20">
                  <div className="w-12 h-12 rounded-lg bg-[#050506] border border-[#E626FF]/50 flex items-center justify-center text-[#E626FF]">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#FF3BE6] font-bold uppercase tracking-wider block mb-1">
                      [ GAMBIT CHARACTER ASSET ]
                    </span>
                    <p className="text-sm font-mono text-[#B8B0C4]">
                      Place your image file at <code className="text-[#E626FF]">src/assets/gambit.png</code>
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>

      {/* SECTION TRANSITION LINE: Thin purple energy line traveling toward the next section */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#8F26FF]/50 to-transparent"></div>
    </section>
  );
};
