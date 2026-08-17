import React, { useState } from 'react';
import { X, QrCode, CheckCircle, ShieldCheck, Download, Sparkles, User, Users, Mail, School, Phone } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    phone: '',
    college: '',
    member2: '',
    member3: '',
    track: 'OPEN TECHNICAL QUIZ'
  });

  const [submitted, setSubmitted] = useState(false);
  const [passData, setPassData] = useState<{ teamId: string; passCode: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();

    const teamId = `TC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const passCode = `HEX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    setPassData({ teamId, passCode });
    setSubmitted(true);
  };

  const handleReset = () => {
    sound.playClick();
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <div className="relative w-full max-w-2xl bg-[#080d24] border border-cyan-500/40 rounded-3xl shadow-[0_0_60px_rgba(0,240,255,0.3)] overflow-hidden font-sans">
        
        {/* Header */}
        <div className="bg-slate-900/90 border-b border-cyan-500/30 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-mono text-xl font-bold text-white tracking-wide">
                TECHNO CLASH REGISTRATION
              </h3>
              <p className="text-xs text-cyan-400 font-mono">OFFICIAL ENTRY PASS GENERATOR</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> TEAM NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cyber Pioneers"
                    value={formData.teamName}
                    onChange={e => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5 flex items-center gap-1.5">
                    <School className="w-3.5 h-3.5" /> COLLEGE / UNIVERSITY *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. MIT Tech"
                    value={formData.college}
                    onChange={e => setFormData({ ...formData, college: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> TEAM LEADER NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.leaderName}
                    onChange={e => setFormData({ ...formData, leaderName: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> LEADER EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="leader@college.edu"
                    value={formData.leaderEmail}
                    onChange={e => setFormData({ ...formData, leaderEmail: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5">
                    MEMBER 2 NAME (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    placeholder="Teammate 2"
                    value={formData.member2}
                    onChange={e => setFormData({ ...formData, member2: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none font-mono"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-mono font-bold py-3.5 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" /> GENERATE HOLOGRAPHIC PASS
                </button>
              </div>
            </form>
          ) : (
            /* Generated Holographic Entry Pass */
            <div className="space-y-6 animate-in fade-in zoom-in-95">
              <div className="relative bg-slate-950 border-2 border-cyan-400/80 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,240,255,0.3)] overflow-hidden">
                {/* Watermark badge */}
                <div className="absolute top-4 right-4 bg-cyan-500/20 text-cyan-300 font-mono text-[10px] px-3 py-1 rounded-full border border-cyan-500/50 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> CONFIRMED PASS
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-cyan-900/50 pb-6">
                  <div>
                    <h2 className="font-mono text-2xl font-black text-white tracking-wider">
                      TECHNO CLASH
                    </h2>
                    <p className="text-xs font-mono text-cyan-400">NATIONAL TECHNICAL QUIZ BATTLE</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-1">{eventData.date} • {eventData.venue}</p>
                  </div>
                  
                  {/* Simulated Holographic QR Code */}
                  <div className="bg-cyan-950/40 border border-cyan-500/50 p-3 rounded-xl flex flex-col items-center gap-1">
                    <QrCode className="w-16 h-16 text-cyan-400" />
                    <span className="font-mono text-[9px] text-cyan-300">{passData?.passCode}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
                  <div>
                    <span className="text-slate-500 text-[10px] block">TEAM NAME</span>
                    <span className="text-white font-bold text-sm">{formData.teamName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">TEAM ID</span>
                    <span className="text-cyan-400 font-bold text-sm">{passData?.teamId}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">TEAM LEADER</span>
                    <span className="text-slate-200">{formData.leaderName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">INSTITUTION</span>
                    <span className="text-slate-200">{formData.college}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => alert(`Pass ${passData?.teamId} saved to your device!`)}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> DOWNLOAD PASS
                </button>
                <button
                  onClick={handleReset}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-mono py-3 px-6 rounded-xl transition"
                >
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
