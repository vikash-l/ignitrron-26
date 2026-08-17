import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: 'crimson' | 'ember' | 'gray';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  glowColor = 'crimson',
  hoverEffect = true,
}) => {
  const glowStyles: Record<'crimson' | 'ember' | 'gray', string> = {
    crimson: 'hover:shadow-[0_0_25px_rgba(180,35,24,0.25)] border-[#7F1D1D]/30 hover:border-[#B42318]/50',
    ember: 'hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] border-[#7F1D1D]/30 hover:border-[#F97316]/50',
    gray: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] border-[#24100D] hover:border-[#7F1D1D]'
  };

  const borderGlow = glow ? glowStyles[glowColor || 'crimson'] : 'border-[#7F1D1D]/25 hover:border-[#B42318]/45 hover:shadow-lg hover:shadow-[#B42318]/15';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`bg-[#120A08]/75 backdrop-blur-md border rounded-xl p-6 transition-all duration-300 ${borderGlow} ${className}`}
    >
      {children}
    </motion.div>
  );
};
