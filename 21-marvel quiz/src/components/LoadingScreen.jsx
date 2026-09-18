import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [coords, setCoords] = useState('00.000.00');

  useEffect(() => {
    // Generate ticking coordinates
    const interval = setInterval(() => {
      const randomCoords = `${(Math.random() * 99).toFixed(2)}.${(Math.random() * 999).toFixed(0)}.${(Math.random() * 99).toFixed(0)}`;
      setCoords(randomCoords);
    }, 80);

    const timer1 = setTimeout(() => setStep(1), 800);
    const timer2 = setTimeout(() => setStep(2), 1700);
    const timer3 = setTimeout(() => setStep(3), 2600);
    const timerDone = setTimeout(() => onComplete(), 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerDone);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050706] text-[#F4F7F5] overflow-hidden"
      >
        {/* Ambient Grid Line Background */}
        <div className="absolute inset-0 bg-timeline-grid opacity-30 pointer-events-none" />

        {/* Central Temporal Ring Animation */}
        <div className="relative flex items-center justify-center w-64 h-64 mb-8">
          {/* Inner Glowing Point */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 1.2, 1], opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-3 h-3 bg-[#35D98B] rounded-full shadow-[0_0_20px_#35D98B]"
          />

          {/* Ring 1 - Fast counter-clockwise */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6, rotate: -360 }}
            transition={{ scale: { duration: 0.6 }, rotate: { duration: 8, repeat: Infinity, ease: 'linear' } }}
            className="absolute inset-4 rounded-full border border-dashed border-[#16A36A]/60"
          />

          {/* Ring 2 - Slow clockwise gold accent */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8, rotate: 360 }}
            transition={{ scale: { duration: 0.8, delay: 0.2 }, rotate: { duration: 15, repeat: Infinity, ease: 'linear' } }}
            className="absolute inset-0 rounded-full border border-[#C8A951]/40"
          />

          {/* Ring 3 - Outer Thin Emerald Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4, rotate: -180 }}
            transition={{ scale: { duration: 1, delay: 0.4 }, rotate: { duration: 20, repeat: Infinity, ease: 'linear' } }}
            className="absolute -inset-6 rounded-full border border-emerald-500/20 border-t-[#35D98B]"
          />

          {/* Orbiting Symbol Fragments */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-10 flex items-center justify-between pointer-events-none opacity-40 font-mono text-[9px] text-[#35D98B]"
          >
            <span>TVA-616</span>
            <span>§99.4</span>
            <span>Ø_BRANCH</span>
          </motion.div>
        </div>

        {/* Cinematic Text Displays */}
        <div className="h-16 flex flex-col items-center justify-center text-center font-mono">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-[#8E9A94] text-sm tracking-[0.3em]"
              >
                INITIALIZING TIMELINE...
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-[#35D98B] text-sm tracking-[0.3em] font-semibold"
              >
                STABILIZING REALITY...
              </motion.div>
            )}

            {step >= 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                <span className="text-[#C8A951] text-xs tracking-[0.4em] mb-1">TVA ARCHIVE PROTOCOL</span>
                <span className="font-display font-bold text-2xl tracking-[0.2em] text-[#F4F7F5] glow-text">
                  IGNITRRON <span className="text-[#35D98B]">//</span> MARVEL QUIZ
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 text-[10px] text-[#8E9A94] tracking-widest">
            COORDINATE: <span className="text-[#35D98B]">{coords}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
