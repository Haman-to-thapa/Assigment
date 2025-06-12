import React from 'react';

import { formatDistanceToNow } from 'date-fns';
import { Ticket, Share2, Gift, Users, Trophy } from 'lucide-react';
import { useRaffle } from '../../context/RaffleContext';

const sourceIcons = {
  'purchase': <Ticket size={16} />,
  'share': <Share2 size={16} />,
  'redeem': <Gift size={16} />,
  'referral': <Users size={16} />,
  'challenge': <Trophy size={16} />
};

const sourceLabels = {
  'purchase': 'Purchased',
  'share': 'Shared Content',
  'redeem': 'First Redemption',
  'referral': 'Referred Friend',
  'challenge': 'Challenge Complete'
};

const RaffleHistory: React.FC = () => {
  const { ticketHistory, loading } = useRaffle();

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-neutral-light rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-12 bg-neutral-light rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-heading text-lg font-semibold">Ticket History</h3>

      {ticketHistory.length === 0 ? (
        <p className="text-neutral-dark text-sm">
          No tickets yet. Complete actions or purchase tickets to participate!
        </p>
      ) : (
        <div className="space-y-2">
          {ticketHistory.map(ticket => (
            <div
              key={ticket.id}
              className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-medium"
            >
              <div className="flex items-center space-x-3">
                <div className="text-primary">
                  {sourceIcons[ticket.source]}
                </div>
                <div>
                  <p className="font-medium">{sourceLabels[ticket.source]}</p>
                  <p className="text-sm text-neutral-dark">
                    {formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium text-primary">
                {ticket.id}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};