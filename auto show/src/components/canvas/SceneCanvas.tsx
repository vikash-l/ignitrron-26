'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import StudioLighting from './StudioLighting';
import HeroCar from './HeroCar';
import CameraController from './CameraController';
import Hotspots3D from './Hotspots3D';

interface SceneCanvasProps {
  isLoaded: boolean;
}

export default function SceneCanvas({ isLoaded }: SceneCanvasProps) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-auto z-10">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 7, 22], fov: 42, near: 0.1, far: 200 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
      >
        <Suspense fallback={null}>
          <StudioLighting />
          <HeroCar visible={true} />
          <Hotspots3D visible={isLoaded} />
          <CameraController isLoaded={isLoaded} />
        </Suspense>
      </Canvas>
    </div>
  );
}
