import React from "react";
import { useAppContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";

const ParternerCampagin = () => {
  const { campaigns, logout } = useAppContext();
  const navigate = useNavigate();

  const getStatus = (endDate) => {
    return new Date(endDate) >= new Date() ? "Active" : "Completed";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Partner Campaigns"
        subtitle="Manage and monitor your impact campaigns"
        backTo="/dashboard"
        actions={[
          <button
            key="create"
            onClick={() => navigate("/create")}
            className="btn btn-primary"
          >
            Create New Campaign
          </button>,
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
        {campaigns.length === 0 ? (
          <div className="modern-card text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns yet</h3>
            <p className="text-gray-600 mb-6">Create your first campaign to get started</p>
            <button
              onClick={() => navigate("/create")}
              className="btn btn-primary"
            >
              Create Your First Campaign
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="modern-card hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {campaign.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatus(campaign.endDate) === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                    }`}>
                    {getStatus(campaign.endDate)}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Points Processed:</span>
                    <span className="font-medium">{campaign.points || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fees Earned:</span>
                    <span className="font-medium text-green-600">₹{campaign.fees || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conversion Rate:</span>
                    <span className="font-medium">{campaign.conversionRate}%</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      {campaign.startDate} to {campaign.endDate}
                    </p>
                  </div>
                </div>
              </div>


            ))}

          </div>

        )}
      </div>
    </div>
  );
};

export default ParternerCampagin;