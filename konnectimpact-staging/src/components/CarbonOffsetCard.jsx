import React from "react";

const CarbonOffsetCard = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Carbon Offset</h2>
      <p className="text-sm text-gray-500 mb-4">Tons of CO2 by category</p>

      <h3 className="font-semibold text-gray-700 mb-2">Progress</h3>
      <div className="text-2xl font-bold text-green-600 mb-6">75%</div>

      <div className="space-y-4 mb-6">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700">Recycling</span>
            <span className="font-medium">40%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700">Energy</span>
            <span className="font-medium">28%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '28%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700">Transport</span>
            <span className="font-medium">13%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '13%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700">Food</span>
            <span className="font-medium">19%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '19%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonOffsetCard;