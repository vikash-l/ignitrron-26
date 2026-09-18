import type {
  StructureItem,
  TowerCutawayComponent,
  ForceConcept,
  ResearchCategory,
  MachineryItem,
  MaterialItem,
  ChallengeItem,
  InnovationItem,
  PresentationSlide,
  QuestionCategory,
  EvaluationCriterion
} from '../types';

export const EVENT_DETAILS = {
  name: 'STRUCTURE X',
  fest: 'IGNITRRON 2026',
  tagline: 'ANALYZE • ENGINEER • PRESENT',
  secondaryTagline: 'Every landmark has a story. Every structure has a force behind it.',
  category: 'CIVIL ENGINEERING',
  teamSize: '2 MEMBERS PER TEAM',
  expectedParticipants: '40 PARTICIPANTS',
  day: 'DAY 2',
  timing: '9:00 AM – 4:00 PM',
  venue: 'CIVIL CLASSROOMS',
  faculty: 'DR. DHARMARAJ',
  prizePool: '₹6,000',
  firstPrize: '₹3,000',
  secondPrize: '₹2,000',
  thirdPrize: '₹1,000',
  format: 'POWERPOINT PRESENTATION + TECHNICAL INTERACTION WITH JUDGES',
  focus: 'CONSTRUCTION + ENGINEERING ANALYSIS',
  heroImage: 'assets/hero_avengers_tower_cinematic.jpg',
  blueprintImage: 'assets/blueprint_avengers_tower.jpg'
};

export const AVENGERS_TOWER_CUTAWAY: TowerCutawayComponent[] = [
  {
    id: 'roof',
    name: 'CROWN SPIRE & OBSERVATION RING',
    category: 'HYPOTHETICAL CANTILEVER & SPIRE',
    structuralRole: 'Conceptual high-elevation cantilever framing and spire wind dampening.',
    engineeringPurpose: 'Theoretical upper mass dampers to counteract dynamic vortex shedding and lateral wind sway.',
    keyConsideration: 'Managing hypothetical moment forces across extended cantilever overhangs.',
    xPercent: 48,
    yPercent: 22
  },
  {
    id: 'facade',
    name: 'DOUBLE-GLAZED CURTAIN WALL FACADE',
    category: 'ENCLOSURE & THERMAL SKIN',
    structuralRole: 'Aerodynamic glass cladding anchored to composite steel perimeter framing.',
    engineeringPurpose: 'Provides structural wind resistance, thermal insulation, and solar heat reduction.',
    keyConsideration: 'Accommodating inter-story floor deflection without glass pane cracking.',
    xPercent: 55,
    yPercent: 38
  },
  {
    id: 'floors',
    name: 'OUTRIGGER TRUSS & COMPOSITE DECK',
    category: 'STIFFENING BRACING & FLOOR SLABS',
    structuralRole: 'Connects central shear core to perimeter megacolumns.',
    engineeringPurpose: 'Increases overturning resistance against lateral wind and seismic shear.',
    keyConsideration: 'Post-tensioning steel outrigger trusses to balance core deformation.',
    xPercent: 50,
    yPercent: 52
  },
  {
    id: 'columns',
    name: 'PERIMETER MEGACOLUMNS',
    category: 'VERTICAL LOAD BEARING',
    structuralRole: 'Heavy structural steel box columns filled with high-strength concrete.',
    engineeringPurpose: 'Carries gravity dead load and transfers axial forces down to foundation raft.',
    keyConsideration: 'High axial compression stress limits.',
    xPercent: 35,
    yPercent: 65
  },
  {
    id: 'core',
    name: 'REINFORCED CONCRETE SHEAR CORE',
    category: 'CENTRAL LATERAL RESISTANCE',
    structuralRole: 'Central concrete shear wall core surrounding elevator shafts.',
    engineeringPurpose: 'Acts as the primary spine of the skyscraper, absorbing torsional shear and wind moments.',
    keyConsideration: 'Continuous vertical slipform pouring without cold joints.',
    xPercent: 52,
    yPercent: 74
  },
  {
    id: 'foundation',
    name: 'DEEP BEDROCK PILE RAFT FOUNDATION',
    category: 'SUBSTRUCTURE & BEDROCK ANCHOR',
    structuralRole: 'Massive reinforced concrete raft slab cast over deep drilled bedrock friction piles.',
    engineeringPurpose: 'Anchors the skyscraper directly into bedrock to prevent tipping or settlement.',
    keyConsideration: 'Managing hydration heat during continuous concrete foundation pour.',
    xPercent: 50,
    yPercent: 88
  }
];

