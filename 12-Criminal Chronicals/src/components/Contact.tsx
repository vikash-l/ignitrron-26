import React from 'react';
import { Phone, PhoneCall, Radio, UserCheck, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-[#050505] border-t border-red-900/20 overflow-hidden">
      {/* Background Subtle Red Grid */}
      <div className="absolute inset-0 bg-forensic-grid opacity-25 pointer-events-none" />

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-xs font-mono text-[#e31b23]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>EVENT COORDINATORS</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
            NEED A <span className="text-[#e31b23]">CLUE?</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-mono">
            "Have a question about the investigation? Contact the event coordinators."
          </p>
        </div>

        {/* 3 Coordinator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENT_DATA.contacts.map((contact, idx) => (
            <div
              key={contact.name}
              className="glass-panel-red rounded-2xl p-8 border border-red-900/30 hover:border-[#e31b23]/60 glass-panel-red-hover group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-black border border-red-900/60 flex items-center justify-center text-[#e31b23] group-hover:scale-110 group-hover:border-[#e31b23] transition-all shadow-[0_0_15px_rgba(227,27,35,0.2)]">
                    <Radio className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    COORDINATOR 0{idx + 1}
                  </span>
                </div>

                <span className="font-mono text-xs text-[#e31b23] tracking-widest block uppercase font-semibold">
                  {contact.role}
                </span>

                <h3 className="font-heading font-black text-2xl text-white mt-1 mb-4">
                  {contact.name}
                </h3>

                <div className="p-3 rounded-lg bg-black border border-red-900/20 mb-6 flex items-center justify-between font-mono text-sm">
                  <span className="text-slate-400 text-xs">PHONE:</span>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-white font-bold hover:text-[#e31b23] transition-colors"
                  >
                    +91 {contact.phone}
                  </a>
                </div>
              </div>

              {/* Call Now Action Button */}
              <a
                href={`tel:${contact.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-[#8b0000] via-[#c1121f] to-[#e31b23] hover:from-[#c1121f] hover:to-[#e31b23] transition-all duration-300 shadow-[0_0_20px_rgba(227,27,35,0.3)] hover:shadow-[0_0_30px_rgba(227,27,35,0.6)] group-hover:scale-102"
              >
                <PhoneCall className="w-4 h-4" />
                <span>CALL NOW →</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
