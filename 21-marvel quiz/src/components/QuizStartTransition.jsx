import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LokiVisual } from './LokiVisual';

export const QuizStartTransition = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 600);
    const timer2 = setTimeout(() => setStep(2), 1400);
    const timerDone = setTimeout(() => onComplete(), 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timerDone);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050706] text-[#F4F7F5] overflow-hidden">
      
      {/* Background Magic Circle */}
      <div className="relative flex items-center justify-center mb-8">
        <LokiVisual size="small" showIllusions={true} />

        <div className="absolute -inset-12 rounded-full border-2 border-dashed border-[#35D98B]/50 animate-portal-spin pointer-events-none" />
      </div>

      {/* Cinematic Text Displays */}
      <div className="h-20 flex flex-col items-center justify-center text-center font-mono">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="s0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-[#35D98B] text-xl font-bold tracking-[0.3em]"
            >
              "VERY WELL..."
            </motion.div>
          )}

          {step >= 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#C8A951] text-xs tracking-[0.3em] uppercase mb-1">
                LOKI'S TRIAL BEGINS
              </span>
              <span className="font-display text-xl sm:text-2xl font-bold text-[#F4F7F5] tracking-wide">
                "LET US SEE HOW CLEVER YOU REALLY ARE."
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};
