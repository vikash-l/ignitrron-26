'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    id: 1,
    title: 'AUTO SHOW.',
    subtitle: 'FEATURING 20+ CARS & 10+ SUPERBIKES',
    description: 'A walk-in automotive exhibition celebrating performance, design, engineering, innovation, and automotive culture.',
    alignment: 'left',
    hideCard: true, // Stage 1 is presented by HeroOverlay
  },
  {
    id: 2,
    title: 'ENGINEERING & DESIGN.',
    subtitle: 'DISCOVER CRAFTSMANSHIP UP CLOSE',
    description: 'Explore modern automotive engineering, distinctive styling, craftsmanship, and mechanical character.',
    alignment: 'right',
  },
  {
    id: 3,
    title: 'WALK-IN EXHIBITION.',
    subtitle: 'TRIAD & CAR PARKING • DAY 01',
    description: 'An immersive showcase designed for automobile enthusiasts, students, and visitors.',
    alignment: 'left',
  },
  {
    id: 4,
    title: 'AUTOMOTIVE CULTURE.',
    subtitle: 'PASSION & COMMUNITY',
    description: 'Bringing together performance-focused machines and distinctive builds in a single experience.',
    alignment: 'right',
  },
  {
    id: 5,
    title: 'IGNITRRON ’26.',
    subtitle: '18/09/2026 • 3:00 PM – 5:00 PM',
    description: 'Creating a platform where automotive passion, engineering excellence, design, and community come together.',
    alignment: 'center',
  },
];

interface ScrollExperienceProps {
  onStageChange?: (stage: number) => void;
}

export default function ScrollExperience({ onStageChange }: ScrollExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;

    STAGES.forEach((stage) => {
      const element = document.getElementById(`scroll-stage-${stage.id}`);
      if (!element) return;

      ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          setActiveStage(stage.id);
          onStageChange?.(stage.id);
        },
        onEnterBack: () => {
          setActiveStage(stage.id);
          onStageChange?.(stage.id);
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onStageChange]);

  return (
    <div id="scroll-experience-container" ref={containerRef} className="relative w-full z-20 overflow-hidden">
      {STAGES.map((stage) => {
        const isActive = activeStage === stage.id;
        if (stage.hideCard) {
          return (
            <section
              key={stage.id}
              id={`scroll-stage-${stage.id}`}
              className="relative w-full h-[100vh] pointer-events-none"
            />
          );
        }

        return (
          <section
            key={stage.id}
            id={`scroll-stage-${stage.id}`}
            className="relative w-full h-[120vh] flex items-center px-4 sm:px-8 lg:px-20 pointer-events-none select-none"
          >
            <div
              className={`max-w-xl transition-all duration-700 pointer-events-auto p-6 sm:p-8 rounded-3xl glass-panel border border-white/20 backdrop-blur-2xl bg-black/85 shadow-2xl flex flex-col ${
                stage.alignment === 'right'
                  ? 'ml-auto text-right items-end'
                  : stage.alignment === 'center'
                  ? 'mx-auto text-center items-center'
                  : 'mr-auto text-left items-start'
              } ${
                isActive
                  ? 'opacity-100 translate-y-0 filter-none'
                  : 'opacity-0 translate-y-12 blur-md'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 mb-3 font-mono text-[9px] sm:text-[10px] tracking-mega text-accent font-bold uppercase">
                <span>STAGE 0{stage.id} / 05</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-2 drop-shadow-2xl">
                {stage.title}
              </h2>

              <p className="font-mono text-xs sm:text-sm tracking-widest text-accent font-bold uppercase mb-3 drop-shadow-md">
                {stage.subtitle}
              </p>

              <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-medium drop-shadow-md">
                {stage.description}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
