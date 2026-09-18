import React, { useState } from 'react';
import { 
  Shield, 
  Send, 
  CheckCircle2, 
  Users, 
  Copy, 
  Check
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const Registration: React.FC = () => {
  const [memberCount, setMemberCount] = useState<number>(3);
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeader: '',
    member2: '',
    member3: '',
    member4: '',
    department: '',
    contactNumber: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionPass, setSubmissionPass] = useState<{
    id: string;
    timestamp: string;
  } | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.teamName.trim()) errs.teamName = 'Team name is required';
    if (!formData.teamLeader.trim()) errs.teamLeader = 'Team leader name is required';
    if (!formData.member2.trim()) errs.member2 = 'Member 2 name is required';
    if (memberCount >= 3 && !formData.member3.trim()) errs.member3 = 'Member 3 name is required';
    if (memberCount === 4 && !formData.member4.trim()) errs.member4 = 'Member 4 name is required';
    if (!formData.department.trim()) errs.department = 'Department is required';
    if (!formData.contactNumber.trim()) {
      errs.contactNumber = 'Contact number is required';
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.contactNumber.trim())) {
      errs.contactNumber = 'Enter a valid contact number';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      playUiSound('alert');
      setErrors(validationErrors);
      return;
    }

    playUiSound('success');
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    setSubmissionPass({
      id: `OSC-BMC-${randomHex}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    setSubmitted(true);
  };

  const handleCopyPass = () => {
    if (!submissionPass) return;
    playUiSound('click');
    const summary = `IGNITRRON'26 BMC PASS\nID: ${submissionPass.id}\nTeam: ${formData.teamName}\nLeader: ${formData.teamLeader}\nDepartment: ${formData.department}\nContact: ${formData.contactNumber}\nFormat: PPT + BMC Canvas (8 Mins)`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    playUiSound('click');
    setSubmitted(false);
    setFormData({
      teamName: '',
      teamLeader: '',
      member2: '',
      member3: '',
      member4: '',
      department: '',
      contactNumber: '',
    });
    setErrors({});
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden bg-[#0b0f14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0f14] border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest mb-4">
            <Shield className="w-3.5 h-3.5" />
            Executive Boardroom Portal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-space mb-4">
            Team <span className="oscorp-gradient-text">Registration</span>
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1]/80 max-w-xl mx-auto">
            Authorize your multidisciplinary cohort (2–4 Members) for the Business Model Canvas boardroom evaluation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <div className="glass-oscorp-elevated p-6 sm:p-10 rounded-3xl border border-[#00ff88]/35 oscorp-cut-lg shadow-2xl shadow-black">
              {/* Form Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-[#cbd5e1]/15 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    PORTAL: VENTURE_COHORT_SUBMISSION
                  </span>
                </div>
                <span className="font-mono text-xs text-[#00ff88] bg-[#00ff88]/10 px-2.5 py-0.5 rounded border border-[#00ff88]/30">
                  TEAM SIZE: 2–4 MEMBERS
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Team Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-2">
                    Team Name <span className="text-[#00ff88]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      placeholder="e.g. Osborn Synergy Ventures"
                      className={`w-full px-4 py-3 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                        errors.teamName ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                      }`}
                    />
                  </div>
                  {errors.teamName && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.teamName}</p>
                  )}
                </div>

                {/* Team Size Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-2">
                    Select Cohort Member Count (2 to 4)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[2, 3, 4].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => {
                          playUiSound('select');
                          setMemberCount(count);
                        }}
                        className={`py-2.5 rounded-xl font-mono text-xs font-bold transition-all border ${
                          memberCount === count
                            ? 'bg-[#00ff88] text-[#050816] border-[#00ff88] shadow-md shadow-[#00ff88]/30'
                            : 'bg-[#050816] text-[#cbd5e1] border-[#cbd5e1]/20 hover:border-[#00ff88]/50'
                        }`}
                      >
                        {count} Members
                      </button>
                    ))}
                  </div>
                </div>

                {/* Team Leader & Department */}
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-2">
                      Team Leader <span className="text-[#00ff88]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="teamLeader"
                        value={formData.teamLeader}
                        onChange={handleInputChange}
                        placeholder="Full Name (Lead Presenter)"
                        className={`w-full px-4 py-3 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                          errors.teamLeader ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                        }`}
                      />
                    </div>
                    {errors.teamLeader && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.teamLeader}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-2">
                      Department <span className="text-[#00ff88]">*</span>
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      placeholder="e.g. CSE / IT / ECE / MBA / Management"
                      className={`w-full px-4 py-3 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                        errors.department ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                      }`}
                    />
                    {errors.department && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.department}</p>
                    )}
                  </div>
                </div>

                {/* Team Members Fields */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#00ff88] flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    Team Members
                  </div>

                  {/* Member 2 */}
                  <div>
                    <label className="block text-[11px] font-mono text-[#cbd5e1]/70 mb-1">
                      Member 2 Name <span className="text-[#00ff88]">*</span>
                    </label>
                    <input
                      type="text"
                      name="member2"
                      value={formData.member2}
                      onChange={handleInputChange}
                      placeholder="Full Name (Member 2)"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                        errors.member2 ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                      }`}
                    />
                    {errors.member2 && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.member2}</p>
                    )}
                  </div>

                  {/* Member 3 */}
                  {memberCount >= 3 && (
                    <div className="animate-fadeIn">
                      <label className="block text-[11px] font-mono text-[#cbd5e1]/70 mb-1">
                        Member 3 Name <span className="text-[#00ff88]">*</span>
                      </label>
                      <input
                        type="text"
                        name="member3"
                        value={formData.member3}
                        onChange={handleInputChange}
                        placeholder="Full Name (Member 3)"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                          errors.member3 ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                        }`}
                      />
                      {errors.member3 && (
                        <p className="mt-1 text-xs text-red-400 font-mono">{errors.member3}</p>
                      )}
                    </div>
                  )}

                  {/* Member 4 */}
                  {memberCount === 4 && (
                    <div className="animate-fadeIn">
                      <label className="block text-[11px] font-mono text-[#cbd5e1]/70 mb-1">
                        Member 4 Name <span className="text-[#00ff88]">*</span>
                      </label>
                      <input
                        type="text"
                        name="member4"
                        value={formData.member4}
                        onChange={handleInputChange}
                        placeholder="Full Name (Member 4)"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                          errors.member4 ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                        }`}
                      />
                      {errors.member4 && (
                        <p className="mt-1 text-xs text-red-400 font-mono">{errors.member4}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-2">
                    Contact Number <span className="text-[#00ff88]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                        errors.contactNumber ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                      }`}
                    />
                  </div>
                  {errors.contactNumber && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.contactNumber}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    onMouseEnter={() => playUiSound('hover')}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#00ff88] text-[#050816] font-bold text-sm uppercase tracking-wider hover:bg-[#00c96b] transition-all shadow-xl shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Authorize Boardroom Pitch Registration</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmation Pass Display */
            <div className="glass-oscorp-elevated p-8 sm:p-10 rounded-3xl border border-[#00ff88] oscorp-cut-lg shadow-2xl shadow-[#00ff88]/20 animate-fadeIn">
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/50 flex items-center justify-center text-[#00ff88] mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#00ff88] block mb-1">
                  AUTHORIZATION CODE VERIFIED
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-space">
                  Team Registration Confirmed
                </h3>
              </div>

              {/* Pass Card Slip */}
              <div className="p-6 rounded-2xl bg-[#050816] border border-[#cbd5e1]/20 relative overflow-hidden mb-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#cbd5e1]/10 mb-4">
                  <div>
                    <div className="text-[10px] font-mono text-[#cbd5e1]/60 uppercase">Venture Access Token</div>
                    <div className="text-lg font-mono font-bold text-[#00ff88]">{submissionPass?.id}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-[#cbd5e1]/60 uppercase">Registered At</div>
                    <div className="text-xs font-mono text-white">{submissionPass?.timestamp}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[#cbd5e1]/60 block">Team Name:</span>
                    <span className="font-bold text-white text-sm">{formData.teamName}</span>
                  </div>
                  <div>
                    <span className="text-[#cbd5e1]/60 block">Team Leader:</span>
                    <span className="font-bold text-white text-sm">{formData.teamLeader}</span>
                  </div>
                  <div>
                    <span className="text-[#cbd5e1]/60 block">Department:</span>
                    <span className="text-[#00ff88]">{formData.department}</span>
                  </div>
                  <div>
                    <span className="text-[#cbd5e1]/60 block">Contact:</span>
                    <span className="text-white">{formData.contactNumber}</span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-[#cbd5e1]/10">
                    <span className="text-[#cbd5e1]/60 block mb-1">Squad Members ({memberCount}):</span>
                    <div className="flex flex-wrap gap-2 text-[11px] text-white">
                      <span className="px-2 py-0.5 rounded bg-[#0b0f14] border border-[#00ff88]/30 text-[#00ff88]">
                        Lead: {formData.teamLeader}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#0b0f14] border border-[#cbd5e1]/20">
                        {formData.member2}
                      </span>
                      {formData.member3 && (
                        <span className="px-2 py-0.5 rounded bg-[#0b0f14] border border-[#cbd5e1]/20">
                          {formData.member3}
                        </span>
                      )}
                      {formData.member4 && (
                        <span className="px-2 py-0.5 rounded bg-[#0b0f14] border border-[#cbd5e1]/20">
                          {formData.member4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopyPass}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00ff88] text-[#050816] font-bold text-xs uppercase tracking-wider hover:bg-[#00c96b] transition-all shadow-md"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Pass Copied to Clipboard' : 'Copy Pitch Pass'}</span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 text-[#cbd5e1] hover:text-white hover:border-[#00ff88]/40 transition-colors text-xs font-mono font-bold"
                >
                  Register Another Team
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
