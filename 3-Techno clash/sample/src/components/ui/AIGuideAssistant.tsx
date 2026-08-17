import React, { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

export const AIGuideAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'nexa' | 'user'; text: string }>>([
    {
      sender: 'nexa',
      text: "Greetings! I'm NEXA, chief architect of TECHNO CLASH. How can I assist your team's tactical prep today?"
    }
  ]);
  const [input, setInput] = useState('');

  const handleToggle = () => {
    sound.playClick();
    setIsOpen(!isOpen);
  };

  const handlePresetSelect = (question: string, answer: string) => {
    sound.playClick();
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: question },
      { sender: 'nexa', text: answer }
    ]);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    sound.playClick();
    const userQuery = input.trim();
    setInput('');

    setMessages(prev => [...prev, { sender: 'user', text: userQuery }]);

    // Simulated NEXA response logic
    setTimeout(() => {
      let reply = "That's an intriguing query! TECHNO CLASH tests both speed and technical depth. Check out our 4 battle rounds or register your team to secure your entry pass!";
      const lower = userQuery.toLowerCase();
      if (lower.includes('round') || lower.includes('stage')) {
        reply = "We have 4 intense rounds: Round 1 (Rapid Fire), Round 2 (Visual Schematic Scan), Round 3 (Live Buzzer Battle), and Round 4 (Grand Tech Puzzle).";
      } else if (lower.includes('prize') || lower.includes('win') || lower.includes('cash')) {
        reply = "The prize pool is ₹1,00,000! Grand Champions receive ₹50,000 + Trophy + Incubation Vouchers!";
      } else if (lower.includes('register') || lower.includes('sign up') || lower.includes('fee')) {
        reply = "Registration is completely FREE for college student teams (2-3 members). Click 'REGISTER NOW' to get your holographic pass!";
      } else if (lower.includes('who') || lower.includes('nexa') || lower.includes('you')) {
        reply = "I'm NEXA, a futuristic tech prodigy and the lead engineer who built the TECHNO CLASH evaluation neural grid!";
      }

      setMessages(prev => [...prev, { sender: 'nexa', text: reply }]);
      sound.playHover();
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          onMouseEnter={() => sound.playHover()}
          className="group relative flex items-center gap-3 bg-slate-900/90 border border-cyan-500/50 hover:border-cyan-400 text-white px-4 py-3 rounded-full shadow-[0_0_25px_rgba(0,240,255,0.4)] backdrop-blur-md transition-all duration-300 hover:scale-105"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-cyan-400/80 bg-slate-800">
            <img 
              src={eventData.character.avatar} 
              alt={eventData.character.name}
              className="w-full h-full object-cover" 
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-cyan-400 rounded-full border border-black animate-pulse" />
          </div>
          <div className="text-left font-mono">
            <div className="text-xs font-bold text-cyan-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> NEXA AI GUIDE
            </div>
            <div className="text-[10px] text-slate-400">Ask Lab Assistant</div>
          </div>
        </button>
      )}

      {/* Interactive AI Guide Modal/Drawer */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] h-[520px] bg-[#070c20]/95 border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] backdrop-blur-xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-slate-900/90 border-b border-cyan-500/30 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-cyan-400 shadow-[0_0_10px_#00F0FF]">
                <img src={eventData.character.avatar} alt="NEXA" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-mono text-sm font-bold text-cyan-400 flex items-center gap-1.5">
                  NEXA <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/40">ONLINE</span>
                </h4>
                <p className="text-[11px] text-slate-400 font-mono">TECHNO CLASH Digital Guide</p>
              </div>
            </div>
            <button 
              onClick={handleToggle}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div className="bg-slate-950/60 p-2.5 border-b border-cyan-900/40 flex flex-wrap gap-1.5">
            {eventData.character.aiPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handlePresetSelect(prompt.question, prompt.answer)}
                className="text-[10px] font-mono bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 px-2.5 py-1 rounded-full transition text-left"
              >
                {prompt.question}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'nexa' && (
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-cyan-400 shrink-0 mt-0.5">
                    <img src={eventData.character.avatar} alt="NEXA" className="w-full h-full object-cover" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-xl p-3 leading-relaxed font-mono ${
                    msg.sender === 'user'
                      ? 'bg-cyan-600/30 border border-cyan-400/40 text-cyan-100 rounded-tr-none'
                      : 'bg-slate-900/90 border border-violet-500/40 text-slate-200 rounded-tl-none shadow-[0_0_15px_rgba(112,0,255,0.1)]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950/80 border-t border-cyan-500/30 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask NEXA anything about TECHNO CLASH..."
              className="flex-1 bg-slate-900/90 border border-slate-700 focus:border-cyan-400 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none font-mono transition"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 p-2 rounded-xl font-bold transition shadow-[0_0_15px_#00F0FF]"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
