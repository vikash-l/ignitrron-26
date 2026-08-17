import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'highlight' | 'carbon' | 'glass' | 'interactive';
  glowing?: boolean;
  glowColor?: 'red' | 'amber' | 'cyan';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'carbon',
  glowing = false,
  glowColor = 'red',
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-dark-900 border border-dark-700/60 rounded-xl",
    carbon: "carbon-card rounded-xl shadow-card-dark",
    highlight: "bg-gradient-to-b from-dark-850 to-dark-950 border border-octane-red/40 rounded-xl shadow-glow-red/20",
    glass: "bg-dark-900/60 backdrop-blur-md border border-white/10 rounded-xl",
    interactive: "carbon-card rounded-xl cursor-pointer transition-all duration-300 hover:border-octane-red/60 hover:-translate-y-1"
  };

  const glowStyles = {
    red: "border-octane-red/50 shadow-glow-red",
    amber: "border-octane-amber/50 shadow-glow-amber",
    cyan: "border-nitro-cyan/50 shadow-glow-cyan"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden p-6 text-metal-200 transition-colors",
        variantStyles[variant],
        glowing && glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
