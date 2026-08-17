import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Eye, EyeOff } from 'lucide-react';

interface SectionConfigControllerProps {
  sections: { [key: string]: boolean };
  onChange: (key: string, value: boolean) => void;
}

export const SectionConfigController: React.FC<SectionConfigControllerProps> = ({
  sections,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionKeys = [
    { key: 'hero', label: 'Hero Banner' },
    { key: 'eventInfo', label: 'Event Info Cards' },
    { key: 'about', label: 'Feel the Speed Overview' },
    { key: 'stats', label: 'Racing Statistics' },
    { key: 'highlights', label: 'Obstacles Arena' },
    { key: 'researchJourney', label: 'Race Journey Progression' },
    { key: 'rounds', label: 'Championship Rounds' },
    { key: 'rules', label: 'Specs & Guidelines' },
    { key: 'prizes', label: 'Podium Cash Prizes' },
    { key: 'faq', label: 'FAQ Accordion' },
    { key: 'registration', label: 'Registration Box' },
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[39]">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-sky-500/30 text-slate-350 hover:text-white font-bold text-xs uppercase tracking-wider shadow-2xl cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all select-none font-mono"
        >
          <Settings className="h-4 w-4 animate-spin" style={{ animationDuration: '4s' }} />
          Section Config
        </button>
      </div>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#060608] z-50 pointer-events-auto"
            />

            {/* Sidebar drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[320px] sm:w-[380px] bg-zinc-950 border-l border-zinc-900 p-6 shadow-2xl z-50 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center pb-6 border-b border-zinc-900 mb-6 font-mono">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                      Section Controller
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium">
                      Toggle active website widgets
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded bg-zinc-900 border border-zinc-850 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Section Toggle List */}
                <div className="space-y-3 font-mono">
                  {sectionKeys.map(({ key, label }) => {
                    const isVisible = sections[key] ?? false;

                    return (
                      <div
                        key={key}
                        className="flex items-center justify-between p-3.5 rounded border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors"
                      >
                        <span className="text-[11px] font-bold text-slate-350">
                          {label}
                        </span>
                        
                        <button
                          onClick={() => onChange(key, !isVisible)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold transition-all cursor-pointer select-none ${
                            isVisible
                              ? 'bg-sky-950/40 border-sky-900/30 text-sky-400'
                              : 'bg-zinc-950 border-zinc-900 text-slate-500'
                          }`}
                        >
                          {isVisible ? (
                            <>
                              <Eye className="h-3 w-3" />
                              ON
                            </>
                          ) : (
                            <>
                              <EyeOff className="h-3 w-3" />
                              OFF
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom footer note */}
              <div className="border-t border-zinc-900 pt-6 mt-8 text-center font-mono">
                <p className="text-[9px] text-slate-600">
                  // MASTER EVENT LAYOUT CONTROLLER
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
