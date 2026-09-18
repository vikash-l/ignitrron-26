import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Palette, HelpCircle, Mic, Sparkles, Feather, Target, Origami, Disc, Camera, MapPin, Gift, HeartHandshake } from 'lucide-react';
import { eventData, type ActivityItem } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Activities: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'MERCHANDISE' | 'FUN'>('ALL');

  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gamepad2':
        return <Gamepad2 className="h-5 w-5 text-[#C63C32] group-hover:scale-110 transition-transform duration-300" />;
      case 'Palette':
        return <Palette className="h-5 w-5 text-[#C9A45C] group-hover:scale-110 transition-transform duration-300" />;
      case 'HelpCircle':
        return <HelpCircle className="h-5 w-5 text-[#C63C32] group-hover:scale-110 transition-transform duration-300" />;
      case 'Mic':
        return <Mic className="h-5 w-5 text-[#C9A45C] group-hover:scale-110 transition-transform duration-300" />;
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-[#C63C32] group-hover:scale-110 transition-transform duration-300" />;
      case 'Feather':
        return <Feather className="h-5 w-5 text-[#C9A45C] group-hover:scale-110 transition-transform duration-300" />;
      case 'Target':
        return <Target className="h-5 w-5 text-[#C63C32] group-hover:scale-110 transition-transform duration-300" />;
      case 'Origami':
        return <Origami className="h-5 w-5 text-[#C9A45C] group-hover:scale-110 transition-transform duration-300" />;
      case 'Disc':
        return <Disc className="h-5 w-5 text-[#C63C32] group-hover:scale-110 transition-transform duration-300" />;
      case 'Camera':
        return <Camera className="h-5 w-5 text-[#C9A45C] group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Sparkles className="h-5 w-5 text-[#C9A45C]" />;
    }
  };

  const filteredActivities = eventData.activities.filter(activity => {
    if (activeFilter === 'MERCHANDISE') return activity.badgeType === 'MERCHANDISE';
    if (activeFilter === 'FUN') return activity.badgeType === 'FUN EVENT';
    return true;
  });

  return (
    <section id="activities" className="py-24 relative overflow-hidden border-t border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03"
          badge="STALLS &amp; EXPERIENCES"
          title="10 STREET DESTINATIONS"
          subtitle="Explore all 10 destinations spanning competitive arenas with merchandise prizes and lively festival fun stalls."
          align="center"
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-xl mx-auto">
          <button
            onClick={() => setActiveFilter('ALL')}
            className={`px-4 py-2 rounded font-mono-tech text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'ALL'
                ? 'bg-[#C63C32] text-[#F1E8D5] font-bold shadow-md shadow-[#C63C32]/30 border border-[#C9A45C]/40'
                : 'ronin-panel text-[#9B9A96] hover:text-[#F1E8D5] hover:border-[#C9A45C]/50'
            }`}
          >
            ALL DESTINATIONS ({eventData.activities.length})
          </button>
          <button
            onClick={() => setActiveFilter('MERCHANDISE')}
            className={`px-4 py-2 rounded font-mono-tech text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'MERCHANDISE'
                ? 'bg-[#C63C32] text-[#F1E8D5] font-bold shadow-md shadow-[#C63C32]/30 border border-[#C9A45C]/40'
                : 'ronin-panel text-[#9B9A96] hover:text-[#F1E8D5] hover:border-[#C9A45C]/50'
            }`}
          >
            MERCHANDISE ACTIVITIES (6)
          </button>
          <button
            onClick={() => setActiveFilter('FUN')}
            className={`px-4 py-2 rounded font-mono-tech text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'FUN'
                ? 'bg-[#243B63] text-[#C9A45C] font-bold shadow-md shadow-[#243B63]/50 border border-[#C9A45C]/50'
                : 'ronin-panel text-[#9B9A96] hover:text-[#F1E8D5] hover:border-[#C9A45C]/50'
            }`}
          >
            FUN EVENTS (4)
          </button>
        </div>

        {/* 10 Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {filteredActivities.map((activity: ActivityItem, idx: number) => {
            const isMerchandise = activity.badgeType === 'MERCHANDISE';

            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.25, ease: 'easeOut' } 
                }}
                className="ronin-panel rounded-2xl p-6 border border-[#C9A45C]/25 hover:border-[#C9A45C]/60 hover:bg-[#121B2C] flex flex-col justify-between group transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                {/* Subtle top hairline highlight on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent ${
                  isMerchandise ? 'group-hover:via-[#C63C32]/70' : 'group-hover:via-[#C9A45C]/70'
                } to-transparent transition-all duration-500`} />

                <div>
                  {/* Top Bar: Number + Kanji + Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-xs text-[#C9A45C] font-bold">
                        {activity.number}
                      </span>
                      <span className="text-stone-600">|</span>
                      <span className="font-editorial text-xs text-[#9B9A96] font-semibold tracking-wider">
                        {activity.japaneseName}
                      </span>
                    </div>

                    {/* Merchandise vs Fun Event Badge */}
                    <span className={`px-2.5 py-0.5 rounded font-mono-tech text-[10px] uppercase tracking-wider font-bold inline-flex items-center gap-1 ${
                      isMerchandise
                        ? 'bg-[#C63C32]/25 border border-[#C63C32]/50 text-[#F1E8D5]'
                        : 'bg-[#243B63]/40 border border-[#C9A45C]/40 text-[#C9A45C]'
                    }`}>
                      {isMerchandise ? (
                        <>
                          <Gift className="h-3 w-3 text-[#C63C32]" />
                          <span>MERCHANDISE</span>
                        </>
                      ) : (
                        <>
                          <HeartHandshake className="h-3 w-3 text-[#C9A45C]" />
                          <span>FUN EVENT</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#0E1524] border border-[#C9A45C]/35 flex items-center justify-center flex-shrink-0 group-hover:border-[#C63C32]/60 group-hover:bg-[#182338] transition-all duration-300 shadow-md">
                      {getActivityIcon(activity.icon)}
                    </div>
                    <div>
                      <h3 className="text-[#F1E8D5] font-display text-2xl sm:text-3xl uppercase tracking-wide leading-tight group-hover:text-[#C9A45C] transition-colors">
                        {activity.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#9B9A96] text-xs sm:text-sm leading-relaxed font-normal mb-5">
                    {activity.description}
                  </p>
                </div>

                {/* Bottom Meta Bar: Venue (where supplied) & Prize Classification */}
                <div className="border-t border-[#C9A45C]/15 pt-3.5 mt-2 flex items-center justify-between text-xs font-mono-tech text-[#9B9A96]">
                  {activity.venue ? (
                    <span className="flex items-center gap-1 text-[#C9A45C]">
                      <MapPin className="h-3.5 w-3.5 text-[#C63C32]" />
                      <span>VENUE: {activity.venue}</span>
                    </span>
                  ) : (
                    <span className="text-[#9B9A96]/70">
                      JAPANESE STREET
                    </span>
                  )}

                  <span className={isMerchandise ? 'text-[#F1E8D5]/90 font-semibold' : 'text-[#C9A45C]'}>
                    {activity.prizeNote}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Prize Distribution Callout Note */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full ronin-panel border border-[#C9A45C]/35 text-[#F1E8D5] font-mono-tech text-xs shadow-md">
            <Gift className="h-4 w-4 text-[#C63C32]" />
            <span>Prize distribution for competitive activities featuring merchandise takes place on Day 2</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
