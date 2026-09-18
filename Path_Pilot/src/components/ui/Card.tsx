import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: 'blue' | 'cyan' | 'gray';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  glowColor = 'blue',
  hoverEffect = true,
}) => {
  const glowStyles: Record<'blue' | 'cyan' | 'gray', string> = {
    blue: 'hover:shadow-[0_0_25px_rgba(29,78,216,0.15)] border-blue-500/20 hover:border-blue-500/40',
    cyan: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] border-cyan-500/20 hover:border-cyan-500/40',
    gray: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] border-slate-800 hover:border-slate-700'
  };

  const borderGlow = glow ? glowStyles[glowColor || 'blue'] : 'border-blue-900/20 hover:border-blue-600/40 hover:shadow-lg hover:shadow-blue-900/20';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`bg-[#0a1628]/70 backdrop-blur-md border rounded-xl p-6 transition-all duration-300 ${borderGlow} ${className}`}
    >
      {children}
    </motion.div>
  );
};
