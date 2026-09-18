import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Monitor, Hourglass } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';

export const EventInfo: React.FC = () => {
  const infoItems = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
      label: 'DATE',
      value: eventData.date,
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      label: 'TIME',
      value: eventData.time,
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      label: 'VENUE',
      value: eventData.venue,
    },
    {
      icon: <Monitor className="h-6 w-6 text-blue-500" />,
      label: 'MODE',
      value: eventData.mode,
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      label: 'TEAM SIZE',
      value: eventData.teamSize,
    },
    {
      icon: <Hourglass className="h-6 w-6 text-blue-500" />,
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
    <section id="eventInfo" className="py-16 bg-slate-950/20 relative border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {infoItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col items-center justify-center p-5 text-center bg-slate-900/30 backdrop-blur-sm border-slate-900 hover:border-slate-800 transition-all duration-300 h-full">
                <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-900/20 mb-3 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">
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
