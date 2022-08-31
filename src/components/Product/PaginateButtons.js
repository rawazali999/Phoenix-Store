import React from "react";

export const prevButton = (
  <button class="px-4 py-2 mx-1 rounded-md text-gray-800 capitalize bg-gray-300 hover:bg-blue-500  hover:text-gray-100 ">
    <div class="flex items-center -mx-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mx-1 rtl:-scale-x-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>

      <span class="mx-1">previous</span>
    </div>
  </button>
);

export const nextButton = (
  <button class="px-4 py-2 mx-1 text-gray-800 capitalize bg-gray-300 rounded-md hover:bg-blue-500 hover:text-gray-100 ">
    <div class="flex items-center -mx-1">
      <span class="mx-1">Next</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mx-1 rtl:-scale-x-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  </button>
);
