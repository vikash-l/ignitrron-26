import React from 'react';
import { Flame, Wrench, Volume2, Zap } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';

export interface ExperienceProps {
  event: EventConfig;
}

export const Experience: React.FC<ExperienceProps> = ({ event }) => {
  if (!event.experience || event.experience.length === 0) return null;

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-[#FF6A00]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#D72614]" />;
      case 'Volume2': return <Volume2 className="w-6 h-6 text-[#FFB000]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#FF6A00]" />;
      default: return <Flame className="w-6 h-6 text-[#FF6A00]" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          category="THE SHOW"
          title="THE EXPERIENCE"
          subtitle="Explore the mechanical atmosphere, soundscapes, design, and energy uniting at Phoenix Circle."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {event.experience.map((item, index) => (
            <div
              key={index}
              className="scorched-card p-6 rounded-xl flex flex-col justify-between hover:border-[#FF6A00]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded bg-[#101010] border border-[#4A0A07] flex items-center justify-center group-hover:border-[#FF6A00] transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  {item.tag && (
                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#858585] px-2 py-0.5 rounded bg-[#101010] border border-[#17110D]">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black font-display tracking-tight text-[#F5F2EC] mb-2 group-hover:text-[#FF6A00] transition-colors uppercase">
                  {item.title}
                </h3>

                <p className="text-[#858585] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#17110D] flex items-center justify-between text-[10px] font-mono-tech text-[#858585]">
                <span>MODULE 0{index + 1}</span>
                <span className="text-[#D72614] font-bold group-hover:text-[#FF6A00] transition-colors">
                  WALK-IN ACCESS →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
