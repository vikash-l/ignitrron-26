import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: 'vermilion' | 'gold' | 'indigo';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  glowColor = 'gold',
  hoverEffect = true,
}) => {
  const glowStyles: Record<'vermilion' | 'gold' | 'indigo', string> = {
    vermilion: 'hover:shadow-[0_0_25px_rgba(198,60,50,0.3)] border-[#C63C32]/40 hover:border-[#C63C32]/80',
    gold: 'hover:shadow-[0_0_25px_rgba(201,164,92,0.25)] border-[#C9A45C]/30 hover:border-[#C9A45C]/70',
    indigo: 'hover:shadow-[0_0_25px_rgba(36,59,99,0.4)] border-[#243B63]/40 hover:border-[#243B63]/80'
  };

  const borderGlow = glow ? glowStyles[glowColor || 'gold'] : 'border-[#C9A45C]/20 hover:border-[#C9A45C]/50 hover:shadow-lg hover:shadow-[#C9A45C]/15';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`bg-[#101827]/85 backdrop-blur-md border rounded-xl p-6 transition-all duration-300 ${borderGlow} ${className}`}
    >
      {children}
    </motion.div>
  );
};
