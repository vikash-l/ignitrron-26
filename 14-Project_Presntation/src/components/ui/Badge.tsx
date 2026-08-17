import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'slate' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className = '',
}) => {
  const styles = {
    blue: 'bg-blue-900/50 border border-blue-600/30 text-blue-300 font-mono text-[8px] px-3 py-1 rounded-full uppercase tracking-widest',
    cyan: 'bg-cyan-900/30 border border-cyan-700/30 text-cyan-300 font-mono text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest',
    slate: 'bg-slate-800 text-slate-300 border border-slate-750 font-mono text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest',
    outline: 'border border-slate-700 text-slate-400 bg-transparent font-mono text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest'
  };

  return (
    <span className={`inline-flex items-center justify-center ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
