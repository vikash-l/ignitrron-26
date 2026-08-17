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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00E676] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#0B5D3B] to-[#00E676] hover:from-[#063D29] hover:to-[#00E676] text-white shadow-lg shadow-[#00E676]/20 hover:shadow-[#00E676]/35 border border-[#00E676]/40',
    secondary: 'bg-gradient-to-r from-[#C9A227] to-[#8F7418] hover:from-[#8F7418] hover:to-[#C9A227] text-white shadow-lg shadow-[#C9A227]/20 hover:shadow-[#C9A227]/35 border border-[#C9A227]/40',
    outline: 'border-2 border-[#063D29] hover:border-[#00E676] text-slate-300 hover:text-white bg-[#020604]/80 hover:bg-[#063D29]/30',
    ghost: 'text-slate-400 hover:text-[#00E676] hover:bg-[#063D29]/20',
    glow: 'bg-[#020604] text-[#00E676] border border-[#00E676]/40 hover:border-[#00E676] shadow-[0_0_15px_rgba(0,230,118,0.2)] hover:shadow-[0_0_25px_rgba(0,230,118,0.4)]'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
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
