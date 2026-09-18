'use client';

import { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { assetPath } from '@/config/assetPath';
import * as THREE from 'three';

interface HeroCarProps {
  visible?: boolean;
}

export default function HeroCar({ visible = true }: HeroCarProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load official 3D car GLB model
  const gltf = useGLTF(assetPath('/assets/car/hero-car.glb'));

  // Clone scene & set up materials and dimensions
  const clonedScene = useMemo(() => {
    if (!gltf || !gltf.scene) return null;
    
    const clone = gltf.scene.clone(true);
    
    // Auto-center and normalize scale
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Scale car to fit scene (~4.2 units length)
    const scale = 4.2 / (maxDim || 1);
    clone.scale.setScalar(scale);
    
    // Re-align so wheels sit on floor y=0
    box.setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    clone.position.x = -center.x;
    clone.position.y = -box.min.y;
    clone.position.z = -center.z;
    
    // Realistic Pitch Black clearcoat automotive paint finish
    const pitchBlackPaint = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0a0b0d'),
      metalness: 0.25,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 0.8,
      envMapIntensity: 1.2,
    });

    // Traverse scene and setup materials
    clone.traverse((child: any) => {
      if (child.isMesh) {
        const matName = (child.material?.name || '').toLowerCase();
        const meshName = (child.name || '').toLowerCase();

        // Hide interior components so camera stays focused on exterior car body
        if (
          meshName.includes('steering') ||
          meshName.includes('interior') ||
          meshName.includes('carpet') ||
          meshName.includes('seat') ||
          matName.includes('leather') ||
          matName.includes('interior') ||
          matName.includes('carpet')
        ) {
          child.visible = false;
          return;
        }

        child.castShadow = true;
        child.receiveShadow = true;
        
        if (child.material) {
          // Identify Body Paint mesh/material -> apply clean Pitch Black clearcoat paint
          if (
            matName.includes('body_color') ||
            matName.includes('paint') ||
            matName.includes('car_body') ||
            meshName.includes('car_body')
          ) {
            child.material = pitchBlackPaint;
          } else if (matName.includes('glass') || meshName.includes('glass')) {
            // Enhanced automotive dark glass
            child.material = new THREE.MeshPhysicalMaterial({
              color: new THREE.Color('#050a12'),
              transmission: 0.3,
              opacity: 0.9,
              transparent: true,
              roughness: 0.05,
              metalness: 0.1,
              ior: 1.52,
              envMapIntensity: 1.5,
            });
          } else if (matName.includes('chrome') || matName.includes('rim') || meshName.includes('rim')) {
            // High-gloss metallic rims & trim
            child.material.metalness = 0.9;
            child.material.roughness = 0.1;
            child.material.envMapIntensity = 1.8;
          } else {
            child.material.envMapIntensity = 1.2;
          }
          child.material.needsUpdate = true;
        }
      }
    });

    return clone;
  }, [gltf]);

  if (!visible) return null;

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>
      {clonedScene && <primitive object={clonedScene} />}
    </group>
  );
}

useGLTF.preload(assetPath('/assets/car/hero-car.glb'));
