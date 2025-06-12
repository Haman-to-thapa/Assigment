import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-white dark:bg-neutral-black border-t border-neutral-light-gray/70 dark:border-neutral-black/30 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
        <p className="font-roboto text-sm text-neutral-medium-gray dark:text-neutral-light-gray/70">
          &copy; {currentYear} KonnectImpact. All rights reserved.
        </p>
        <div className="mt-4 space-x-5">
          <a href="#" className="font-roboto text-xs text-primary-teal hover:underline">Privacy Policy</a>
          <a href="#" className="font-roboto text-xs text-primary-teal hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;