document.addEventListener('DOMContentLoaded', function () {
  const redemptionForm = document.getElementById('redemptionForm');
  const confirmationMessage = document.getElementById('confirmationMessage');

  // Form submission handler
  redemptionForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get form values
    const reward = document.getElementById('rewardType').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    // Validate inputs
    if (!reward || isNaN(quantity) || quantity <= 0) {
      showMessage('❌ Please select a valid reward and quantity.', 'error');
      return;
    }

    // Create payload
    const payload = {
      reward,
      quantity,
      userId: 123 // Hardcoded user ID
    };

    const submitBtn = redemptionForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    try {
      // Mock API call
      const response = await mockApiPost('/api/redeem', payload);

      // Show success message
      showMessage(
        
        `✅ You redeemed ${quantity} points for ${reward}. Thank you! ${response}`,
        'success'
      );

      // Reset form
      redemptionForm.reset();
    } catch (error) {
        console.error('Redemption error:', error)
      // Show error message
      showMessage('❌ Redemption failed. Please try again later.', 'error');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitBtn.textContent = 'Redeem Points';
    }
  });

  // Mock API function
  function mockApiPost(endpoint, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Mock POST to ${endpoint}:`, data);

        // Simulate 80% success rate
        if (Math.random() > 0.2) {
          resolve({
            status: 'success',
            data: {
              transactionId: 'txn_' + Math.random().toString(36).substr(2, 9),
              pointsRedeemed: data.quantity * getPointValue(data.reward),
              remainingPoints:
                650 - data.quantity * getPointValue(data.reward)
            }
          });
        } else {
          reject({
            status: 'error',
            message: 'Network error or insufficient points'
          });
        }
      }, 1500); // Simulate network delay
    });
  }

  // Helper function to get point value of each reward type
  function getPointValue(reward) {
    const values = {
      'Story Pack': 100,
      'Raffle Entry': 200,
      'Donation': 50
    };
    return values[reward] || 0;
  }

  // Message display function
  function showMessage(text, type) {
    confirmationMessage.textContent = text;
    confirmationMessage.className = `impact-message impact-message-${type}`;

    // Optional auto-hide
    setTimeout(() => {
      confirmationMessage.className = 'impact-message-hidden';
    }, 5000);
  }
});
