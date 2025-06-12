import React from 'react';
import { FaGift, FaCreditCard, FaChartLine, FaQuestionCircle } from 'react-icons/fa'; // Or lucide-react icons
import { motion } from 'framer-motion';
import { Transaction } from '../modules/transitionHistoryDaivesh/types';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { title, date, points, description, icon } = transaction;

  const renderIcon = () => {
    const iconBaseClass = "w-7 h-7 sm:w-8 sm:h-8 mr-4 flex-shrink-0";
    switch (icon) {
      case 'gift':
        return <FaGift className={`${iconBaseClass} text-primary-teal`} />;
      case 'card':
        return <FaCreditCard className={`${iconBaseClass} text-primary-teal`} />;
      case 'graph-up':
        return <FaChartLine className={`${iconBaseClass} text-accent-lime`} />;
      default:
        return <FaQuestionCircle className={`${iconBaseClass} text-neutral-medium-gray`} />;
    }
  };

  const pointsColor = points >= 0 ? 'text-accent-lime' : 'text-negative-red';
  const pointsPrefix = points >= 0 ? '+' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-neutral-white dark:bg-neutral-black rounded-xl shadow-soft p-5 sm:p-6 border border-transparent hover:border-primary-teal/30 dark:hover:border-accent-lime/30 hover:shadow-card-hover transition-all duration-200 ease-in-out"
    >
      <div className="flex items-start">
        {renderIcon()}
        <div className="flex-grow min-w-0"> {/* Added min-w-0 for flex truncation */}
          <div className="flex flex-col sm:flex-row justify-between items-start mb-1.5">
            <h3 className="font-montserrat text-md sm:text-lg font-semibold text-neutral-dark-gray dark:text-neutral-white mb-1 sm:mb-0 truncate pr-2">
              {title}
            </h3>
            <span className={`font-roboto text-md sm:text-lg font-bold ${pointsColor} whitespace-nowrap`}>
              {pointsPrefix}{points} pts
            </span>
          </div>
          <p className="font-roboto text-xs sm:text-sm text-neutral-medium-gray mb-2 sm:mb-3">{date}</p>
          {description && (
            <p className="font-roboto text-sm text-neutral-dark-gray/80 dark:text-neutral-light-gray/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TransactionItem;