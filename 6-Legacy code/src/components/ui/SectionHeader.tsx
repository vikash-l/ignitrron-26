import React from 'react';
import { motion } from 'framer-motion';

export interface SectionHeaderProps {
  moduleNumber?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  moduleNumber,
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  const headerLabel = moduleNumber
    ? `${moduleNumber} // ${badge || 'SYSTEM MODULE'}`
    : badge
    ? `// ${badge}`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`space-y-3 mb-12 sm:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}
    >
      {headerLabel && (
        <div className="flex items-center gap-2 justify-center font-mono text-xs text-[#F04444] uppercase tracking-widest font-semibold">
          <span className="w-1.5 h-1.5 bg-[#F04444]" />
          <span>{headerLabel}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase text-[#E8EAED] font-industrial">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-[#9CA3AA] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-0.5 bg-[#C62828]/60 mx-auto mt-4" />
    </motion.div>
  );
};
