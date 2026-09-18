import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Crown, Sparkles } from 'lucide-react';
import { OFFICIAL_EVENT_DETAILS } from '../data/quizData';

export const QuizArenaSection = () => {
  const pillars = [
    {
      number: '01',
      title: 'ASSEMBLE',
      desc: 'Build your ultimate lineup.',
      icon: Users,
    },
    {
      number: '02',
      title: 'DECIDE',
      desc: 'Make strategic decisions.',
      icon: Zap,
    },
    {
      number: '03',
      title: 'CONQUER',
      desc: 'Outplay the competition.',
      icon: Crown,
    },
  ];

  return (
    <section id="arena" className="relative py-24 bg-[#07100B]/60 border-t border-[#38E39A]/15 overflow-hidden">
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#38E39A]/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#38E39A]" />
            <span className="font-mono text-xs text-[#38E39A] tracking-[0.25em]">
              TACTICAL ARENA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            THE <span className="text-[#38E39A] font-mono">QUIZ ARENA</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base sm:text-lg max-w-2xl mt-3 font-normal"
          >
            "Every decision matters. Build your strategy, assemble your team, and make every bid count."
          </motion.p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border-[#38E39A]/20 glass-panel-hover flex flex-col justify-between relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38E39A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-extrabold text-[#B99A45]">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#16A66A]/20 border border-[#38E39A]/40 flex items-center justify-center text-[#38E39A] group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-[#F4F5F3] mb-3 group-hover:text-[#38E39A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#8E9A94] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#38E39A]/10 flex items-center justify-between text-[10px] font-mono text-[#B99A45]">
                  <span>STAGE {item.number}</span>
                  <span className="text-[#38E39A]">✦ STRATEGY PILLAR</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
