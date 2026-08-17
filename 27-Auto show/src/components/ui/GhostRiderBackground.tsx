import React from 'react';

export const GhostRiderBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 01 — Deep Asphalt Base */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* 02 — Atmospheric Volumetric Glows */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#4A0A07]/30 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#D72614]/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -left-20 w-[450px] h-[450px] bg-[#FF6A00]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#4A0A07]/25 rounded-full blur-[130px]" />

      {/* 03 — Subtle Asphalt Texture & Road Scratches */}
      <div className="absolute inset-0 asphalt-texture opacity-75" />

      {/* 04 — Curved Flame / Tire Trails */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fireGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A0A07" stopOpacity="0" />
            <stop offset="30%" stopColor="#D72614" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#FF6A00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFB000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fireGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D72614" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4A0A07" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M -100,250 Q 400,100 900,450 T 2000,600"
          fill="none"
          stroke="url(#fireGrad1)"
          strokeWidth="4"
          strokeDasharray="25 15"
        />

        <path
          d="M 100,850 Q 700,700 1300,1050 T 2200,1200"
          fill="none"
          stroke="url(#fireGrad2)"
          strokeWidth="3"
          strokeDasharray="35 20"
        />
      </svg>
    </div>
  );
};
