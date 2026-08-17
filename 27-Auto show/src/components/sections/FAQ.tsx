import React from 'react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Accordion, AccordionItem } from '../ui/Accordion';

export interface FAQProps {
  event: EventConfig;
}

export const FAQ: React.FC<FAQProps> = ({ event }) => {
  if (!event.faq || event.faq.length === 0) return null;

  const accordionItems: AccordionItem[] = event.faq.map((item, index) => ({
    id: `faq-${index}`,
    title: item.question,
    content: (
      <p className="text-[#F5F2EC] text-sm sm:text-base leading-relaxed">
        {item.answer}
      </p>
    )
  }));

  return (
    <section id="faq" className="py-20 md:py-28 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          category="FREQUENTLY ASKED QUESTIONS"
          title="FREQUENT QUESTIONS"
          subtitle="Essential information regarding entry, timing, and event structure."
        />

        <Accordion items={accordionItems} />

      </div>
    </section>
  );
};
