'use client';

import { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { assetPath } from '@/config/assetPath';
import * as THREE from 'three';

interface HeroBikeProps {
  visible?: boolean;
}

export default function HeroBike({ visible = true }: HeroBikeProps) {
  const groupRef = useRef<THREE.Group>(null);

  const gltf = useGLTF(assetPath('/assets/bike/hero-bike.glb'));

  const clonedScene = useMemo(() => {
    if (!gltf || !gltf.scene) return null;
    const clone = gltf.scene.clone(true);

    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    // Target vehicle length ~ 4.2 units
    const scale = 4.2 / (maxDim || 1);
    clone.scale.setScalar(scale);

    box.setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    clone.position.x = -center.x;
    clone.position.y = -box.min.y;
    clone.position.z = -center.z;

    clone.traverse((child: any) => {
      if (child.isMesh) {
        const matName = (child.material?.name || '').toLowerCase();
        const meshName = (child.name || '').toLowerCase();

        // Hide interior
        if (
          meshName.includes('steering') ||
          meshName.includes('interior') ||
          meshName.includes('carpet') ||
          meshName.includes('seat') ||
          matName.includes('leather') ||
          matName.includes('interior')
        ) {
          child.visible = false;
          return;
        }

        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          // Sleek Titanium Silver finish for the secondary vehicle showcase
          if (
            matName.includes('body_color') ||
            matName.includes('paint') ||
            matName.includes('body') ||
            meshName.includes('body')
          ) {
            child.material = new THREE.MeshPhysicalMaterial({
              color: new THREE.Color('#8a929a'),
              metalness: 0.95,
              roughness: 0.15,
              clearcoat: 1.0,
              clearcoatRoughness: 0.05,
              reflectivity: 1.0,
              envMapIntensity: 2.5,
            });
          } else if (matName.includes('glass') || meshName.includes('glass')) {
            child.material = new THREE.MeshPhysicalMaterial({
              color: new THREE.Color('#050a12'),
              transmission: 0.2,
              opacity: 0.95,
              transparent: true,
              roughness: 0.05,
              ior: 1.52,
              envMapIntensity: 3.0,
            });
          } else if (matName.includes('chrome') || matName.includes('metal') || meshName.includes('rim')) {
            child.material.metalness = 0.98;
            child.material.roughness = 0.08;
            child.material.envMapIntensity = 2.5;
          } else {
            child.material.envMapIntensity = 2.0;
          }
          child.material.needsUpdate = true;
        }
      }
    });

    return clone;
  }, [gltf]);

  if (!visible) return null;

  return (
    <group ref={groupRef} position={[0, 0, -35]} rotation={[0, Math.PI / 4, 0]}>
      {clonedScene && <primitive object={clonedScene} />}
    </group>
  );
}

useGLTF.preload(assetPath('/assets/bike/hero-bike.glb'));
