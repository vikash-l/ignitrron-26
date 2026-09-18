import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Atom } from 'lucide-react';
import { eventData } from '../../data/event';
import { Button } from '../ui/Button';

export const RegistrationCTA: React.FC = () => {
  if (!eventData.registration) return null;

  return (
    <section id="registration" className="py-24 bg-slate-950/20 relative overflow-hidden">
      {/* Background emerald glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] h-[350px] rounded-full bg-emerald-550/5 blur-[90px] pointer-events-none animate-pulse" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-slate-900 bg-slate-900/40 backdrop-blur-md p-10 sm:p-16 text-center shadow-[0_0_25px_rgba(16,185,129,0.02)] overflow-hidden"
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-slate-950 border border-slate-900 mb-6 shadow-inner text-emerald-400">
              <Atom className="h-8 w-8 animate-spin-[spin_5s_linear_infinite] text-glow-emerald" />
            </div>

            <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              READY TO GO FROM BANNER TO HERO?
            </h2>
            
            <p className="text-base sm:text-lg text-slate-350 mb-10 leading-relaxed font-normal text-slate-400">
              Find the gap. Create the idea. Defend the breakthrough in the ultimate scientific arena.
            </p>

            <div className="flex justify-center">
              <a href={eventData.registration.url} target="_blank" rel="noopener noreferrer" className="inline-block no-underline">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 shadow-emerald-500/10 text-white font-bold transition-all duration-300" 
                  icon={<ArrowRight className="h-5 w-5" />}
                >
                  {eventData.registration.label}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
