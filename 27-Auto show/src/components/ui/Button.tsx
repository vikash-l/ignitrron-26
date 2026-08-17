import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'fire' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'fire',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className,
  as = 'button',
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider uppercase font-mono-tech transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] disabled:opacity-50 disabled:cursor-not-allowed select-none relative overflow-hidden group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5 rounded",
    md: "px-6 py-3 text-xs sm:text-sm gap-2 rounded",
    lg: "px-8 py-4 text-sm sm:text-base gap-2.5 rounded"
  };

  const variantStyles = {
    fire: "bg-gradient-to-r from-[#D72614] via-[#FF6A00] to-[#FFB000] text-[#030303] font-black shadow-flame-glow hover:shadow-red-glow border border-[#FFB000]/40 hover:brightness-110",
    primary: "bg-[#17110D] text-[#F5F2EC] hover:text-[#FF6A00] border border-[#4A0A07] hover:border-[#FF6A00] shadow-scorched-card",
    secondary: "bg-[#101010] text-[#858585] hover:text-[#F5F2EC] border border-[#17110D] hover:border-[#858585]/40",
    outline: "bg-transparent text-[#F5F2EC] border border-[#4A0A07] hover:border-[#FF6A00] hover:text-[#FF6A00] hover:bg-[#D72614]/10",
    ghost: "bg-transparent text-[#858585] hover:text-[#F5F2EC]"
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </motion.button>
  );
};