export const WORLD_STRUCTURES: StructureItem[] = [
  {
    id: 'avengers-tower',
    name: 'AVENGERS TOWER',
    location: 'NEW YORK, USA • MARVEL UNIVERSE',
    yearBuilt: 'FICTIONAL LANDMARK',
    category: 'FICTIONAL MARVEL HEADQUARTERS',
    image: 'assets/blueprint_avengers_tower.jpg',
    engineeringSignificance: 'The Avengers Tower is a fictional skyscraper and headquarters associated with the Avengers in the Marvel Universe. Its depictions across Marvel films and stories present it as a high-tech headquarters designed around advanced technology, security, research, and superhero operations.',
    keyMaterials: ['Structural Steel', 'High-Performance Concrete', 'Low-E Curved Glass', 'Titanium Composite'],
    structuralSystem: 'Hypothetical Shear Core + Outrigger System + Perimeter Frame',
    primaryChallenge: 'Hypothetical structural form & cantilevered helipad overhang stability.',
    blueprintSpecs: {
      height: 'CONCEPTUAL SIZE',
      foundationType: 'Deep Bedrock Pile Raft (Hypothetical)',
      loadType: 'Asymmetrical Cantilever Bending & Wind Shear',
      keyFeature: 'Frictional Marvel Headquarters & Cantilever Ring'
    }
  },
  {
    id: 'burj-khalifa',
    name: 'BURJ KHALIFA',
    location: 'DUBAI, UAE',
    yearBuilt: '2004 – 2010',
    category: 'SUPER-TALL CONCRETE CORE',
    image: 'assets/burj_khalifa_1786952685326.jpg',
    engineeringSignificance: 'World\'s tallest structure featuring a Y-shaped buttressed core that disorganizes vortex shedding winds.',
    keyMaterials: ['High-Performance Concrete (C80/C60)', 'Structural Steel', 'Reflective Glass'],
    structuralSystem: 'Hexagonal Core with Three Wing Buttresses & Outriggers',
    primaryChallenge: 'Pumping self-consolidating concrete 600m vertically in desert heat.',
    blueprintSpecs: {
      height: '828 Meters',
      foundationType: 'Friction Piled Raft (194 Cast-in-place Piles)',
      loadType: 'Vortex Shedding Wind & Seismic Shear',
      keyFeature: 'Y-Shaped Buttressed Core Architecture'
    }
  },
  {
    id: 'taj-mahal',
    name: 'TAJ MAHAL',
    location: 'AGRA, INDIA',
    yearBuilt: '1631 – 1648',
    category: 'MASONRY & TIMBER WELL MATRIX',
    image: 'assets/taj_mahal_hero_1786952629009.jpg',
    engineeringSignificance: 'Famous for bilateral symmetry, subterranean ebony timber well foundation matrix, and double-shell marble dome.',
    keyMaterials: ['Makrana White Marble', 'Red Sandstone', 'Ebony Timber Wells', 'Surkhi Mortar'],
    structuralSystem: 'Deep Well Masonry Foundation + Double Shell Marble Dome',
    primaryChallenge: 'Preventing differential settlement on Yamuna river silt.',
    blueprintSpecs: {
      height: '73 Meters',
      foundationType: 'Submerged Wooden Well Matrix (Yamuna Riverbed)',
      loadType: 'Gravity Compression & Arch Thrust',
      keyFeature: 'Double Shell Dome & 4° Outward-Tilted Minarets'
    }
  },
  {
    id: 'eiffel-tower',
    name: 'EIFFEL TOWER',
    location: 'PARIS, FRANCE',
    yearBuilt: '1887 – 1889',
    category: 'WROUGHT IRON LATTICE',
    image: 'assets/eiffel_tower_1786952654991.jpg',
    engineeringSignificance: 'Iconic open-lattice puddling iron structure engineered to withstand high wind shear through dynamic mathematical aerodynamics.',
    keyMaterials: ['Puddled Wrought Iron', 'Rivets (2.5 Million)', 'Concrete Caissons'],
    structuralSystem: 'Open Wrought Iron Lattice Framework',
    primaryChallenge: 'Minimizing wind drag while supporting self-weight during 300m vertical erection.',
    blueprintSpecs: {
      height: '330 Meters',
      foundationType: 'Concrete & Masonry Caissons',
      loadType: 'Aerodynamic Wind Drag & Axial Compression',
      keyFeature: 'Hydraulically Adjusted Foundation Legs'
    }
  },
  {
    id: 'empire-state-building',
    name: 'EMPIRE STATE BUILDING',
    location: 'NEW YORK, USA',
    yearBuilt: '1930 – 1931',
    category: 'RIVETED STEEL FRAME HIGH-RISE',
    image: 'assets/empire_state_building_1786957986269.jpg',
    engineeringSignificance: 'Pioneered fast-track modular steel erection velocity (4.5 floors built per week).',
    keyMaterials: ['Structural Steel (57,000 Tons)', 'Indiana Limestone', 'Granite'],
    structuralSystem: 'Rigid Riveted Steel Frame with Braced Bays',
    primaryChallenge: 'Erecting 102 stories in 13.5 months with precise vertical alignment.',
    blueprintSpecs: {
      height: '381 Meters (443M to Tip)',
      foundationType: 'Steel Grillage Footings on Manhattan Bedrock',
      loadType: 'Gravity Dead Load & Dynamic Wind Load',
      keyFeature: 'Fast-Track Modular Steel Assembly Line'
    }
  },
  {
    id: 'petronas-towers',
    name: 'PETRONAS TOWERS',
    location: 'KUALA LUMPUR, MALAYSIA',
    yearBuilt: '1993 – 1996',
    category: 'TWIN TOWER STEEL SKYBRIDGE',
    image: 'assets/petronas_towers_1786959902983.jpg',
    engineeringSignificance: 'Supertall twin towers connected by a flexible double-decker skybridge engineered to absorb sway.',
    keyMaterials: ['High-Strength Concrete', 'Structural Steel', 'Laminated Glass'],
    structuralSystem: 'High-Strength Concrete Core & Frame + Flexible Skybridge',
    primaryChallenge: 'Anchoring massive foundations through deep irregular limestone bedrock.',
    blueprintSpecs: {
      height: '452 Meters',
      foundationType: '120M Deep Concrete Friction Piles',
      loadType: 'Wind Bending & Differential Tower Sway',
      keyFeature: 'Self-Supported Flexible Skybridge'
    }
  },
  {
    id: 'shanghai-tower',
    name: 'SHANGHAI TOWER',
    location: 'SHANGHAI, CHINA',
    yearBuilt: '2008 – 2015',
    category: 'TWISTING DOUBLE-SKIN HIGH-RISE',
    image: 'assets/shanghai_tower_1786959932491.jpg',
    engineeringSignificance: 'Features a 120-degree twisting exterior glass skin that reduces wind loads by 24%.',
    keyMaterials: ['Reinforced Concrete Core', 'Structural Steel', 'Double Glass Wall'],
    structuralSystem: 'Concrete Core with Outriggers & Twisting Curtain Wall',
    primaryChallenge: 'Resisting typhoon wind gusts and soft alluvial Shanghai clay.',
    blueprintSpecs: {
      height: '632 Meters',
      foundationType: '955 Bored Concrete Piles Sunk 86M Deep',
      loadType: 'Typhoon Wind Shear & Torsional Bending',
      keyFeature: '120° Aerodynamic Twist Double Skin'
    }
  },
  {
    id: 'one-world-trade-center',
    name: 'ONE WORLD TRADE CENTER',
    location: 'NEW YORK, USA',
    yearBuilt: '2006 – 2014',
    category: 'HYBRID CONCRETE CORE & STEEL SPIRE',
    image: 'assets/one_world_trade_center_1786960177653.jpg',
    engineeringSignificance: 'Benchmark in blast-resistant civil engineering, featuring a ultra-thick reinforced concrete base plinth and chamfered glass geometry.',
    keyMaterials: ['14,000 psi High-Strength Concrete', 'Structural Steel', 'Blast-Resistant Glass'],
    structuralSystem: 'Ultra-Dense Reinforced Concrete Core + Perimeter Steel Moment Frame',
    primaryChallenge: 'Engineered to withstand extreme impact, blast pressure, and wind forces.',
    blueprintSpecs: {
      height: '541 Meters (1,776 Feet)',
      foundationType: 'Massive Concrete Footings Sunk into Bedrock',
      loadType: 'Blast Impact Resistance & High Altitude Wind',
      keyFeature: 'Ultra-Dense Core & Chamfered Facade'
    }
  }
];

