import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
  bordered?: boolean;
  activeAccent?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  bordered = true,
  activeAccent = false,
  className,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -2, transition: { duration: 0.15 } } : undefined}
      className={twMerge(
        clsx(
          'bg-[#121418] text-[#E8EAED] p-6 relative transition-colors duration-200',
          bordered && (activeAccent ? 'machined-border-red' : 'machined-border'),
          hoverEffect && 'hover:bg-[#181B22] hover:border-[#3E4452]',
          className
        )
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
