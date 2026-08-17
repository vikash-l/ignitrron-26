import React from 'react';
import { eventData } from '../../data/event';
import { Accordion } from '../ui/Accordion';
import { SectionHeader } from '../ui/SectionHeader';

export const FAQ: React.FC = () => {
  if (!eventData.faq || eventData.faq.length === 0) return null;

  return (
    <section id="faq" className="py-24 bg-[#020604]/40 relative border-t border-[#063D29]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about timeline participation."
          badge="TIMELINE HELP"
        />

        <Accordion items={eventData.faq} className="max-w-3xl mx-auto pt-4" />
      </div>
    </section>
  );
};
