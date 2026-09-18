import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Timer, Users, Activity } from 'lucide-react';

export const RulesSection = () => {
  const protocols = [
    {
      id: 'p1',
      num: '01',
      title: 'NO EXTERNAL DEVICES',
      icon: ShieldAlert,
      desc: 'All communications, search devices, and unauthorized timeline interference tools are strictly prohibited during active trials.',
    },
    {
      id: 'p2',
      num: '02',
      title: 'CHRONO COUNTDOWN & STREAKS',
      icon: Timer,
      desc: 'Each question has a 30-second temporal clock. Speed increases score multipliers; running out of time resets your answer streak.',
    },
    {
      id: 'p3',
      num: '03',
      title: 'VARIANT TEAM PROTOCOL',
      icon: Users,
      desc: 'Teams comprise 1 to 3 Variants. All variants on a team share a unified stability score and leaderboard rank.',
    },
    {
      id: 'p4',
      num: '04',
      title: 'REALITY STABILITY INDEX',
      icon: Activity,
      desc: 'Your Timeline Stability starts at 100%. Incorrect answers trigger temporal distortion penalties, while flawless streaks restore stability.',
    },
  ];

  return (
    <section id="rules" className="relative py-24 bg-[#0A100D]/60 border-y border-[#35D98B]/10 overflow-hidden">
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#C8A951]/40 mb-3"
          >
            <span className="font-mono text-xs text-[#E1C66A] tracking-[0.25em]">TVA DIRECTIVES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F7F5]"
          >
            TEMPORAL <span className="text-[#35D98B] font-mono">PROTOCOLS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {protocols.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border-[#35D98B]/15 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#C8A951] font-bold">
                      PROTOCOL {p.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#16A36A]/20 flex items-center justify-center text-[#35D98B] border border-[#35D98B]/30">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#F4F7F5] mb-2">
                    {p.title}
                  </h3>

                  <p className="text-[#8E9A94] text-xs leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#35D98B]/10 flex items-center justify-between text-[10px] font-mono text-[#35D98B]">
                  <span>STATUS: MANDATORY</span>
                  <span>✓ ENFORCED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
