'use client';

import { ArrowDownRight, Sparkles, Play } from 'lucide-react';
import { EVENT_CONFIG } from '@/config/eventData';

interface HeroOverlayProps {
  onExploreClick: () => void;
  onOpenTeaser?: () => void;
}

export default function HeroOverlay({ onExploreClick, onOpenTeaser }: HeroOverlayProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 pb-8 sm:pb-12 z-20 pointer-events-none select-none overflow-hidden"
    >
      {/* Top Meta Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pointer-events-auto">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs tracking-mega uppercase text-neutral-300">
            {EVENT_CONFIG.title} • {EVENT_CONFIG.subtitle}
          </span>
        </div>
        <div className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase hidden sm:block">
          {EVENT_CONFIG.day} • {EVENT_CONFIG.dates} • {EVENT_CONFIG.time}
        </div>
      </div>

      {/* Massive Editorial Hero Typography */}
      <div className="my-auto pointer-events-auto max-w-4xl py-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-panel border border-white/10 mb-4 sm:mb-6 text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-300 max-w-full truncate">
          <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="truncate">{EVENT_CONFIG.venue} • {EVENT_CONFIG.entry}</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight text-white leading-[0.9] uppercase mb-6 sm:mb-8 drop-shadow-2xl">
          AUTO <br />
          <span className="text-accent text-glow">SHOW.</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2">
          <a
            href="#vehicles"
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-accent text-white font-mono text-[11px] sm:text-xs tracking-mega font-bold uppercase transition-all duration-300 hover:bg-red-600 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-105 pointer-events-auto text-center"
          >
            <span>EXPLORE SHOWCASE</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </a>

          {onOpenTeaser && (
            <button
              onClick={onOpenTeaser}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full glass-panel border border-white/20 text-white font-mono text-[11px] sm:text-xs tracking-mega font-bold uppercase hover:bg-white/10 hover:border-accent transition-all duration-300 pointer-events-auto text-center"
            >
              <Play className="w-3.5 h-3.5 text-accent fill-accent" />
              <span>WATCH TEASER</span>
            </button>
          )}
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="flex justify-between items-end pointer-events-auto pt-4">
        <div className="flex items-center gap-3 text-neutral-500 font-mono text-[9px] sm:text-[10px] tracking-mega uppercase">
          <div className="w-6 sm:w-8 h-[1px] bg-neutral-700 shrink-0" />
          <span>SCROLL TO EXPLORE THE EXHIBITION</span>
        </div>
        <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-neutral-500 hidden sm:block">
          01 / 05 • AUTO SHOW EXPERIENCE
        </div>
      </div>
    </section>
  );
}
