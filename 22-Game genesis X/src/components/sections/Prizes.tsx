import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Award, Medal, Users, ShieldCheck } from 'lucide-react';
import { EventConfig } from '../../types/event';

interface PrizesProps {
  event: EventConfig;
}

export const Prizes: React.FC<PrizesProps> = ({ event }) => {
  if (!event.prizes || event.prizes.length === 0) return null;

  const suits = ['♠', '♥', '♦'];

  return (
    <section id="prizes" className="py-24 bg-transparent relative z-10 overflow-hidden border-t border-[#1F0A1C]">
      
      {/* RULE 9 BACKGROUND ENHANCEMENTS FOR PRIZES */}
      
      {/* 1. Far Left & Far Right Faint Suit Motifs */}
      <div className="absolute top-[20%] left-[3%] text-[#8F26FF]/10 font-mono text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl select-none pointer-events-none">
        ♠
      </div>
      <div className="absolute top-[25%] right-[3%] text-[#FF3BE6]/10 font-mono text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl select-none pointer-events-none">
        ♦
      </div>

      {/* 2. Thin Curved Magenta Energy Trail Between Cards */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0">
        <path
          d="M 50 250 Q 500 150 950 280 T 1450 200"
          stroke="url(#prizeGrad)"
          strokeWidth="1.5"
          fill="none"
        />
        <defs>
          <linearGradient id="prizeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8F26FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF3BE6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8F26FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Tiny Floating Energy Particles Near Bottom */}
      {[
        { top: '85%', left: '25%', size: 'w-1 h-1', color: 'bg-[#FF3BE6]/30', delay: 0 },
        { top: '90%', left: '50%', size: 'w-1.5 h-1.5', color: 'bg-[#E626FF]/35', delay: 1 },
        { top: '82%', left: '75%', size: 'w-1 h-1', color: 'bg-[#8F26FF]/30', delay: 2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full pointer-events-none ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono text-[#E626FF] uppercase tracking-widest block mb-2 font-bold">
            REWARDS & GRANTS
          </span>
          <h2 className="text-3xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            THE FINAL HAND
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6B1FDB] to-[#FF3BE6] mt-4 rounded-full"></div>
        </div>

        {/* Podium Playing-Card Style Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12 relative">
          
          {/* Faint Oversized Playing Card Silhouette Behind First-Place Card */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-full max-w-[340px] h-[520px] border border-[#FF3BE6]/15 rounded-2xl opacity-10 pointer-events-none rotate-[-4deg] flex flex-col justify-between p-6">
            <span className="font-mono text-3xl text-[#FF3BE6]">A</span>
            <span className="font-mono text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl md:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl lg:text-8xl text-[#FF3BE6] self-center">♠</span>
            <span className="font-mono text-3xl text-[#FF3BE6] self-end rotate-180">A</span>
          </div>

          {event.prizes.map((prize, idx) => {
            const isFirst = prize.highlighted || prize.position.includes('01');
            const suitSymbol = suits[idx % suits.length];

            return (
              <motion.div
                key={prize.position}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${isFirst ? 'md:-translate-y-4 order-first md:order-none relative z-10' : 'relative z-0'}`}
              >
                <div
                  className={`h-full flex flex-col justify-between p-8 rounded-xl relative overflow-hidden transition-all ${
                    isFirst
                      ? 'bg-[#1c0824] border-2 border-[#FF3BE6] shadow-[0_0_40px_rgba(255,59,230,0.35)]'
                      : 'bg-[#160814] border border-[#1F0A1C]'
                  }`}
                >
                  {/* Suit Corner Details */}
                  <div className="flex items-center justify-between font-mono text-xs text-[#E626FF] mb-2">
                    <span className="font-bold text-sm">{suitSymbol}</span>
                    <span>{prize.position}</span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase ${
                        isFirst ? 'bg-[#FF3BE6]/20 text-[#FF3BE6] border border-[#FF3BE6]/40' : 'bg-[#1F0A1C] text-[#B8B0C4]'
                      }`}>
                        {prize.title}
                      </span>

                      <div className={`w-10 h-10 rounded flex items-center justify-center ${
                        isFirst ? 'bg-[#050408] text-[#FF3BE6] border border-[#FF3BE6]' : 'bg-[#050408] text-[#E626FF]'
                      }`}>
                        {isFirst ? <Crown className="w-5 h-5" /> : idx === 1 ? <Award className="w-5 h-5" /> : <Medal className="w-5 h-5" />}
                      </div>
                    </div>

                    {/* Reward Amount (First Place Receives Strongest Emphasis) */}
                    <div className={`text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-mono my-4 tracking-tight ${
                      isFirst ? 'text-[#FF3BE6] glow-pink' : 'text-white'
                    }`}>
                      {prize.reward}
                    </div>

                    <p className="text-sm text-[#B8B0C4] leading-relaxed mb-6 font-sans">
                      {prize.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1F0A1C] flex items-center justify-between text-xs font-mono text-[#E626FF]">
                    <span>IN.ZEROS AWARD</span>
                    <Sparkles className="w-4 h-4 text-[#FF3BE6]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Opportunities: InZeros Mentorship & Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#160814] p-6 rounded-xl border border-[#1F0A1C] flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded bg-[#050408] border border-[#8F26FF] flex items-center justify-center text-[#E626FF] flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display mb-1 uppercase">
                IN.ZEROS MENTORSHIP
              </h4>
              <p className="text-sm text-[#B8B0C4] leading-relaxed font-sans">
                Potential mentorship opportunities with the InZeros leadership team for promising pitch projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#160814] p-6 rounded-xl border border-[#1F0A1C] flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded bg-[#050408] border border-[#8F26FF] flex items-center justify-center text-[#FF3BE6] flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display mb-1 uppercase">
                PARTICIPATION CERTIFICATES
              </h4>
              <p className="text-sm text-[#B8B0C4] leading-relaxed font-sans">
                Official participation certificates awarded to all participating team members in Game Genesis X.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
