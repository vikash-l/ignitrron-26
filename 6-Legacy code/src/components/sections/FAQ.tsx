import React from 'react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Accordion } from '../ui/Accordion';

export interface FAQProps {
  event: EventConfig;
}

export const FAQ: React.FC<FAQProps> = ({ event }) => {
  const faq = event.faq;

  if (!faq || faq.length === 0) return null;

  return (
    <section id="faq" className="py-20 bg-[#070809]">
      <Container size="md">
        <SectionHeader
          moduleNumber="07"
          badge="FAQ"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about event participation."
        />

        <Accordion items={faq} />
      </Container>
    </section>
  );
};
