import React, { useEffect, useState, useCallback } from 'react';
import TransactionHistory from '../../components/TransactionHistory';
import alatreeLogo from '../../assets/alatree-logo.jpg'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-light dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-roboto transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-800">
        <h1 className="text-xl font-montserrat font-semibold text-primary" tabIndex={0}>
          KonnectImpact
        </h1>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="text-sm px-4 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-3xl mx-auto p-6 space-y-10">
        {/* One-liner overview */}
        <section
          className="text-center max-w-2xl mx-auto px-4"
          aria-label="KonnectImpact One-Liner Overview"
        >
          <p className="text-xs text-gray-700 dark:text-gray-300 italic font-medium">
            KonnectImpact.com is a loyalty-to-impact portal where customers redeem or donate
            loyalty points across our platforms — driving engagement, reducing corporate liabilities,
            and funding community causes.
          </p>
        </section>

        {/* Transaction History */}
        <section aria-labelledby="transaction-history-title">
          <h2
            id="transaction-history-title"
            className="text-4xl font-montserrat font-bold text-primary mb-2 text-center"
            tabIndex={-1}
          >
            Transaction History
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-6">
            View and manage your recent loyalty point activity
          </p>

          <TransactionHistory />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
        <div className="flex justify-center items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400">
            Built for Alatree Ventures
          </span>
          <img
            src={alatreeLogo}
            alt="Alatree Ventures logo"
            className="h-6 w-auto"
          />
          <span className="text-gray-600 dark:text-gray-400">
            by Jerin Joseph Alour
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;