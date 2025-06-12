// Mock API services for referral functionality

// Create a referral link for the user
export const createReferralLink = async (userId: string): Promise<{ referralCode: string }> => {
  // In a real app, this would be an actual API call
  console.log(`POST /api/create-referral?userId=${userId}`);
  
  // Mock response - simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Generate a mock referral code
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const codeLength = 6;
  let referralCode = 'KI-';
  
  for (let i = 0; i < codeLength; i++) {
    referralCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  // Return mock success response
  return { referralCode };
};

// Get top referrers for the leaderboard
export const getTopReferrers = async (): Promise<Array<{ userId: string, name: string, referrals: number }>> => {
  // In a real app, this would be an actual API call
  console.log(`GET /api/top-referrers`);
  
  // Mock response - simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return mock data
  return [
    { userId: "234", name: "Jane Doe", referrals: 12 },
    { userId: "567", name: "John Smith", referrals: 9 },
    { userId: "890", name: "Alex Johnson", referrals: 7 },
    { userId: "123", name: "Maria Garcia", referrals: 6 },
    { userId: "456", name: "David Kim", referrals: 5 },
    { userId: "789", name: "Sarah Williams", referrals: 4 },
    { userId: "012", name: "Michael Brown", referrals: 3 },
    { userId: "345", name: "Emily Davis", referrals: 2 }
  ];
};

// Register a successful referral (called when a new user signs up via referral code)
export const registerReferral = async (
  referralCode: string
): Promise<{ success: boolean, referrerId: string }> => {
  // In a real app, this would be an actual API call
  console.log(`POST /api/register-referral`, { referralCode });
  
  // Mock response - simulate network delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  // Extract the referrer ID from the code (in a real app, this would be looked up in the database)
  // For this mock, we'll just return a fixed ID
  
  // Return mock success response
  return { 
    success: true, 
    referrerId: "234" // Mock referrer ID
  };
};