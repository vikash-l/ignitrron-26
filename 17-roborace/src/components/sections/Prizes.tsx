import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const Prizes: React.FC = () => {
  if (!eventData.prizes || eventData.prizes.length === 0) return null;

  const getPrizeIcon = (iconName: string, colorClass: string) => {
    switch (iconName.toLowerCase()) {
      case 'trophy':
        return <Trophy className={`h-8 w-8 ${colorClass}`} />;
      case 'award':
        return <Award className={`h-8 w-8 ${colorClass}`} />;
      case 'medal':
        return <Medal className={`h-8 w-8 ${colorClass}`} />;
      default:
        return <Award className={`h-8 w-8 ${colorClass}`} />;
    }
  };

  // We map the podium order on desktop: 2nd place (left), 1st place (center), 3rd place (right)
  const firstPrize = eventData.prizes[0];
  const secondPrize = eventData.prizes[1];
  const thirdPrize = eventData.prizes[2];

  return (
    <section id="prizes" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-slate-500/5 blur-[120px] pointer-events-none" />
      
      {/* Speed lines for visual flair */}
      <div className="speed-streak-fast top-1/3" />
      <div className="speed-streak bottom-1/3 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="PODIUM PRIZES"
          subtitle="Cash rewards and honors for the fastest drivers in the arena."
          badge="THE PODIUM"
        />

        {/* 3D Racing Podium Layout (Stacked on mobile, side-by-side podium on desktop) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-end justify-center max-w-5xl mx-auto mt-12 min-h-[460px] pb-10">
          
          {/* --- SECOND PLACE (LEFT) --- */}
          {secondPrize && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="w-full md:w-1/3 flex flex-col items-stretch group"
            >
              <Card
                glow={true}
                glowColor="silver"
                className="p-6 bg-zinc-900/35 border-zinc-850 hover:border-slate-450/40 text-center flex-1 flex flex-col justify-between rounded-xl relative overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="h-14 w-14 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-slate-500/30 transition-colors duration-150">
                    {getPrizeIcon(secondPrize.icon, "text-slate-300")}
                  </div>
                  
                  {/* Position Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-sm bg-zinc-950 border border-zinc-850 text-[9px] font-bold tracking-widest text-slate-400 mb-2 font-mono">
                    {secondPrize.position}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 tracking-wide font-display uppercase">
                    {secondPrize.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-450 leading-relaxed font-normal mb-5">
                    {secondPrize.description}
                  </p>
                </div>

                {/* Amount */}
                <div className="mt-auto border-t border-zinc-850 pt-4">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest block mb-0.5 font-mono">
                    REWARD AMOUNT
                  </span>
                  <span className="text-xl font-black text-slate-300 font-display">
                    {secondPrize.amount}
                  </span>
                </div>
              </Card>

              {/* Podium Step Block */}
              <div className="h-12 bg-gradient-to-b from-zinc-800 to-zinc-900 border-t border-zinc-750 flex items-center justify-center font-display font-black text-zinc-500 text-lg rounded-b-xl shadow-lg mt-1 hidden md:flex">
                2ND
              </div>
            </motion.div>
          )}

          {/* --- FIRST PLACE (CENTER, ELEVATED) --- */}
          {firstPrize && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="w-full md:w-1/3 flex flex-col items-stretch md:scale-105 z-10 group"
            >
              {/* Active speed trails behind winner (1st Position) */}
              <div className="absolute inset-0 bg-radial-gradient from-sky-400/5 via-transparent to-transparent opacity-60 pointer-events-none blur-[40px] group-hover:opacity-100 transition-opacity duration-300" />
              
              <Card
                glow={true}
                glowColor="chrome"
                className="p-6 bg-zinc-900/60 backdrop-blur-md border-slate-500/20 hover:border-slate-350/40 text-center flex-1 flex flex-col justify-between rounded-xl relative shadow-2xl overflow-hidden shadow-sky-500/5 ring-1 ring-sky-500/10"
              >
                {/* Horizontal speed trail sweep inside card on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-[streak-move_0.9s_infinite_linear]" />
                </div>

                <div className="flex flex-col items-center relative z-10">
                  {/* Glowing Icon Container */}
                  <div className="h-16 w-16 rounded-full bg-zinc-950 border border-sky-950 flex items-center justify-center mb-4 group-hover:border-sky-450 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-150">
                    {getPrizeIcon(firstPrize.icon, "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] animate-bounce")}
                  </div>
                  
                  {/* Position Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-sm bg-sky-950/40 border border-sky-900/40 text-[9px] font-bold tracking-widest text-sky-450 mb-2 font-mono">
                    {firstPrize.position}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-black text-white mb-2 tracking-wide font-display uppercase text-glow-silver">
                    {firstPrize.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-normal mb-5">
                    {firstPrize.description}
                  </p>
                </div>

                {/* Amount */}
                <div className="mt-auto border-t border-zinc-800 pt-4 relative z-10">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest block mb-0.5 font-mono">
                    REWARD AMOUNT
                  </span>
                  <span className="text-2xl font-black text-chrome font-display text-glow-silver">
                    {firstPrize.amount}
                  </span>
                </div>
              </Card>

              {/* Podium Step Block */}
              <div className="h-20 bg-gradient-to-b from-slate-200 to-zinc-400 border-t border-white/20 flex items-center justify-center font-display font-black text-zinc-900 text-2xl rounded-b-xl shadow-2xl mt-1 hidden md:flex">
                1ST
              </div>
            </motion.div>
          )}

          {/* --- THIRD PLACE (RIGHT) --- */}
          {thirdPrize && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="w-full md:w-1/3 flex flex-col items-stretch group"
            >
              <Card
                glow={true}
                glowColor="silver"
                className="p-6 bg-zinc-900/35 border-zinc-850 hover:border-slate-450/40 text-center flex-1 flex flex-col justify-between rounded-xl relative overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="h-14 w-14 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-slate-500/30 transition-colors duration-150">
                    {getPrizeIcon(thirdPrize.icon, "text-zinc-450")}
                  </div>
                  
                  {/* Position Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-sm bg-zinc-950 border border-zinc-850 text-[9px] font-bold tracking-widest text-slate-400 mb-2 font-mono">
                    {thirdPrize.position}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 tracking-wide font-display uppercase">
                    {thirdPrize.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-450 leading-relaxed font-normal mb-5">
                    {thirdPrize.description}
                  </p>
                </div>

                {/* Amount */}
                <div className="mt-auto border-t border-zinc-850 pt-4">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest block mb-0.5 font-mono">
                    REWARD AMOUNT
                  </span>
                  <span className="text-xl font-black text-slate-400 font-display">
                    {thirdPrize.amount}
                  </span>
                </div>
              </Card>

              {/* Podium Step Block */}
              <div className="h-8 bg-gradient-to-b from-zinc-850 to-zinc-950 border-t border-zinc-800 flex items-center justify-center font-display font-black text-zinc-650 text-base rounded-b-xl shadow-lg mt-1 hidden md:flex">
                3RD
              </div>
            </motion.div>
          )}

        </div>

        {/* Total Prize Pool Banner (₹30,000) */}
        <div className="mt-12 text-center relative">
          <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest block mb-2 font-mono">
            TOTAL CASH POOL
          </span>
          <div className="inline-block px-8 py-3 rounded border border-slate-750 bg-zinc-950 relative overflow-hidden shadow-2xl">
            <span className="text-3xl sm:text-4xl font-black text-chrome font-display tracking-widest uppercase">
              ₹30,000
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
