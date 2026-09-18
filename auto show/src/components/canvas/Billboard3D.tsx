'use client';

import { Html } from '@react-three/drei';

interface Billboard3DProps {
  visible?: boolean;
}

export default function Billboard3D({ visible = true }: Billboard3DProps) {
  if (!visible) return null;

  return (
    <group position={[2.8, 1.6, -3.8]} rotation={[0, -0.15, 0]}>
      {/* 3D Billboard Physical Backing Frame — Mounted Safely Behind Car */}
      <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 2.7, 0.1]} />
        <meshStandardMaterial color="#080a10" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Outer Glowing LED Frame Trim */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[4.3, 2.8, 0.05]} />
        <meshBasicMaterial color="#ff2233" toneMapped={false} />
      </mesh>

      {/* Supporting Vertical Ground Posts */}
      <mesh position={[-1.6, -1.8, -0.05]}>
        <cylinderGeometry args={[0.05, 0.05, 2.2, 16]} />
        <meshStandardMaterial color="#11131a" metalness={0.9} roughness={0.2} />
      </mesh>

      <mesh position={[1.6, -1.8, -0.05]}>
        <cylinderGeometry args={[0.05, 0.05, 2.2, 16]} />
        <meshStandardMaterial color="#11131a" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* 3D HTML Digital LED Display Screen */}
      <Html
        transform
        distanceFactor={3.4}
        position={[0, 0, 0.02]}
        className="select-none pointer-events-auto"
      >
        <div className="w-[380px] p-4.5 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/20 shadow-2xl text-white font-sans space-y-3">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[11px] tracking-mega font-bold text-accent uppercase">
                IGNITRRON ’26
              </span>
            </div>
            <span className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase">
              OFFICIAL BILLBOARD
            </span>
          </div>

          {/* Title */}
          <div>
            <h3 className="font-display text-base font-black uppercase tracking-tight text-white leading-tight">
              ORGANIZERS & SPONSORS
            </h3>
            <p className="font-mono text-[9px] text-neutral-400 tracking-wider">
              AUTO SHOW ’26 EXHIBITION
            </p>
          </div>

          {/* Organizers Section */}
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
            <span className="font-mono text-[8px] text-accent tracking-widest uppercase block font-bold">
              ORGANIZED BY
            </span>
            <p className="font-sans text-xs font-bold text-white uppercase leading-tight">
              AUTO SHOW COMMITTEE
            </p>
            <p className="font-mono text-[8px] text-neutral-400">
              IGNITRRON ’26 HOSTING TEAM
            </p>
          </div>

          {/* Sponsors Section */}
          <div className="p-3 rounded-xl bg-accent/20 border border-accent/40 space-y-0.5">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[8px] text-accent tracking-widest uppercase font-bold">
                OFFICIAL EVENT SPONSORS
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-accent text-white font-mono text-[7px] font-bold uppercase">
                READY
              </span>
            </div>
            <p className="font-sans text-[11px] text-neutral-200 font-semibold leading-snug">
              Share sponsor details to display logos & names!
            </p>
          </div>
        </div>
      </Html>
    </group>
  );
}
