// DOOMSDAY CINEMATIC THEME SYSTEM (FIXED GLOBAL IDENTITY)
export const DOOMSDAY_THEME = {
  id: 'DOOMSDAY',
  name: 'DOOMSDAY / TOXIC ATMOSPHERE',
  primary: '#39FF88',      // Toxic / Radioactive Green
  secondary: '#16C784',    // Muted Emerald
  deepGreen: '#063D2B',    // Dark Green Border / Glow
  bg: '#020605',           // Near-Black Environment Background
  surface: '#07110D',      // Dark Metallic Surface Card
  text: '#EAF7F0',          // Crisp Light Warm White Text
  muted: '#789589',         // Desaturated Muted Green-Grey Text
  red: '#E21D2D',          // Restrained Red Accent
  gold: '#F2C75C',         // Warm Gold Accent
  bgGlow: '#39FF88',
  fogColor: '#020605'      // Dark Doomsday Fog
};

// Backwards compatibility alias ensuring zero breakage
export const SPATIAL_THEMES = {
  DOOMSDAY: DOOMSDAY_THEME,
  STARK: DOOMSDAY_THEME,
  WAKANDA: DOOMSDAY_THEME,
  ULTRON: DOOMSDAY_THEME,
  MULTIVERSE: DOOMSDAY_THEME,
  AVENGERS: DOOMSDAY_THEME
};
