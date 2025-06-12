import React from "react";
import { useAppContext } from "../context/AdminContext";
import BarChartComponent from './BarChartCompnent.jsx'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { adminEmail, logout } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="w-full px-4">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 sm:p-8 bg-white shadow-md rounded-md">
        {/* Brand Name */}
        <h1 className="text-2xl sm:text-xl font-bold text-blue-600">
          Konnect
        </h1>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => navigate("/create")}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Create new
          </button>

          <h1 className="text-sm font-bold text-gray-700 break-words">
            {adminEmail}
          </h1>

          <button
            onClick={logout}
            className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="mt-6">
        <BarChartComponent />
      </div>
    </div>
  );
};

export default Home;