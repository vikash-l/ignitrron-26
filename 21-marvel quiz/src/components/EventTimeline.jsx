import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { OFFICIAL_EVENT_DETAILS } from '../data/quizData';

export const EventTimeline = () => {
  const scheduleSteps = [
    {
      time: '09:30 AM',
      title: 'REPORTING / CHECK-IN',
      desc: 'Participants report for check-in and event briefing.',
      icon: Clock,
      badge: 'REPORTING',
    },
    {
      time: '10:00 AM',
      title: 'EVENT BEGINS',
      desc: 'Marvel Quiz officially commences on Day 1 of IGNITRRON\'26.',
      icon: Sparkles,
      badge: 'START',
    },
    {
      time: 'ROUND 01',
      title: 'ROUND 01 — MARVEL QUIZ',
      desc: 'Teams participate in the Marvel Quiz at GITAM Hall. Top 15 teams qualify for Round 02.',
      icon: MapPin,
      badge: 'ROUND 1',
    },
    {
      time: 'ROUND 02',
      title: 'ROUND 02 — MARVEL AUCTION',
      desc: 'Only the top 15 qualifying teams advance to the Marvel Auction at CARE Studio.',
      icon: MapPin,
      badge: 'ROUND 2',
    },
    {
      time: '04:00 PM',
      title: 'EVENT ENDS',
      desc: 'Conclusion of Marvel Quiz experience and goodies distribution.',
      icon: ShieldCheck,
      badge: 'CONCLUSION',
    },
  ];

  return (
    <section id="timeline" className="relative py-24 bg-[#030504] overflow-hidden border-t border-[#38E39A]/15">
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#B99A45]/40 mb-3"
          >
            <Clock className="w-3.5 h-3.5 text-[#B99A45]" />
            <span className="font-mono text-xs text-[#E1C66A] tracking-[0.25em]">
              EVENT SCHEDULE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            EVENT <span className="text-[#38E39A] font-mono">TIMELINE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base max-w-lg mt-3 font-normal"
          >
            Official schedule sequence for Marvel Quiz during IGNITRRON'26 Day 1.
          </motion.p>
        </div>

        {/* Timeline Vertical Path Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Glowing Green Vertical Central Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[#38E39A]/60 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {scheduleSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Half */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-panel p-6 rounded-2xl border-[#38E39A]/20 glass-panel-hover relative group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-[#38E39A] font-bold">
                          {step.time}
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-[#B99A45]/20 text-[#E1C66A] font-mono text-[9px] font-bold border border-[#B99A45]/40">
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl text-[#F4F5F3] mb-2 group-hover:text-[#38E39A] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs text-[#8E9A94] leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon Node */}
                  <div className="w-12 h-12 rounded-full bg-[#07100B] border-2 border-[#38E39A] shadow-[0_0_15px_rgba(56,227,154,0.4)] flex items-center justify-center text-[#38E39A] z-20 shrink-0 hidden md:flex">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Empty Spacer Half */}
                  <div className="w-full md:w-1/2 hidden md:block" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
