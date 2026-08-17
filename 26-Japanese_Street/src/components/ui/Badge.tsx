import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'vermilion' | 'gold' | 'indigo' | 'ash' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'vermilion',
  className = '',
}) => {
  const styles = {
    vermilion: 'bg-[#C63C32]/25 border border-[#C63C32]/50 text-[#F1E8D5] font-mono-tech text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider font-semibold',
    gold: 'bg-[#C9A45C]/20 border border-[#C9A45C]/45 text-[#C9A45C] font-mono-tech text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider font-semibold',
    indigo: 'bg-[#243B63]/40 border border-[#243B63]/70 text-[#F1E8D5] font-mono-tech text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider',
    ash: 'bg-[#101827] text-[#9B9A96] border border-[#243B63]/40 font-mono-tech text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider',
    outline: 'border border-[#C9A45C]/30 text-[#F1E8D5]/80 bg-transparent font-mono-tech text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider'
  };

  return (
    <span className={`inline-flex items-center justify-center ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
