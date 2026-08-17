/**
 * IGNITRRON - Admin Command Center & Analytics
 * Domain-wise filtering (5 Domains), Team Submissions, Real-time Status and Analytics
 */

(function () {
  const STORAGE_KEY = 'ignitrron_submissions_db';
  const AUTH_SESSION_KEY = 'ignitrron_admin_auth_session';

  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  const VALID_AUTH_HASHES = [
    "e9c4033b00bb80d85ec5b512c5b367098e698ef6e23630f5b40cf393600e12ba", // pymverse2026
    "3f332906ec143890f9b3cf23a776159cbeea8d49a7442ebdfc4371fbfb1c1e54", // hankpym
    "cf699c2770281b369cc4be059f13110996f6424ae15147814b73b22cf2c78672"  // ignitrron2026
  ];

  const DEFAULT_IGNITRRON_MOCKS = [
    {
      submissionId: "IGN-PAP-001",
      timestamp: "2026-03-01T10:15:00Z",
      status: "ACCEPTED",
      teamName: "Quantum Neural Architects",
      leader: {
        fullName: "Aarav Sharma",
        email: "aarav.s@ignitrron.edu",
        mobile: "+91 63817 62254",
        institution: "Department of CSE & AI",
        department: "Artificial Intelligence",
        yearOfStudy: "3rd Year"
      },
      members: [
        { role: "Team Leader", name: "Aarav Sharma" },
        { role: "Member 2", name: "Priya Nair" },
        { role: "Member 3", name: "Rohan Varma" },
        { role: "Member 4", name: "Kavya Ramesh" }
      ],
      paper: {
        title: "Autonomous Swarm Optimization via Quantum Heuristics",
        domainId: "software",
        domainTitle: "SOFTWARE",
        abstractText: "This paper proposes a decentralized quantum-inspired heuristic optimization model for swarm robotics. By utilizing parameterized quantum circuits, latency is reduced by 42% in multi-agent path routing under dynamic obstacle constraints.",
        keywords: ["Quantum Heuristics", "Swarm Robotics", "Distributed AI", "Optimization"],
        fileName: "Quantum_Swarm_IEEE.pdf",
        fileSize: 2450000
      }
    },
    {
      submissionId: "IGN-PAP-002",
      timestamp: "2026-03-02T11:30:00Z",
      status: "ACCEPTED",
      teamName: "Silicon Pulse Array",
      leader: {
        fullName: "Devika Krishnan",
        email: "devika.k@circuits.edu",
        mobile: "+91 63821 63133",
        institution: "Department of ECE & VLSI",
        department: "ECE",
        yearOfStudy: "4th Year"
      },
      members: [
        { role: "Team Leader", name: "Devika Krishnan" },
        { role: "Member 2", name: "Manoj Kumar" },
        { role: "Member 3", name: "Siddharth S" },
        { role: "Member 4", name: "Deepa Ananth" }
      ],
      paper: {
        title: "Ultra Low-Power Sub-Threshold VLSI Architecture for Bio-Sensors",
        domainId: "circuits",
        domainTitle: "CIRCUITS",
        abstractText: "We present an energy-harvesting sub-threshold CMOS logic design operating down to 0.28V supply voltage. Designed for implantable bio-telemetry sensors with 10-year continuous operation lifespans.",
        keywords: ["Sub-Threshold CMOS", "VLSI", "Bio-Telemetry", "Energy Harvesting"],
        fileName: "VLSI_BioTelemetry_Paper.docx",
        fileSize: 1890000
      }
    },
    {
      submissionId: "IGN-PAP-003",
      timestamp: "2026-03-03T14:10:00Z",
      status: "PENDING",
      teamName: "Kinetic Mech Forge",
      leader: {
        fullName: "Rahul Menon",
        email: "rahul.m@mechlab.org",
        mobile: "+91 94860 15006",
        institution: "Department of Mechanical Engineering",
        department: "Mechanical & CAD",
        yearOfStudy: "3rd Year"
      },
      members: [
        { role: "Team Leader", name: "Rahul Menon" },
        { role: "Member 2", name: "Arun Prakash" },
        { role: "Member 3", name: "Karthik Raja" },
        { role: "Member 4", name: "Vishnu Prasad" }
      ],
      paper: {
        title: "Topology Optimization of 3D Additive Titanium Lattice Structures",
        domainId: "hardware-3d",
        domainTitle: "HARDWARE & 3D",
        abstractText: "Investigating finite element stress dissipation in gyroid and diamond titanium lattice geometries produced via Selective Laser Melting (SLM) for aerospace load-bearing applications.",
        keywords: ["Additive Manufacturing", "Topology Optimization", "Titanium Lattices", "FEA"],
        fileName: "Titanium_Lattice_SLM.pdf",
        fileSize: 3100000
      }
    },
    {
      submissionId: "IGN-PAP-004",
      timestamp: "2026-03-04T09:40:00Z",
      status: "PENDING",
      teamName: "NanoBio Therapeutics",
      leader: {
        fullName: "Ananya Iyer",
        email: "ananya.i@biotech.ac.in",
        mobile: "+91 98401 22334",
        institution: "Department of Biotechnology",
        department: "Biomedical Engineering",
        yearOfStudy: "4th Year"
      },
      members: [
        { role: "Team Leader", name: "Ananya Iyer" },
        { role: "Member 2", name: "Sneha Balan" },
        { role: "Member 3", name: "Harish Raghav" },
        { role: "Member 4", name: "Meera Subramanian" }
      ],
      paper: {
        title: "Magnetically Guided Chitosan Nanoparticles for Targeted Thrombolysis",
        domainId: "bio",
        domainTitle: "BIO",
        abstractText: "Synthesis and in-vitro characterization of superparamagnetic iron oxide nanoparticles encapsulated in biodegradable chitosan shells for localized enzyme delivery in micro-vascular occlusions.",
        keywords: ["Biomedical Nano", "Targeted Delivery", "Chitosan Shells", "Micro-Vascular"],
        fileName: "BioNano_Thrombolysis_Draft.pdf",
        fileSize: 2200000
      }
    },
    {
      submissionId: "IGN-PAP-005",
      timestamp: "2026-03-04T16:00:00Z",
      status: "ACCEPTED",
      teamName: "Venture Dynamics",
      leader: {
        fullName: "Girish Patel",
        email: "girish.p@mgmt.edu",
        mobile: "+91 99400 55667",
        institution: "Department of Management Studies",
        department: "Business Strategy",
        yearOfStudy: "Postgrad"
      },
      members: [
        { role: "Team Leader", name: "Girish Patel" },
        { role: "Member 2", name: "Tanvi Saxena" },
        { role: "Member 3", name: "Akash Singhal" },
        { role: "Member 4", name: "Rhea Sen" }
      ],
      paper: {
        title: "Algorithmic Pricing in Renewable Energy Peer-to-Peer Microgrids",
        domainId: "business-arts",
        domainTitle: "BUSINESS & ARTS",
        abstractText: "Economic framework modeling decentralized peer-to-peer energy auctions utilizing double-auction smart contracts to maximize microgrid consumer surplus and storage battery ROI.",
        keywords: ["Techno-Management", "P2P Energy Trading", "Smart Contracts", "Pricing Models"],
        fileName: "P2P_Microgrid_Economics.pdf",
        fileSize: 1750000
      }
    }
  ];

  function initAdmin() {
    ensureDefaultData();
    setupAdminLogin();
    setupAdminNavigation();
    setupAdminControls();
  }

  function ensureDefaultData() {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (!existing || JSON.parse(existing).length === 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_IGNITRRON_MOCKS));
      }
    } catch (e) {
      console.warn(e);
    }
  }

  function getSubmissions() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
      return DEFAULT_IGNITRRON_MOCKS;
    }
  }

  function saveSubmissions(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn(e);
    }
  }

  function setupAdminLogin() {
    const form = document.getElementById('adminLoginForm');
    const err = document.getElementById('adminLoginError');
    const demoBtn = document.getElementById('adminDemoLoginBtn');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = (document.getElementById('adminUsername')?.value || '').trim();
      const pass = (document.getElementById('adminPassword')?.value || '').trim();
      const hash = await sha256(pass);

      if (['admin', 'hankpym', 'ignitrron'].includes(user.toLowerCase()) && (VALID_AUTH_HASHES.includes(hash) || pass === 'ignitrron2026' || pass === 'hankpym')) {
        sessionStorage.setItem(AUTH_SESSION_KEY, 'IGN_AUTH_' + Date.now());
        if (err) err.classList.add('hidden');
        showAdminDashboard();
        if (window.playQuantumAudio) window.playQuantumAudio('transmission');
      } else {
        if (err) {
          err.textContent = '⚠️ Invalid Credentials. Use 1-Click Demo Access or check passcode.';
          err.classList.remove('hidden');
        }
      }
    });

    if (demoBtn) {
      demoBtn.addEventListener('click', () => {
        sessionStorage.setItem(AUTH_SESSION_KEY, 'IGN_AUTH_DEMO_' + Date.now());
        showAdminDashboard();
        if (window.playQuantumAudio) window.playQuantumAudio('transmission');
      });
    }
  }

  function showAdminDashboard() {
    const portal = document.getElementById('adminPortalSection');
    const loginView = document.getElementById('adminLoginView');
    const dashboardView = document.getElementById('adminDashboardView');
    if (!portal) return;

    portal.classList.remove('hidden');
    if (loginView) loginView.classList.add('hidden');
    if (dashboardView) {
      dashboardView.classList.remove('hidden');
      dashboardView.classList.add('animate-fade-in');
    }

    renderDashboardStats();
    renderSubmissionsTable();
    renderAnalyticsCharts();
    portal.scrollIntoView({ behavior: 'smooth' });
  }

  function showAdminLogin() {
    const portal = document.getElementById('adminPortalSection');
    const loginView = document.getElementById('adminLoginView');
    const dashboardView = document.getElementById('adminDashboardView');
    if (!portal) return;

    portal.classList.remove('hidden');
    const isAuthed = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (isAuthed) {
      showAdminDashboard();
    } else {
      if (loginView) loginView.classList.remove('hidden');
      if (dashboardView) dashboardView.classList.add('hidden');
      portal.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function setupAdminNavigation() {
    const openBtns = document.querySelectorAll('[data-open-admin]');
    const logoutBtn = document.getElementById('adminLogoutBtn');
    const closeBtn = document.getElementById('closeAdminPortalBtn');

    openBtns.forEach(btn => btn.addEventListener('click', showAdminLogin));

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem(AUTH_SESSION_KEY);
        showAdminLogin();
        if (window.playQuantumAudio) window.playQuantumAudio('click');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        const portal = document.getElementById('adminPortalSection');
        if (portal) portal.classList.add('hidden');
      });
    }
  }

  function renderDashboardStats() {
    const subs = getSubmissions();
    const totalTeams = subs.length;
    const totalParticipants = subs.reduce((acc, s) => acc + (s.members ? s.members.length : 4), 0);
    const totalAccepted = subs.filter(s => s.status === 'ACCEPTED').length;
    const totalPending = subs.filter(s => s.status === 'PENDING').length;
    const totalRejected = subs.filter(s => s.status === 'REJECTED').length;

    const elTeams = document.getElementById('statTotalTeams');
    const elParticipants = document.getElementById('statTotalParticipants');
    const elAccepted = document.getElementById('statAcceptedPapers');
    const elPending = document.getElementById('statPendingReviews');
    const elRejected = document.getElementById('statRejectedPapers');

    if (elTeams) elTeams.textContent = totalTeams;
    if (elParticipants) elParticipants.textContent = totalParticipants;
    if (elAccepted) elAccepted.textContent = totalAccepted;
    if (elPending) elPending.textContent = totalPending;
    if (elRejected) elRejected.textContent = totalRejected;
  }

  function renderSubmissionsTable() {
    const tbody = document.getElementById('adminSubmissionsTbody');
    const searchInput = document.getElementById('adminSearchInput');
    const domainFilter = document.getElementById('adminDomainFilter');
    const statusFilter = document.getElementById('adminStatusFilter');
    const sortSelect = document.getElementById('adminSortSelect');
    const countBadge = document.getElementById('adminFilteredCountBadge');

    if (!tbody) return;

    let subs = getSubmissions();

    // Populate Domain filter options
    if (domainFilter && domainFilter.options.length <= 1 && window.IGNITRRON_DATA) {
      window.IGNITRRON_DATA.domains.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.id;
        opt.textContent = `[${d.number}] ${d.title}`;
        domainFilter.appendChild(opt);
      });
    }

    // Search
    const searchVal = (searchInput?.value || '').toLowerCase().trim();
    if (searchVal) {
      subs = subs.filter(s =>
        s.submissionId.toLowerCase().includes(searchVal) ||
        s.teamName.toLowerCase().includes(searchVal) ||
        s.leader.fullName.toLowerCase().includes(searchVal) ||
        s.leader.institution.toLowerCase().includes(searchVal) ||
        s.paper.title.toLowerCase().includes(searchVal)
      );
    }

    // Domain filter
    const domainVal = domainFilter?.value || 'all';
    if (domainVal !== 'all') {
      subs = subs.filter(s => s.paper.domainId === domainVal);
    }

    // Status filter
    const statusVal = statusFilter?.value || 'all';
    if (statusVal !== 'all') {
      subs = subs.filter(s => s.status === statusVal);
    }

    // Sorting
    const sortVal = sortSelect?.value || 'newest';
    subs.sort((a, b) => {
      if (sortVal === 'newest') return new Date(b.timestamp) - new Date(a.timestamp);
      if (sortVal === 'oldest') return new Date(a.timestamp) - new Date(b.timestamp);
      if (sortVal === 'title') return a.paper.title.localeCompare(b.paper.title);
      if (sortVal === 'team') return a.teamName.localeCompare(b.teamName);
      return 0;
    });

    if (countBadge) countBadge.textContent = `${subs.length} Teams Registered`;

    if (subs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="text-center py-12 text-slate-500 font-mono text-xs">NO TEAM SUBMISSIONS MATCHING CURRENT FILTER</td></tr>`;
      return;
    }

    tbody.innerHTML = subs.map(s => {
      const statusBadge = getStatusBadge(s.status);
      const dateStr = new Date(s.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

      return `
        <tr class="border-b border-slate-800/80 hover:bg-slate-900/40 transition-colors">
          <td class="px-4 py-3.5 font-mono text-xs font-bold text-cyan-400">${s.submissionId}</td>
          <td class="px-4 py-3.5">
            <div class="text-xs font-semibold text-white">${s.teamName}</div>
            <div class="text-[11px] text-slate-400">Leader: ${s.leader.fullName}</div>
          </td>
          <td class="px-4 py-3.5 text-xs text-slate-300 max-w-[150px] truncate" title="${s.leader.institution}">${s.leader.institution}</td>
          <td class="px-4 py-3.5 text-xs font-medium text-slate-200 max-w-[200px] truncate" title="${s.paper.title}">"${s.paper.title}"</td>
          <td class="px-4 py-3.5">
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300">${s.paper.domainTitle}</span>
          </td>
          <td class="px-4 py-3.5 text-xs font-mono text-slate-400">${dateStr}</td>
          <td class="px-4 py-3.5">${statusBadge}</td>
          <td class="px-4 py-3.5 text-right">
            <div class="inline-flex items-center gap-1.5">
              <button onclick="window.viewSubmissionDetail('${s.submissionId}')" class="px-2.5 py-1 text-xs font-mono rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all">Inspect</button>
              <button onclick="window.updateSubmissionStatus('${s.submissionId}', 'ACCEPTED')" class="p-1 rounded text-emerald-400 hover:bg-emerald-500/20" title="Accept"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></button>
              <button onclick="window.updateSubmissionStatus('${s.submissionId}', 'REJECTED')" class="p-1 rounded text-red-400 hover:bg-red-500/20" title="Reject"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  function getStatusBadge(status) {
    if (status === 'ACCEPTED') return '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-950/40 border border-emerald-500/40 text-emerald-400">🟢 ACCEPTED</span>';
    if (status === 'REJECTED') return '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-red-950/40 border border-red-500/40 text-red-400">🔴 REJECTED</span>';
    return '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-950/40 border border-amber-500/40 text-amber-400">🟡 PENDING</span>';
  }

  window.updateSubmissionStatus = function (id, newStatus) {
    const list = getSubmissions();
    const item = list.find(s => s.submissionId === id);
    if (item) {
      item.status = newStatus;
      saveSubmissions(list);
      renderDashboardStats();
      renderSubmissionsTable();
      renderAnalyticsCharts();

      const modalBadge = document.getElementById('detailModalStatusBadge');
      if (modalBadge) modalBadge.innerHTML = getStatusBadge(newStatus);
      if (window.playQuantumAudio) window.playQuantumAudio('click');
    }
  };

  window.viewSubmissionDetail = function (id) {
    const list = getSubmissions();
    const s = list.find(sub => sub.submissionId === id);
    if (!s) return;

    const modal = document.getElementById('submissionDetailModal');
    if (!modal) return;

    document.getElementById('detailSubId').textContent = s.submissionId;
    document.getElementById('detailModalStatusBadge').innerHTML = getStatusBadge(s.status);
    document.getElementById('detailPaperTitle').textContent = `"${s.paper.title}"`;
    document.getElementById('detailDomainTitle').textContent = s.paper.domainTitle;
    document.getElementById('detailTeamName').textContent = s.teamName;
    document.getElementById('detailLeaderName').textContent = s.leader.fullName;
    document.getElementById('detailLeaderEmail').textContent = s.leader.email;
    document.getElementById('detailLeaderMobile').textContent = s.leader.mobile;
    document.getElementById('detailInstitution').textContent = s.leader.institution;
    document.getElementById('detailDepartment').textContent = `${s.leader.department} (${s.leader.yearOfStudy})`;
    document.getElementById('detailAbstractText').textContent = s.paper.abstractText;
    document.getElementById('detailFileName').textContent = s.paper.fileName;

    const teamBox = document.getElementById('detailTeamMembersBox');
    if (teamBox) {
      teamBox.innerHTML = (s.members || []).map(m => `
        <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
          <span class="font-semibold text-slate-200">${m.name}</span>
          <span class="font-mono text-cyan-400">${m.role}</span>
        </div>
      `).join('');
    }

    const kwBox = document.getElementById('detailKeywordsBox');
    if (kwBox) {
      kwBox.innerHTML = (s.paper.keywords || []).map(kw => `
        <span class="px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono">#${kw}</span>
      `).join('');
    }

    document.getElementById('btnDetailAccept').onclick = () => window.updateSubmissionStatus(id, 'ACCEPTED');
    document.getElementById('btnDetailReject').onclick = () => window.updateSubmissionStatus(id, 'REJECTED');
    document.getElementById('btnDetailReset').onclick = () => window.updateSubmissionStatus(id, 'PENDING');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closeSubmissionDetailModal = function () {
    const modal = document.getElementById('submissionDetailModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  function renderAnalyticsCharts() {
    const list = getSubmissions();
    const domainContainer = document.getElementById('analyticsDomainChart');
    const statusContainer = document.getElementById('analyticsStatusChart');

    if (domainContainer && window.IGNITRRON_DATA) {
      const counts = {};
      window.IGNITRRON_DATA.domains.forEach(d => counts[d.id] = 0);
      list.forEach(s => {
        if (counts[s.paper.domainId] !== undefined) counts[s.paper.domainId]++;
      });

      const maxCount = Math.max(...Object.values(counts), 1);

      domainContainer.innerHTML = window.IGNITRRON_DATA.domains.map(d => {
        const c = counts[d.id] || 0;
        const pct = Math.round((c / maxCount) * 100);
        return `
          <div class="mb-3">
            <div class="flex justify-between text-xs font-mono mb-1">
              <span class="text-slate-300 font-semibold">[${d.number}] ${d.title}</span>
              <span class="text-cyan-400 font-bold">${c} Teams</span>
            </div>
            <div class="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div class="h-full bg-gradient-to-r ${d.color} rounded-full" style="width: ${Math.max(pct, 6)}%"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    if (statusContainer) {
      const total = Math.max(list.length, 1);
      const acc = list.filter(s => s.status === 'ACCEPTED').length;
      const pend = list.filter(s => s.status === 'PENDING').length;
      const rej = list.filter(s => s.status === 'REJECTED').length;

      statusContainer.innerHTML = `
        <div class="grid grid-cols-3 gap-3 text-center">
          <div class="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
            <div class="text-lg font-bold font-mono text-emerald-400">${Math.round((acc/total)*100)}%</div>
            <div class="text-[10px] font-mono text-slate-400">ACCEPTED (${acc})</div>
          </div>
          <div class="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30">
            <div class="text-lg font-bold font-mono text-amber-400">${Math.round((pend/total)*100)}%</div>
            <div class="text-[10px] font-mono text-slate-400">PENDING (${pend})</div>
          </div>
          <div class="p-3 rounded-xl bg-red-950/30 border border-red-500/30">
            <div class="text-lg font-bold font-mono text-red-400">${Math.round((rej/total)*100)}%</div>
            <div class="text-[10px] font-mono text-slate-400">REJECTED (${rej})</div>
          </div>
        </div>
      `;
    }
  }

  function setupAdminControls() {
    const searchInput = document.getElementById('adminSearchInput');
    const domainFilter = document.getElementById('adminDomainFilter');
    const statusFilter = document.getElementById('adminStatusFilter');
    const sortSelect = document.getElementById('adminSortSelect');
    const exportBtn = document.getElementById('adminExportBtn');
    const resetDataBtn = document.getElementById('adminResetDataBtn');

    [searchInput, domainFilter, statusFilter, sortSelect].forEach(el => {
      if (el) {
        el.addEventListener('input', renderSubmissionsTable);
        el.addEventListener('change', renderSubmissionsTable);
      }
    });

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const subs = getSubmissions();
        const blob = new Blob([JSON.stringify(subs, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `IGNITRRON_Paper_Presentations_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    if (resetDataBtn) {
      resetDataBtn.addEventListener('click', () => {
        if (confirm('Reset to default Ignitrron sample teams dataset?')) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_IGNITRRON_MOCKS));
          renderDashboardStats();
          renderSubmissionsTable();
          renderAnalyticsCharts();
        }
      });
    }
  }

  window.initIgnitrronAdmin = initAdmin;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdmin);
  } else {
    initAdmin();
  }
})();
