import React from 'react';
import RaffleCard from '../components/raffle/RaffleCard';
import ReferralCard from '../components/referral/ReferralCard';
import { useRaffle } from '../context/RaffleContext';
import { Gift, Award, Share2, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard: React.FC<{}> = () => {
  const { awardTicket } = useRaffle();
  const navigate = useNavigate();

  const handleActionComplete = (actionType: string) => {
    // Optionally award ticket first (or after donation page)
    awardTicket(actionType);
    // Redirect to /donation page
    navigate('/donation');
  };
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="font-heading text-2xl font-bold text-primary mb-2">Welcome back!</h2>
        <p className="text-neutral-dark">
          Redeem your loyalty points for rewards or donate them to meaningful causes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card bg-primary/5 hover:bg-primary/10 cursor-pointer" onClick={() => handleActionComplete('redeem')}>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <Gift size={20} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold">Redeem Points</h3>
          </div>
          <p className="text-sm text-neutral-dark">Exchange your loyalty points for exciting rewards.</p>
        </div>

        <div className="card bg-accent/5 hover:bg-accent/10 cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
              <Award size={20} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold">Donate Points</h3>
          </div>
          <p className="text-sm text-neutral-dark">Support charitable causes with your loyalty points.</p>
        </div>

        <div className="card bg-primary/5 hover:bg-primary/10 cursor-pointer" onClick={() => handleActionComplete('challenge')}>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <Share2 size={20} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold">Participate</h3>
          </div>
          <p className="text-sm text-neutral-dark">Join community challenges and earn additional rewards.</p>
        </div>

        <Link to="/influencers" className="card bg-accent/5 hover:bg-accent/10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
              <Users size={20} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold">Top Influencers</h3>
          </div>
          <p className="text-sm text-neutral-dark">See who's making the biggest impact in our community.</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RaffleCard className="md:col-span-1" />
        <ReferralCard className="md:col-span-1" />
      </div>
    </div>
  );
};

export default Dashboard;