export const FORCE_CONCEPTS: ForceConcept[] = [
  {
    id: 'load',
    name: 'GRAVITY DEAD LOAD',
    symbol: 'W = mg',
    description: 'The vertical downward load exerted by static mass (steel framing, concrete core, floors, facade glass).',
    loadBehavior: 'Transferred vertically down through perimeter megacolumns and central core into bedrock.',
    towerExample: 'The heavy concrete core carries over 60% of total vertical gravity dead load.',
    vectorDirection: 'Downward (↓)',
    color: '#38bdf8'
  },
  {
    id: 'compression',
    name: 'AXIAL COMPRESSION',
    symbol: 'σ = F / A',
    description: 'Squeezing stress along vertical columns and core walls under immense weight.',
    loadBehavior: 'Steel box columns filled with C80 concrete resist massive compressive loads.',
    towerExample: 'Lower-level megacolumns experience over 80 MPa of axial compressive stress.',
    vectorDirection: 'Inward Squeezing (→ ←)',
    color: '#10b981'
  },
  {
    id: 'tension',
    name: 'TENSION & WIND BENDING',
    symbol: 'σ_t = M·y / I',
    description: 'Pulling stress on the windward side of tall structures as wind tries to tip the tower.',
    loadBehavior: 'Outrigger trusses transfer tension from central core to outer steel megacolumns.',
    towerExample: 'Steel outrigger trusses engage windward columns in tension during storms.',
    vectorDirection: 'Outward Pulling (← →)',
    color: '#ef4444'
  },
  {
    id: 'shear',
    name: 'LATERAL WIND & SEISMIC SHEAR',
    symbol: 'τ = V·Q / I·b',
    description: 'Horizontal shear force caused by high-velocity wind gusts or ground earthquake motion.',
    loadBehavior: 'Dense concrete core shear walls absorb horizontal shear and prevent lateral displacement.',
    towerExample: 'Central core walls resist multi-meganewton lateral wind shear along upper floors.',
    vectorDirection: 'Parallel Sliding (↑ ↓)',
    color: '#f59e0b'
  },
  {
    id: 'stability',
    name: 'LATERAL STABILITY & CORE OVERTURNING',
    symbol: 'ΣF = 0, ΣM = 0',
    description: 'Equilibrium balancing overturning moments created by dynamic wind loads.',
    loadBehavior: 'Outriggers + Friction pile raft provide immense overturning moment resistance.',
    towerExample: 'Deep bedrock friction piles counteract overturning uplift on the tower footprint.',
    vectorDirection: 'Balanced Equilibrium (⚖)',
    color: '#06b6d4'
  }
];

