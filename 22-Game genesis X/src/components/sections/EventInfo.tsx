import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Monitor, Users, Hourglass, Tag } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { Card } from '../ui/Card';

interface EventInfoProps {
  event: EventConfig;
}

export const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
  const infoCards = [
    {
      label: 'DATE',
      value: event.date,
      icon: Calendar,
      color: 'text-[#D12CFF]',
      borderColor: 'border-[#7B2CFF]/40',
    },
    {
      label: 'TIME',
      value: event.time,
      icon: Clock,
      color: 'text-[#FF4FD8]',
      borderColor: 'border-[#7B2CFF]/40',
    },
    {
      label: 'VENUE',
      value: event.venue,
      icon: MapPin,
      color: 'text-[#7B2CFF]',
      borderColor: 'border-[#7B2CFF]/40',
    },
    {
      label: 'MODE',
      value: event.mode,
      icon: Monitor,
      color: 'text-[#D12CFF]',
      borderColor: 'border-[#7B2CFF]/40',
    },
    {
      label: 'TEAM SIZE',
      value: event.teamSize,
      icon: Users,
      color: 'text-[#FF4FD8]',
      borderColor: 'border-[#7B2CFF]/40',
    },
    {
      label: 'REGISTRATION DEADLINE',
      value: event.registrationDeadline,
      icon: Hourglass,
      color: 'text-[#D12CFF]',
      borderColor: 'border-[#7B2CFF]/40',
    },
    {
      label: 'REGISTRATION FEE',
      value: event.fee || 'Free Entry',
      icon: Tag,
      color: 'text-[#7B2CFF]',
      borderColor: 'border-[#7B2CFF]/40',
    },
  ].filter((item) => Boolean(item.value));

  return (
    <section id="event-info" className="py-12 bg-[#07060A] relative border-b border-[#231538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card
                  variant="glass"
                  className={`border ${card.borderColor} bg-[#100A18] flex items-start gap-4 p-5 h-full`}
                >
                  <div className={`p-3 rounded-xl bg-[#07060A] border border-[#231538] ${card.color} flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A7A0B2] uppercase tracking-wider block mb-1">
                      {card.label}
                    </span>
                    <p className="text-base font-semibold text-white font-display leading-snug">
                      {card.value}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
