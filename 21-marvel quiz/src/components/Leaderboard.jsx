import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MOCK_LEADERBOARD } from '../data/quizData';
import { Crown, Search, ExternalLink } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeaderboard = MOCK_LEADERBOARD.filter((v) =>
    v.variantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const top3 = MOCK_LEADERBOARD.slice(0, 3);

  return (
    <section id="leaderboard" className="relative py-24 bg-[#050706] overflow-hidden">
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
            <Crown className="w-3.5 h-3.5 text-[#B99A45]" />
            <span className="font-mono text-xs text-[#E1C66A] tracking-[0.25em]">MULTIVERSE STANDINGS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            THE VARIANT <span className="text-[#B99A45] font-mono">ARCHIVE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base max-w-lg mt-2 font-normal"
          >
            High-ranking variants across all timeline streams. Top performers earn official Ignitrron Marvel Quiz honors.
          </motion.p>
        </div>

        {/* Top 3 Podium Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* #2 Rank */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-6 rounded-3xl border-[#38E39A]/30 flex flex-col items-center text-center relative order-2 md:order-1 mt-0 md:mt-6"
          >
            <div className="w-10 h-10 rounded-full bg-[#16A66A]/20 border border-[#38E39A]/50 flex items-center justify-center font-mono text-sm font-bold text-[#38E39A] mb-3">
              #2
            </div>
            <span className="font-display font-bold text-lg text-[#F4F5F3] mb-1">
              {top3[1].variantName}
            </span>
            <span className="font-mono text-xs text-[#38E39A] font-bold mb-3">
              {top3[1].status}
            </span>
            <div className="w-full pt-3 border-t border-[#38E39A]/10 flex items-center justify-around font-mono text-xs text-[#8E9A94]">
              <span>SCORE: <strong className="text-[#F4F5F3]">{top3[1].score}</strong></span>
              <span>TIME: <strong className="text-[#38E39A]">{top3[1].time}</strong></span>
            </div>
          </motion.div>

          {/* #1 Rank */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border-[#B99A45]/60 bg-[#07100B]/95 shadow-gold-glow flex flex-col items-center text-center relative order-1 md:order-2 scale-105 border-2"
          >
            <div className="absolute -top-4 px-4 py-1 rounded-full bg-[#B99A45] text-[#030504] font-mono text-[10px] font-extrabold tracking-widest uppercase shadow-md flex items-center gap-1">
              <Crown className="w-3 h-3 fill-[#030504]" />
              SUPREME VARIANT
            </div>

            <div className="w-14 h-14 rounded-full bg-[#B99A45]/20 border-2 border-[#B99A45] flex items-center justify-center font-mono text-xl font-extrabold text-[#E1C66A] my-2 shadow-[0_0_20px_#B99A45]">
              #1
            </div>

            <span className="font-display font-extrabold text-xl text-[#F4F5F3] mb-1">
              {top3[0].variantName}
            </span>
            <span className="font-mono text-xs text-[#E1C66A] font-extrabold mb-4 tracking-wider">
              {top3[0].status}
            </span>

            <div className="w-full pt-4 border-t border-[#B99A45]/20 flex items-center justify-around font-mono text-xs text-[#8E9A94]">
              <span>SCORE: <strong className="text-[#E1C66A] font-bold text-sm">{top3[0].score}</strong></span>
              <span>ACCURACY: <strong className="text-[#38E39A] font-bold text-sm">{top3[0].accuracy}%</strong></span>
            </div>
          </motion.div>

          {/* #3 Rank */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6 rounded-3xl border-[#38E39A]/30 flex flex-col items-center text-center relative order-3 mt-0 md:mt-6"
          >
            <div className="w-10 h-10 rounded-full bg-[#16A66A]/20 border border-[#38E39A]/50 flex items-center justify-center font-mono text-sm font-bold text-[#38E39A] mb-3">
              #3
            </div>
            <span className="font-display font-bold text-lg text-[#F4F5F3] mb-1">
              {top3[2].variantName}
            </span>
            <span className="font-mono text-xs text-[#38E39A] font-bold mb-3">
              {top3[2].status}
            </span>
            <div className="w-full pt-3 border-t border-[#38E39A]/10 flex items-center justify-around font-mono text-xs text-[#8E9A94]">
              <span>SCORE: <strong className="text-[#F4F5F3]">{top3[2].score}</strong></span>
              <span>TIME: <strong className="text-[#38E39A]">{top3[2].time}</strong></span>
            </div>
          </motion.div>

        </div>

        {/* Search & Filter Bar */}
        <div className="glass-panel p-4 rounded-2xl mb-6 border-[#38E39A]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8E9A94] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter variant or rank status..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07100B] border border-[#38E39A]/20 text-xs font-mono text-[#F4F5F3] focus:outline-none focus:border-[#38E39A]"
            />
          </div>

          <div className="font-mono text-xs text-[#8E9A94] flex items-center gap-2">
            <span>ARCHIVE RECORD COUNT:</span>
            <span className="text-[#38E39A] font-bold">{filteredLeaderboard.length} VARIANTS</span>
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="glass-panel rounded-3xl border-[#38E39A]/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#07100B] text-[#8E9A94] uppercase tracking-wider border-b border-[#38E39A]/15">
                <tr>
                  <th className="py-4 px-6">RANK</th>
                  <th className="py-4 px-6">VARIANT NAME</th>
                  <th className="py-4 px-6">SCORE</th>
                  <th className="py-4 px-6">ACCURACY</th>
                  <th className="py-4 px-6">TIME</th>
                  <th className="py-4 px-6">CLASSIFICATION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#38E39A]/10">
                {filteredLeaderboard.map((variant) => {
                  const isGold = variant.rank === 1;
                  const isTop3 = variant.rank <= 3;

                  return (
                    <tr
                      key={variant.rank}
                      className={`hover:bg-[#16A66A]/10 transition-colors ${
                        isGold ? 'bg-[#B99A45]/5' : ''
                      }`}
                    >
                      <td className="py-4 px-6 font-bold">
                        <span className={`inline-block px-2.5 py-1 rounded-md ${
                          isGold ? 'bg-[#B99A45] text-[#030504]' : isTop3 ? 'bg-[#38E39A]/20 text-[#38E39A]' : 'text-[#8E9A94]'
                        }`}>
                          #{variant.rank}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-display font-semibold text-sm text-[#F4F5F3]">
                        {variant.variantName}
                      </td>
                      <td className="py-4 px-6 font-bold text-[#38E39A]">
                        {variant.score} PTS
                      </td>
                      <td className="py-4 px-6 text-[#8E9A94]">
                        {variant.accuracy}%
                      </td>
                      <td className="py-4 px-6 text-[#8E9A94]">
                        {variant.time}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                          isGold
                            ? 'border-[#B99A45]/50 text-[#E1C66A] bg-[#B99A45]/10'
                            : 'border-[#38E39A]/30 text-[#38E39A] bg-[#16A66A]/10'
                        }`}>
                          {variant.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-[#8E9A94] mb-4">
            Official Day 01 Event of IGNITRRON'26 Techno-Management Festival
          </p>
          <a
            href="https://ignitrron-events-website.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="btn-timeline-glow px-8 py-3.5 rounded-xl font-mono text-xs font-bold text-[#F4F5F3] shadow-emerald-glow inline-flex items-center gap-2"
          >
            <span>VISIT OFFICIAL IGNITRRON FESTIVAL PORTAL</span>
            <ExternalLink className="w-4 h-4 text-[#B99A45]" />
          </a>
        </div>

      </div>
    </section>
  );
};
