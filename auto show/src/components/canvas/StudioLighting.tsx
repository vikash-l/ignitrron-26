'use client';

import { Environment, Lightformer, ContactShadows, Sparkles } from '@react-three/drei';

export default function StudioLighting() {
  return (
    <>
      {/* High-End Dark Studio Environment Lighting */}
      <Environment resolution={512}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          {/* Main Overhead Studio Softbox */}
          <Lightformer
            form="rect"
            intensity={2.2}
            color="#ffffff"
            position={[0, 14, 0]}
            scale={[18, 18, 1]}
            target={[0, 0, 0]}
          />
          {/* Front Hood & Windshield Softbox */}
          <Lightformer
            form="rect"
            intensity={1.6}
            color="#ffffff"
            position={[0, 8, 12]}
            scale={[14, 6, 1]}
          />
          {/* Left Side Body Light Panel */}
          <Lightformer
            form="rect"
            intensity={1.5}
            color="#d0ddff"
            position={[-12, 6, 2]}
            scale={[22, 8, 1]}
            rotation-y={Math.PI / 2}
          />
          {/* Right Side Body Light Panel */}
          <Lightformer
            form="rect"
            intensity={1.5}
            color="#ffffff"
            position={[12, 6, 2]}
            scale={[22, 8, 1]}
            rotation-y={-Math.PI / 2}
          />
        </group>
      </Environment>

      {/* Primary Key Light — Soft Studio Key Light */}
      <directionalLight
        position={[4, 10, 8]}
        intensity={1.8}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />

      {/* Secondary Fill Light — Crisp Cool Fill */}
      <directionalLight position={[-6, 6, 8]} intensity={1.2} color="#d0ddff" />

      {/* Rear Accent Backlight */}
      <directionalLight position={[0, 4, -12]} intensity={0.8} color="#ff3344" />

      {/* Top Overhead Spotlight */}
      <spotLight
        position={[0, 14, 2]}
        angle={0.5}
        penumbra={0.9}
        intensity={1.8}
        color="#ffffff"
        castShadow
      />

      {/* Balanced Ambient Fill */}
      <ambientLight intensity={0.5} />

      {/* Soft Contact Ground Shadows */}
      <ContactShadows
        position={[0, -0.01, 0]}
        opacity={0.85}
        scale={22}
        blur={1.6}
        far={6}
        resolution={1024}
        color="#000000"
      />

      {/* Atmospheric Particles */}
      <Sparkles
        count={40}
        scale={[30, 15, 30]}
        size={2.0}
        speed={0.3}
        color="#ff3344"
        opacity={0.5}
      />

      {/* Dark Luxury Floor Plane (Blends 100% Seamlessly with #050505 background) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[300, 300]} />
        <meshStandardMaterial color="#040406" roughness={0.7} metalness={0.1} />
      </mesh>
    </>
  );
}