export const RESEARCH_CATEGORIES: ResearchCategory[] = [
  {
    id: 'structural-system',
    title: '01. STRUCTURAL SYSTEM',
    subtitle: 'How does the structure carry its loads?',
    description: 'Analyze whether the landmark relies on load-bearing masonry walls, steel moment frames, concrete cores, post-tensioned cables, or hybrid shell systems.',
    questionsToAnswer: [
      'What is the primary load-resisting system (axial, frame, arch, shear wall, shell)?',
      'How are vertical gravity loads transferred from roof to ground?',
      'How does the structure resist lateral forces (wind and seismic loads)?'
    ]
  },
  {
    id: 'materials',
    title: '02. MATERIALS SCIENCE',
    subtitle: 'What materials were used and why?',
    description: 'Investigate material selection, compressive strengths, tensile limits, thermal properties, and durability under environmental exposure.',
    questionsToAnswer: [
      'Why was each primary material chosen by the builders or structural engineers?',
      'What are the mechanical properties (compressive/tensile strength, density, elasticity)?',
      'How do the materials perform under weathering, corrosion, or fire?'
    ]
  },
  {
    id: 'construction-method',
    title: '03. CONSTRUCTION METHODOLOGY',
    subtitle: 'How was it actually constructed step by step?',
    description: 'Trace the physical erection process, from falsework/scaffolding techniques and arch centering to modern pre-fabrication and crane staging.',
    questionsToAnswer: [
      'What construction sequencing was used from foundation to pinnacle?',
      'What temporary support systems (scaffolding, formwork, centering) were required?',
      'Were prefabricated components or on-site casting methods used?'
    ]
  },
  {
    id: 'machinery',
    title: '04. MACHINERY & EQUIPMENT',
    subtitle: 'What tools and equipment powered the build?',
    description: 'Examine the technological machinery used—from historical earthen ramps, pulleys, and animal treadmills to modern tower cranes and concrete pumps.',
    questionsToAnswer: [
      'What lifting, excavation, or mixing machinery was deployed on site?',
      'How were heavy structural components transported to higher elevations?',
      'What equipment innovations were specially developed for this specific project?'
    ]
  },
  {
    id: 'stages',
    title: '05. CONSTRUCTION STAGES',
    subtitle: 'How did construction progress over time?',
    description: 'Break down the project timeline into distinct physical phases: site excavation, foundation, structural framework, enclosure, and architectural finish.',
    questionsToAnswer: [
      'What were the major milestone phases and durations of construction?',
      'How were logistics, site access, and material stockpiling managed during each stage?',
      'What critical path dependencies dictated the construction schedule?'
    ]
  },
  {
    id: 'challenges',
    title: '06. ENGINEERING CHALLENGES',
    subtitle: 'What unforeseen problems were encountered?',
    description: 'Detail severe real-world obstacles such as poor ground soil, extreme weather, site constraints, height limits, or material shortages.',
    questionsToAnswer: [
      'What ground, climate, geometric, or structural failures threatened the project?',
      'How did site conditions complicate foundation or structural assembly?',
      'What unforeseen engineering risks emerged during active construction?'
    ]
  },
  {
    id: 'solutions',
    title: '07. INNOVATIVE SOLUTIONS',
    subtitle: 'How were the engineering problems solved?',
    description: 'Highlight the clever engineering inventions, structural adaptations, structural redesigns, or site safety innovations that saved the landmark.',
    questionsToAnswer: [
      'What custom engineering solutions or inventions resolved the major challenges?',
      'How did the solution improve structural performance, safety, or longevity?',
      'What modern engineering lessons were derived from this breakthrough?'
    ]
  }
];

