import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, ShieldAlert, Radio } from 'lucide-react';
import { comingSoonData } from '../../data/event';

export const NextChapter: React.FC = () => {
  return (
    <section id="next-chapter" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      
      {/* Background Soft Emerald Volumetric Fog */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse, #16A36A 0%, #35E6A1 30%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Step 1: Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#08110E] border border-[#16A36A]/40 text-[#7CFFCB] font-mono-tech text-xs tracking-[0.25em] uppercase mb-8 shadow-sm shadow-[#16A36A]/20"
        >
          <Radio className="h-3.5 w-3.5 text-[#35E6A1] animate-pulse" />
          <span>01 // {comingSoonData.nextChapter.eyebrow}</span>
        </motion.div>

        {/* Step 2: Main Editorial Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider leading-[0.95] mb-6 max-w-3xl mx-auto"
        >
          <span className="block text-[#F1F5F2]">
            IGNITRRON 26
          </span>
          <span className="block text-transparent bg-clip-text glow-arcane" style={{ backgroundImage: 'linear-gradient(to right, #7CFFCB 0%, #35E6A1 60%, #16A36A 100%)' }}>
            IS PREPARING SOMETHING NEW.
          </span>
        </motion.h2>

        {/* Step 3: Dimensional Emerald Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-32 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-[#35E6A1] to-transparent mx-auto mb-8"
        />

        {/* Step 4: Short Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#82958C] text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal mb-14"
        >
          {comingSoonData.nextChapter.description}
        </motion.p>

        {/* Step 5: Mysterious Containment Field Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="mystic-panel rounded-2xl p-6 sm:p-10 border border-[#16A36A]/30 backdrop-blur-xl relative overflow-hidden">
            
            {/* Subtle Arcane Background Line Patterns */}
            <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />
            
            {/* Corner Decorative Runes */}
            <div className="absolute top-3 left-3 font-mono-tech text-[10px] text-[#16A36A] tracking-widest">
              [CONVERGENCE_LOC]
            </div>
            <div className="absolute top-3 right-3 font-mono-tech text-[10px] text-[#35E6A1] tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35E6A1] animate-ping" />
              <span>ONLINE</span>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left my-4">
              
              <div className="p-4 rounded-xl bg-[#050807]/70 border border-[#16A36A]/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-[#35E6A1]" />
                  <span className="font-mono-tech text-[11px] text-[#82958C] uppercase tracking-widest">
                    PHASE
                  </span>
                </div>
                <div className="font-mono-tech text-sm text-[#F1F5F2] font-semibold tracking-wider">
                  INITIALIZATION
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#050807]/70 border border-[#16A36A]/20">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-4 w-4 text-[#7CFFCB]" />
                  <span className="font-mono-tech text-[11px] text-[#82958C] uppercase tracking-widest">
                    STATUS
                  </span>
                </div>
                <div className="font-mono-tech text-sm text-[#7CFFCB] font-semibold tracking-wider">
                  UNREVEALED
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#050807]/70 border border-[#16A36A]/20">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="h-4 w-4 text-[#35E6A1]" />
                  <span className="font-mono-tech text-[11px] text-[#82958C] uppercase tracking-widest">
                    ACCESS
                  </span>
                </div>
                <div className="font-mono-tech text-sm text-[#F1F5F2] font-semibold tracking-wider">
                  STANDBY
                </div>
              </div>

            </div>

            {/* Bottom Status Message */}
            <div className="mt-6 pt-6 border-t border-[#16A36A]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <span className="font-mono-tech text-xs text-[#82958C] tracking-widest uppercase">
                OFFICIAL IGNITRRON 26 ANNOUNCEMENTS TO FOLLOW
              </span>
              <span className="font-mono-tech text-xs text-[#7CFFCB] font-bold tracking-[0.2em] uppercase">
                {comingSoonData.nextChapter.resonanceMessage}
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
