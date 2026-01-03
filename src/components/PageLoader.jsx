import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-purple-500/30 rounded-full animate-spin" 
          style={{ animationDuration: '3s' }} 
        />
        {/* Inner ring */}
        <div className="absolute inset-2 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" 
          style={{ animationDuration: '1s' }} 
        />
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
        </div>
      </div>
      <p className="absolute mt-24 text-secondary text-sm font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default PageLoader;
