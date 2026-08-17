import React, { useState, useEffect } from 'react';
import { useAuction, AuctionProvider } from './context/AuctionContext';
import type { Player } from './context/AuctionContext';
import { PlayerStats } from './components/PlayerStats';
import { FranchiseGrid } from './components/FranchiseGrid';
import { PlayerAvatar, preloadPlayerImage } from './components/PlayerAvatar';
import { KeyboardShortcuts } from './components/KeyboardShortcuts';
import { ErrorBoundary } from './components/ErrorBoundary';
import {
  Play,
  Pause,
  RotateCcw,
  Undo2,
  ArrowLeft,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const AppContent: React.FC = () => {
  const {
    players,
    currentPlayerIndex,
    currentPlayer,
    franchises,
    currentBid,
    currentBidder,
    bidHistory,
    tickerEvents,
    isPaused,
    bidIncrement,
    sets,
    placeBid,
    markSold,
    markUnsold,
    undo,
    reAuction,
    nextPlayer,
    prevPlayer,
    goToPlayer,
    setBidIncrement,
    setIsPaused,
    resetAuction,
    canUndo
  } = useAuction();

  // Navigation: 'landing' | 'auction' | 'dashboard' | 'pool' | 'results'
  const [currentView, setCurrentView] = useState<'landing' | 'auction' | 'dashboard' | 'pool' | 'results'>('landing');
  const [isAdminMode, setIsAdminMode] = useState<boolean>(true);
  const [keyboardShortcutBidder, setKeyboardShortcutBidder] = useState<string>('CSK');
  
  // Dashboard states
  const [selectedDashboardTeam, setSelectedDashboardTeam] = useState<string>('CSK');
  
  // Player Pool states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterSet, setFilterSet] = useState<string>('All');
  const [filterRole, setFilterRole] = useState<string>('All');
  const [filterNationality, setFilterNationality] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [selectedPoolPlayer, setSelectedPoolPlayer] = useState<Player | null>(null);

  // Results page states
  const [resultsSort, setResultsSort] = useState<'price-desc' | 'latest' | 'name' | 'team'>('price-desc');

  // SOLD overlay animation state
  const [soldAnimationPlayer, setSoldAnimationPlayer] = useState<{ name: string; team: string; price: number } | null>(null);
  
  // Preload next player image
  useEffect(() => {
    if (players.length > 0 && currentPlayerIndex < players.length - 1) {
      const nextPlayer = players[currentPlayerIndex + 1];
      if (nextPlayer) {
        preloadPlayerImage(nextPlayer.name);
      }
    }
  }, [currentPlayerIndex, players]);

  const handleMarkSoldWithAnimation = () => {
    if (!currentPlayer) return;
    if (!currentBidder) {
      alert("Place a bid before marking the player SOLD.");
      return;
    }
    
    setSoldAnimationPlayer({
      name: currentPlayer.name,
      team: currentBidder,
      price: currentBid
    });
    
    setTimeout(() => {
      markSold();
      setSoldAnimationPlayer(null);
    }, 1800);
  };

  // Helper values
  const currentSetPlayers = players.filter(p => p.set === (currentPlayer?.set || ''));
  const currentPlayerSetIndex = currentSetPlayers.findIndex(p => p.id === (currentPlayer?.id || -1));
  const completedPlayersCountInSet = currentSetPlayers.filter(p => p.status !== 'NOT AUCTIONED').length;
  
  // Dynamic next bid value
  const nextBidValue = currentPlayer
    ? currentBid === 0
      ? currentPlayer.basePrice
      : currentBid + bidIncrement
    : 0;

  // Filtered player pool
  const filteredPlayers = players.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSet = filterSet === 'All' || p.set === filterSet;
    const matchesRole = filterRole === 'All' || p.role === filterRole;
    const matchesNationality = filterNationality === 'All' || 
      (filterNationality === 'Indian' ? p.nationality === 'India' : p.nationality !== 'India');
    const matchesStatus = filterStatus === 'All' || p.status === filterStatus;
    
    return matchesSearch && matchesSet && matchesRole && matchesNationality && matchesStatus;
  });

  // Sorted Sold Players
  const soldPlayers = players.filter(p => p.status === 'SOLD');
  const unsoldPlayers = players.filter(p => p.status === 'UNSOLD');

  const getSortedSoldPlayers = () => {
    const list = [...soldPlayers];
    switch (resultsSort) {
      case 'price-desc':
        return list.sort((a, b) => (b.soldPrice || 0) - (a.soldPrice || 0));
      case 'name':
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case 'team':
        return list.sort((a, b) => a.soldTeam.localeCompare(b.soldTeam));
      case 'latest':
      default:
        // We can approximate latest by sorting descending by ID (which is the auction order)
        return list.sort((a, b) => b.id - a.id);
    }
  };

  if (currentView === 'landing') {
    return (
      <div className="landing-container">
        <span className="landing-tagline">MOCK IPL 2027</span>
        <h1 className="landing-title">THE AUCTION ROOM</h1>
        <h2 className="landing-subtitle">LIVE SIMULATOR</h2>
        <p className="landing-desc">
          Experience a live IPL-style player auction with real-time bidding, squad management and player statistics.
        </p>

        <div className="landing-stats-grid">
          <div className="landing-stat-card">
            <span className="landing-stat-value">{players.length}</span>
            <span className="landing-stat-label">PLAYERS</span>
          </div>
          <div className="landing-stat-card">
            <span className="landing-stat-value">10</span>
            <span className="landing-stat-label">FRANCHISES</span>
          </div>
          <div className="landing-stat-card">
            <span className="landing-stat-value">{sets.length}</span>
            <span className="landing-stat-label">AUCTION SETS</span>
          </div>
          <div className="landing-stat-card">
            <span className="landing-stat-value">0</span>
            <span className="landing-stat-label">RETENTIONS</span>
          </div>
        </div>

        <div className="landing-btn-group">
          <button className="btn-primary" onClick={() => setCurrentView('auction')}>
            ENTER AUCTION ROOM
          </button>
          <button className="btn-secondary" onClick={() => setCurrentView('pool')}>
            VIEW PLAYER POOL
          </button>
        </div>

        <p className="landing-disclaimer">
          Hypothetical auction simulation — not an official IPL auction. All player statistics and details correspond to the spreadsheet database.
        </p>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <header className="top-navbar">
        <div className="brand-section" style={{ cursor: 'pointer' }} onClick={() => setCurrentView('landing')}>
          <span className="brand-title">MOCK IPL 2027</span>
          <span className="brand-subtitle">LIVE AUCTION SIMULATOR</span>
        </div>

        <nav className="navbar-nav">
          <button
            className={`nav-tab-btn ${currentView === 'auction' ? 'active' : ''}`}
            onClick={() => setCurrentView('auction')}
          >
            AUCTION ROOM
          </button>
          <button
            className={`nav-tab-btn ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentView('dashboard')}
          >
            FRANCHISE DASHBOARDS
          </button>
          <button
            className={`nav-tab-btn ${currentView === 'pool' ? 'active' : ''}`}
            onClick={() => setCurrentView('pool')}
          >
            PLAYER POOL
          </button>
          <button
            className={`nav-tab-btn ${currentView === 'results' ? 'active' : ''}`}
            onClick={() => setCurrentView('results')}
          >
            RESULTS
          </button>
        </nav>

        {currentView === 'auction' && currentPlayer && (
          <div className="header-auction-info">
            <span className="info-set">{currentPlayer.set.toUpperCase()}</span>
            <span className="info-separator">|</span>
            <span className="info-player">PLAYER {currentPlayerSetIndex !== -1 ? String(currentPlayerSetIndex + 1).padStart(2, '0') : '00'}/{String(currentSetPlayers.length).padStart(2, '0')}</span>
            <span className="info-separator">|</span>
            <span className="status-badge live">● LIVE</span>
          </div>
        )}

        <div className="nav-right-actions">
          <div className="admin-toggle-wrapper">
            <span>ADMIN MODE</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isAdminMode}
                onChange={(e) => setIsAdminMode(e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <button
            onClick={resetAuction}
            className="btn-utility"
            style={{ padding: '6px 12px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px', height: '32px' }}
            title="Reset simulation to initial state"
          >
            <RotateCcw size={12} />
            RESET
          </button>
        </div>
      </header>
      {currentView === 'auction' && currentPlayer && (
        <div className="set-progress-indicator" style={{ height: '3px', backgroundColor: 'rgba(255,255,255,0.05)', width: '100%' }}>
          <div style={{
            height: '100%',
            backgroundColor: 'var(--accent-gold)',
            width: `${(completedPlayersCountInSet / currentSetPlayers.length) * 100}%`,
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      )}

      {/* Main View Area */}
      {currentView === 'auction' && (
        <div className="auction-room-wrapper" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
          {/* Top Control Bar */}
          <div className="bottom-control-bar top-control-bar" style={{ borderBottom: '1px solid var(--border-color)', borderTop: 'none' }}>
            {/* Left: Nav and Progress Indicators */}
            <div className="controls-left">
              <div className="player-nav-buttons">
                <button
                  className="btn-nav-arrow"
                  onClick={prevPlayer}
                  disabled={currentPlayerIndex === 0}
                  title="Go to previous player"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  className="btn-nav-arrow"
                  onClick={nextPlayer}
                  disabled={currentPlayerIndex === players.length - 1}
                  title="Go to next player"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600 }}>
                  PLAYER {currentPlayerSetIndex !== -1 ? String(currentPlayerSetIndex + 1).padStart(2, '0') : '00'} / {String(currentSetPlayers.length).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                  GLOBAL: {String(currentPlayerIndex + 1).padStart(3, '0')} / {players.length} • SET DONE: {completedPlayersCountInSet} / {currentSetPlayers.length}
                </span>
              </div>
            </div>

            {/* Center: Controls */}
            <div className="controls-center">
              {isAdminMode ? (
                <>
                  <button
                    className="btn-control-main btn-bid"
                    onClick={() => placeBid(keyboardShortcutBidder)}
                    disabled={!currentPlayer || isPaused || currentPlayer.status !== 'NOT AUCTIONED' || (franchises[keyboardShortcutBidder]?.purse || 0) < nextBidValue}
                    title={`Place bid on behalf of ${keyboardShortcutBidder} [Shortcut: B]`}
                  >
                    BID ₹{nextBidValue.toFixed(2)} Cr
                  </button>
                  <button
                    className="btn-control-main btn-sold"
                    onClick={handleMarkSoldWithAnimation}
                    disabled={!currentPlayer || currentPlayer.status !== 'NOT AUCTIONED'}
                    title="Mark player as SOLD to highest bidder [Shortcut: S]"
                  >
                    SOLD
                  </button>
                  <button
                    className="btn-control-main btn-unsold"
                    onClick={markUnsold}
                    disabled={!currentPlayer || currentPlayer.status !== 'NOT AUCTIONED'}
                    title="Mark player as UNSOLD [Shortcut: U]"
                  >
                    UNSOLD
                  </button>
                  <button
                    className="btn-control-main btn-utility"
                    onClick={() => setIsPaused(!isPaused)}
                    title="Toggle auction pause status [Shortcut: P]"
                  >
                    {isPaused ? <Play size={14} /> : <Pause size={14} />}
                    {isPaused ? 'RESUME' : 'PAUSE'}
                  </button>
                </>
              ) : (
                <div style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="status-badge live">●</span> VIEWING MODE ACTIVE
                </div>
              )}
            </div>

            {/* Right: Dropdowns, Undo, Re-auction */}
            <div className="controls-right">
              {isAdminMode ? (
                <>
                  {/* Keyboard Bidder selector */}
                  <div className="increment-select-wrapper">
                    <span>BIDDER:</span>
                    <select
                      className="select-increment"
                      value={keyboardShortcutBidder}
                      onChange={(e) => setKeyboardShortcutBidder(e.target.value)}
                      style={{ fontWeight: 700 }}
                    >
                      {Object.keys(franchises).map(fid => (
                        <option key={fid} value={fid}>{fid} (₹{franchises[fid].purse.toFixed(1)} Cr)</option>
                      ))}
                    </select>
                  </div>

                  {/* Increment selector */}
                  <div className="increment-select-wrapper">
                    <span>INCREMENT:</span>
                    <select
                      className="select-increment"
                      value={bidIncrement}
                      onChange={(e) => setBidIncrement(parseFloat(e.target.value))}
                    >
                      <option value="0.25">₹0.25 Cr</option>
                      <option value="0.50">₹0.50 Cr</option>
                      <option value="0.75">₹0.75 Cr</option>
                      <option value="1.00">₹1.00 Cr</option>
                      <option value="2.00">₹2.00 Cr</option>
                    </select>
                  </div>

                  <button
                    className="btn-nav-arrow"
                    onClick={undo}
                    disabled={!canUndo}
                    title="Undo last action [Shortcut: Ctrl+Z]"
                  >
                    <Undo2 size={14} />
                  </button>

                  <button
                    className="btn-nav-arrow"
                    onClick={() => reAuction()}
                    disabled={!currentPlayer || currentPlayer.status === 'NOT AUCTIONED'}
                    title="Re-auction current player [Shortcut: R]"
                  >
                    <RotateCcw size={14} />
                  </button>
                </>
              ) : (
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Press options in navbar to change screens
                </span>
              )}
            </div>
          </div>

          {/* Main Layout Area */}
          <div className="live-auction-layout">
            {/* Center Column: Player Panel + Stats */}
            <main className="player-zone">
              {currentPlayer ? (
                <>
                  <div className="player-header-card">
                    {/* SOLD Overlay */}
                    {soldAnimationPlayer && (
                      <div className="sold-overlay">
                        <span className="sold-title">SOLD</span>
                        <span className="sold-subtitle">
                          {soldAnimationPlayer.name} → {soldAnimationPlayer.team}
                        </span>
                        <span className="sold-subtitle" style={{ color: '#fbbf24', fontFamily: 'var(--font-display)', fontSize: '2rem', marginTop: '8px' }}>
                          ₹{soldAnimationPlayer.price.toFixed(2)} Cr
                        </span>
                      </div>
                    )}

                    {/* Player initials card fallback */}
                    <PlayerAvatar name={currentPlayer?.name} role={currentPlayer?.role} size="lg" />
                    
                    <div className="player-details">
                      <div className="player-badge-row">
                        <span className={`status-badge ${currentPlayer.status === 'NOT AUCTIONED' ? 'live' : currentPlayer.status.toLowerCase()}`}>
                          {currentPlayer.status === 'NOT AUCTIONED' ? 'LIVE' : currentPlayer.status}
                        </span>
                        <span className="role-badge">{currentPlayer.role}</span>
                        <span className="role-badge" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', color: 'var(--accent-gold)' }}>
                          {currentPlayer.tier}
                        </span>
                      </div>
                      <h1 className="player-name">{currentPlayer.name}</h1>
                      <div className="player-nationality-row">
                        <span>{currentPlayer.nationality === 'India' ? '🇮🇳 India' : `✈️ ${currentPlayer.nationality}`}</span>
                        <span className="player-prev-team">Prev Team: {currentPlayer.prevTeam}</span>
                      </div>
                    </div>

                    <div className="player-base-price-box">
                      <span className="base-price-label">BASE PRICE</span>
                      <span className="base-price-val">₹{currentPlayer.basePrice.toFixed(2)} Cr</span>
                    </div>
                  </div>

                  {/* Player Profile Details Row */}
                  <div className="player-profile-row">
                    <div className="profile-pill">Auction Set: {currentPlayer.set}</div>
                    <div className="profile-pill">Nationality: {currentPlayer.nationality}</div>
                    <div className="profile-pill">Tier Class: {currentPlayer.tier}</div>
                    <div className="profile-pill">Status: {currentPlayer.status}</div>
                    {currentPlayer.status === 'SOLD' && (
                      <div className="profile-pill" style={{ borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}>
                        Sold to {currentPlayer.soldTeam} for ₹{currentPlayer.soldPrice?.toFixed(2)} Cr
                      </div>
                    )}
                  </div>

                  {/* Player Stats Panel */}
                  <PlayerStats player={currentPlayer} />
                </>
              ) : (
                <div className="player-header-card" style={{ justifyContent: 'center', height: '100%', flexDirection: 'column', color: 'var(--text-muted)' }}>
                  <CheckCircle size={48} style={{ marginBottom: '16px' }} />
                  <h3>AUCTION COMPLETED</h3>
                  <p style={{ marginTop: '8px', fontSize: '0.85rem' }}>All {players.length} players have been auctioned. Review franchise dashboards or results.</p>
                </div>
              )}
            </main>

            {/* Right Column: Bid history + Current Bid */}
            <section className="bidding-zone">
              {/* Current Bid Display */}
              <div className="current-bid-box">
                <span className="current-bid-label">CURRENT BID</span>
                {currentBid > 0 ? (
                  <>
                    <span className={`current-bid-value`}>
                      ₹{currentBid.toFixed(2)} Cr
                    </span>
                    <span className="highest-bidder-name">
                      {currentBidder} • HIGHEST BIDDER
                    </span>
                  </>
                ) : (
                  <>
                    <span className="current-bid-value" style={{ color: 'var(--text-muted)' }}>
                      ₹{(currentPlayer?.basePrice || 0).toFixed(2)} Cr
                    </span>
                    <span className="no-bid-text">Awaiting first bid</span>
                  </>
                )}
              </div>

              {/* Bid History */}
              <div className="bid-history-panel">
                <h4 className="bid-history-title">BID HISTORY</h4>
                <div className="bid-history-list">
                  {bidHistory.length > 0 ? (
                    bidHistory.map((bid, idx) => (
                      <div key={idx} className="bid-history-item">
                        <span className="bid-hist-price">₹{bid.price.toFixed(2)} Cr</span>
                        <span className="bid-hist-team">{bid.bidder}</span>
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: '24px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      No bids placed yet
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Franchise standings */}
          <div className="franchise-standings-section" style={{ padding: '0 24px 20px 24px' }}>
            <FranchiseGrid
              interactive={true}
              onSelectTeam={(teamId) => {
                if (isAdminMode) {
                  if (currentPlayer && currentPlayer.status === 'NOT AUCTIONED' && !isPaused) {
                    placeBid(teamId);
                  }
                } else {
                  setSelectedDashboardTeam(teamId);
                  setCurrentView('dashboard');
                }
              }}
            />
          </div>
        </div>
      )}

      {currentView === 'dashboard' && (
        <div className="dashboard-container">
          {/* Franchise Sidebar */}
          <aside className="dashboard-sidebar-list">
            <h3 className="sidebar-title">FRANCHISES</h3>
            {Object.values(franchises).map((team) => (
              <button
                key={team.id}
                onClick={() => setSelectedDashboardTeam(team.id)}
                className={`dashboard-team-item ${selectedDashboardTeam === team.id ? 'active' : ''}`}
              >
                <div className="dash-team-meta">
                  <span>{team.logo}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{team.id}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>({team.squad.length})</span>
                </div>
                <div className="dash-team-purse">₹{team.purse.toFixed(2)} Cr</div>
              </button>
            ))}
          </aside>

          {/* Main Dashboard Details */}
          {(() => {
            const team = franchises[selectedDashboardTeam];
            const squadPlayers = players.filter(p => team.squad.includes(p.id));
            const spentPercent = (team.spent / 120.0) * 100;

            const batters = squadPlayers.filter(p => p.role.toLowerCase().includes('batter') && !p.role.toLowerCase().includes('wk')).length;
            const bowlers = squadPlayers.filter(p => p.role.toLowerCase().includes('bowler')).length;
            const allrounders = squadPlayers.filter(p => p.role.toLowerCase().includes('all-rounder')).length;
            const keepers = squadPlayers.filter(p => p.role.toLowerCase().includes('wk') || p.role.toLowerCase().includes('keeper')).length;
            
            const overseas = squadPlayers.filter(p => p.nationality !== 'India').length;
            const indian = squadPlayers.filter(p => p.nationality === 'India').length;

            return (
              <main className="dashboard-main-content">
                <div className="dashboard-team-header">
                  <div className="dashboard-team-title-row">
                    <span className="dashboard-team-logo">{team.logo}</span>
                    <div>
                      <h1 className="dashboard-team-name">{team.name}</h1>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MOCK FRANCHISE DASHBOARD</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="base-price-label">REMAINING PURSE</span>
                    <span className="base-price-val" style={{ color: 'var(--accent-gold)' }}>₹{team.purse.toFixed(2)} Cr</span>
                  </div>
                </div>

                {/* Spent Bar */}
                <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>BUDGET EXPENDITURE</span>
                    <span>₹{team.spent.toFixed(2)} / ₹120.00 Cr Spent ({Math.round(spentPercent)}%)</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(spentPercent, 100)}%`, backgroundColor: 'var(--accent-gold)', transition: 'width 0.3s ease' }}></div>
                  </div>
                </div>

                {/* Summary Metrics */}
                <div className="dashboard-team-summary-grid">
                  <div className="landing-stat-card">
                    <span className="landing-stat-value">{team.squad.length}</span>
                    <span className="landing-stat-label">SQUAD COUNT</span>
                  </div>
                  <div className="landing-stat-card">
                    <span className="landing-stat-value">{indian}</span>
                    <span className="landing-stat-label">INDIANS</span>
                  </div>
                  <div className="landing-stat-card">
                    <span className="landing-stat-value" style={{ color: overseas > 8 ? 'var(--accent-red)' : 'var(--text-primary)' }}>{overseas}</span>
                    <span className="landing-stat-label">OVERSEAS (MAX 8)</span>
                  </div>
                  <div className="landing-stat-card">
                    <span className="landing-stat-value">₹{team.spent.toFixed(2)} Cr</span>
                    <span className="landing-stat-label">TOTAL SPENT</span>
                  </div>
                </div>

                {/* Composition Card */}
                <div className="dashboard-composition-card">
                  <h3 className="stats-section-title" style={{ marginBottom: '16px' }}>ROLE COMPOSITION</h3>
                  <div className="composition-grid">
                    <div className="composition-item">
                      <span className="composition-val">{batters}</span>
                      <span className="composition-lbl">BATTERS</span>
                    </div>
                    <div className="composition-item">
                      <span className="composition-val">{bowlers}</span>
                      <span className="composition-lbl">BOWLERS</span>
                    </div>
                    <div className="composition-item">
                      <span className="composition-val">{allrounders}</span>
                      <span className="composition-lbl">ALL-ROUNDERS</span>
                    </div>
                    <div className="composition-item">
                      <span className="composition-val">{keepers}</span>
                      <span className="composition-lbl">WICKETKEEPERS</span>
                    </div>
                  </div>
                </div>

                {/* Squad List */}
                <div className="squad-table-container">
                  <h3 className="table-title">PURCHASED SQUAD LIST</h3>
                  {squadPlayers.length > 0 ? (
                    <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
                      <table className="premium-table">
                        <thead>
                          <tr>
                            <th>Player Name</th>
                            <th>Role</th>
                            <th>Nationality</th>
                            <th>Base Price</th>
                            <th>Bought Price</th>
                            {isAdminMode && <th>Actions</th>}
                          </tr>
                        </thead>
                        <tbody>
                          {squadPlayers.map((player) => (
                            <tr key={player.id}>
                              <td style={{ fontWeight: 600, color: '#fff' }}>{player.name}</td>
                              <td>{player.role}</td>
                              <td>{player.nationality}</td>
                              <td>₹{player.basePrice.toFixed(2)} Cr</td>
                              <td className="table-cell-price">₹{player.soldPrice?.toFixed(2)} Cr</td>
                              {isAdminMode && (
                                <td>
                                  <button
                                    className="btn-utility"
                                    onClick={() => reAuction(player.id)}
                                    style={{ padding: '4px 8px', fontSize: '0.65rem', height: '24px' }}
                                  >
                                    Re-Auction
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div style={{ border: '1px dotted var(--border-color)', padding: '36px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', borderRadius: '6px' }}>
                      <h4 style={{ color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 700 }}>NO PLAYERS PURCHASED</h4>
                      <p>This team has not purchased any players yet.</p>
                    </div>
                  )}
                </div>
              </main>
            );
          })()}
        </div>
      )}

      {currentView === 'pool' && (
        <div className="pool-container">
          {/* Filters */}
          <div className="pool-filter-bar">
            <input
              type="text"
              placeholder="Search player name..."
              className="input-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
              className="select-filter"
              value={filterSet}
              onChange={(e) => setFilterSet(e.target.value)}
            >
              <option value="All">All Sets</option>
              {sets.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <select
              className="select-filter"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option value="Batter">Batter</option>
              <option value="Bowler">Bowler</option>
              <option value="All-rounder">All-rounder</option>
              <option value="WK-Batter">WK-Batter</option>
            </select>

            <select
              className="select-filter"
              value={filterNationality}
              onChange={(e) => setFilterNationality(e.target.value)}
            >
              <option value="All">All Nationalities</option>
              <option value="Indian">Indian Only</option>
              <option value="Overseas">Overseas Only</option>
            </select>

            <select
              className="select-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="NOT AUCTIONED">Not Auctioned</option>
              <option value="SOLD">Sold</option>
              <option value="UNSOLD">Unsold</option>
            </select>
          </div>

          {/* Player list table */}
          <div className="pool-table-wrapper">
            <table className="premium-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Player Name</th>
                  <th>Set Name</th>
                  <th>Role</th>
                  <th>Nationality</th>
                  <th>Previous Team</th>
                  <th>Base Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlayers.map((p) => {
                  let statusColor = 'var(--text-muted)';
                  if (p.status === 'SOLD') statusColor = 'var(--accent-green)';
                  else if (p.status === 'UNSOLD') statusColor = 'var(--accent-red)';

                  return (
                    <tr
                      key={p.id}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setSelectedPoolPlayer(p)}
                    >
                      <td style={{ color: 'var(--text-muted)' }}>{String(p.id).padStart(3, '0')}</td>
                      <td style={{ fontWeight: 600, color: '#fff' }}>{p.name}</td>
                      <td>{p.set}</td>
                      <td>{p.role}</td>
                      <td>{p.nationality}</td>
                      <td>{p.prevTeam}</td>
                      <td>₹{p.basePrice.toFixed(2)} Cr</td>
                      <td style={{ color: statusColor, fontWeight: p.status !== 'NOT AUCTIONED' ? 700 : 400 }}>
                        {p.status === 'SOLD' ? `SOLD (${p.soldTeam})` : p.status}
                      </td>
                      <td>
                        <button
                          className="btn-utility"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPoolPlayer(null);
                            const playerIdx = players.findIndex(pl => pl.id === p.id);
                            if (playerIdx !== -1) {
                              goToPlayer(playerIdx);
                            }
                            setCurrentView('auction');
                          }}
                          style={{ padding: '2px 8px', fontSize: '0.7rem', height: '22px' }}
                        >
                          View Live
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filteredPlayers.length === 0 && (
              <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>
                No players match your search criteria.
              </div>
            )}
          </div>
        </div>
      )}

      {currentView === 'results' && (
        <div className="results-container">
          <div className="results-header">
            <div className="results-title-group">
              <h1 style={{ fontSize: '1.75rem' }}>AUCTION RESULTS</h1>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Overview of all sold and unsold players</p>
            </div>

            <div className="results-sort-bar">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>SORT BY:</span>
              <select
                className="select-filter"
                value={resultsSort}
                onChange={(e) => setResultsSort(e.target.value as any)}
                style={{ padding: '6px 12px' }}
              >
                <option value="price-desc">Highest Price First</option>
                <option value="latest">Latest Sold</option>
                <option value="name">Player Name</option>
                <option value="team">Sold Franchise</option>
              </select>
            </div>
          </div>

          <div className="results-sections-grid">
            {/* Sold Players */}
            <div className="results-panel">
              <h3 className="stats-section-title" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span>SOLD PLAYERS ({soldPlayers.length})</span>
                <span style={{ color: 'var(--accent-green)' }}>
                  Total Spent: ₹{soldPlayers.reduce((acc, p) => acc + (p.soldPrice || 0), 0).toFixed(2)} Cr
                </span>
              </h3>

              {soldPlayers.length > 0 ? (
                <div style={{ overflowX: 'auto' }}>
                  <table className="premium-table">
                    <thead>
                      <tr>
                        <th>Player Name</th>
                        <th>Sold Team</th>
                        <th>Sold Price</th>
                        <th>Role</th>
                        <th>Set Group</th>
                        {isAdminMode && <th>Action</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {getSortedSoldPlayers().map((p) => (
                        <tr key={p.id}>
                          <td style={{ fontWeight: 600, color: '#fff' }}>{p.name}</td>
                          <td style={{ fontWeight: 700, color: 'var(--accent-gold)' }}>{p.soldTeam}</td>
                          <td className="table-cell-price">₹{p.soldPrice?.toFixed(2)} Cr</td>
                          <td>{p.role}</td>
                          <td>{p.set}</td>
                          {isAdminMode && (
                            <td>
                              <button
                                className="btn-utility"
                                onClick={() => reAuction(p.id)}
                                style={{ padding: '4px 8px', fontSize: '0.65rem', height: '24px' }}
                              >
                                Re-Auction
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={{ border: '1px dotted var(--border-color)', padding: '36px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  No players have been sold yet.
                </div>
              )}
            </div>

            {/* Unsold Players */}
            <div className="results-panel">
              <h3 className="stats-section-title" style={{ marginBottom: '16px' }}>UNSOLD PLAYERS ({unsoldPlayers.length})</h3>
              {unsoldPlayers.length > 0 ? (
                <div style={{ overflowX: 'auto' }}>
                  <table className="premium-table">
                    <thead>
                      <tr>
                        <th>Player Name</th>
                        <th>Role</th>
                        <th>Nationality</th>
                        <th>Base Price</th>
                        <th>Set Group</th>
                        {isAdminMode && <th>Action</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {unsoldPlayers.map((p) => (
                        <tr key={p.id}>
                          <td style={{ fontWeight: 600, color: '#fff' }}>{p.name}</td>
                          <td>{p.role}</td>
                          <td>{p.nationality}</td>
                          <td>₹{p.basePrice.toFixed(2)} Cr</td>
                          <td>{p.set}</td>
                          {isAdminMode && (
                            <td>
                              <button
                                className="btn-utility"
                                onClick={() => reAuction(p.id)}
                                style={{ padding: '4px 8px', fontSize: '0.65rem', height: '24px' }}
                              >
                                Re-Auction
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={{ border: '1px dotted var(--border-color)', padding: '36px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  No unsold players.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Keyboard shortcuts registerer for Admin Mode */}
      {isAdminMode && currentView === 'auction' && (
        <KeyboardShortcuts 
          selectedTeamId={keyboardShortcutBidder} 
          onMarkSold={handleMarkSoldWithAnimation} 
        />
      )}

      {/* Player Pool Detailed Modal */}
      {selectedPoolPlayer && (
        <div className="modal-overlay" onClick={() => setSelectedPoolPlayer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>PLAYER PROFILE</h3>
              <button className="modal-close-btn" onClick={() => setSelectedPoolPlayer(null)}>×</button>
            </div>
            <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <PlayerAvatar name={selectedPoolPlayer?.name} role={selectedPoolPlayer?.role} size="md" />
                <div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{selectedPoolPlayer.name}</h2>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="role-badge">{selectedPoolPlayer.role}</span>
                    <span className={`status-badge ${selectedPoolPlayer.status.toLowerCase()}`}>
                      {selectedPoolPlayer.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', fontSize: '0.8rem' }}>
                <div><span style={{ color: 'var(--text-muted)' }}>Nationality:</span> {selectedPoolPlayer.nationality}</div>
                <div><span style={{ color: 'var(--text-muted)' }}>Base Price:</span> ₹{selectedPoolPlayer.basePrice.toFixed(2)} Cr</div>
                <div><span style={{ color: 'var(--text-muted)' }}>Previous Team:</span> {selectedPoolPlayer.prevTeam}</div>
                <div><span style={{ color: 'var(--text-muted)' }}>Set:</span> {selectedPoolPlayer.set}</div>
                {selectedPoolPlayer.status === 'SOLD' && (
                  <>
                    <div><span style={{ color: 'var(--text-muted)' }}>Sold Team:</span> {selectedPoolPlayer.soldTeam}</div>
                    <div><span style={{ color: 'var(--text-muted)' }}>Sold Price:</span> ₹{selectedPoolPlayer.soldPrice?.toFixed(2)} Cr</div>
                  </>
                )}
              </div>

              {/* Stats */}
              <PlayerStats player={selectedPoolPlayer} />

              {/* Admin Modals actions */}
              {isAdminMode && (
                <div className="admin-actions-section">
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginBottom: '8px' }}>ADMIN CONTROLS</h4>
                  <div className="admin-action-row">
                    <button
                      className="btn-utility"
                      style={{ fontSize: '0.8rem' }}
                      onClick={() => {
                        goToPlayer(selectedPoolPlayer.id - 1);
                        setSelectedPoolPlayer(null);
                        setCurrentView('auction');
                      }}
                    >
                      Make Active Player in Auction
                    </button>
                    {selectedPoolPlayer.status !== 'NOT AUCTIONED' && (
                      <button
                        className="btn-utility"
                        style={{ fontSize: '0.8rem', borderColor: 'var(--accent-red)', color: 'var(--accent-red)' }}
                        onClick={() => {
                          reAuction(selectedPoolPlayer.id);
                          // refresh modal data
                          setSelectedPoolPlayer({
                            ...selectedPoolPlayer,
                            status: 'NOT AUCTIONED',
                            soldTeam: '',
                            soldPrice: null
                          });
                        }}
                      >
                        Reset / Re-Auction
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}



      {/* Scrolling Event Ticker at bottom */}
      <div className="ticker-bar">
        <span className="ticker-label">
          <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: 'var(--accent-red)', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></span>
          LIVE UPDATES
        </span>
        <div className="ticker-flow">
          {tickerEvents.length > 0 ? (
            tickerEvents.map((evt) => {
              let cl = 'ticker-item';
              if (evt.type === 'SOLD') cl += ' sold';
              else if (evt.type === 'UNSOLD') cl += ' unsold';

              return (
                <span key={evt.id} className={cl}>
                  {evt.message}
                  <span className="ticker-item-dot"></span>
                </span>
              );
            })
          ) : (
            <span className="ticker-item">
              Awaiting auction commencement. Current Set: {currentPlayer?.set || 'None'}
            </span>
          )}
          {/* Duplicate to ensure continuous flow */}
          {tickerEvents.length > 0 && tickerEvents.map((evt) => {
            let cl = 'ticker-item';
            if (evt.type === 'SOLD') cl += ' sold';
            else if (evt.type === 'UNSOLD') cl += ' unsold';

            return (
              <span key={`dup-${evt.id}`} className={cl}>
                {evt.message}
                <span className="ticker-item-dot"></span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <AuctionProvider>
          <AppContent />
        </AuctionProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
