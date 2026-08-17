import React, { createContext, useContext, useState, useEffect } from 'react';
import playersData from '../data/players.json';

export interface Player {
  id: number;
  set: string;
  name: string;
  nationality: string;
  role: string;
  matches: number;
  careerRuns: number;
  careerWickets: number;
  bestBowling: string;
  highestScore: string;
  ipl2026Runs: number;
  ipl2026Wickets: number;
  prevTeam: string;
  basePrice: number;
  tier: string;
  soldPrice: number | null;
  soldTeam: string;
  status: 'NOT AUCTIONED' | 'SOLD' | 'UNSOLD';
}

export interface Franchise {
  id: string;
  name: string;
  logo: string;
  purse: number; // in Cr
  spent: number; // in Cr
  squad: number[]; // player ids
}

export interface Bid {
  price: number;
  bidder: string;
  timestamp: number;
}

export interface TickerEvent {
  id: string;
  message: string;
  type: 'SOLD' | 'UNSOLD' | 'BID';
  timestamp: number;
}

interface SavedState {
  players: Player[];
  currentPlayerIndex: number;
  franchises: Record<string, Franchise>;
  currentBid: number;
  currentBidder: string;
  bidHistory: Bid[];
  tickerEvents: TickerEvent[];
}

interface AuctionContextType {
  players: Player[];
  currentPlayerIndex: number;
  currentPlayer: Player | null;
  franchises: Record<string, Franchise>;
  currentBid: number;
  currentBidder: string;
  bidHistory: Bid[];
  tickerEvents: TickerEvent[];
  isPaused: boolean;
  bidIncrement: number; // in Cr
  sets: string[];
  
  // Actions
  placeBid: (teamId: string) => boolean;
  markSold: () => void;
  markUnsold: () => void;
  undo: () => void;
  reAuction: (playerId?: number) => void;
  nextPlayer: () => void;
  prevPlayer: () => void;
  goToPlayer: (index: number) => void;
  goToSet: (setName: string) => void;
  setBidIncrement: (val: number) => void;
  setIsPaused: (val: boolean) => void;
  resetAuction: () => void;
  canUndo: boolean;
}

const STARTING_PURSE = 120.0; // ₹120 Cr

const INITIAL_FRANCHISES: Record<string, Franchise> = {
  CSK: { id: 'CSK', name: 'Chennai Super Kings', logo: '🦁', purse: STARTING_PURSE, spent: 0, squad: [] },
  DC: { id: 'DC', name: 'Delhi Capitals', logo: '🐯', purse: STARTING_PURSE, spent: 0, squad: [] },
  GT: { id: 'GT', name: 'Gujarat Titans', logo: '⚡', purse: STARTING_PURSE, spent: 0, squad: [] },
  KKR: { id: 'KKR', name: 'Kolkata Knight Riders', logo: '💜', purse: STARTING_PURSE, spent: 0, squad: [] },
  LSG: { id: 'LSG', name: 'Lucknow Super Giants', logo: '🦅', purse: STARTING_PURSE, spent: 0, squad: [] },
  MI: { id: 'MI', name: 'Mumbai Indians', logo: '🌀', purse: STARTING_PURSE, spent: 0, squad: [] },
  PBKS: { id: 'PBKS', name: 'Punjab Kings', logo: '🦁', purse: STARTING_PURSE, spent: 0, squad: [] },
  RR: { id: 'RR', name: 'Rajasthan Royals', logo: '👑', purse: STARTING_PURSE, spent: 0, squad: [] },
  RCB: { id: 'RCB', name: 'Royal Challengers Bengaluru', logo: '🏃', purse: STARTING_PURSE, spent: 0, squad: [] },
  SRH: { id: 'SRH', name: 'Sunrisers Hyderabad', logo: '🧡', purse: STARTING_PURSE, spent: 0, squad: [] }
};

const AuctionContext = createContext<AuctionContextType | undefined>(undefined);

