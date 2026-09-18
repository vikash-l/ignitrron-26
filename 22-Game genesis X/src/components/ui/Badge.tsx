import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'pink' | 'emerald' | 'amber' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  icon,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 font-mono font-medium rounded-full uppercase tracking-wider transition-all';

  const variantStyles = {
    cyan: 'bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]',
    purple: 'bg-purple-950/80 text-purple-300 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.15)]',
    pink: 'bg-pink-950/80 text-pink-300 border border-pink-500/30 shadow-[0_0_10px_rgba(236,72,153,0.15)]',
    emerald: 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
    amber: 'bg-amber-950/80 text-amber-300 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)]',
    outline: 'bg-slate-900/60 text-slate-300 border border-slate-700',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
