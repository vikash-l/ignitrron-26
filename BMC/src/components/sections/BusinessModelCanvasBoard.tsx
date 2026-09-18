import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Sparkles, 
  DollarSign, 
  Workflow, 
  Cpu, 
  HeartHandshake, 
  Share2, 
  Receipt, 
  Layers, 
  Maximize2,
  CheckCircle2,
  X
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

interface BmcBlock {
  id: string;
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  keyQuestions: string[];
  sampleItems: string[];
  color: string;
  gridArea?: string;
}

export const BusinessModelCanvasBoard: React.FC = () => {
  const [activeBlock, setActiveBlock] = useState<BmcBlock | null>(null);
  const [viewMode, setViewMode] = useState<'matrix' | 'sample'>('matrix');

  const bmcBlocks: Record<string, BmcBlock> = {
    partners: {
      id: 'partners',
      name: 'Key Partners',
      tagline: 'Strategic Alliances & Ecosystem',
      icon: Building2,
      description: 'The network of suppliers, tech providers, corporate allies, and channel partners that make the business model work.',
      keyQuestions: [
        'Who are our key suppliers and infrastructure vendors?',
        'Which key resources are we acquiring from partners?',
        'Which core activities do partners perform on our behalf?',
      ],
      sampleItems: [
        'Cloud Tier-1 AI Infrastructure Providers',
        'Hardware Manufacturing OEM Partners',
        'Enterprise Channel Reseller Networks',
        'Regulatory Compliance Advisory Firms',
      ],
      color: '#00ff88',
    },
    activities: {
      id: 'activities',
      name: 'Key Activities',
      tagline: 'Core Operational Engine',
      icon: Workflow,
      description: 'The most critical actions a venture must execute to create and deliver value, sustain channels, and earn revenue.',
      keyQuestions: [
        'What key activities do our value propositions require?',
        'What processes maintain our distribution channels and client relationships?',
        'How do we ensure continuous R&D and platform reliability?',
      ],
      sampleItems: [
        'Proprietary ML Model Training & Optimization',
        'Continuous Enterprise Platform Deployment',
        'B2B Solution Engineering & Client Onboarding',
        'Patents & Intellectual Property Filings',
      ],
      color: '#00c96b',
    },
    resources: {
      id: 'resources',
      name: 'Key Resources',
      tagline: 'Defensible Strategic Assets',
      icon: Cpu,
      description: 'The critical physical, intellectual, human, and financial assets needed to execute the venture’s business model.',
      keyQuestions: [
        'What proprietary tech or patents form our competitive moat?',
        'What specialized talent (engineers, business developers) are vital?',
        'What capital requirements and servers power day-to-day ops?',
      ],
      sampleItems: [
        'Proprietary Algorithmic Trade Secrets',
        'Specialized Deep-Tech Engineering Squad',
        'Proprietary Labeled Customer Datasets',
        'Enterprise Grade Security Infrastructure',
      ],
      color: '#00ff88',
    },
    valueProp: {
      id: 'valueProp',
      name: 'Value Propositions',
      tagline: 'Quantum Leap Solutions',
      icon: Sparkles,
      description: 'The bundle of products and services that create distinct, measurable value for a specific customer segment.',
      keyQuestions: [
        'What core value do we deliver to the executive buyer?',
        'Which customer pain point are we directly eliminating?',
        'What sets our solution apart from incumbent competitors?',
      ],
      sampleItems: [
        '80% Reduction in Enterprise Operational Latency',
        'Predictive Autonomous Decision Engine with 99.9% Uptime',
        'Zero-Trust Enterprise Data Encryption',
        'Instant 4x Return on Investment within 90 Days',
      ],
      color: '#00ff88',
    },
    relationships: {
      id: 'relationships',
      name: 'Customer Relationships',
      tagline: 'Retention & Engagement Model',
      icon: HeartHandshake,
      description: 'The types of relationship a company establishes and maintains with specific customer segments throughout their lifecycle.',
      keyQuestions: [
        'What type of relationship does each customer segment expect?',
        'How are these relationships integrated with our operational model?',
        'What are our churn reduction and expansion mechanisms?',
      ],
      sampleItems: [
        'Dedicated Enterprise Key Account Directors',
        'Self-Serve Developer Sandbox & API Docs',
        'Quarterly Executive Business Reviews (EBR)',
        'Automated AI Telemetry & Health Monitoring',
      ],
      color: '#00c96b',
    },
    channels: {
      id: 'channels',
      name: 'Channels',
      tagline: 'Distribution & Go-To-Market',
      icon: Share2,
      description: 'How a company communicates with and reaches its customer segments to deliver its value proposition.',
      keyQuestions: [
        'Through which channels do our customer segments want to be reached?',
        'How are our channels integrated for maximum conversion velocity?',
        'Which channels are most cost-effective and scalable?',
      ],
      sampleItems: [
        'Direct Enterprise Account-Based Sales Force',
        'Global System Integrator Partnerships',
        'Developer Community & Open Documentation',
        'Executive Industry Summits & Keynotes',
      ],
      color: '#00ff88',
    },
    segments: {
      id: 'segments',
      name: 'Customer Segments',
      tagline: 'Target Buyer Profiles',
      icon: Users,
      description: 'The different groups of people or organizations an enterprise aims to reach, serve, and monetize.',
      keyQuestions: [
        'For whom are we creating exponential value?',
        'Who are our most profitable Tier-1 enterprise clients?',
        'What are the common behavioral traits across our segments?',
      ],
      sampleItems: [
        'Fortune 500 CTOs & VP of Engineering',
        'High-Frequency Supply Chain Conglomerates',
        'Venture-Backed Autonomous Tech Startups',
        'Regulated FinTech & Healthcare Infrastructure',
      ],
      color: '#00c96b',
    },
    costStructure: {
      id: 'costStructure',
      name: 'Cost Structure',
      tagline: 'Operational Outflows & CAPEX',
      icon: Receipt,
      description: 'All costs incurred to operate the business model, develop IP, maintain servers, and acquire customers.',
      keyQuestions: [
        'What are the most significant costs inherent in our business model?',
        'Which key resources and activities are most capital-intensive?',
        'Are we driven by cost-efficiency or high-value creation?',
      ],
      sampleItems: [
        'Cloud Compute & GPU Cluster Infrastructure (35%)',
        'High-Impact Engineering & Product Salaries (40%)',
        'Direct Enterprise Sales & GTM Acquisition (15%)',
        'Regulatory Compliance, IP Legal & Security Audits (10%)',
      ],
      color: '#cbd5e1',
    },
    revenueStreams: {
      id: 'revenueStreams',
      name: 'Revenue Streams',
      tagline: 'Monetization Architecture',
      icon: DollarSign,
      description: 'The cash a company generates from each customer segment through sales, subscriptions, licensing, or usage.',
      keyQuestions: [
        'For what value are our customers really willing to pay?',
        'How do they currently pay, and how would they prefer to pay?',
        'How much does each revenue stream contribute to overall revenue?',
      ],
      sampleItems: [
        'Annual Recurring SaaS Subscriptions ($50k–$250k / node)',
        'Volume-Based API Usage & Query Multipliers',
        'Custom Enterprise Deployment & SLA Support Add-ons',
        'Patent Technology Licensing Royalties',
      ],
      color: '#f59e0b',
    },
  };

  const handleOpenBlock = (block: BmcBlock) => {
    playUiSound('select');
    setActiveBlock(block);
  };

  return (
    <section id="canvas" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00ff88]/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0f14] border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            Oscorp Strategy Board
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-space mb-4">
            Business Model <span className="oscorp-gradient-text">Canvas</span>
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1]/80 max-w-2xl mx-auto">
            The 9-block corporate innovation framework. Explore the interlocking mechanics behind high-velocity ventures.
          </p>

          {/* Toggle View Mode */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-[#0b0f14] border border-[#cbd5e1]/20">
            <button
              onClick={() => {
                playUiSound('click');
                setViewMode('matrix');
              }}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                viewMode === 'matrix'
                  ? 'bg-[#00ff88] text-[#050816] shadow-md shadow-[#00ff88]/30'
                  : 'text-[#cbd5e1] hover:text-white'
              }`}
            >
              Interactive Strategy Board
            </button>
            <button
              onClick={() => {
                playUiSound('click');
                setViewMode('sample');
              }}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                viewMode === 'sample'
                  ? 'bg-[#00ff88] text-[#050816] shadow-md shadow-[#00ff88]/30'
                  : 'text-[#cbd5e1] hover:text-white'
              }`}
            >
              Exemplar Venture Case Study
            </button>
          </div>
        </div>

        {/* Osterwalder 9-Block Interactive Canvas Matrix */}
        <div className="rounded-3xl glass-oscorp-elevated p-4 sm:p-6 lg:p-8 border border-[#00ff88]/30 shadow-2xl shadow-black relative oscorp-cut-lg">
          {/* Top Board Telemetry */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#cbd5e1]/10 text-xs font-mono">
            <div className="flex items-center gap-2 text-white">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="font-bold">STRATEGY_GRID_CANVAS // MODEL-9</span>
            </div>
            <div className="flex items-center gap-4 text-[#cbd5e1]/60 text-[11px]">
              <span>Click any block to inspect details</span>
              <span className="hidden sm:inline text-[#00ff88]">9 Essential Venture Vectors</span>
            </div>
          </div>

          {/* Top 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:gap-4 mb-3 lg:mb-4">
            {/* 1. Key Partners (Tall Column) */}
            <div
              onClick={() => handleOpenBlock(bmcBlocks.partners)}
              onMouseEnter={() => playUiSound('hover')}
              className="group p-4 sm:p-5 rounded-2xl glass-oscorp border border-[#cbd5e1]/15 hover:border-[#00ff88] hover:bg-[#0b0f14] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-[#00ff88] uppercase tracking-wider">01 // Eco</span>
                  <Building2 className="w-4 h-4 text-[#00ff88]" />
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-[#00ff88] transition-colors mb-1">
                  Key Partners
                </h4>
                <p className="text-xs text-[#cbd5e1]/70 leading-relaxed line-clamp-3">
                  {viewMode === 'sample' ? bmcBlocks.partners.sampleItems.slice(0, 2).join(' • ') : bmcBlocks.partners.tagline}
                </p>
              </div>
              <div className="pt-3 border-t border-[#cbd5e1]/10 flex items-center justify-between text-[10px] font-mono text-[#00ff88]">
                <span>Inspect Block</span>
                <Maximize2 className="w-3 h-3" />
              </div>
            </div>

            {/* 2 & 3. Key Activities (top) & Key Resources (bottom) */}
            <div className="flex flex-col gap-3 lg:gap-4">
              {/* Key Activities */}
              <div
                onClick={() => handleOpenBlock(bmcBlocks.activities)}
                onMouseEnter={() => playUiSound('hover')}
                className="group p-4 rounded-2xl glass-oscorp border border-[#00c96b]/30 hover:border-[#00c96b] hover:bg-[#0b0f14] transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#00c96b] uppercase tracking-wider">02 // Ops</span>
                    <Workflow className="w-4 h-4 text-[#00c96b]" />
                  </div>
                  <h4 className="font-bold text-white text-sm group-hover:text-[#00c96b] transition-colors mb-1">
                    Key Activities
                  </h4>
                  <p className="text-[11px] text-[#cbd5e1]/70 line-clamp-2">
                    {viewMode === 'sample' ? bmcBlocks.activities.sampleItems[0] : bmcBlocks.activities.tagline}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-[#00c96b] pt-2 text-right">Inspect →</div>
              </div>

              {/* Key Resources */}
              <div
                onClick={() => handleOpenBlock(bmcBlocks.resources)}
                onMouseEnter={() => playUiSound('hover')}
                className="group p-4 rounded-2xl glass-oscorp border border-[#cbd5e1]/15 hover:border-[#00ff88] hover:bg-[#0b0f14] transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#00ff88] uppercase tracking-wider">03 // Assets</span>
                    <Cpu className="w-4 h-4 text-[#00ff88]" />
                  </div>
                  <h4 className="font-bold text-white text-sm group-hover:text-[#00ff88] transition-colors mb-1">
                    Key Resources
                  </h4>
                  <p className="text-[11px] text-[#cbd5e1]/70 line-clamp-2">
                    {viewMode === 'sample' ? bmcBlocks.resources.sampleItems[0] : bmcBlocks.resources.tagline}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-[#00ff88] pt-2 text-right">Inspect →</div>
              </div>
            </div>

            {/* 4. Value Propositions (Tall Anchor Center) */}
            <div
              onClick={() => handleOpenBlock(bmcBlocks.valueProp)}
              onMouseEnter={() => playUiSound('hover')}
              className="group p-4 sm:p-5 rounded-2xl glass-oscorp-elevated border border-[#00ff88]/40 hover:border-[#00ff88] hover:bg-[#0b0f14] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] shadow-lg shadow-[#00ff88]/10"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-[#00ff88] uppercase tracking-wider font-bold">04 // Core</span>
                  <Sparkles className="w-5 h-5 text-[#00ff88] animate-pulse" />
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-[#00ff88] transition-colors mb-1">
                  Value Propositions
                </h4>
                <p className="text-xs text-[#cbd5e1]/85 leading-relaxed line-clamp-3">
                  {viewMode === 'sample' ? bmcBlocks.valueProp.sampleItems.slice(0, 2).join(' • ') : bmcBlocks.valueProp.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#00ff88]/20 flex items-center justify-between text-[10px] font-mono text-[#00ff88] font-bold">
                <span>Value Engine</span>
                <Maximize2 className="w-3 h-3" />
              </div>
            </div>

            {/* 5 & 6. Customer Relationships (top) & Channels (bottom) */}
            <div className="flex flex-col gap-3 lg:gap-4">
              {/* Customer Relationships */}
              <div
                onClick={() => handleOpenBlock(bmcBlocks.relationships)}
                onMouseEnter={() => playUiSound('hover')}
                className="group p-4 rounded-2xl glass-oscorp border border-[#cbd5e1]/15 hover:border-[#00c96b] hover:bg-[#0b0f14] transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#00c96b] uppercase tracking-wider">05 // Trust</span>
                    <HeartHandshake className="w-4 h-4 text-[#00c96b]" />
                  </div>
                  <h4 className="font-bold text-white text-sm group-hover:text-[#00c96b] transition-colors mb-1">
                    Customer Relationships
                  </h4>
                  <p className="text-[11px] text-[#cbd5e1]/70 line-clamp-2">
                    {viewMode === 'sample' ? bmcBlocks.relationships.sampleItems[0] : bmcBlocks.relationships.tagline}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-[#00c96b] pt-2 text-right">Inspect →</div>
              </div>

              {/* Channels */}
              <div
                onClick={() => handleOpenBlock(bmcBlocks.channels)}
                onMouseEnter={() => playUiSound('hover')}
                className="group p-4 rounded-2xl glass-oscorp border border-[#cbd5e1]/15 hover:border-[#00ff88] hover:bg-[#0b0f14] transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#00ff88] uppercase tracking-wider">06 // Reach</span>
                    <Share2 className="w-4 h-4 text-[#00ff88]" />
                  </div>
                  <h4 className="font-bold text-white text-sm group-hover:text-[#00ff88] transition-colors mb-1">
                    Channels
                  </h4>
                  <p className="text-[11px] text-[#cbd5e1]/70 line-clamp-2">
                    {viewMode === 'sample' ? bmcBlocks.channels.sampleItems[0] : bmcBlocks.channels.tagline}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-[#00ff88] pt-2 text-right">Inspect →</div>
              </div>
            </div>

            {/* 7. Customer Segments (Tall Column) */}
            <div
              onClick={() => handleOpenBlock(bmcBlocks.segments)}
              onMouseEnter={() => playUiSound('hover')}
              className="group p-4 sm:p-5 rounded-2xl glass-oscorp border border-[#cbd5e1]/15 hover:border-[#00c96b] hover:bg-[#0b0f14] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-[#00c96b] uppercase tracking-wider">07 // Target</span>
                  <Users className="w-4 h-4 text-[#00c96b]" />
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-[#00c96b] transition-colors mb-1">
                  Customer Segments
                </h4>
                <p className="text-xs text-[#cbd5e1]/70 leading-relaxed line-clamp-3">
                  {viewMode === 'sample' ? bmcBlocks.segments.sampleItems.slice(0, 2).join(' • ') : bmcBlocks.segments.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#cbd5e1]/10 flex items-center justify-between text-[10px] font-mono text-[#00c96b]">
                <span>Inspect Block</span>
                <Maximize2 className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Bottom Row: 8. Cost Structure & 9. Revenue Streams */}
          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {/* 8. Cost Structure */}
            <div
              onClick={() => handleOpenBlock(bmcBlocks.costStructure)}
              onMouseEnter={() => playUiSound('hover')}
              className="group p-4 sm:p-5 rounded-2xl glass-oscorp border border-[#cbd5e1]/20 hover:border-[#cbd5e1] hover:bg-[#0b0f14] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#cbd5e1] uppercase tracking-wider">08 // Costs</span>
                  <Receipt className="w-4 h-4 text-[#cbd5e1]" />
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-[#cbd5e1] transition-colors mb-1">
                  Cost Structure
                </h4>
                <p className="text-xs text-[#cbd5e1]/75 leading-relaxed">
                  {viewMode === 'sample' ? bmcBlocks.costStructure.sampleItems.slice(0, 2).join(' • ') : bmcBlocks.costStructure.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#cbd5e1]/10 flex items-center justify-between text-[10px] font-mono text-[#cbd5e1]">
                <span>Analyze OPEX & CAPEX</span>
                <Maximize2 className="w-3 h-3" />
              </div>
            </div>

            {/* 9. Revenue Streams */}
            <div
              onClick={() => handleOpenBlock(bmcBlocks.revenueStreams)}
              onMouseEnter={() => playUiSound('hover')}
              className="group p-4 sm:p-5 rounded-2xl glass-oscorp-gold border border-[#f59e0b]/40 hover:border-[#f59e0b] hover:bg-[#0b0f14] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#f59e0b] uppercase tracking-wider font-bold">09 // Monetization</span>
                  <DollarSign className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-[#f59e0b] transition-colors mb-1">
                  Revenue Streams
                </h4>
                <p className="text-xs text-[#cbd5e1]/85 leading-relaxed">
                  {viewMode === 'sample' ? bmcBlocks.revenueStreams.sampleItems.slice(0, 2).join(' • ') : bmcBlocks.revenueStreams.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#f59e0b]/20 flex items-center justify-between text-[10px] font-mono text-[#f59e0b] font-bold">
                <span>Evaluate Cash Inflows</span>
                <Maximize2 className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Drawer for Detailed Inspection of Selected BMC Block */}
        {activeBlock && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-[#0b0f14] border border-[#00ff88]/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#00ff88]/20 oscorp-cut max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-[#cbd5e1]/15 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88]">
                    <activeBlock.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#00ff88]">
                      Oscorp Strategy Directive
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{activeBlock.name}</h3>
                  </div>
                </div>
                <button
                  onClick={() => {
                    playUiSound('click');
                    setActiveBlock(null);
                  }}
                  className="p-2 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 text-[#cbd5e1] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-[#cbd5e1]/60 mb-2">
                    Executive Definition
                  </h5>
                  <p className="text-sm text-white/90 leading-relaxed bg-[#050816] p-4 rounded-xl border border-[#cbd5e1]/10">
                    {activeBlock.description}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-[#00ff88] mb-2">
                    Critical Boardroom Evaluation Questions
                  </h5>
                  <div className="space-y-2">
                    {activeBlock.keyQuestions.map((q, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1] bg-[#050816]/70 p-3 rounded-lg border border-[#cbd5e1]/10">
                        <span className="text-[#00ff88] font-mono font-bold mt-0.5">Q{idx + 1}:</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-[#f59e0b] mb-2">
                    Exemplar High-Growth Venture Deliverables
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeBlock.sampleItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#050816] border border-[#cbd5e1]/10 text-xs text-white">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#cbd5e1]/10 flex justify-end">
                <button
                  onClick={() => {
                    playUiSound('click');
                    setActiveBlock(null);
                  }}
                  className="px-6 py-2 rounded-xl bg-[#00ff88] text-[#050816] font-bold text-xs uppercase tracking-wider hover:bg-[#00c96b] transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
