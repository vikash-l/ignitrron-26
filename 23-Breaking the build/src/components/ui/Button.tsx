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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B42318] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  
  const variants = {
    primary: 'bg-[#B42318] hover:bg-[#EF4444] text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest px-6 py-3 rounded font-bold transition-all hover:shadow-lg hover:shadow-[#B42318]/30',
    secondary: 'bg-gradient-to-r from-[#B42318] to-[#F97316] hover:from-[#EF4444] hover:to-[#F59E0B] text-[#F5F1ED] shadow-lg shadow-[#B42318]/25 hover:shadow-[#EF4444]/35',
    outline: 'border border-[#7F1D1D]/50 hover:border-[#B42318] text-[#A8A09A] hover:text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest px-6 py-3 rounded transition-all',
    ghost: 'text-[#A8A09A] hover:text-[#F5F1ED] hover:bg-[#24100D]/50',
    glow: 'bg-[#070506] text-[#F97316] border border-[#B42318]/40 hover:border-[#EF4444] shadow-[0_0_15px_rgba(180,35,24,0.2)] hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]'
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
