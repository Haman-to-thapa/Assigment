import React from "react";

const TopRedeemersCard = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Top Redeemers</h2>
      <p className="text-sm text-gray-500 mb-6">This Month's Impact Leaders</p>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/32"
              alt="Emma Johnson"
              className="w-8 h-8 rounded-full"
            />
            <h3 className="font-bold text-gray-800">Emma Johnson</h3>
          </div>
          <div className="text-blue-600 font-medium">1250 points</div>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/32"
              alt="Marcus Chen"
              className="w-8 h-8 rounded-full"
            />
            <h3 className="font-bold text-gray-800">Marcus Chen</h3>
          </div>
          <div className="text-blue-600 font-medium">1120 points</div>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/32"
              alt="Olivia Smith"
              className="w-8 h-8 rounded-full"
            />
            <h3 className="font-bold text-gray-800">Olivia Smith</h3>
          </div>
          <div className="text-blue-600 font-medium">980 points</div>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/32"
              alt="Daniel Park"
              className="w-8 h-8 rounded-full"
            />
            <h3 className="font-bold text-gray-800">Daniel Park</h3>
          </div>
          <div className="text-blue-600 font-medium">870 points</div>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/32"
              alt="Sophia Rodriguez"
              className="w-8 h-8 rounded-full"
            />
            <h3 className="font-bold text-gray-800">Sophia Rodriguez</h3>
          </div>
          <div className="text-blue-600 font-medium">750 points</div>
        </div>
      </div>
    </div>
  );
};

export default TopRedeemersCard;