import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Crosshair, Zap, Award, Scale } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Rounds: React.FC = () => {
  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="h-5 w-5 text-[#d6a84f]" />;
      case 1:
        return <Crosshair className="h-5 w-5 text-[#f2d58a]" />;
      case 2:
        return <Zap className="h-5 w-5 text-[#e8a63a]" />;
      case 3:
        return <Scale className="h-5 w-5 text-[#d6a84f]" />;
      default:
        return <Award className="h-5 w-5 text-[#d6a84f]" />;
    }
  };

  return (
    <section id="format" className="py-24 relative overflow-hidden border-t border-[#d6a84f]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="02"
          badge="FLIGHT PROGRESSION"
          title="RACE FORMAT"
          subtitle="Sequential flight progression from pre-race telemetry briefing through obstacle heats to official adjudication."
          align="center"
        />

        {/* Visual Flight Trajectory Timeline / Stage Pipeline */}
        <div className="relative max-w-5xl mx-auto mt-12 mb-12">
          
          {/* Animated Connecting Flight Trajectory Line (Desktop Horizontal, Mobile Vertical) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-[#d6a84f]/10 via-[#d6a84f]/50 to-[#d6a84f]/10 -translate-y-6 z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-gradient-to-r from-transparent via-[#f2d58a] to-transparent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {eventData.format.stages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="tech-panel rounded-2xl p-6 sm:p-7 border border-[#d6a84f]/30 flex flex-col justify-between shadow-xl bg-[#0b1012]/90 hover:border-[#d6a84f]/60 hover:bg-[#121b1e] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Top hairline highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d6a84f]/0 to-transparent group-hover:via-[#d6a84f]/60 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono-tech text-xs text-[#f2d58a] font-bold bg-[#141c20] border border-[#d6a84f]/30 px-2.5 py-1 rounded">
                      STAGE {stage.index}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#141c20] border border-[#d6a84f]/30 flex items-center justify-center group-hover:border-[#d6a84f]/60 transition-colors">
                      {getStageIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-[#f3f3ef] font-display text-2xl sm:text-3xl uppercase tracking-wide mb-1 group-hover:text-[#f2d58a] transition-colors">
                    {stage.title}
                  </h3>

                  <div className="text-[10px] font-mono-tech text-[#d6a84f] uppercase tracking-wider mb-3 font-semibold">
                    {stage.subtitle}
                  </div>

                  <p className="text-[#879296] text-xs leading-relaxed font-normal">
                    {stage.description}
                  </p>
                </div>

                <div className="border-t border-[#d6a84f]/20 pt-4 mt-6 flex items-center justify-between text-[9px] font-mono-tech text-[#65757a]">
                  <span>STEP 0{idx + 1} OF 04</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d6a84f]" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Final Verdict Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto tech-panel rounded-2xl p-6 sm:p-7 border border-[#d6a84f]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl bg-gradient-to-r from-[#0b1012] via-[#141d22] to-[#0b1012]"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#141c20] border border-[#d6a84f]/50 flex items-center justify-center flex-shrink-0 text-[#f2d58a] shadow-[0_0_20px_rgba(214,168,79,0.25)]">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-[#f3f3ef] text-2xl sm:text-3xl tracking-wide uppercase leading-tight">
                OFFICIAL JUDGES' VERDICT
              </div>
              <div className="font-mono-tech text-xs text-[#879296] mt-1">
                {eventData.format.verdict}
              </div>
            </div>
          </div>

          <div className="font-mono-tech text-xs text-[#f2d58a] bg-[#1a150a] border border-[#d6a84f]/40 px-4 py-2 rounded-lg flex-shrink-0 uppercase font-bold shadow-sm">
            FINAL &amp; BINDING
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export const Format = Rounds;
