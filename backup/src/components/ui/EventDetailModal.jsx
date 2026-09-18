import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export function EventDetailModal({ event, isOpen, onClose, initialTab = 'details' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', college: '', teamSize: '1' });
  const [isRegistered, setIsRegistered] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    setIsRegistered(true);

    // Doomsday Celebration Confetti (Toxic Green, Emerald, Red, Gold)
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#39FF88', '#16C784', '#E21D2D', '#FBCA03']
    });
  };

  const prizes = event.prizes || { first: "TBA", second: "TBA", third: "TBA", total: "₹10,000" };
  const coordinatorsList = Array.isArray(event.coordinators) ? event.coordinators : [];
  const rulesList = Array.isArray(event.rules) ? event.rules : [
    "Participants must report 15 minutes before event schedule.",
    "Decisions of the faculty & student coordinators are final.",
    "College ID card is mandatory for campus entry."
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 100,
      background: 'rgba(2, 6, 5, 0.9)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(7, 17, 13, 0.98) 0%, rgba(2, 6, 5, 0.99) 100%)',
        border: event.isHeroEvent ? '2px solid #E21D2D' : '1px solid rgba(57, 255, 136, 0.45)',
        boxShadow: event.isHeroEvent ? '0 0 50px rgba(226, 29, 45, 0.35)' : '0 0 35px rgba(57, 255, 136, 0.25)',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '30px',
        boxSizing: 'border-box',
        color: '#EAF7F0',
        fontFamily: "'Rajdhani', sans-serif",
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(57, 255, 136, 0.1)',
            border: '1px solid rgba(57, 255, 136, 0.3)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#39FF88',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '12px',
              padding: '2px 8px',
              background: 'rgba(57, 255, 136, 0.15)',
              border: '1px solid #39FF88',
              borderRadius: '4px',
              color: '#39FF88'
            }}>
              STATION {event.id}
            </span>
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              color: '#39FF88',
              letterSpacing: '1px'
            }}>
              // {event.heroCharacter}
            </span>
            {event.isHeroEvent && (
              <span style={{
                fontSize: '11px',
                background: '#E21D2D',
                color: '#FFF',
                padding: '2px 10px',
                borderRadius: '4px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Sparkles size={11} /> HERO HACKATHON
              </span>
            )}
          </div>

          <h2 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '28px',
            fontWeight: 800,
            margin: '4px 0',
            color: '#EAF7F0'
          }}>
            {event.title}
          </h2>
          <div style={{ fontSize: '14px', color: '#789589' }}>{event.category}</div>
        </div>

        {/* Modal Tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          borderBottom: '1px solid rgba(57, 255, 136, 0.2)',
          marginBottom: '20px',
          paddingBottom: '10px'
        }}>
          <button
            onClick={() => setActiveTab('details')}
            style={{
              background: activeTab === 'details' ? 'rgba(57, 255, 136, 0.2)' : 'transparent',
              border: activeTab === 'details' ? '1px solid #39FF88' : 'none',
              borderRadius: '4px',
              padding: '8px 16px',
              color: activeTab === 'details' ? '#EAF7F0' : '#789589',
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            HOLOGRAM BRIEFING & RULES
          </button>
          <button
            onClick={() => setActiveTab('register')}
            style={{
              background: activeTab === 'register' ? 'linear-gradient(135deg, #39FF88 0%, #16C784 100%)' : 'transparent',
              border: activeTab === 'register' ? 'none' : '1px solid rgba(57, 255, 136, 0.4)',
              borderRadius: '4px',
              padding: '8px 20px',
              color: activeTab === 'register' ? '#020605' : '#39FF88',
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: activeTab === 'register' ? '0 0 15px rgba(57, 255, 136, 0.5)' : 'none'
            }}
          >
            DOOMSDAY ACCESS REGISTRATION
          </button>
        </div>

        {/* TAB 1: DETAILS & RULES */}
        {activeTab === 'details' && (
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#EAF7F0', marginBottom: '24px' }}>
              {event.description}
            </p>

            {/* Telemetry Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              background: 'rgba(57, 255, 136, 0.05)',
              border: '1px solid rgba(57, 255, 136, 0.2)',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '24px'
            }}>
              <div>
                <div style={{ fontSize: '11px', color: '#789589' }}>SCHEDULE & TIMING</div>
                <div style={{ fontWeight: 'bold', color: '#39FF88', marginTop: '4px' }}>{event.day} | {event.timing}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#789589' }}>VENUE</div>
                <div style={{ fontWeight: 'bold', color: '#39FF88', marginTop: '4px' }}>{event.venue}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#789589' }}>PARTICIPANT CAP</div>
                <div style={{ fontWeight: 'bold', color: '#39FF88', marginTop: '4px' }}>{event.participants} Seats</div>
              </div>
            </div>

            {/* Prize Breakdown */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '14px', color: '#39FF88', marginBottom: '12px' }}>
                PRIZE DISTRIBUTION BREAKDOWN
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
                textAlign: 'center'
              }}>
                <div style={{ background: 'rgba(251, 202, 3, 0.1)', border: '1px solid #FBCA03', padding: '10px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '11px', color: '#FBCA03' }}>1ST PRIZE</div>
                  <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#FFF' }}>{prizes.first}</div>
                </div>
                <div style={{ background: 'rgba(192, 192, 192, 0.1)', border: '1px solid rgba(192, 192, 192, 0.4)', padding: '10px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '11px', color: '#C0C0C0' }}>2ND PRIZE</div>
                  <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#FFF' }}>{prizes.second}</div>
                </div>
                <div style={{ background: 'rgba(205, 127, 50, 0.1)', border: '1px solid rgba(205, 127, 50, 0.4)', padding: '10px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '11px', color: '#CD7F32' }}>3RD PRIZE</div>
                  <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#FFF' }}>{prizes.third}</div>
                </div>
                <div style={{ background: 'rgba(57, 255, 136, 0.15)', border: '1px solid #39FF88', padding: '10px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '11px', color: '#39FF88' }}>TOTAL POOL</div>
                  <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#FBCA03' }}>{prizes.total}</div>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '14px', color: '#39FF88', marginBottom: '10px' }}>
                RULES & PROTOCOLS
              </h3>
              <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: 1.8, fontSize: '14px', color: '#EAF7F0' }}>
                {rulesList.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* Coordinators */}
            <div style={{
              background: 'rgba(2, 6, 5, 0.6)',
              border: '1px solid rgba(120, 149, 137, 0.3)',
              borderRadius: '8px',
              padding: '14px 20px',
              fontSize: '13px'
            }}>
              <div style={{ color: '#789589', fontSize: '11px', marginBottom: '8px' }}>EVENT COMMAND PERSONNEL</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div><span style={{ color: '#39FF88' }}>Faculty Lead:</span> {event.faculty || 'Event Faculty'}</div>
                {coordinatorsList.map((c, i) => (
                  <div key={i}><span style={{ color: '#39FF88' }}>Coord {i + 1}:</span> {c.name} {c.phone ? `(${c.phone})` : ''}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: REGISTRATION FORM */}
        {activeTab === 'register' && (
          <div>
            {isRegistered ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle size={64} color="#39FF88" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '24px', color: '#39FF88' }}>
                  REGISTRATION CONFIRMED!
                </h3>
                <p style={{ color: '#EAF7F0', fontSize: '15px', marginTop: '10px' }}>
                  Your Security Access Pass for <strong>{event.title} ({event.heroCharacter})</strong> has been granted.
                </p>
                <div style={{
                  marginTop: '20px',
                  padding: '16px',
                  background: 'rgba(57, 255, 136, 0.1)',
                  border: '1px dashed #39FF88',
                  borderRadius: '6px',
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '13px',
                  color: '#39FF88'
                }}>
                  ACCESS PASS ID: DOOMSDAY-2K26-{event.id}-{(Math.random() * 8999 + 1000).toFixed(0)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitRegistration} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#39FF88', marginBottom: '6px' }}>FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(57, 255, 136, 0.05)',
                      border: '1px solid rgba(57, 255, 136, 0.3)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: '15px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#39FF88', marginBottom: '6px' }}>EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="operative@doomsday.io"
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'rgba(57, 255, 136, 0.05)',
                        border: '1px solid rgba(57, 255, 136, 0.3)',
                        borderRadius: '4px',
                        color: '#FFF',
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: '15px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#39FF88', marginBottom: '6px' }}>PHONE NUMBER</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9876543210"
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'rgba(57, 255, 136, 0.05)',
                        border: '1px solid rgba(57, 255, 136, 0.3)',
                        borderRadius: '4px',
                        color: '#FFF',
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: '15px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#39FF88', marginBottom: '6px' }}>COLLEGE / INSTITUTION</label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="Institute of Technology"
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(57, 255, 136, 0.05)',
                      border: '1px solid rgba(57, 255, 136, 0.3)',
                      borderRadius: '4px',
                      color: '#FFF',
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: '15px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: '10px',
                    padding: '14px',
                    background: 'linear-gradient(135deg, #39FF88 0%, #16C784 100%)',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#020605',
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '14px',
                    fontWeight: 900,
                    letterSpacing: '2px',
                    cursor: 'pointer',
                    boxShadow: '0 0 20px rgba(57, 255, 136, 0.6)'
                  }}
                >
                  CONFIRM EVENT REGISTRATION
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
