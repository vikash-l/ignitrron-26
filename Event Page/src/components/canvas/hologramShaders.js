import * as THREE from 'three';

// Custom GLSL Holographic Shader Material with Fresnel Edge Glow & Animated Scanlines (Doomsday Green)
export const createHolographicMaterial = (options = {}) => {
  const color = options.color || new THREE.Color('#39FF88');
  const scanSpeed = options.scanSpeed || 3.0;
  const fresnelPower = options.fresnelPower || 2.5;

  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: color },
      uOpacity: { value: options.opacity || 0.8 },
      uScanSpeed: { value: scanSpeed },
      uFresnelPower: { value: fresnelPower }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uScanSpeed;
      uniform float uFresnelPower;

      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec2 vUv;

      void main() {
        vec3 worldNormal = normalize(vNormal);
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);

        // Fresnel Edge Glow
        float fresnel = pow(1.0 - max(0.0, dot(viewDir, worldNormal)), uFresnelPower);
        
        // Scanlines effect
        float scanline = sin(vWorldPosition.y * 35.0 - uTime * uScanSpeed) * 0.15 + 0.85;

        // Subtle digital noise flicker
        float flicker = 0.96 + 0.04 * sin(uTime * 15.0 + vWorldPosition.x);

        vec3 finalColor = uColor * (fresnel * 1.5 + 0.3) * scanline * flicker;
        float alpha = (fresnel * 0.7 + 0.3) * uOpacity * scanline;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
};

// Particle Shader Material for GPU Instanced Glowing Radioactive Green Particles
export const createParticleShaderMaterial = () => {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
    },
    vertexShader: `
      uniform float uTime;
      uniform float uPixelRatio;

      attribute float aScale;
      attribute vec3 aRandomness;
      varying float vAlpha;

      void main() {
        vec3 p = position;
        // Subtle wave motion
        p.x += sin(uTime * 0.5 + aRandomness.x * 10.0) * 0.2;
        p.y += cos(uTime * 0.4 + aRandomness.y * 10.0) * 0.2;
        p.z += sin(uTime * 0.6 + aRandomness.z * 10.0) * 0.2;

        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        // Depth size attenuation
        gl_PointSize = aScale * (150.0 / -mvPosition.z) * uPixelRatio;

        vAlpha = 0.4 + 0.6 * sin(uTime * 2.0 + aRandomness.x * 20.0);
      }
    `,
    fragmentShader: `
      varying float vAlpha;

      void main() {
        // Soft radial glow particle disc (Doomsday Green #39FF88)
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;

        float glow = pow(1.0 - dist * 2.0, 2.0);
        vec3 color = mix(vec3(0.22, 1.0, 0.53), vec3(0.08, 0.78, 0.51), glow);

        gl_FragColor = vec4(color, glow * vAlpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
};
