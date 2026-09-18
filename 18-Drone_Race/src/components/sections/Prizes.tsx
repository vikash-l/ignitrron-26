import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const Prizes: React.FC = () => {
  const prizeList = [
    {
      place: '01 // CHAMPION',
      rank: '1ST PRIZE',
      amount: '₹15,000',
      description: 'First place cash prize, trophy, winner certificate, and aerospace excellence award.',
      icon: Trophy,
      highlight: true
    },
    {
      place: '02 // RUNNER-UP',
      rank: '2ND PRIZE',
      amount: '₹10,000',
      description: 'Second place cash prize, runner-up certificate, and flight performance recognition.',
      icon: Award,
      highlight: false
    },
    {
      place: '03 // 2ND RUNNER-UP',
      rank: '3RD PRIZE',
      amount: '₹5,000',
      description: 'Third place cash prize, second runner-up certificate, and merit distinction.',
      icon: Medal,
      highlight: false
    }
  ];

  return (
    <section id="prizes" className="py-24 relative overflow-hidden border-t border-[#d6a84f]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="05"
          badge="TACTICAL REWARDS"
          title="PRIZE POOL"
          subtitle="Compete for a total cash prize pool of ₹30,000 across top aerospace flight performances."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {prizeList.map((prize, idx) => {
            const IconComp = prize.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`tech-panel rounded-xl p-6 sm:p-7 border flex flex-col justify-between text-center transition-all duration-300 shadow-lg relative overflow-hidden group ${
                  prize.highlight
                    ? 'border-[#d6a84f] bg-[#121b1e] shadow-[0_0_30px_rgba(214,168,79,0.25)]'
                    : 'border-[#d6a84f]/25 bg-[#0b1012]/90 hover:border-[#d6a84f]/60 hover:bg-[#121b1e]'
                }`}
              >
                {/* Top highlight bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${prize.highlight ? 'bg-[#d6a84f]' : 'bg-[#d6a84f]/20 group-hover:bg-[#d6a84f]'}`} />

                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#141c20] border border-[#d6a84f]/40 text-[#f2d58a] mb-4 mx-auto shadow-[0_0_15px_rgba(214,168,79,0.2)]">
                    <IconComp className="h-6 w-6" />
                  </div>

                  <span className="font-mono-tech text-[10px] text-[#f2d58a] tracking-widest uppercase font-bold block mb-1">
                    {prize.place}
                  </span>

                  <h3 className="font-display text-lg font-black text-[#f3f3ef] tracking-wider uppercase mb-2">
                    {prize.rank}
                  </h3>

                  <div className="font-mono-tech text-3xl font-black text-[#f2d58a] my-3 tracking-tight">
                    {prize.amount}
                  </div>

                  <p className="text-[#879296] text-xs leading-relaxed font-normal">
                    {prize.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#d6a84f]/15 flex items-center justify-between font-mono-tech text-[9px] text-[#879296]">
                  <span>IGNITRRON 26</span>
                  <span className="text-[#f2d58a]">VERIFIED REWARD</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Total Prize Pool Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <div className="tech-panel rounded-xl p-5 border border-[#d6a84f]/40 bg-[#0e1518]/90 flex items-center justify-between flex-col sm:flex-row gap-4 text-center sm:text-left shadow-lg">
            <div className="flex items-center gap-3">
              <Trophy className="h-7 w-7 text-[#f2d58a] flex-shrink-0" />
              <div>
                <span className="font-mono-tech text-[10px] text-[#f2d58a] font-bold tracking-widest uppercase block">
                  TOTAL ARENA REWARDS
                </span>
                <span className="font-display font-black text-xl text-[#f3f3ef]">
                  TOTAL PRIZE POOL — ₹30,000
                </span>
              </div>
            </div>
            <div className="font-mono-tech text-xs font-bold text-[#f2d58a] bg-[#141c20] px-4 py-2 rounded border border-[#d6a84f]/40">
              1ST: ₹15,000 | 2ND: ₹10,000 | 3RD: ₹5,000
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
