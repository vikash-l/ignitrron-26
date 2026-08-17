import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: 'emerald' | 'gold' | 'gray' | 'cyan' | 'purple';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  glowColor = 'emerald',
  hoverEffect = true,
}) => {
  const glowStyles = {
    emerald: 'hover:shadow-[0_0_25px_rgba(0,230,118,0.2)] border-[#063D29] hover:border-[#00E676]/50',
    cyan: 'hover:shadow-[0_0_25px_rgba(0,230,118,0.2)] border-[#063D29] hover:border-[#00E676]/50',
    gold: 'hover:shadow-[0_0_25px_rgba(201,162,39,0.2)] border-[#C9A227]/30 hover:border-[#C9A227]',
    purple: 'hover:shadow-[0_0_25px_rgba(201,162,39,0.2)] border-[#C9A227]/30 hover:border-[#C9A227]',
    gray: 'hover:shadow-[0_0_25px_rgba(0,230,118,0.05)] border-[#063D29]/50 hover:border-[#063D29]'
  };

  const borderGlow = glow ? glowStyles[glowColor] : 'border-[#063D29]/60';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`bg-[#020604]/80 backdrop-blur-md border rounded-xl p-6 transition-all duration-300 ${borderGlow} ${className}`}
    >
      {children}
    </motion.div>
  );
};
