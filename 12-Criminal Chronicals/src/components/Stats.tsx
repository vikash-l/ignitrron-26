import React, { useEffect, useState, useRef } from 'react';
import { Users, Calendar, Clock, Trophy, Radio } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<CountUpProps> = ({ end, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const icons = [Users, Calendar, Clock, Trophy];

  return (
    <section className="relative py-12 bg-[#050505] border-y border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {EVENT_DATA.stats.map((stat, idx) => {
            const Icon = icons[idx] || Radio;
            return (
              <div
                key={stat.label}
                className="relative glass-panel-red rounded-xl p-5 sm:p-6 border border-red-900/30 hover:border-[#e31b23]/50 transition-all duration-300 group"
              >
                {/* Corner crimson highlight */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-red-600/20 to-transparent rounded-tr-xl pointer-events-none" />

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-red-400 tracking-wider uppercase">
                    METRIC #{idx + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-black border border-red-900/40 text-[#e31b23] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="font-heading font-black text-3xl sm:text-4xl lg:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                  {stat.numericValue !== undefined ? (
                    <AnimatedCounter
                      end={stat.numericValue}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>{stat.value}</span>
                  )}
                </div>

                <div className="mt-1 text-xs font-mono text-slate-400 tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
