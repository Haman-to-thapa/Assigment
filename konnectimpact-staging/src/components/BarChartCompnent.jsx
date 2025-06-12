import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Your requested colors
const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#333333"];

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("campaigns")) || [];
    setCampaigns(stored);
  }, []);

  // Prepare data for charts
  const pieData = campaigns.map((c) => ({
    name: c.name,
    value: c.fees,
  }));

  const barData = pieData;

  // Find the leader (top fees earner)
  const leader = campaigns.reduce(
    (max, curr) => (curr.fees > (max?.fees || 0) ? curr : max),
    null
  );

  return (
    <div className="p-6" style={{ color: "#333333", fontFamily: "'Montserrat', sans-serif" }}>
      {/* Leaderboard Section */}
      <div
        className="mb-8 p-4 rounded-lg shadow"
        style={{ backgroundColor: "#FFC107", color: "#333333" }}
      >
        <h2 className="text-3xl font-bold mb-2">Leaderboard</h2>
        {leader ? (
          <p className="text-xl font-semibold">
            🏆 Leader: {leader.name} — ₹{leader.fees.toFixed(2)}
          </p>
        ) : (
          <p>No campaign data available</p>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">Fees Earned - Campaigns</h2>

      <div className="flex justify-center items-center" style={{ color: "#333333" }}>
        <div style={{ display: "flex", gap: 50, flexWrap: "wrap" }}>
          {/* Pie Chart */}
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
              cornerRadius={10}
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", borderRadius: 8 }}
              itemStyle={{ color: "#333333" }}
            />
            <Legend wrapperStyle={{ color: "#333333" }} />
          </PieChart>

          {/* Bar Chart */}
          <ResponsiveContainer width={400} height={300}>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#333333" />
              <YAxis stroke="#333333" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", borderRadius: 8 }}
                itemStyle={{ color: "#333333" }}
              />
              <Legend wrapperStyle={{ color: "#333333" }} />
              <Bar dataKey="value" fill="#4CAF50" radius={[10, 10, 10, 10]}>
                {barData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))" }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;