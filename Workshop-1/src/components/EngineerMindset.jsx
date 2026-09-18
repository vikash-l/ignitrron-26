import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Wrench, Shield, Sparkles } from 'lucide-react';

export const EngineerMindset = () => {
  return (
    <section className="py-16 sm:py-20 relative border-t border-slate-200 dark:border-zinc-800">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8">
        
        <div className="bg-slate-900 text-white dark:bg-[#141417] dark:text-zinc-100 rounded-3xl border border-slate-800 dark:border-zinc-800/80 overflow-hidden shadow-xl relative">
          
          {/* Subtle Ambient Accent Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* LEFT: Editorial Text */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold">
                <Wrench className="w-3.5 h-3.5" />
                <span>ENGINEERING ETHOS</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-white">
                BUILD. TEST. REPEAT.
              </h2>

              <p className="text-xl sm:text-2xl font-mono text-purple-300 font-semibold tracking-wide">
                “Don't just ask AI for answers. Learn how to direct it.”
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                Great inventors don't rely on luck. They construct precise feedback loops, test edge cases, and refine parameters until their creations move flawlessly. PROMPT://OVERDRIVE is your workshop to turn ideas into robust reality.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>Prompt Schema Control</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Deterministic Execution</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Cropped Character Detail Highlight */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 h-full relative min-h-[300px] lg:min-h-[400px] bg-slate-950 dark:bg-black/50 overflow-hidden flex items-center justify-center p-6 border-t lg:border-t-0 lg:border-l border-slate-800 dark:border-zinc-800"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}rocket-engineer.png`} 
                  alt="Build. Test. Repeat. Engineer Workstation"
                  className="max-h-[360px] object-contain drop-shadow-[0_10px_30px_rgba(139,92,246,0.2)] transform hover:scale-105 transition duration-500"
                />
                
                <div className="absolute bottom-4 left-4 bg-slate-900/90 border border-slate-700/80 px-3 py-1.5 rounded-lg text-[11px] font-mono text-purple-300 backdrop-blur-md shadow-lg flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>MOTTO: BUILD. TEST. REPEAT.</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
