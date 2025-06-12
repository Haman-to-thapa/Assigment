export default function handler(req, res) {
    if (req.method === 'POST') {
      const { reward, quantity, userid } = req.body;
  
      // Simulate success if reward and quantity are valid
      if (reward && quantity > 0) {
        return res.status(200).json({
          message: `You redeemed ${quantity} points for "${reward}" ${userid}.`
        });
      }
  
      // Simulate error for invalid data
      return res.status(400).json({ error: 'Invalid data' });
    }
  
    res.status(405).json({ error: 'Method Not Allowed' });
  }
  