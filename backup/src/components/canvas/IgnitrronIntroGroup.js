import * as THREE from 'three';
import { createHolographicMaterial } from './hologramShaders';

export class IgnitrronIntroGroup {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'IgnitrronIntroGroup';
    this.scene.add(this.group);

    this.time = 0;
    this.init();
  }

  init() {
    const cyanColor = new THREE.Color('#00D9FF');
    const violetColor = new THREE.Color('#9B5CFF');
    const electricBlue = new THREE.Color('#3D7BFF');

    // 1. Subtle Peripheral Ring 1 (Top-Left Edge Offset, Low Opacity)
    const ringGeo1 = new THREE.TorusGeometry(3.5, 0.02, 16, 64);
    const ringMat1 = createHolographicMaterial({ color: cyanColor, opacity: 0.2, scanSpeed: 1.5 });
    this.ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    this.ringMesh1.position.set(-14, 7, -12);
    this.ringMesh1.rotation.x = Math.PI / 4;
    this.ringMesh1.rotation.y = Math.PI / 6;
    this.group.add(this.ringMesh1);

    // 2. Subtle Peripheral Ring 2 (Bottom-Right Edge Offset, Low Opacity)
    const ringGeo2 = new THREE.TorusGeometry(4.2, 0.015, 16, 64);
    const ringMat2 = createHolographicMaterial({ color: violetColor, opacity: 0.18, scanSpeed: 2.0 });
    this.ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    this.ringMesh2.position.set(15, -8, -15);
    this.ringMesh2.rotation.x = -Math.PI / 3;
    this.ringMesh2.rotation.z = Math.PI / 5;
    this.group.add(this.ringMesh2);

    // 3. Faint Distant Technical Wireframe (Deep Background Edge)
    const wireGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: electricBlue,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });
    this.wireMesh = new THREE.Mesh(wireGeo, wireMat);
    this.wireMesh.position.set(16, 8, -20);
    this.group.add(this.wireMesh);

    // Center zone is strictly kept clean for title negative space!
    this.group.position.set(0, 0, 0);
  }

  update(delta) {
    this.time += delta;

    if (this.ringMesh1) {
      this.ringMesh1.rotation.z += 0.003;
    }
    if (this.ringMesh2) {
      this.ringMesh2.rotation.z -= 0.004;
    }
    if (this.wireMesh) {
      this.wireMesh.rotation.y += 0.005;
      this.wireMesh.rotation.x += 0.003;
    }
  }

  destroy() {
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}
