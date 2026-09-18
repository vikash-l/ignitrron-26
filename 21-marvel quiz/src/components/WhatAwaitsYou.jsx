import React from 'react';
import { motion } from 'framer-motion';
import { Users, Film, BookOpen, Star, Sparkles } from 'lucide-react';
import { WHAT_AWAITS_CATEGORIES } from '../data/quizData';

export const WhatAwaitsYou = () => {
  const icons = [Users, Film, BookOpen, Star];

  return (
    <section id="highlights" className="relative py-24 bg-[#07100B]/60 overflow-hidden border-t border-[#38E39A]/15">
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
              MULTIVERSE CONTENT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            WHAT <span className="text-[#B99A45] font-mono">AWAITS YOU</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base sm:text-lg max-w-2xl mt-3 font-normal leading-relaxed"
          >
            "Step into the Marvel universe and challenge your knowledge of legendary characters, unforgettable movies, iconic storylines, and moments every Marvel fan remembers."
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WHAT_AWAITS_CATEGORIES.map((item, idx) => {
            const IconComp = icons[idx];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border-[#38E39A]/20 glass-panel-hover flex flex-col justify-between relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38E39A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xl font-extrabold text-[#B99A45]">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#16A66A]/20 border border-[#38E39A]/40 flex items-center justify-center text-[#38E39A] group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#F4F5F3] mb-3 group-hover:text-[#38E39A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#8E9A94] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#38E39A]/10 flex items-center justify-between text-[10px] font-mono text-[#B99A45]">
                  <span>CATEGORY {item.number}</span>
                  <span className="text-[#38E39A]">✦ FEATURED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
