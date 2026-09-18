import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, MapPin, Users, Target, Shield, Award } from 'lucide-react';
import { OFFICIAL_EVENT_DETAILS } from '../data/quizData';

export const EventOverview = () => {
  const details = [
    { label: 'EVENT', value: OFFICIAL_EVENT_DETAILS.eventName, icon: Sparkles, highlight: true },
    { label: 'TYPE', value: OFFICIAL_EVENT_DETAILS.eventType, icon: Target, highlight: false },
    { label: 'THEME', value: OFFICIAL_EVENT_DETAILS.theme, icon: Shield, highlight: false },
    { label: 'EXPECTED PARTICIPANTS', value: `${OFFICIAL_EVENT_DETAILS.expectedParticipants}`, icon: Users, highlight: false },
    { label: 'DAY', value: OFFICIAL_EVENT_DETAILS.day, icon: Calendar, highlight: false },
    { label: 'REPORTING', value: OFFICIAL_EVENT_DETAILS.reportingTime, icon: Clock, highlight: false },
    { label: 'EVENT TIME', value: OFFICIAL_EVENT_DETAILS.eventTime, icon: Clock, highlight: false },
    { label: 'VENUE', value: OFFICIAL_EVENT_DETAILS.venue, icon: MapPin, highlight: false },
    { label: 'TEAM SIZE', value: OFFICIAL_EVENT_DETAILS.teamSize, icon: Users, highlight: true },
    { label: 'TEAMS', value: OFFICIAL_EVENT_DETAILS.maxTeams, icon: Award, highlight: false },
  ];

  return (
    <section id="overview" className="relative py-24 bg-[#030504] overflow-hidden border-t border-[#38E39A]/15">
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#B99A45]/40 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B99A45]" />
            <span className="font-mono text-xs text-[#E1C66A] tracking-[0.25em]">
              OFFICIAL DOSSIER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            EVENT <span className="text-[#38E39A] font-mono">INFORMATION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base max-w-xl mt-3 font-normal"
          >
            Confirmed event metrics, reporting time, team limits, and venue logistics for Marvel Quiz at IGNITRRON'26.
          </motion.p>
        </div>

        {/* 10 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {details.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={`${item.label}-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`glass-panel p-5 rounded-2xl glass-panel-hover flex flex-col justify-between relative overflow-hidden ${
                  item.highlight ? 'border-[#38E39A]/40 bg-[#07100B]/90 shadow-emerald-glow' : 'border-[#38E39A]/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] text-[#B99A45] tracking-widest font-bold uppercase">
                      {item.label}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#16A66A]/20 border border-[#38E39A]/40 flex items-center justify-center text-[#38E39A] shadow-[0_0_10px_rgba(56,227,154,0.3)]">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#F4F5F3] leading-snug">
                    {item.value}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-[#38E39A]/10 flex items-center justify-between font-mono text-[9px] text-[#8E9A94]">
                  <span>IGNITRRON'26</span>
                  <span className="text-[#38E39A]">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
