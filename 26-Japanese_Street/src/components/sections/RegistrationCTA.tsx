import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { eventData } from '../../data/event';

export const RegistrationCTA: React.FC = () => {
  return (
    <section id="registration" className="py-28 relative overflow-hidden border-t border-[#C9A45C]/20">
      {/* High-Intensity Japanese Atmospheric Lantern Glow Emitter */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full opacity-25 blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C63C32 0%, #243B63 50%, transparent 75%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 38, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="ronin-panel rounded-3xl p-8 sm:p-16 text-center border border-[#C9A45C]/40 relative overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(198,60,50,0.25)] bg-gradient-to-b from-[#141C2E] via-[#0E1524] to-[#08090C]"
        >
          {/* Subtle Corner Reticle Brackets in Antique Gold */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#C9A45C]/60" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#C9A45C]/60" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#C9A45C]/60" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#C9A45C]/60" />

          {/* Top Hairline Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C63C32]/80 to-transparent" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Monospace Fest Badge (No //) */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#101827] border border-[#C9A45C]/40 text-[#F1E8D5] font-mono-tech text-[11px] uppercase tracking-widest mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C63C32] animate-pulse" />
              <span>{eventData.name}</span>
              <span className="text-stone-600">|</span>
              <span className="text-[#C9A45C]">{eventData.festName}</span>
            </motion.div>

            {/* Display Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#F1E8D5] font-display uppercase tracking-tight leading-[0.88] mb-5"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 6rem)' }}
            >
              ENTER THE STREET.<br />
              <span 
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to right, #C63C32 0%, #E28C48 55%, #C9A45C 100%)' }}
              >
                EXPERIENCE JAPAN.
              </span>
            </motion.h2>

            {/* Supporting Line */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="text-[#F1E8D5]/80 text-sm sm:text-base font-normal mb-8 max-w-lg mx-auto leading-relaxed"
            >
              Explore 10 destinations, creative stalls, cosplay, and games at {eventData.festName}.
            </motion.p>

            {/* Metadata Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-9 text-xs font-mono-tech text-[#9B9A96]"
            >
              <span className="flex items-center gap-1.5 text-[#C9A45C]">
                <Sparkles className="h-3.5 w-3.5 text-[#C63C32]" />
                10 Activities &amp; Stalls
              </span>
              <span className="text-stone-600">|</span>
              <span className="flex items-center gap-1.5 text-[#F1E8D5]">
                <MapPin className="h-3.5 w-3.5 text-[#C9A45C]" />
                CAC &amp; BME Walkway
              </span>
            </motion.div>

            {/* Action Button: REGISTER NOW ↗ */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href={eventData.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded bg-[#C63C32] hover:bg-[#A82B22] text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-2xl shadow-[#C63C32]/40 hover:shadow-[#C63C32]/60 hover:scale-102 transition-all duration-200 cursor-pointer no-underline border border-[#C9A45C]/40"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="h-4 w-4 text-[#C9A45C]" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
