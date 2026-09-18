import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is Avengers: The Auction War at IGNITRRON '26?",
      a: 'Avengers: The Auction War is a two-round competition featuring a Marvel Quiz preliminary where the top 15 teams qualify for the second round Marvel Auction.'
    },
    {
      q: 'What is the required team size?',
      a: 'Each team must consist of 2 to 3 members.'
    },
    {
      q: 'What are the reporting time and event hours?',
      a: 'Reporting and check-in begin at 9:30 AM on Day 1. The main event takes place from 10:00 AM to 4:00 PM.'
    },
    {
      q: 'Where will the rounds take place?',
      a: 'Round 01 will take place at GITAM Hall, followed by Round 02 at CARE Studio.'
    },
    {
      q: 'How many teams qualify for Round 2?',
      a: 'The top 15 teams from Round 1 qualify to advance to Round 2 (Marvel Auction).'
    },
    {
      q: 'Who can I contact for queries?',
      a: 'You can contact faculty coordinator Mr. Pradeepkumar G or student coordinators Pranav Guru S S (9047056869), Pavishnavh V (6381276524), or Kiruthik Pranav T (8903492564).'
    }
  ];

  const toggleFaq = (idx) => {
    sounds.playClick();
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#07100B]/50 border-t border-[#38E39A]/15 overflow-hidden">
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#38E39A]/30 mb-3"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#38E39A]" />
            <span className="font-mono text-xs text-[#38E39A] tracking-[0.25em]">FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            EVENT <span className="text-[#B99A45] font-mono">FAQ</span>
          </motion.h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-panel rounded-2xl border-[#38E39A]/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base text-[#F4F5F3] hover:text-[#38E39A] transition-colors cursor-pointer pointer-events-auto"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#38E39A] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-[#8E9A94] leading-relaxed font-normal border-t border-[#38E39A]/10 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
