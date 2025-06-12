import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getRaffleStatus, awardRaffleTicket, purchaseRaffleTicket } from '../services/raffleService';
import { useToast } from './ToastContext';

interface RaffleTicket {
  id: string;
  source: 'purchase' | 'referral' | 'share' | 'redeem' | 'challenge';
  createdAt: string;
  drawId?: string;
}

interface RaffleContextType {
  tickets: number;
  ticketHistory: RaffleTicket[];
  loading: boolean;
  awardTicket: (reason: string) => Promise<void>;
  purchaseTicket: () => Promise<void>;
  getTicketsBySource: (source: RaffleTicket['source']) => number;
}

const RaffleContext = createContext<RaffleContextType | undefined>(undefined);

export const useRaffle = () => {
  const context = useContext(RaffleContext);
  if (!context) {
    throw new Error('useRaffle must be used within a RaffleProvider');
  }
  return context;
};

interface RaffleProviderProps {
  children: ReactNode;
}

export const RaffleProvider: React.FC<RaffleProviderProps> = ({ children }) => {
  const [tickets, setTickets] = useState<number>(0);
  const [ticketHistory, setTicketHistory] = useState<RaffleTicket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastActionTimestamp, setLastActionTimestamp] = useState<Record<string, number>>({});
  const { showToast } = useToast();

  const userId = "123"; // In real app, from auth

  const fetchRaffleStatus = async () => {
    try {
      setLoading(true);
      const data = await getRaffleStatus(userId);
      setTickets(data.tickets);
      setTicketHistory(data.ticketHistory || []);
    } catch (error) {
      console.error('Failed to fetch raffle status:', error);
      showToast('Unable to load raffle status', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRaffleStatus();
  }, []);

  const getTicketsBySource = (source: RaffleTicket['source']) => {
    return ticketHistory.filter(ticket => ticket.source === source).length;
  };

  const checkActionCooldown = (action: string): boolean => {
    const now = Date.now();
    const lastAction = lastActionTimestamp[action] || 0;
    const cooldownPeriod = 24 * 60 * 60 * 1000; // 24 hours

    return (now - lastAction) >= cooldownPeriod;
  };

  const awardTicket = async (reason: string) => {
    if (!checkActionCooldown(reason)) {
      showToast('You can only perform this action once per day', 'warning');
      return;
    }

    try {
      const result = await awardRaffleTicket(userId, reason);
      if (result.success) {
        setTickets(result.newTickets);
        setTicketHistory(prev => [...prev, {
          id: `TCK-${Date.now()}`,
          source: reason as RaffleTicket['source'],
          createdAt: new Date().toISOString()
        }]);

        setLastActionTimestamp(prev => ({
          ...prev,
          [reason]: Date.now()
        }));

        const messages = {
          'share': 'You earned 1 free raffle ticket for sharing!',
          'redeem': 'You earned 1 free raffle ticket for your first redemption!',
          'referral': 'You earned a raffle ticket for referring a friend!',
          'challenge': 'You earned 1 free raffle ticket for participating in a challenge!'
        };

        showToast(messages[reason as keyof typeof messages] || 'You earned a raffle ticket!', 'success');
      }
    } catch (error) {
      console.error('Failed to award ticket:', error);
      showToast('Failed to award ticket. Please try again.', 'error');
    }
  };

  const purchaseTicket = async () => {
    try {
      const result = await purchaseRaffleTicket(userId);
      if (result.success) {
        setTickets(result.tickets);
        setTicketHistory(prev => [...prev, {
          id: `TCK-${Date.now()}`,
          source: 'purchase',
          createdAt: new Date().toISOString()
        }]);
        showToast('You successfully purchased a raffle ticket!', 'success');
      } else {
        showToast('Failed to purchase ticket. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Failed to purchase ticket:', error);
      showToast('Failed to purchase ticket. Please try again.', 'error');
    }
  };

  return (
    <RaffleContext.Provider value={{
      tickets,
      ticketHistory,
      loading,
      awardTicket,
      purchaseTicket,
      getTicketsBySource
    }}>
      {children}
    </RaffleContext.Provider>
  );
};