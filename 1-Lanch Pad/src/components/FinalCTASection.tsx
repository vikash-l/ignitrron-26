import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/soundFx';


interface FinalCTASectionProps {
  onOpenRegister: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenRegister }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-32 px-4 bg-[#0a0a0c] overflow-hidden border-t-2 border-[#ff003c]">
      {/* Darkening comic issue conclusion backdrop */}
      <div className="absolute inset-0 bg-black/90 pointer-events-none" />

      {/* Single Web Line Stretching Across Screen */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#ff003c]">
        <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="2" strokeDasharray="10 10" className="animate-web-line" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Kinetic Four-Step Battle Cry */}
        <div className="space-y-2 mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-anton text-3xl sm:text-5xl text-gray-400 uppercase tracking-wide"
          >
            CHOOSE THE DOMAIN.
          </motion.h3>

          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-anton text-3xl sm:text-5xl text-[#00f0ff] uppercase tracking-wide"
          >
            CRACK THE MYSTERY.
          </motion.h3>

          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-anton text-3xl sm:text-5xl text-[#ff003c] uppercase tracking-wide"
          >
            BUILD THE BRAND.
          </motion.h3>

          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-wide"
          >
            OWN THE PITCH.
          </motion.h3>
        </div>

        {/* Divider Pause */}
        <div className="w-24 h-1 bg-[#00f0ff] my-4 shadow-glow-blue" />

        {/* Finale Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="my-6"
        >
          <h2 className="font-anton text-6xl sm:text-8xl md:text-9xl text-white tracking-tight uppercase leading-none drop-shadow-[5px_5px_0px_#ff003c]">
            🚀 LAUNCHPAD
          </h2>
          <h3 className="font-bebas text-3xl sm:text-5xl text-[#00f0ff] tracking-wider uppercase mt-2">
            NEW BRAND. YOUR BRAND.
          </h3>
          <p className="font-space text-lg text-gray-300 mt-2">
            A hands-on branding challenge by the <span className="text-white font-bold underline decoration-[#ff003c]">Design Club</span>
          </p>
        </motion.div>

        {/* Web Shooting CTA Button */}
        <div className="relative mt-8">
          {/* Animated Web Strand shooting on hover */}
          {isHovered && (
            <svg className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-24 pointer-events-none stroke-[#00f0ff] overflow-visible">
              <path d="M 192 48 L 0 -50" strokeWidth="2" strokeDasharray="4 4" className="animate-web-line" />
              <path d="M 192 48 L 384 -50" strokeWidth="2" strokeDasharray="4 4" className="animate-web-line" />
            </svg>
          )}

          <button
            onMouseEnter={() => {
              setIsHovered(true);
              soundFx.playClick();
            }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              soundFx.playWebShoot();
              onOpenRegister();
            }}
            className="group relative px-10 py-5 bg-[#ff003c] text-white font-bebas text-3xl tracking-widest rounded-lg border-2 border-white shadow-spider-red hover:bg-[#ff003c]/90 hover:shadow-glow-red transition-all duration-200 active:translate-y-1 flex items-center gap-3"
          >
            <Zap className="w-8 h-8 fill-white group-hover:text-[#00f0ff] transition-colors" />
            <span>ENTER LAUNCHPAD</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
