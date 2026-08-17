import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Flame } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `faq-header-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "scorched-card rounded-lg transition-all duration-200 overflow-hidden border",
              isOpen ? "border-[#FF6A00]/60 shadow-[0_0_20px_rgba(215,38,20,0.2)] bg-[#17110D]/90" : "border-[#4A0A07]/50 hover:border-[#4A0A07]"
            )}
          >
            <button
              id={headerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6A00]"
            >
              <div className="flex items-center gap-3.5">
                <span className="text-xs font-mono-tech text-[#D72614] font-bold shrink-0">
                  0{index + 1}
                </span>
                <span className={cn(
                  "font-bold text-base sm:text-lg transition-colors font-display uppercase tracking-wide",
                  isOpen ? "text-[#FF6A00]" : "text-[#F5F2EC]"
                )}>
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-[#858585] shrink-0 transition-transform duration-300",
                  isOpen && "transform rotate-180 text-[#FF6A00]"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-[#858585] text-sm sm:text-base leading-relaxed border-t border-[#4A0A07]/40 mt-1">
                    <div className="pt-3 flex items-start gap-2.5">
                      <Flame className="w-4 h-4 text-[#FF6A00] shrink-0 mt-1" />
                      <div className="text-[#F5F2EC]">
                        {item.content}
                      </div>
                    </div>
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
