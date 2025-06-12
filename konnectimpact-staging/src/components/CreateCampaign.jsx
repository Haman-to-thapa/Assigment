import React, { useState } from "react";
import { useAppContext } from "../context/AdminContext";
import PageHeader from "./PageHeader";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
  const { addCampaign, logout } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    conversionRate: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Campaign name is required";
    if (!formData.startDate) errs.startDate = "Start date is required";
    if (!formData.endDate) errs.endDate = "End date is required";
    if (!formData.conversionRate || isNaN(formData.conversionRate)) {
      errs.conversionRate = "Conversion rate must be a number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    addCampaign(formData);
    setFormData({ name: "", startDate: "", endDate: "", conversionRate: "" });
    alert("Campaign created!");
    navigate("/partner")

  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Create Campaign"
        subtitle="Set up a new impact campaign"
        backTo="/dashboard"
        actions={[
          <button
            key="logout"
            onClick={logout}
            className="btn btn-outline text-red-600 border-red-300 hover:bg-red-50"
          >
            Logout
          </button>
        ]}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="modern-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="form-label">Campaign Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                className="form-input"
                onChange={handleChange}
                placeholder="Enter campaign name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  className="form-input"
                  onChange={handleChange}
                />
                {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
              </div>
              <div>
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  className="form-input"
                  onChange={handleChange}
                />
                {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
              </div>
            </div>

            <div>
              <label className="form-label">Conversion Rate</label>
              <input
                type="number"
                name="conversionRate"
                value={formData.conversionRate}
                className="form-input"
                onChange={handleChange}
                placeholder="Enter conversion rate"
                step="0.01"
              />
              {errors.conversionRate && <p className="text-red-500 text-sm mt-1">{errors.conversionRate}</p>}
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="btn btn-primary flex-1">
                Create Campaign
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="btn btn-ghost"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;