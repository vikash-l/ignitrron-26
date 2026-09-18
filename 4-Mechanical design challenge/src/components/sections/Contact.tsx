import React from 'react';
import { User, Phone, Headphones } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-[#070912] border-t border-white/5 overflow-hidden">
      {/* Spider-Verse Venom background glows */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff0055]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono-tech text-xs uppercase tracking-widest mb-4 backdrop-blur-md">
            <Headphones className="w-3.5 h-3.5" />
            <span>Support & Assistance</span>
          </div>
          <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-orbitron tracking-tight text-white mb-4">
            EVENT COORDINATORS
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Reach out to our student coordinators for event enquiries, queries, and technical assistance.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff0055] via-[#9d4edd] to-[#00f0ff] mx-auto rounded-full mt-4" />
        </div>

        {/* 3 Premium Glassmorphism Coordinator Cards Grid */}
        {/* Responsive layout: Desktop 3 cards in one row, Tablet 2 cards, Mobile 1 card */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cadForgeData.coordinators.map((coordinator, idx) => {
            const isRedAccent = idx % 2 === 0;
            return (
              <div
                key={coordinator.name}
                className={`relative rounded-3xl p-8 bg-slate-900/75 border backdrop-blur-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)] ${
                  isRedAccent
                    ? 'border-[#ff0055]/30 hover:border-[#ff0055] hover:shadow-[0_0_35px_rgba(255,0,85,0.35)]'
                    : 'border-[#00f0ff]/30 hover:border-[#00f0ff] hover:shadow-[0_0_35px_rgba(0,240,255,0.35)]'
                }`}
              >
                {/* Decorative background glow / halftone touch */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-40 ${
                    isRedAccent ? 'bg-[#ff0055]/20' : 'bg-[#00f0ff]/20'
                  }`}
                />

                <div>
                  {/* Top Bar with Role & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`px-3 py-1 rounded-xl font-mono-tech text-xs font-bold uppercase tracking-wider border ${
                        isRedAccent
                          ? 'bg-[#ff0055]/15 text-[#ff0055] border-[#ff0055]/30'
                          : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                      }`}
                    >
                      {coordinator.role}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl bg-black/60 border flex items-center justify-center transition-all group-hover:scale-110 ${
                        isRedAccent
                          ? 'border-[#ff0055]/40 text-[#ff0055]'
                          : 'border-cyan-500/40 text-cyan-400'
                      }`}
                    >
                      <User className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Coordinator Name */}
                  <h3 className="font-orbitron text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-tight">
                    {coordinator.name}
                  </h3>
                  <p className="font-mono-tech text-xs text-slate-400 mb-6">
                    {cadForgeData.event.department}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={coordinator.telLink || `tel:${coordinator.phone.replace(/\s+/g, '')}`}
                    className={`flex items-center justify-between p-4 rounded-2xl bg-black/60 border transition-all duration-300 group/item ${
                      isRedAccent
                        ? 'border-[#ff0055]/30 hover:border-[#ff0055] hover:bg-[#ff0055]/10'
                        : 'border-[#00f0ff]/30 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover/item:scale-110 ${
                          isRedAccent
                            ? 'bg-[#ff0055]/20 text-[#ff0055]'
                            : 'bg-cyan-500/20 text-cyan-400'
                        }`}
                      >
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono-tech text-slate-400 block uppercase tracking-wider">
                          Direct Contact
                        </span>
                        <span className="font-mono-tech text-sm font-bold text-white tracking-wide">
                          {coordinator.phone}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-mono-tech font-bold uppercase transition-transform group-hover/item:translate-x-1 ${
                        isRedAccent ? 'text-[#ff0055]' : 'text-[#00f0ff]'
                      }`}
                    >
                      CALL →
                    </span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
