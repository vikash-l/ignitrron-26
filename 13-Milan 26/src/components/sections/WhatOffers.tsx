import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Lightbulb, Handshake, Globe, Shield, Sparkles } from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';
import type { OfferItem } from '../../data/milanData';

export const WhatOffers: React.FC = () => {
  const getOfferIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-7 h-7 text-blue-400" />;
      case 'Target':
        return <Target className="w-7 h-7 text-red-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-7 h-7 text-amber-400" />;
      case 'Handshake':
        return <Handshake className="w-7 h-7 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-7 h-7 text-cyan-400" />;
      default:
        return <Shield className="w-7 h-7 text-blue-400" />;
    }
  };

  return (
    <section id="offerings" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#1D4ED8]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>EXECUTIVE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron text-white tracking-tight">
            WHAT MILAN '26 OFFERS
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-space">
            Five strategic vectors architected to empower the next generation of visionary leaders
            and technological pioneers.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-white to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 5 Premium Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MILAN_DATA.offers.map((item: OfferItem, idx: number) => {
            const isLast = idx === 4; // 5th card styling for grid balance
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-2xl glass-shield p-8 flex flex-col justify-between hover:glass-shield-elevated transition-all duration-300 hover:-translate-y-2 border border-slate-700/60 hover:border-blue-400/50 ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top Corner HUD accent */}
                <div className="absolute top-3 right-3 flex items-center space-x-2">
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                    {item.protocolCode}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-red-500 transition-colors" />
                </div>

                <div className="space-y-5">
                  {/* Icon Badge */}
                  <div className="w-14 h-14 rounded-xl bg-slate-900/90 border border-slate-700/70 group-hover:border-blue-400/60 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {getOfferIcon(item.icon)}
                  </div>

                  {/* Tag Pill */}
                  <div className="inline-block px-2.5 py-0.5 rounded bg-blue-950/50 border border-blue-500/30 text-[10px] font-mono font-semibold tracking-wider text-blue-300 uppercase">
                    {item.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-slate-400 font-semibold group-hover:text-slate-200 transition-colors">
                    TACTICAL VECTOR 0{idx + 1}
                  </span>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
