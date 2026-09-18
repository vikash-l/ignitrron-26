'use client';

import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CAMERA_POSITIONS = {
  cameraStart: { pos: new THREE.Vector3(0, 5.5, 18.0), target: new THREE.Vector3(0, 0.4, 0) },
  cameraFront: { pos: new THREE.Vector3(0, 1.4, 7.5), target: new THREE.Vector3(0, 0.4, 0) },
  cameraThreeQuarter: { pos: new THREE.Vector3(5.5, 1.8, 5.5), target: new THREE.Vector3(0, 0.4, 0) },
  cameraSide: { pos: new THREE.Vector3(7.5, 1.4, 0.0), target: new THREE.Vector3(0, 0.4, 0) },
  cameraRear: { pos: new THREE.Vector3(-5.2, 1.8, -5.5), target: new THREE.Vector3(0, 0.4, 0) },
  cameraDetail: { pos: new THREE.Vector3(3.2, 1.2, 3.2), target: new THREE.Vector3(0.5, 0.4, 1.0) },
  cameraWide: { pos: new THREE.Vector3(0, 4.0, 11.0), target: new THREE.Vector3(0, 0.4, 0) },
};

interface CameraControllerProps {
  isLoaded: boolean;
}

export default function CameraController({ isLoaded }: CameraControllerProps) {
  const { camera, size } = useThree();
  
  const currentPos = useRef(CAMERA_POSITIONS.cameraStart.pos.clone());
  const currentTarget = useRef(CAMERA_POSITIONS.cameraStart.target.clone());
  
  const targetPos = useRef(CAMERA_POSITIONS.cameraStart.pos.clone());
  const targetLookAt = useRef(CAMERA_POSITIONS.cameraStart.target.clone());
  
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Responsive FOV adjustment for mobile aspect ratios
  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      const isMobile = size.width < 768;
      camera.fov = isMobile ? 55 : 42;
      camera.updateProjectionMatrix();
    }
  }, [camera, size.width]);

  useEffect(() => {
    if (!isLoaded) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initial reveal animation: Move smoothly into Front Three-Quarter View
    gsap.to(targetPos.current, {
      x: CAMERA_POSITIONS.cameraThreeQuarter.pos.x,
      y: CAMERA_POSITIONS.cameraThreeQuarter.pos.y,
      z: CAMERA_POSITIONS.cameraThreeQuarter.pos.z,
      duration: 2.5,
      ease: 'power3.out',
    });

    gsap.to(targetLookAt.current, {
      x: CAMERA_POSITIONS.cameraThreeQuarter.target.x,
      y: CAMERA_POSITIONS.cameraThreeQuarter.target.y,
      z: CAMERA_POSITIONS.cameraThreeQuarter.target.z,
      duration: 2.5,
      ease: 'power3.out',
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#scroll-experience-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
      },
    });

    // Stage 1 -> Front View
    scrollTl.to(targetPos.current, {
      x: CAMERA_POSITIONS.cameraFront.pos.x,
      y: CAMERA_POSITIONS.cameraFront.pos.y,
      z: CAMERA_POSITIONS.cameraFront.pos.z,
    }, 0)
    .to(targetLookAt.current, {
      x: CAMERA_POSITIONS.cameraFront.target.x,
      y: CAMERA_POSITIONS.cameraFront.target.y,
      z: CAMERA_POSITIONS.cameraFront.target.z,
    }, 0);

    // Stage 2 -> Three Quarter View
    scrollTl.to(targetPos.current, {
      x: CAMERA_POSITIONS.cameraThreeQuarter.pos.x,
      y: CAMERA_POSITIONS.cameraThreeQuarter.pos.y,
      z: CAMERA_POSITIONS.cameraThreeQuarter.pos.z,
    }, 1)
    .to(targetLookAt.current, {
      x: CAMERA_POSITIONS.cameraThreeQuarter.target.x,
      y: CAMERA_POSITIONS.cameraThreeQuarter.target.y,
      z: CAMERA_POSITIONS.cameraThreeQuarter.target.z,
    }, 1);

    // Stage 3 -> Side View
    scrollTl.to(targetPos.current, {
      x: CAMERA_POSITIONS.cameraSide.pos.x,
      y: CAMERA_POSITIONS.cameraSide.pos.y,
      z: CAMERA_POSITIONS.cameraSide.pos.z,
    }, 2)
    .to(targetLookAt.current, {
      x: CAMERA_POSITIONS.cameraSide.pos.x,
      y: CAMERA_POSITIONS.cameraSide.pos.y,
      z: CAMERA_POSITIONS.cameraSide.pos.z,
    }, 2);

    // Stage 4 -> Rear View
    scrollTl.to(targetPos.current, {
      x: CAMERA_POSITIONS.cameraRear.pos.x,
      y: CAMERA_POSITIONS.cameraRear.pos.y,
      z: CAMERA_POSITIONS.cameraRear.pos.z,
    }, 3)
    .to(targetLookAt.current, {
      x: CAMERA_POSITIONS.cameraRear.target.x,
      y: CAMERA_POSITIONS.cameraRear.target.y,
      z: CAMERA_POSITIONS.cameraRear.target.z,
    }, 3);

    // Stage 5 -> Detail View
    scrollTl.to(targetPos.current, {
      x: CAMERA_POSITIONS.cameraDetail.pos.x,
      y: CAMERA_POSITIONS.cameraDetail.pos.y,
      z: CAMERA_POSITIONS.cameraDetail.pos.z,
    }, 4)
    .to(targetLookAt.current, {
      x: CAMERA_POSITIONS.cameraDetail.target.x,
      y: CAMERA_POSITIONS.cameraDetail.target.y,
      z: CAMERA_POSITIONS.cameraDetail.target.z,
    }, 4);

    // Stage 6 -> Wide View / Pull Away
    scrollTl.to(targetPos.current, {
      x: CAMERA_POSITIONS.cameraWide.pos.x,
      y: CAMERA_POSITIONS.cameraWide.pos.y,
      z: CAMERA_POSITIONS.cameraWide.pos.z,
    }, 5)
    .to(targetLookAt.current, {
      x: CAMERA_POSITIONS.cameraWide.target.x,
      y: CAMERA_POSITIONS.cameraWide.target.y,
      z: CAMERA_POSITIONS.cameraWide.target.z,
    }, 5);

    return () => {
      scrollTl.kill();
    };
  }, [isLoaded]);

  useFrame((_, delta) => {
    const lerpFactor = Math.min(delta * 4, 1.0);

    const desiredPosX = targetPos.current.x + mouse.current.x * 0.6;
    const desiredPosY = targetPos.current.y + mouse.current.y * 0.4;
    const desiredPosZ = targetPos.current.z;

    currentPos.current.x = THREE.MathUtils.lerp(currentPos.current.x, desiredPosX, lerpFactor);
    currentPos.current.y = THREE.MathUtils.lerp(currentPos.current.y, desiredPosY, lerpFactor);
    currentPos.current.z = THREE.MathUtils.lerp(currentPos.current.z, desiredPosZ, lerpFactor);

    currentTarget.current.x = THREE.MathUtils.lerp(currentTarget.current.x, targetLookAt.current.x, lerpFactor);
    currentTarget.current.y = THREE.MathUtils.lerp(currentTarget.current.y, targetLookAt.current.y, lerpFactor);
    currentTarget.current.z = THREE.MathUtils.lerp(currentTarget.current.z, targetLookAt.current.z, lerpFactor);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
}
