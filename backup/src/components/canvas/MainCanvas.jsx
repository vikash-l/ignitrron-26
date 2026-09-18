import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ArcReactorSystem } from './ArcReactorGroup';
import { IgnitrronIntroGroup } from './IgnitrronIntroGroup';
import { HolographicWorkspace } from './HolographicWorkspace';
import { soundEngine } from '../../utils/soundEngine';

export function MainCanvas({
  currentStage,
  loadingProgress = 0,
  activeEventIndex,
  isEventFocused,
  onArcReactorComplete,
  onSelectEvent,
  onHoverEvent
}) {
  const containerRef = useRef(null);

  // References
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const arcReactorRef = useRef(null);
  const introRef = useRef(null);
  const workspaceRef = useRef(null);

  const cameraLookAtRef = useRef(new THREE.Vector3(0, 0, -10));
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const reqIdRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  // 1. Initialize Master Three.js Scene & Render Engine
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#020605');
    scene.fog = new THREE.FogExp2('#020605', 0.012);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 200);
    camera.position.set(0, 2, 28);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // Instantiate Subsystems
    arcReactorRef.current = new ArcReactorSystem(scene);
    introRef.current = new IgnitrronIntroGroup(scene);
    workspaceRef.current = new HolographicWorkspace(scene, camera, (idx) => {
      if (onSelectEvent) onSelectEvent(idx);
    });

    introRef.current.group.visible = false;
    workspaceRef.current.group.visible = false;

    // Window Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    // Mouse Parallax & Raycast Pointer Listener
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x * 1.8;
      mouseRef.current.targetY = y * 1.4;

      if (workspaceRef.current && workspaceRef.current.group.visible) {
        workspaceRef.current.handlePointerMove(x, y);
        if (onHoverEvent) {
          onHoverEvent(workspaceRef.current.hoveredEventIndex);
        }
      }
    };

    const handleClick = () => {
      if (workspaceRef.current && workspaceRef.current.group.visible) {
        workspaceRef.current.handlePointerClick();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Master Render Loop using High-Precision Delta
    const animate = (now) => {
      reqIdRef.current = requestAnimationFrame(animate);
      const delta = Math.min((now - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = now;

      // Smooth Mouse Parallax Damping for Camera Rotation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      if (cameraRef.current) {
        cameraRef.current.rotation.y = -mouseRef.current.x * 0.025;
        cameraRef.current.rotation.x = mouseRef.current.y * 0.025;
        cameraRef.current.lookAt(cameraLookAtRef.current);
      }

      if (arcReactorRef.current && arcReactorRef.current.group.visible) {
        arcReactorRef.current.update(delta);
      }
      if (introRef.current && introRef.current.group.visible) {
        introRef.current.update(delta);
      }
      if (workspaceRef.current && workspaceRef.current.group.visible) {
        workspaceRef.current.update(delta);
      }

      renderer.render(scene, camera);
    };

    reqIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.remove();
      }
    };
  }, []);

  // 2. Stage 01 Arc Reactor Progress Handler
  useEffect(() => {
    if (currentStage === 1 && arcReactorRef.current) {
      arcReactorRef.current.updateProgress(loadingProgress);
      soundEngine.playArcReactorHum(loadingProgress);

      if (cameraRef.current && loadingProgress < 98) {
        const targetZ = 10 + (loadingProgress / 100) * 8;
        cameraRef.current.position.z += (targetZ - cameraRef.current.position.z) * 0.1;
      }

      if (loadingProgress >= 100) {
        soundEngine.stopArcReactorHum();
        soundEngine.playSpatialWhoosh();

        gsap.to(cameraRef.current.position, {
          z: -4,
          duration: 1.2,
          ease: 'power3.in',
          onComplete: () => {
            if (onArcReactorComplete) onArcReactorComplete();
          }
        });
      }
    }
  }, [currentStage, loadingProgress]);

  // 3. Stage Transitions
  useEffect(() => {
    if (!cameraRef.current) return;

    if (currentStage === 2) {
      if (arcReactorRef.current) arcReactorRef.current.group.visible = false;
      if (introRef.current) introRef.current.group.visible = true;
      if (workspaceRef.current) workspaceRef.current.group.visible = false;

      cameraRef.current.position.set(0, 0, 14);
      soundEngine.playBootChirp();

      gsap.to(cameraRef.current.position, {
        z: 10,
        duration: 2.0,
        ease: 'power2.out'
      });
    } else if (currentStage === 3 || currentStage === 4) {
      if (arcReactorRef.current) arcReactorRef.current.group.visible = false;
      if (introRef.current) introRef.current.group.visible = false;
      if (workspaceRef.current) workspaceRef.current.group.visible = true;
    }
  }, [currentStage]);

  // 4. PHYSICAL 3D CAMERA TRAVEL ANIMATION
  useEffect(() => {
    if ((currentStage === 3 || currentStage === 4) && workspaceRef.current && cameraRef.current) {
      if (isEventFocused && activeEventIndex !== null) {
        const targetWorldPos = workspaceRef.current.getEventWorldPosition(activeEventIndex);
        workspaceRef.current.setFocusedEvent(activeEventIndex);

        soundEngine.playSpatialWhoosh();
        soundEngine.playSelectSound();

        const flightTargetPos = new THREE.Vector3(
          targetWorldPos.x,
          targetWorldPos.y + 0.5,
          targetWorldPos.z + 8.2
        );

        gsap.to(cameraRef.current.position, {
          x: flightTargetPos.x,
          y: flightTargetPos.y,
          z: flightTargetPos.z,
          duration: 2.0,
          ease: 'power3.inOut'
        });

        gsap.to(cameraLookAtRef.current, {
          x: targetWorldPos.x,
          y: targetWorldPos.y,
          z: targetWorldPos.z,
          duration: 2.0,
          ease: 'power3.inOut',
          onComplete: () => {
            soundEngine.playHologramScan();
          }
        });
      } else {
        workspaceRef.current.setFocusedEvent(null);
        soundEngine.playSpatialWhoosh();

        gsap.to(cameraRef.current.position, {
          x: 0,
          y: 2,
          z: 28,
          duration: 1.8,
          ease: 'power3.inOut'
        });

        gsap.to(cameraLookAtRef.current, {
          x: 0,
          y: 0,
          z: -10,
          duration: 1.8,
          ease: 'power3.inOut'
        });
      }
    }
  }, [currentStage, activeEventIndex, isEventFocused]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
}
