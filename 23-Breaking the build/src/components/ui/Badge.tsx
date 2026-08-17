import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'crimson' | 'ember' | 'slate' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'crimson',
  className = '',
}) => {
  const styles = {
    crimson: 'bg-[#24100D]/80 border border-[#7F1D1D]/50 text-[#F97316] font-mono-tech text-[8px] px-3 py-1 rounded-full uppercase tracking-widest',
    ember: 'bg-[#1C0D0B]/90 border border-[#F97316]/40 text-[#F59E0B] font-mono-tech text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest',
    slate: 'bg-[#120A08] text-[#A8A09A] border border-[#24100D] font-mono-tech text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest',
    outline: 'border border-[#7F1D1D]/40 text-[#A8A09A] bg-transparent font-mono-tech text-[8px] px-3 py-1 rounded-sm uppercase tracking-widest'
  };

  return (
    <span className={`inline-flex items-center justify-center ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
