import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

// Import individual payment components
import PaymentAman from '../modules/paymentAman/PaymentAman';
import PaymentAshwini from '../modules/paymentAshwini/PaymentAshwini';
import PaymentMyousef from '../modules/payment-Myousef)/Payment_Myousef';
import CheckoutButton from './CheckoutButton';
import SuccessPage from './SuccessPage';
import CancelPage from './CancelPage';

const stripePromise = loadStripe('pk_test_51RYQKJBAfyZ6e3Zf9y39YuMrmyHuinmQmpNP0oujX5PqXvHOMsGZRGet9aFpkiyz49betsBWaVnACwmyfjiPNRRj00iU8Ayr6x');

const UnifiedPayment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('default');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to create checkout session');

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const PaymentSelector = () => (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#00897B]">
        Payment Options
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Default Checkout */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-[#00897B] transition-colors">
          <h3 className="text-xl font-semibold mb-4">Quick Checkout</h3>
          <p className="text-gray-600 mb-4">Simple one-click payment solution</p>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-[#00897B] text-white py-2 px-4 rounded hover:bg-teal-700 transition disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay €1 via Stripe'}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Aman's Payment Portal */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-[#00897B] transition-colors">
          <h3 className="text-xl font-semibold mb-4">Impact Portal</h3>
          <p className="text-gray-600 mb-4">Full featured payment experience with impact tracking</p>
          <button
            onClick={() => navigate('/payment-aman')}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            View Impact Portal
          </button>
        </div>

        {/* Ashwini's Transaction History */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-transparent hover:border-[#00897B] transition-colors">
          <h3 className="text-xl font-semibold mb-4">Transaction Hub</h3>
          <p className="text-gray-600 mb-4">Payment with transaction history tracking</p>
          <button
            onClick={() => navigate('/payment-ashwini')}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          >
            View Transaction Hub
          </button>
        </div>
      </div>

      {/* Payment Method Selector */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Choose Payment Experience:</h3>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="default"
              checked={selectedPaymentMethod === 'default'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Quick Checkout
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="aman"
              checked={selectedPaymentMethod === 'aman'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Impact Portal (Aman)
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="ashwini"
              checked={selectedPaymentMethod === 'ashwini'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Transaction Hub (Ashwini)
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="myousef"
              checked={selectedPaymentMethod === 'myousef'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Simple Payment (Myousef)
          </label>
        </div>
        
        <button
          onClick={() => {
            switch(selectedPaymentMethod) {
              case 'aman':
                navigate('/payment-aman');
                break;
              case 'ashwini':
                navigate('/payment-ashwini');
                break;
              case 'myousef':
                navigate('/payment-myousef');
                break;
              default:
                handleCheckout();
            }
          }}
          className="mt-4 bg-[#00897B] text-white py-2 px-6 rounded hover:bg-teal-700 transition"
        >
          Proceed with Selected Method
        </button>
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<PaymentSelector />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/cancel" element={<CancelPage />} />
      <Route path="/checkout" element={<CheckoutButton />} />
    </Routes>
  );
};

export default UnifiedPayment;
