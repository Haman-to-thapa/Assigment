import React, { useState } from 'react';
import './style.css'; // Adjust if your styles are in index.css or App.css


const Donation = () => {
  const [rewardType, setRewardType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState('impact-btn impact-btn-primary');

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(`You redeemed ${quantity} ${rewardType}(s)!`);
  };


  return (
    <div className="impact-container">
      <header className="impact-header">
        <h1 className='text-white'>Points Redemption</h1>
      </header>

      <main className="impact-main">
        <div className="impact-card">
          <h2>Redeem Your Points</h2>
          <form onSubmit={handleSubmit} className="impact-form">
            <div className="form-group">
              <label htmlFor="rewardType">Select Reward</label>
              <select
                id="rewardType"
                value={rewardType}
                onChange={(e) => setRewardType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="Story Pack">Story Pack</option>
                <option value="Raffle Entry">Raffle Entry</option>
                <option value="Donation">Donate to Community Cause</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}

                required
              />
            </div>

            <div className="points-meter">
              <div className="meter-track">
                <div className="meter-progress" style={{ width: '65%' }}></div>
              </div>
              <span>650/1000 points available</span>
            </div>


            <button type="submit" className="impact-btn impact-btn-primary">
              Redeem Points
            </button>
          </form>
        </div>

        {confirmation && (
          <div id="confirmationMessage" className="impact-btn impact-btn-primary">
            {confirmation}
          </div>
        )}
      </main>

      <footer className="impact-footer">
        <p>Making an impact with every point</p>
      </footer>
    </div>
  )
}

export default Donation