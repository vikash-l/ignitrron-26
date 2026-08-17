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
    cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/25',
    purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/25',
    slate: 'bg-slate-800 text-slate-300 border border-slate-700',
    outline: 'border border-slate-700 text-slate-400 bg-transparent'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
