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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C63C32] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  
  const variants = {
    primary: 'bg-[#C63C32] hover:bg-[#A82B22] text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest px-6 py-3 rounded font-bold transition-all shadow-md shadow-[#C63C32]/30 hover:shadow-lg hover:shadow-[#C63C32]/50',
    secondary: 'bg-[#243B63] hover:bg-[#2F4E82] text-[#F1E8D5] border border-[#C9A45C]/40 font-mono-tech text-xs uppercase tracking-widest px-6 py-3 rounded shadow-md',
    outline: 'border border-[#C9A45C]/40 hover:border-[#C9A45C] hover:bg-[#C9A45C]/10 text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest px-6 py-3 rounded transition-all',
    ghost: 'text-[#9B9A96] hover:text-[#F1E8D5] hover:bg-[#101827]',
    glow: 'bg-[#101827] text-[#C9A45C] border border-[#C9A45C]/50 hover:border-[#C9A45C] shadow-[0_0_15px_rgba(201,164,92,0.25)] hover:shadow-[0_0_20px_rgba(198,60,50,0.4)]'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
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
