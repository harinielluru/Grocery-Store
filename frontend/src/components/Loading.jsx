import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative">
        {/* Outer spinning circle */}
        <div className="absolute inset-0 rounded-full border-8 border-gray-200 opacity-25"></div>
        
        {/* Main spinning loader */}
        <div className="w-20 h-20 border-t-8 border-b-8 border-color-400 rounded-full animate-spin"></div>
        
        {/* Inner pulsing dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-color-500 rounded-full animate-pulse"></div>
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-color-500 font-medium">
          Loading...
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-10">
        <div className="absolute w-full h-full rounded-full border-8 border-color-400 animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>
    </div>
  );
};

export default Loading;