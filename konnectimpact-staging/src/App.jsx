import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Leaderboard from './components/Leaderboard'
import ParternerCampagin from './components/ParternerCampagin'
import CreateCampaign from './components/CreateCampaign'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import { useAppContext } from './context/AdminContext'
import Home from './components/Home'

// Import all modules
import Raffle from './modules/raffle/Raffle'
import Donation from './modules/donation/Donation'
import DonationRohit from './modules/donationRohit/DonationRohit'
import SEO from './modules/seo/SEO'
import Hero from './modules/hero/index'
import HomeLayout from './modules/homePage/HomeLayout'

// Import payment modules
import PaymentAman from './modules/paymentAman/PaymentAman'
import PaymentAshwini from './modules/paymentAshwini/PaymentAshwini'
import PaymentMyousef from './modules/payment-Myousef)/Payment_Myousef'

// Import transaction history modules
import TransactionJerin from './modules/TransactionJerin/TranscriptionJin'
import TransitionDaivesh from './modules/transitionHistoryDaivesh/TransitionDaivesh'

// Import leaderboard modules
import LeaderBoard from './modules/leaderboard/LeaderBoard'
import InfluencerLeaderboard from './page/InfluncerLeaderboard'

// Import page components
import Dashboard from './page/Dashboard'

// Import success/cancel pages
import SuccessPage from './components/SuccessPage'
import CancelPage from './components/CancelPage'

// Import unified components
import UnifiedDashboard from './components/UnifiedDashboard'
import UnifiedPayment from './components/UnifiedPayment'

const App = () => {
  const { adminEmail } = useAppContext();
  const location = useLocation()

  // Hide sidebar on public pages
  const publicPaths = ['/', '/hero', '/landing', '/success', '/cancel'];
  const hideSidebar = publicPaths.includes(location.pathname);

  return (
    <div className={hideSidebar ? "min-h-screen bg-gray-50" : "sm:pl-72 min-h-screen bg-gray-50"}>
      {!hideSidebar && <Sidebar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/hero" element={<Hero />} />
        <Route path="/landing" element={<HomeLayout />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />

        {/* Authentication Routes */}
        <Route
          path="/"
          element={!adminEmail ? <Login /> : <Navigate to="/dashboard" />}
        />

        {/* Protected Admin Routes */}
        <Route
          path="/dashboard"
          element={adminEmail ? <UnifiedDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/home"
          element={adminEmail ? <UnifiedDashboard /> : <Navigate to="/" />}
        />
        <Route path="/create" element={<CreateCampaign />} />
        <Route path="/partner" element={<ParternerCampagin />} />

        {/* Leaderboard Routes */}
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboard-advanced" element={<LeaderBoard />} />
        <Route path="/influencer-leaderboard" element={<InfluencerLeaderboard />} />

        {/* Raffle & Interactive Routes */}
        <Route path="/raffle/*" element={<Raffle />} />
        <Route path="/raffle-dashboard" element={<Dashboard />} />

        {/* Donation & Redemption Routes */}
        <Route path="/donation" element={<Donation />} />
        <Route path="/redemption" element={<DonationRohit />} />

        {/* Payment Routes */}
        <Route path="/payments/*" element={<UnifiedPayment />} />
        <Route path="/payment-aman" element={<PaymentAman />} />
        <Route path="/payment-ashwini/*" element={<PaymentAshwini />} />
        <Route path="/payment-myousef/*" element={<PaymentMyousef />} />

        {/* Transaction History Routes */}
        <Route path="/transactions" element={<TransactionJerin />} />
        <Route path="/transaction-history" element={<TransitionDaivesh />} />

        {/* SEO/Content Routes */}
        <Route path="/seo" element={<SEO />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
