import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DOMAINS_DATA, type DomainPrompt } from '../utils/domainsData';
import { Cpu, Shirt, Utensils, HeartPulse, GraduationCap, Clapperboard, Compass, Gamepad2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/soundFx';


interface DiscoverSectionProps {
  selectedDomain: DomainPrompt | null;
  onSelectDomain: (domain: DomainPrompt) => void;
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({
  selectedDomain,
  onSelectDomain,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string, color: string) => {
    const props = { className: 'w-8 h-8', style: { color } };
    switch (iconName) {
      case 'Cpu': return <Cpu {...props} />;
      case 'Shirt': return <Shirt {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Clapperboard': return <Clapperboard {...props} />;
      case 'Compass': return <Compass {...props} />;
      default: return <Gamepad2 {...props} />;
    }
  };

  return (
    <section id="challenge" className="relative py-28 px-4 bg-[#0a0a0c] overflow-hidden border-t border-white/10">
      {/* Spider-Verse Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 border-b-2 border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-anton text-6xl md:text-8xl text-[#ff003c] leading-none drop-shadow-[4px_4px_0px_#00f0ff]">
                01
              </span>
              <div className="flex flex-col">
                <span className="font-space text-xs tracking-widest text-[#00f0ff] uppercase font-bold">
                  PHASE 01 — THE CREATIVE DOMAINS
                </span>
                <h2 className="font-anton text-4xl sm:text-6xl text-white tracking-wider uppercase">
                  DISCOVER
                </h2>
              </div>
            </div>
            <h3 className="font-bebas text-2xl sm:text-3xl text-gray-300 tracking-wide mt-2">
              CHOOSE YOUR DOMAIN
            </h3>
          </div>

          <p className="font-space text-sm sm:text-base text-gray-400 max-w-md">
            Select the domain your brand will belong to — restaurant, healthcare, fashion, technology, education, entertainment, lifestyle, and more.
          </p>
        </div>

        {/* Floating Comic Panels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOMAINS_DATA.map((domain, index) => {
            const isSelected = selectedDomain?.id === domain.id;
            const isHovered = hoveredId === domain.id;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => {
                  setHoveredId(domain.id);
                  soundFx.playClick();
                }}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {
                  soundFx.playWebShoot();
                  onSelectDomain(domain);
                }}
                className={`relative group cursor-pointer p-6 bg-[#121216] rounded-lg border-2 transition-all duration-300 transform ${
                  isSelected
                    ? 'border-[#ff003c] bg-halftone-red shadow-spider-red translate-y-[-8px] scale-[1.02]'
                    : isHovered
                    ? 'border-[#00f0ff] bg-halftone-blue shadow-spider-blue translate-y-[-6px]'
                    : 'border-white/15 hover:border-white/40'
                }`}
              >
                {/* SVG Web Strand Overlay on Hover */}
                {(isHovered || isSelected) && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-current text-[#ff003c]/30">
                    <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                )}

                {/* Panel Corner Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bebas text-lg text-gray-500 group-hover:text-[#00f0ff] transition-colors">
                    PANEL #0{index + 1}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-[#ff003c] animate-bounce" />
                  )}
                </div>

                {/* Icon Container */}
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-black border border-white/20 rounded group-hover:border-[#00f0ff] group-hover:scale-110 transition-transform">
                  {getIcon(domain.iconName, domain.color)}
                </div>

                {/* Domain Title */}
                <h4 className="font-anton text-2xl text-white tracking-wide uppercase mb-1 group-hover:text-[#00f0ff] transition-colors">
                  {domain.name}
                </h4>

                <p className="font-bebas text-sm text-[#ff003c] tracking-wider uppercase mb-3">
                  {domain.tagline}
                </p>

                <p className="font-inter text-xs text-gray-400 leading-relaxed mb-4">
                  {domain.description}
                </p>

                {/* Panel Action Indicator */}
                <div className="flex items-center text-xs font-bebas tracking-wider text-gray-400 group-hover:text-white transition-colors">
                  <span>{isSelected ? 'SELECTED DOMAIN' : 'SELECT THIS DOMAIN'}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Domain Selection Status Drawer Banner */}
        {selectedDomain && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 bg-[#121216] border-2 border-[#ff003c] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-spider-red"
          >
            <div>
              <span className="font-space text-xs text-[#00f0ff] tracking-widest uppercase font-bold">
                ACTIVE TEAM SELECTION
              </span>
              <h4 className="font-anton text-2xl text-white tracking-wide uppercase">
                DOMAIN: {selectedDomain.name}
              </h4>
              <p className="font-inter text-xs text-gray-300">
                {selectedDomain.description}
              </p>
            </div>

            <a
              href="#build"
              onClick={() => soundFx.playClick()}
              className="px-6 py-3 bg-[#ff003c] text-white font-bebas text-xl tracking-wider rounded border border-white hover:bg-[#ff003c]/90 transition-all whitespace-nowrap"
            >
              PROCEED TO PHASE 02 — BUILD
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};
