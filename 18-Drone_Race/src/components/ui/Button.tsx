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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d6a84f] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#d6a84f] via-[#e8a63a] to-[#d6a84f] hover:from-[#f2d58a] hover:to-[#e8a63a] text-[#050607] font-mono text-xs uppercase tracking-widest px-6 py-3 rounded font-bold transition-all shadow-lg shadow-[#d6a84f]/25 hover:shadow-[#d6a84f]/45',
    secondary: 'bg-[#121b1e] border border-[#d6a84f]/40 hover:border-[#d6a84f]/70 text-[#f2d58a] hover:text-white shadow-md shadow-black/40',
    outline: 'border border-[#d6a84f]/30 hover:border-[#d6a84f]/60 text-[#879296] hover:text-[#f3f3ef] font-mono text-xs uppercase tracking-widest px-6 py-3 rounded transition-all',
    ghost: 'text-[#879296] hover:text-[#f3f3ef] hover:bg-[#0d1416]',
    glow: 'bg-[#050607] text-[#f2d58a] border border-[#d6a84f]/40 hover:border-[#d6a84f]/80 shadow-[0_0_15px_rgba(214,168,79,0.25)] hover:shadow-[0_0_22px_rgba(232,166,58,0.4)]'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...(props as any)}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};
