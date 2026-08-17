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
  badge = "SPECIFICATION",
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
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#120A08]/90 border border-[#7F1D1D]/50 text-[#F97316] font-mono-tech text-[11px] uppercase tracking-widest mb-4 shadow-sm"
      >
        <span className="text-[#EF4444] font-bold">{index}</span>
        <span className="text-[#6E6762]">|</span>
        <span>{badge}</span>
      </motion.div>

      {/* Step 2: Main Heading in Bebas Neue */}
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#F5F1ED] font-display uppercase tracking-wide leading-tight mb-3"
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
          className="text-[#A8A09A] text-xs sm:text-sm max-w-xl leading-relaxed mx-auto font-normal"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Step 4: Elastic Hairline Divider Drawing Across */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-2 mt-4 origin-center ${isLeft ? 'justify-start origin-left' : 'justify-center'}`}
      >
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#B42318]/70" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] shadow-[0_0_8px_rgba(249,115,22,0.9)]" />
        <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#B42318]/70" />
      </motion.div>
    </div>
  );
};
