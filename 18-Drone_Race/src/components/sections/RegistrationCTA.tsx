import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { eventData } from '../../data/event';

export const RegistrationCTA: React.FC = () => {
  return (
    <section id="registration" className="py-28 relative overflow-hidden border-t border-[#d6a84f]/15">
      {/* High-Intensity Atmospheric Energy Emitter (Culmination) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full opacity-25 blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #e8a63a 0%, #d6a84f 45%, transparent 75%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 38, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="tech-panel rounded-3xl p-8 sm:p-16 text-center border border-[#d6a84f]/45 relative overflow-hidden shadow-[0_24px_60px_-15px_rgba(5,6,7,0.95),0_0_35px_rgba(214,168,79,0.2)] bg-gradient-to-b from-[#121b1e]/95 via-[#0b1012]/95 to-[#050607]/98"
        >
          {/* Subtle Corner Reticle Brackets */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#d6a84f]/60" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#d6a84f]/60" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#d6a84f]/60" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#d6a84f]/60" />

          {/* Top Hairline Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#f2d58a]/70 to-transparent" />

          {/* Falcon Wing SVG Silhouette in Background of Card */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            viewBox="0 0 800 400"
            fill="none"
          >
            <path 
              d="M 50 300 C 200 150, 450 80, 750 180 C 520 280, 300 320, 50 300 Z" 
              stroke="rgba(214, 168, 79, 0.6)" 
              strokeWidth="1.2" 
              strokeDasharray="4 6"
            />
          </svg>

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Monospace Fest Badge (Strictly No //) */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#0b1012]/90 border border-[#d6a84f]/40 text-[#d6a84f] font-mono-tech text-[11px] uppercase tracking-widest mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2d58a] animate-pulse" />
              <span>{eventData.name}</span>
              <span className="text-[#65757a]">|</span>
              <span>{eventData.festName}</span>
            </motion.div>

            {/* Huge Display Heading: TAKE FLIGHT. CONTROL THE COURSE. */}
            <motion.h2 
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#f3f3ef] font-display uppercase tracking-tight leading-[0.88] mb-5"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 6rem)' }}
            >
              TAKE FLIGHT.<br />
              <span 
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to right, #f2d58a 0%, #d6a84f 50%, #e8a63a 100%)' }}
              >
                CONTROL THE COURSE.
              </span>
            </motion.h2>

            {/* Supporting Line */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="text-[#879296] text-sm sm:text-base font-normal mb-8 max-w-lg mx-auto leading-relaxed"
            >
              Online registration and on-spot registrations available. Lock in your spot on the flight grid.
            </motion.p>

            {/* Metadata Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-9 text-xs font-mono-tech text-[#879296]"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#d6a84f]" />
                {eventData.date}
              </span>
              <span className="text-[#65757a]">|</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#e8a63a]" />
                {eventData.venue}
              </span>
              <span className="text-[#65757a]">|</span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-[#d6a84f]" />
                {eventData.teamSize}
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
                href={eventData.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded bg-gradient-to-r from-[#d6a84f] via-[#e8a63a] to-[#d6a84f] hover:from-[#f2d58a] hover:to-[#e8a63a] text-[#050607] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-2xl shadow-[#d6a84f]/35 hover:shadow-[#d6a84f]/55 hover:scale-102 transition-all duration-200 cursor-pointer no-underline"
              >
                <span>REGISTER NOW ↗</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
