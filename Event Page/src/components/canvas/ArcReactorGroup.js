import * as THREE from 'three';
import { createHolographicMaterial } from './hologramShaders';

export class ArcReactorSystem {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.name = 'ArcReactorSystem';
    this.group.position.set(0, 0, 0); // True Visual Center Arc Reactor Core
    scene.add(this.group);

    this.progress = 0;
    this.time = 0;
    this.materials = [];
    this.rotatingRings = [];

    this.init();
  }

  init() {
    const doomsdayGreen = new THREE.Color('#39FF88');
    const emeraldGreen = new THREE.Color('#16C784');
    const deepGreen = new THREE.Color('#063D2B');
    const warmWhite = new THREE.Color('#EAF7F0');

    // 1. CENTRAL WHITE/GREEN CORE (Slow breathing/pulsing glow & energy field)
    const coreGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: warmWhite,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.group.add(this.coreMesh);

    // Inner bright core glow sphere
    const innerCoreGeo = new THREE.SphereGeometry(0.85, 24, 24);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: doomsdayGreen,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    this.innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    this.group.add(this.innerCoreMesh);

    // Electromagnetic Field Shell
    const fieldGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const fieldMat = new THREE.MeshBasicMaterial({
      color: emeraldGreen,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });
    this.fieldMesh = new THREE.Mesh(fieldGeo, fieldMat);
    this.group.add(this.fieldMesh);

    // 2. INNER DOOMSDAY GREEN ORBITAL RINGS
    const ringRadii = [1.8, 2.6, 3.4, 4.2];
    const ringSpeeds = [0.015, -0.022, 0.028, -0.014];

    ringRadii.forEach((radius, idx) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.045, 16, 120);
      const ringMat = createHolographicMaterial({
        color: idx % 2 === 0 ? doomsdayGreen : emeraldGreen,
        scanSpeed: 2.5 + idx,
        opacity: 0.2
      });
      this.materials.push(ringMat);

      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2 + (idx === 3 ? 0.1 : 0);
      this.group.add(ringMesh);
      this.rotatingRings.push({
        mesh: ringMesh,
        speed: ringSpeeds[idx],
        initialRotX: ringMesh.rotation.x,
        isOscillating: idx === 3
      });
    });

    // 3. DOOMSDAY METALLIC MODULES (Orbital Movement & Individual Spin)
    const numFins = 12;
    this.finsGroup = new THREE.Group();
    this.finMeshes = [];

    for (let i = 0; i < numFins; i++) {
      const angle = (i / numFins) * Math.PI * 2;
      const finGeo = new THREE.BoxGeometry(0.25, 0.9, 0.35);

      const finMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? emeraldGreen : deepGreen,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending
      });

      const finMesh = new THREE.Mesh(finGeo, finMat);
      finMesh.position.x = Math.cos(angle) * 3.1;
      finMesh.position.y = Math.sin(angle) * 3.1;
      finMesh.rotation.z = angle;
      this.finsGroup.add(finMesh);
      this.finMeshes.push({ mesh: finMesh, angle: angle });
    }
    this.group.add(this.finsGroup);

    // 4. OUTER CONTAINMENT RING
    const outerArmGeo = new THREE.RingGeometry(4.8, 5.2, 64);
    this.outerArmMat = new THREE.MeshBasicMaterial({
      color: doomsdayGreen,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    this.outerArmMesh = new THREE.Mesh(outerArmGeo, this.outerArmMat);
    this.group.add(this.outerArmMesh);

    // 5. CONTROLLED ELECTRICAL ARCS
    const arcPoints = [];
    const numArcs = 8;
    for (let i = 0; i < numArcs; i++) {
      const a1 = (i / numArcs) * Math.PI * 2;
      const a2 = a1 + (Math.PI / 4);
      arcPoints.push(new THREE.Vector3(Math.cos(a1) * 1.5, Math.sin(a1) * 1.5, 0));
      arcPoints.push(new THREE.Vector3(Math.cos(a2) * 2.8, Math.sin(a2) * 2.8, 0));
    }
    const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
    this.arcLinesMat = new THREE.LineBasicMaterial({
      color: doomsdayGreen,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    this.arcLinesMesh = new THREE.LineSegments(arcGeo, this.arcLinesMat);
    this.group.add(this.arcLinesMesh);

    // 6. LOW-DENSITY ORBITING ENERGY PARTICLES
    const particleCount = 160;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleAngles = new Float32Array(particleCount);
    const particleRadii = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      particleAngles[i] = angle;
      const radius = 1.8 + Math.random() * 2.8;
      particleRadii[i] = radius;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: doomsdayGreen,
      size: 0.14,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    this.particleMesh = new THREE.Points(particleGeo, particleMat);
    this.particleAngles = particleAngles;
    this.particleRadii = particleRadii;
    this.group.add(this.particleMesh);

    // 7. THIN ENERGY SCAN BEAM
    const scanGeo = new THREE.TorusGeometry(3.8, 0.02, 8, 32, Math.PI / 3);
    const scanMat = new THREE.MeshBasicMaterial({ color: emeraldGreen, transparent: true, opacity: 0.2 });
    this.scanMesh = new THREE.Mesh(scanGeo, scanMat);
    this.group.add(this.scanMesh);

    // 8. CORE SHOCKWAVE ENERGY PULSE RING
    const shockGeo = new THREE.RingGeometry(0.1, 0.4, 64);
    this.shockMat = new THREE.MeshBasicMaterial({
      color: warmWhite,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    this.shockMesh = new THREE.Mesh(shockGeo, this.shockMat);
    this.group.add(this.shockMesh);
  }

  updateProgress(pct) {
    this.progress = Math.min(100, Math.max(0, pct));
    const factor = this.progress / 100;

    if (this.coreMesh) {
      this.coreMesh.material.opacity = 0.15 + factor * 0.85;
    }

    if (this.innerCoreMesh) {
      this.innerCoreMesh.material.opacity = 0.25 + factor * 0.75;
    }

    if (this.fieldMesh) {
      this.fieldMesh.material.opacity = 0.1 + factor * 0.4;
    }

    this.materials.forEach(mat => {
      if (mat.uniforms && mat.uniforms.uOpacity) {
        mat.uniforms.uOpacity.value = 0.2 + factor * 0.8;
      }
    });

    this.finMeshes.forEach(f => {
      if (f.mesh.material) {
        f.mesh.material.opacity = factor > 0.35 ? (factor - 0.35) * 1.4 : 0.08;
      }
    });

    if (this.outerArmMesh) {
      this.outerArmMesh.material.opacity = 0.12 + factor * 0.85;
    }

    if (this.particleMesh) {
      this.particleMesh.material.opacity = 0.2 + factor * 0.8;
      this.particleMesh.material.size = 0.12 + factor * 0.14;
    }

    if (this.scanMesh) {
      this.scanMesh.material.opacity = factor > 0.4 ? 0.85 : 0.15;
    }

    if (this.progress > 95 && this.shockMesh) {
      const pulseScale = (this.progress - 95) * 3.5;
      this.shockMesh.scale.set(pulseScale, pulseScale, pulseScale);
      this.shockMat.opacity = Math.max(0, 1 - (this.progress - 95) / 5);
    }
  }

  update(delta) {
    this.time += delta;
    const factor = this.progress / 100;
    const speedFactor = 1 + factor * 2.2;

    if (this.coreMesh) {
      const breathScale = 1 + Math.sin(this.time * 3) * (0.03 + factor * 0.03);
      this.coreMesh.scale.set(breathScale, breathScale, breathScale);
    }

    if (this.fieldMesh) {
      this.fieldMesh.rotation.y += 0.008 * speedFactor;
      this.fieldMesh.rotation.x = Math.sin(this.time * 1.5) * 0.08;
    }

    this.rotatingRings.forEach(r => {
      r.mesh.rotation.z += r.speed * speedFactor;
      if (r.isOscillating) {
        r.mesh.rotation.x = r.initialRotX + Math.sin(this.time * 2.5) * 0.08;
      }
    });

    if (this.finsGroup) {
      this.finsGroup.rotation.z += 0.004 * speedFactor;
    }
    this.finMeshes.forEach(f => {
      f.mesh.rotation.x += 0.01;
      const pulseOpacity = 0.1 + Math.sin(f.angle + this.time * 2) * 0.15;
      if (f.mesh.material && factor > 0.35) {
        f.mesh.material.opacity = Math.min(1, f.mesh.material.opacity + pulseOpacity * 0.1);
      }
    });

    if (this.outerArmMesh) {
      this.outerArmMesh.rotation.z -= 0.004 * speedFactor;
      const ringPulse = 0.15 + Math.sin(this.time * 3) * 0.05 * factor;
      this.outerArmMesh.material.opacity = ringPulse + factor * 0.75;
    }

    if (this.arcLinesMesh) {
      this.arcLinesMesh.rotation.z += 0.015 * speedFactor;
      this.arcLinesMat.opacity = Math.random() > 0.7 ? 0.35 * factor : 0.05;
    }

    if (this.particleMesh) {
      const positions = this.particleMesh.geometry.attributes.position.array;
      for (let i = 0; i < this.particleAngles.length; i++) {
        this.particleAngles[i] += 0.01 * speedFactor;
        const currentRadius = this.particleRadii[i] + Math.sin(this.particleAngles[i] * 3 + this.time * 2) * 0.35;
        positions[i * 3] = Math.cos(this.particleAngles[i]) * currentRadius;
        positions[i * 3 + 1] = Math.sin(this.particleAngles[i]) * currentRadius;
      }
      this.particleMesh.geometry.attributes.position.needsUpdate = true;
    }

    if (this.scanMesh) {
      this.scanMesh.rotation.z += 0.045 * speedFactor;
    }

    const waveCycle = (this.time % 3.5) / 3.5;
    if (waveCycle < 0.3 && this.shockMesh && this.progress < 95) {
      const wScale = 1 + waveCycle * 8;
      this.shockMesh.scale.set(wScale, wScale, wScale);
      this.shockMat.opacity = (1 - waveCycle / 0.3) * 0.3 * factor;
    }
  }

  destroy() {
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}
