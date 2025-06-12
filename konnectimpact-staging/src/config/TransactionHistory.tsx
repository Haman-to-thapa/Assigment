import React, { useState, useEffect, useCallback } from 'react';
import { ListChecks, ListX, RotateCw } from 'lucide-react';
import { Transaction } from '../modules/transitionHistoryDaivesh/types';
import LoadingSpinner from '../components/LoadingSpinner';
import TransactionItem from '../components/TransactionItem';
import { AnimatePresence, motion } from 'framer-motion'

const ITEMS_PER_PAGE = 5;
const initialTransactionsData: Transaction[] = [
  {
    id: '1',
    type: 'donation',
    title: 'Points Donated to Green Earth Initiative',
    date: 'May 22, 2025',
    points: -50,
    description: 'Your contribution helps plant 2 trees. Thank you for your impact!',
    icon: 'gift',
  },
  {
    id: '2',
    type: 'redemption',
    title: 'Redeemed for E-Gift Card',
    date: 'May 19, 2025',
    points: -106,
    description: 'Amazon E-Gift Card valued at $6. Enjoy your reward!',
    icon: 'card',
  },
  {
    id: '3',
    type: 'earning',
    title: 'Loyalty Bonus Points Earned',
    date: 'May 14, 2025',
    points: 83,
    description: 'Tier 1 loyalty bonus for your continued engagement.',
    icon: 'graph-up',
  },
  {
    id: '4',
    type: 'donation',
    title: 'Contribution to Clean Water Fund',
    date: 'May 10, 2025',
    points: -75,
    description: 'Supporting access to clean drinking water.',
    icon: 'gift',
  },
  {
    id: '5',
    type: 'earning',
    title: 'Welcome Bonus Points',
    date: 'May 01, 2025',
    points: 100,
    description: 'Thank you for joining KonnectImpact!',
    icon: 'graph-up',
  },
  {
    id: '6',
    type: 'redemption',
    title: 'Movie Ticket Voucher',
    date: 'April 28, 2025',
    points: -150,
    description: 'Enjoy a movie on us!',
    icon: 'card',
  },
  {
    id: '7',
    type: 'earning',
    title: 'Referral Bonus',
    date: 'April 25, 2025',
    points: 50,
    description: 'Bonus for referring a new member.',
    icon: 'graph-up',
  },
];

const TransactionHistory: React.FC = () => {
  const [transactionsToDisplay, setTransactionsToDisplay] = useState<Transaction[]>([]);
  const [isLoadingInitial, setIsLoadingInitial] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allFetchedTransactions] = useState<Transaction[]>(initialTransactionsData);

  useEffect(() => {
    setTimeout(() => setIsLoadingInitial(false), 1000);
  }, []);

  useEffect(() => {
    if (allFetchedTransactions.length > 0) {
      const endIndex = currentPage * ITEMS_PER_PAGE;
      setTransactionsToDisplay(allFetchedTransactions.slice(0, endIndex));
    }
  }, [allFetchedTransactions, currentPage]);

  const handleLoadMore = useCallback(() => {
    if (isLoadingMore || (currentPage * ITEMS_PER_PAGE >= allFetchedTransactions.length)) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setCurrentPage(prevPage => prevPage + 1);
      setIsLoadingMore(false);
    }, 600);
  }, [currentPage, allFetchedTransactions.length, isLoadingMore]);

  const hasMoreTransactions = currentPage * ITEMS_PER_PAGE < allFetchedTransactions.length;

  return (
    <div className="flex flex-col min-h-screen bg-neutral-light-gray dark:bg-neutral-dark-gray transition-colors duration-300">
      <main className="flex-grow w-full container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-montserrat text-3xl sm:text-4xl font-bold text-primary-teal dark:text-accent-lime mb-3 text-center sm:text-left"
            >
              Transaction Hub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-roboto text-neutral-medium-gray dark:text-neutral-light-gray/80 text-base sm:text-lg text-center sm:text-left"
            >
              Review your loyalty point activities, donations, and redemptions with clarity and ease.
            </motion.p>
          </div>

          {isLoadingInitial && <LoadingSpinner className="py-20" />}

          {!isLoadingInitial && transactionsToDisplay.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-16 px-6 bg-neutral-white dark:bg-neutral-black rounded-xl shadow-soft border border-neutral-light-gray/70 dark:border-neutral-black/50"
            >
              <ListX size={52} className="mx-auto text-neutral-medium-gray dark:text-neutral-light-gray/50 mb-5" />
              <h3 className="font-montserrat text-xl sm:text-2xl font-semibold text-neutral-dark-gray dark:text-neutral-white mb-2">
                No Transactions Found
              </h3>
              <p className="font-roboto text-neutral-dark-gray/70 dark:text-neutral-light-gray/70 max-w-sm mx-auto">
                Your transaction history is currently empty. Start engaging to see your activities here.
              </p>
            </motion.div>
          )}

          {transactionsToDisplay.length > 0 && (
            <motion.div className="space-y-5 sm:space-y-6">
              <AnimatePresence initial={false}>
                {transactionsToDisplay.map((tx) => (
                  <TransactionItem key={tx.id} transaction={tx} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {isLoadingMore && <LoadingSpinner size="sm" className="py-6" />}

          {hasMoreTransactions && !isLoadingInitial && !isLoadingMore && (
            <div className="mt-10 md:mt-12 text-center">
              <motion.button
                onClick={handleLoadMore}
                className="font-montserrat bg-primary-teal text-neutral-white px-6 py-3 rounded-lg hover:bg-opacity-90 active:bg-opacity-100 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-teal/70 focus:ring-offset-2 dark:focus:ring-offset-neutral-dark-gray flex items-center justify-center mx-auto text-sm font-semibold tracking-wide"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoadingMore}
              >
                <RotateCw size={16} className="mr-2" />
                Load More Transactions
              </motion.button>
            </div>
          )}

          {!isLoadingInitial && transactionsToDisplay.length > 0 && !hasMoreTransactions && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mt-12 py-8 border-t border-dashed border-neutral-medium-gray/40 dark:border-neutral-dark-gray/60"
            >
              <ListChecks size={28} className="mx-auto text-primary-teal dark:text-accent-lime mb-3" />
              <p className="font-roboto text-neutral-dark-gray dark:text-neutral-light-gray">
                You've viewed all your transactions.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TransactionHistory;