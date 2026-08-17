import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../../data/event';
import { Accordion } from '../ui/Accordion';
import { SectionHeader } from '../ui/SectionHeader';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="05"
          badge="INQUIRY &amp; SUPPORT"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Official answers regarding event participation, team formats, domain categories, and guidelines."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion items={eventData.faq} className="max-w-3xl mx-auto pt-2" />
        </motion.div>
      </div>
    </section>
  );
};
