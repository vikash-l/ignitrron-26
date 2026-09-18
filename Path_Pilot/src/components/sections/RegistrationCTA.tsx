import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, MapPin, Cpu } from 'lucide-react';
import { eventData } from '../../data/event';

export const RegistrationCTA: React.FC = () => {
  return (
    <section id="registration" className="py-28 relative overflow-hidden border-t border-[#25292E]">
      {/* High-Intensity Atmospheric Energy Emitter */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[850px] h-[550px] rounded-full opacity-15 blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #A30F18 0%, #191C20 40%, #050505 70%, transparent 80%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 38, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="tech-panel rounded-3xl p-8 sm:p-16 text-center border border-[#25292E] relative overflow-hidden shadow-[0_24px_60px_-15px_rgba(5,5,5,0.95),0_0_35px_rgba(163,15,24,0.12)] bg-gradient-to-b from-[#191C20]/95 via-[#111316]/95 to-[#050505]/98"
        >
          {/* Corner Reticle Brackets */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#A30F18]/70" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#A30F18]/70" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#A30F18]/70" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#A30F18]/70" />

          {/* Top Hairline Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A30F18]/80 to-transparent" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Monospace Fest Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#111316]/90 border border-[#25292E] text-[#E8E8E8] font-mono-tech text-[11px] uppercase tracking-widest mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A30F18] animate-pulse" />
              <span>{eventData.name}</span>
              <span className="text-[#4A5056]">|</span>
              <span>{eventData.festName}</span>
            </motion.div>

            {/* Display Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#E8E8E8] font-display uppercase tracking-tight leading-[0.88] mb-5"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 6rem)' }}
            >
              FOLLOW THE LINE.<br />
              <span 
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to right, #E8E8E8 0%, #E8E8E8 50%, #A30F18 100%)' }}
              >
                MASTER THE COURSE.
              </span>
            </motion.h2>

            {/* Supporting Line */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="text-[#9A9DA1] text-sm sm:text-base font-normal mb-8 max-w-lg mx-auto leading-relaxed"
            >
              Engineer your autonomous robot. Calibrate the sensors. Take on the official IGNITRRON 26 course.
            </motion.p>

            {/* Metadata Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-9 text-xs font-mono-tech text-[#9A9DA1]"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#A30F18]" />
                {eventData.date}
              </span>
              <span className="text-[#4A5056]">|</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#777D83]" />
                {eventData.venue}
              </span>
              <span className="text-[#4A5056]">|</span>
              <span className="flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-[#A30F18]" />
                {eventData.maxRobotSize}
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
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#A30F18] hover:bg-[#D51F2A] text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 glow-btn-red hover:scale-102 transition-all duration-200 cursor-pointer no-underline"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="h-4 w-4 text-[#FFFFFF]" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};




