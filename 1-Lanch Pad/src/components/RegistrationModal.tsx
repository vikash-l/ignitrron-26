import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { DOMAINS_DATA, type DomainPrompt } from '../utils/domainsData';
import { soundFx } from '../utils/soundFx';
import confetti from 'canvas-confetti';


interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDomain?: DomainPrompt | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  initialDomain,
}) => {
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderContact, setLeaderContact] = useState('');
  const [memberCount, setMemberCount] = useState<number>(3);
  const [memberNames, setMemberNames] = useState<string[]>(['', '', '']);
  const [selectedDomainId, setSelectedDomainId] = useState<string>(
    initialDomain ? initialDomain.id : DOMAINS_DATA[0].id
  );

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleMemberCountChange = (count: number) => {
    soundFx.playClick();
    setMemberCount(count);
    const newNames = [...memberNames];
    while (newNames.length < count - 1) {
      newNames.push('');
    }
    setMemberNames(newNames.slice(0, count - 1));
  };

  const handleMemberNameChange = (index: number, val: string) => {
    const updated = [...memberNames];
    updated[index] = val;
    setMemberNames(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playWebShoot();
    soundFx.playBoxUnlock();

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.5 },
      colors: ['#ff003c', '#00f0ff', '#ffffff']
    });

    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-2xl my-8 p-6 sm:p-8 bg-[#121216] border-4 border-[#ff003c] rounded-2xl shadow-spider-red overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#ff003c] transition-colors rounded-full border border-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          {!submitted ? (
            <div>
              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#ff003c] text-white rounded">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <span className="font-space text-[10px] text-[#00f0ff] tracking-widest uppercase font-bold">
                    OFFICIAL IGNITRRON ENTRY
                  </span>
                  <h3 className="font-anton text-3xl sm:text-4xl text-white tracking-wider uppercase">
                    JOIN THE CHALLENGE
                  </h3>
                </div>
              </div>

              <p className="font-inter text-xs text-gray-300 mb-6">
                Register your crew for Launchpad: A hands-on branding challenge by the Design Club.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Team Name */}
                <div>
                  <label className="block font-bebas text-sm text-gray-300 tracking-wider uppercase mb-1">
                    TEAM NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CyberDesigners, BrandVanguards"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-black border border-white/20 rounded text-white font-space text-sm focus:border-[#ff003c] focus:outline-none"
                  />
                </div>

                {/* Team Leader & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bebas text-sm text-gray-300 tracking-wider uppercase mb-1">
                      TEAM LEADER NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={leaderName}
                      onChange={(e) => setLeaderName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-black border border-white/20 rounded text-white font-space text-sm focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bebas text-sm text-gray-300 tracking-wider uppercase mb-1">
                      PHONE / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={leaderContact}
                      onChange={(e) => setLeaderContact(e.target.value)}
                      className="w-full px-4 py-2.5 bg-black border border-white/20 rounded text-white font-space text-sm focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Team Size Selector (2 to 4) */}
                <div>
                  <label className="block font-bebas text-sm text-gray-300 tracking-wider uppercase mb-1">
                    SELECT CREW SIZE (2–4 MEMBERS) *
                  </label>
                  <div className="flex items-center gap-3">
                    {[2, 3, 4].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => handleMemberCountChange(count)}
                        className={`flex-1 py-2 font-bebas text-lg rounded border transition-all ${
                          memberCount === count
                            ? 'bg-[#ff003c] border-[#ff003c] text-white shadow-spider-red'
                            : 'bg-black border-white/20 text-gray-400 hover:border-[#00f0ff]'
                        }`}
                      >
                        {count} MEMBERS
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Member Names */}
                {memberNames.map((name, i) => (
                  <div key={i}>
                    <label className="block font-bebas text-xs text-gray-400 tracking-wider uppercase mb-1">
                      TEAM MEMBER #{i + 2} NAME
                    </label>
                    <input
                      type="text"
                      placeholder={`Member ${i + 2} Full Name`}
                      value={name}
                      onChange={(e) => handleMemberNameChange(i, e.target.value)}
                      className="w-full px-4 py-2 bg-black border border-white/15 rounded text-white font-space text-xs focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>
                ))}

                {/* Preferred Domain Selection */}
                <div>
                  <label className="block font-bebas text-sm text-gray-300 tracking-wider uppercase mb-1">
                    PREFERRED INITIAL DOMAIN
                  </label>
                  <select
                    value={selectedDomainId}
                    onChange={(e) => setSelectedDomainId(e.target.value)}
                    className="w-full px-4 py-2.5 bg-black border border-white/20 rounded text-white font-space text-sm focus:border-[#ff003c] focus:outline-none"
                  >
                    {DOMAINS_DATA.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} — {d.tagline}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 mt-6 bg-[#ff003c] text-white font-bebas text-2xl tracking-wider rounded border border-white shadow-spider-red hover:bg-[#ff003c]/90 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-6 h-6 text-[#00f0ff]" />
                  <span>CONFIRM CREW REGISTRATION</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-20 h-20 mb-4 bg-[#ff003c]/20 border-2 border-[#ff003c] rounded-full flex items-center justify-center text-[#ff003c] shadow-glow-red">
                <CheckCircle2 className="w-12 h-12 text-[#00f0ff] animate-bounce" />
              </div>

              <span className="font-space text-xs text-[#00f0ff] tracking-widest uppercase font-bold">
                REGISTRATION CONFIRMED
              </span>

              <h3 className="font-anton text-4xl text-white tracking-wider uppercase my-2">
                CREW ENTERED: {teamName || 'LAUNCHPAD CREW'}
              </h3>

              <p className="font-inter text-sm text-gray-300 max-w-md mb-6">
                Your team is registered for <span className="text-[#ff003c] font-bold">Launchpad (Day 2, 10 AM, HPC Lab)</span>. Prepare to crack the Mystery Box!
              </p>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 bg-[#121216] border-2 border-[#00f0ff] text-[#00f0ff] font-bebas text-xl rounded hover:bg-[#00f0ff] hover:text-black transition-all"
              >
                RETURN TO LAUNCHPAD UNIVERSE
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
