import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-neutral-white dark:bg-neutral-black shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8 text-primary-teal mr-2.5" />
            <span className="font-montserrat text-xl sm:text-2xl font-bold text-neutral-dark-gray dark:text-neutral-white">
              KonnectImpact
            </span>
          </div>
          <div>
            <a
              href="#"
              className="font-montserrat text-xs sm:text-sm font-semibold bg-primary-teal text-neutral-white rounded-md px-4 py-2 sm:px-5 sm:py-2.5 hover:bg-opacity-90 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-teal/70 focus:ring-offset-2 dark:focus:ring-offset-neutral-black"
            >
              Impact Hub Portal
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;