import React from 'react';

export const LoadingSpinner = ({ className, text }) => (
  <div
    data-testid="loading-spinner"
    className={`flex flex-col items-center justify-center space-y-4 ${className}`}
  >
    <svg
      className="animate-spin h-24 w-24 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
    <h2 className="text-lg font-medium text-gray-700">{text}</h2>
  </div>
);