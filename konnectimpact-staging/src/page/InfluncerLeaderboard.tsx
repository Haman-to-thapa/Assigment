import React, { useState, useEffect } from 'react';

import { Trophy, Users, ArrowUpRight } from 'lucide-react';
import { getTopReferrers } from '../services/raferralService';

interface Referrer {
  userId: string;
  name: string;
  referrals: number;
}

const InfluencerLeaderboard: React.FC = () => {
  const [referrers, setReferrers] = useState<Referrer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReferrers = async () => {
      try {
        setLoading(true);
        const data = await getTopReferrers();
        setReferrers(data);
      } catch (error) {
        console.error('Failed to fetch top referrers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReferrers();
  }, []);

  // Function to get avatar based on user ID (in a real app, you'd use actual profile images)
  const getAvatarUrl = (userId: string) => {
    return `https://i.pravatar.cc/150?u=${userId}`;
  };

  // Function to determine if a user gets a gold border (top 3)
  const isTopReferrer = (index: number) => {
    return index < 3;
  };

  const getRankBadge = (index: number) => {
    if (index === 0) return { icon: <Trophy className="text-yellow-500\" size={18} />, text: 'Gold' };
    if (index === 1) return { icon: <Trophy className="text-neutral-400" size={18} />, text: 'Silver' };
    if (index === 2) return { icon: <Trophy className="text-amber-700\" size={18} />, text: 'Bronze' };
    return null;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="font-heading text-2xl font-bold text-primary mb-2">Influencer Leaderboard</h2>
        <p className="text-neutral-dark">
          Our top community members who are making the biggest impact through referrals.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Users size={24} className="text-primary mr-2" />
            <h3 className="font-heading text-xl font-semibold">Top Referrers</h3>
          </div>
          <div className="text-sm text-neutral-dark bg-neutral-light px-3 py-1 rounded-full">
            Updated daily
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {referrers.map((referrer, index) => {
              const rankBadge = getRankBadge(index);
              return (
                <div
                  key={referrer.userId}
                  className={`card ${isTopReferrer(index) ? 'gold-border' : ''} p-4 hover:transform hover:scale-105 transition-transform duration-200`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-3">
                      <img
                        src={getAvatarUrl(referrer.userId)}
                        alt={referrer.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {rankBadge && (
                        <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                          {rankBadge.icon}
                        </div>
                      )}
                    </div>
                    <h4 className="font-heading font-semibold">{referrer.name}</h4>
                    <div className="text-primary font-medium my-2 flex items-center">
                      <span className="text-lg">{referrer.referrals}</span>
                      <span className="text-sm ml-1">referrals</span>
                    </div>
                    {rankBadge && (
                      <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                        {rankBadge.text} Tier
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bg-primary/5 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-heading text-lg font-semibold mb-2">Want to join the leaderboard?</h3>
            <p className="text-neutral-dark">Start referring friends and watch your impact grow!</p>
          </div>
          <button className="btn-primary flex items-center">
            Get Your Referral Link
            <ArrowUpRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfluencerLeaderboard;