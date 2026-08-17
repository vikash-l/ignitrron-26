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
  badge = "STREET EXPERIENCE",
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isLeft = align === 'left';

  return (
    <div className={`mb-14 ${isLeft ? 'text-left' : 'text-center mx-auto'} ${className}`}>
      {/* Step 1: Japanese Ronin Eyebrow Badge (No //) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#101827]/90 border border-[#C9A45C]/35 text-[#F1E8D5] font-mono-tech text-[11px] uppercase tracking-widest mb-4 shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C63C32] animate-pulse" />
        <span className="text-[#C9A45C] font-bold">{index}</span>
        <span className="text-stone-600">|</span>
        <span className="text-[#F1E8D5]/90">{badge}</span>
      </motion.div>

      {/* Step 2: Main Heading in Bebas Neue / Editorial */}
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#F1E8D5] font-display uppercase tracking-wide leading-tight mb-3"
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
          className="text-[#9B9A96] text-xs sm:text-sm max-w-xl leading-relaxed mx-auto font-normal"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Step 4: Japanese Hairline Divider with Enso/Vermilion Dot */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-2 mt-4 origin-center ${isLeft ? 'justify-start origin-left' : 'justify-center'}`}
      >
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#C9A45C]/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C63C32] shadow-[0_0_8px_rgba(198,60,50,0.9)]" />
        <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#C9A45C]/60" />
      </motion.div>
    </div>
  );
};
