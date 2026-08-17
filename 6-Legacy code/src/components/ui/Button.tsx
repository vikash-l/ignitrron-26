import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#F04444] cursor-pointer text-center clip-corner-sm border border-transparent';

  const variants = {
    primary: 'bg-[#C62828] text-white hover:bg-[#A51D1D] border-l-2 border-l-[#F04444] shadow-md shadow-red-950/40',
    secondary: 'bg-[#1B1E24] text-[#E8EAED] hover:bg-[#242831] border border-[#3A404E] hover:border-[#F04444]/60',
    outline: 'bg-transparent border border-[#3A404E] text-[#E8EAED] hover:border-[#F04444] hover:bg-red-950/20 hover:text-white',
    ghost: 'text-[#9CA3AA] hover:text-[#E8EAED] hover:bg-[#1B1E24]',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-2',
    md: 'px-5 py-2.5 text-xs sm:text-sm gap-2.5',
    lg: 'px-7 py-3.5 text-sm sm:text-base gap-3',
  };

  const combinedClasses = twMerge(
    clsx(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    )
  );

  const motionProps = {
    whileHover: { scale: 1.01 },
    whileTap: { scale: 0.99 },
    transition: { duration: 0.1 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        {...motionProps}
      >
        {children}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      {...motionProps}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </motion.button>
  );
};
