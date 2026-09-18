import React from 'react';
import { Users, Building2, Clock, MapPin, UserCheck, Activity } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const EventSnapshot: React.FC = () => {
  const metrics = [
    {
      label: 'TEAM SIZE',
      value: EVENT_DETAILS.teamSize,
      icon: Users,
      color: '#06b6d4'
    },
    {
      label: 'EXPECTED PARTICIPANTS',
      value: EVENT_DETAILS.expectedParticipants,
      icon: Building2,
      color: '#8b5cf6'
    },
    {
      label: 'SCHEDULE',
      value: `${EVENT_DETAILS.day} (${EVENT_DETAILS.timing})`,
      icon: Clock,
      color: '#e11d48'
    },
    {
      label: 'VENUE',
      value: EVENT_DETAILS.venue,
      icon: MapPin,
      color: '#10b981'
    },
    {
      label: 'FACULTY COORDINATOR',
      value: EVENT_DETAILS.faculty,
      icon: UserCheck,
      color: '#38bdf8'
    },
    {
      label: 'TOTAL PRIZE POOL',
      value: EVENT_DETAILS.prizePool,
      icon: Activity,
      color: '#f59e0b'
    }
  ];

  return (
    <section className="relative z-30 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel-accent rounded-xl p-6 border border-[#1b2538] hud-corner shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between border-b border-[#1b2538] pb-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#06b6d4]">
            <Activity className="w-4 h-4 animate-pulse text-[#06b6d4]" />
            <span>EVENT METRICS & VENUE DIAGNOSTICS</span>
          </div>
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            {EVENT_DETAILS.fest} • {EVENT_DETAILS.category}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {metrics.map((m, idx) => {
            const IconComponent = m.icon;
            return (
              <div
                key={idx}
                className="bg-[#0a0f1d] rounded-lg p-3.5 border border-[#1b2538] hover:border-[#06b6d4]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">
                    {m.label}
                  </span>
                  <div
                    className="w-7 h-7 rounded flex items-center justify-center bg-opacity-10"
                    style={{ backgroundColor: `${m.color}20` }}
                  >
                    <IconComponent className="w-3.5 h-3.5" style={{ color: m.color }} />
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-white group-hover:text-[#06b6d4] transition-colors truncate">
                  {m.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
