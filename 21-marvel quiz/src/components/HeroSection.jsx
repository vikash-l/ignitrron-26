import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LokiVisual } from './LokiVisual';
import { Play, Sparkles, Compass, Wand2 } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const HeroSection = ({ onStartQuiz, onExplore }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleText = "MARVEL QUIZ";

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Radial Atmospheric Fog & Laser Grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-timeline-grid opacity-20 pointer-events-none" />

      {/* Floating Status Widgets */}
      <div className="absolute top-24 left-8 hidden lg:block font-mono text-[10px] text-[#8E9A94] border-l border-[#35D98B]/30 pl-3">
        <div className="text-[#35D98B] font-semibold mb-1">LOKI'S REALITY STREAM</div>
        <div>TIMELINE: <span className="text-[#F4F7F5]">ALTERED-616</span></div>
        <div>ILLUSION_LEVEL: <span className="text-[#C8A951]">MAXIMUM</span></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Large Integrated Loki Visual */}
        <div className="lg:col-span-6 flex items-center justify-center relative my-4 lg:my-0 loki-visual-container">
          <motion.div
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            <LokiVisual size="large" showIllusions={true} />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Hero Content */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left pt-2">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#35D98B]/30 mb-6"
          >
            <Wand2 className="w-3.5 h-3.5 text-[#35D98B] animate-spin" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#35D98B] font-semibold">
              IGNITRRON PRESENTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-extrabold text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl md:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl tracking-tight text-[#F4F7F5] leading-none mb-4"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-2">
              {titleText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 1.4 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + index * 0.05,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  className="inline-block hover:text-[#35D98B] transition-colors"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          {/* Subtitle Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-display text-lg sm:text-2xl font-bold tracking-wide text-[#C8A951] mb-6"
          >
            "THE GOD OF MISCHIEF HAS A QUESTION FOR YOU."
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base sm:text-lg text-[#8E9A94] max-w-xl mb-10 font-normal leading-relaxed"
          >
            Loki has taken control of the Ignitrron timeline. Every question is a test of your multiversal intellect, deception awareness, and speed. Will you claim glorious purpose or be pruned?
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <button
              onClick={() => {
                sounds.playPortalHum();
                onStartQuiz();
              }}
              onMouseEnter={() => sounds.playHover()}
              className="btn-timeline-glow w-full sm:w-auto px-8 py-4 rounded-2xl font-mono text-sm tracking-wider text-[#F4F7F5] font-bold shadow-emerald-lg flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              {/* Magic Energy Wave on Hover */}
              <div className="absolute inset-0 bg-[#35D98B]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <Play className="w-5 h-5 fill-[#35D98B] text-[#35D98B] group-hover:scale-125 transition-transform" />
              <span>ENTER THE TIMELINE</span>
              <Sparkles className="w-4 h-4 text-[#C8A951] opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>

            <a
              href="#about"
              onClick={() => {
                sounds.playClick();
                if (onExplore) onExplore();
              }}
              onMouseEnter={() => sounds.playHover()}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-panel glass-panel-hover font-mono text-sm tracking-wider text-[#8E9A94] hover:text-[#35D98B] flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#16A36A]" />
              <span>EXPLORE LOKI'S WORLD</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
