import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu } from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export interface RegistrationCTAProps {
  event: EventConfig;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ event }) => {
  const reg = event.registration;

  const title = 'SYSTEM READY.';
  const subtitle = 'THE LEGACY CODE IS WAITING.';
  const label = 'ENTER THE CHALLENGE ↗';
  const url = reg?.url || 'https://www.theticket9.com/event/ignitrron-26';
  const deadlineText = reg?.deadlineText || '40 TEAMS MAXIMUM • HPC LAB • 18 SEPTEMBER 2026';

  return (
    <section id="registration" className="py-20 bg-[#0D0F11] border-t border-[#262A33]">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative bg-[#121418] border border-[#262A33] p-8 sm:p-14 text-center space-y-6 clip-corner-tl-br machined-border shadow-2xl overflow-hidden"
        >
          {/* Subtle Red Core Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1D24] border border-red-900/40 text-[11px] font-mono tracking-widest text-[#F04444] uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>PROTOCOL INITIATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-industrial text-[#E8EAED] tracking-wider uppercase">
              {title}
            </h2>

            <p className="text-base sm:text-lg font-mono font-bold text-[#9CA3AA] tracking-widest uppercase">
              {subtitle}
            </p>

            {deadlineText && (
              <div className="text-xs font-mono tracking-widest text-[#626870] uppercase pt-2">
                {deadlineText}
              </div>
            )}

            <div className="pt-6">
              <Button href={url} target="_blank" rel="noopener noreferrer" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                {label}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
