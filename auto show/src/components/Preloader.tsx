'use client';

import { useEffect, useState, useRef } from 'react';
import { useProgress } from '@react-three/drei';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';
import { EVENT_CONFIG } from '@/config/eventData';
import { assetPath } from '@/config/assetPath';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const { progress, loaded, total } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const target = Math.max(progress, loaded > 0 ? (loaded / Math.max(total, 1)) * 100 : 0);
    
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < target) {
          return Math.min(prev + Math.ceil((target - prev) * 0.2) || prev + 1, 100);
        }
        if (target >= 99 && prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [progress, loaded, total]);

  useEffect(() => {
    if (displayProgress >= 100 && !isFinished) {
      setIsFinished(true);
      
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      tl.to('#preloader-content', {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: 'power3.inOut',
      })
      .to('#preloader', {
        opacity: 0,
        duration: 0.8,
        ease: 'power4.inOut',
        pointerEvents: 'none',
      });
    }
  }, [displayProgress, isFinished, onComplete]);

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050505] text-white select-none overflow-hidden p-6 sm:p-12"
    >
      {/* Background Video Preloader */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={assetPath('/assets/video/auto_show_teaser.mp4')}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/70" />
      </div>

      {/* Content Container */}
      <div id="preloader-content" className="relative z-10 w-full h-full flex flex-col justify-between max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs tracking-mega uppercase text-neutral-300">
              {EVENT_CONFIG.title} • LOADING 3D SHOWROOM
            </span>
          </div>
          <div className="font-mono text-xs text-neutral-400 uppercase hidden sm:block">
            {EVENT_CONFIG.dates}
          </div>
        </div>

        {/* Center Hero Typography */}
        <div className="my-auto text-center max-w-3xl mx-auto space-y-4 py-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-accent/40 text-[10px] sm:text-xs font-mono tracking-widest text-accent uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>WALK-IN AUTOMOTIVE EXHIBITION</span>
          </div>

          <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.9] drop-shadow-2xl">
            AUTO <br />
            <span className="text-accent text-glow">SHOW.</span>
          </h1>

          <p className="font-sans text-xs sm:text-base text-neutral-200 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            20+ Cars • 10+ Superbikes • Triad & Car Parking • Day 01
          </p>
        </div>

        {/* Bottom Loading Progress Bar */}
        <div className="w-full max-w-xl mx-auto space-y-3 pb-4">
          <div className="flex justify-between items-center font-mono text-xs text-neutral-300">
            <span className="tracking-widest uppercase font-bold text-accent">INITIALIZING 3D ENGINE</span>
            <span className="font-bold text-white tracking-widest">{displayProgress}%</span>
          </div>

          <div className="relative w-full h-1.5 bg-white/10 overflow-hidden rounded-full backdrop-blur-md">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-800 via-accent to-red-400 transition-all duration-200 ease-out shadow-lg shadow-red-600/50"
              style={{ width: `${displayProgress}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-neutral-400 uppercase pt-1">
            <span>IGNITRRON ’26 PRESENTATION</span>
            <span>3:00 PM – 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
