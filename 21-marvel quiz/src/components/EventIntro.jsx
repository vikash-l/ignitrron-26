import React from 'react';
import { motion } from 'framer-motion';
import { Film, Users, BookOpen, Star, Clock } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const EventIntro = () => {
  const categories = [
    { title: 'CHARACTERS', desc: 'Heroes, villains, anti-heroes, and variant counterparts.', icon: Users },
    { title: 'MOVIES', desc: 'Iconic cinematic sagas, scenes, and phase milestones.', icon: Film },
    { title: 'STORYLINES', desc: 'Comic arcs, multiverse incursions, and temporal events.', icon: BookOpen },
    { title: 'ICONIC MOMENTS', desc: 'Unforgettable quotes, battles, and legendary reveals.', icon: Star },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#07100B]/50 overflow-hidden border-y border-[#38E39A]/10">
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Day 1 Identification Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel border-[#B99A45]/40 font-mono text-xs text-[#E1C66A]">
            <span className="font-bold text-[#38E39A]">IGNITRRON'26</span>
            <span>•</span>
            <span className="font-bold text-[#E1C66A]">DAY 01 EVENT</span>
            <span>•</span>
            <span className="text-[#8E9A94]">MARVEL QUIZ</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            THE TIMELINE HAS BEEN <span className="text-[#38E39A] font-mono">OPENED.</span>
          </motion.h2>

          {/* Official Source of Truth Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8E9A94] text-base sm:text-lg max-w-3xl mt-4 leading-relaxed text-center font-normal"
          >
            "A fun and engaging Marvel-themed quiz designed as a crowd-attraction activity for fans and casual participants alike. Featuring entertaining questions on Marvel characters, movies, storylines, and iconic moments, the event offers exciting goodies as prizes to encourage participation and create a lively fest atmosphere."
          </motion.p>
        </div>

        {/* Day 1 Flow Visual */}
        <div className="flex flex-wrap items-center justify-center gap-4 my-10 font-mono text-xs">
          <div className="px-4 py-2 rounded-xl glass-panel text-[#B99A45] border-[#B99A45]/30 font-bold">
            DAY 01
          </div>
          <span className="text-[#38E39A]">→</span>
          <div className="px-4 py-2 rounded-xl glass-panel text-[#38E39A] border-[#38E39A]/30 font-bold">
            MARVEL QUIZ
          </div>
          <span className="text-[#38E39A]">→</span>
          <div className="px-4 py-2 rounded-xl glass-panel text-[#F4F5F3] border-white/20 font-bold">
            THE TIMELINE OPENS
          </div>
        </div>

        {/* 4 Official Content Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((c, idx) => {
            const IconComp = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border-[#38E39A]/15 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#16A66A]/20 border border-[#38E39A]/30 flex items-center justify-center text-[#38E39A] mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#F4F5F3] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#8E9A94] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#38E39A]/10 text-[10px] font-mono text-[#38E39A]">
                  ✓ OFFICIAL CATEGORY
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informational CTA */}
        <div className="mt-12 text-center">
          <a
            href="#rounds"
            onClick={() => sounds.playClick()}
            className="btn-timeline-glow px-8 py-3.5 rounded-xl font-mono text-xs font-bold text-[#F4F5F3] shadow-emerald-glow inline-flex items-center gap-2"
          >
            <Clock className="w-4 h-4 text-[#38E39A]" />
            <span>EXPLORE EVENT STAGES & ROUNDS →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
