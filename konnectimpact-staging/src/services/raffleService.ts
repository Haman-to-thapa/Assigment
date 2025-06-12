interface RaffleTicket {
  id: string;
  source: 'purchase' | 'referral' | 'share' | 'redeem' | 'challenge';
  createdAt: string;
  drawId?: string;
}

interface RaffleStatus {
  tickets: number;
  ticketHistory: RaffleTicket[];
}

// Get the user's current raffle status
export const getRaffleStatus = async (userId: string): Promise<RaffleStatus> => {
  // In a real app, this would be an actual API call
  console.log(`GET /api/raffle-status?userId=${userId}`);
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock ticket history
  const mockHistory: RaffleTicket[] = [
    {
      id: 'TCK-1',
      source: 'purchase',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: 'TCK-2',
      source: 'referral',
      createdAt: new Date(Date.now() - 172800000).toISOString(),
    }
  ];
  
  return { 
    tickets: mockHistory.length,
    ticketHistory: mockHistory
  };
};

// Award a raffle ticket for a specific action
export const awardRaffleTicket = async (
  userId: string, 
  reason: string
): Promise<{ success: boolean, newTickets: number }> => {
  console.log(`POST /api/raffle-award`, { userId, reason });
  
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const { tickets } = await getRaffleStatus(userId);
  
  return { 
    success: true, 
    newTickets: tickets + 1 
  };
};

// Purchase a raffle ticket
export const purchaseRaffleTicket = async (
  userId: string
): Promise<{ success: boolean, tickets: number }> => {
  console.log(`POST /api/raffle-ticket`, { userId });
  
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const { tickets } = await getRaffleStatus(userId);
  
  return { 
    success: true, 
    tickets: tickets + 1 
  };
};