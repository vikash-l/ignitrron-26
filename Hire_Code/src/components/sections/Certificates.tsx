import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden border-t border-[#00BFA6]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="05"
          badge="OFFICIAL CREDENTIAL"
          title="PARTICIPATION CERTIFICATES"
          subtitle="Official certification recognizing individual skill development in employability and communication at IGNITRRON 26."
          align="center"
        />

        {/* Certificate Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 38, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="tech-panel rounded-2xl p-8 sm:p-12 border border-[#00BFA6]/40 bg-gradient-to-b from-[#0B1720]/95 via-[#08131C]/95 to-[#05070A]/98 text-center relative overflow-hidden max-w-2xl mx-auto shadow-2xl shadow-black/80 group"
        >
          {/* Top Hairline Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#22D3EE]/70 to-transparent" />

          {/* Glowing Ambient Orb */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20 blur-[90px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00BFA6 0%, #22D3EE 50%, transparent 80%)' }}
          />

          <div className="relative z-10">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#08131C]/90 border border-[#00BFA6]/50 text-[#22D3EE] font-mono-tech text-[10px] uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3 text-[#D6B86A]" />
              <span>IGNITRRON 26 CERTIFICATION</span>
            </div>

            {/* Certificate Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#08131C] border border-[#00BFA6]/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-108 transition-transform duration-300 shadow-lg shadow-[#00BFA6]/20">
              <Award className="h-8 w-8 text-[#00BFA6]" />
            </div>

            {/* Title */}
            <h3 className="text-[#E8EEF2] font-display text-3xl sm:text-4xl uppercase tracking-wide mb-3">
              {eventData.certificates.title}
            </h3>

            {/* Description */}
            <p className="text-[#E8EEF2] text-sm sm:text-base font-normal leading-relaxed mb-4 max-w-md mx-auto">
              "{eventData.certificates.description}"
            </p>

            <p className="text-[#8997A3] text-xs leading-relaxed max-w-md mx-auto mb-8 font-normal">
              {eventData.certificates.notice}
            </p>

            {/* Verification Features */}
            <div className="border-t border-[#00BFA6]/20 pt-6 flex flex-wrap items-center justify-center gap-4 font-mono-tech text-xs text-[#00BFA6]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#22D3EE]" />
                OFFICIAL IGNITRRON 26 CREDENTIAL
              </span>
              <span className="text-[#526371]">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#22D3EE]" />
                INDIVIDUAL PARTICIPATION
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

