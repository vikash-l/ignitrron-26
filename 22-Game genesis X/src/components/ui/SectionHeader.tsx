import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';

export interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {badge && (
        <div className={`mb-3 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <Badge variant="cyan" icon={badgeIcon}>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
        <span className="gradient-text">{title}</span>
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`mt-4 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full inline-block"></span>
        <span className="w-2 h-1 bg-cyan-400 rounded-full inline-block"></span>
      </div>
    </motion.div>
  );
};
