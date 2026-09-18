// Master Official IGNITRRON ’26 Dataset with Character Marvel Quotes
// Sequentially Ordered & Numbered: Stations 01-13 (Day 1), Stations 14-23 (Day 2), Stations 24-27 (Two-Day)
// Hero Events: Station 26 (Line Follower Hackathon) & Station 27 (Project J.A.R.V.I.S.)
export const TOTAL_PRIZE_POOL = 300000;

export const EVENTS_DATA = [
  // ==========================================
  // DAY 1 EVENTS (STATIONS 01 – 13)
  // ==========================================
  {
    id: "01",
    title: "Model United Nations Conference",
    heroCharacter: "Nick Fury",
    quote: "There was an idea, to bring together a group of remarkable people.",
    category: "Diplomacy & Debate",
    status: "available",
    url: "/mun-conference/",
    day: "Day 1",
    timing: "10:00 AM - 4:00 PM",
    venue: "Pallavi Hall",
    participants: "50",
    faculty: "Ms. Malavika M P",
    coordinators: [
      { name: "Nithish S", phone: "7305614725" },
      { name: "Bhavana B", phone: "9030870406" },
      { name: "Seshanth V", phone: "9566783359" }
    ],
    prizes: { first: "₹5,000", second: "₹3,000", third: "₹2,000", total: "₹10,000" },
    description: "Simulated Model United Nations conference for global youth leadership.",
    accentColor: "#00D9FF",
    position: [-22, -4, -8]
  },
  {
    id: "02",
    title: "CAD Forge",
    heroCharacter: "Miles Morales",
    quote: "Anyone can wear the mask. You could wear the mask.",
    category: "CAD & Engineering",
    status: "available",
    url: "/mechanical-design-challenge/",
    day: "Day 1",
    timing: "10:00 AM - 1:00 PM",
    venue: "Comm Lab",
    participants: "40",
    faculty: "Mr. Arun Kumar P",
    coordinators: [
      { name: "Paavan Ashok Kumar", phone: "" }
    ],
    prizes: { first: "₹5,000", second: "₹3,000", third: "₹2,000", total: "₹10,000" },
    description: "CAD modelling and structural design challenge.",
    accentColor: "#00D9FF",
    position: [-10, -12, 6]
  },
  {
    id: "03",
    title: "Legacy Code Rescue Challenge",
    heroCharacter: "Ultron",
    quote: "There are no strings on me.",
    category: "Software Engineering",
    status: "available",
    url: "/legacy-code/",
    day: "Day 1",
    timing: "10:00 AM - 4:00 PM",
    venue: "HPC Lab",
    participants: "40 Teams",
    faculty: "Dr. Primya T",
    coordinators: [
      { name: "Sanjai M S", phone: "9342672711" },
      { name: "Monika M", phone: "" },
      { name: "Santhosh M", phone: "" }
    ],
    prizes: { first: "₹5,000", second: "₹3,000", third: "₹2,000", total: "₹10,000" },
    description: "Refactor, optimize, and debug legacy codebases under pressure.",
    accentColor: "#00D9FF",
    position: [-26, 12, -18]
  },
  {
    id: "04",
    title: "Corporate Walk",
    heroCharacter: "Deadpool",
    quote: "Maximum effort!",
    category: "Management & Style",
    status: "available",
    url: "/corporate-walk/",
    day: "Day 1",
    timing: "10:00 AM - 1:00 PM",
    venue: "Gitam Hall",
    participants: "30",
    faculty: "Dr. Rekha P",
    coordinators: [
      { name: "MBA Team", phone: "" }
    ],
    prizes: { first: "₹3,000", second: "₹2,000", third: "₹1,000", total: "₹6,000" },
    description: "Professional corporate personality, attire, and communication showcase.",
    accentColor: "#00D9FF",
    position: [-8, 16, -10]
  },
  {
    id: "05",
    title: "Avengers: The Auction War",
    heroCharacter: "Loki",
    quote: "I am burdened with glorious purpose.",
    category: "Pop Culture Trivia & Strategy",
    status: "available",
    url: "/marvel-quiz/",
    day: "Day 1",
    timing: "10:00 AM - 4:00 PM",
    venue: "Gitam & Care",
    participants: "200",
    faculty: "Mr. Pradeepkumar G",
    coordinators: [
      { name: "Pranav Guru S S", phone: "9047056869" },
      { name: "Phavizhash V", phone: "6381762254" },
      { name: "Kiruthik Pranav T", phone: "8903492564" }
    ],
    prizes: { first: "Trophy", second: "Merch", third: "Certificates", total: "Marvel Pass" },
    description: "Ultimate trivia & bidding battle across Marvel Cinematic Universe and comic lore.",
    accentColor: "#00D9FF",
    position: [-6, 18, 8]
  },
  {
    id: "06",
    title: "Project Presentation",
    heroCharacter: "Mr. Fantastic",
    quote: "Knowledge is the ultimate weapon.",
    category: "Hardware Showcase",
    status: "available",
    url: "/project-presentation/",
    day: "Day 1",
    timing: "10:00 AM - 4:00 PM",
    venue: "EC Class",
    participants: "50",
    faculty: "Dr. Balaji D",
    coordinators: [
      { name: "Sri Nagaarjunan D", phone: "8838375754" },
      { name: "Sanjutha", phone: "9894435108" },
      { name: "Preethika Shree", phone: "7418510077" }
    ],
    prizes: { first: "5 x ₹6,000", second: "5 x ₹5,000", third: "-", total: "₹55,000" },
    description: "Demonstrate working hardware prototypes and innovative engineering models.",
    accentColor: "#00D9FF",
    position: [-28, 6, 2]
  },
  {
    id: "07",
    title: "Game Genesis X IN.ZEROS",
    heroCharacter: "Gambit",
    quote: "Place your bets, mon ami.",
    category: "Game Design",
    status: "available",
    url: "/game-genesis-x/",
    day: "Day 1",
    timing: "9:00 AM - 1:00 PM",
    venue: "CS Galaxy",
    participants: "50",
    faculty: "Mr. Munirathnam T",
    coordinators: [
      { name: "Reshekumar V", phone: "6382833994" },
      { name: "Prajith Sabaris D", phone: "9342398554" },
      { name: "Hemanisha", phone: "9361879997" }
    ],
    prizes: { first: "₹3,000", second: "₹2,000", third: "₹1,000", total: "₹6,000" },
    description: "Pitch and demonstrate original indie game prototypes built in Unity/Unreal.",
    accentColor: "#00D9FF",
    position: [16, -12, -22]
  },
  {
    id: "08",
    title: "Criminal Chronicles 2.0",
    heroCharacter: "Daredevil",
    quote: "A man without hope is a man without fear.",
    category: "Cyber Forensics",
    status: "available",
    url: "/criminal-chronicles/",
    day: "Day 1",
    timing: "9:00 AM - 4:00 PM",
    venue: "Veena, IGN",
    participants: "70",
    faculty: "Dr. Charly Jerome",
    coordinators: [
      { name: "Suriyan S", phone: "7200679937" },
      { name: "Mahima P", phone: "7305635749" },
      { name: "Dinakar S", phone: "9677559454" }
    ],
    prizes: { first: "₹3,000", second: "₹2,000", third: "₹1,000", total: "₹6,000" },
    description: "Investigate digital crime scenes and solve mystery cases using forensic logic.",
    accentColor: "#00D9FF",
    position: [-14, 2, -22]
  },
  {
    id: "09",
    title: "Robo Race",
    heroCharacter: "Quicksilver",
    quote: "You didn't see that coming?",
    category: "Robotics",
    status: "available",
    url: "/robo-race/",
    day: "Day 1",
    timing: "10:00 AM - 4:00 PM",
    venue: "Mech / CS Arena",
    participants: "60",
    faculty: "Dr. Arivazhagan",
    coordinators: [
      { name: "Aravind S", phone: "" }
    ],
    prizes: { first: "₹15,000", second: "₹10,000", third: "₹5,000", total: "₹30,000" },
    description: "Race custom-built mobile bots through treacherous obstacle tracks.",
    accentColor: "#00D9FF",
    position: [-10, 10, -26]
  },
  {
    id: "10",
    title: "Drone Race",
    heroCharacter: "Falcon",
    quote: "On your left.",
    category: "Aerial Robotics",
    status: "available",
    url: "/drone-race/",
    day: "Day 1",
    timing: "10:00 AM - 4:00 PM",
    venue: "Mech / CS Arena",
    participants: "50",
    faculty: "Dr. Arivazhagan",
    coordinators: [
      { name: "Aravind S", phone: "" }
    ],
    prizes: { first: "₹15,000", second: "₹10,000", third: "₹5,000", total: "₹30,000" },
    description: "FPV drone racing tournament through 3D spatial air rings.",
    accentColor: "#00D9FF",
    position: [26, 12, -2]
  },
  {
    id: "11",
    title: "Auto Show",
    heroCharacter: "Ghost Rider",
    quote: "Hellfire burns hot on Phoenix Circle.",
    category: "Automotive Exhibition",
    status: "available",
    url: "/auto-show/",
    day: "Day 1",
    timing: "10:00 AM - 1:00 PM",
    venue: "Phoenix Circle",
    participants: "Dr. Senthil Kumar",
    faculty: "Mechanical Dept",
    coordinators: [
      { name: "Vishal B S", phone: "7397508211" },
      { name: "Sathya R V", phone: "7604903115" },
      { name: "Sarveshwar", phone: "6382412143" }
    ],
    prizes: { first: "Best Custom Bike", second: "Best Supercar", third: "-", total: "Auto Trophy" },
    description: "Exhibition of custom supercars, racing bikes, and EV prototypes.",
    accentColor: "#00D9FF",
    position: [-12, 14, 14]
  },
  {
    id: "12",
    title: "Path Pilot (Line Follower Contest)",
    heroCharacter: "War Machine",
    quote: "Boom! You looking for this? Heavy artillery & autonomous robotics locked on target.",
    category: "Autonomous Robotics",
    status: "available",
    url: "/path-pilot/",
    day: "Day 1",
    timing: "10:00 AM - 4:00 PM",
    venue: "In front of Saaral (Chemical Block)",
    participants: "100",
    faculty: "Dr. Jaikumar R",
    coordinators: [
      { name: "Abishek Chandrasekar", phone: "9698692750" }
    ],
    prizes: { first: "₹5,000", second: "₹3,000", third: "₹2,000", total: "₹10,000" },
    description: "Program high-speed autonomous PID line follower bots.",
    accentColor: "#00D9FF",
    position: [-24, -14, -4]
  },
  {
    id: "13",
    title: "Workshop 1",
    heroCharacter: "Rocket",
    quote: "Ain't no thing like me, except me.",
    category: "Technical Workshop",
    status: "available",
    url: "/workshop-1/",
    day: "Day 1",
    timing: "10:00 AM - 1:00 PM",
    venue: "CS Labs",
    participants: "Open Entry",
    faculty: "CS Department",
    coordinators: [
      { name: "Rithanya C", phone: "9791647499" },
      { name: "Sree Nithy T R", phone: "8220493977" }
    ],
    prizes: { first: "Hands-on Kit", second: "Certificates", third: "-", total: "Skill Pass" },
    description: "Hands-on technical workshop on Next-Gen Web & AI architectures.",
    accentColor: "#00D9FF",
    position: [22, 14, 4]
  },

  // ==========================================
  // DAY 2 EVENTS (STATIONS 14 – 23)
  // ==========================================
  {
    id: "14",
    title: "Paper Presentation",
    heroCharacter: "Hank Pym",
    quote: "It's not about saving our world. It's about saving theirs.",
    category: "Academic Research",
    status: "available",
    url: "/paper-presentation/",
    day: "Day 2",
    timing: "10:00 AM - 4:00 PM",
    venue: "EC Class",
    participants: "100",
    faculty: "Mr. Premkumar T",
    coordinators: [
      { name: "Phavizhash V", phone: "6381762254" },
      { name: "Varun Karthic K A", phone: "6382163323" },
      { name: "Abarna S", phone: "9486015006" }
    ],
    prizes: { first: "5 x ₹4,000", second: "5 x ₹3,000", third: "-", total: "₹35,000" },
    description: "Present academic technical papers across engineering domains.",
    accentColor: "#00D9FF",
    position: [8, -18, -12]
  },
  {
    id: "15",
    title: "Launchpad",
    heroCharacter: "Spider-Man",
    quote: "With great power comes great responsibility.",
    category: "Technical Pitching",
    status: "available",
    url: "/launchpad/",
    day: "Day 2",
    timing: "10:00 AM - 1:00 PM",
    venue: "HPC Lab",
    participants: "50",
    faculty: "Mr. Manikandan P",
    coordinators: [
      { name: "Sanjeev A", phone: "9344136388" },
      { name: "Madhu Rithanya V", phone: "8148304078" },
      { name: "Mahima Pratibha", phone: "" }
    ],
    prizes: { first: "₹3,000", second: "₹2,000", third: "₹1,000", total: "₹6,000" },
    description: "Pitch your groundbreaking project idea in front of industry mentors.",
    accentColor: "#00D9FF",
    position: [-16, 8, 4]
  },
  {
    id: "16",
    title: "Techno Clash – Quiz",
    heroCharacter: "Shuri",
    quote: "Just because something works doesn't mean that it cannot be improved.",
    category: "Technical Quiz",
    status: "available",
    url: "/techno-clash/",
    day: "Day 2",
    timing: "2:00 PM - 4:00 PM",
    venue: "ECE Lab",
    participants: "100",
    faculty: "Mr. Pradeepkumar G",
    coordinators: [
      { name: "Jai Gautham S", phone: "9363210400" }
    ],
    prizes: { first: "₹3,000", second: "₹2,000", third: "₹1,000", total: "₹6,000" },
    description: "High-octane technical quiz testing core engineering and tech concepts.",
    accentColor: "#00D9FF",
    position: [18, 10, -6]
  },
  {
    id: "17",
    title: "StructureX",
    heroCharacter: "Magneto",
    quote: "Peace was never an option.",
    category: "Structural Design",
    status: "available",
    url: "/structure-x/",
    day: "Day 2",
    timing: "10:00 AM - 1:00 PM",
    venue: "Comm Lab",
    participants: "40",
    faculty: "Dr. Dharmaraj",
    coordinators: [
      { name: "Jaswanthini J", phone: "7695985048" }
    ],
    prizes: { first: "₹3,000", second: "₹2,000", third: "₹1,000", total: "₹6,000" },
    description: "Engineering design challenge to construct maximum load-bearing truss bridges.",
    accentColor: "#00D9FF",
    position: [24, -6, -14]
  },
  {
    id: "18",
    title: "Business Model Canvas",
    heroCharacter: "Norman Osborn",
    quote: "You know, I'm something of a scientist myself.",
    category: "Entrepreneurship",
    status: "available",
    url: "/business-model-canvas/",
    day: "Day 2",
    timing: "2:00 PM - 4:00 PM",
    venue: "Mech Class",
    participants: "50",
    faculty: "Dr. Rekha P",
    coordinators: [
      { name: "MBA Team", phone: "" }
    ],
    prizes: { first: "₹5,000", second: "₹3,000", third: "₹2,000", total: "₹10,000" },
    description: "Present viable startup canvas blueprints to venture capitals.",
    accentColor: "#00D9FF",
    position: [20, 4, 8]
  },
  {
    id: "19",
    title: "Research Zero to Hero",
    heroCharacter: "Bruce Banner",
    quote: "That's my secret, Cap. I'm always angry.",
    category: "Research Presentation",
    status: "available",
    url: "/research-zero-to-hero/",
    day: "Day 2",
    timing: "10:00 AM - 4:00 PM",
    venue: "Mech Class",
    participants: "70",
    faculty: "Dr. Subramaniyan R",
    coordinators: [
      { name: "Sanjay Kumar S", phone: "6382098212" },
      { name: "Jai Shree P B", phone: "6383987979" },
      { name: "Rishapthi J", phone: "8637455248" }
    ],
    prizes: { first: "₹5,000", second: "₹3,000", third: "₹2,000", total: "₹10,000" },
    description: "Transform raw research concepts into publishable technical papers.",
    accentColor: "#00D9FF",
    position: [12, -14, 2]
  },
  {
    id: "20",
    title: "Breaking the Build",
    heroCharacter: "Star-Lord",
    quote: "What should we do next? Something good, something bad? Bit of both.",
    category: "Security & QA",
    status: "available",
    url: "/breaking-the-build/",
    day: "Day 2",
    timing: "9:00 AM - 1:00 PM",
    venue: "CS Galaxy",
    participants: "30",
    faculty: "Mr. Munirathnam T",
    coordinators: [
      { name: "Srisanth S", phone: "7826993366" },
      { name: "Sredivit K T", phone: "9363717009" },
      { name: "Dhyan", phone: "9042212896" }
    ],
    prizes: { first: "Trophy", second: "Certificates", third: "-", total: "QA Shield" },
    description: "Penetration testing and stress-testing applications to break production builds.",
    accentColor: "#00D9FF",
    position: [-18, -16, -16]
  },
  {
    id: "21",
    title: "IPL Mega Auction",
    heroCharacter: "Thor",
    quote: "Bring me Thanos!",
    category: "Strategy Simulation",
    status: "available",
    url: "/ipl-mega-auction/",
    day: "Day 2",
    timing: "10:00 AM - 4:00 PM",
    venue: "Gitam & Care",
    participants: "400",
    faculty: "Mr. Santhana Gopala Krishnan",
    coordinators: [
      { name: "Pranav Guru S S", phone: "9047056869" },
      { name: "Sathya R V", phone: "7604903115" },
      { name: "Mirutica S", phone: "9363747699" }
    ],
    prizes: { first: "₹5,000", second: "₹3,000", third: "₹2,000", total: "₹10,000" },
    description: "Real-time sports bidding strategy simulation for cricket team building.",
    accentColor: "#00D9FF",
    position: [-20, -10, 10]
  },
  {
    id: "22",
    title: "MILAN 26",
    heroCharacter: "Captain America",
    quote: "I can do this all day.",
    category: "Flagship Summit",
    status: "available",
    url: "/milan-26/",
    day: "Day 2",
    timing: "10:00 AM - 4:00 PM",
    venue: "Main Grounds",
    participants: "Open Entry",
    faculty: "Event Committee",
    coordinators: [
      { name: "Sports Committee", phone: "" }
    ],
    prizes: { first: "₹7,000", second: "₹5,000", third: "₹3,000", total: "₹15,000" },
    description: "Merging Industry Leaders and Academicians for New Horizons 26.",
    accentColor: "#00D9FF",
    position: [28, -2, -6]
  },
  {
    id: "23",
    title: "Workshop 2",
    heroCharacter: "Vision",
    quote: "A thing isn't beautiful because it lasts. It's a privilege to be among them.",
    category: "Robotics Workshop",
    status: "available",
    url: "/hire-code/",
    day: "Day 2",
    timing: "10:00 AM - 1:00 PM",
    venue: "CS Labs",
    participants: "Open Entry",
    faculty: "ECE Department",
    coordinators: [
      { name: "Sarveshwar S", phone: "6382412143" }
    ],
    prizes: { first: "Hands-on Kit", second: "Certificates", third: "-", total: "Skill Pass" },
    description: "Hands-on workshop on embedded IoT and autonomous drone systems.",
    accentColor: "#00D9FF",
    position: [-4, -20, -8]
  },

  // ==========================================
  // TWO-DAY EVENTS (STATIONS 24 – 27)
  // ==========================================
  {
    id: "24",
    title: "E-Sports Arcade (Walk-in)",
    heroCharacter: "Groot",
    quote: "I am Groot.",
    category: "Gaming Tournament",
    status: "available",
    url: "/e-sports-arcade/",
    day: "Two-Day",
    timing: "10:00 AM - 10:00 PM",
    venue: "BME Path",
    participants: "Walk in",
    faculty: "Mr. Munirathnam T",
    coordinators: [
      { name: "Naveen S", phone: "9952747859" },
      { name: "Rajeswaran D", phone: "7010564643" },
      { name: "Gokul S", phone: "9363266674" }
    ],
    prizes: { first: "Trophy", second: "Goodies", third: "Certificates", total: "Arcade Pass" },
    description: "Competitive multiplayer gaming arena across Valorant, FIFA, and BGMI.",
    accentColor: "#00D9FF",
    position: [14, 16, -16]
  },
  {
    id: "25",
    title: "Japanese Street (Walk-in)",
    heroCharacter: "Ronin",
    quote: "Don't give me hope.",
    category: "Cultural Experience",
    status: "available",
    url: "/japanese-street/",
    day: "Two-Day",
    timing: "10:00 AM - 4:00 PM",
    venue: "CS Space",
    participants: "Walk in",
    faculty: "Dr. Saranya R",
    coordinators: [
      { name: "Sanjeev A", phone: "9344136388" }
    ],
    prizes: { first: "Cosplay Award", second: "Goodies", third: "-", total: "Japan Pass" },
    description: "Immersive Tokyo street experience with anime cosplay, ramen, and gaming.",
    accentColor: "#00D9FF",
    position: [30, 2, -18]
  },
  {
    id: "26",
    title: "Line Follower Hackathon",
    heroCharacter: "Doctor Strange",
    quote: "I went forward in time to view alternate futures. To see all the possible paths.",
    category: "Autonomous Robotics Hackathon",
    isHeroEvent: true,
    status: "available",
    url: "/line-follower/",
    day: "Two-Day",
    timing: "2 Days Non-Stop",
    venue: "ARC Lab & Robotics Arena",
    participants: "150",
    faculty: "Dr. Arivazhagan",
    coordinators: [
      { name: "Abishek Chandrasekar", phone: "9698692750" }
    ],
    prizes: { first: "₹5,000", second: "₹3,000", third: "₹2,000", total: "₹10,000" },
    description: "Flagship autonomous robotics hackathon. Design, calibrate PID algorithms, and conquer intricate high-speed mazes.",
    accentColor: "#00D9FF",
    position: [6, -10, 16]
  },
  {
    id: "27",
    title: "Project J.A.R.V.I.S. (24-Hour Hackathon)",
    heroCharacter: "Tony Stark",
    quote: "Sometimes you gotta run before you can walk.",
    category: "Flagship Software Hackathon",
    isHeroEvent: true,
    status: "available",
    url: "/project-jarvis/",
    day: "Two-Day",
    timing: "24 Hours Non-Stop",
    venue: "Ragam & CS Labs",
    participants: "250",
    faculty: "Dr. Primya T",
    coordinators: [
      { name: "Mithuna Kamalanathan", phone: "6369391539" },
      { name: "Kashnika M", phone: "7845627827" },
      { name: "Vikash L", phone: "9342606806" }
    ],
    prizes: { first: "₹15,000", second: "₹10,000", third: "₹5,000", total: "₹30,000" },
    description: "The flagship 24-hour non-stop industry hackathon. Build real-world solutions under Stark mentors.",
    accentColor: "#00D9FF",
    position: [0, 0, 12]
  }
];

// Clean fallback url resolution
EVENTS_DATA.forEach(evt => {
  if (!evt.url) {
    evt.url = "/coming-soon/";
  }
});