export const MACHINERY_ITEMS: MachineryItem[] = [
  {
    id: 'tower-cranes',
    title: 'Self-Climbing Tower Cranes',
    category: 'LIFTING & ERECTION',
    role: 'Hoisting heavy structural steel columns, outrigger trusses, and facade panels up high-rise building faces.',
    modernEquivalent: 'High-Capacity Self-Climbing Hydraulic Cranes (e.g. Favelle Favco)',
    historicalContext: 'Attached directly to the concrete core and self-climb upward as floor levels advance.'
  },
  {
    id: 'concrete-pumps',
    title: 'High-Pressure Concrete Pumps',
    category: 'CONCRETE DELIVERY',
    role: 'Pumping self-consolidating liquid concrete hundreds of meters vertically to pour core shear walls.',
    modernEquivalent: 'High-Pressure Trailer Pumps (e.g. Putzmeister 7000)',
    historicalContext: 'Operates continuously through heavy-gauge vertical steel pipeline trunks.'
  },
  {
    id: 'mobile-cranes',
    title: 'Heavy Mobile Cranes & Rigging',
    category: 'GROUND & PODIUM LOGISTICS',
    role: 'Offloading steel shipments, assembling crane bases, and setting foundation pile cages.',
    modernEquivalent: 'All-Terrain Hydraulic Telescopic Cranes',
    historicalContext: 'Essential for ground-level stockpiling and rapid site material staging.'
  },
  {
    id: 'facade-systems',
    title: 'Curtain Wall Rigging & BMU Units',
    category: 'ENCLOSURE INSTALLATION',
    role: 'Precision placement of prefabricated double-glazed glass curtain wall panels.',
    modernEquivalent: 'Monorail Facade Installation Hoists & Spider Cranes',
    historicalContext: 'Allows rapid exterior enclosure without requiring full perimeter scaffolding.'
  },
  {
    id: 'surveying',
    title: 'Laser & GPS Total Stations',
    category: 'PRECISION & VERTICALITY',
    role: 'Ensuring millimeter-level vertical alignment (plumbness) across 100+ stories.',
    modernEquivalent: 'Robotic Laser Total Stations & Satellite GPS Receiver Nodes',
    historicalContext: 'Prevents structural tilt during core climb and steel erection.'
  },
  {
    id: 'excavators',
    title: 'Heavy Excavators & Piling Rigs',
    category: 'FOUNDATION DRILLING',
    role: 'Drilling deep friction pile shafts into bedrock and excavating foundation basements.',
    modernEquivalent: 'Rotary Hydraulic Piling Rigs (Bauer BG Rigs)',
    historicalContext: 'Bores vertical shafts down to hard rock strata prior to concrete pouring.'
  }
];

