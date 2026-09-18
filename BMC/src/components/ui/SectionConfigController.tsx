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
    { key: 'about', label: 'About Overview' },
    { key: 'stats', label: 'Statistics Grid' },
    { key: 'highlights', label: 'Key Highlights' },
    { key: 'rounds', label: 'Rounds & Phases' },
    { key: 'timeline', label: 'Event Schedule' },
    { key: 'rules', label: 'Official Guidelines' },
    { key: 'prizes', label: 'Prize Categories' },
    { key: 'sponsors', label: 'Sponsors & Partners' },
    { key: 'faq', label: 'FAQ Accordion' },
    { key: 'registration', label: 'Registration Box' },
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider shadow-2xl cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all select-none"
        >
          <Settings className="h-4 w-4 animate-spin-[spin_3s_linear_infinite]" />
          Section Config Controller
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
              className="fixed inset-0 bg-slate-950 z-50 pointer-events-auto"
            />

            {/* Sidebar drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-[320px] sm:w-full max-w-[380px] bg-slate-950 border-l border-slate-900 p-6 shadow-2xl z-50 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center pb-6 border-b border-slate-900 mb-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                      Section Controller
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Toggle visibility of website sections
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Section Toggle List */}
                <div className="space-y-3">
                  {sectionKeys.map(({ key, label }) => {
                    const isVisible = sections[key] ?? false;

                    return (
                      <div
                        key={key}
                        className="flex items-center justify-between p-3.5 rounded-xl border border-slate-900 bg-slate-900/35 hover:bg-slate-900/60 transition-colors"
                      >
                        <span className="text-sm font-semibold text-slate-350 text-slate-300">
                          {label}
                        </span>
                        
                        <button
                          onClick={() => onChange(key, !isVisible)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer select-none ${
                            isVisible
                              ? 'bg-blue-600/10 border-blue-900/30 text-blue-500'
                              : 'bg-slate-950 border-slate-900 text-slate-500'
                          }`}
                        >
                          {isVisible ? (
                            <>
                              <Eye className="h-3.5 w-3.5" />
                              Active
                            </>
                          ) : (
                            <>
                              <EyeOff className="h-3.5 w-3.5" />
                              Hidden
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom footer note */}
              <div className="border-t border-slate-900 pt-6 mt-8 text-center">
                <p className="text-[10px] font-mono text-slate-600">
                  // Master Template Section Config
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
