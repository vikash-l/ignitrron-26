import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps {
  variant?: 'fire' | 'darkred' | 'burnt' | 'walkin' | 'outline';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'fire',
  size = 'md',
  children,
  className,
  icon
}) => {
  const variantStyles = {
    fire: "bg-[#D72614]/15 text-[#FF6A00] border-[#FF6A00]/40 shadow-[0_0_12px_rgba(255,106,0,0.2)]",
    darkred: "bg-[#4A0A07]/30 text-[#D72614] border-[#4A0A07]",
    burnt: "bg-[#17110D] text-[#858585] border-[#4A0A07]/50",
    walkin: "bg-gradient-to-r from-[#4A0A07] to-[#17110D] text-[#FFB000] border-[#FF6A00]/60 font-black tracking-widest shadow-[0_0_15px_rgba(255,106,0,0.3)]",
    outline: "bg-transparent text-[#858585] border-[#17110D]"
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[10px] gap-1.5 uppercase font-mono-tech tracking-wider",
    md: "px-3.5 py-1 text-xs gap-2 uppercase font-mono-tech tracking-widest font-semibold"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center border rounded shrink-0 select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
