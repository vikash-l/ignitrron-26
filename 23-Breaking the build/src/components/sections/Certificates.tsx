import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden border-t border-[#7F1D1D]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="05"
          badge="OFFICIAL RECOGNITION"
          title="CERTIFICATES"
          subtitle="Recognition awarded to all participants of Breaking the Build at IGNITRRON 26."
          align="center"
        />

        {/* Certificate Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 38, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="tech-panel rounded-2xl p-8 sm:p-12 border border-[#B42318]/50 bg-gradient-to-b from-[#1C0D0B]/95 via-[#120A08]/95 to-[#070506]/98 text-center relative overflow-hidden max-w-2xl mx-auto shadow-2xl shadow-black/80 group"
        >
          {/* Top Hairline Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#F97316]/70 to-transparent" />

          {/* Glowing Ambient Orb */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20 blur-[90px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #EF4444 0%, #F97316 50%, transparent 80%)' }}
          />

          <div className="relative z-10">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#24100D]/90 border border-[#7F1D1D]/60 text-[#F97316] font-mono-tech text-[10px] uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3 text-[#F59E0B]" />
              <span>IGNITRRON 26 CERTIFICATION</span>
            </div>

            {/* Certificate Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#24100D] border border-[#F97316]/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-108 transition-transform duration-300 shadow-lg">
              <Award className="h-8 w-8 text-[#F97316]" />
            </div>

            {/* Title */}
            <h3 className="text-[#F5F1ED] font-display text-3xl sm:text-4xl uppercase tracking-wide mb-3">
              {eventData.certificates.title}
            </h3>

            {/* Description */}
            <p className="text-[#F5F1ED] text-sm sm:text-base font-normal leading-relaxed mb-4 max-w-md mx-auto">
              "{eventData.certificates.description}"
            </p>

            <p className="text-[#A8A09A] text-xs leading-relaxed max-w-md mx-auto mb-8 font-normal">
              {eventData.certificates.notice}
            </p>

            {/* Verification Features */}
            <div className="border-t border-[#7F1D1D]/30 pt-6 flex flex-wrap items-center justify-center gap-4 font-mono-tech text-xs text-[#F97316]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#EF4444]" />
                OFFICIAL IGNITRRON 26 CREDENTIAL
              </span>
              <span className="text-[#6E6762]">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#EF4444]" />
                INDIVIDUAL PARTICIPATION
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