export const AuctionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [franchises, setFranchises] = useState<Record<string, Franchise>>(INITIAL_FRANCHISES);
  const [currentBid, setCurrentBid] = useState<number>(0);
  const [currentBidder, setCurrentBidder] = useState<string>('');
  const [bidHistory, setBidHistory] = useState<Bid[]>([]);
  const [tickerEvents, setTickerEvents] = useState<TickerEvent[]>([]);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [bidIncrement, setBidIncrement] = useState<number>(0.25); // default 0.25 Cr
  const [undoStack, setUndoStack] = useState<SavedState[]>([]);
  const [sets, setSets] = useState<string[]>([]);

  // 1. Initial Load & Setup sets
  useEffect(() => {
    const saved = localStorage.getItem('ipl_auction_state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPlayers(parsed.players);
        setCurrentPlayerIndex(parsed.currentPlayerIndex);
        setFranchises(parsed.franchises);
        setCurrentBid(parsed.currentBid);
        setCurrentBidder(parsed.currentBidder);
        setBidHistory(parsed.bidHistory);
        setTickerEvents(parsed.tickerEvents);
        if (parsed.undoStack) setUndoStack(parsed.undoStack);
      } catch (e) {
        console.error("Failed to load saved state", e);
        initializeFromJSON();
      }
    } else {
      initializeFromJSON();
    }
  }, []);

  const initializeFromJSON = () => {
    const typedPlayers = playersData.map((p: any) => ({
      ...p,
      status: p.status as Player['status']
    })) as Player[];
    setPlayers(typedPlayers);
    setCurrentPlayerIndex(0);
    setFranchises(INITIAL_FRANCHISES);
    setCurrentBid(0);
    setCurrentBidder('');
    setBidHistory([]);
    setTickerEvents([]);
    setUndoStack([]);
  };

  // Extract unique sets
  useEffect(() => {
    if (players.length > 0) {
      const uniqueSets: string[] = [];
      players.forEach(p => {
        if (!uniqueSets.includes(p.set)) {
          uniqueSets.push(p.set);
        }
      });
      setSets(uniqueSets);
    }
  }, [players]);

  // Save state on change
  useEffect(() => {
    if (players.length > 0) {
      try {
        const stateToSave = {
          players,
          currentPlayerIndex,
          franchises,
          currentBid,
          currentBidder,
          bidHistory,
          tickerEvents
        };
        localStorage.setItem('ipl_auction_state', JSON.stringify(stateToSave));
      } catch (e) {
        console.error("Failed to save state to localStorage:", e);
      }
    }
  }, [players, currentPlayerIndex, franchises, currentBid, currentBidder, bidHistory, tickerEvents]);

  const currentPlayer = players[currentPlayerIndex] || null;

  // Helper to save history snapshot for undo
  const saveStateForUndo = (customPlayers = players, customIndex = currentPlayerIndex, customFranchises = franchises) => {
    const snapshot: SavedState = {
      players: JSON.parse(JSON.stringify(customPlayers)),
      currentPlayerIndex: customIndex,
      franchises: JSON.parse(JSON.stringify(customFranchises)),
      currentBid,
      currentBidder,
      bidHistory: JSON.parse(JSON.stringify(bidHistory)),
      tickerEvents: JSON.parse(JSON.stringify(tickerEvents))
    };
    setUndoStack(prev => [...prev, snapshot]);
  };

  // Actions
  const placeBid = (teamId: string): boolean => {
    if (!currentPlayer || isPaused || currentPlayer.status !== 'NOT AUCTIONED') return false;

    // Check if team has enough purse
    const team = franchises[teamId];
    if (!team) return false;

    // Next bid price calculation
    let nextPrice = currentBid === 0 ? currentPlayer.basePrice : currentBid + bidIncrement;
    nextPrice = Math.round(nextPrice * 100) / 100; // avoid floating point issues

    if (team.purse < nextPrice) {
      return false; // Insufficient purse
    }

    saveStateForUndo();

    setCurrentBid(nextPrice);
    setCurrentBidder(teamId);
    
    const newBid: Bid = {
      price: nextPrice,
      bidder: teamId,
      timestamp: Date.now()
    };
    setBidHistory(prev => [newBid, ...prev]);

    // Add to ticker
    const eventMsg = `CURRENT BID — ${currentPlayer.name} — ₹${nextPrice.toFixed(2)} Cr — ${teamId}`;
    setTickerEvents(prev => [
      { id: Math.random().toString(), message: eventMsg, type: 'BID', timestamp: Date.now() },
      ...prev.slice(0, 49) // Keep last 50 events
    ]);

    return true;
  };

  const markSold = () => {
    if (!currentPlayer || currentPlayer.status !== 'NOT AUCTIONED' || !currentBidder || currentBid === 0) return;

    saveStateForUndo();

    const finalPrice = currentBid;
    const finalTeam = currentBidder;

    // Update player
    const updatedPlayers = players.map((p, idx) => {
      if (idx === currentPlayerIndex) {
        return {
          ...p,
          status: 'SOLD' as const,
          soldPrice: finalPrice,
          soldTeam: finalTeam
        };
      }
      return p;
    });

    // Update franchise
    const updatedFranchises = { ...franchises };
    const team = updatedFranchises[finalTeam];
    if (team) {
      updatedFranchises[finalTeam] = {
        ...team,
        purse: Math.round((team.purse - finalPrice) * 100) / 100,
        spent: Math.round((team.spent + finalPrice) * 100) / 100,
        squad: [...team.squad, currentPlayer.id]
      };
    }

    setPlayers(updatedPlayers);
    setFranchises(updatedFranchises);

    // Ticker event
    const eventMsg = `SOLD — ${currentPlayer.name} → ${finalTeam} — ₹${finalPrice.toFixed(2)} Cr`;
    setTickerEvents(prev => [
      { id: Math.random().toString(), message: eventMsg, type: 'SOLD', timestamp: Date.now() },
      ...prev.slice(0, 49)
    ]);

    // Reset bidding and go to next player
    setCurrentBid(0);
    setCurrentBidder('');
    setBidHistory([]);

    // Find next un-auctioned player index
    const nextIdx = updatedPlayers.findIndex((p, idx) => idx > currentPlayerIndex && p.status === 'NOT AUCTIONED');
    if (nextIdx !== -1) {
      setCurrentPlayerIndex(nextIdx);
    } else {
      // Find first un-auctioned player overall
      const firstUn = updatedPlayers.findIndex(p => p.status === 'NOT AUCTIONED');
      if (firstUn !== -1) {
        setCurrentPlayerIndex(firstUn);
      }
    }
  };

  const markUnsold = () => {
    if (!currentPlayer || currentPlayer.status !== 'NOT AUCTIONED') return;

    saveStateForUndo();

    // Update player status
    const updatedPlayers = players.map((p, idx) => {
      if (idx === currentPlayerIndex) {
        return {
          ...p,
          status: 'UNSOLD' as const
        };
      }
      return p;
    });

    setPlayers(updatedPlayers);

    // Ticker event
    const eventMsg = `UNSOLD — ${currentPlayer.name}`;
    setTickerEvents(prev => [
      { id: Math.random().toString(), message: eventMsg, type: 'UNSOLD', timestamp: Date.now() },
      ...prev.slice(0, 49)
    ]);

    // Reset bidding
    setCurrentBid(0);
    setCurrentBidder('');
    setBidHistory([]);

    // Advance player index
    const nextIdx = updatedPlayers.findIndex((p, idx) => idx > currentPlayerIndex && p.status === 'NOT AUCTIONED');
    if (nextIdx !== -1) {
      setCurrentPlayerIndex(nextIdx);
    } else {
      const firstUn = updatedPlayers.findIndex(p => p.status === 'NOT AUCTIONED');
      if (firstUn !== -1) {
        setCurrentPlayerIndex(firstUn);
      }
    }
  };

  const undo = () => {
    if (undoStack.length === 0) return;
    const previous = undoStack[undoStack.length - 1];
    setUndoStack(prev => prev.slice(0, prev.length - 1));

    setPlayers(previous.players);
    setCurrentPlayerIndex(previous.currentPlayerIndex);
    setFranchises(previous.franchises);
    setCurrentBid(previous.currentBid);
    setCurrentBidder(previous.currentBidder);
    setBidHistory(previous.bidHistory);
    setTickerEvents(previous.tickerEvents);
  };

  const reAuction = (playerId?: number) => {
    const idToReset = playerId !== undefined ? playerId : (currentPlayer?.id || null);
    if (!idToReset) return;

    const idx = players.findIndex(p => p.id === idToReset);
    if (idx === -1) return;

    saveStateForUndo();

    const targetPlayer = players[idx];
    
    // If target player was sold, we need to return the money and remove from franchise squad
    const updatedFranchises = { ...franchises };
    if (targetPlayer.status === 'SOLD' && targetPlayer.soldTeam) {
      const team = updatedFranchises[targetPlayer.soldTeam];
      if (team) {
        updatedFranchises[targetPlayer.soldTeam] = {
          ...team,
          purse: Math.round((team.purse + (targetPlayer.soldPrice || 0)) * 100) / 100,
          spent: Math.round((team.spent - (targetPlayer.soldPrice || 0)) * 100) / 100,
          squad: team.squad.filter(sid => sid !== targetPlayer.id)
        };
      }
    }

    const updatedPlayers = players.map(p => {
      if (p.id === idToReset) {
        return {
          ...p,
          status: 'NOT AUCTIONED' as const,
          soldPrice: null,
          soldTeam: ''
        };
      }
      return p;
    });

    setPlayers(updatedPlayers);
    setFranchises(updatedFranchises);
    
    // If we re-auctioned the current player, reset current bid state
    if (idx === currentPlayerIndex) {
      setCurrentBid(0);
      setCurrentBidder('');
      setBidHistory([]);
    } else {
      // Set the re-auctioned player as active
      setCurrentPlayerIndex(idx);
      setCurrentBid(0);
      setCurrentBidder('');
      setBidHistory([]);
    }

    const eventMsg = `RE-AUCTION — ${targetPlayer.name} has been put back in the pool`;
    setTickerEvents(prev => [
      { id: Math.random().toString(), message: eventMsg, type: 'UNSOLD', timestamp: Date.now() },
      ...prev.slice(0, 49)
    ]);
  };

  const nextPlayer = () => {
    if (currentPlayerIndex < players.length - 1) {
      saveStateForUndo();
      setCurrentPlayerIndex(prev => prev + 1);
      // Reset bidding when manually skipping/navigating
      setCurrentBid(0);
      setCurrentBidder('');
      setBidHistory([]);
    }
  };

  const prevPlayer = () => {
    if (currentPlayerIndex > 0) {
      saveStateForUndo();
      setCurrentPlayerIndex(prev => prev - 1);
      // Reset bidding when manually skipping/navigating
      setCurrentBid(0);
      setCurrentBidder('');
      setBidHistory([]);
    }
  };

  const goToPlayer = (index: number) => {
    if (index >= 0 && index < players.length) {
      saveStateForUndo();
      setCurrentPlayerIndex(index);
      setCurrentBid(0);
      setCurrentBidder('');
      setBidHistory([]);
    }
  };

  const goToSet = (setName: string) => {
    const idx = players.findIndex(p => p.set === setName && p.status === 'NOT AUCTIONED');
    if (idx !== -1) {
      goToPlayer(idx);
    } else {
      // If all players in that set are already auctioned, go to the first player in that set
      const firstInSet = players.findIndex(p => p.set === setName);
      if (firstInSet !== -1) {
        goToPlayer(firstInSet);
      }
    }
  };

  const resetAuction = () => {
    if (window.confirm("Are you sure you want to reset the entire auction? All progress, squads and purses will be cleared.")) {
      initializeFromJSON();
      localStorage.removeItem('ipl_auction_state');
    }
  };

  return (
    <AuctionContext.Provider value={{
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
      goToSet,
      setBidIncrement,
      setIsPaused,
      resetAuction,
      canUndo: undoStack.length > 0
    }}>
      {children}
    </AuctionContext.Provider>
  );
};

export const useAuction = () => {
  const context = useContext(AuctionContext);
  if (!context) {
    throw new Error('useAuction must be used within an AuctionProvider');
  }
  return context;
};
