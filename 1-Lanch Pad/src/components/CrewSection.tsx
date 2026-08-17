import React from 'react';
import { motion } from 'framer-motion';
import { COORDINATORS_DATA } from '../utils/domainsData';
import { Shield, User } from 'lucide-react';
import { soundFx } from '../utils/soundFx';


export const CrewSection: React.FC = () => {
  return (
    <section id="crew" className="relative py-28 px-4 bg-[#0a0a0c] overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-halftone-blue opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121216] border border-[#00f0ff] text-[#00f0ff] font-space text-xs tracking-widest uppercase font-bold mb-4 shadow-spider-blue">
          <Shield className="w-4 h-4 text-[#ff003c]" />
          DESIGN CLUB LEADERSHIP
        </div>

        <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl text-white tracking-wider uppercase mb-3 drop-shadow-[4px_4px_0px_#00f0ff]">
          YOUR MISSION CREW
        </h2>

        <p className="font-space text-base text-gray-400 max-w-xl mb-16">
          The event coordinators guiding your brand-building adventure throughout Launchpad.
        </p>

        {/* Coordinator Comic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {COORDINATORS_DATA.map((coord, index) => (
            <motion.div
              key={coord.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onMouseEnter={() => soundFx.playClick()}
              className="relative p-8 bg-[#121216] border-2 border-white/20 hover:border-[#ff003c] rounded-2xl flex flex-col items-center group transition-all duration-300 transform hover:scale-[1.03] hover:shadow-spider-red overflow-hidden"
            >
              {/* Top Code Badge */}
              <div className="absolute top-4 right-4 font-space text-[10px] text-gray-400 tracking-widest uppercase">
                {coord.spiderCode}
              </div>

              {/* Graphic Comic Avatar Banner */}
              <div className={`w-24 h-24 mb-6 rounded-full bg-gradient-to-tr ${coord.avatarBg} border-2 border-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                <User className="w-12 h-12 text-white" />
              </div>

              <span className="font-bebas text-lg text-[#00f0ff] tracking-wider">
                {coord.role}
              </span>

              <h3 className="font-anton text-3xl text-white tracking-wide uppercase my-1">
                {coord.name}
              </h3>

              <p className="font-space text-xs text-gray-400 font-semibold uppercase">
                {coord.designation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
