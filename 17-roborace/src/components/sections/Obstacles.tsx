import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import * as LucideIcons from 'lucide-react';

// Obstacles definition
const obstacles = [
  { name: "Split Bridges", iconName: "GitBranch", desc: "Narrow twin-bridge crossings" },
  { name: "8’s Loops", iconName: "Infinity", desc: "Figure-eight drift tracks" },
  { name: "The Tunnel", iconName: "Tv", desc: "Low-clearance dark tubes" },
  { name: "Narrow Bridge", iconName: "AlignJustify", desc: "Thin lane precision track" },
  { name: "Launch Ramps", iconName: "TrendingUp", desc: "Steep jump inclines" },
  { name: "Mesh Bridge", iconName: "Grid", desc: "Slippery metallic grates" },
  { name: "Gravel Trap", iconName: "Dribbble", desc: "Unstable loose rock pits" },
  { name: "Mud Pit", iconName: "Droplet", desc: "Heavy dirt hazard zone" },
  { name: "Mud Slurry", iconName: "Waves", desc: "Low-traction liquid sludge" },
  { name: "Loop the Loop", iconName: "RotateCw", desc: "Centrifugal force vertical loops" },
  { name: "Box in the Bins", iconName: "Box", desc: "Intense square chicane" },
  { name: "The See-Saw", iconName: "ArrowLeftRight", desc: "Dynamic pivot rocker bridges" },
  { name: "Rotary Door", iconName: "Disc", desc: "Rotating gates testing timing" },
  { name: "Speed Bumps", iconName: "Activity", desc: "High-frequency suspension tests" },
  { name: "Zig-Zags", iconName: "Shuffle", desc: "Snaking high-steer hairpins" },
  { name: "The Pendulum", iconName: "Timer", desc: "Swinging obstacle hazards" },
  { name: "Super Straights", iconName: "Zap", desc: "Maximum speed drag lanes" }
];

export const Obstacles: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 150, damping: 15 }
    }
  };

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-5 w-5 text-sky-400" />;
    }
    return <LucideIcons.AlertTriangle className="h-5 w-5 text-sky-400" />;
  };

  return (
    <section id="obstacles" className="py-24 bg-transparent relative overflow-hidden">
      {/* Visual backgrounds */}
      <div className="absolute inset-0 bg-grid-racing opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-slate-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="CAN YOU KEEP UP?"
          subtitle="Conquer 17 extreme track configurations designed to test driver reaction and machine threshold limits."
          badge="THE ARENA"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        >
          {obstacles.map((obs, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative overflow-hidden group rounded-xl"
            >
              {/* Dynamic Chrome/Silver shine effect container */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
                {/* Horizontal speed trail */}
                <div className="absolute top-0 left-0 w-[30%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[streak-move_0.8s_ease-out]" />
              </div>

              <Card
                glow={true}
                glowColor="silver"
                hoverEffect={false} // Custom hover effect below
                className="h-full p-4 bg-zinc-900/35 border-zinc-800/80 hover:border-slate-300/40 hover:bg-zinc-900/60 transform hover:scale-[1.03] hover:-translate-y-1 transition-all duration-150 cursor-pointer flex flex-col justify-between items-start gap-4 shadow-sm"
              >
                {/* Icon & Mini speed indicator */}
                <div className="flex justify-between items-center w-full">
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-850 group-hover:border-slate-550 transition-colors duration-150">
                    {getIcon(obs.iconName)}
                  </div>
                  
                  {/* Subtle speed trail bar */}
                  <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <span className="w-1.5 h-1 bg-sky-400 rounded-full animate-pulse" />
                    <span className="w-2.5 h-1 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                  </div>
                </div>

                {/* Obstacle Label */}
                <div>
                  <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider group-hover:text-sky-400 transition-colors duration-120">
                    {obs.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-1">
                    {obs.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
