import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'slate' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = '',
}) => {
  const styles = {
    cyan: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    purple: 'bg-green-500/10 text-green-400 border border-green-500/25',
    slate: 'bg-slate-800 text-slate-355 text-slate-300 border border-slate-700',
    outline: 'border border-slate-800 text-slate-500 bg-transparent'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
