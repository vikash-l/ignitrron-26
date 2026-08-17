import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface TimelineProps {
  event: EventConfig;
}

export const Timeline: React.FC<TimelineProps> = ({ event }) => {
  if (!event.timeline || event.timeline.length === 0) return null;

  return (
    <section id="timeline" className="py-24 bg-[#080b11] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="EVENT SCHEDULE"
          badgeIcon={<Clock className="w-3.5 h-3.5" />}
          title="TIMELINE & AGENDA"
          subtitle="Detailed breakdown of event milestones, pitches, and ceremonies."
        />

        <div className="relative pl-6 md:pl-0">
          {/* Central Vertical Connector Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {event.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080b11] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)] z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  </div>

                  {/* Spacer for 2-column alternating desktop grid */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Timeline Item Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-10' : 'md:pl-10'} pl-8 md:pl-0`}>
                    <Card
                      variant="glass"
                      className="p-6 border-slate-800 hover:border-cyan-500/40 group"
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold">
                          <Clock className="w-4 h-4" />
                          <span>{item.time}</span>
                          {item.date && (
                            <span className="text-slate-400 text-xs hidden sm:inline flex items-center gap-1">
                              • <Calendar className="w-3 h-3 inline" /> {item.date}
                            </span>
                          )}
                        </div>

                        {item.tag && (
                          <Badge variant="purple" size="sm">
                            {item.tag}
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-white font-display mb-2 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
