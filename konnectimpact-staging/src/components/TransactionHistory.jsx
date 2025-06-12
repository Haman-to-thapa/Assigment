import { useState, useEffect } from 'react';
import TransactionCard from './TransactionCard';
import Spinner from './Spinner';

const mockData = [
  { date: '2025-05-10', action: 'Redeemed Points', points: -100 },
  { date: '2025-05-09', action: 'Earned Points', points: 200 },
  { date: '2025-05-08', action: 'Donated Points', points: -50 },
  { date: '2025-05-07', action: 'Earned Points', points: 150 },
  { date: '2025-05-06', action: 'Redeemed Points', points: -80 },
];

const FILTERS = ['All', 'Earned', 'Redeemed', 'Donated'];

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setTransactions(prev => [...prev, ...mockData]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadMore();
  }, []);

  const filtered = transactions.filter(txn => {
    if (filter === 'All') return true;
    return txn.action.includes(filter);
  });

  const sorted = [...filtered].sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return sortOrder === 'Newest' ? bDate - aDate : aDate - bDate;
  });

  return (
    <div className="bg-neutral-light dark:bg-gray-800 p-6 rounded-2xl shadow-card">
      {/* Filter & Sort Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          {FILTERS.map(type => (
            <button
              key={type}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${filter === type
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-gray-700 text-primary border-primary'
                }`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
          <span>Sort by:</span>
          <select
            className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-neutral-dark rounded-md px-2 py-1"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Transaction List */}
      <ul className="space-y-4">
        {sorted.map((txn, index) => (
          <TransactionCard key={index} {...txn} />
        ))}
      </ul>

      {/* Load More */}
      <div className="mt-6 text-center">
        <button
          className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={loadMore}
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Load More'}
        </button>
      </div>
    </div>
  );
}