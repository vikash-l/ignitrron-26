import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, Award, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const About: React.FC = () => {
  return (
    <section id="race" className="py-24 relative overflow-hidden border-t border-[#d6a84f]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="01"
          badge="AEROSPACE ARENA"
          title={eventData.race.title}
          subtitle={eventData.race.description}
          align="center"
        />

        {/* Two Large Round Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto mb-10">
          
          {/* ROUND 01: OBSTACLE COURSE (MINIMAL OBSTACLES - POINT BASIS) */}
          <motion.div
            initial={{ opacity: 0, y: 38, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="tech-panel rounded-2xl p-7 sm:p-9 border border-[#d6a84f]/35 flex flex-col justify-between shadow-xl relative overflow-hidden bg-[#0b1012]/90 group"
          >
            {/* Top gold hairline on hover */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d6a84f]/0 to-transparent group-hover:via-[#d6a84f]/70 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded bg-[#121b1e] border border-[#d6a84f]/40 text-[#f2d58a] font-mono-tech text-[10px] uppercase tracking-widest font-bold">
                  ROUND 01
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#141c20] border border-[#d6a84f]/30 flex items-center justify-center text-[#d6a84f]">
                  <Crosshair className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-[#f3f3ef] font-display text-3xl sm:text-4xl uppercase tracking-wide mb-2 group-hover:text-[#f2d58a] transition-colors">
                OBSTACLE COURSE
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-mono-tech text-xs text-[#d6a84f] bg-[#1a150a] border border-[#d6a84f]/30 px-2.5 py-1 rounded uppercase font-semibold">
                  MINIMAL OBSTACLES
                </span>
                <span className="font-mono-tech text-xs text-[#f2d58a] bg-[#141c20] border border-[#d6a84f]/30 px-2.5 py-1 rounded uppercase font-semibold">
                  POINT-BASED SCORING
                </span>
              </div>

              <div className="space-y-3 font-mono-tech text-xs">
                <div className="flex items-start gap-3 p-3 rounded bg-[#0e1518] border border-[#223038]">
                  <AlertTriangle className="h-4 w-4 text-[#e8a63a] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#f3f3ef] font-bold">Obstacle contact</span>
                    <span className="text-[#879296]"> → point deduction</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-[#0e1518] border border-[#223038]">
                  <AlertTriangle className="h-4 w-4 text-[#e8a63a] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#f3f3ef] font-bold">Skipped obstacle</span>
                    <span className="text-[#879296]"> → point deduction</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-[#121b1e] border border-[#d6a84f]/25">
                  <Award className="h-4 w-4 text-[#d6a84f] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#f2d58a] font-bold">Quickest time</span>
                    <span className="text-[#879296]"> → bonus points</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-[#121b1e] border border-[#d6a84f]/25">
                  <Award className="h-4 w-4 text-[#d6a84f] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#f2d58a] font-bold">Perfect landing</span>
                    <span className="text-[#879296]"> → bonus points</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d6a84f]/20 pt-4 mt-6 flex items-center justify-between text-[10px] font-mono-tech text-[#65757a]">
              <span>EVALUATION METRIC</span>
              <span className="text-[#d6a84f] font-bold">POINTS &amp; BONUSES</span>
            </div>
          </motion.div>

          {/* ROUND 02: OBSTACLE COURSE (FULL OBSTACLES - TIME BASIS) */}
          <motion.div
            initial={{ opacity: 0, y: 38, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="tech-panel rounded-2xl p-7 sm:p-9 border border-[#d6a84f]/35 flex flex-col justify-between shadow-xl relative overflow-hidden bg-[#0b1012]/90 group"
          >
            {/* Top gold hairline on hover */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#e8a63a]/0 to-transparent group-hover:via-[#e8a63a]/70 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded bg-[#1a140a] border border-[#e8a63a]/40 text-[#e8a63a] font-mono-tech text-[10px] uppercase tracking-widest font-bold">
                  ROUND 02
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#141c20] border border-[#e8a63a]/30 flex items-center justify-center text-[#e8a63a]">
                  <ShieldAlert className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-[#f3f3ef] font-display text-3xl sm:text-4xl uppercase tracking-wide mb-2 group-hover:text-[#f2d58a] transition-colors">
                OBSTACLE COURSE
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-mono-tech text-xs text-[#e8a63a] bg-[#1a140a] border border-[#e8a63a]/30 px-2.5 py-1 rounded uppercase font-semibold">
                  FULL OBSTACLES
                </span>
                <span className="font-mono-tech text-xs text-[#d6a84f] bg-[#141c20] border border-[#d6a84f]/30 px-2.5 py-1 rounded uppercase font-semibold">
                  TIME-BASED SCORING
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono-tech text-[#879296] leading-relaxed">
                <div className="p-4 rounded bg-[#0e1518] border border-[#223038] space-y-2">
                  <div className="flex items-center gap-2 text-[#f3f3ef] font-bold">
                    <CheckCircle2 className="h-4 w-4 text-[#d6a84f]" />
                    <span>FULL COMPLEXITY CIRCUIT</span>
                  </div>
                  <p className="text-[#879296]">
                    Pilots navigate the complete arena layout featuring high-density gates, turns, and elevation changes.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#0e1518] border border-[#223038] space-y-2">
                  <div className="flex items-center gap-2 text-[#f3f3ef] font-bold">
                    <CheckCircle2 className="h-4 w-4 text-[#d6a84f]" />
                    <span>PRECISION FLIGHT TIME</span>
                  </div>
                  <p className="text-[#879296]">
                    Total course completion time is the decisive metric. Fastest qualifying pilot rankings advance to podium standings.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d6a84f]/20 pt-4 mt-6 flex items-center justify-between text-[10px] font-mono-tech text-[#65757a]">
              <span>EVALUATION METRIC</span>
              <span className="text-[#e8a63a] font-bold">ELAPSED FLIGHT TIME</span>
            </div>
          </motion.div>

        </div>

        {/* Important Briefing & Structure Notes */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="tech-panel rounded-xl p-5 sm:p-6 border border-[#d6a84f]/30 bg-[#0d1416]/90 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-[#141c20] border border-[#d6a84f]/40 flex items-center justify-center text-[#d6a84f] flex-shrink-0">
              <Info className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono-tech text-[#f2d58a] uppercase font-bold tracking-wider">
                IMPORTANT RACE DAY NOTICE
              </div>
              <p className="text-xs text-[#879296] leading-relaxed">
                The number and structure of rounds may vary depending on the number of participants. Further details will be explained during the briefing on Race Day.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export const Race = About;
