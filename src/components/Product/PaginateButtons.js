import React from "react";

export const prevButton = (
  <button className="px-4 py-2 mx-1 rounded-md text-gray-800 capitalize bg-gray-300 hover:bg-blue-500  hover:text-gray-100 ">
    <div className="flex items-center -mx-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mx-1 rtl:-scale-x-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
      <span className="mx-1 hidden sm:inline">previous</span>
    </div>
  </button>
);

export const nextButton = (
  <button className="px-4 py-2 mx-1 text-gray-800 capitalize bg-gray-300 rounded-md hover:bg-blue-500 hover:text-gray-100 ">
    <div className="flex items-center -mx-1">
      <span className="mx-1 hidden sm:inline">Next</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mx-1 rtl:-scale-x-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  </button>
);
