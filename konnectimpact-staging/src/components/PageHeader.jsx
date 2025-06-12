import React from 'react';
import BackButton from './BackButton';

const PageHeader = ({ 
  title, 
  subtitle = null, 
  showBackButton = true, 
  backTo = null,
  actions = null,
  className = "",
  gradient = true
}) => {
  const headerClass = gradient 
    ? "page-header" 
    : "bg-white border-b border-gray-200 py-8 mb-6";

  return (
    <div className={`${headerClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showBackButton && (
          <div className="mb-4">
            <BackButton to={backTo} />
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className={`text-3xl font-bold ${gradient ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`mt-2 text-lg ${gradient ? 'text-blue-100' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
          
          {actions && (
            <div className="flex flex-wrap gap-3">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
