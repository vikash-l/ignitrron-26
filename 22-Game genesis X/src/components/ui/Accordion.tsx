import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Card } from './Card';

export interface AccordionItem {
  id: string | number;
  title: string;
  content: React.ReactNode;
  category?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<(string | number)[]>([items[0]?.id]);

  const toggleItem = (id: string | number) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <Card
            key={item.id}
            variant="glass"
            hoverEffect={false}
            className={`transition-colors duration-200 p-0 overflow-hidden border ${
              isOpen ? 'border-cyan-500/40 bg-[#0f1524]' : 'border-slate-800/80 bg-[#0b0e17]/80'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-inset"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 pr-4">
                {item.category && (
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 rounded">
                    {item.category}
                  </span>
                )}
                <span className="font-display font-semibold text-slate-100 text-base md:text-lg">
                  {item.title}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 text-cyan-400"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/50">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        );
      })}
    </div>
  );
};
