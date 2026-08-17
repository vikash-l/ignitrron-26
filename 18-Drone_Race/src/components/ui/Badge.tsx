import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'amber' | 'gunmetal' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  const styles = {
    gold: 'bg-[#121b1e] border border-[#d6a84f]/40 text-[#f2d58a] font-mono text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest',
    amber: 'bg-[#1a140a] border border-[#e8a63a]/40 text-[#e8a63a] font-mono text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest',
    gunmetal: 'bg-[#0d1416] text-[#879296] border border-[#223038] font-mono text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest',
    outline: 'border border-[#d6a84f]/30 text-[#879296] bg-transparent font-mono text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest'
  };

  return (
    <span className={`inline-flex items-center justify-center ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
