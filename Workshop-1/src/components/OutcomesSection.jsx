import React from 'react';
import { motion } from 'framer-motion';

export const OutcomesSection = () => {
  const cards = [
    {
      number: '01',
      title: 'PRECISION',
      tagline: 'Systematic Prompt Frameworks',
      description: 'Develop a systematic framework to eliminate hallucinations, enforce exact formatting, and make AI follow instructions accurately.',
      bullets: [
        'Deterministic JSON schemas',
        'Zero-hallucination guardrails',
        'Context window optimization',
      ],
    },
    {
      number: '02',
      title: 'KNOWLEDGE',
      tagline: 'PDF & Syllabus Synthesis Engine',
      description: 'Ingest dense syllabi, lecture notes, and research PDFs to generate:',
      bullets: [
        'Smart flashcards',
        'Question banks',
        'Audio overviews',
      ],
    },
    {
      number: '03',
      title: 'CREATION',
      tagline: 'Instant Code & UI Instantiation',
      description: 'Use AI to generate:',
      bullets: [
        'Interactive web widgets',
        'Calculators',
        'Portfolio components & working prototypes',
      ],
    },
  ];

  return (
    <section id="events" className="py-16 sm:py-20 relative bg-[#09090d]">
      
      {/* Subtle Blueprint Grid Background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>EXPECTED DELIVERABLES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            WHAT YOU'LL BUILD
          </h2>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl border border-zinc-800 bg-[#14141a] p-6 shadow-xs hover:border-purple-500/40 transition duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Number */}
                <div className="text-xs font-mono font-bold text-purple-400 tracking-widest mb-3 flex items-center justify-between">
                  <span>{card.number} — {card.title}</span>
                  <span className="text-[9px] text-zinc-600 font-normal">NODE_{card.number}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold tracking-tight text-zinc-100 mb-2 font-sans">
                  {card.tagline}
                </h3>
                
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 font-sans">
                  {card.description}
                </p>

                {/* Bullet list */}
                <ul className="space-y-2">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start space-x-2 text-xs text-zinc-300 font-sans">
                      <span className="text-purple-400 font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
