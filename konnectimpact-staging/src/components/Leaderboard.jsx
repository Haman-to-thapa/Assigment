import React from "react";
import { useAppContext } from "../context/AdminContext";

const Leaderboard = () => {
  const { campaigns } = useAppContext();

  // Sort campaigns by fees earned in descending order and get top 5 (or any number you want)
  const topPartners = [...campaigns]
    .sort((a, b) => b.fees - a.fees)
    .slice(0, 5);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#FFC107] font-[Montserrat]">
        Partner Leaderboard
      </h2>
      {topPartners.length === 0 ? (
        <p className="text-[#333333] font-[Montserrat]">No partner data available.</p>
      ) : (
        <ol className="bg-[#ffffff] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-lg p-4 list-decimal space-y-3 font-[Montserrat] text-[#333333]">
          {topPartners.map((partner, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-200 pb-2"
            >
              <span className="text-[#2196F3] font-semibold">{partner.name}</span>
              <span className="text-[#4CAF50] font-bold">₹{partner.fees.toFixed(2)}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Leaderboard;