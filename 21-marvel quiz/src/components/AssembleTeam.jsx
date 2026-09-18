import React from 'react';
import { motion } from 'framer-motion';
import { Users, Phone, Shield, Sparkles, UserCheck } from 'lucide-react';
import { OFFICIAL_EVENT_DETAILS } from '../data/quizData';

export const AssembleTeam = () => {
  return (
    <section id="team" className="relative py-24 bg-[#07100B]/60 border-t border-[#38E39A]/15 overflow-hidden">
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
            <Users className="w-3.5 h-3.5 text-[#38E39A]" />
            <span className="font-mono text-xs text-[#38E39A] tracking-[0.25em]">
              SQUAD COMPOSITION & TEAM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            ASSEMBLE <span className="text-[#38E39A] font-mono">YOUR TEAM</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base max-w-xl mt-3 font-normal"
          >
            "Build your squad. Think together. Make every decision count."
          </motion.p>
        </div>

        {/* Team Rules Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border-2 border-[#38E39A]/40 bg-[#07100B]/90 shadow-emerald-glow flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#16A66A]/20 border border-[#38E39A] flex items-center justify-center text-[#38E39A] mb-5 shadow-[0_0_15px_#38E39A]">
              <Users className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs text-[#38E39A] font-extrabold tracking-widest uppercase mb-2">
              TEAM SIZE REQUIREMENT
            </span>

            <h3 className="font-display font-extrabold text-3xl text-[#F4F5F3] mb-2">
              2–3 MEMBERS
            </h3>

            <p className="text-xs text-[#8E9A94] font-normal leading-relaxed">
              Form a squad of 2 to 3 members to participate in the tactical bidding arena.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl border-2 border-[#B99A45]/40 bg-[#07100B]/90 shadow-gold-glow flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#B99A45]/20 border border-[#B99A45] flex items-center justify-center text-[#E1C66A] mb-5 shadow-[0_0_15px_#B99A45]">
              <Shield className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs text-[#E1C66A] font-extrabold tracking-widest uppercase mb-2">
              PARTICIPATING TEAMS LIMIT
            </span>

            <h3 className="font-display font-extrabold text-3xl text-[#F4F5F3] mb-2">
              NO LIMIT SPECIFIED
            </h3>

            <p className="text-xs text-[#8E9A94] font-normal leading-relaxed">
              Open participation for all eligible teams during IGNITRRON '26 Day 1.
            </p>
          </motion.div>

        </div>

        {/* Coordinators Sub-Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-mono text-xs text-[#B99A45] font-bold tracking-widest uppercase">
              EVENT FACULTY & COORDINATORS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Faculty Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 glass-panel p-8 rounded-3xl border-[#B99A45]/40 bg-[#07100B]/90 shadow-gold-glow flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#B99A45]/20 border-2 border-[#B99A45] flex items-center justify-center text-[#E1C66A] mb-6 shadow-[0_0_20px_#B99A45]">
                <Shield className="w-8 h-8" />
              </div>

              <span className="font-mono text-[10px] text-[#E1C66A] font-extrabold tracking-widest uppercase mb-2">
                FACULTY COORDINATOR
              </span>

              <h3 className="font-display font-extrabold text-2xl text-[#F4F5F3] mb-2">
                {OFFICIAL_EVENT_DETAILS.faculty}
              </h3>

              <p className="text-xs text-[#8E9A94] font-mono mt-2">
                FACULTY IN-CHARGE // IGNITRRON '26
              </p>
            </motion.div>

            {/* Student Coordinators */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
              {OFFICIAL_EVENT_DETAILS.coordinators.map((c, idx) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl border-[#38E39A]/20 glass-panel-hover flex flex-col justify-between items-center text-center group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#16A66A]/20 border border-[#38E39A]/40 flex items-center justify-center text-[#38E39A] mb-4 group-hover:scale-110 transition-transform">
                      <UserCheck className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-[9px] text-[#B99A45] tracking-widest font-bold uppercase mb-1">
                      STUDENT COORDINATOR
                    </span>

                    <h4 className="font-display font-bold text-base text-[#F4F5F3] mb-3">
                      {c.name}
                    </h4>
                  </div>

                  <a
                    href={`tel:${c.phone}`}
                    className="w-full mt-4 py-2 px-3 rounded-xl bg-[#16A66A]/15 border border-[#38E39A]/30 text-[#38E39A] hover:bg-[#38E39A] hover:text-[#030504] font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer pointer-events-auto"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{c.phone}</span>
                  </a>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
