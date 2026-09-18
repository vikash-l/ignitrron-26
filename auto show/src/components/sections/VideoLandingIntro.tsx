'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react';
import { EVENT_CONFIG } from '@/config/eventData';
import { assetPath } from '@/config/assetPath';

interface VideoLandingIntroProps {
  onEnterShowroom: () => void;
  isOpen: boolean;
  onClose?: () => void;
  isModalMode?: boolean;
}

export default function VideoLandingIntro({
  onEnterShowroom,
  isOpen,
  onClose,
  isModalMode = false,
}: VideoLandingIntroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showText, setShowText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 2.5 second delay before displaying the cool "AUTO EXHIBITION" headline
  useEffect(() => {
    if (!isOpen) return;

    setShowText(false);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    const timer = setTimeout(() => {
      setShowText(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        if (videoRef.current.ended) {
          videoRef.current.currentTime = 0;
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowText(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050505] text-white flex flex-col justify-between px-4 sm:px-8 lg:px-16 py-6 sm:py-10 select-none overflow-hidden transition-all duration-1000 ${
        isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-105 pointer-events-none'
      }`}
    >
      {/* Background Teaser Video Player - Plays ONLY ONCE */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={assetPath('/assets/video/auto_show_teaser.mp4')}
          autoPlay
          loop={false}
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover filter brightness-90 contrast-110 transition-all duration-700"
        />

        {/* Dark Vignette & Left Gradient Overlay for Luxury Editorial Framing */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
      </div>

      {/* Top Header Bar */}
      <div className="relative z-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
          <span className="font-display font-bold text-sm sm:text-base tracking-widest uppercase">
            AUTO EXHIBITION <span className="text-accent text-xs">’26</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-neutral-400 uppercase border-l border-white/20 pl-3">
            WALK-IN EXHIBITION
          </span>
        </div>

        {/* Video Control Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleSound}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full glass-panel hover:border-white/30 text-neutral-300 hover:text-white transition-all text-[10px] sm:text-xs font-mono tracking-widest uppercase"
            aria-label={isMuted ? 'Unmute teaser video' : 'Mute teaser video'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-accent" />
                <span className="hidden sm:inline">UNMUTE SOUND</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-accent" />
                <span className="hidden sm:inline">MUTED</span>
              </>
            )}
          </button>

          <button
            onClick={togglePlay}
            className="p-2 sm:p-2.5 rounded-full glass-panel hover:border-white/30 text-neutral-300 hover:text-white transition-all"
            aria-label={isPlaying ? 'Pause video' : 'Replay video'}
          >
            <Play className={`w-3.5 h-3.5 text-white ${isPlaying ? 'opacity-70' : 'opacity-100 text-accent'}`} />
          </button>

          {isModalMode && onClose && (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-widest uppercase"
            >
              CLOSE
            </button>
          )}
        </div>
      </div>

      {/* Main Top-Left Editorial Teaser Headline — Smooth 2.5s Reveal Animation */}
      <div
        className={`relative z-20 mt-8 sm:mt-12 lg:mt-16 mb-auto max-w-3xl mr-auto text-left space-y-4 sm:space-y-6 py-4 transition-all duration-1000 ease-out ${
          showText ? 'opacity-100 translate-y-0 filter-none scale-100' : 'opacity-0 translate-y-8 blur-xl scale-95 pointer-events-none'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-accent/40 text-[10px] sm:text-[11px] font-mono tracking-widest text-accent uppercase font-bold">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>OFFICIAL IGNITRRON ’26 PRESENTATION</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88] drop-shadow-2xl">
          AUTO <br />
          <span className="text-accent text-glow">EXHIBITION.</span>
        </h1>

        <p className="font-sans text-xs sm:text-base md:text-lg text-neutral-200 max-w-xl leading-relaxed font-medium drop-shadow-md">
          A walk-in automotive exhibition bringing together 20+ cars and 10+ superbikes celebrating engineering, styling, and automotive culture.
        </p>

        {/* Approved Event Info Badge */}
        <div className="inline-flex flex-wrap items-center gap-2 sm:gap-4 p-3 sm:px-6 sm:py-3 glass-panel rounded-2xl border border-white/15 text-[10px] sm:text-xs font-mono text-neutral-300 tracking-widest uppercase">
          <span className="text-accent font-bold">{EVENT_CONFIG.day}</span>
          <span>•</span>
          <span>{EVENT_CONFIG.dates}</span>
          <span>•</span>
          <span>{EVENT_CONFIG.time}</span>
          <span>•</span>
          <span className="text-white font-bold">{EVENT_CONFIG.venue}</span>
        </div>

        {/* Enter Showroom Primary Button */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-start gap-4">
          <button
            onClick={() => {
              if (isModalMode && onClose) {
                onClose();
              } else {
                onEnterShowroom();
              }
            }}
            className="group relative inline-flex items-center justify-center gap-4 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-accent text-white font-mono text-xs sm:text-sm tracking-mega font-bold uppercase transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50 shadow-xl shadow-red-600/40 glow-accent"
          >
            <span>ENTER 3D SHOWROOM</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Footer HUD & Skip Prompt */}
      <div className="relative z-20 flex justify-between items-end pt-4 font-mono text-[9px] sm:text-[10px] tracking-widest text-neutral-400 uppercase">
        <div className="flex items-center gap-2">
          <span>LINEUP: 20+ CARS & 10+ SUPERBIKES</span>
        </div>

        <button
          onClick={() => {
            if (isModalMode && onClose) {
              onClose();
            } else {
              onEnterShowroom();
            }
          }}
          className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
        >
          <span>EXPLORE EXHIBITION</span>
          <ChevronDown className="w-3.5 h-3.5 text-accent animate-bounce" />
        </button>
      </div>
    </div>
  );
}
