import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Gift, HeartHandshake } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

import gamingImg from '../../assets/gaming.jpg';
import animeImg from '../../assets/anime.jpg';
import quizImg from '../../assets/quiz.jpg';
import speechImg from '../../assets/speech.jpg';
import cosplayImg from '../../assets/cosplay.jpg';
import calligraphyImg from '../../assets/calligraphy.jpg';
import shatekiImg from '../../assets/shateki.jpg';
import origamiImg from '../../assets/origami.jpg';
import beybladeImg from '../../assets/beyblade.jpg';
import photoboothImg from '../../assets/photobooth.jpg';

interface CarouselItem {
  id: string;
  number: string;
  name: string;
  kanji: string;
  tagline: string;
  badge: 'MERCHANDISE' | 'FUN EVENT';
  accentColor: string;
  image: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 'gaming',
    number: '01',
    name: 'GAMING TOURNAMENT',
    kanji: '勝負',
    tagline: 'Esports Arena & Tournament',
    badge: 'MERCHANDISE',
    accentColor: '#C63C32',
    image: gamingImg,
  },
  {
    id: 'anime-art',
    number: '02',
    name: 'ANIME ART COMPETITION (ONLINE)',
    kanji: '芸術',
    tagline: 'Digital Illustration Showcase',
    badge: 'MERCHANDISE',
    accentColor: '#C9A45C',
    image: animeImg,
  },
  {
    id: 'quiz',
    number: '03',
    name: 'JAPANESE QUIZ COMPETITION',
    kanji: '知恵',
    tagline: 'Lore & Pop-Culture Trivia',
    badge: 'MERCHANDISE',
    accentColor: '#C63C32',
    image: quizImg,
  },
  {
    id: 'speech',
    number: '04',
    name: 'SPEECH',
    kanji: '弁舌',
    tagline: 'Perspectives & Expression',
    badge: 'MERCHANDISE',
    accentColor: '#C9A45C',
    image: speechImg,
  },
  {
    id: 'cosplay',
    number: '05',
    name: 'COSPLAY',
    kanji: '仮装',
    tagline: 'Character Walkway & Showcase',
    badge: 'MERCHANDISE',
    accentColor: '#C63C32',
    image: cosplayImg,
  },
  {
    id: 'calligraphy',
    number: '06',
    name: 'CALLIGRAPHY',
    kanji: '書道',
    tagline: 'Traditional Brushwork & Kanji',
    badge: 'FUN EVENT',
    accentColor: '#C9A45C',
    image: calligraphyImg,
  },
  {
    id: 'shateki',
    number: '07',
    name: 'SHATEKI',
    kanji: '射的',
    tagline: 'Festival Target Shooting Stall',
    badge: 'MERCHANDISE',
    accentColor: '#C63C32',
    image: shatekiImg,
  },
  {
    id: 'origami',
    number: '08',
    name: 'ORIGAMI SHOP',
    kanji: '折紙',
    tagline: 'Geometric Papercraft Workshop',
    badge: 'FUN EVENT',
    accentColor: '#C9A45C',
    image: origamiImg,
  },
  {
    id: 'beyblade',
    number: '09',
    name: 'BEYBLADE',
    kanji: '回転',
    tagline: 'Burst Stadium Battles',
    badge: 'FUN EVENT',
    accentColor: '#C63C32',
    image: beybladeImg,
  },
  {
    id: 'photo-booth',
    number: '10',
    name: 'PHOTO BOOTH',
    kanji: '写真',
    tagline: 'Night Street Photo Keepsakes',
    badge: 'FUN EVENT',
    accentColor: '#C9A45C',
    image: photoboothImg,
  },
];

// Doubled dataset for seamless continuous infinite looping
const loopedCarouselData = [...carouselData, ...carouselData];

