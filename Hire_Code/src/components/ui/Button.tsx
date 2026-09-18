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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BFA6] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  
  const variants = {
    primary: 'bg-[#00BFA6] hover:bg-[#22D3EE] text-[#05070A] font-mono-tech text-xs uppercase tracking-widest px-6 py-3 rounded font-bold transition-all hover:shadow-lg hover:shadow-[#00BFA6]/30',
    secondary: 'bg-gradient-to-r from-[#00BFA6] to-[#22D3EE] hover:from-[#22D3EE] hover:to-[#D6B86A] text-[#05070A] font-mono-tech text-xs uppercase tracking-widest px-6 py-3 rounded font-bold shadow-lg shadow-[#00BFA6]/25 hover:shadow-[#22D3EE]/35',
    outline: 'border border-[#00BFA6]/50 hover:border-[#22D3EE] text-[#8997A3] hover:text-[#E8EEF2] font-mono-tech text-xs uppercase tracking-widest px-6 py-3 rounded transition-all bg-[#08131C]/60',
    ghost: 'text-[#8997A3] hover:text-[#E8EEF2] hover:bg-[#0B1720]/60 font-mono-tech text-xs uppercase tracking-widest px-4 py-2 rounded',
    glow: 'bg-[#08131C] text-[#22D3EE] border border-[#00BFA6]/40 hover:border-[#22D3EE] shadow-[0_0_15px_rgba(0,191,166,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] font-mono-tech text-xs uppercase tracking-widest px-6 py-3 rounded'
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