export const MATERIAL_ITEMS: MaterialItem[] = [
  {
    id: 'steel',
    name: 'STRUCTURAL STEEL',
    structuralRole: 'Primary flexural framework, outrigger trusses, floor beams, and spire framing.',
    engineeringPurpose: 'Provides high strength-to-weight ratio, exceptional tensile ductility, and precise modular assembly.',
    keyProperties: ['Yield Strength: 355-550 MPa', 'Ductility: High Elongation', 'Modulus of Elasticity: 200 GPa']
  },
  {
    id: 'concrete',
    name: 'HIGH-PERFORMANCE REINFORCED CONCRETE',
    structuralRole: 'Central shear core walls, foundation raft slab, and composite column fill.',
    engineeringPurpose: 'Provides massive compressive capacity, thermal mass, dynamic dampening, and fire resistance.',
    keyProperties: ['Compressive Strength: 80-120 MPa', 'Self-Consolidating Flow', 'High Elastic Modulus']
  },
  {
    id: 'reinforcement',
    name: 'HIGH-YIELD REINFORCING STEEL (REBAR)',
    structuralRole: 'Cast inside concrete shear walls, foundation rafts, and columns.',
    engineeringPurpose: 'Resists internal tensile and shear stresses, binding concrete against brittle cracking.',
    keyProperties: ['Deformed High-Yield Bars', 'Tensile Limit: 500+ MPa', 'Bond Stress Capacity']
  },
  {
    id: 'glass',
    name: 'DOUBLE-GLAZED LOW-E CURTAIN WALL GLASS',
    structuralRole: 'Building exterior cladding and wind-resistant thermal envelope.',
    engineeringPurpose: 'Withstands extreme wind suction loads while insulating against solar heat gain.',
    keyProperties: ['Laminated Safety Glass', 'Wind Pressure Rated: >5 kPa', 'Low-Emissivity Coating']
  },
  {
    id: 'aluminium',
    name: 'ARCHITECTURAL ALUMINIUM EXTRUSIONS',
    structuralRole: 'Curtain wall mullions, facade mounting brackets, and spandrel panels.',
    engineeringPurpose: 'Lightweight, corrosion-resistant framing that holds curtain wall glass securely to floor slabs.',
    keyProperties: ['Lightweight Density: 2.7 g/cm³', 'Anodized Weather Finish', 'High Extrusion Versatility']
  }
];

export const CHALLENGE_ITEMS: ChallengeItem[] = [
  {
    id: 'wind-vortex',
    title: 'HIGH-ALTITUDE WIND & VORTEX SHEDDING',
    category: 'AERODYNAMICS',
    problem: 'Extreme wind gusts at tall elevations create low-pressure vortices that cause severe horizontal sway.',
    engineeringChallenge: 'Damping sway to protect structural joints and prevent occupant motion discomfort.',
    solution: 'Engineers utilize aerodynamic chamfered corners, tuned mass dampers, and Y-shape/twisting building profiles that disrupt wind vortices.'
  },
  {
    id: 'foundation-soil',
    title: 'IMMENSE GRAVITY LOAD & SOIL BEARING',
    category: 'FOUNDATION ENGINEERING',
    problem: 'Concentrating hundreds of thousands of tons over a compact city footprint.',
    engineeringChallenge: 'Preventing ground compression failure or uneven differential settlement.',
    solution: 'Drilling deep friction piles directly into bedrock and capping them with a massive 4-meter thick reinforced concrete raft.'
  },
  {
    id: 'seismic-shear',
    title: 'EARTHQUAKE LATERAL ACCELERATION',
    category: 'SEISMIC RESISTANCE',
    problem: 'Ground shaking exerts intense horizontal acceleration forces across vertical column lines.',
    engineeringChallenge: 'Providing flexible ductility so the structure absorbs energy without brittle failure.',
    solution: 'Coupling reinforced concrete shear walls with flexible steel moment frames and ductile outrigger joints.'
  },
  {
    id: 'construction-logistics',
    title: 'VERTICAL MATERIAL TRANSPORT & SAFETY',
    category: 'SITE LOGISTICS',
    problem: 'Moving thousands of tons of steel, glass, and concrete 400+ meters into the air safely.',
    engineeringChallenge: 'Maintaining tight fast-track schedules without compromising site safety or crane stability.',
    solution: 'Deploying self-climbing hydraulic tower cranes and automated slipform core pouring systems.'
  }
];

