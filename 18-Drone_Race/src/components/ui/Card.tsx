import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: 'gold' | 'amber' | 'gunmetal';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  glowColor = 'gold',
  hoverEffect = true,
}) => {
  const glowStyles: Record<'gold' | 'amber' | 'gunmetal', string> = {
    gold: 'hover:shadow-[0_0_25px_rgba(214,168,79,0.25)] border-[#d6a84f]/25 hover:border-[#d6a84f]/60',
    amber: 'hover:shadow-[0_0_25px_rgba(232,166,58,0.25)] border-[#e8a63a]/25 hover:border-[#e8a63a]/60',
    gunmetal: 'hover:shadow-[0_0_25px_rgba(5,6,7,0.8)] border-[#223038] hover:border-[#65757a]'
  };

  const borderGlow = glow ? glowStyles[glowColor || 'gold'] : 'border-[#d6a84f]/20 hover:border-[#d6a84f]/45 hover:shadow-lg hover:shadow-black/60';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`bg-[#0b1012]/85 backdrop-blur-md border rounded-xl p-6 transition-all duration-300 ${borderGlow} ${className}`}
    >
      {children}
    </motion.div>
  );
};
