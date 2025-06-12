import React from 'react';

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md font-roboto text-center">
        <h1 className="font-montserrat text-red-600 text-3xl mb-4">Payment Cancelled</h1>
        <p className="mb-6 text-gray-700">Your payment was not completed. Please try again.</p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-2   text-white rounded hover:bg-red-600 hover:text-white transition bg-red-600"
        >
          Retry Payment
        </button>
      </div>
    </div>
  );
}