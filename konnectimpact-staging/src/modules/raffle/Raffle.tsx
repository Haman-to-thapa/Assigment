import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Dashboard from '../../page/Dashboard';
import InfluencerLeaderboard from '../../page/InfluncerLeaderboard';
import './index.css'

function Raffle() {
  // Check for referral code in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');

    if (refCode) {
      // Store the referral code in localStorage or handle it appropriately
      localStorage.setItem('referralCode', refCode);
      console.log(`User arrived via referral code: ${refCode}`);
      // Further processing would happen during sign-up/login
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-light flex flex-col">
      <Header />
      <main className="flex-grow py-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/influencers" element={<InfluencerLeaderboard />} />
        </Routes>
      </main>
      <footer className="bg-white py-4 border-t border-neutral-medium">
        <div className="container mx-auto text-center text-neutral-dark">
          <p>© 2025 KonnectImpact. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Raffle;