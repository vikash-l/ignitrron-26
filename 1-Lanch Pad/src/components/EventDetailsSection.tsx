import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, UserCheck, ShieldCheck } from 'lucide-react';
import { soundFx } from '../utils/soundFx';

export const EventDetailsSection: React.FC = () => {
  const details = [
    { label: 'EVENT NAME', value: 'Launchpad', icon: <ShieldCheck className="w-6 h-6 text-[#ff003c]" /> },
    { label: 'EXPECTED PARTICIPANTS', value: '50 Teams / Designers', icon: <Users className="w-6 h-6 text-[#00f0ff]" /> },
    { label: 'SCHEDULED DAY', value: 'Day 2', icon: <Calendar className="w-6 h-6 text-[#bf00ff]" /> },
    { label: 'EVENT TIMING', value: '10:00 AM — 1:00 PM', icon: <Clock className="w-6 h-6 text-[#00ff88]" /> },
    { label: 'OFFICIAL VENUE', value: 'HPC Lab', icon: <MapPin className="w-6 h-6 text-[#ffff00]" /> },
    { label: 'FACULTY ADVISOR', value: 'Mr. Manikandan P', icon: <UserCheck className="w-6 h-6 text-[#ff00aa]" /> },
  ];

  return (
    <section className="relative py-24 px-4 bg-[#0a0a0c] overflow-hidden border-t border-white/10">
      {/* Spider-Verse Speed Lines */}
      <div className="absolute inset-0 bg-speed-lines opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-space text-xs tracking-widest text-[#00f0ff] uppercase font-bold">
            MISSION SPECIFICATIONS
          </span>
          <h2 className="font-anton text-5xl sm:text-7xl text-white tracking-wider uppercase mt-2">
            EVENT DETAILS
          </h2>
          <p className="font-space text-base text-gray-400 mt-2">
            Official logistics & schedule for Launchpad at Ignitrron.
          </p>
        </div>

        {/* 6 Official Data Grid Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              onMouseEnter={() => soundFx.playClick()}
              className="p-6 bg-[#121216] border-2 border-white/15 hover:border-[#ff003c] rounded-xl flex items-center gap-5 group transition-all duration-200 hover:shadow-spider-red"
            >
              <div className="p-4 bg-black border border-white/20 rounded-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <div>
                <span className="font-space text-[10px] text-gray-400 tracking-widest uppercase font-bold">
                  {item.label}
                </span>
                <h3 className="font-anton text-2xl text-white tracking-wide uppercase mt-0.5 group-hover:text-[#00f0ff] transition-colors">
                  {item.value}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
