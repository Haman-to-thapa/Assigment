import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AdminContext';
import PageHeader from './PageHeader';
import BackButton from './BackButton';

// Import dashboard components
import Dashboard from './Dashboard';
import BarChartComponent from './BarChartCompnent';
import PointsConvertedCard from './PointsConvertedCard';
import CarbonOffsetCard from './CarbonOffsetCard';
import TopRedeemersCard from './TopRedeemersCard';
import DonationsChart from './DonationsChart';
import TransactionCard from './TransactionCard';
import ProgressCircle from './ProgressCircle';

// Import page components
import RaffleDashboard from '../page/Dashboard';

const UnifiedDashboard = () => {
  const { adminEmail, logout, campaigns } = useAppContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalUsers: 1247,
    carbonOffset: 45.2,
    totalDonations: 12750,
    activeRaffles: 3,
    totalPoints: 25680,
    redemptions: 156
  };

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${isActive
        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
        : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
        }`}
    >
      {label}
    </button>
  );

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-2xl shadow">
          <p className="text-sm">Active Users</p>
          <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
          <p className="text-xs">+12.5% from last month</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-2xl shadow">
          <p className="text-sm">Carbon Offset</p>
          <p className="text-2xl font-bold">{stats.carbonOffset} tons</p>
          <p className="text-xs">+8.3% from last month</p>
        </div>
        <div className="bg-yellow-400 text-white p-4 rounded-2xl shadow">
          <p className="text-sm">Donations</p>
          <p className="text-2xl font-bold">${stats.totalDonations.toLocaleString()}</p>
          <p className="text-xs">+15.2% from last month</p>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-2xl shadow">
          <p className="text-sm">Total Points</p>
          <p className="text-2xl font-bold">{stats.totalPoints.toLocaleString()}</p>
          <p className="text-xs">+22.1% from last month</p>
        </div>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Analytics</h3>
          <BarChartComponent />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Donations Over Time</h3>
          <DonationsChart />
        </div>
      </div>

      {/* Impact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PointsConvertedCard />
        <CarbonOffsetCard />
        <TopRedeemersCard />
      </div>
    </div>
  );

  const CampaignsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Campaign Management</h3>
        <button
          onClick={() => navigate('/create')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Create New Campaign
        </button>
      </div>

      {campaigns.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No campaigns created yet.</p>
          <button
            onClick={() => navigate('/create')}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Create Your First Campaign
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold text-lg mb-2">{campaign.name}</h4>
              <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Points:</span>
                  <span className="font-medium">{campaign.points}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Fees:</span>
                  <span className="font-medium">${campaign.fees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const RaffleTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Raffle & Interactive Dashboard</h3>
      <RaffleDashboard />
    </div>
  );

  const QuickActionsTab = () => {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => navigate('/donation')}
            className="bg-green-500 text-white p-6 rounded-lg hover:bg-green-600 transition text-left"
          >
            <h4 className="font-semibold text-lg mb-2">Make Donation</h4>
            <p className="text-sm opacity-90">Donate points to community causes</p>
          </button>

          <button
            onClick={() => navigate('/redemption')}
            className="bg-blue-500 text-white p-6 rounded-lg hover:bg-blue-600 transition text-left"
          >
            <h4 className="font-semibold text-lg mb-2">Redeem Points</h4>
            <p className="text-sm opacity-90">Exchange points for rewards</p>
          </button>

          <button
            onClick={() => navigate('/payment-aman')}
            className="bg-purple-500 text-white p-6 rounded-lg hover:bg-purple-600 transition text-left"
          >
            <h4 className="font-semibold text-lg mb-2">Top Up Points</h4>
            <p className="text-sm opacity-90">Add more points to your account</p>
          </button>

          <button
            onClick={() => navigate('/raffle')}
            className="bg-yellow-500 text-white p-6 rounded-lg hover:bg-yellow-600 transition text-left"
          >
            <h4 className="font-semibold text-lg mb-2">Enter Raffle</h4>
            <p className="text-sm opacity-90">Participate in community raffles</p>
          </button>

          <button
            onClick={() => navigate('/leaderboard')}
            className="bg-red-500 text-white p-6 rounded-lg hover:bg-red-600 transition text-left"
          >
            <h4 className="font-semibold text-lg mb-2">View Leaderboard</h4>
            <p className="text-sm opacity-90">See top contributors</p>
          </button>

          <button
            onClick={() => navigate('/transaction-history')}
            className="bg-indigo-500 text-white p-6 rounded-lg hover:bg-indigo-600 transition text-left"
          >
            <h4 className="font-semibold text-lg mb-2">Transaction History</h4>
            <p className="text-sm opacity-90">View your activity</p>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader
        title="KonnectImpact Dashboard"
        subtitle={`Welcome back, ${adminEmail}`}
        showBackButton={false}
        actions={[
          <button
            key="logout"
            onClick={logout}
            className="btn btn-outline text-red-600 border-red-300 hover:bg-red-50"
          >
            Logout
          </button>
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <TabButton id="overview" label="Overview" isActive={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="campaigns" label="Campaigns" isActive={activeTab === 'campaigns'} onClick={setActiveTab} />
          <TabButton id="raffle" label="Raffle" isActive={activeTab === 'raffle'} onClick={setActiveTab} />
          <TabButton id="actions" label="Quick Actions" isActive={activeTab === 'actions'} onClick={setActiveTab} />
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'campaigns' && <CampaignsTab />}
          {activeTab === 'raffle' && <RaffleTab />}
          {activeTab === 'actions' && <QuickActionsTab />}
        </div>
      </div>
    </div>
  );
};

export default UnifiedDashboard;
