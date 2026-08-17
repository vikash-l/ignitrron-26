import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  index?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index = "01",
  badge = "TELEMETRY",
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isLeft = align === 'left';

  return (
    <div className={`mb-14 ${isLeft ? 'text-left' : 'text-center mx-auto'} ${className}`}>
      {/* Step 1: Technical Monospace Eyebrow Badge (No //) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#0b1012]/90 border border-[#d6a84f]/30 text-[#d6a84f] font-mono-tech text-[11px] uppercase tracking-widest mb-4"
      >
        <span className="text-[#f2d58a] font-bold">{index}</span>
        <span className="text-[#65757a]">|</span>
        <span>{badge}</span>
      </motion.div>

      {/* Step 2: Main Heading in Bebas Neue */}
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#f3f3ef] font-display uppercase tracking-wide leading-tight mb-3"
        style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
      >
        {title}
      </motion.h2>

      {/* Step 3: Supporting Text */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#879296] text-xs sm:text-sm max-w-xl leading-relaxed mx-auto font-normal"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Step 4: Hairline Divider Drawing Across */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-2 mt-4 origin-center ${isLeft ? 'justify-start origin-left' : 'justify-center'}`}
      >
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#d6a84f]/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#d6a84f] shadow-[0_0_8px_rgba(214,168,79,0.9)]" />
        <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#d6a84f]/60" />
      </motion.div>
    </div>
  );
};
