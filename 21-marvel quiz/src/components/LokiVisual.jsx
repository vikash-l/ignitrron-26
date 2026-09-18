import React from 'react';
import { motion } from 'framer-motion';

export const LokiVisual = ({ size = 'large', showIllusions = true, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      
      {/* Background Emerald Fog & Radial Magic Aura */}
      <div className="absolute inset-0 bg-[#35D98B]/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute inset-4 bg-[#C8A951]/10 rounded-full blur-2xl" />

      {/* Illusion Clone 1 - Left Ghost Silhouette */}
      {showIllusions && (
        <motion.div
          animate={{
            x: [-15, -35, -15],
            opacity: [0, 0.35, 0],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute opacity-30 text-[#35D98B] filter blur-[1px] transform -translate-x-8"
        >
          <LokiSilhouetteSvg width={size === 'large' ? 380 : 220} height={size === 'large' ? 440 : 260} glowColor="#35D98B" />
        </motion.div>
      )}

      {/* Illusion Clone 2 - Right Ghost Silhouette */}
      {showIllusions && (
        <motion.div
          animate={{
            x: [15, 35, 15],
            opacity: [0, 0.35, 0],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 6,
            delay: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute opacity-30 text-[#C8A951] filter blur-[1px] transform translate-x-8"
        >
          <LokiSilhouetteSvg width={size === 'large' ? 380 : 220} height={size === 'large' ? 440 : 260} glowColor="#C8A951" />
        </motion.div>
      )}

      {/* Main Stationary Loki Silhouette with Glowing Eyes and Horns */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 filter drop-shadow-[0_0_25px_rgba(53,217,139,0.5)]"
      >
        <LokiSilhouetteSvg width={size === 'large' ? 400 : 240} height={size === 'large' ? 460 : 280} glowColor="#35D98B" isPrimary />
      </motion.div>

    </div>
  );
};

// Detailed Original Vector Graphic of Loki with Horned Crown and Magic Hands
const LokiSilhouetteSvg = ({ width = 380, height = 440, glowColor = '#35D98B', isPrimary = false }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Magic Energy Gradients */}
        <radialGradient id="magicEnergyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#35D98B" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#16A36A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0A100D" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="goldEnergyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E1C66A" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#C8A951" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#050706" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="capeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A100D" />
          <stop offset="50%" stopColor="#050706" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.95" />
        </linearGradient>

        <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Atmospheric Background Rays & Magic Ribbons */}
      <path d="M200 120 L80 440 M200 120 L320 440 M200 120 L40 380 M200 120 L360 380" stroke={glowColor} strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" />

      {/* Flowing Cape / Robes Silhouette */}
      <path
        d="M100 460 Q 60 340 120 220 Q 200 200 280 220 Q 340 340 300 460 Z"
        fill="url(#capeGrad)"
        stroke={glowColor}
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />

      {/* Shoulders & Chest Armour Lines */}
      <path d="M130 240 L 200 280 L 270 240 M 160 210 L 200 250 L 240 210" stroke={glowColor} strokeWidth="2" strokeOpacity="0.4" fill="none" />

      {/* Head Silhouette */}
      <ellipse cx="200" cy="170" rx="38" ry="46" fill="#0A100D" stroke={glowColor} strokeWidth="2" />

      {/* Iconic Horned Crown (Sovereign Loki Horns) */}
      <g filter={isPrimary ? "url(#glowFilter)" : undefined}>
        {/* Left Horn */}
        <path
          d="M 172 145 C 150 110, 110 50, 60 40 C 90 75, 135 115, 178 148 Z"
          fill="#C8A951"
          stroke="#E1C66A"
          strokeWidth="2"
        />
        {/* Right Horn */}
        <path
          d="M 228 145 C 250 110, 290 50, 340 40 C 310 75, 265 115, 222 148 Z"
          fill="#C8A951"
          stroke="#E1C66A"
          strokeWidth="2"
        />
        {/* Crown Crest Centerpiece */}
        <polygon points="200,120 180,150 220,150" fill="#E1C66A" stroke="#C8A951" strokeWidth="1.5" />
      </g>

      {/* Glowing Mischievous Eyes */}
      {isPrimary && (
        <g>
          <ellipse cx="186" cy="168" rx="4" ry="2" fill="#35D98B" filter="url(#glowFilter)" />
          <ellipse cx="214" cy="168" rx="4" ry="2" fill="#35D98B" filter="url(#glowFilter)" />
        </g>
      )}

      {/* Magic Casting Hands with Evolving Emerald Orbs */}
      <g>
        {/* Left Magic Orb */}
        <circle cx="85" cy="310" r="32" fill="url(#magicEnergyGrad)" />
        <circle cx="85" cy="310" r="8" fill="#35D98B" filter="url(#glowFilter)" />
        <path d="M 60 300 Q 85 280 110 320" stroke="#35D98B" strokeWidth="2" strokeOpacity="0.8" fill="none" />

        {/* Right Magic Orb */}
        <circle cx="315" cy="310" r="32" fill="url(#magicEnergyGrad)" />
        <circle cx="315" cy="310" r="8" fill="#35D98B" filter="url(#glowFilter)" />
        <path d="M 290 320 Q 315 280 340 300" stroke="#35D98B" strokeWidth="2" strokeOpacity="0.8" fill="none" />
      </g>
    </svg>
  );
};
