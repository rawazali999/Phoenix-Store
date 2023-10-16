import React from "react";
import { ThemeContext } from "./themeContext";
import { useContext } from "react";
import Tooltip from "@mui/material/Tooltip";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <Tooltip title="Switch to Light Mode">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className=" text-white  shadow-none mx-1 px-2  cursor-pointer"
          
          
        >
          <svg
            className="w-5 sm:w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </button>
        </Tooltip>
      ) : (
        <Tooltip title="Switch to Dark Mode">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-white mx-1 px-2  outline-none  cursor-pointer"
          area-label="moon"
        >
          <svg
            className="w-5 sm:w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </button>
        </Tooltip>
      )}
    </>
  );
};

export default ThemeToggle;
