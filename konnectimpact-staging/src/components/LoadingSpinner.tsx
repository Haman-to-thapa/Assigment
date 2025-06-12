// filepath: src/components/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-5 w-5 border-2', // Slightly smaller for inline use
    md: 'h-10 w-10 border-t-2 border-b-2',
    lg: 'h-16 w-16 border-t-4 border-b-4',
  };
  return (
    <div className={`flex justify-center items-center py-8 ${className}`}>
      <div
        className={`animate-spin rounded-full border-primary-teal ${sizeClasses[size]}`}
      // Using primary-teal for both light and dark mode for consistency with brand
      // If accent-lime is preferred for dark mode spinner, uncomment next line and comment out the one above
      // className={`animate-spin rounded-full border-primary-teal dark:border-accent-lime ${sizeClasses[size]}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;