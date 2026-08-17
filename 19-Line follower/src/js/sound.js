// Web Audio API Sci-Fi Sound Effects Synthesizer

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.muted = false;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleAudio() {
    this.muted = !this.muted;
    return !this.muted;
  }

  playBeep(freq = 880, type = 'sine', duration = 0.08, vol = 0.05) {
    if (this.muted) return;
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(vol, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context fallback
    }
  }

  playScanPing() {
    if (this.muted) return;
    this.playBeep(1200, 'triangle', 0.05, 0.03);
  }

  playMotorPulse() {
    if (this.muted) return;
    this.playBeep(180, 'sawtooth', 0.12, 0.02);
  }

  playSuccessChime() {
    if (this.muted) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 'sine', 0.15, 0.06);
      }, idx * 70);
    });
  }
}

export const soundEngine = new SoundEngine();
