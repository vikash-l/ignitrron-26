import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'cyan' | 'gold' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  className = '',
}) => {
  const styles = {
    emerald: 'bg-[#08131C]/90 border border-[#00BFA6]/50 text-[#00BFA6] font-mono-tech text-[9px] px-3 py-1 rounded-sm uppercase tracking-widest',
    cyan: 'bg-[#0B1720]/90 border border-[#22D3EE]/50 text-[#22D3EE] font-mono-tech text-[9px] px-3 py-1 rounded-sm uppercase tracking-widest',
    gold: 'bg-[#08131C]/90 border border-[#D6B86A]/50 text-[#D6B86A] font-mono-tech text-[9px] px-3 py-1 rounded-sm uppercase tracking-widest',
    outline: 'border border-[#00BFA6]/30 text-[#8997A3] bg-transparent font-mono-tech text-[9px] px-3 py-1 rounded-sm uppercase tracking-widest'
  };

  return (
    <span className={`inline-flex items-center justify-center ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

