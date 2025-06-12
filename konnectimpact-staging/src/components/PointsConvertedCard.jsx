import React from "react";

const PointsConvertedCard = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Points Converted</h2>
      <p className="text-sm text-gray-500 mb-4">Monthly points conversion</p>

      <div className="text-3xl font-bold text-gray-800 mb-2">9,850</div>
      <p className="text-sm text-gray-500 mb-6">of 12,000 goal</p>

      <h3 className="font-semibold text-gray-700 mb-2">Progress</h3>
      <div className="text-2xl font-bold text-blue-600 mb-6">82%</div>

      <div className="h-4 bg-gray-200 rounded-full mb-2">
        <div className="h-4 bg-blue-600 rounded-full" style={{ width: '82%' }}></div>
      </div>

      <div className="flex justify-between text-xs text-gray-500 mt-2 mb-6">
        <span>0</span>
        <span>1800</span>
        <span>1350</span>
        <span>900</span>
        <span>450</span>
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
      </div>
    </div>
  );
};

export default PointsConvertedCard;