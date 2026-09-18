import React, { useState } from 'react';
import { Hammer } from 'lucide-react';


export const ConstructionTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: '01',
      title: 'SITE PREPARATION',
      duration: 'MONTHS 01 – 04',
      description: 'Site clearing, soil testing, excavation, and boundary shoring walls.',
      keyWork: 'Geotechnical soil investigation, slurry wall installation, site clearance.',
      equipment: 'Heavy Excavators, Trenchers, Drilling Rigs',
      visualProgress: 10
    },
    {
      num: '02',
      title: 'FOUNDATION',
      duration: 'MONTHS 04 – 10',
      description: 'Drilling deep friction piles down to bedrock and pouring massive raft slab.',
      keyWork: 'Boring bedrock pile shafts, rebar cage lowering, 10,000m³ continuous concrete pour.',
      equipment: 'Hydraulic Piling Rigs, Concrete Pump Trucks',
      visualProgress: 22
    },
    {
      num: '03',
      title: 'STRUCTURAL CORE',
      duration: 'MONTHS 10 – 18',
      description: 'Continuous vertical slipform pouring of central reinforced concrete shear core.',
      keyWork: 'Self-climbing hydraulic core formwork, heavy vertical rebar tying.',
      equipment: 'Self-Climbing Slipform Rigs, High-Pressure Concrete Pumps',
      visualProgress: 38
    },
    {
      num: '04',
      title: 'COLUMNS & FRAME',
      duration: 'MONTHS 14 – 24',
      description: 'Erecting perimeter structural steel box columns and outrigger stiffening trusses.',
      keyWork: 'Hoisting heavy steel megacolumns, bolting and welding outrigger truss joints.',
      equipment: 'Self-Climbing Tower Cranes, Mobile Crane Hoists',
      visualProgress: 52
    },
    {
      num: '05',
      title: 'FLOOR SYSTEM',
      duration: 'MONTHS 18 – 28',
      description: 'Laying composite metal deck sheets and pouring lightweight reinforced concrete floor slabs.',
      keyWork: 'Deck stud welding, concrete slab pouring, inter-story firestopping.',
      equipment: 'Concrete Buckets, Deck Stud Welders',
      visualProgress: 66
    },
    {
      num: '06',
      title: 'FACADE',
      duration: 'MONTHS 22 – 32',
      description: 'Enclosing the skyscraper with double-glazed glass curtain wall panels.',
      keyWork: 'Monorail hoist installation of prefabricated unitized glass panels.',
      equipment: 'Spider Cranes, Monorail Facade Hoists',
      visualProgress: 78
    },
    {
      num: '07',
      title: 'SERVICES',
      duration: 'MONTHS 26 – 34',
      description: 'Installing mechanical, electrical, plumbing (MEP), and high-speed elevator shafts.',
      keyWork: 'MEP riser ducting, elevator motor room rigging, fire suppression mains.',
      equipment: 'Material Hoists, Cable Winches',
      visualProgress: 88
    },
    {
      num: '08',
      title: 'FINISHING',
      duration: 'MONTHS 30 – 36',
      description: 'Interior fit-outs, architectural trim, acoustic ceilings, and crown spire erection.',
      keyWork: 'Spire segment hoisting, interior partition walls, luxury finishes.',
      equipment: 'Passenger Hoists, Survey Laser Levels',
      visualProgress: 95
    },
    {
      num: '09',
      title: 'COMPLETION',
      duration: 'MONTH 36',
      description: 'Final structural commissioning, load testing, facade cleaning, and handover.',
      keyWork: 'Safety inspection certification, tuned mass damper calibration, grand opening.',
      equipment: 'BMU Maintenance Cranes, Testing Instruments',
      visualProgress: 100
    }
  ];

  const current = stages[activeStage];

  return (
    <section id="construction-flow" className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Hammer className="w-3.5 h-3.5" />
            <span>CONSTRUCTION SEQUENCING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            FROM FOUNDATION TO <span className="text-[#00d9ff]">SKYLINE</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "A generalized high-rise construction sequence from site excavation to pinnacle handover."
          </p>
          <p className="mt-2 text-xs font-mono text-gray-400">
            [NOTE: GENERALIZED HIGH-RISE CONSTRUCTION SEQUENCE]
          </p>
        </div>

        {/* Timeline Horizontal Step Bar */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {stages.map((st, idx) => (
            <button
              key={st.num}
              onClick={() => setActiveStage(idx)}
              className={`px-4 py-2.5 rounded-lg font-mono text-xs transition-all whitespace-nowrap border cursor-pointer flex items-center gap-2 ${
                activeStage === idx
                  ? 'bg-[#00d9ff] text-[#05080d] font-bold border-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                  : 'bg-[#07111b] text-gray-400 border-[#1b2538] hover:border-gray-500 hover:text-white'
              }`}
            >
              <span>{st.num}</span>
              <span>{st.title}</span>
            </button>
          ))}
        </div>

        {/* Stage Active Inspector Board */}
        <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#00d9ff]/30 hud-corner shadow-2xl max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-start border-b border-[#1b2538] pb-4">
            <div>
              <span className="text-xs font-mono text-[#00d9ff] font-bold">
                STAGE {current.num} • {current.duration}
              </span>
              <h3 className="text-2xl font-mono font-bold text-white mt-1">
                {current.title}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-gray-400 block">PROGRESS</span>
              <span className="text-lg font-mono font-bold text-[#00d9ff]">{current.visualProgress}%</span>
            </div>
          </div>

          <p className="text-base text-gray-200 font-sans leading-relaxed">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#07111b] p-4 rounded-xl border border-[#1b2538] space-y-1">
              <span className="text-[10px] font-mono text-gray-400 block">PRIMARY SITE OPERATIONS</span>
              <p className="text-xs text-gray-200 font-sans">{current.keyWork}</p>
            </div>

            <div className="bg-[#07111b] p-4 rounded-xl border border-[#00d9ff]/30 space-y-1">
              <span className="text-[10px] font-mono text-[#00d9ff] font-bold block">MACHINERY DEPLOYED</span>
              <p className="text-xs text-gray-200 font-sans">{current.equipment}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
