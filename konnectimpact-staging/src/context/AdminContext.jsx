// context/AppContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // Auth
  const [adminEmail, setAdminEmail] = useState(localStorage.getItem("adminEmail") || null);
  const [password, setPassword] = useState(localStorage.getItem("password") || null);

  // Campaigns
  const [campaigns, setCampaigns] = useState(() => {
    const stored = localStorage.getItem("campaigns");
    return stored ? JSON.parse(stored) : [];
  });

  // Save campaigns to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("campaigns", JSON.stringify(campaigns));
  }, [campaigns]);

  // Login & Logout
  const login = (email, pass) => {
    localStorage.setItem("adminEmail", email);
    localStorage.setItem("password", pass);
    setAdminEmail(email);
    setPassword(pass);
  };

  const logout = () => {
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("password");
    localStorage.removeItem("campaigns"); // clear campaigns
    setAdminEmail(null);
    setPassword(null);
    setCampaigns([]); // reset campaigns state
  };

  // Add a new campaign
  const addCampaign = (campaign) => {
    const newCampaign = {
      ...campaign,
      points: Math.floor(Math.random() * 1000), // simulated points
      fees: Math.floor(Math.random() * 500), // simulated fees
    };
    setCampaigns((prev) => [...prev, newCampaign]);
  };

  return (
    <AppContext.Provider value={{
      adminEmail,
      password,
      login,
      logout,
      campaigns,
      addCampaign
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);