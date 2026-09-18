import React from 'react';
import { motion } from 'framer-motion';
import { COORDINATORS_DATA, STAFF_COORDINATOR_DATA } from '../utils/domainsData';
import { Shield, User, Phone, Award } from 'lucide-react';
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
          EVENT LEADERSHIP
        </div>

        <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl md:text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl md:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl lg:text-8xl text-white tracking-wider uppercase mb-3 drop-shadow-[4px_4px_0px_#00f0ff]">
          EVENT COORDINATORS
        </h2>

        <p className="font-space text-base text-gray-400 max-w-xl mb-12">
          The official faculty and student organizing commanders guiding your brand-building adventure throughout Launchpad.
        </p>

        {/* Staff Coordinator Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          onMouseEnter={() => soundFx.playClick()}
          className="mb-10 w-full max-w-xl p-6 sm:p-8 bg-[#121216] border-2 border-[#ff00aa]/40 hover:border-[#ff00aa] rounded-2xl flex flex-col sm:flex-row items-center gap-6 group transition-all duration-300 transform hover:scale-[1.02] hover:shadow-spider-red overflow-hidden relative"
        >
          <div className="absolute top-4 right-4 font-space text-[10px] text-gray-400 tracking-widest uppercase">
            {STAFF_COORDINATOR_DATA.spiderCode}
          </div>

          <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${STAFF_COORDINATOR_DATA.avatarBg} border-2 border-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform flex-shrink-0`}>
            <Award className="w-10 h-10 text-white" />
          </div>

          <div className="text-center sm:text-left">
            <span className="font-space text-xs text-[#ff00aa] tracking-widest uppercase font-bold block mb-1">
              {STAFF_COORDINATOR_DATA.role}
            </span>
            <h3 className="font-anton text-3xl sm:text-4xl text-white tracking-wide uppercase">
              {STAFF_COORDINATOR_DATA.name}
            </h3>
            <p className="font-space text-xs text-gray-400 font-semibold uppercase mt-1">
              {STAFF_COORDINATOR_DATA.designation}
            </p>
          </div>
        </motion.div>

        {/* Student Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-8 w-full">
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

              <p className="font-space text-xs text-gray-400 font-semibold uppercase mb-4">
                {coord.designation}
              </p>

              <a
                href={`tel:${coord.phone.replace(/\s+/g, '')}`}
                onClick={(e) => e.stopPropagation()}
                className="mt-auto px-4 py-2 rounded-lg bg-black/60 border border-[#00f0ff]/40 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 text-[#00f0ff] font-space text-xs font-bold tracking-wider inline-flex items-center gap-2 transition-all no-underline cursor-pointer hover:shadow-spider-blue"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff003c]" />
                <span>{coord.phone}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
