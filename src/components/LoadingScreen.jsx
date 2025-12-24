import React from "react";

export const LoadingScreen = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};