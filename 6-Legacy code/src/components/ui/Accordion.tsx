import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../data/event.types';

export interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const buttonId = `accordion-button-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div
            key={index}
            className={`bg-[#121418] transition-colors duration-150 ${
              isOpen ? 'machined-border-red' : 'machined-border'
            }`}
          >
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left font-mono font-semibold text-sm sm:text-base text-[#E8EAED] focus:outline-none focus:ring-1 focus:ring-[#F04444] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#F04444] font-mono">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <span>{item.question}</span>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.15 }}
                  className="shrink-0 text-[#9CA3AA]"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-1 text-sm text-[#9CA3AA] leading-relaxed border-t border-[#262A33]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
