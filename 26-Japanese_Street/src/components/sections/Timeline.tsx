import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Gift, Sparkles, Clock } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'DAY1' | 'DAY2'>('DAY1');

  const day1Events = [
    {
      activity: "Japanese Quiz Competition",
      venue: "CAC",
      time: "9:00 AM – 12:00 PM",
      badge: "Merchandise Prize"
    },
    {
      activity: "Gaming Tournament",
      venue: "CAC",
      time: "1:30 PM – 4:30 PM",
      badge: "Merchandise Prize"
    },
    {
      activity: "Cosplay",
      venue: "BME walkway",
      time: "Full Day",
      badge: "Merchandise Prize"
    }
  ];

  const day2Events = [
    {
      activity: "Speech",
      venue: "CAC",
      time: "9:00 AM – 11:00 AM",
      badge: "Merchandise Prize"
    },
    {
      activity: "Cosplay",
      venue: "BME walkway",
      time: "Till 3:00 PM",
      badge: "Merchandise Prize"
    }
  ];

  const currentEvents = activeDay === 'DAY1' ? day1Events : day2Events;

  return (
    <section id="schedule" className="py-24 relative overflow-hidden border-t border-[#C9A45C]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          badge="EVENT SCHEDULE"
          title="DAY 1 &amp; DAY 2 TIMELINE"
          subtitle="Official schedules for timed activities and stage events at CAC and the BME walkway."
          align="center"
        />

        {/* Day 1 / Day 2 Tab Selector with Prominent Integrated Dates */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl ronin-panel border border-[#C9A45C]/35 shadow-xl bg-[#0E1524]/90 gap-2">
            <button
              onClick={() => setActiveDay('DAY1')}
              className={`px-6 sm:px-10 py-3 rounded-xl transition-all cursor-pointer text-center ${
                activeDay === 'DAY1'
                  ? 'bg-[#C63C32] text-[#F1E8D5] shadow-lg shadow-[#C63C32]/40 border border-[#C9A45C]/50'
                  : 'text-[#9B9A96] hover:text-[#F1E8D5] hover:bg-[#141C2E]'
              }`}
            >
              <span className={`text-[10px] sm:text-[11px] font-mono-tech tracking-widest font-bold uppercase block mb-0.5 ${
                activeDay === 'DAY1' ? 'text-[#F1E8D5]' : 'text-[#C9A45C]'
              }`}>
                18 SEPTEMBER 2026
              </span>
              <span className="text-sm sm:text-base font-display uppercase tracking-widest font-bold block">
                DAY 1
              </span>
            </button>

            <button
              onClick={() => setActiveDay('DAY2')}
              className={`px-6 sm:px-10 py-3 rounded-xl transition-all cursor-pointer text-center ${
                activeDay === 'DAY2'
                  ? 'bg-[#C63C32] text-[#F1E8D5] shadow-lg shadow-[#C63C32]/40 border border-[#C9A45C]/50'
                  : 'text-[#9B9A96] hover:text-[#F1E8D5] hover:bg-[#141C2E]'
              }`}
            >
              <span className={`text-[10px] sm:text-[11px] font-mono-tech tracking-widest font-bold uppercase block mb-0.5 ${
                activeDay === 'DAY2' ? 'text-[#F1E8D5]' : 'text-[#C9A45C]'
              }`}>
                19 SEPTEMBER 2026
              </span>
              <span className="text-sm sm:text-base font-display uppercase tracking-widest font-bold block">
                DAY 2
              </span>
            </button>
          </div>
        </div>

        {/* Schedule List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-3xl mx-auto mb-14"
          >
            {currentEvents.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="ronin-panel rounded-xl p-5 sm:p-6 border border-[#C9A45C]/35 hover:border-[#C63C32]/60 hover:bg-[#131C2E] transition-all duration-300 shadow-md relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                {/* Left: Activity Name & Venue */}
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#0E1524] border border-[#C9A45C]/40 text-[#C63C32] group-hover:border-[#C63C32]/60 group-hover:bg-[#1A253C] transition-colors">
                    <Clock className="h-5 w-5 text-[#C63C32]" />
                  </div>

                  <div>
                    <h3 className="text-[#F1E8D5] font-display text-2xl uppercase tracking-wide leading-tight group-hover:text-[#C9A45C] transition-colors">
                      {item.activity}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-xs font-mono-tech text-[#9B9A96]">
                      <span className="flex items-center gap-1 text-[#C9A45C]">
                        <MapPin className="h-3.5 w-3.5 text-[#C63C32]" />
                        <span>VENUE: {item.venue}</span>
                      </span>
                      <span className="text-stone-600">|</span>
                      <span>{item.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Time Stamp */}
                <div className="sm:text-right flex-shrink-0 border-t sm:border-t-0 border-[#C9A45C]/15 pt-3 sm:pt-0">
                  <div className="text-[9px] font-mono-tech text-[#9B9A96] uppercase tracking-widest mb-0.5">
                    SCHEDULED TIME
                  </div>
                  <div className="font-mono-tech text-sm font-bold uppercase tracking-wider text-[#F1E8D5] bg-[#243B63]/40 border border-[#C9A45C]/30 px-3 py-1 rounded">
                    {item.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dedicated Common Day 2 Prize Distribution Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="ronin-panel rounded-2xl p-7 sm:p-8 border border-[#C63C32]/50 max-w-3xl mx-auto shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#141C2E] via-[#101827] to-[#141C2E]"
        >
          {/* Top Hairline in Vermilion */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C63C32] to-transparent" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#C63C32]/20 border border-[#C63C32]/60 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(198,60,50,0.35)]">
              <Gift className="h-7 w-7 text-[#F1E8D5]" />
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#C63C32]/25 border border-[#C63C32]/50 font-mono-tech text-[10px] text-[#F1E8D5] uppercase tracking-widest font-bold mb-2">
                <Sparkles className="h-3 w-3 text-[#C9A45C]" />
                <span>{eventData.prizeDistribution.day} CEREMONY</span>
              </div>

              <h3 className="text-[#F1E8D5] font-display text-3xl uppercase tracking-wide mb-2">
                {eventData.prizeDistribution.title}
              </h3>

              <p className="text-[#F1E8D5]/90 text-xs sm:text-sm leading-relaxed mb-3">
                {eventData.prizeDistribution.description}
              </p>

              <div className="font-mono-tech text-[11px] text-[#C9A45C] bg-[#0E1524]/80 px-3 py-1.5 rounded border border-[#C9A45C]/25 inline-block">
                {eventData.prizeDistribution.note}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Note on other activities without specific timing */}
        <div className="mt-8 text-center text-xs font-mono-tech text-[#9B9A96]">
          Interactive fun stalls and creative activities run during festival hours across Japanese Street.
        </div>
      </div>
    </section>
  );
};
