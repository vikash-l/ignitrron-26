import React from 'react';
import { HelpCircle } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Accordion, AccordionItem } from '../ui/Accordion';

interface FAQProps {
  event: EventConfig;
}

export const FAQ: React.FC<FAQProps> = ({ event }) => {
  if (!event.faq || event.faq.length === 0) return null;

  const accordionItems: AccordionItem[] = event.faq.map((item, index) => ({
    id: index,
    title: item.question,
    content: item.answer,
    category: item.category,
  }));

  return (
    <section id="faq" className="py-24 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="07 // FAQS"
          badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about team format, pitch timing, and submission details."
        />

        <Accordion items={accordionItems} />
      </div>
    </section>
  );
};
