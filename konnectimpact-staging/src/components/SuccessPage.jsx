import React from 'react';

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md font-roboto text-center">
        <h1 className="font-montserrat text-primaryTeal text-3xl mb-4">Payment Successful</h1>
        <p className="mb-6 text-gray-700">Thank you for topping up your points! Your support helps us drive impact.</p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-2 border border-primaryTeal rounded text-primaryTeal hover:bg-primaryTeal hover:text-white transition"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}