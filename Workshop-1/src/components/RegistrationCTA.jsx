import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

export const RegistrationCTA = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-transparent p-8 sm:p-14 shadow-xl relative overflow-hidden space-y-6"
        >
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Small Icon Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold tracking-wider">
            <Rocket className="w-3.5 h-3.5" />
            <span>IGNITRRON’26 FLAGSHIP</span>
          </div>

          {/* Large CTA Heading */}
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
            READY TO OVERDRIVE?
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-300 text-lg sm:text-xl font-mono max-w-lg mx-auto">
            Turn better prompts into better possibilities.
          </p>

          {/* Registration Button Linked to Ticket9 */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.theticket9.com/event/ignitrron-26"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-sm font-bold tracking-wider inline-flex items-center space-x-3 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/40 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>REGISTER FOR OVERDRIVE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-zinc-500 font-mono">
            Limited slots available • ADC LAB • 20 – 21 SEPT 2026
          </p>

        </motion.div>

      </div>
    </section>
  );
};
