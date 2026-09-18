import React, { useState } from 'react';
import { Users, User, Zap, Sparkles, CheckCircle2, Copy, Check, RotateCcw } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';

export const Registration: React.FC = () => {
  const [teamName, setTeamName] = useState('');
  const [member1Name, setMember1Name] = useState('');
  const [member2Name, setMember2Name] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    teamId: string;
    teamName: string;
    member1Name: string;
    member2Name: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName.trim() || !member1Name.trim() || !member2Name.trim()) {
      setError('Please fill in all team details (Team Name, Member 1, Member 2).');
      return;
    }

    setError('');
    const randomId = `CF26-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedData({
      teamId: randomId,
      teamName: teamName.trim(),
      member1Name: member1Name.trim(),
      member2Name: member2Name.trim(),
    });
  };

  const handleCopy = () => {
    if (!submittedData) return;
    const text = `CAD Forge 2026 Registration Pass\nTeam ID: ${submittedData.teamId}\nTeam: ${submittedData.teamName}\nMember 1: ${submittedData.member1Name}\nMember 2: ${submittedData.member2Name}\nDepartment: ${cadForgeData.event.department}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setTeamName('');
    setMember1Name('');
    setMember2Name('');
    setError('');
  };

  return (
    <section id="registration" className="relative py-24 bg-[#05060b] overflow-hidden">
      {/* Spider-Verse Venom glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[350px] bg-gradient-to-r from-[#ff0055]/15 via-[#9d4edd]/10 to-[#00f0ff]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff0055]/10 border border-[#ff0055]/30 text-[#ff0055] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Secure Registration Portal</span>
          </div>
          <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-orbitron tracking-tight text-white mb-3">
            Team Registration
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Register your 2-member engineering duo for CAD Forge 2026.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff0055] via-[#9d4edd] to-[#00f0ff] mx-auto rounded-full mt-4" />
        </div>

        {/* Registration Card / Form */}
        <div className="bg-slate-900/90 border-2 border-cyan-500/30 rounded-3xl p-8 sm:p-12 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] relative overflow-hidden">
          
          {/* Top comic decoration */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff0055] animate-pulse" />
              <span className="font-mono-tech text-xs text-cyan-400 uppercase font-bold">
                PORTAL://CAD_REG_2026
              </span>
            </div>
            <span className="font-mono-tech text-xs text-slate-400">
              TEAM SIZE: 2 MEMBERS
            </span>
          </div>

          {!submittedData ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Team Name */}
              <div>
                <label className="block font-orbitron text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#ff0055]" />
                  <span>Team Name</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter your team name (e.g. Apex Drafters)"
                    className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15 text-white font-sans placeholder-slate-500 focus:outline-none focus:border-[#ff0055] focus:ring-2 focus:ring-[#ff0055]/30 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Grid: Member 1 & Member 2 Names */}
              <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Field 2: Member 1 Name */}
                <div>
                  <label className="block font-orbitron text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#00f0ff]" />
                    <span>Member 1 Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={member1Name}
                    onChange={(e) => setMember1Name(e.target.value)}
                    placeholder="Full name of Member 1"
                    className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15 text-white font-sans placeholder-slate-500 focus:outline-none focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff]/30 transition-all text-sm sm:text-base"
                  />
                </div>

                {/* Field 3: Member 2 Name */}
                <div>
                  <label className="block font-orbitron text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#9d4edd]" />
                    <span>Member 2 Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={member2Name}
                    onChange={(e) => setMember2Name(e.target.value)}
                    placeholder="Full name of Member 2"
                    className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15 text-white font-sans placeholder-slate-500 focus:outline-none focus:border-[#9d4edd] focus:ring-2 focus:ring-[#9d4edd]/30 transition-all text-sm sm:text-base"
                  />
                </div>

              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 font-sans text-xs sm:text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-[#ff0055] via-[#e60049] to-[#00f0ff] text-white font-orbitron font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(255,0,85,0.5)] hover:shadow-[0_0_45px_rgba(255,0,85,0.8)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span>Submit Team Registration</span>
              </button>

              <p className="text-center font-mono-tech text-xs text-slate-400">
                Laptop is compulsory for participation • Multi-round format
              </p>
            </form>
          ) : (
            /* Registration Success Pass Card */
            <div className="space-y-6 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-black to-slate-950 border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-orbitron font-bold text-white text-base sm:text-lg">
                        Registration Confirmed!
                      </h4>
                      <p className="text-xs font-mono-tech text-emerald-400">
                        OFFICIAL CAD FORGE 2026 TEAM PASS
                      </p>
                    </div>
                  </div>
                  <span className="font-mono-tech text-xs px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                    {submittedData.teamId}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono-tech uppercase text-slate-400 block mb-1">
                      Team Name
                    </span>
                    <span className="font-orbitron font-bold text-white text-sm">
                      {submittedData.teamName}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono-tech uppercase text-slate-400 block mb-1">
                      Member 1
                    </span>
                    <span className="font-orbitron font-bold text-cyan-300 text-sm">
                      {submittedData.member1Name}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono-tech uppercase text-slate-400 block mb-1">
                      Member 2
                    </span>
                    <span className="font-orbitron font-bold text-purple-300 text-sm">
                      {submittedData.member2Name}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <span className="text-xs font-mono-tech text-slate-400">
                    {cadForgeData.event.department} • {cadForgeData.event.festName}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleCopy}
                      className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 text-xs font-mono-tech font-bold flex items-center gap-2 transition-all"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy Team Pass'}</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 text-xs font-mono-tech flex items-center gap-2 transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Register Another Team</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
