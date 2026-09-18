import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const indexStr = index < 9 ? `0${index + 1}` : `${index + 1}`;

        return (
          <div
            key={index}
            className={`tech-panel rounded-xl overflow-hidden transition-all duration-300 ${
              isOpen 
                ? 'border-[#A30F18]/50 bg-[#191C20]/95 shadow-lg shadow-black/80' 
                : 'border-[#25292E] hover:border-[#A30F18]/40 bg-[#111316]/80'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex justify-between items-center w-full px-5 py-4 sm:px-6 sm:py-5 text-left text-[#E8E8E8] font-medium transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 sm:gap-4 pr-4">
                <span className="font-mono-tech text-[10px] text-[#A30F18] font-bold bg-[#111316] border border-[#A30F18]/40 px-2 py-0.5 rounded flex-shrink-0">
                  {indexStr}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#E8E8E8] font-sans tracking-wide">
                  {item.question}
                </span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#9A9DA1] flex-shrink-0"
              >
                <ChevronDown className="h-4 w-4 text-[#A30F18]" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#9A9DA1] leading-relaxed border-t border-[#25292E] pt-4 font-normal">
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


