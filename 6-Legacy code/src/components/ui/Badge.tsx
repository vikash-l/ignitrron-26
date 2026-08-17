import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'neutral' | 'outline';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  className,
  icon,
}) => {
  const variants = {
    accent: 'bg-red-950/30 text-[#F04444] border border-red-900/50',
    neutral: 'bg-[#1B1E24] text-[#9CA3AA] border border-[#2B2F38]',
    outline: 'bg-transparent text-[#9CA3AA] border border-[#3A404E]',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono uppercase tracking-widest font-semibold shrink-0 border',
          variants[variant],
          className
        )
      )}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
