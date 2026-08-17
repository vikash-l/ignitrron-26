import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { soundFx } from '../utils/soundFx';


export const MysteryTwistSection: React.FC = () => {
  const [currentTwist, setCurrentTwist] = useState<string>(
    'YOUR BRAND MUST BE LAUNCHED WITH ZERO PLASTIC & TARGET A NIGHTTIME-ONLY AUDIENCE.'
  );
  const [isGlitching, setIsGlitching] = useState(false);

  const sampleTwists = [
    'YOUR BRAND MUST BE LAUNCHED WITH ZERO PLASTIC & TARGET A NIGHTTIME-ONLY AUDIENCE.',
    'INCORPORATE A RETRO 80S SYNTHWAVE PALETTE WITH HIGH-TECH BIOMETRIC FUNCTIONALITY.',
    'THE BRAND MUST OFFER A DUAL-IDENTITY: ONE FOR PHYSICAL STOREFRONTS AND ONE FOR METAVERSE.',
    'THE LOGO MUST BE REVERSIBLE OR READABLE IN BOTH LIGHT & DARK COLOUR MODES.',
    'TARGET GENERATION Z WITH A ZERO-TEXT, PURELY GRAPHIC COMIC MARKETING CAMPAIGN.'
  ];

  const handleGenerateTwist = () => {
    soundFx.playBoxUnlock();
    setIsGlitching(true);

    setTimeout(() => {
      const random = sampleTwists[Math.floor(Math.random() * sampleTwists.length)];
      setCurrentTwist(random);
      setIsGlitching(false);
    }, 600);
  };

  return (
    <section className="relative py-24 px-4 bg-[#121216] overflow-hidden border-y-4 border-[#ff003c]">
      {/* Sudden Red Stage Lighting & Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone-red opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff003c]/20 via-transparent to-[#ff003c]/20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Warning Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ff003c] text-white font-space text-xs tracking-widest font-bold uppercase mb-6 shadow-glow-red animate-pulse">
          <AlertTriangle className="w-4 h-4 fill-white" />
          SYSTEM ALERT • UNEXPECTED VARIABLE
        </div>

        {/* Dynamic Title */}
        <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl text-white tracking-wider uppercase mb-3 drop-shadow-[5px_5px_0px_#ff003c]">
          BUT THERE'S A TWIST.
        </h2>

        <h3 className="font-bebas text-3xl sm:text-5xl text-[#00f0ff] tracking-wide mb-6 uppercase">
          THE MYSTERY BOX TWIST
        </h3>

        <p className="font-space text-base sm:text-xl text-gray-200 max-w-2xl font-medium mb-10">
          The Mystery Box adds an unexpected twist to challenge your creativity and strategic thinking.
        </p>

        {/* Comic Impact Card */}
        <div className="relative w-full max-w-3xl p-8 sm:p-12 bg-black border-4 border-[#ff003c] rounded-xl shadow-spider-red overflow-hidden">
          <div className="absolute top-3 left-4 font-bebas text-sm text-[#ff003c]">
            // SECRET CONSTRAINT CARD
          </div>

          <div className="relative z-10 my-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTwist}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={isGlitching ? 'animate-comic-glitch text-[#00f0ff]' : ''}
              >
                <p className="font-anton text-2xl sm:text-4xl text-white uppercase tracking-wider leading-snug">
                  "{currentTwist}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Randomizer Twist Simulator */}
          <button
            onClick={handleGenerateTwist}
            disabled={isGlitching}
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-[#121216] border border-[#00f0ff] text-[#00f0ff] font-bebas text-lg tracking-wider rounded hover:bg-[#00f0ff] hover:text-black transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${isGlitching ? 'animate-spin' : ''}`} />
            SIMULATE RANDOM TWIST CARD
          </button>
        </div>
      </div>
    </section>
  );
};
