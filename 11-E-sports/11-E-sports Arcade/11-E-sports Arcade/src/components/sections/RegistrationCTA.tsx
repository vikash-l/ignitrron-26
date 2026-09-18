import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event';
import { Button } from '../ui/Button';

export const RegistrationCTA: React.FC = () => {
  if (!eventData.registration) return null;

  return (
    <section id="registration" className="py-24 bg-slate-950/20 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md p-10 sm:p-16 text-center glow-primary overflow-hidden"
        >
          {/* Subtle grid in container */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-slate-950 border border-slate-800 mb-6 shadow-inner text-cyan-400">
              <Sparkles className="h-8 w-8 text-glow-cyan animate-pulse" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              Ready to Shape the Future?
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed">
              Join hundreds of developers, designers, and innovators from colleges nationwide. Showcase your talent, network with industry veterans, and win amazing prizes at {eventData.name}.
            </p>

            {eventData.deadline && (
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-purple-400 mb-6">
                Registration Deadline: {eventData.deadline}
              </p>
            )}

            <div className="flex justify-center">
              <a
                href={eventData.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
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
