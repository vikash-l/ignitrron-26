import React from 'react';
import { cn } from '../../utils/cn';

export interface SectionHeaderProps {
  category?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  category,
  title,
  subtitle,
  align = 'center',
  className
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === 'center' ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {category && (
        <div className={cn("flex items-center gap-2 mb-3", align === 'center' ? "justify-center" : "justify-start")}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00] animate-ping" />
          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF6A00] font-bold">
            {category}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#F5F2EC] uppercase">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-[#858585] text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Flame accent divider */}
      <div className={cn("mt-4 flex items-center gap-1.5", align === 'center' ? "justify-center" : "justify-start")}>
        <div className="w-8 h-[2px] bg-[#D72614]" />
        <div className="w-12 h-[2px] bg-[#FF6A00]" />
        <div className="w-4 h-[2px] bg-[#FFB000]" />
      </div>
    </div>
  );
};
