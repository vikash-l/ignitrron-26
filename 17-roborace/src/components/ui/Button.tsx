import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider font-display text-xs';
  
  const variants = {
    primary: 'bg-gradient-to-r from-slate-100 via-slate-200 to-zinc-400 hover:from-white hover:via-slate-100 hover:to-slate-300 text-zinc-950 shadow-md shadow-white/5 hover:shadow-white/15 border border-white/20',
    secondary: 'bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 text-slate-100 border border-zinc-750 hover:border-zinc-700',
    outline: 'border border-zinc-800 hover:border-slate-400 text-slate-300 hover:text-white bg-zinc-900/30 hover:bg-zinc-850',
    ghost: 'text-slate-400 hover:text-white hover:bg-zinc-800/40',
    glow: 'bg-zinc-950 text-sky-400 border border-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.1)] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-[10px]',
    md: 'px-5 py-2.5 text-xs',
    lg: 'px-8 py-3.5 text-sm'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -0.5 }}
      whileTap={{ scale: 0.98 }}
      className={`speed-btn ${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...(props as any)}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};
