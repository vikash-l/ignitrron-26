import { soundEngine } from './sound.js';

export function initLoadingSequence() {
  const loadingScreen = document.getElementById('loading-screen');
  const progressBar = document.getElementById('init-progress-bar');
  const stepLabel = document.getElementById('init-step-label');
  const subTelemetry = document.getElementById('init-sub-telemetry');
  const percentageEl = document.getElementById('init-percentage');
  const consoleEl = document.getElementById('init-console');

  if (!loadingScreen) return;

  // Hawkeye Precision Sequence Stages
  const stages = [
    { pct: 15, label: 'TARGETING SYSTEM INITIALIZING...', telemetry: 'SIGNAL: CHECKING TARGET', log: '> Hawkeye Target Lock System online' },
    { pct: 35, label: 'OPTICAL & IR ARRAY SCANNING...', telemetry: 'BUS: ARDUINO NANO CH340', log: '> ATmega328P array initialized at 16MHz' },
    { pct: 55, label: '5-CHANNEL SENSOR CALIBRATION...', telemetry: 'IR ARRAY: 5-CHANNEL ACTIVE', log: '> Reflection thresholds calibrated for high-speed tracking' },
    { pct: 75, label: 'L298N MOTOR DRIVE ACTIVATION...', telemetry: 'DRIVE: 230 RPM BO MOTORS', log: '> Dual motor PWM sync & 2S Li-ion 7.4V rail check' },
    { pct: 90, label: 'PID CONTROL ALGORITHM LOCKED...', telemetry: 'CONTROL: PID TUNING READY', log: '> Optimal gains set: P=4.2 I=0.05 D=1.8' },
    { pct: 100, label: 'TARGET ACQUIRED — RACE READY', telemetry: 'HAWKEYE PROTOCOL: ACTIVE', log: '> HAWKEYE TARGET ACQUIRED. MISSION READY.' }
  ];

  let stageIndex = 0;

  function appendLog(msg) {
    if (!consoleEl) return;
    const line = document.createElement('div');
    line.className = 'text-gray-300 font-mono text-[11px]';
    line.textContent = msg;
    consoleEl.appendChild(line);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }

  const interval = setInterval(() => {
    if (stageIndex >= stages.length) {
      clearInterval(interval);
      soundEngine.playSuccessChime();

      setTimeout(() => {
        loadingScreen.classList.add('opacity-0');
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          
          // Trigger the Hawkeye Hero Entrance Reveal Animation once loaded!
          if (window.triggerHawkeyeHeroReveal) {
            window.triggerHawkeyeHeroReveal();
          }
        }, 700);
      }, 400);

      return;
    }

    const current = stages[stageIndex];
    if (progressBar) progressBar.style.width = `${current.pct}%`;
    if (stepLabel) stepLabel.textContent = current.label;
    if (subTelemetry) subTelemetry.textContent = current.telemetry;
    if (percentageEl) percentageEl.textContent = `${current.pct}%`;
    
    appendLog(current.log);
    soundEngine.playScanPing();

    stageIndex++;
  }, 380);
}
