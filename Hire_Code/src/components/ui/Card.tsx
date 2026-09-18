import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: 'emerald' | 'cyan' | 'gold';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  glowColor = 'emerald',
  hoverEffect = true,
}) => {
  const glowStyles: Record<'emerald' | 'cyan' | 'gold', string> = {
    emerald: 'hover:shadow-[0_0_25px_rgba(0,191,166,0.25)] border-[#00BFA6]/30 hover:border-[#00BFA6]/60',
    cyan: 'hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] border-[#00BFA6]/30 hover:border-[#22D3EE]/60',
    gold: 'hover:shadow-[0_0_25px_rgba(214,184,106,0.25)] border-[#00BFA6]/30 hover:border-[#D6B86A]/60'
  };

  const borderGlow = glow ? glowStyles[glowColor || 'emerald'] : 'border-[#00BFA6]/20 hover:border-[#00BFA6]/45 hover:shadow-lg hover:shadow-[#00BFA6]/10';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`bg-[#08131C]/75 backdrop-blur-md border rounded-xl p-6 transition-all duration-300 ${borderGlow} ${className}`}
    >
      {children}
    </motion.div>
  );
};

