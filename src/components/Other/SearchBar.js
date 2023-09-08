import React from "react";
export default function SearchBar() {
  return (
    <form>
      <div className="relative">
        <input
          type="search"
          className="block  p-2  w-72 text-sm bg-white dark:bg-inherit  border-2 border-gray-100 focus:border-custom4 focus:outline-none "
          placeholder="Search..."
        />

        <div className="flex absolute inset-y-0 right-0 items-center pl-3 mx-2 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-custom1 dark:text-gray-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </form>
  );
}