export const INNOVATION_ITEMS: InnovationItem[] = [
  {
    id: 'inno-1',
    challenge: 'Supporting massive cantilevered observation helipad overhangs without ground pillars',
    idea: 'Anchor cantilever steel framing into central post-tensioned shear wall core',
    solution: 'Transfers heavy bending moment directly back to concrete core outriggers.'
  },
  {
    id: 'inno-2',
    challenge: 'Constructing non-repeating freeform concrete roof sails for Sydney Opera House',
    idea: 'Derive all varying roof sail curves from the surface geometry of a single 75m sphere',
    solution: 'Allowed precasting identical concrete rib segments in a factory setup, revolutionizing prefabrication economics.'
  },
  {
    id: 'inno-3',
    challenge: 'Pumping self-consolidating concrete 600m high in 45°C Dubai summer heat',
    idea: 'Add ice to the concrete mix and pump exclusively at night',
    solution: 'Prevented premature concrete flash-setting in the delivery pipes and guaranteed structural strength.'
  }
];

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    slideNumber: 1,
    title: 'TITLE & LANDMARK OVERVIEW',
    focus: 'Introduction & Identity',
    recommendedVisuals: ['High-res photo of structure', 'Location map', 'Building metadata summary'],
    keyTechnicalContent: 'Landmark name, location, build period, structural category, and lead engineers/architects.'
  },
  {
    slideNumber: 2,
    title: 'PURPOSE, HISTORICAL CONTEXT & SCALE',
    focus: 'Demands & Physical Metrics',
    recommendedVisuals: ['Dimensional height comparison diagram', 'Historical timeline'],
    keyTechnicalContent: 'Height, floor count, dead weight, building function, and urban engineering significance.'
  },
  {
    slideNumber: 3,
    title: 'PRIMARY STRUCTURAL SYSTEM',
    focus: 'Load Path Architecture',
    recommendedVisuals: ['Structural skeleton / wireframe', 'Load vector arrows'],
    keyTechnicalContent: 'Classification of structural system (concrete core, steel frame, shear wall, outrigger, shell).'
  },
  {
    slideNumber: 4,
    title: 'FOUNDATION ENGINEERING',
    focus: 'Subsurface Load Transfer',
    recommendedVisuals: ['Sub-surface pile raft cross-section diagram', 'Geotechnical soil profile'],
    keyTechnicalContent: 'Foundation type (pile raft, caisson, timber wells), soil bearing capacity, and settlement solutions.'
  },
  {
    slideNumber: 5,
    title: 'CONSTRUCTION STAGES & FLOW',
    focus: 'Sequencing & Milestones',
    recommendedVisuals: ['5-stage timeline infographic', 'Construction staging photos'],
    keyTechnicalContent: 'Phase 1 Site prep -> Phase 2 Foundation -> Phase 3 Core/Framework -> Phase 4 Facade -> Phase 5 Finish.'
  },
  {
    slideNumber: 6,
    title: 'KEY STRUCTURAL COMPONENTS',
    focus: 'Element Breakdown',
    recommendedVisuals: ['Annotated blueprint callouts'],
    keyTechnicalContent: 'Detailed breakdown of columns, core shear walls, outriggers, floor slabs, or spires.'
  },
  {
    slideNumber: 7,
    title: 'MATERIALS & MECHANICAL PROPERTIES',
    focus: 'Materials Science',
    recommendedVisuals: ['Material property table (Compressive/Tensile strength)'],
    keyTechnicalContent: 'Material selection rationale, stress limits, concrete mix designs, and weather durability.'
  },
  {
    slideNumber: 8,
    title: 'MACHINERY & CONSTRUCTION EQUIPMENT',
    focus: 'Site Tools & Logistics',
    recommendedVisuals: ['Tower crane / concrete pump diagrams'],
    keyTechnicalContent: 'Self-climbing cranes, high-pressure pumps, slipform systems, and hoists deployed on site.'
  },
  {
    slideNumber: 9,
    title: 'MAJOR ENGINEERING CHALLENGES',
    focus: 'Problem Identification',
    recommendedVisuals: ['Problem vs Risk callout graphics'],
    keyTechnicalContent: 'High wind drag, seismic acceleration, soil bearing limits, or tight urban site constraints.'
  },
  {
    slideNumber: 10,
    title: 'INNOVATIVE ENGINEERING SOLUTIONS',
    focus: 'Breakthrough Technical Inventions',
    recommendedVisuals: ['Before/After solution diagram', 'Engineering detail schematic'],
    keyTechnicalContent: 'How engineers solved the specific challenges through innovative structural design or site techniques.'
  },
  {
    slideNumber: 11,
    title: 'SAFETY & SUSTAINABILITY PRACTICES',
    focus: 'Risk & Eco-Efficiency',
    recommendedVisuals: ['Safety framework checklist', 'Eco metrics'],
    keyTechnicalContent: 'Worker safety measures, structural safety factors, waste reduction, material longevity, and sustainability.'
  },
  {
    slideNumber: 12,
    title: 'CONCLUSION & ENGINEERING LESSONS',
    focus: 'Key Takeaways & Summary',
    recommendedVisuals: ['Iconic structure night visual', 'Takeaway points'],
    keyTechnicalContent: 'Summary of how the structure pushed civil engineering forward and its lasting impact on modern practice.'
  }
];

