import React from 'react';
import { Clock, Calendar, MapPin, Radio } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="relative py-24 bg-[#0b0b0b] border-y border-red-900/20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-forensic-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-xs font-mono text-[#e31b23]">
            <Clock className="w-3.5 h-3.5" />
            <span>EVENT SCHEDULE</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
            CASE <span className="text-[#e31b23]">TIMELINE</span>
          </h2>

          {/* Confirmed metadata pill banner */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-black border border-red-900/30 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#e31b23]" />
              {EVENT_DATA.day}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black border border-red-900/30 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#e31b23]" />
              {EVENT_DATA.timing}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black border border-red-900/30 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#e31b23]" />
              {EVENT_DATA.venue}
            </span>
          </div>
        </div>

        {/* Timeline Items Progression */}
        <div className="relative border-l-2 border-red-900/40 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
          {EVENT_DATA.timeline.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#e31b23] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#e31b23] transition-all duration-300 shadow-[0_0_10px_#e31b23]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e31b23] group-hover:bg-black" />
              </div>

              {/* Time Label on Left for Desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 w-28 text-right font-mono text-xs text-[#e31b23] font-bold">
                {item.time}
              </div>

              {/* Main Content Card */}
              <div className="glass-panel-red rounded-xl p-6 border border-red-900/30 hover:border-[#e31b23]/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950 text-[#e31b23] border border-red-600/40 font-bold w-fit">
                    {item.phase}
                  </span>
                  {/* Mobile Time label */}
                  <span className="sm:hidden font-mono text-xs text-[#e31b23] font-bold">
                    {item.time}
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl text-white tracking-wide">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
