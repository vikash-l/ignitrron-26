import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Shield } from 'lucide-react';
import { eventData } from '../../data/event';
import { Button } from '../ui/Button';
import heroImg from '../../assets/hero.png';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [shimmerKey, setShimmerKey] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHoveringImage(false);
  };

  const handleImageMouseEnter = () => {
    setIsHoveringImage(true);
    setShimmerKey(prev => prev + 1);
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about') || document.getElementById('eventInfo');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#020604]"
    >
      {/* Background Emerald Atmospheric Glows (Behind all content, pointer-events-none) */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[580px] sm:h-[580px] rounded-full bg-radial from-[#0B5D3B]/20 via-[#063D29]/5 to-transparent blur-[130px] pointer-events-none z-0" 
      />
      <div 
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[320px] h-[320px] sm:w-[580px] sm:h-[580px] rounded-full bg-radial from-[#00E676]/10 via-[#0B5D3B]/5 to-transparent blur-[130px] pointer-events-none z-0" 
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Event Name & Category Badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#00E676] bg-[#063D29]/50 border border-[#00E676]/30 shadow-[0_0_12px_rgba(0,230,118,0.15)]">
                  <Shield className="h-3.5 w-3.5 text-[#00E676]" />
                  IGNITRRON '26
                </span>
                {eventData.category && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 border border-[#C9A227]/30">
                    {eventData.category}
                  </span>
                )}
              </div>
              
              {/* Main Heading: "MARVEL" white, "QUIZ" emerald glow */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none select-none">
                <span className="text-white">MARVEL </span>
                <span className="text-[#00E676] text-glow-emerald">QUIZ</span>
              </h1>
              
              {/* Subtitle with Gold Accent */}
              <p className="text-xl sm:text-2xl font-bold mb-6 tracking-wide text-[#C9A227]">
                THE GOD OF MISCHIEF HAS <span className="text-[#FFD700] text-glow-gold underline decoration-[#00E676]/40 underline-offset-4">ALTERED THE TIMELINE.</span>
              </p>
              
              <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {eventData.description}
              </p>

              {/* Loki / TVA Details Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 max-w-xl mx-auto lg:mx-0 text-left relative overflow-hidden rounded-xl border border-[#063D29]/50 bg-[#020604]/80 p-2.5">
                <div className="p-2 rounded-lg bg-[#063D29]/20 border border-[#00E676]/20 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-mono uppercase text-slate-400">TIMELINE STATUS</p>
                    <p className="text-xs font-mono font-bold text-[#00E676] flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00E676] animate-ping" />
                      UNSTABLE
                    </p>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#063D29]/20 border border-[#00E676]/20">
                  <p className="text-[9px] font-mono uppercase text-slate-400">VARIANT</p>
                  <p className="text-xs font-mono font-bold text-[#C9A227]">LOKI (L1130)</p>
                </div>
                <div className="p-2 rounded-lg bg-[#063D29]/20 border border-[#00E676]/20">
                  <p className="text-[9px] font-mono uppercase text-slate-400">REALITY</p>
                  <p className="text-xs font-mono font-bold text-[#00E676]">EARTH-616</p>
                </div>
                <div className="p-2 rounded-lg bg-[#063D29]/20 border border-[#00E676]/20">
                  <p className="text-[9px] font-mono uppercase text-slate-400">ILLUSION</p>
                  <p className="text-xs font-mono font-bold text-[#C9A227]">ACTIVE</p>
                </div>
              </div>

              {/* Event Metadata (Date & Location Badges) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                {eventData.date && (
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#020604] border border-[#063D29] text-slate-300">
                    <Calendar className="h-4.5 w-4.5 text-[#00E676]" />
                    <span className="text-sm font-semibold tracking-wide">{eventData.date}</span>
                  </div>
                )}
                {eventData.venue && (
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#020604] border border-[#063D29] text-slate-300">
                    <MapPin className="h-4.5 w-4.5 text-[#C9A227]" />
                    <span className="text-sm font-semibold tracking-wide">{eventData.venue}</span>
                  </div>
                )}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 z-20 relative">
                {eventData.registration && (
                  <a href={eventData.registration.url} className="w-full sm:w-auto cursor-pointer">
                    <Button 
                      variant="glow" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-[#0B5D3B] via-[#063D29] to-[#0B5D3B] border border-[#00E676]/60 text-white shadow-[0_0_20px_rgba(0,230,118,0.25)] hover:shadow-[0_0_35px_rgba(0,230,118,0.55)] hover:border-[#00E676] group cursor-pointer transition-all duration-300 relative overflow-hidden" 
                      icon={<ArrowRight className="h-4 w-4 text-[#00E676] group-hover:translate-x-1 group-hover:animate-pulse transition-transform" />}
                    >
                      {eventData.registration.label}
                    </Button>
                  </a>
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-[#020604]/80 border border-[#C9A227]/40 hover:border-[#C9A227] text-[#C9A227] hover:text-white hover:bg-[#C9A227]/10 transition-all duration-200 cursor-pointer"
                  onClick={handleScrollDown}
                >
                  EXPLORE THE EVENT
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column: Vertical Loki Silhouette Character Panel */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              onMouseEnter={handleImageMouseEnter}
              onMouseLeave={() => setIsHoveringImage(false)}
              animate={{ 
                x: mousePos.x * 5, // Subtle parallax max 5px
                y: mousePos.y * 5,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] max-h-[540px] sm:max-h-[580px] flex items-center justify-center group pointer-events-auto"
            >
              {/* Soft Radial Ambient Glow behind the character silhouette (emerald + gold wisp) */}
              <div 
                className="absolute inset-0 bg-radial from-[#00E676]/30 via-[#C9A227]/10 to-transparent blur-[50px] pointer-events-none rounded-full" 
                style={{
                  transform: `translate(${mousePos.x * -3}px, ${mousePos.y * -3}px)`
                }}
              />

              {/* Loki Vertical Image Wrapper with Soft Edges (Seamless Dark Background Blend) */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
                {/* Main Hero Image */}
                <img 
                  src={heroImg} 
                  alt="Loki - God of Mischief Silhouette" 
                  className={`w-full h-full object-contain object-center transition-all duration-500 filter ${
                    isHoveringImage ? 'brightness-110 drop-shadow-[0_0_25px_rgba(0,230,118,0.4)]' : 'drop-shadow-[0_0_15px_rgba(0,230,118,0.2)]'
                  }`}
                />

                {/* Subtle Ghost Afterimage for 400ms Illusion Shimmer on Hover */}
                <AnimatePresence>
                  {isHoveringImage && (
                    <motion.img
                      key={shimmerKey}
                      src={heroImg}
                      alt="Loki Illusion Ghost"
                      initial={{ opacity: 0, scale: 1.02, x: -3 }}
                      animate={{ opacity: [0, 0.35, 0], scale: 1.04, x: 3 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="absolute inset-0 w-full h-full object-contain object-center mix-blend-screen pointer-events-none filter hue-rotate-15 blur-[1px]"
                    />
                  )}
                </AnimatePresence>

                {/* Subtle Vignette gradient edges to fade seamlessly into dark background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020604] via-transparent to-[#020604]/40 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020604]/60 via-transparent to-[#020604]/60 pointer-events-none" />

                {/* Floating Emerald/Gold Magic Particles around Loki Silhouette */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-[18%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse shadow-[0_0_8px_#00E676]" />
                  <div className="absolute top-[28%] right-[20%] w-1 h-1 rounded-full bg-[#C9A227] animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute top-[45%] left-[15%] w-2 h-2 rounded-full bg-[#00E676]/80 blur-[1px] animate-pulse" />
                  <div className="absolute top-[60%] right-[18%] w-1.5 h-1.5 rounded-full bg-[#C9A227]/90 animate-pulse" style={{ animationDuration: '2.5s' }} />
                  <div className="absolute bottom-[25%] left-[30%] w-1 h-1 rounded-full bg-[#00E676] animate-ping" style={{ animationDuration: '4s' }} />
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
