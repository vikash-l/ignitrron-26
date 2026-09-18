import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, AlertTriangle } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const EasterEggs = ({ logoClickCount = 0 }) => {
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    sounds.playCorrect();
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl glass-panel border-[#35D98B] shadow-emerald-lg flex items-center gap-3 font-mono text-xs text-[#35D98B] bg-[#0A100D]/95"
          >
            <Sparkles className="w-4 h-4 text-[#C8A951] animate-spin" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Floating Variant Symbol Egg */}
      <button
        onClick={() => triggerToast('YOU FOUND A LOKI VARIANT!')}
        title="Hidden Loki Symbol"
        className="fixed bottom-6 left-6 z-30 w-8 h-8 rounded-full glass-panel border-[#35D98B]/30 flex items-center justify-center font-mono text-xs text-[#35D98B]/60 hover:text-[#35D98B] hover:border-[#35D98B] transition-all group"
      >
        <span className="group-hover:scale-125 transition-transform">§</span>
      </button>
    </>
  );
};
