import React, { useState, useCallback } from 'react';
import { SpaceCommandWarRoom } from './SpaceCommandWarRoom';
import { GrootCursorFollower } from './GrootCursorFollower';
import { FuturisticButterflyCursor } from './FuturisticButterflyCursor';

export const HudBackgroundAtmosphere = ({ scrollY = 0 }) => {
  const [butterflyData, setButterflyData] = useState({
    x: typeof window !== 'undefined' ? window.innerWidth * 0.65 : 600,
    y: 300,
    vx: 0,
    vy: 0,
    speed: 0,
  });

  const handleButterflyUpdate = useCallback((data) => {
    setButterflyData(data);
  }, []);

  return (
    <>
      {/* 1. CINEMATIC BUTTERFLY CUSTOM SCI-FI CURSOR (Z-50) */}
      <FuturisticButterflyCursor onButterflyUpdate={handleButterflyUpdate} />

      {/* 2. BACKGROUND LAYERS CONTAINER (STRICTLY Z-0) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        
        {/* 2A. DEEP SPACE COMMAND CENTER WAR ROOM (ZONE A, B, C) */}
        <SpaceCommandWarRoom butterflyData={butterflyData} scrollY={scrollY} />

        {/* 2B. INTERACTIVE BABY GROOT (SCALED TO ~130-150PX, PURSUING THE BUTTERFLY) */}
        <GrootCursorFollower butterflyData={butterflyData} />

      </div>
    </>
  );
};
