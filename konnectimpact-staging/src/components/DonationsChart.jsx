import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", donations: 800 },
  { month: "Feb", donations: 1150 },
  { month: "Mar", donations: 1380 },
  { month: "Apr", donations: 1550 },
  { month: "May", donations: 1700 },
  { month: "Jun", donations: 1800 },
  { month: "Jul", donations: 1950 },
  { month: "Aug", donations: 1650 },
];

const DonationsChart = () => {
  const totalRaised = 12750;
  const goal = 15000;
  const progressPercent = Math.round((totalRaised / goal) * 100);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <span className="text-yellow-500">💰</span> Donations Raised
          </h2>
          <p className="text-sm text-gray-500">Monthly donations in dollars</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-yellow-500">${totalRaised.toLocaleString()}</p>
          <p className="text-xs text-gray-500">of ${goal.toLocaleString()} goal</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-1">Progress</p>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-yellow-400 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p className="text-right text-xs font-semibold text-gray-600 mt-1">
          {progressPercent}%
        </p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 0, right: 20, left: -10, bottom: 0 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#888888" fontSize={12} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} />
          <Tooltip
            contentStyle={{ fontSize: "0.75rem" }}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Line
            type="monotone"
            dataKey="donations"
            stroke="#FACC15"
            strokeWidth={3}
            dot={{ fill: "#FACC15", r: 5 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonationsChart;