import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdCreate,
  MdGroupWork,
  MdLeaderboard,
  MdStars,
  MdMenu,
  MdClose,
  MdVolunteerActivism,
  MdRedeem,
  MdPayment,
  MdHistory,
  MdSearch,
  MdHome,
  MdLandscape,
} from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: <MdDashboard size={20} /> },
    { id: "create", label: "Create Campaign", path: "/create", icon: <MdCreate size={20} /> },
    { id: "partner", label: "Partner Campaign", path: "/partner", icon: <MdGroupWork size={20} /> },

    // Leaderboard & Impact
    { id: "leaderboard", label: "Leaderboard", path: "/leaderboard", icon: <MdLeaderboard size={20} /> },
    { id: "leaderboard-advanced", label: "Advanced Leaderboard", path: "/leaderboard-advanced", icon: <MdLeaderboard size={20} /> },
    { id: "influencer", label: "Influencer Board", path: "/influencer-leaderboard", icon: <MdStars size={20} /> },

    // Raffle & Interactive
    { id: "raffle", label: "Raffle System", path: "/raffle", icon: <MdStars size={20} /> },
    { id: "raffle-dashboard", label: "Raffle Dashboard", path: "/raffle-dashboard", icon: <MdDashboard size={20} /> },

    // Donations & Redemptions
    { id: "donation", label: "Donations", path: "/donation", icon: <MdVolunteerActivism size={20} /> },
    { id: "redemption", label: "Redemptions", path: "/redemption", icon: <MdRedeem size={20} /> },

    // Payments
    { id: "payments", label: "Payment Hub", path: "/payments", icon: <MdPayment size={20} /> },
    { id: "payment-aman", label: "Payment Portal", path: "/payment-aman", icon: <MdPayment size={20} /> },
    { id: "payment-ashwini", label: "Checkout", path: "/payment-ashwini", icon: <MdPayment size={20} /> },
    { id: "payment-myousef", label: "Stripe Payment", path: "/payment-myousef", icon: <MdPayment size={20} /> },

    // Transaction History
    { id: "transactions", label: "Transactions", path: "/transactions", icon: <MdHistory size={20} /> },
    { id: "transaction-history", label: "Transaction History", path: "/transaction-history", icon: <MdHistory size={20} /> },

    // SEO & Content
    { id: "seo", label: "SEO Content", path: "/seo", icon: <MdSearch size={20} /> },

    // Public Pages
    { id: "hero", label: "Hero Page", path: "/hero", icon: <MdHome size={20} /> },
    { id: "landing", label: "Landing Page", path: "/landing", icon: <MdLandscape size={20} /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 sm:hidden bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        {open ? <MdClose size={24} className="text-gray-700" /> : <MdMenu size={24} className="text-gray-700" />}
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-40 top-0 left-0 h-full bg-gradient-to-b from-blue-600 to-blue-700 shadow-xl transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:w-72 sm:flex sm:flex-col
          w-72 overflow-y-auto`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-blue-500">
          <h2 className="text-xl font-bold text-white">KonnectImpact</h2>
          <p className="text-sm text-blue-100 mt-1">Admin Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                navigate(tab.path);
                setOpen(false); // Close mobile menu after navigation
              }}
              className={`nav-item w-full flex items-center gap-3 px-4  bg-blue-800 py-3 rounded-xl text-left transition-all duration-200 group hover:scale-105 ${pathname === tab.path
                ? 'bg-white text-blue-600 shadow-lg font-semibold'
                : 'text-blue-100 hover:bg-blue-500 hover:text-white hover:shadow-md'
                }`}
            >
              <span className={`transition-colors ${pathname === tab.path ? 'text-blue-600' : 'text-blue-200 group-hover:text-white'
                }`}>
                {tab.icon}
              </span>
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            © 2025 KonnectImpact
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;




