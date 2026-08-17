import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badge,
  align = 'center',
  className = '',
}) => {
  const isLeft = align === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 max-w-3xl ${isLeft ? 'text-left' : 'text-center mx-auto'} ${className}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#00E676] bg-[#063D29]/40 border border-[#00E676]/30 mb-3 shadow-[0_0_10px_rgba(0,230,118,0.15)]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-[#C9A227] font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-gradient-to-r from-[#00E676] via-[#0B5D3B] to-[#C9A227] rounded-full mt-4 ${isLeft ? '' : 'mx-auto'}`} />
    </motion.div>
  );
};
