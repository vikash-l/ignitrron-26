import React, { useState, useEffect, useRef } from 'react';
import milesHeroImg from '../../assets/miles_hero.png';

interface MilesMoralesPosterProps {
  rotation: { x: number; y: number };
  activeView: 'iso' | 'front' | 'side' | 'top';
}

export const MilesMoralesPoster: React.FC<MilesMoralesPosterProps> = ({
  rotation,
  activeView,
}) => {
  const [processedImg, setProcessedImg] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Background removal and taskbar cropping on offscreen canvas
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = milesHeroImg;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const origW = img.naturalWidth || img.width;
        const origH = img.naturalHeight || img.height;

        // Crop out the Windows taskbar from bottom (~6.8% of height)
        const cropH = Math.floor(origH * 0.932);
        canvas.width = origW;
        canvas.height = cropH;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setProcessedImg(milesHeroImg);
          setIsLoaded(true);
          return;
        }

        // Draw cropped area
        ctx.drawImage(img, 0, 0, origW, cropH, 0, 0, origW, cropH);

        const imgData = ctx.getImageData(0, 0, origW, cropH);
        const data = imgData.data;

        // Remove white background and smooth edges
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          const maxChannel = Math.max(r, g, b);
          const minChannel = Math.min(r, g, b);
          const brightness = (r + g + b) / 3;
          const isNeutral = (maxChannel - minChannel) < 25;

          // If pixel is pure or near-white background
          if (r > 228 && g > 228 && b > 228) {
            data[i + 3] = 0; // Transparent
          } else if (isNeutral && brightness > 195) {
            // Anti-aliased feathering on edges
            const alphaFactor = Math.max(0, (228 - brightness) / 33);
            data[i + 3] = Math.floor(data[i + 3] * alphaFactor);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setProcessedImg(canvas.toDataURL('image/png'));
        setIsLoaded(true);
      } catch (err) {
        console.warn('Canvas image processing fallback', err);
        setProcessedImg(milesHeroImg);
        setIsLoaded(true);
      }
    };
    img.onerror = () => {
      setProcessedImg(milesHeroImg);
      setIsLoaded(true);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Compute view-based perspective shift for projection modes
  const viewShift = {
    iso: { rotateX: 6, rotateY: -8, scale: 1 },
    front: { rotateX: 0, rotateY: 0, scale: 1.04 },
    side: { rotateX: 0, rotateY: 16, scale: 0.98 },
    top: { rotateX: 14, rotateY: 0, scale: 0.96 },
  }[activeView];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-opacity duration-700 select-none ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Dark Futuristic Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a]/95 via-[#05070f] to-[#030408] pointer-events-none" />

      {/* Spider-Verse Halftone Pattern Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none mix-blend-screen" />

      {/* Ambient Neon Lighting & Volumetric Glows */}
      <div className="absolute -top-12 -left-12 w-52 h-52 bg-[#ff0055]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-[#00f0ff]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#9d4edd]/25 rounded-full blur-3xl pointer-events-none" />

      {/* CAD Blueprint Lines & Coordinate Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none" />

      {/* Animated Floating Energy Sparks & Glowing Embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '15%', left: '12%', color: '#00f0ff', delay: '0s', size: 'w-1.5 h-1.5' },
          { top: '78%', left: '82%', color: '#ff0055', delay: '1s', size: 'w-2 h-2' },
          { top: '28%', left: '80%', color: '#9d4edd', delay: '1.5s', size: 'w-1.5 h-1.5' },
          { top: '85%', left: '18%', color: '#00f0ff', delay: '2s', size: 'w-2 h-2' },
          { top: '10%', left: '60%', color: '#ff0055', delay: '0.7s', size: 'w-1 h-1' },
          { top: '48%', left: '88%', color: '#00f0ff', delay: '1.8s', size: 'w-1.5 h-1.5' },
        ].map((spark, idx) => (
          <div
            key={idx}
            className={`absolute ${spark.size} rounded-full animate-ping opacity-80`}
            style={{
              top: spark.top,
              left: spark.left,
              backgroundColor: spark.color,
              animationDuration: '2.8s',
              animationDelay: spark.delay,
              boxShadow: `0 0 10px ${spark.color}, 0 0 20px ${spark.color}`,
            }}
          />
        ))}
      </div>

      {/* Spider-Verse Polygonal Reticle & Rotating Energy Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-56 h-56 border border-[#00f0ff] rounded-full animate-spin-gear" />
        <div className="w-44 h-44 border border-dashed border-[#ff0055] rounded-full animate-spin-gear-reverse absolute" />
      </div>

      {/* Parallax & 3D Interactive Visual Container */}
      <div
        className="relative w-full h-full max-w-[270px] sm:max-w-[310px] flex items-center justify-center transition-transform duration-300 ease-out animate-holo-float"
        style={{
          transform: `perspective(800px) rotateX(${
            viewShift.rotateX + mouseOffset.y * -0.4 + rotation.x * 0.1
          }deg) rotateY(${
            viewShift.rotateY + mouseOffset.x * 0.4 + rotation.y * 0.1
          }deg) scale(${viewShift.scale})`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft Purple & Crimson Bloom Aura behind character */}
        <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-[#ff0055]/40 via-[#9d4edd]/30 to-[#00f0ff]/40 blur-2xl pointer-events-none animate-energy-pulse" />

        {/* Uploaded Miles Morales Image with Transparent Background & Neon Glows */}
        {processedImg ? (
          <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
            <img
              src={processedImg}
              alt="Miles Morales CAD Forge 2026 Hero Visual"
              className="max-h-[210px] sm:max-h-[235px] w-auto object-contain transition-all duration-300 animate-energy-pulse"
              style={{
                filter:
                  'drop-shadow(0 0 16px rgba(255, 0, 85, 0.85)) drop-shadow(0 0 28px rgba(0, 240, 255, 0.6)) drop-shadow(0 0 45px rgba(157, 78, 221, 0.45))',
              }}
            />
          </div>
        ) : (
          <div className="w-40 h-40 flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};
