import React, { useState } from 'react';
import { 
  Shield, 
  Send, 
  CheckCircle2, 
  Users, 
  Copy, 
  Check, 
  X
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0b0f14] border border-[#00ff88]/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#00ff88]/20 oscorp-cut max-h-[90vh] overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#cbd5e1]/15 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#00ff88]">
                Executive Boardroom Portal
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Team Registration
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              playUiSound('click');
              onClose();
            }}
            className="p-2 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 text-[#cbd5e1] hover:text-white hover:border-red-500/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Team Name */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-1.5">
                Team Name <span className="text-[#00ff88]">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
                placeholder="e.g. Osborn Synergy Ventures"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                  errors.teamName ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                }`}
              />
              {errors.teamName && (
                <p className="mt-1 text-xs text-red-400 font-mono">{errors.teamName}</p>
              )}
            </div>

            {/* Team Size Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-1.5">
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
                    className={`py-2 rounded-xl font-mono text-xs font-bold transition-all border ${
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
                <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-1.5">
                  Team Leader <span className="text-[#00ff88]">*</span>
                </label>
                <input
                  type="text"
                  name="teamLeader"
                  value={formData.teamLeader}
                  onChange={handleInputChange}
                  placeholder="Full Name (Lead Presenter)"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                    errors.teamLeader ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                  }`}
                />
                {errors.teamLeader && (
                  <p className="mt-1 text-xs text-red-400 font-mono">{errors.teamLeader}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-1.5">
                  Department <span className="text-[#00ff88]">*</span>
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="e.g. CSE / IT / ECE / MBA"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                    errors.department ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                  }`}
                />
                {errors.department && (
                  <p className="mt-1 text-xs text-red-400 font-mono">{errors.department}</p>
                )}
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-3 pt-1">
              <div className="text-xs font-mono uppercase tracking-wider text-[#00ff88] flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                Team Members
              </div>

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
                  className={`w-full px-4 py-2 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                    errors.member2 ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                  }`}
                />
                {errors.member2 && (
                  <p className="mt-1 text-xs text-red-400 font-mono">{errors.member2}</p>
                )}
              </div>

              {memberCount >= 3 && (
                <div>
                  <label className="block text-[11px] font-mono text-[#cbd5e1]/70 mb-1">
                    Member 3 Name <span className="text-[#00ff88]">*</span>
                  </label>
                  <input
                    type="text"
                    name="member3"
                    value={formData.member3}
                    onChange={handleInputChange}
                    placeholder="Full Name (Member 3)"
                    className={`w-full px-4 py-2 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                      errors.member3 ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                    }`}
                  />
                  {errors.member3 && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.member3}</p>
                  )}
                </div>
              )}

              {memberCount === 4 && (
                <div>
                  <label className="block text-[11px] font-mono text-[#cbd5e1]/70 mb-1">
                    Member 4 Name <span className="text-[#00ff88]">*</span>
                  </label>
                  <input
                    type="text"
                    name="member4"
                    value={formData.member4}
                    onChange={handleInputChange}
                    placeholder="Full Name (Member 4)"
                    className={`w-full px-4 py-2 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
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
              <label className="block text-xs font-mono uppercase tracking-wider text-[#cbd5e1] mb-1.5">
                Contact Number <span className="text-[#00ff88]">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="e.g. +91 98765 43210"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#050816] border text-white placeholder-[#cbd5e1]/30 text-sm font-medium focus:outline-none transition-colors ${
                  errors.contactNumber ? 'border-red-500' : 'border-[#cbd5e1]/20 focus:border-[#00ff88]'
                }`}
              />
              {errors.contactNumber && (
                <p className="mt-1 text-xs text-red-400 font-mono">{errors.contactNumber}</p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-3">
              <button
                type="submit"
                onMouseEnter={() => playUiSound('hover')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#00ff88] text-[#050816] font-bold text-sm uppercase tracking-wider hover:bg-[#00c96b] transition-all shadow-xl shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50"
              >
                <Send className="w-4 h-4" />
                <span>Authorize Pitch Registration</span>
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Display */
          <div className="p-6 rounded-2xl bg-[#050816] border border-[#00ff88] relative overflow-hidden animate-fadeIn">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/50 flex items-center justify-center text-[#00ff88] mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00ff88] block mb-1">
                AUTHORIZATION CODE VERIFIED
              </span>
              <h3 className="text-xl font-bold text-white font-space">
                Team Registration Confirmed
              </h3>
            </div>

            {/* Pass Slip */}
            <div className="p-4 rounded-xl bg-[#0b0f14] border border-[#cbd5e1]/20 text-xs font-mono space-y-3 mb-6">
              <div className="flex justify-between border-b border-[#cbd5e1]/10 pb-2">
                <span className="text-[#cbd5e1]/60">Venture Token:</span>
                <span className="text-[#00ff88] font-bold">{submissionPass?.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#cbd5e1]/60">Team Name:</span>
                <span className="text-white font-semibold">{formData.teamName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#cbd5e1]/60">Leader:</span>
                <span className="text-white">{formData.teamLeader}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#cbd5e1]/60">Department:</span>
                <span className="text-[#00ff88]">{formData.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#cbd5e1]/60">Contact:</span>
                <span className="text-white">{formData.contactNumber}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCopyPass}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#00ff88] text-[#050816] font-bold text-xs uppercase tracking-wider hover:bg-[#00c96b] transition-all"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Pitch Pass'}</span>
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 rounded-xl bg-[#0b0f14] border border-[#cbd5e1]/20 text-[#cbd5e1] hover:text-white transition-colors text-xs font-mono font-bold"
              >
                Register Another Team
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
