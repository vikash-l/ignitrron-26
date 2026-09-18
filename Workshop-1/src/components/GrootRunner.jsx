import React, { useEffect, useRef, useState } from 'react';

export const GrootRunner = ({ mousePos = { x: 0, y: 0 } }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth || 1320);
    let height = (canvas.height = canvas.offsetHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 1320;
      height = canvas.height = canvas.offsetHeight || 500;
    };

    window.addEventListener('resize', handleResize);

    // Running state
    let state = 'RUNNING_RIGHT'; // 'RUNNING_RIGHT' | 'PAUSE_RIGHT' | 'RUNNING_LEFT' | 'PAUSE_LEFT'
    let xPos = -150;
    let pauseTimer = 0;
    let runTime = 0;
    const runSpeed = 160; // px per second
    let lastTimestamp = performance.now();

    // Particle trail
    const particles = [];

    // Helper function to draw organic textured wood limb
    const drawWoodLimb = (x1, y1, x2, y2, thickness, isHighlight = false) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);

      ctx.save();
      ctx.translate(x1, y1);
      ctx.rotate(angle);

      // Wood bark gradient
      const grad = ctx.createLinearGradient(0, -thickness / 2, 0, thickness / 2);
      if (isHighlight) {
        grad.addColorStop(0, '#5c4033');
        grad.addColorStop(0.3, '#795548');
        grad.addColorStop(0.7, '#4e342e');
        grad.addColorStop(1, '#2d1b14');
      } else {
        grad.addColorStop(0, '#422a1d');
        grad.addColorStop(0.5, '#2e1c14');
        grad.addColorStop(1, '#1a0f0a');
      }

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(0, -thickness / 2, len, thickness, thickness / 2);
      ctx.fill();

      // Bioluminescent purple moss/vein line
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.45)';
      ctx.lineWidth = Math.max(1, thickness * 0.15);
      ctx.beginPath();
      ctx.moveTo(len * 0.1, -thickness * 0.1);
      ctx.quadraticCurveTo(len * 0.5, thickness * 0.2, len * 0.9, -thickness * 0.05);
      ctx.stroke();

      // Subtle bark texture lines
      ctx.strokeStyle = 'rgba(20, 10, 5, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(len * 0.2, -thickness * 0.3);
      ctx.lineTo(len * 0.4, -thickness * 0.2);
      ctx.moveTo(len * 0.6, thickness * 0.2);
      ctx.lineTo(len * 0.8, thickness * 0.3);
      ctx.stroke();

      ctx.restore();
    };

    const render = (timestamp) => {
      const dt = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = timestamp;

      ctx.clearRect(0, 0, width, height);

      // Ground plane reference Y (positioned naturally across lower third of hero stage)
      const groundY = height * 0.72;

      // Update State & Position
      if (state === 'RUNNING_RIGHT') {
        xPos += runSpeed * dt;
        runTime += dt * 8; // run cycle speed
        if (xPos > width + 180) {
          state = 'PAUSE_RIGHT';
          pauseTimer = 0.9;
        }
      } else if (state === 'PAUSE_RIGHT') {
        pauseTimer -= dt;
        if (pauseTimer <= 0) {
          state = 'RUNNING_LEFT';
        }
      } else if (state === 'RUNNING_LEFT') {
        xPos -= runSpeed * dt;
        runTime += dt * 8;
        if (xPos < -180) {
          state = 'PAUSE_LEFT';
          pauseTimer = 0.9;
        }
      } else if (state === 'PAUSE_LEFT') {
        pauseTimer -= dt;
        if (pauseTimer <= 0) {
          state = 'RUNNING_RIGHT';
        }
      }

      const isRunning = state === 'RUNNING_RIGHT' || state === 'RUNNING_LEFT';
      const isFacingLeft = state === 'RUNNING_LEFT' || state === 'PAUSE_LEFT';

      // Spawn purple bioluminescent dust/ember particles during run
      if (isRunning && Math.random() < 0.4) {
        particles.push({
          x: xPos + (Math.random() - 0.5) * 20,
          y: groundY + (Math.random() - 0.5) * 8,
          vx: (isFacingLeft ? 1 : -1) * (Math.random() * 40 + 20),
          vy: -Math.random() * 30 - 10,
          size: Math.random() * 2.5 + 1,
          life: 1,
          decay: Math.random() * 1.2 + 0.8,
        });
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= p.decay * dt;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = `rgba(168, 85, 247, ${p.life * 0.7})`;
        ctx.shadowColor = 'rgba(168, 85, 247, 0.9)';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Only draw character if in visible or near-visible bounds
      if (xPos > -220 && xPos < width + 220) {
        // Skeletal kinematics calculations for 3D running
        const stridePhase = isRunning ? runTime : 0;
        const bounce = isRunning ? Math.abs(Math.sin(stridePhase)) * 10 : 0;
        const leanAngle = isRunning ? 0.16 : 0; // forward lean

        const scale = Math.min(width / 1100, 1) * 0.95; // responsive scaling

        // Leg angles
        const hipAngleL = Math.sin(stridePhase) * 0.65;
        const kneeAngleL = Math.max(0, Math.sin(stridePhase + 0.5) * 1.1);

        const hipAngleR = Math.sin(stridePhase + Math.PI) * 0.65;
        const kneeAngleR = Math.max(0, Math.sin(stridePhase + Math.PI + 0.5) * 1.1);

        // Arm angles (contralateral)
        const shoulderAngleL = Math.sin(stridePhase + Math.PI) * 0.6;
        const elbowAngleL = 0.5 + Math.sin(stridePhase + Math.PI + 0.5) * 0.4;

        const shoulderAngleR = Math.sin(stridePhase) * 0.6;
        const elbowAngleR = 0.5 + Math.sin(stridePhase + 0.5) * 0.4;

        ctx.save();

        // Position character
        const charX = xPos + mousePos.x * -4;
        const charY = groundY - 65 - bounce;

        ctx.translate(charX, charY);
        if (isFacingLeft) {
          ctx.scale(-scale, scale);
        } else {
          ctx.scale(scale, scale);
        }

        // 1. Realistic Dynamic Ground Contact Shadow
        ctx.save();
        const shadowScale = 1 - bounce * 0.03;
        ctx.translate(0, 65 + bounce);
        ctx.scale(1.4 * shadowScale, 0.35 * shadowScale);
        const shadowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 32);
        shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
        shadowGrad.addColorStop(0.6, 'rgba(20, 10, 30, 0.4)');
        shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = shadowGrad;
        ctx.beginPath();
        ctx.arc(0, 0, 32, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 2. Purple Volumetric Rim Lighting Glow around Groot
        ctx.shadowColor = 'rgba(168, 85, 247, 0.4)';
        ctx.shadowBlur = 15;

        // Apply forward body lean
        ctx.rotate(leanAngle);

        // ---------------- BACK LIMBS (Rendered behind body) ----------------
        // Back Left Leg
        const thighLen = 28;
        const calfLen = 28;
        const hipLx = -5;
        const hipLy = 20;

        const kneeLx = hipLx + Math.sin(hipAngleL) * thighLen;
        const kneeLy = hipLy + Math.cos(hipAngleL) * thighLen;
        const footLx = kneeLx + Math.sin(hipAngleL + kneeAngleL) * calfLen;
        const footLy = kneeLy + Math.cos(hipAngleL + kneeAngleL) * calfLen;

        drawWoodLimb(hipLx, hipLy, kneeLx, kneeLy, 9, false);
        drawWoodLimb(kneeLx, kneeLy, footLx, footLy, 7, false);
        // Foot
        drawWoodLimb(footLx, footLy, footLx + 8, footLy + 2, 6, false);

        // Back Left Arm
        const armLen = 22;
        const forearmLen = 22;
        const shoulderLx = 4;
        const shoulderLy = -12;

        const elbowLx = shoulderLx + Math.sin(shoulderAngleL) * armLen;
        const elbowLy = shoulderLy + Math.cos(shoulderAngleL) * armLen;
        const handLx = elbowLx + Math.sin(shoulderAngleL + elbowAngleL) * forearmLen;
        const handLy = elbowLy + Math.cos(shoulderAngleL + elbowAngleL) * forearmLen;

        drawWoodLimb(shoulderLx, shoulderLy, elbowLx, elbowLy, 7, false);
        drawWoodLimb(elbowLx, elbowLy, handLx, handLy, 6, false);

        // ---------------- TORSO & TACTICAL CHEST HARNESS ----------------
        // Wooden Torso Base
        drawWoodLimb(0, -18, 0, 20, 18, true);

        // Sci-Fi Tactical Harness / Cyber Core
        ctx.save();
        ctx.fillStyle = '#1c1b24';
        ctx.strokeStyle = '#3e3455';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-8, -12, 16, 18, 3);
        ctx.fill();
        ctx.stroke();

        // Glowing Purple Cybernetic Core on chest
        ctx.fillStyle = '#c084fc';
        ctx.shadowColor = '#a855f7';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(0, -3, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // ---------------- GROOT HEAD & CHARACTER DETAILS ----------------
        ctx.save();
        ctx.translate(2, -30);

        // Head wood base
        const headGrad = ctx.createLinearGradient(-12, -20, 12, 10);
        headGrad.addColorStop(0, '#5c4033');
        headGrad.addColorStop(0.5, '#795548');
        headGrad.addColorStop(1, '#3e2723');
        ctx.fillStyle = headGrad;

        ctx.beginPath();
        ctx.roundRect(-11, -16, 22, 26, [8, 8, 5, 5]);
        ctx.fill();

        // Wooden Crown / Branch Foliage on top of head
        ctx.fillStyle = '#4e342e';
        ctx.beginPath();
        ctx.moveTo(-10, -16);
        ctx.lineTo(-7, -26);
        ctx.lineTo(-3, -17);
        ctx.lineTo(1, -29);
        ctx.lineTo(5, -18);
        ctx.lineTo(9, -25);
        ctx.lineTo(11, -16);
        ctx.closePath();
        ctx.fill();

        // Small green/purple moss sprouts on branches
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.arc(-6, -26, 1.8, 0, Math.PI * 2);
        ctx.arc(1, -29, 2, 0, Math.PI * 2);
        ctx.arc(8, -25, 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Large Expressive Glowing Eyes
        // Left Eye (facing front/right)
        ctx.fillStyle = '#0f0717';
        ctx.beginPath();
        ctx.arc(4, -5, 3.2, 0, Math.PI * 2);
        ctx.fill();

        // Bioluminescent Purple Eye Glow
        ctx.fillStyle = '#e9d5ff';
        ctx.shadowColor = '#c084fc';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(4.8, -5.2, 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Friendly smile carved in wood
        ctx.strokeStyle = '#2d1b14';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(3, 2, 4.5, 0.1, Math.PI * 0.7);
        ctx.stroke();

        ctx.restore();

        // ---------------- FRONT LIMBS (Rendered in front) ----------------
        // Front Right Leg
        const hipRx = 4;
        const hipRy = 20;

        const kneeRx = hipRx + Math.sin(hipAngleR) * thighLen;
        const kneeRy = hipRy + Math.cos(hipAngleR) * thighLen;
        const footRx = kneeRx + Math.sin(hipAngleR + kneeAngleR) * calfLen;
        const footRy = kneeRy + Math.cos(hipAngleR + kneeAngleR) * calfLen;

        drawWoodLimb(hipRx, hipRy, kneeRx, kneeRy, 10, true);
        drawWoodLimb(kneeRx, kneeRy, footRx, footRy, 8, true);
        // Foot
        drawWoodLimb(footRx, footRy, footRx + 9, footRy + 2, 7, true);

        // Front Right Arm
        const shoulderRx = -3;
        const shoulderRy = -12;

        const elbowRx = shoulderRx + Math.sin(shoulderAngleR) * armLen;
        const elbowRy = shoulderRy + Math.cos(shoulderAngleR) * armLen;
        const handRx = elbowRx + Math.sin(shoulderAngleR + elbowAngleR) * forearmLen;
        const handRy = elbowRy + Math.cos(shoulderAngleR + elbowAngleR) * forearmLen;

        drawWoodLimb(shoulderRx, shoulderRy, elbowRx, elbowRy, 8, true);
        // Tactical Shoulder Pad
        ctx.save();
        ctx.fillStyle = '#1e1a2b';
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(shoulderRx, shoulderRy, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        drawWoodLimb(elbowRx, elbowRy, handRx, handRy, 7, true);

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
