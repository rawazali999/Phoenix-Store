import React from "react";
export default function SearchBar() {
  return (
    <>
      <select
        id="countries"
        className="bg-white border-2 border-r-0 text-center border-gray-300 text-sm rounded-l-lg focus:ring-custom4 focus:border-custom4 focus:outline-none w-auto h-10"
      >
        <option defaultValue={"All"}>All</option>
        <option value="US">Men</option>
        <option value="CA">Women</option>
        <option value="FR">Electronics</option>
        <option value="DE">Sport</option>
      </select>

      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block  p-2  w-full text-sm text-navy bg-white rounded-r-lg border-2 border-gray-300 focus:border-custom4 focus:outline-none "
            placeholder="Search..."
            required
          />

          <div className="flex absolute inset-y-0 right-0 items-center pl-3 mx-2 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
    </>
  );
}
