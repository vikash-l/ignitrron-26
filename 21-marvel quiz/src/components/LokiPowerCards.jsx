import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LokiVisual } from './LokiVisual';
import { Eye, Clock, Layers, Sparkles, Wand2 } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const LokiPowerCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const powers = [
    {
      id: 'illusion',
      title: 'ILLUSION',
      tagline: 'Duplication & Sensory Misdirection',
      description: 'Loki projects translucent duplicates to deceive mortal senses. Hover over this card to witness reality duplicate.',
      icon: Eye,
      accent: '#35D98B',
    },
    {
      id: 'time',
      title: 'TIME CONTROL',
      tagline: 'Temporal Slipping & Reality Anchors',
      description: 'Mastery over raw time threads allows Loki to freeze, slip, and re-weave past and future timelines.',
      icon: Clock,
      accent: '#C8A951',
    },
    {
      id: 'variants',
      title: 'VARIANTS',
      tagline: 'Branching Realities & Infinite Selves',
      description: 'Every decision fractures reality into new variants. Navigating these streams requires supreme multiversal intellect.',
      icon: Layers,
      accent: '#16A36A',
    },
    {
      id: 'magic',
      title: 'EMERALD MAGIC',
      tagline: 'Asgardian Telekinesis & Energy Ribbons',
      description: 'Raw Asgardian green energy flows through every interaction, powering the timeline simulation interface.',
      icon: Sparkles,
      accent: '#E1C66A',
    },
  ];

  return (
    <section className="relative py-28 bg-[#050706] overflow-hidden border-t border-[#35D98B]/15">
      <div className="absolute inset-0 bg-timeline-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#C8A951]/40 mb-3"
          >
            <Wand2 className="w-3.5 h-3.5 text-[#C8A951]" />
            <span className="font-mono text-xs text-[#E1C66A] tracking-[0.3em]">
              THE ARCHITECT OF CHAOS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F7F5]"
          >
            THE GOD OF <span className="text-[#35D98B] font-mono">MISCHIEF</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#C8A951] font-mono text-sm sm:text-base font-semibold mt-2 tracking-widest"
          >
            "EVERY ANSWER CREATES ANOTHER TIMELINE."
          </motion.p>
        </div>

        {/* 2-Column Layout: Left Integrated Loki Silhouette + Right 4 Power Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Integrated Loki Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <LokiVisual size="large" showIllusions={true} />
          </motion.div>

          {/* Right Column: 4 Loki Power Cards with Custom Interactive Behaviors */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-6">
            {powers.map((p, idx) => {
              const IconComp = p.icon;
              const isHovered = hoveredCard === p.id;

              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={() => {
                    sounds.playHover();
                    setHoveredCard(p.id);
                  }}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative p-6 rounded-3xl transition-all duration-300 overflow-hidden cursor-pointer ${
                    isHovered
                      ? 'glass-panel bg-[#0A100D]/95 border-[#35D98B] shadow-emerald-lg scale-[1.02]'
                      : 'glass-panel border-[#35D98B]/15'
                  }`}
                >
                  {/* MAGIC POWER CARD BEHAVIOR: Flowing Green Energy Border on Hover */}
                  {p.id === 'magic' && isHovered && (
                    <div className="absolute inset-0 border-2 border-[#35D98B] rounded-3xl animate-pulse pointer-events-none shadow-[0_0_25px_#35D98B]" />
                  )}

                  {/* VARIANTS POWER CARD BEHAVIOR: Ghost Clone Cards Splitting on Hover */}
                  {p.id === 'variants' && isHovered && (
                    <div className="absolute inset-0 pointer-events-none opacity-30 border border-[#16A36A] rounded-3xl translate-x-2 translate-y-2" />
                  )}

                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#16A36A]/20 border border-[#35D98B]/30 flex items-center justify-center text-[#35D98B]">
                      <IconComp className={`w-5 h-5 ${p.id === 'time' && isHovered ? 'animate-spin' : ''}`} />
                    </div>
                    <span className="font-mono text-[10px] text-[#C8A951] font-bold tracking-widest">
                      POWER // 0{idx + 1}
                    </span>
                  </div>

                  {/* ILLUSION POWER CARD BEHAVIOR: Duplicated Ghost Text on Hover */}
                  <div className="relative">
                    <h3 className="font-display font-extrabold text-xl text-[#F4F7F5] mb-1">
                      {p.title}
                    </h3>
                    {p.id === 'illusion' && isHovered && (
                      <span className="absolute top-0 left-0 font-display font-extrabold text-xl text-[#35D98B]/50 translate-x-1 translate-y-1 pointer-events-none">
                        {p.title}
                      </span>
                    )}
                  </div>

                  <span className="font-mono text-xs text-[#35D98B] font-semibold block mb-2">
                    {p.tagline}
                  </span>

                  <p className="text-xs text-[#8E9A94] leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#35D98B]/10 flex items-center justify-between font-mono text-[10px] text-[#8E9A94]">
                    <span>MANIPULATION: <strong className="text-[#35D98B]">ACTIVE</strong></span>
                    <span className="text-[#C8A951]">READING TIMELINE...</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
