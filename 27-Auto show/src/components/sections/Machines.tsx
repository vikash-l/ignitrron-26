import React from 'react';
import { Flame } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';

export interface MachinesProps {
  event: EventConfig;
}

export const Machines: React.FC<MachinesProps> = ({ event }) => {
  if (!event.machines || event.machines.length === 0) return null;

  return (
    <section id="machines" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          category="EXHIBITION LINEUP"
          title="THE MACHINES"
          subtitle="Explore the curated vehicle categories and mechanical power staging at the arena."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {event.machines.map((machine, index) => (
            <div
              key={index}
              className="scorched-card rounded-xl overflow-hidden group border border-[#4A0A07]/60 hover:border-[#FF6A00]/60 transition-all"
            >
              {/* Vehicle Image Card */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#101010]">
                {machine.image ? (
                  <img
                    src={machine.image}
                    alt={machine.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-110 brightness-95"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#17110D]">
                    <Flame className="w-12 h-12 text-[#FF6A00]/40 animate-pulse" />
                  </div>
                )}

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-90" />
                
                {/* Category Badge Floating Top Left */}
                <div className="absolute top-4 left-4">
                  <Badge variant="fire" size="sm">
                    {machine.category}
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 relative">
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#FF6A00] block mb-1">
                  {machine.subtitle}
                </span>

                <h3 className="text-2xl font-black font-display text-[#F5F2EC] uppercase tracking-tight mb-3 group-hover:text-[#FF6A00] transition-colors">
                  {machine.title}
                </h3>

                <p className="text-[#858585] text-sm leading-relaxed mb-6">
                  {machine.description}
                </p>

                {/* Specs / Tags */}
                {machine.specs && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#17110D]">
                    {machine.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-[10px] font-mono-tech uppercase text-[#F5F2EC] bg-[#101010] border border-[#4A0A07]/60 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
