/* ==========================================================================
   MOCK DATABASES (PLAYERS & TEAMS) - COMPLYING WITH ACCURACY DIRECTIVES
   ========================================================================== */
const PLAYERS_DATABASE = [
  // Already Sold Players (for grid initialization - DEMO ONLY)
  { id: 1, name: "Demo Batter A", role: "batter", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹15.00 Cr", bidder: "TEAM 01", status: "sold", matches: 237, runs: 7263, sr: 130.0 },
  { id: 2, name: "Demo Bowler A", role: "bowler", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹18.00 Cr", bidder: "TEAM 02", status: "sold", matches: 120, runs: 145, sr: 145.5 },
  { id: 3, name: "Demo Batter B", role: "batter", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹15.00 Cr", bidder: "TEAM 03", status: "sold", matches: 243, runs: 6211, sr: 130.0 },
  { id: 4, name: "Demo Batter C", role: "batter", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹16.00 Cr", bidder: "TEAM 04", status: "sold", matches: 139, runs: 3249, sr: 143.3 },
  { id: 5, name: "Demo All-Rounder A", role: "all-rounder", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹9.50 Cr", bidder: "TEAM 01", status: "sold", matches: 109, runs: 443, sr: 166.0 },
  { id: 6, name: "Demo All-Rounder B", role: "all-rounder", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹14.00 Cr", bidder: "TEAM 02", status: "sold", matches: 124, runs: 2719, sr: 157.6 },
  { id: 7, name: "Demo Wicketkeeper A", role: "wicketkeeper", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹5.00 Cr", bidder: "TEAM 04", status: "sold", matches: 19, runs: 514, sr: 172.3 },
  { id: 8, name: "Demo Bowler B", role: "bowler", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹4.50 Cr", bidder: "TEAM 03", status: "sold", matches: 27, runs: 96, sr: 7.5 },
  
  // Active Bidding Players Simulation Queue (DEMO ONLY)
  { id: 9, name: "Demo Player Alpha", role: "wicketkeeper", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹4.50 Cr", bidder: "TEAM 03", status: "active", matches: 250, runs: 5082, sr: 135.9 },
  { id: 10, name: "Demo Player Beta", role: "batter", country: "Demo Realm", basePrice: "₹1.00 Cr", currentBid: "₹1.00 Cr", bidder: "None", status: "upcoming", matches: 31, runs: 725, sr: 142.1 },
  { id: 11, name: "Demo Player Gamma", role: "all-rounder", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹2.00 Cr", bidder: "None", status: "upcoming", matches: 226, runs: 2692, sr: 128.6 },
  { id: 12, name: "Demo Player Delta", role: "bowler", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹2.00 Cr", bidder: "None", status: "upcoming", matches: 42, runs: 379, sr: 8.5 },
  { id: 13, name: "Demo Player Epsilon", role: "wicketkeeper", country: "Demo Realm", basePrice: "₹2.00 Cr", currentBid: "₹2.00 Cr", bidder: "None", status: "upcoming", matches: 118, runs: 4163, sr: 134.4 }
];

const TEAMS_DATABASE = {
  "TEAM 01": { id: "mjolnir", purse: 75.50, spent: 24.50, count: 2, roster: ["Demo Batter A", "Demo All-Rounder A"] },
  "TEAM 02": { id: "TEAM 02", purse: 68.00, spent: 32.00, count: 2, roster: ["Demo Bowler A", "Demo All-Rounder B"] },
  "TEAM 03": { id: "titans", purse: 80.50, spent: 19.50, count: 2, roster: ["Demo Batter B", "Demo Bowler B"] },
  "TEAM 04": { id: "stormbringers", purse: 79.00, spent: 21.00, count: 2, roster: ["Demo Batter C", "Demo Wicketkeeper A"] }
};

const RIVAL_FRANCHISES = ["TEAM 01", "TEAM 02", "TEAM 03", "TEAM 04"];

/* ==========================================================================
   APP CONTROLLER STATE
   ========================================================================== */
let activeQueueIndex = 8; // Pointer to Demo Player Alpha
let currentBiddingPlayer = PLAYERS_DATABASE[activeQueueIndex];

let timerInterval = null;
let timerSecondsMax = 15;
let timerSecondsRemaining = 15;
let rivalBidTimeout = null;
let showAllPlayers = false;

// Convert string "₹4.50 Cr" to float
function parseBidToFloat(bidStr) {
  return parseFloat(bidStr.replace("₹", "").replace(" Cr", "").trim());
}

// Convert float to string "₹4.70 Cr"
function formatFloatToBid(bidFloat) {
  return "₹" + bidFloat.toFixed(2) + " Cr";
}

/* ==========================================================================
   1. LIVE AUCTION SIMULATOR ENGINE (DEMO DESIGN)
   ========================================================================== */
const hudPlayerRole = document.getElementById("hud-player-role");
const hudPlayerCountry = document.getElementById("hud-player-country");
const hudPlayerName = document.getElementById("hud-player-name");
const hudPlayerAvatarIcon = document.getElementById("hud-player-avatar-icon");
const hudStatMatches = document.getElementById("hud-stat-matches");
const hudStatRuns = document.getElementById("hud-stat-runs");
const hudStatSr = document.getElementById("hud-stat-sr");
const hudBasePrice = document.getElementById("hud-base-price");
const hudCurrentBid = document.getElementById("hud-current-bid");
const hudHighestBidder = document.getElementById("hud-highest-bidder");
const bidTimerSeconds = document.getElementById("bid-timer-seconds");
const timerProgressRing = document.getElementById("timer-progress-ring");
const bidHistoryList = document.getElementById("bid-history-list");
const tickerNews = document.getElementById("ticker-news");
const btnBidNow = document.getElementById("btn-bid-now");
const stormFlash = document.getElementById("storm-flash");

// Set role icons based on player's role
function getRoleIconClass(role) {
  switch(role) {
    case "batter": return "fa-cricket-bat-ball";
    case "bowler": return "fa-baseball";
    case "all-rounder": return "fa-bolt-lightning";
    case "wicketkeeper": return "fa-hands-holding";
    default: return "fa-user-ninja";
  }
}

// Load Player into Arena HUD
function loadPlayerToArena(player) {
  currentBiddingPlayer = player;
  
  if (hudPlayerRole) hudPlayerRole.innerHTML = `<i class="fa-solid ${getRoleIconClass(player.role)}"></i> ${player.role.toUpperCase()}`;
  if (hudPlayerCountry) hudPlayerCountry.innerHTML = `<i class="fa-solid fa-globe"></i> ${player.country.toUpperCase()}`;
  if (hudPlayerName) hudPlayerName.innerText = player.name.toUpperCase();
  if (hudBasePrice) hudBasePrice.innerText = player.basePrice;
  if (hudCurrentBid) hudCurrentBid.innerText = player.currentBid;
  
  // Set correct stats labels
  const labelA = document.querySelectorAll(".stat-box")[0]?.querySelector(".stat-label");
  const labelB = document.querySelectorAll(".stat-box")[1]?.querySelector(".stat-label");
  const labelC = document.querySelectorAll(".stat-box")[2]?.querySelector(".stat-label");
  
  if (labelA) labelA.innerText = "SIM. MATCHES";
  if (labelB) {
    if (player.role === "bowler") {
      labelB.innerText = "SIM. WICKETS";
    } else {
      labelB.innerText = "SIM. RUNS";
    }
  }
  if (labelC) labelC.innerText = "SIM. STRIKE RATE";
  
  if (hudStatMatches) hudStatMatches.innerText = player.matches;
  if (hudStatRuns) hudStatRuns.innerText = player.runs;
  if (hudStatSr) hudStatSr.innerText = player.sr;
  
  if (hudPlayerAvatarIcon) hudPlayerAvatarIcon.className = `fa-solid ${getRoleIconClass(player.role)}`;
  
  if (bidHistoryList) {
    if (player.bidder === "None") {
      if (hudHighestBidder) {
        hudHighestBidder.innerText = "NO BIDS YET";
        hudHighestBidder.className = "hud-val text-muted";
      }
      bidHistoryList.innerHTML = `<li class="history-item text-center text-muted" style="justify-content: center; width: 100%;">Awaiting opening bid...</li>`;
    } else {
      if (hudHighestBidder) {
        hudHighestBidder.innerText = player.bidder;
        hudHighestBidder.className = "hud-val text-electric";
      }
      bidHistoryList.innerHTML = `
        <li class="history-item">
          <span class="bidder-name text-electric">${player.bidder}</span>
          <span class="bid-amount">${player.currentBid}</span>
        </li>
      `;
    }
  }
  
  // Reset Timer
  timerSecondsRemaining = timerSecondsMax;
  updateTimerUI();
  startTimer();
  updateJourneyFlow(1); // Stage 1: Player Revealed
  
  if (tickerNews) tickerNews.innerText = `⚡ [SIMULATION] NOW ON PANEL: ${player.name.toUpperCase()} (${player.role.toUpperCase()}) | BASE: ${player.basePrice} | AWAITING COMMANDS...`;
}

// Update Timer UI circular track
function updateTimerUI() {
  if (!bidTimerSeconds || !timerProgressRing) return;
  
  bidTimerSeconds.innerText = `00:${timerSecondsRemaining < 10 ? '0' + timerSecondsRemaining : timerSecondsRemaining}`;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (timerSecondsRemaining / timerSecondsMax) * circumference;
  timerProgressRing.style.strokeDashoffset = offset;
  
  if (timerSecondsRemaining <= 3) {
    timerProgressRing.style.stroke = "#ff3333";
    updateJourneyFlow(5); // Stage 5: Hammer Falls
  } else if (timerSecondsRemaining <= 6) {
    timerProgressRing.style.stroke = "var(--color-gold)";
  } else {
    timerProgressRing.style.stroke = "var(--color-electric)";
  }
}

// Timer Loop
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerSecondsRemaining--;
    updateTimerUI();
    
    if (timerSecondsRemaining < 0) {
      clearInterval(timerInterval);
      handleHammerFall();
    }
  }, 1000);
}

// Handle Auction Sold event
function handleHammerFall() {
  if (currentBiddingPlayer.bidder === "None") {
    currentBiddingPlayer.status = "unsold";
    if (tickerNews) tickerNews.innerText = `🔨 [SIMULATION] HAMMER FALLS! ${currentBiddingPlayer.name.toUpperCase()} GOES UNSOLD.`;
    if (hudHighestBidder) {
      hudHighestBidder.innerText = "UNSOLD";
      hudHighestBidder.className = "hud-val text-danger";
    }
    updateJourneyFlow(6); // Stage 6: Unsold / Done
  } else {
    currentBiddingPlayer.status = "sold";
    const soldPriceFloat = parseBidToFloat(currentBiddingPlayer.currentBid);
    const winningTeam = currentBiddingPlayer.bidder;
    
    if (tickerNews) tickerNews.innerText = `🔨 [SIMULATION] SOLD! ${currentBiddingPlayer.name.toUpperCase()} ASSIGNED TO ${winningTeam} FOR ${currentBiddingPlayer.currentBid}!`;
    
    // Deduct budget & update unified War Table Matrix Roster
    if (TEAMS_DATABASE[winningTeam]) {
      const team = TEAMS_DATABASE[winningTeam];
      team.purse -= soldPriceFloat;
      team.spent += soldPriceFloat;
      team.count++;
      team.roster.push(currentBiddingPlayer.name);
      
      updateWarRoomMatrixUI(winningTeam);
    }
    
    updateJourneyFlow(6); // Stage 6: Player Sold
  }
  
  renderPlayersList();
  
  clearTimeout(rivalBidTimeout);
  setTimeout(() => {
    loadNextQueuePlayer();
  }, 4000);
}

// Load Next Player in Bidding Loop
function loadNextQueuePlayer() {
  activeQueueIndex++;
  if (activeQueueIndex >= PLAYERS_DATABASE.length) {
    // Restart active loop queue
    activeQueueIndex = 8;
    PLAYERS_DATABASE[8].status = "active";
    PLAYERS_DATABASE[8].currentBid = "₹4.50 Cr";
    PLAYERS_DATABASE[8].bidder = "TEAM 03";
    
    for (let i = 9; i < PLAYERS_DATABASE.length; i++) {
      PLAYERS_DATABASE[i].status = "upcoming";
      PLAYERS_DATABASE[i].currentBid = PLAYERS_DATABASE[i].basePrice;
      PLAYERS_DATABASE[i].bidder = "None";
    }
  }
  
  const nextPlayer = PLAYERS_DATABASE[activeQueueIndex];
  nextPlayer.status = "active";
  loadPlayerToArena(nextPlayer);
}

// Update War Room unified Matrix Table values
function updateWarRoomMatrixUI(teamName) {
  const team = TEAMS_DATABASE[teamName];
  const suffix = teamName === "TEAM 01" ? "mjolnir" :
                 teamName === "TEAM 02" ? "thunderbolts" :
                 teamName === "TEAM 03" ? "titans" : "stormbringers";
  
  const purseSpan = document.getElementById(`matrix-purse-${suffix}`);
  const spentSpan = document.getElementById(`matrix-spent-${suffix}`);
  const list = document.getElementById(`matrix-list-${suffix}`);
  
  if (purseSpan) purseSpan.innerText = `₹${team.purse.toFixed(2)} Cr`;
  if (spentSpan) spentSpan.innerText = `₹${team.spent.toFixed(2)} Cr`;
  
  if (list) {
    list.innerHTML = "";
    team.roster.forEach(player => {
      const pInfo = PLAYERS_DATABASE.find(p => p.name === player);
      const pRoleStr = pInfo ? `(${pInfo.role.charAt(0).toUpperCase() + pInfo.role.slice(1)})` : "";
      const pPriceStr = pInfo ? ` - ${pInfo.currentBid}` : "";
      
      const li = document.createElement("li");
      li.innerHTML = `<i class="fa-solid fa-circle-check text-electric"></i> ${player} ${pRoleStr}${pPriceStr}`;
      list.appendChild(li);
    });
  }
}

// Bidding Action
function placeUserBid() {
  clearTimeout(rivalBidTimeout);
  
  // Calculate increment
  let bidFloat = parseBidToFloat(currentBiddingPlayer.currentBid);
  const inc = bidFloat >= 5.0 ? 0.50 : 0.20;
  bidFloat += inc;
  
  currentBiddingPlayer.currentBid = formatFloatToBid(bidFloat);
  
  // User represents "TEAM 01"
  const userTeam = "TEAM 01";
  currentBiddingPlayer.bidder = userTeam;
  
  // UI Updates
  if (hudCurrentBid) hudCurrentBid.innerText = currentBiddingPlayer.currentBid;
  if (hudHighestBidder) {
    hudHighestBidder.innerText = userTeam;
    hudHighestBidder.className = "hud-val text-electric";
  }
  
  timerSecondsRemaining = timerSecondsMax;
  updateTimerUI();
  triggerStormFlash();
  
  logBidToHistory(userTeam, currentBiddingPlayer.currentBid);
  
  if (tickerNews) tickerNews.innerText = `⚡ [SIMULATION] NEW BID! ${userTeam} bids ${currentBiddingPlayer.currentBid} for ${currentBiddingPlayer.name.toUpperCase()}!`;
  
  updateJourneyFlow(4); // Stage 4: Teams Battle
  triggerRivalBidQueue();
}

// AI Auto Rival Bid Simulation
function triggerRivalBidQueue() {
  const delay = Math.random() * 2000 + 1500;
  
  rivalBidTimeout = setTimeout(() => {
    const currentLead = currentBiddingPlayer.bidder;
    const candidates = RIVAL_FRANCHISES.filter(t => t !== currentLead);
    const chosenRival = candidates[Math.floor(Math.random() * candidates.length)];
    
    const teamPurse = TEAMS_DATABASE[chosenRival].purse;
    let bidFloat = parseBidToFloat(currentBiddingPlayer.currentBid);
    const inc = bidFloat >= 5.0 ? 0.50 : 0.20;
    const nextBidFloat = bidFloat + inc;
    
    if (teamPurse >= nextBidFloat) {
      currentBiddingPlayer.currentBid = formatFloatToBid(nextBidFloat);
      currentBiddingPlayer.bidder = chosenRival;
      
      if (hudCurrentBid) hudCurrentBid.innerText = currentBiddingPlayer.currentBid;
      if (hudHighestBidder) {
        hudHighestBidder.innerText = chosenRival;
        hudHighestBidder.className = "hud-val text-electric";
      }
      
      timerSecondsRemaining = timerSecondsMax;
      updateTimerUI();
      triggerStormFlash();
      
      logBidToHistory(chosenRival, currentBiddingPlayer.currentBid);
      if (tickerNews) tickerNews.innerText = `⚡ [SIMULATION] COUNTER-BID! ${chosenRival} bids ${currentBiddingPlayer.currentBid} for ${currentBiddingPlayer.name.toUpperCase()}!`;
      
      updateJourneyFlow(4);
    }
  }, delay);
}

// Log helper
function logBidToHistory(bidder, amount) {
  if (!bidHistoryList) return;
  
  const li = document.createElement("li");
  li.className = "history-item";
  li.innerHTML = `
    <span class="bidder-name ${bidder === "TEAM 01" ? "text-electric" : ""}">${bidder}</span>
    <span class="bid-amount">${amount}</span>
  `;
  
  // Remove opening placeholder text if present
  if (bidHistoryList.querySelector(".text-muted")) {
    bidHistoryList.innerHTML = "";
  }
  
  bidHistoryList.insertBefore(li, bidHistoryList.firstChild);
}

// Lightning Flash Overlay
function triggerStormFlash() {
  if (!stormFlash) return;
  stormFlash.classList.add("flash-active");
  setTimeout(() => {
    stormFlash.classList.remove("flash-active");
  }, 600);
}

// Ambient lightning timer (infrequent, random interval)
function initAmbientLightningFlashes() {
  function flash() {
    triggerStormFlash();
    const nextDelay = Math.random() * 15000 + 12000; // random 12s - 27s
    setTimeout(flash, nextDelay);
  }
  setTimeout(flash, 15000);
}

// Timeline progress
function updateJourneyFlow(stepNum) {
  const steps = document.querySelectorAll(".journey-step-card");
  const progressLine = document.getElementById("electric-flow-fill");
  if (!progressLine) return;
  
  steps.forEach(step => {
    const sVal = parseInt(step.getAttribute("data-step"));
    if (sVal <= stepNum) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  
  const percentage = (stepNum / 6) * 100;
  progressLine.style.width = `${percentage}%`;
}

// Setup Event Listeners for Arena
if (btnBidNow) {
  btnBidNow.addEventListener("click", () => {
    placeUserBid();
  });
}

/* ==========================================================================
   2. PLAYERS GRID SYSTEM (FILTER & RENDER) - EDITORIAL & LIMIT 6 ITEMS
   ========================================================================== */
function renderPlayersList(filter = "all") {
  const container = document.getElementById("players-grid");
  if (!container) return;
  container.innerHTML = "";
  
  const filteredPlayers = PLAYERS_DATABASE.filter(p => {
    if (filter === "all") return true;
    return p.role === filter;
  });
  
  // Limit to 6 items unless showAllPlayers is toggled
  let displayPlayers = filteredPlayers;
  const showMoreBtn = document.getElementById("btn-show-more-players");
  
  if (!showAllPlayers && filteredPlayers.length > 6) {
    displayPlayers = filteredPlayers.slice(0, 6);
    if (showMoreBtn) showMoreBtn.style.display = "flex";
  } else {
    if (showMoreBtn) showMoreBtn.style.display = "none";
  }
  
  displayPlayers.forEach(p => {
    const card = document.createElement("div");
    card.className = "player-card";
    
    let statusClass = "upcoming";
    if (p.status === "sold") statusClass = "sold";
    if (p.status === "unsold") statusClass = "unsold";
    
    const statusText = p.status.toUpperCase();
    const statusIcon = p.status === "sold" ? "fa-gavel text-gold" : 
                       p.status === "unsold" ? "fa-ban text-danger" : "fa-clock text-muted";
                       
    const roleIcon = getRoleIconClass(p.role);
    
    // Spacious clean layout (No country text, no matches statistics)
    card.innerHTML = `
      <div class="player-card-header">
        <span class="card-role-tag">
          <i class="fa-solid ${roleIcon}"></i> ${p.role}
        </span>
        <span class="card-status-dot ${statusClass}">
          <i class="fa-solid ${statusIcon}"></i> ${statusText}
        </span>
      </div>
      <div class="player-card-body">
        <h3>${p.name.toUpperCase()}</h3>
      </div>
      <div class="player-card-footer">
        <div class="footer-price-box">
          <span class="label">BASE PRICE</span>
          <span class="val">${p.basePrice}</span>
        </div>
        ${p.status === "sold" ? `
          <div class="card-sold-info">
            <span class="label">SOLD PRICE</span>
            <span class="val">${p.currentBid} (${p.bidder})</span>
          </div>
        ` : ""}
      </div>
    `;
    
    attachCursorHoverEffect(card);
    container.appendChild(card);
  });
}

// Show More Players trigger
const btnShowMorePlayers = document.getElementById("btn-show-more-players");
if (btnShowMorePlayers) {
  btnShowMorePlayers.addEventListener("click", () => {
    showAllPlayers = true;
    const activeFilter = document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "all";
    renderPlayersList(activeFilter);
  });
}

// Category filters
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    // Reset show more threshold on filter change
    showAllPlayers = false;
    
    const filter = btn.getAttribute("data-filter");
    renderPlayersList(filter);
  });
});

/* ==========================================================================
   3. CURSOR ELECTRIC CANVAS COMPONENT
   ========================================================================== */
const canvas = document.getElementById("cursor-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;
const mjolnirCursor = document.getElementById("mjolnir-cursor");

let mouseX = 0;
let mouseY = 0;
let lastMouseX = 0;
let lastMouseY = 0;
let mouseSpeed = 0;
let particles = [];
let cursorTrails = [];
let shockwaves = [];
let isMobile = false;

// Lerp coordinates variables for smooth cursor follow
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

function checkMobile() {
  isMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
  if (!canvas || !mjolnirCursor) return;
  if (isMobile) {
    canvas.style.display = "none";
    mjolnirCursor.style.display = "none";
  } else {
    canvas.style.display = "block";
    mjolnirCursor.style.display = "block";
  }
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", () => {
  checkMobile();
  if (!isMobile) resizeCanvas();
});

window.addEventListener("mousemove", (e) => {
  if (isMobile || !mjolnirCursor) return;
  
  targetX = e.clientX;
  targetY = e.clientY;
  
  const dx = e.clientX - lastMouseX;
  const dy = e.clientY - lastMouseY;
  mouseSpeed = Math.sqrt(dx * dx + dy * dy);
  
  cursorTrails.push({ x: e.clientX, y: e.clientY, opacity: 1.0 });
  if (cursorTrails.length > 12) {
    cursorTrails.shift();
  }
  
  if (mouseSpeed > 2) {
    const sparkCount = Math.min(Math.floor(mouseSpeed / 3), 3);
    for (let i = 0; i < sparkCount; i++) {
      spawnSpark(e.clientX, e.clientY, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
    }
  }
  
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

document.addEventListener("mouseleave", () => {
  if (isMobile || !mjolnirCursor) return;
  mjolnirCursor.style.opacity = 0;
});

// Spark particles
function spawnSpark(x, y, vx, vy, speedFactor = 1) {
  particles.push({
    x: x,
    y: y,
    vx: vx * speedFactor,
    vy: vy * speedFactor,
    size: Math.random() * 2 + 1,
    opacity: 1.0,
    life: Math.random() * 20 + 10,
    color: Math.random() > 0.3 ? "rgba(0, 210, 255, 0.8)" : "rgba(255, 255, 255, 0.95)"
  });
}

// Click shockwave explosion
function triggerRadialElectricBurst(x, y) {
  if (isMobile) return;
  const count = Math.floor(Math.random() * 15 + 15);
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 2;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    spawnSpark(x, y, vx, vy, 1.5);
  }
}

// Canvas Loop (Particles, Trails, Shockwaves, and Mjolnir LERP coordinates)
function drawCanvas() {
  if (isMobile || !ctx || !canvas) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 1. Lerp Mjolnir Cursor coordinates for lag follow physics (48px size offset: -24px X, -10px Y)
  currentX += (targetX - currentX) * 0.25;
  currentY += (targetY - currentY) * 0.25;
  
  if (mjolnirCursor) {
    mjolnirCursor.style.opacity = 1;
    mjolnirCursor.style.left = `${currentX}px`;
    mjolnirCursor.style.top = `${currentY}px`;
  }
  
  // 2. Draw lightning trails on fast movements
  if (cursorTrails.length > 2 && mouseSpeed > 10) {
    ctx.strokeStyle = "rgba(0, 210, 255, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba(0, 210, 255, 0.8)";
    
    ctx.beginPath();
    ctx.moveTo(cursorTrails[0].x, cursorTrails[0].y);
    
    for (let i = 1; i < cursorTrails.length; i++) {
      const pt = cursorTrails[i];
      const jitterX = (Math.random() - 0.5) * 6;
      const jitterY = (Math.random() - 0.5) * 6;
      ctx.lineTo(pt.x + jitterX, pt.y + jitterY);
    }
    ctx.stroke();
    
    ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
  
  // 3. Draw click electric shockwave rings
  shockwaves.forEach((sw) => {
    sw.radius += sw.speed;
    sw.opacity = 1 - (sw.radius / sw.maxRadius);
    
    ctx.strokeStyle = `rgba(0, 210, 255, ${sw.opacity * 0.75})`;
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(0, 210, 255, 0.9)";
    
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
  });
  shockwaves = shockwaves.filter(sw => sw.radius < sw.maxRadius);
  
  // 4. Draw sparkles
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.05; // gravity pull
    p.opacity = p.life > 0 ? p.life / 30 : 0;
    p.life--;
    
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.opacity;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  
  particles = particles.filter(p => p.life > 0);
  ctx.globalAlpha = 1.0;
  
  requestAnimationFrame(drawCanvas);
}

// Hover effects binding
function attachCursorHoverEffect(element) {
  if (isMobile) return;
  element.addEventListener("mouseenter", (e) => {
    if (mjolnirCursor) mjolnirCursor.classList.add("hovering");
    triggerRadialElectricBurst(e.clientX, e.clientY);
  });
  element.addEventListener("mouseleave", () => {
    if (mjolnirCursor) mjolnirCursor.classList.remove("hovering");
  });
}

function initCustomCursorEffects() {
  checkMobile();
  if (!isMobile && canvas) {
    resizeCanvas();
    drawCanvas();
    
    const hoverTargets = document.querySelectorAll('.btn, .btn-bid-now, .player-card, .filter-btn, .journey-step-card, .nav-links a, .war-table-matrix th, .details-block, .power-text-block');
    hoverTargets.forEach(el => attachCursorHoverEffect(el));
    
    // Hammer click swing strike + shockwave
    window.addEventListener("mousedown", (e) => {
      if (isMobile) return;
      if (mjolnirCursor) mjolnirCursor.classList.add("clicking");
      triggerRadialElectricBurst(e.clientX, e.clientY);
      
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: 55,
        speed: 4,
        opacity: 1.0
      });
    });
    
    window.addEventListener("mouseup", () => {
      if (isMobile) return;
      if (mjolnirCursor) mjolnirCursor.classList.remove("clicking");
    });
  }
}

/* ==========================================================================
   4. NAVIGATION & MOBILE HAMBURGER MENU
   ========================================================================== */
const navbar = document.querySelector(".navbar");
const navToggle = document.getElementById("nav-toggle");
const navLinksContainer = document.getElementById("nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  spyScroll();
});

if (navToggle && navLinksContainer) {
  navToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("nav-active");
    const icon = navToggle.querySelector("i");
    if (navLinksContainer.classList.contains("nav-active")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navLinksContainer) navLinksContainer.classList.remove("nav-active");
    if (navToggle) navToggle.querySelector("i").className = "fa-solid fa-bars";
  });
});

function spyScroll() {
  const sections = document.querySelectorAll("section, header");
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      const activeId = section.getAttribute("id");
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${activeId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

/* ==========================================================================
   5. SCROLL-BASED PARALLAX ENGINE
   ========================================================================== */
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const cloud1 = document.getElementById("parallax-clouds-1");
  const cloud2 = document.getElementById("parallax-clouds-2");
  const cloud3 = document.getElementById("parallax-clouds-3");
  const stadium = document.getElementById("parallax-stadium");
  const particlesBg = document.getElementById("parallax-particles");
  
  if (cloud1) cloud1.style.transform = `translateY(${scrolled * 0.15}px) rotate(${scrolled * 0.005}deg)`;
  if (cloud2) cloud2.style.transform = `translateY(${scrolled * 0.22}px) rotate(${scrolled * -0.005}deg)`;
  if (cloud3) cloud3.style.transform = `translateY(${scrolled * 0.08}px)`;
  if (stadium) stadium.style.transform = `translateY(${scrolled * 0.04}px)`;
  if (particlesBg) particlesBg.style.transform = `translateY(${scrolled * -0.12}px)`;
});

/* ==========================================================================
   6. APP INITIALIZATION
   ========================================================================== */
function init() {
  renderPlayersList();
  
  // Init first player in live broadcast
  loadPlayerToArena(PLAYERS_DATABASE[activeQueueIndex]);
  
  // Init custom cursor
  initCustomCursorEffects();
  
  // Init infrequent ambient storm flashes
  initAmbientLightningFlashes();
  
  // Load initial teams matrix rosters
  RIVAL_FRANCHISES.forEach(team => updateWarRoomMatrixUI(team));
}

window.addEventListener("DOMContentLoaded", init);
