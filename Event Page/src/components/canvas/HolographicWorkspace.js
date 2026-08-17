import * as THREE from 'three';
import { createHolographicMaterial, createParticleShaderMaterial } from './hologramShaders';
import { EVENTS_DATA } from '../../data/eventsData';
import { DOOMSDAY_THEME } from '../../utils/themeEngine';

export class HolographicWorkspace {
  constructor(scene, camera, onSelectEventCallback) {
    this.scene = scene;
    this.camera = camera;
    this.onSelectEventCallback = onSelectEventCallback;
    this.currentTheme = DOOMSDAY_THEME;

    this.group = new THREE.Group();
    this.group.name = 'HolographicWorkspace';
    this.scene.add(this.group);

    this.time = 0;
    this.eventNodes = [];
    this.focusedEventIndex = null;
    this.hoveredEventIndex = null;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-999, -999);
    this.clickableMeshes = [];

    this.initEnvironment();
    this.initCentralCoreAxis();
    this.initCircularEventStations();
    this.initLights();
  }

  // 1. Dark Doomsday Environment (#020605) & Controlled Atmospheric Particles
  initEnvironment() {
    const primaryColor = new THREE.Color(this.currentTheme.primary);

    // Dark Floor Grid (Subtle 0.02 opacity - Doomsday command room floor)
    const gridGeo = new THREE.PlaneGeometry(280, 280, 35, 35);
    this.gridMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.02,
      blending: THREE.AdditiveBlending
    });
    this.gridMesh = new THREE.Mesh(gridGeo, this.gridMat);
    this.gridMesh.rotation.x = -Math.PI / 2;
    this.gridMesh.position.y = -30;
    this.group.add(this.gridMesh);

    // Dark Circular Atmospheric Backplate & Glow (Shares True Center (0, 0, -5))
    const glowGeo = new THREE.SphereGeometry(11, 32, 32);
    this.glowMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.035,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.centralGlowMesh = new THREE.Mesh(glowGeo, this.glowMat);
    this.centralGlowMesh.position.set(0, 0, -5);
    this.group.add(this.centralGlowMesh);

    // Controlled Ambient Particles (Only 30 particles, kept outside center safe zone)
    const particleCount = 30;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const randomness = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 24 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      scales[i] = 0.5 + Math.random() * 1.4;
      randomness[i * 3] = Math.random();
      randomness[i * 3 + 1] = Math.random();
      randomness[i * 3 + 2] = Math.random();
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
    particleGeo.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3));

    this.particleMaterial = createParticleShaderMaterial();
    this.particleCloud = new THREE.Points(particleGeo, this.particleMaterial);
    this.group.add(this.particleCloud);
  }

  // 2. Centered Holographic Ring Axis (Shares True Center (0, 0, -5) with Reactor)
  initCentralCoreAxis() {
    const axisGroup = new THREE.Group();
    const primary = new THREE.Color(this.currentTheme.primary);

    // Primary Holographic Ring (Opacity 0.12)
    const axisRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(4.2, 0.015, 16, 64),
      new THREE.MeshBasicMaterial({ color: primary, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending })
    );
    axisRing1.rotation.x = Math.PI / 3;
    axisGroup.add(axisRing1);

    // Secondary Outer Wireframe Ring (Opacity 0.08)
    const axisRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(6.4, 0.012, 16, 80),
      new THREE.MeshBasicMaterial({ color: primary, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending })
    );
    axisRing2.rotation.y = Math.PI / 4;
    axisGroup.add(axisRing2);

    // Centered exactly at (0, 0, -5) with the reactor and dark backdrop
    axisGroup.position.set(0, 0, -5);
    this.group.add(axisGroup);
    this.centralAxisGroup = axisGroup;
  }

  // 3. 27 CONSISTENT CIRCULAR HOLOGRAPHIC STATIONS
  initCircularEventStations() {
    EVENTS_DATA.forEach((evt, idx) => {
      const stationGroup = new THREE.Group();
      stationGroup.name = `OfficialStation_${evt.id}`;
      stationGroup.position.set(...evt.position);

      const isHero = evt.isHeroEvent;
      const primaryColor = new THREE.Color(this.currentTheme.primary);
      const secondaryColor = new THREE.Color(this.currentTheme.secondary);

      const circularAssembly = new THREE.Group();

      // Core Sphere
      const coreGeo = new THREE.SphereGeometry(isHero ? 0.75 : 0.48, 16, 16);
      const coreMat = new THREE.MeshBasicMaterial({
        color: isHero ? new THREE.Color('#E21D2D') : primaryColor,
        wireframe: true,
        transparent: true,
        opacity: isHero ? 0.9 : 0.7,
        blending: THREE.AdditiveBlending
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      circularAssembly.add(coreMesh);

      // Inner Torus Ring
      const ringGeo1 = new THREE.TorusGeometry(isHero ? 1.4 : 0.95, 0.03, 16, 48);
      const ringMat1 = createHolographicMaterial({
        color: isHero ? new THREE.Color('#E21D2D') : primaryColor,
        opacity: isHero ? 0.85 : 0.6,
        scanSpeed: isHero ? 4.0 : 2.5
      });
      const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
      circularAssembly.add(ringMesh1);

      // Middle Torus Ring
      const ringGeo2 = new THREE.TorusGeometry(isHero ? 1.9 : 1.35, 0.035, 16, 56);
      const ringMat2 = createHolographicMaterial({
        color: isHero ? new THREE.Color('#FBCA03') : secondaryColor,
        opacity: isHero ? 0.8 : 0.45,
        scanSpeed: 3.0
      });
      const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
      ringMesh2.rotation.x = Math.PI / (3 + (idx % 3));
      circularAssembly.add(ringMesh2);

      // Outer Armature Ring
      const ringGeo3 = new THREE.RingGeometry(isHero ? 2.3 : 1.6, isHero ? 2.5 : 1.72, 48);
      const ringMat3 = new THREE.MeshBasicMaterial({
        color: primaryColor,
        wireframe: true,
        transparent: true,
        opacity: isHero ? 0.75 : 0.35,
        blending: THREE.AdditiveBlending
      });
      const ringMesh3 = new THREE.Mesh(ringGeo3, ringMat3);
      circularAssembly.add(ringMesh3);

      stationGroup.add(circularAssembly);

      // Raycasting Hit Mesh
      const hitGeo = new THREE.SphereGeometry(2.2, 10, 10);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeo, hitMat);
      hitMesh.userData = { eventIndex: idx, stationGroup, eventData: evt };
      stationGroup.add(hitMesh);
      this.clickableMeshes.push(hitMesh);

      this.group.add(stationGroup);

      this.eventNodes.push({
        group: stationGroup,
        circularAssembly,
        coreMesh,
        ringMesh1,
        ringMesh2,
        ringMesh3,
        hitMesh,
        eventData: evt,
        index: idx,
        initialPos: stationGroup.position.clone()
      });
    });
  }

  // 4. Dynamic Spatial Lights
  initLights() {
    const primary = new THREE.Color(this.currentTheme.primary);
    const secondary = new THREE.Color(this.currentTheme.secondary);

    this.activePointLight = new THREE.PointLight(primary, 4.5, 35);
    this.activePointLight.position.set(0, 0, -5);
    this.scene.add(this.activePointLight);

    this.secondaryLight = new THREE.PointLight(secondary, 1.8, 45);
    this.secondaryLight.position.set(-25, 20, -30);
    this.scene.add(this.secondaryLight);

    const ambient = new THREE.AmbientLight('#020605', 1.4);
    this.scene.add(ambient);
  }

  handlePointerMove(normalizedX, normalizedY) {
    this.mouse.x = normalizedX;
    this.mouse.y = normalizedY;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.clickableMeshes);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const idx = hit.userData.eventIndex;
      if (this.hoveredEventIndex !== idx) {
        this.hoveredEventIndex = idx;
        document.body.style.cursor = 'pointer';
      }
    } else {
      if (this.hoveredEventIndex !== null) {
        this.hoveredEventIndex = null;
        document.body.style.cursor = 'default';
      }
    }
  }

  handlePointerClick() {
    if (this.hoveredEventIndex !== null) {
      if (this.onSelectEventCallback) {
        this.onSelectEventCallback(this.hoveredEventIndex);
      }
    }
  }

  setFocusedEvent(idx) {
    this.focusedEventIndex = idx;

    if (idx !== null && idx >= 0 && idx < this.eventNodes.length) {
      const node = this.eventNodes[idx];
      const pos = node.group.position;
      const isHero = node.eventData.isHeroEvent;
      this.activePointLight.color.set(isHero ? '#E21D2D' : this.currentTheme.primary);
      this.activePointLight.position.copy(pos);
    }
  }

  getEventWorldPosition(idx) {
    if (idx >= 0 && idx < EVENTS_DATA.length) {
      return new THREE.Vector3(...EVENTS_DATA[idx].position);
    }
    return new THREE.Vector3(0, 0, 0);
  }

  update(delta) {
    this.time += delta;

    if (this.particleMaterial) {
      this.particleMaterial.uniforms.uTime.value = this.time;
    }

    if (this.centralAxisGroup) {
      this.centralAxisGroup.rotation.y = this.time * 0.015;
    }

    // Slow, Premium Rotation & Scale Hierarchy for 27 Circular Stations
    this.eventNodes.forEach((node, idx) => {
      const isFocused = this.focusedEventIndex === idx;
      const isHovered = this.hoveredEventIndex === idx;

      const targetScale = isFocused ? 2.0 : (isHovered ? 1.3 : 1.0);
      node.group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

      if (node.ringMesh1) node.ringMesh1.rotation.z += isHovered || isFocused ? 0.018 : 0.007;
      if (node.ringMesh2) node.ringMesh2.rotation.z -= isHovered || isFocused ? 0.014 : 0.005;
      if (node.ringMesh3) node.ringMesh3.rotation.z += 0.003;

      if (node.coreMesh) {
        const breathingScale = 1 + Math.sin(this.time * 1.8 + idx) * 0.035;
        node.coreMesh.scale.set(breathingScale, breathingScale, breathingScale);
      }
    });

    if (this.gridMesh) {
      this.gridMesh.rotation.z = this.time * 0.0015;
    }
  }

  destroy() {
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}
