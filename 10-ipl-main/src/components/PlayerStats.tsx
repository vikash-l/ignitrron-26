import React from 'react';
import type { Player } from '../context/AuctionContext';

interface PlayerStatsProps {
  player: Player;
}

export const PlayerStats: React.FC<PlayerStatsProps> = ({ player }) => {
  const isBowler = player.role.toLowerCase().includes('bowler');
  const isBatter = player.role.toLowerCase().includes('batter') || player.role.toLowerCase().includes('keeper');
  const isAllRounder = player.role.toLowerCase().includes('all-rounder');

  // Helper to check if a stat is valid
  const hasBatting = player.careerRuns > 0 || (player.highestScore && player.highestScore !== '-' && player.highestScore !== '0');
  const hasBowling = player.careerWickets > 0 || (player.bestBowling && player.bestBowling !== '-' && player.bestBowling !== '0');

  return (
    <div className="player-stats-container">
      {/* IPL CAREER SECTION */}
      <div className="stats-section">
        <h3 className="stats-section-title">IPL CAREER</h3>
        <div className="stats-metrics-grid">
          <div className="metric-card">
            <span className="metric-value">{player.matches}</span>
            <span className="metric-label">MATCHES</span>
          </div>

          {/* Batting Career Stats (Show if the player has batting stats or is not purely a bowler) */}
          {(hasBatting || isBatter || isAllRounder) && (
            <>
              <div className="metric-card">
                <span className="metric-value">{player.careerRuns.toLocaleString()}</span>
                <span className="metric-label">RUNS</span>
              </div>
              <div className="metric-card">
                <span className="metric-value">{player.highestScore}</span>
                <span className="metric-label">HIGHEST SCORE</span>
              </div>
            </>
          )}

          {/* Bowling Career Stats (Show if the player has bowling stats or is not purely a batter) */}
          {(hasBowling || isBowler || isAllRounder) && (
            <>
              <div className="metric-card">
                <span className="metric-value">{player.careerWickets}</span>
                <span className="metric-label">WICKETS</span>
              </div>
              <div className="metric-card">
                <span className="metric-value">{player.bestBowling}</span>
                <span className="metric-label">BEST BOWLING</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* IPL 2026 SECTION */}
      {(player.ipl2026Runs > 0 || player.ipl2026Wickets > 0) && (
        <div className="stats-section">
          <h3 className="stats-section-title">IPL 2026 SEASON</h3>
          <div className="stats-metrics-grid">
            {player.ipl2026Runs > 0 && (
              <div className="metric-card accent-gold">
                <span className="metric-value">{player.ipl2026Runs}</span>
                <span className="metric-label">RUNS</span>
              </div>
            )}
            {player.ipl2026Wickets > 0 && (
              <div className="metric-card accent-blue">
                <span className="metric-value">{player.ipl2026Wickets}</span>
                <span className="metric-label">WICKETS</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
