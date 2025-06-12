import React, { useState } from 'react';
import { Share2, Copy, CheckCircle } from 'lucide-react';
import { useRaffle } from '../../context/RaffleContext';
import { useToast } from '../../context/ToastContext';
import { createReferralLink } from '../../services/raferralService';

interface ReferralCardProps {
  className?: string;
}

const ReferralCard: React.FC<ReferralCardProps> = ({ className = '' }) => {
  const [referralCode, setReferralCode] = useState<string>('');
  const [referralUrl, setReferralUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const { awardTicket } = useRaffle();
  const { showToast } = useToast();

  // Mock user ID - in a real app, this would come from authentication
  const userId = "123";

  const handleGenerateReferral = async () => {
    try {
      setLoading(true);
      const result = await createReferralLink(userId);
      setReferralCode(result.referralCode);

      // Create the full URL with the referral code
      const url = `https://konnectimpact.com?ref=${result.referralCode}`;
      setReferralUrl(url);

      showToast('Referral link generated successfully!', 'success');
    } catch (error) {
      console.error('Failed to generate referral link:', error);
      showToast('Failed to generate referral link. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    if (referralUrl) {
      navigator.clipboard.writeText(referralUrl)
        .then(() => {
          setCopied(true);
          showToast('Link copied to clipboard!', 'success');

          // Reset copied state after 3 seconds
          setTimeout(() => setCopied(false), 3000);
        })
        .catch(() => {
          showToast('Failed to copy link. Please try again.', 'error');
        });
    }
  };

  const handleShare = async () => {
    if (navigator.share && referralUrl) {
      try {
        await navigator.share({
          title: 'Join me on KonnectImpact',
          text: 'Check out KonnectImpact - redeem or donate your loyalty points for great causes!',
          url: referralUrl,
        });

        // Award a raffle ticket for sharing
        await awardTicket('share');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback if Web Share API is not available
      handleCopyLink();
    }
  };

  return (
    <div className={`card ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold flex items-center">
          <Share2 size={20} className="text-primary mr-2" />
          Invite Friends
        </h3>
      </div>

      <p className="text-neutral-dark mb-4">
        Share your referral link with friends and earn a free raffle ticket for each new sign-up!
      </p>

      {!referralCode ? (
        <button
          className="btn-primary w-full"
          onClick={handleGenerateReferral}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Referral Link'}
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-neutral-light flex-1 p-3 rounded-l-md truncate">
              {referralUrl}
            </div>
            <button
              className="bg-primary text-white p-3 rounded-r-md hover:bg-primary-dark transition-colors"
              onClick={handleCopyLink}
              title="Copy to clipboard"
            >
              {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
            </button>
          </div>

          <div className="flex space-x-4">
            <button
              className="btn-ghost flex-1 flex items-center justify-center"
              onClick={handleCopyLink}
            >
              <Copy size={18} className="mr-2" />
              Copy
            </button>
            <button
              className="btn-primary flex-1 flex items-center justify-center"
              onClick={handleShare}
            >
              <Share2 size={18} className="mr-2" />
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralCard;