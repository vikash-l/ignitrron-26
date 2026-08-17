import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: 'cyan' | 'purple' | 'gray';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  glowColor = 'cyan',
  hoverEffect = true,
}) => {
  const glowStyles = {
    cyan: 'border-emerald-500/20 hover:border-emerald-500/40',
    purple: 'border-green-500/20 hover:border-green-500/40',
    gray: 'border-slate-800 hover:border-slate-700'
  };

  const borderGlow = glow ? glowStyles[glowColor] : 'border-slate-900/80';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } } : {}}
      className={`bg-slate-900/60 backdrop-blur-md border rounded-xl p-6 ${borderGlow} ${hoverEffect ? 'hulk-rage-card cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};
