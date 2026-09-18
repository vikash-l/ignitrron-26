// Stark Web Audio API Procedural Sound Engine
let audioCtx = null;
let isMuted = false;
let arcHumOsc = null;
let arcHumGain = null;

const initAudioContext = () => {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const soundEngine = {
  toggleMute: () => {
    isMuted = !isMuted;
    if (isMuted && arcHumGain) {
      arcHumGain.gain.setTargetAtTime(0, audioCtx ? audioCtx.currentTime : 0, 0.1);
    }
    return isMuted;
  },

  getMuted: () => isMuted,

  // STAGE 01: Arc Reactor Power Up Hum
  playArcReactorHum: (progress) => {
    if (isMuted || progress === undefined || isNaN(progress) || !isFinite(progress)) return;
    initAudioContext();
    if (!audioCtx) return;

    const normalizedProgress = Math.max(0, Math.min(1, progress / 100));

    const now = audioCtx.currentTime;
    if (!arcHumOsc) {
      arcHumOsc = audioCtx.createOscillator();
      arcHumGain = audioCtx.createGain();

      arcHumOsc.type = 'sine';
      arcHumOsc.frequency.setValueAtTime(55, now);
      arcHumGain.gain.setValueAtTime(0.01, now);

      // Low pass filter for deep hum
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);

      arcHumOsc.connect(filter);
      filter.connect(arcHumGain);
      arcHumGain.connect(audioCtx.destination);
      arcHumOsc.start();
    }

    // Pitch rises smoothly from 55Hz to 180Hz as reactor powers up
    const targetFreq = 55 + normalizedProgress * 125;
    const targetVolume = Math.min(0.25, normalizedProgress * 0.2);

    arcHumOsc.frequency.setTargetAtTime(targetFreq, now, 0.1);
    arcHumGain.gain.setTargetAtTime(targetVolume, now, 0.1);
  },

  stopArcReactorHum: () => {
    if (arcHumGain && audioCtx) {
      const now = audioCtx.currentTime;
      arcHumGain.gain.setTargetAtTime(0, now, 0.2);
      setTimeout(() => {
        if (arcHumOsc) {
          try { arcHumOsc.stop(); } catch (e) {}
          arcHumOsc.disconnect();
          arcHumOsc = null;
          arcHumGain = null;
        }
      }, 300);
    }
  },

  // STAGE 02: Boot-up Digital Chirp
  playBootChirp: () => {
    if (isMuted) return;
    initAudioContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const notes = [440, 880, 1320, 1760];
    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0, now + idx * 0.05);
      gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.05 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.1);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.12);
    });
  },

  // STAGE 03: Holographic Scan & Hover Sound
  playHologramScan: () => {
    if (isMuted) return;
    initAudioContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.12);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.16);
  },

  // STAGE 04: Event Node Selection Confirmation
  playSelectSound: () => {
    if (isMuted) return;
    initAudioContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;

    // High lock-on pitch
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1200, now);
    osc1.frequency.linearRampToValueAtTime(1800, now + 0.08);

    gain1.gain.setValueAtTime(0.1, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);

    osc1.start(now);
    osc1.stop(now + 0.13);
  },

  // Spatial Transition Camera Whoosh
  playSpatialWhoosh: () => {
    if (isMuted) return;
    initAudioContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;

    // Sub-bass sweep
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.6);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.75);
  }
};
