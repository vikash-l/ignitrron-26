import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Monitor, Hourglass } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';

export const EventInfo: React.FC = () => {
  const infoItems = [
    {
      icon: <Calendar className="h-5 w-5 text-[#00E676]" />,
      label: 'DATE',
      value: eventData.date,
    },
    {
      icon: <Clock className="h-5 w-5 text-[#C9A227]" />,
      label: 'TIME',
      value: eventData.time,
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#00E676]" />,
      label: 'VENUE',
      value: eventData.venue,
    },
    {
      icon: <Monitor className="h-5 w-5 text-[#C9A227]" />,
      label: 'MODE',
      value: eventData.mode,
    },
    {
      icon: <Users className="h-5 w-5 text-[#00E676]" />,
      label: 'TEAM SIZE',
      value: eventData.teamSize,
    },
    {
      icon: <Hourglass className="h-5 w-5 text-[#C9A227]" />,
      label: 'DEADLINE',
      value: eventData.deadline,
    },
  ].filter(item => item.value);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="eventInfo" className="py-16 bg-[#020604]/40 relative border-t border-[#063D29]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {infoItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col items-center justify-center p-5 text-center bg-[#020604]/80 backdrop-blur-sm border-[#063D29] hover:border-[#00E676]/40 transition-all duration-300 h-full">
                <div className="p-2.5 rounded-lg bg-[#063D29]/30 border border-[#00E676]/20 mb-3 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-1.5">
                  {item.label}
                </h4>
                <p className="text-xs sm:text-sm font-extrabold text-slate-200 leading-tight">
                  {item.value}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
