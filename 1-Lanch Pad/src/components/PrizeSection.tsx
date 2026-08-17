import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/soundFx';

export const PrizeSection: React.FC = () => {
  const prizes = [
    {
      place: '01',
      title: '1ST PLACE',
      amount: '₹3,000',
      tagline: 'GRAND CHAMPIONS',
      badgeBg: 'bg-[#ff003c]',
      border: 'border-[#ff003c]',
      shadow: 'shadow-spider-red',
      icon: <Trophy className="w-12 h-12 text-[#ffff00] animate-bounce" />,
      color: '#ff003c'
    },
    {
      place: '02',
      title: '2ND PLACE',
      amount: '₹2,000',
      tagline: 'RUNNER UP',
      badgeBg: 'bg-[#00f0ff]',
      border: 'border-[#00f0ff]',
      shadow: 'shadow-spider-blue',
      icon: <Award className="w-10 h-10 text-[#00f0ff]" />,
      color: '#00f0ff'
    },
    {
      place: '03',
      title: '3RD PLACE',
      amount: '₹1,000',
      tagline: 'SECOND RUNNER UP',
      badgeBg: 'bg-[#bf00ff]',
      border: 'border-[#bf00ff]',
      shadow: 'shadow-spider-dual',
      icon: <Medal className="w-10 h-10 text-[#bf00ff]" />,
      color: '#bf00ff'
    }
  ];

  return (
    <section id="prizes" className="relative py-28 px-4 bg-[#0a0a0c] overflow-hidden border-t border-white/10">
      {/* Dynamic Glow Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#ff003c]/20 via-[#00f0ff]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-halftone-red opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121216] border border-[#ff003c] text-[#ff003c] font-space text-xs tracking-widest uppercase font-bold mb-4 shadow-glow-red">
          <Sparkles className="w-4 h-4 text-[#00f0ff]" />
          OFFICIAL BOUNTY POOL
        </div>

        <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl text-white tracking-wider uppercase mb-2 drop-shadow-[4px_4px_0px_#ff003c]">
          PRIZE POOL
        </h2>

        <div className="inline-block px-6 py-2 bg-black border-2 border-[#00f0ff] rounded-lg mb-14 shadow-spider-blue">
          <span className="font-space text-xs text-gray-400 uppercase tracking-widest">TOTAL LAUNCHPAD PRIZE POOL</span>
          <h3 className="font-anton text-4xl sm:text-5xl text-[#00f0ff] tracking-wider">
            ₹6,000
          </h3>
        </div>

        {/* 3 Visually Distinct Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-end">
          {prizes.map((prize) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => soundFx.playClick()}
              className={`relative p-8 bg-[#121216] border-4 ${prize.border} rounded-2xl ${prize.shadow} flex flex-col items-center group transition-all duration-300 transform hover:scale-[1.04]`}
            >
              {/* Comic Numbering 01, 02, 03 */}
              <div className="absolute -top-6 left-6 font-anton text-6xl text-white drop-shadow-[3px_3px_0px_#0a0a0c]">
                {prize.place}
              </div>

              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-black border-2 rounded-full shadow-lg group-hover:scale-110 transition-transform" style={{ borderColor: prize.color }}>
                {prize.icon}
              </div>

              <span className="font-bebas text-lg text-gray-400 tracking-wider">
                {prize.title}
              </span>

              <h4 className="font-anton text-5xl sm:text-6xl text-white tracking-wider my-2">
                {prize.amount}
              </h4>

              <div className={`px-4 py-1 font-bebas text-sm text-black font-bold tracking-wider rounded uppercase ${prize.badgeBg}`}>
                {prize.tagline}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
