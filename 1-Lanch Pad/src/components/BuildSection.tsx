import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DELIVERABLES_DATA, type DeliverableItem } from '../utils/domainsData';
import { Sparkles, Layers } from 'lucide-react';
import { soundFx } from '../utils/soundFx';


export const BuildSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<DeliverableItem>(DELIVERABLES_DATA[0]);

  return (
    <section id="build" className="relative py-28 px-4 bg-[#0a0a0c] overflow-hidden border-t border-white/10">
      {/* Halftone & Glow Overlays */}
      <div className="absolute inset-0 bg-halftone-blue opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff003c]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 border-b-2 border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-anton text-6xl md:text-8xl text-[#00f0ff] leading-none drop-shadow-[4px_4px_0px_#ff003c]">
                02
              </span>
              <div className="flex flex-col">
                <span className="font-space text-xs tracking-widest text-[#ff003c] uppercase font-bold">
                  PHASE 02 — THE BRAND SYSTEM
                </span>
                <h2 className="font-anton text-4xl sm:text-6xl text-white tracking-wider uppercase">
                  BUILD
                </h2>
              </div>
            </div>
            <h3 className="font-bebas text-2xl sm:text-3xl text-gray-300 tracking-wide mt-2">
              CREATE YOUR BRAND
            </h3>
          </div>

          <p className="font-space text-sm sm:text-base text-gray-400 max-w-md">
            Turn your concept into a complete brand identity. The individual components assemble into a powerhouse identity.
          </p>
        </div>

        {/* Central Assembling Brand Matrix Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Deliverables 01 - 03 */}
          <div className="lg:col-span-4 space-y-4">
            {DELIVERABLES_DATA.slice(0, 3).map((item) => {
              const isActive = activeItem.number === item.number;
              return (
                <motion.div
                  key={item.number}
                  whileHover={{ x: 6 }}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveItem(item);
                  }}
                  className={`p-5 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-[#121216] border-[#ff003c] shadow-spider-red'
                      : 'bg-black/40 border-white/10 hover:border-[#00f0ff]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-anton text-lg text-[#00f0ff]">{item.number}</span>
                    <span className="font-space text-[10px] tracking-widest text-gray-400 px-2 py-0.5 bg-black rounded">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-anton text-xl text-white tracking-wide mt-1 uppercase">
                    {item.title}
                  </h4>
                  <p className="font-bebas text-sm text-[#ff003c] mt-0.5">
                    {item.subtext}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Center Core: YOUR BRAND Assembling Nucleus */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center my-6 lg:my-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex flex-col items-center justify-center bg-[#121216] rounded-full border-4 border-[#ff003c] shadow-glow-red p-6 text-center">
              {/* Rotating Web Geometry Ring */}
              <svg className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" viewBox="0 0 300 300">
                <circle cx="150" cy="150" r="140" fill="none" stroke="#00f0ff" strokeWidth="2" strokeDasharray="10 15" />
                <circle cx="150" cy="150" r="120" fill="none" stroke="#ff003c" strokeWidth="1" strokeDasharray="5 10" />
              </svg>

              <Layers className="w-10 h-10 text-[#00f0ff] mb-2 animate-bounce" />
              <span className="font-space text-xs tracking-widest text-[#ff003c] uppercase font-bold">
                THE NUCLEUS
              </span>
              <h3 className="font-anton text-3xl sm:text-4xl text-white tracking-wider uppercase my-1">
                YOUR BRAND
              </h3>
              <div className="px-3 py-1 bg-[#ff003c] text-white font-bebas text-xs tracking-wider rounded uppercase">
                A COMPLETE BRAND
              </div>
            </div>
          </div>

          {/* Right Column: Deliverables 04 - 06 */}
          <div className="lg:col-span-4 space-y-4">
            {DELIVERABLES_DATA.slice(3, 6).map((item) => {
              const isActive = activeItem.number === item.number;
              return (
                <motion.div
                  key={item.number}
                  whileHover={{ x: -6 }}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveItem(item);
                  }}
                  className={`p-5 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-[#121216] border-[#00f0ff] shadow-spider-blue'
                      : 'bg-black/40 border-white/10 hover:border-[#ff003c]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-anton text-lg text-[#ff003c]">{item.number}</span>
                    <span className="font-space text-[10px] tracking-widest text-gray-400 px-2 py-0.5 bg-black rounded">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-anton text-xl text-white tracking-wide mt-1 uppercase">
                    {item.title}
                  </h4>
                  <p className="font-bebas text-sm text-[#00f0ff] mt-0.5">
                    {item.subtext}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Selected Component Inspection Card */}
        <motion.div
          key={activeItem.number}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 p-8 bg-[#121216] border-2 border-white/20 rounded-xl relative overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-anton text-2xl text-[#ff003c]">{activeItem.number}</span>
                <span className="font-space text-xs text-[#00f0ff] tracking-widest uppercase font-bold">
                  // COMPONENT SPECIFICATION
                </span>
              </div>
              <h3 className="font-anton text-3xl sm:text-4xl text-white uppercase tracking-wider mb-2">
                {activeItem.title}
              </h3>
              <p className="font-inter text-base text-gray-300 max-w-2xl">
                {activeItem.description}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black px-6 py-4 rounded-lg border border-white/10">
              <Sparkles className="w-6 h-6 text-[#00f0ff]" />
              <div className="flex flex-col">
                <span className="font-space text-[10px] text-gray-400 uppercase">DELIVERABLE STATUS</span>
                <span className="font-bebas text-lg text-white">REQUIRED FOR JUDGING</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
