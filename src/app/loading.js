import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">
        {/* Blue Spinner */}
        <div className="w-16 h-16 border-[6px] border-t-transparent border-blue-500 rounded-full animate-spin shadow-md shadow-blue-300" />

        {/* Subtle Text */}
        <h2 className="text-lg font-semibold text-blue-600 animate-pulse">
          Loading...
        </h2>

        {/* Bouncing Dots */}
        <div className="flex space-x-1 mt-1">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:.1s]" />
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:.2s]" />
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:.3s]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
