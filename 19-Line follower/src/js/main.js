import '../../style.css';
import { initLoadingSequence } from './loading.js';
import { initTelemetrySystem } from './telemetry.js';
import { initCursor } from './cursor.js';
import { initScrollEffects } from './scroll.js';
import { initModalsAndControls } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initLoadingSequence();
  initTelemetrySystem();
  initCursor();
  initScrollEffects();
  initModalsAndControls();
});
