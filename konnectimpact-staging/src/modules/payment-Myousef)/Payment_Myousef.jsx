import { Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const res = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      window.location.href = data.url; // Redirect to Stripe Checkout
    } catch (err) {
      console.error('Checkout error:', err);
      navigate('/failure');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Top Up Points</h1>
      <button onClick={handleCheckout} style={{
        backgroundColor: '#00897B',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Pay €1 via Stripe
      </button>
    </div>
  );
}

function Success() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>✅ Payment Successful!</h1>
      <p>Thank you for topping up your points.</p>
    </div>
  );
}

function Failure() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>❌ Payment Failed</h1>
      <p>Something went wrong. Please try again.</p>
    </div>
  );
}

export default function PaymentMyousef() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="/failure" element={<Failure />} />
    </Routes>
  );
}