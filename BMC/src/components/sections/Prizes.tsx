import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';
import { eventData } from '../../data/event';
import { playUiSound } from '../../utils/soundEffects';

export const Prizes: React.FC = () => {
  if (!eventData.prizes || eventData.prizes.length === 0) return null;

  const getPrizeIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'trophy':
        return <Trophy className="h-6 w-6 text-[#00ff88]" />;
      case 'award':
        return <Award className="h-6 w-6 text-[#00c96b]" />;
      case 'medal':
        return <Medal className="h-6 w-6 text-[#f59e0b]" />;
      default:
        return <Award className="h-6 w-6 text-[#00ff88]" />;
    }
  };

  return (
    <section id="prizes" className="py-24 bg-[#050816] relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>VENTURE INCENTIVE MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-mono uppercase tracking-tight">
            PRIZE <span className="text-[#00ff88]">POOL</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            Compete for a total cash prize pool of ₹10,000 awarded to top-performing Business Model Canvas presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {eventData.prizes.map((prize, idx) => {
            const isWinner = idx === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => playUiSound('hover')}
                className={`group relative rounded-2xl p-6 sm:p-8 bg-[#070d1a] border transition-all duration-300 flex flex-col justify-between text-center ${
                  isWinner
                    ? 'border-[#00ff88] shadow-[0_0_35px_rgba(0,255,136,0.2)] bg-[#091526]'
                    : 'border-slate-800/80 hover:border-[#00ff88]/50 hover:bg-[#0b1426]'
                }`}
              >
                {/* Top Highlight Hairline Bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl ${isWinner ? 'bg-[#00ff88]' : 'bg-[#00ff88]/20 group-hover:bg-[#00ff88]'}`} />

                <div>
                  {/* Icon Circle */}
                  <div className="h-14 w-14 rounded-2xl bg-[#0e1b30] border border-[#00ff88]/30 flex items-center justify-center mb-6 mx-auto shadow-[0_0_15px_rgba(0,255,136,0.15)] group-hover:scale-110 transition-transform">
                    {getPrizeIcon(prize.icon)}
                  </div>

                  {/* Position Badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[10px] font-mono font-bold tracking-widest text-[#00ff88] mb-3 uppercase">
                    {prize.position}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white font-mono uppercase mb-2">
                    {prize.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 font-sans leading-relaxed mb-6">
                    {prize.description}
                  </p>
                </div>

                {/* Amount Box */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[9px] font-mono text-slate-500 font-bold uppercase tracking-widest block mb-1">
                    CASH AWARD
                  </span>
                  <span className="text-2xl font-black text-[#00ff88] font-mono">
                    {prize.amount}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Total Prize Pool Callout Banner */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-[#070d1a] border border-[#00ff88]/40 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <Trophy className="h-7 w-7 text-[#00ff88] flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-[#00ff88] font-bold tracking-widest uppercase block">
                VENTURE CAP POOL
              </span>
              <span className="text-xl font-black text-white font-mono">
                TOTAL PRIZE POOL — ₹10,000
              </span>
            </div>
          </div>
          <div className="text-xs font-mono font-bold text-[#00ff88] bg-[#091526] px-4 py-2 rounded-xl border border-[#00ff88]/30">
            1ST: ₹5,000 | 2ND: ₹3,000 | 3RD: ₹2,000
          </div>
        </div>

      </div>
    </section>
  );
};
