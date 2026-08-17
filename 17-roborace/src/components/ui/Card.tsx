import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: 'chrome' | 'silver' | 'blue' | 'gray';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  glowColor = 'chrome',
  hoverEffect = true,
  onClick,
}) => {
  const glowStyles = {
    chrome: 'border-slate-500/20 hover:border-slate-300/40 shadow-[0_0_12px_rgba(255,255,255,0.03)]',
    silver: 'border-slate-700/30 hover:border-slate-400/50',
    blue: 'border-sky-500/10 hover:border-sky-500/35 shadow-[0_0_12px_rgba(56,189,248,0.05)]',
    gray: 'border-zinc-800 hover:border-zinc-700'
  };

  const borderGlow = glow ? glowStyles[glowColor] : 'border-zinc-800/80';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -3, scale: 1.005, transition: { duration: 0.12, ease: 'easeOut' } } : {}}
      onClick={onClick}
      className={`bg-zinc-900/60 backdrop-blur-md border rounded-xl p-6 ${borderGlow} ${hoverEffect ? 'quicksilver-card cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};
