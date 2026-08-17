import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'gold' | 'slate' | 'outline' | 'cyan' | 'purple';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  className = '',
}) => {
  const styles = {
    emerald: 'bg-[#063D29]/50 text-[#00E676] border border-[#00E676]/30 shadow-[0_0_8px_rgba(0,230,118,0.15)]',
    cyan: 'bg-[#063D29]/50 text-[#00E676] border border-[#00E676]/30 shadow-[0_0_8px_rgba(0,230,118,0.15)]',
    gold: 'bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 shadow-[0_0_8px_rgba(201,162,39,0.15)]',
    purple: 'bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 shadow-[0_0_8px_rgba(201,162,39,0.15)]',
    slate: 'bg-[#063D29]/30 text-slate-300 border border-[#063D29]',
    outline: 'border border-[#063D29] text-slate-400 bg-transparent'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
