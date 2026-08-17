import React from 'react';
import { motion } from 'framer-motion';
import { Users, User } from 'lucide-react';
import { soundFx } from '../utils/soundFx';


export const TeamSizeSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 bg-[#0a0a0c] overflow-hidden border-t border-white/10">
      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone-blue opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121216] border border-[#ff003c] text-[#ff003c] font-space text-xs tracking-widest uppercase font-bold mb-4">
          <Users className="w-3.5 h-3.5" />
          TEAM COMPOSITION
        </div>

        <h2 className="font-anton text-5xl sm:text-7xl text-white tracking-wider uppercase mb-2">
          BUILD YOUR CREW
        </h2>

        <h3 className="font-bebas text-3xl sm:text-5xl text-[#00f0ff] tracking-wider uppercase mb-12">
          2–4 MEMBERS PER TEAM
        </h3>

        {/* 4 Stylized Silhouettes Connected by Web Lines */}
        <div className="relative w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 my-4">
          {/* SVG Web Connection Lines across members */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#ff003c]/40 hidden sm:block">
            <line x1="12.5%" y1="50%" x2="87.5%" y2="50%" strokeWidth="2" strokeDasharray="6 6" />
          </svg>

          {[
            { role: 'CREW MEMBER 01', title: 'Brand Strategist / Captain', color: '#ff003c' },
            { role: 'CREW MEMBER 02', title: 'Visual & Logo Designer', color: '#00f0ff' },
            { role: 'CREW MEMBER 03', title: 'Copywriter & Storyteller', color: '#bf00ff' },
            { role: 'CREW MEMBER 04', title: 'Pitch & Marketing Lead', color: '#00ff88' },
          ].map((member, i) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onMouseEnter={() => soundFx.playClick()}
              className="relative p-6 bg-[#121216] border-2 border-white/20 hover:border-[#ff003c] rounded-xl flex flex-col items-center shadow-lg hover:shadow-spider-red transition-all group"
            >
              {/* Graphic Abstract Silhouette Box */}
              <div
                className="w-20 h-24 mb-4 rounded bg-black border-2 border-dashed flex items-center justify-center group-hover:scale-110 transition-transform relative"
                style={{ borderColor: member.color }}
              >
                <User className="w-12 h-12 text-gray-500 group-hover:text-white transition-colors" />
                <span
                  className="absolute -bottom-2 px-2 py-0.5 text-[9px] font-bebas text-black rounded uppercase font-bold"
                  style={{ backgroundColor: member.color }}
                >
                  SLOT 0{i + 1}
                </span>
              </div>

              <span className="font-bebas text-sm text-gray-400 group-hover:text-[#00f0ff] transition-colors">
                {member.role}
              </span>
              <h4 className="font-space text-xs text-white font-semibold uppercase mt-1">
                {member.title}
              </h4>
            </motion.div>
          ))}
        </div>

        <p className="font-space text-sm text-gray-400 max-w-md mt-8">
          Assemble your squad of strategic thinkers, visual creatives, and storytellers to claim the Launchpad trophy.
        </p>
      </div>
    </section>
  );
};
