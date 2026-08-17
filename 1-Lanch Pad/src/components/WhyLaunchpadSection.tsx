import React from 'react';
import { motion } from 'framer-motion';

export const WhyLaunchpadSection: React.FC = () => {
  return (
    <section className="relative py-32 px-4 bg-[#0a0a0c] overflow-hidden border-t border-white/10">
      {/* Halftone & Red/Blue Glow Overlay */}
      <div className="absolute inset-0 bg-halftone-red opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#ff003c]/15 to-[#00f0ff]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-anton text-6xl sm:text-8xl md:text-9xl text-white tracking-wider uppercase mb-8 drop-shadow-[5px_5px_0px_#ff003c]"
        >
          WHY LAUNCHPAD?
        </motion.h2>

        {/* Primary Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-bebas text-3xl sm:text-5xl text-[#00f0ff] tracking-wider uppercase leading-tight max-w-4xl mb-6"
        >
          BECAUSE BUILDING A BRAND ISN'T JUST ABOUT MAKING A LOGO.
        </motion.p>

        {/* Core Philosophy Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-8 sm:p-12 bg-[#121216]/80 border-2 border-white/20 rounded-2xl max-w-3xl shadow-spider-dual backdrop-blur-md"
        >
          <p className="font-space text-xl sm:text-3xl text-white font-bold leading-relaxed tracking-wide">
            "It's about creating an identity, an experience, and a story people remember."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
