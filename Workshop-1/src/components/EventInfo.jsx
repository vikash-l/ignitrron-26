import React from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const EventInfo = () => {
  const items = [
    {
      icon: Calendar,
      label: 'DATE',
      value: '20 – 21 SEPT 2026',
    },
    {
      icon: Clock,
      label: 'DURATION',
      value: '24 HOURS',
    },
    {
      icon: Users,
      label: 'TEAM SIZE',
      value: '2 – 4 MEMBERS',
    },
    {
      icon: MapPin,
      label: 'VENUE',
      value: 'ADC LAB',
    },
  ];

  return (
    <section className="w-full border-y border-slate-200 dark:border-zinc-800 bg-white/60 dark:bg-[#0c0c0e]/80 py-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3.5 group"
              >
                <div className="p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/90 text-purple-600 dark:text-purple-400 group-hover:border-purple-500/40 transition duration-200">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-slate-400 dark:text-zinc-500 uppercase font-semibold">
                    {item.label}
                  </span>
                  <span className="block text-xs sm:text-sm font-bold tracking-tight font-sans text-slate-900 dark:text-zinc-100 mt-0.5">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
