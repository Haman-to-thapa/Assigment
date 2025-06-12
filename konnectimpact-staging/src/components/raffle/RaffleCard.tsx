import React from 'react';

import { Ticket } from 'lucide-react';
import { useRaffle } from '../../context/RaffleContext';

interface RaffleCardProps {
  className?: string;
}

const RaffleCard: React.FC<RaffleCardProps> = ({ className = '' }) => {
  const { tickets, loading, purchaseTicket } = useRaffle();

  const handlePurchase = async () => {
    await purchaseTicket();
  };

  return (
    <div className={`card ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold flex items-center">
          <Ticket size={20} className="text-primary mr-2" />
          My Raffle Tickets
        </h3>
        <div className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
          {loading ? "Loading..." : `${tickets} ticket${tickets !== 1 ? 's' : ''}`}
        </div>
      </div>

      <p className="text-neutral-dark mb-4">
        Increase your chances of winning by purchasing additional raffle tickets or earning them through actions.
      </p>

      <div className="bg-neutral-light p-4 rounded-md mb-4">
        <h4 className="font-medium mb-2">How to earn free tickets:</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Redeem or donate points for the first time</li>
          <li>Share a page on social media</li>
          <li>Refer a friend</li>
          <li>Participate in community challenges</li>
        </ul>
      </div>

      <button
        className="btn-primary w-full flex items-center justify-center"
        onClick={handlePurchase}
        disabled={loading}
      >
        <span className="mr-2">€1</span>
        Buy Raffle Ticket
      </button>
    </div>
  );
};

export default RaffleCard;