export const JUDGE_QUESTIONS: QuestionCategory[] = [
  {
    category: 'MATERIAL SELECTION',
    question: 'Why did the original engineers select this specific material over available structural alternatives?',
    purpose: 'Tests team\'s depth of materials science understanding and historical context.',
    engineerDefenseHint: 'Cite specific properties like compressive strength, local availability, durability against river humidity, or thermal coefficient.'
  },
  {
    category: 'LOAD TRANSFER PATH',
    question: 'Trace how lateral wind shear on the highest point is transferred down to the subterranean foundation.',
    purpose: 'Evaluates structural mechanics comprehension and force vector analysis.',
    engineerDefenseHint: 'Walk through the load path: Roof shell -> Ring beam -> Octagonal piers -> Base plinth -> Foundation wells -> Subsoil.'
  },
  {
    category: 'FOUNDATION BEHAVIOR',
    question: 'What would happen to the foundation if groundwater levels drop dramatically around the site?',
    purpose: 'Challenges soil mechanics and geotechnical engineering knowledge.',
    engineerDefenseHint: 'Explain how timber preservation relies on anaerobic water submersion; lowering water exposes wood to oxygen and rot.'
  },
  {
    category: 'ENGINEERING ALTERNATIVES',
    question: 'If you were rebuilding this structure today using modern technology, what single component would you redesign?',
    purpose: 'Assesses critical engineering thinking, innovation, and modern civil engineering knowledge.',
    engineerDefenseHint: 'Propose replacing heavy masonry cores with high-strength reinforced concrete or post-tensioned cable stay systems.'
  }
];

export const EVALUATION_CRITERIA: EvaluationCriterion[] = [
  {
    id: 'accuracy',
    title: 'TECHNICAL ACCURACY',
    description: 'Precision of engineering terminology, structural load paths, force concepts, and architectural specs.',
    focusAreas: ['Correct structural terminology', 'Accurate load path description', 'Precise material properties']
  },
  {
    id: 'research',
    title: 'RESEARCH DEPTH',
    description: 'Thoroughness in uncovering historical construction details, machinery, stage breakdown, and foundation methods.',
    focusAreas: ['Uncovered rare engineering facts', 'Complete construction sequence', 'Detailed site machinery analysis']
  },
  {
    id: 'understanding',
    title: 'CONSTRUCTIONAL UNDERSTANDING',
    description: 'Clear grasp of real-world construction practices, temporary works, site logistics, safety, and challenges.',
    focusAreas: ['Scaffolding & formwork logic', 'Geotechnical awareness', 'Real-world logistics comprehension']
  },
  {
    id: 'presentation',
    title: 'PRESENTATION QUALITY',
    description: 'Visual appeal, slide structure, clear diagrams, blueprint callouts, and engaging technical storytelling.',
    focusAreas: ['Professional blueprint slide aesthetics', 'Effective technical diagrams', 'Clear slide hierarchy']
  },
  {
    id: 'clarity',
    title: 'CLARITY & DEFENSE',
    description: 'Verbal communication, confidence, and technical accuracy during Q&A interaction with judges.',
    focusAreas: ['Articulate defense of engineering choices', 'Equal participation by both team members', 'Direct concise answers']
  }
];
