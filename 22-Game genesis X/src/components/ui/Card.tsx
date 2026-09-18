import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  variant?: 'glass' | 'cyber' | 'solid' | 'gradient';
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  hoverEffect = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-xl p-6 relative overflow-hidden transition-all duration-300';

  const variantStyles = {
    glass: 'bg-[#0f1420]/80 backdrop-blur-xl border border-slate-800/80 text-slate-100',
    cyber: 'bg-[#0d121d] border border-cyan-500/20 text-slate-100 shadow-[0_0_15px_rgba(0,0,0,0.4)]',
    solid: 'bg-slate-900 border border-slate-800 text-slate-100',
    gradient: 'bg-gradient-to-b from-[#131929] to-[#0b0e17] border border-purple-500/20 text-slate-100',
  };

  const hoverStyles = hoverEffect
    ? 'hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)] hover:-translate-y-1'
    : '';

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
