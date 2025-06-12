import React from 'react'
import Dashboard from '../../components/Dashboard'
import PointsConvertedCard from '../../components/PointsConvertedCard'
import CarbonOffsetCard from '../../components/CarbonOffsetCard'
import TopRedeemersCard from '../../components/TopRedeemersCard'
import DonationsChart from '../../components/DonationsChart'

const LeaderBoard = () => {
  return (
    <div className="p-4">
      <Dashboard />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <PointsConvertedCard />
        <CarbonOffsetCard />
        <TopRedeemersCard />
      </div>
      <DonationsChart />
    </div>
  )
}

export default LeaderBoard