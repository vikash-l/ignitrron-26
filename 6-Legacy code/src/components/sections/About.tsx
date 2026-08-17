import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Terminal } from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

export interface AboutProps {
  event: EventConfig;
}

export const About: React.FC<AboutProps> = ({ event }) => {
  const about = event.about;

  if (!about) return null;

  return (
    <section id="about" className="py-20 bg-[#0D0F11]">
      <Container size="lg">
        <SectionHeader
          moduleNumber="01"
          badge="MISSION BRIEF"
          title="THE SYSTEM IS BROKEN."
          subtitle={event.name}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Mission Text Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-[#121418] border border-[#262A33] p-8 space-y-6 flex flex-col justify-between clip-corner-tl-br machined-border"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#F04444] uppercase">
                <Terminal className="w-4 h-4" />
                <span>PRIMARY SYSTEM OBJECTIVE</span>
              </div>
              <p className="text-base text-[#9CA3AA] leading-relaxed">
                {about.description}
              </p>
            </div>

            {about.bullets && about.bullets.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-[#262A33]">
                {about.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-mono text-[#E8EAED]">
                    <span className="text-[#F04444] font-bold mt-0.5">❯</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Angular Mechanical Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-[#171A21] border border-[#3A404E] p-8 flex flex-col justify-between space-y-6 clip-corner-md"
          >
            <div className="flex items-center justify-between border-b border-[#2B2F38] pb-3 text-xs font-mono tracking-widest text-[#9CA3AA]">
              <span>SYSTEM DIAGNOSTIC</span>
              <span className="text-[#F04444]">SYS-RESCUE // 01</span>
            </div>

            <div className="space-y-4 py-4 text-center">
              <div className="w-16 h-16 mx-auto bg-[#121418] border border-[#F04444]/40 flex items-center justify-center text-[#F04444]">
                <Cpu className="w-8 h-8" />
              </div>
              <div className="font-industrial font-extrabold text-lg text-[#E8EAED] uppercase tracking-wider">
                UNFAMILIAR CODEBASE RECOVERY
              </div>
              <p className="text-xs text-[#9CA3AA] leading-relaxed">
                Inherit multi-file application with hidden bugs, technical debt, and zero architectural documentation.
              </p>
            </div>

            <div className="p-3 bg-[#0D0F11] border border-[#262A33] text-[10px] font-mono tracking-widest text-[#9CA3AA] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F04444]" />
                STABILITY VERIFIED
              </span>
              <span>VER 4.0.1</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
