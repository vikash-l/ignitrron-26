import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, RefreshCw, CheckCircle2 } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <section id="about" className="pt-20 sm:pt-24 pb-16 sm:pb-20 relative border-t border-zinc-800/70 bg-[#0a0a0f] bg-gradient-to-b from-[#09090d] via-[#0a0a10] to-[#09090d] overflow-hidden">
      
      {/* Subtle Technical Blueprint Background & Flow Accents */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none mask-fade-center" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-600/05 rounded-full blur-[100px] pointer-events-none" />

      {/* Faint Edge System Markers */}
      <div className="absolute top-6 left-8 font-mono text-[9px] text-zinc-600 opacity-30 pointer-events-none">
        PARADIGM_EVAL // DIAGRAM_01
      </div>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Text Copy aligned to exact container edge */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>THE CORE PARADIGM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              THE PROBLEM
            </h2>

            <p className="text-zinc-300 text-base leading-relaxed font-sans max-w-[520px]">
              “Most users treat AI as a glorified search engine. Firing blind queries, receiving noisy hallucinations, and getting trapped in infinite copy-paste loops.”
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-[520px]">
              PROMPT://OVERDRIVE focuses on transforming prompt execution into a structured engineering discipline with exact schema enforcement and live working tools.
            </p>
          </motion.div>

          {/* RIGHT: Minimal Technical Diagram */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* BAD PROMPT FLOW CARD */}
              <div className="p-5 rounded-xl border border-zinc-800 bg-[#14141a]/80 backdrop-blur-xs space-y-3">
                <div className="text-[11px] font-mono font-bold tracking-wider text-zinc-400">
                  CONVENTIONAL APPROACH
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-center">
                    BAD PROMPT
                  </div>

                  <div className="flex justify-center text-zinc-500">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-center">
                    NOISY OUTPUT
                  </div>

                  <div className="flex justify-center text-zinc-500">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  <div className="p-2.5 rounded bg-zinc-800 text-zinc-300 font-semibold text-center flex items-center justify-center space-x-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-zinc-500" />
                    <span>COPY / PASTE LOOP</span>
                  </div>
                </div>
              </div>

              {/* GOOD PROMPT FLOW CARD */}
              <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-950/20 backdrop-blur-xs space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-wider text-purple-400">
                  <span>OVERDRIVE METHOD</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-zinc-900 border border-purple-800/50 text-purple-300 font-bold text-center">
                    GOOD PROMPT
                  </div>

                  <div className="flex justify-center text-purple-400">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  <div className="p-2.5 rounded bg-zinc-900 border border-purple-800/50 text-zinc-200 font-medium text-center">
                    STRUCTURED OUTPUT
                  </div>

                  <div className="flex justify-center text-purple-400">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  <div className="p-2.5 rounded bg-purple-600 text-white font-bold text-center">
                    USEFUL RESULT
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