export const EventCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    const speed = 0.65; // Slow, premium continuous crawl

    const autoScroll = () => {
      const container = scrollContainerRef.current;
      if (container && !isHovered && !isInteracting) {
        container.scrollLeft += speed;

        // When halfway through the duplicated cards, seamlessly reset
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isInteracting]);

  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleInteractionEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 1200);
  };

  const scroll = (direction: 'left' | 'right') => {
    handleInteractionStart();
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    handleInteractionEnd();
  };

  return (
    <section id="carousel" className="py-24 relative overflow-hidden border-t border-[#C9A45C]/20">
      {/* Ambient background lantern light pool */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C63C32 0%, #243B63 60%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            index="02"
            badge="STREET SHOWCASE"
            title="EVENT POSTER GALLERY"
            subtitle="Explore all 10 destinations presented as illuminated street posters."
            align="left"
            className="mb-0 max-w-2xl"
          />

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start sm:self-end">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-xl ronin-panel border border-[#C9A45C]/35 hover:border-[#C63C32]/60 flex items-center justify-center text-[#F1E8D5] hover:text-[#C9A45C] transition-all cursor-pointer shadow-md group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-xl ronin-panel border border-[#C9A45C]/35 hover:border-[#C63C32]/60 flex items-center justify-center text-[#F1E8D5] hover:text-[#C9A45C] transition-all cursor-pointer shadow-md group"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
      >
        {/* Left & Right Edge Vignette Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#08090C] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#08090C] to-transparent z-20 pointer-events-none" />

        {/* Scrollable Container with Continuous Auto-Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none px-4 sm:px-8 py-6 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {loopedCarouselData.map((item, idx) => {
            const isMerchandise = item.badge === 'MERCHANDISE';

            return (
              <motion.div
                key={`${item.id}-${idx}`}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="flex-shrink-0 w-[270px] sm:w-[310px] group"
              >
                {/* 3:4 PORTRAIT RATIO CARD */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden ronin-panel border border-[#C9A45C]/35 group-hover:border-[#C63C32]/70 transition-all duration-300 shadow-xl group-hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.9),0_0_24px_rgba(198,60,50,0.25)] flex flex-col justify-between p-5 sm:p-6 bg-[#0E1524]">
                  
                  {/* Card Artwork Image Layer with Enhanced Brightness & Subtle Text Protection */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out brightness-115 contrast-105 saturate-105"
                      loading="lazy"
                    />
                    {/* Minimal bottom gradient purely for metadata legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#08090C]/90 via-[#08090C]/30 to-transparent" />
                    {/* Very light top shade for badge contrast */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#08090C]/35 to-transparent" />
                  </div>

                  {/* Top Hairline Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A45C]/40 group-hover:via-[#C63C32] to-transparent transition-all duration-500 z-10" />

                  {/* TOP HEADER: Number + Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-xs text-[#C9A45C] font-bold bg-[#101827]/90 px-2.5 py-1 rounded border border-[#C9A45C]/30 backdrop-blur-sm">
                        {item.number}
                      </span>
                    </div>

                    <span className={`px-2.5 py-1 rounded font-mono-tech text-[10px] uppercase tracking-wider font-bold inline-flex items-center gap-1 backdrop-blur-sm ${
                      isMerchandise
                        ? 'bg-[#C63C32]/40 border border-[#C63C32]/70 text-[#F1E8D5]'
                        : 'bg-[#243B63]/60 border border-[#C9A45C]/50 text-[#C9A45C]'
                    }`}>
                      {isMerchandise ? (
                        <>
                          <Gift className="h-3 w-3 text-[#C63C32]" />
                          <span>MERCHANDISE</span>
                        </>
                      ) : (
                        <>
                          <HeartHandshake className="h-3 w-3 text-[#C9A45C]" />
                          <span>FUN EVENT</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* BOTTOM INFO (Metadata outside the image content, rendered cleanly over gradient) */}
                  <div className="relative z-10 border-t border-[#C9A45C]/25 pt-3 mt-auto backdrop-blur-[2px]">
                    <h3 className="text-[#F1E8D5] font-display text-xl sm:text-2xl uppercase tracking-wide leading-tight group-hover:text-[#C9A45C] transition-colors line-clamp-1 mb-1 drop-shadow-md">
                      {item.name}
                    </h3>
                    <p className="text-[#F1E8D5]/80 text-xs font-normal font-mono-tech line-clamp-1 drop-shadow">
                      {item.tagline}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

