import React from 'react'

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-green-600">Impact Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-2xl shadow">
          <p className="text-sm">Active Users</p>
          <p className="text-2xl font-bold">1,247</p>
          <p className="text-xs">+12.5% from last month</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-2xl shadow">
          <p className="text-sm">Carbon Offset</p>
          <p className="text-2xl font-bold">45.2 tons</p>
          <p className="text-xs">+8.3% from last month</p>
        </div>
        <div className="bg-yellow-400 text-white p-4 rounded-2xl shadow">
          <p className="text-sm">Donations</p>
          <p className="text-2xl font-bold">$12,750</p>
          <p className="text-xs">+15.7% from last month</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard