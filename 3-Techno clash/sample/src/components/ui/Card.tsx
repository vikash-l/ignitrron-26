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
    cyan: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] border-cyan-500/20 hover:border-cyan-500/40',
    purple: 'hover:shadow-[0_0_25px_rgba(217,70,239,0.15)] border-purple-500/20 hover:border-purple-500/40',
    gray: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] border-slate-800 hover:border-slate-700'
  };

  const borderGlow = glow ? glowStyles[glowColor] : 'border-slate-800/80';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`bg-slate-900/60 backdrop-blur-md border rounded-xl p-6 transition-all duration-300 ${borderGlow} ${className}`}
    >
      {children}
    </motion.div>
  );
};
