import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Monitor, Users, Hourglass } from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';

export interface EventInfoProps {
  event: EventConfig;
}

export const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
  const info = event.eventInfo;

  if (!info) return null;

  const items = [
    { label: 'DATE', value: info.date, icon: Calendar },
    { label: 'TIME', value: info.time, icon: Clock },
    { label: 'VENUE', value: info.venue, icon: MapPin },
    { label: 'MODE', value: info.mode, icon: Monitor },
    { label: 'TEAM SIZE', value: info.teamSize, icon: Users },
    { label: 'LIMIT', value: info.registrationDeadline, icon: Hourglass },
  ].filter((item) => Boolean(item.value));

  if (items.length === 0) return null;

  return (
    <section id="event-info" className="py-10 bg-[#070809] border-b border-[#262A33]">
      <Container size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="bg-[#121418] border border-[#262A33] p-3.5 text-center flex flex-col items-center justify-center space-y-1.5 clip-corner-sm"
              >
                <div className="text-[#F04444]">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#9CA3AA] block">
                  {item.label}
                </span>
                <span className="text-xs font-mono font-bold text-[#E8EAED] block truncate max-w-full">
                  {item.value}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
