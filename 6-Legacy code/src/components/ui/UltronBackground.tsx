import React from 'react';

export const UltronBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 12. Very Light Holographic Grid Lines (3% Opacity) */}
      <div className="absolute inset-0 holographic-grid-lines opacity-100" />

      {/* 1. Deep Atmospheric Dark Surface & Soft Crimson Core Glow */}
      <div className="absolute inset-0 ultron-blueprint-bg opacity-90" />

      {/* 9. Thin Scanning Lines Moving Across the Page */}
      <div className="ultron-scan-line" />

      {/* 10. Soft Red Warning Lights Appearing Occasionally (Slow Ambient Warning Pulses) */}
      <div className="absolute top-1/6 left-12 w-3 h-3 bg-[#F04444] rounded-full blur-[6px] slow-warning-pulse" />
      <div className="absolute top-1/2 right-16 w-3.5 h-3.5 bg-[#F04444] rounded-full blur-[8px] slow-warning-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#C62828] rounded-full blur-[6px] slow-warning-pulse" />

      <div className="absolute top-1/4 -left-40 w-[40rem] h-[40rem] bg-red-950/15 rounded-full blur-[150px]" />
      <div className="absolute top-2/3 -right-40 w-[45rem] h-[45rem] bg-red-950/15 rounded-full blur-[180px]" />
      <div className="absolute bottom-10 left-1/3 -translate-x-1/2 w-[35rem] h-[35rem] bg-red-900/10 rounded-full blur-[160px]" />

      {/* 8. Large, Barely Visible Words Hidden Behind Sections (4% Opacity) */}
      <div className="absolute top-[12vh] left-10 text-[11vw] font-black font-industrial text-[#E8EAED] opacity-[0.04] tracking-tighter uppercase whitespace-nowrap">
        LEGACY
      </div>
      <div className="absolute top-[35vh] right-10 text-[10vw] font-black font-industrial text-[#E8EAED] opacity-[0.04] tracking-tighter uppercase whitespace-nowrap">
        DEBUG
      </div>
      <div className="absolute top-[60vh] left-16 text-[12vw] font-black font-industrial text-[#E8EAED] opacity-[0.04] tracking-tighter uppercase whitespace-nowrap">
        REFACTOR
      </div>
      <div className="absolute top-[85vh] right-12 text-[11vw] font-black font-industrial text-[#E8EAED] opacity-[0.04] tracking-tighter uppercase whitespace-nowrap">
        PATCH
      </div>
      <div className="absolute top-[110vh] left-8 text-[12vw] font-black font-industrial text-[#E8EAED] opacity-[0.04] tracking-tighter uppercase whitespace-nowrap">
        RESTORE
      </div>

      {/* 11. Subtle Server-Rack Silhouettes */}
      <div className="absolute left-4 top-1/4 bottom-1/4 w-8 border-l border-r border-[#262A33]/20 hidden lg:flex flex-col justify-between py-12 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex items-center justify-between px-1">
            <div className="w-4 h-0.5 bg-[#3A404E]/40" />
            <div className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-[#F04444]/60' : 'bg-[#626870]/30'}`} />
          </div>
        ))}
      </div>

      <div className="absolute right-4 top-1/3 bottom-1/5 w-8 border-l border-r border-[#262A33]/20 hidden lg:flex flex-col justify-between py-12 opacity-30">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center justify-between px-1">
            <div className={`w-1 h-1 rounded-full ${i % 4 === 0 ? 'bg-[#F04444]/60' : 'bg-[#626870]/30'}`} />
            <div className="w-4 h-0.5 bg-[#3A404E]/40" />
          </div>
        ))}
      </div>

      {/* 4. Broken Circuit-Board Patterns (SVG Traces) */}
      <svg className="absolute top-20 left-1/3 w-64 h-64 opacity-[0.04] stroke-[#F04444] fill-none stroke-2 hidden md:block">
        <path d="M10,10 L80,10 L120,50 L120,120 L160,160 M120,50 L180,50" />
        <circle cx="10" cy="10" r="3" className="fill-[#F04444]" />
        <circle cx="180" cy="50" r="3" className="fill-[#F04444]" />
        <line x1="160" y1="160" x2="160" y2="180" strokeDasharray="4 4" />
      </svg>

      <svg className="absolute bottom-40 right-1/4 w-72 h-72 opacity-[0.04] stroke-[#E8EAED] fill-none stroke-2 hidden md:block">
        <path d="M200,200 L140,200 L90,150 L90,80 L40,30 M90,150 L30,150" />
        <circle cx="200" cy="200" r="3" className="fill-[#E8EAED]" />
        <circle cx="30" cy="150" r="3" className="fill-[#E8EAED]" />
        <line x1="40" y1="30" x2="20" y2="10" strokeDasharray="4 4" />
      </svg>

      {/* 2. Faint Terminal Windows (6% Opacity) */}
      <div className="absolute top-36 left-12 w-80 bg-[#121418] border border-[#3A404E] p-3 text-[10px] font-mono text-[#9CA3AA] opacity-[0.06] clip-corner-sm hidden xl:block space-y-1.5">
        <div className="flex items-center justify-between border-b border-[#262A33] pb-1 text-[#F04444]">
          <span>TERMINAL // LOG_STREAM</span>
          <span>PID: 4092</span>
        </div>
        <div>[KERNEL WARN] Memory leak detected at 0x7F4A</div>
        <div>WARN: @deprecated void legacyAlloc()</div>
        <div>Exception in thread &quot;main&quot; java.lang.NullPointer</div>
        <div className="pl-2">at com.legacy.CoreEngine.process(CoreEngine.java:142)</div>
      </div>

      <div className="absolute top-2/3 right-12 w-84 bg-[#121418] border border-[#3A404E] p-3 text-[10px] font-mono text-[#9CA3AA] opacity-[0.06] clip-corner-sm hidden xl:block space-y-1.5">
        <div className="flex items-center justify-between border-b border-[#262A33] pb-1 text-[#F04444]">
          <span>SYSTEM // DUMP_CACHE</span>
          <span>STATUS: CRITICAL</span>
        </div>
        <div>0xDEAD: 1024 bytes unmapped</div>
        <div>0xBEEF: corrupted stack frame</div>
        <div>/bin/recovery/rescue_protocol.sh --force</div>
        <div>DEPT_OF_ENGINEERING // RECOVERY ACTIVE</div>
      </div>

      {/* 1. Large, Low-Opacity Code Fragments (3%-5% Opacity) */}
      <div className="absolute top-1/3 left-16 text-xs font-mono text-[#9CA3AA] opacity-[0.04] hidden lg:block space-y-1 leading-relaxed">
        <div>template &lt;typename T&gt;</div>
        <div>class LegacyMemoryPool &#123;</div>
        <div className="pl-4">public:</div>
        <div className="pl-8">T* allocate_raw_chunk(size_t size);</div>
        <div className="pl-8">void free_leaked_handles();</div>
        <div>&#125;;</div>
      </div>

      <div className="absolute bottom-1/3 right-20 text-xs font-mono text-[#9CA3AA] opacity-[0.04] hidden lg:block space-y-1 leading-relaxed text-right">
        <div>struct UltronCoreEngine &#123;</div>
        <div>uint64_t memory_address_0x7F4A;</div>
        <div>bool is_corrupted;</div>
        <div>void repair_monolith();</div>
        <div>&#125;;</div>
      </div>

      {/* 5. Subtle Hexadecimal Values */}
      <div className="absolute top-48 left-1/3 text-xs font-mono text-[#F04444] opacity-[0.05] tracking-widest hidden md:block">
        0x7F4A
      </div>
      <div className="absolute top-3/4 left-1/4 text-xs font-mono text-[#E8EAED] opacity-[0.05] tracking-widest hidden md:block">
        0xA1B3
      </div>
      <div className="absolute top-1/2 right-1/3 text-xs font-mono text-[#F04444] opacity-[0.05] tracking-widest hidden md:block">
        0xDEAD
      </div>
      <div className="absolute bottom-1/4 right-1/2 text-xs font-mono text-[#E8EAED] opacity-[0.05] tracking-widest hidden md:block">
        0xBEEF
      </div>

      {/* 6. Faded File Paths */}
      <div className="absolute top-1/4 right-1/4 text-[11px] font-mono text-[#9CA3AA] opacity-[0.05] hidden sm:block">
        /src/legacy/kernel_core.c
      </div>
      <div className="absolute top-2/3 left-1/5 text-[11px] font-mono text-[#9CA3AA] opacity-[0.05] hidden sm:block">
        /bin/recovery/deploy.sh
      </div>
      <div className="absolute bottom-1/5 left-1/3 text-[11px] font-mono text-[#9CA3AA] opacity-[0.05] hidden sm:block">
        /system/cache/memory_dump.bin
      </div>

      {/* 7. Scattered Programming Symbols (3%-5% Opacity) */}
      <div className="absolute top-24 left-1/2 text-2xl font-mono text-[#9CA3AA] opacity-[0.04] hidden md:block">&#123;&#125;</div>
      <div className="absolute top-1/3 right-1/5 text-2xl font-mono text-[#F04444] opacity-[0.04] hidden md:block">&lt;/&gt;</div>
      <div className="absolute top-1/2 left-1/4 text-2xl font-mono text-[#9CA3AA] opacity-[0.04] hidden md:block">[]</div>
      <div className="absolute bottom-1/3 right-1/3 text-2xl font-mono text-[#E8EAED] opacity-[0.04] hidden md:block">()</div>
      <div className="absolute bottom-16 left-1/2 text-2xl font-mono text-[#F04444] opacity-[0.04] hidden md:block">//</div>

      {/* 3. Animated Data Streams (Slow Movement Overlay) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F04444]/10 to-transparent opacity-40 slow-data-stream-v pointer-events-none" />
    </div>
  );
};
