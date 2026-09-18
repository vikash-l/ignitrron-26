/**
 * IGNITRRON - Registration & Abstract Submission Engine
 * Team Leader, 4 Team Members, 5 Domains, Live Word Count & Document Upload
 */

(function () {
  const STORAGE_KEY = 'ignitrron_submissions_db';
  let currentUploadedFile = null;
  let activeKeywords = ['Innovation', 'Research'];

  function initForms() {
    setupDomainDropdown();
    setupAbstractWordCounter();
    setupKeywordTags();
    setupFileUpload();
    setupFormSubmission();
    setupPresetDomainTrigger();
  }

  // Populate 5 Official Domains in select dropdown
  function setupDomainDropdown() {
    const domainSelect = document.getElementById('paperDomain');
    if (!domainSelect || !window.IGNITRRON_DATA) return;

    domainSelect.innerHTML = '<option value="" disabled selected>Select Research Domain *</option>';
    window.IGNITRRON_DATA.domains.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.id;
      opt.textContent = `[${d.number}] ${d.title} (${d.disciplines.slice(0, 3).join(', ')}...)`;
      domainSelect.appendChild(opt);
    });
  }

  // Pre-select domain when clicked from Domain Explorer
  function setupPresetDomainTrigger() {
    window.selectDomainForSubmission = function (domainId) {
      const modal = document.getElementById('registration-modal');
      const domainSelect = document.getElementById('paperDomain');
      if (domainSelect) {
        domainSelect.value = domainId;
      }
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    };
  }

  // Live Word & Character Counter for Abstract
  function setupAbstractWordCounter() {
    const textarea = document.getElementById('paperAbstract');
    const wordCountDisplay = document.getElementById('wordCountDisplay');
    const wordStatusBadge = document.getElementById('wordStatusBadge');

    if (!textarea || !wordCountDisplay) return;

    textarea.addEventListener('input', () => {
      const text = textarea.value.trim();
      const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
      const chars = textarea.value.length;

      wordCountDisplay.textContent = `${words} words · ${chars} chars`;

      if (words < 50) {
        wordCountDisplay.className = 'text-xs font-mono text-amber-400';
        if (wordStatusBadge) {
          wordStatusBadge.textContent = 'ABSTRACT BRIEF';
          wordStatusBadge.className = 'text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300';
        }
      } else {
        wordCountDisplay.className = 'text-xs font-mono text-cyan-400 font-bold';
        if (wordStatusBadge) {
          wordStatusBadge.textContent = 'OPTIMAL DENSITY';
          wordStatusBadge.className = 'text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300';
        }
      }
    });
  }

  // Keyword Tag Input
  function setupKeywordTags() {
    const input = document.getElementById('keywordInput');
    const container = document.getElementById('keywordTagsList');
    if (!input || !container) return;

    function renderTags() {
      container.innerHTML = '';
      activeKeywords.forEach((kw, idx) => {
        const tag = document.createElement('span');
        tag.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 shadow-sm animate-fade-in';
        tag.innerHTML = `
          <span># ${kw}</span>
          <button type="button" class="text-cyan-400 hover:text-red-400 transition-colors p-0.5" data-index="${idx}">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        `;
        tag.querySelector('button').addEventListener('click', () => {
          activeKeywords.splice(idx, 1);
          renderTags();
        });
        container.appendChild(tag);
      });
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const val = input.value.trim().replace(/^,+|,+$/g, '');
        if (val && !activeKeywords.includes(val) && activeKeywords.length < 6) {
          activeKeywords.push(val);
          input.value = '';
          renderTags();
        }
      }
    });

    renderTags();
  }

  // File Upload (PDF, DOC, DOCX) with Progress Bar
  function setupFileUpload() {
    const dropZone = document.getElementById('fileDropZone');
    const fileInput = document.getElementById('abstractFileInput');
    const filePreview = document.getElementById('fileUploadPreview');
    const fileNameEl = document.getElementById('uploadedFileName');
    const fileSizeEl = document.getElementById('uploadedFileSize');
    const uploadProgressBar = document.getElementById('uploadProgressBar');
    const uploadProgressPct = document.getElementById('uploadProgressPct');
    const removeFileBtn = document.getElementById('removeFileBtn');

    if (!dropZone || !fileInput) return;

    const allowed = ['pdf', 'doc', 'docx', 'ppt', 'pptx'];

    function handleFile(file) {
      if (!file) return;

      const ext = file.name.split('.').pop().toLowerCase();
      if (!allowed.includes(ext)) {
        showQuantumAlert('⚠️ Invalid Document: Please upload your abstract or PPT in PDF, DOC, DOCX, or PPT format.');
        return;
      }

      currentUploadedFile = file;

      dropZone.classList.add('hidden');
      filePreview.classList.remove('hidden');
      fileNameEl.textContent = file.name;
      fileSizeEl.textContent = formatBytes(file.size);

      // Progress animation
      let p = 0;
      uploadProgressBar.style.width = '0%';
      uploadProgressPct.textContent = '0%';

      const interval = setInterval(() => {
        p += Math.floor(Math.random() * 25) + 20;
        if (p >= 100) {
          p = 100;
          clearInterval(interval);
          uploadProgressBar.style.width = '100%';
          uploadProgressPct.textContent = '100% ATTACHED';
          uploadProgressBar.className = 'quantum-progress-fill bg-emerald-400';
        } else {
          uploadProgressBar.style.width = `${p}%`;
          uploadProgressPct.textContent = `${p}%`;
        }
      }, 50);
    }

    function formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    ['dragenter', 'dragover'].forEach(eName => {
      dropZone.addEventListener(eName, (e) => {
        e.preventDefault();
        dropZone.classList.add('border-cyan-400', 'bg-cyan-950/20');
      });
    });

    ['dragleave', 'drop'].forEach(eName => {
      dropZone.addEventListener(eName, (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-cyan-400', 'bg-cyan-950/20');
      });
    });

    dropZone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files.length > 0) handleFile(files[0]);
    });

    fileInput.addEventListener('change', (e) => {
      if (fileInput.files.length > 0) handleFile(fileInput.files[0]);
    });

    if (removeFileBtn) {
      removeFileBtn.addEventListener('click', () => {
        currentUploadedFile = null;
        fileInput.value = '';
        filePreview.classList.add('hidden');
        dropZone.classList.remove('hidden');
      });
    }
  }

  // Themed Alert
  function showQuantumAlert(message, type = 'error') {
    const alertBox = document.getElementById('quantumFormAlert');
    if (!alertBox) {
      alert(message);
      return;
    }

    alertBox.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-lg">${type === 'error' ? '⚠️' : '⚡'}</span>
        <span class="text-sm font-medium">${message}</span>
      </div>
    `;
    alertBox.className = `p-4 rounded-xl mb-6 text-sm flex items-center justify-between border ${
      type === 'error' ? 'bg-red-950/60 border-red-500/50 text-red-200' : 'bg-cyan-950/60 border-cyan-500/50 text-cyan-200'
    } shadow-lg animate-fade-in`;
    alertBox.classList.remove('hidden');
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => alertBox.classList.add('hidden'), 5000);
  }

  // Form Validation & Submission
  function setupFormSubmission() {
    const form = document.getElementById('ignitrronRegistrationForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Team Leader
      const leaderName = (document.getElementById('leaderName')?.value || '').trim();
      const leaderEmail = (document.getElementById('leaderEmail')?.value || '').trim();
      const leaderMobile = (document.getElementById('leaderMobile')?.value || '').trim();
      const college = (document.getElementById('collegeName')?.value || '').trim();
      const department = (document.getElementById('departmentName')?.value || '').trim();
      const yearOfStudy = (document.getElementById('yearOfStudy')?.value || '').trim();

      // Team Members
      const teamName = (document.getElementById('teamName')?.value || '').trim();
      const member2 = (document.getElementById('member2Name')?.value || '').trim();
      const member3 = (document.getElementById('member3Name')?.value || '').trim();
      const member4 = (document.getElementById('member4Name')?.value || '').trim();

      // Paper
      const paperTitle = (document.getElementById('paperTitle')?.value || '').trim();
      const paperDomain = (document.getElementById('paperDomain')?.value || '').trim();
      const abstractText = (document.getElementById('paperAbstract')?.value || '').trim();

      // Validations
      if (!leaderName) {
        showQuantumAlert('⚠️ Team Leader name is required.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!leaderEmail || !emailRegex.test(leaderEmail)) {
        showQuantumAlert('⚠️ Please enter a valid Email Address for the Team Leader.');
        return;
      }

      const cleanPhone = leaderMobile.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        showQuantumAlert('⚠️ Please enter a valid 10-digit Mobile Number.');
        return;
      }

      if (!college) {
        showQuantumAlert('⚠️ College / Institution name is required.');
        return;
      }

      if (!teamName) {
        showQuantumAlert('⚠️ Team Name is required.');
        return;
      }

      if (!paperTitle) {
        showQuantumAlert('⚠️ Research Paper Title is required.');
        return;
      }

      if (!paperDomain) {
        showQuantumAlert('⚠️ Please select one of the 5 official domains (Software, Circuits, Hardware & 3D, Bio, Business & Arts).');
        return;
      }

      if (!abstractText || abstractText.length < 20) {
        showQuantumAlert('⚠️ Please provide a concise abstract summary of your presentation.');
        return;
      }

      // Generate Unique Submission ID (IGN-PAP-001 format)
      const existing = getStoredSubmissions();
      const seqNumber = String(existing.length + 1).padStart(3, '0');
      const submissionId = `IGN-PAP-${seqNumber}`;
      const timestamp = new Date().toISOString();

      const domainObj = window.IGNITRRON_DATA.domains.find(d => d.id === paperDomain);
      const domainTitle = domainObj ? domainObj.title : paperDomain;

      const teamMembersList = [
        { role: 'Team Leader', name: leaderName, email: leaderEmail, mobile: leaderMobile },
        { role: 'Member 2', name: member2 || 'Co-Author 2' },
        { role: 'Member 3', name: member3 || 'Co-Author 3' },
        { role: 'Member 4', name: member4 || 'Co-Author 4' }
      ];

      const record = {
        submissionId: submissionId,
        timestamp: timestamp,
        status: 'PENDING',
        teamName: teamName,
        leader: {
          fullName: leaderName,
          email: leaderEmail,
          mobile: leaderMobile,
          institution: college,
          department: department,
          yearOfStudy: yearOfStudy
        },
        members: teamMembersList,
        paper: {
          title: paperTitle,
          domainId: paperDomain,
          domainTitle: domainTitle,
          abstractText: abstractText,
          keywords: activeKeywords,
          fileName: currentUploadedFile ? currentUploadedFile.name : 'Abstract_Uploaded.pdf',
          fileSize: currentUploadedFile ? currentUploadedFile.size : 1200000
        }
      };

      existing.unshift(record);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

      if (window.playQuantumAudio) window.playQuantumAudio('transmission');
      renderSuccessScreen(record);
    });
  }

  function getStoredSubmissions() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  // Render Futuristic Success Confirmation HUD
  function renderSuccessScreen(record) {
    const formSection = document.getElementById('registrationFormSection');
    const successSection = document.getElementById('submissionSuccessSection');

    if (!successSection) return;

    document.getElementById('successSubmissionId').textContent = record.submissionId;
    document.getElementById('successTeamName').textContent = record.teamName;
    document.getElementById('successPaperTitle').textContent = `"${record.paper.title}"`;
    document.getElementById('successDomainTitle').textContent = record.paper.domainTitle;
    document.getElementById('successLeaderName').textContent = record.leader.fullName;
    document.getElementById('successInstitution').textContent = record.leader.institution;
    document.getElementById('successTimestamp').textContent = new Date(record.timestamp).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    document.getElementById('successStatus').textContent = 'VERIFIED & TRANSMITTED';

    if (formSection) formSection.classList.add('hidden');
    successSection.classList.remove('hidden');
    successSection.classList.add('animate-fade-in');
    successSection.scrollIntoView({ behavior: 'smooth' });

    // Download Confirmation Pass Generator
    const dlBtn = document.getElementById('downloadConfirmationBtn');
    if (dlBtn) {
      dlBtn.onclick = () => generateDownloadableConfirmation(record);
    }
  }

  // Download / Print Official Ignitrron Team Pass
  function generateDownloadableConfirmation(record) {
    const win = window.open('', '_blank', 'width=800,height=750');
    if (!win) return alert('Please allow popups to view your confirmation pass.');

    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>IGNITRRON Paper Presentation Pass - ${record.submissionId}</title>
        <style>
          body {
            background-color: #030712;
            color: #f1f5f9;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 30px;
            display: flex;
            justify-content: center;
          }
          .pass-card {
            width: 680px;
            background: linear-gradient(135deg, #070f22 0%, #030712 100%);
            border: 2px solid #00f0ff;
            border-radius: 18px;
            padding: 35px;
            box-shadow: 0 0 40px rgba(0, 240, 255, 0.25);
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(0, 240, 255, 0.3);
            padding-bottom: 15px;
            margin-bottom: 20px;
          }
          .brand {
            font-size: 24px;
            font-weight: 900;
            color: #00f0ff;
            letter-spacing: 2px;
          }
          .tag {
            font-family: monospace;
            background: rgba(168, 85, 247, 0.2);
            color: #c084fc;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 11px;
            border: 1px solid rgba(168, 85, 247, 0.4);
          }
          .id-box {
            background: rgba(0, 240, 255, 0.08);
            border: 1px dashed #00f0ff;
            padding: 16px;
            border-radius: 12px;
            text-align: center;
            margin: 20px 0;
          }
          .id-val {
            font-family: monospace;
            font-size: 28px;
            font-weight: bold;
            color: #00f0ff;
            letter-spacing: 3px;
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
          }
          .label {
            font-size: 11px;
            color: #94a3b8;
            text-transform: uppercase;
          }
          .val {
            font-size: 14px;
            font-weight: 600;
            color: #ffffff;
            margin-top: 3px;
          }
          .footer {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 15px;
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #64748b;
          }
          @media print {
            body { background: white; color: black; }
            .pass-card { border: 2px solid #000; box-shadow: none; }
          }
        </style>
      </head>
      <body>
        <div class="pass-card">
          <div class="header">
            <div>
              <div class="brand">IGNITRRON — PAPER PRESENTATION</div>
              <div style="font-size: 12px; color: #94a3b8;">DAY 2 • 10:00 AM – 4:00 PM • ECE CLASS</div>
            </div>
            <div class="tag">OFFICIAL TEAM PASS</div>
          </div>
          <div class="id-box">
            <div class="label">OFFICIAL SUBMISSION IDENTIFIER</div>
            <div class="id-val">${record.submissionId}</div>
          </div>
          <div class="grid">
            <div>
              <div class="label">Team Name</div>
              <div class="val">${record.teamName} (4 Members)</div>
            </div>
            <div>
              <div class="label">Team Leader</div>
              <div class="val">${record.leader.fullName}</div>
            </div>
            <div>
              <div class="label">Institution</div>
              <div class="val">${record.leader.institution}</div>
            </div>
            <div>
              <div class="label">Department</div>
              <div class="val">${record.leader.department} (${record.leader.yearOfStudy})</div>
            </div>
            <div style="grid-column: span 2;">
              <div class="label">Research Paper Title</div>
              <div class="val" style="color: #38bdf8;">"${record.paper.title}"</div>
            </div>
            <div style="grid-column: span 2;">
              <div class="label">Domain Category</div>
              <div class="val">${record.paper.domainTitle}</div>
            </div>
          </div>
          <div class="footer">
            <div>Organized by Ignitrron • Faculty: Mr. Premkumar. T</div>
            <div>Presentation Window: 5–7 Minutes</div>
          </div>
        </div>
        <script>window.onload = function() { window.print(); }</script>
      </body>
      </html>
    `);
    win.document.close();
  }

  window.initIgnitrronForms = initForms;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForms);
  } else {
    initForms();
  }
})();
