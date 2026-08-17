import React from 'react';

export function ArcReactorLoadingHUD({ progress }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 10,
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between',
      padding: '30px 40px',
      boxSizing: 'border-box',
      fontFamily: "'Share Tech Mono', monospace",
      color: '#39FF88'
    }}>
      {/* Top Header Stark Telemetry */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#E21D2D', fontWeight: 'bold' }}>
            STARK INDUSTRIES // DOOMSDAY DEFENSE LABS
          </div>
          <div style={{ fontSize: '18px', fontFamily: "'Orbitron', sans-serif", fontWeight: 800, letterSpacing: '3px', marginTop: '4px', color: '#EAF7F0' }}>
            MARK VII ARC REACTOR CORE
          </div>
          {/* Subtle Green & Accent Line */}
          <div style={{ width: '120px', height: '2px', background: 'linear-gradient(90deg, #39FF88 0%, #16C784 50%, transparent 100%)', marginTop: '6px' }} />
        </div>
        <div style={{ textAlign: 'right', fontSize: '11px', color: '#789589', lineHeight: 1.6 }}>
          <div>SYS.LOC: STARK TOWER // 40.7128° N</div>
          <div>PROTOCOL: <span style={{ color: '#39FF88' }}>IGNITRRON_’26_DOOMSDAY</span></div>
        </div>
      </div>

      {/* Bottom Technical HUD Progress */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#39FF88', opacity: 0.9 }}>
            SYSTEM INITIALIZATION STATUS
          </div>
          <div style={{ fontSize: '46px', fontFamily: "'Orbitron', sans-serif", fontWeight: 900, color: '#EAF7F0', marginTop: '2px' }}>
            {Math.floor(progress)}<span style={{ fontSize: '24px', color: '#39FF88' }}>%</span>
          </div>
        </div>

        {/* Live Diagnostics */}
        <div style={{ display: 'flex', gap: '30px', fontSize: '11px', opacity: 0.9 }}>
          <div>
            <div style={{ color: '#789589' }}>POWER OUTPUT</div>
            <div style={{ color: '#39FF88', fontWeight: 'bold' }}>{(3.2 + (progress / 100) * 8.8).toFixed(2)} GW</div>
          </div>
          <div>
            <div style={{ color: '#789589' }}>HOUSING ACCENTS</div>
            <div style={{ color: '#E21D2D', fontWeight: 'bold' }}>
              {progress > 75 ? 'ALIGNED' : 'ALIGNING...'}
            </div>
          </div>
          <div>
            <div style={{ color: '#789589' }}>CONTAINMENT</div>
            <div style={{ color: progress > 90 ? '#39FF88' : '#F2C75C', fontWeight: 'bold' }}>
              {progress > 90 ? '100% STABLE' : 'CHARGING'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
