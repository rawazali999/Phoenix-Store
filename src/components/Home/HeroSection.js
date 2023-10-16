import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginIcon from "@mui/icons-material/Login";

export default function HeroSection() {
  return (
    <div className="bg-inherit  flex flex-col  md:flex-row  md:items-center -my-14">
      <div className="flex flex-col  items-center md:items-start  w-full   mx-auto py-20 px-8 lg:max-w-screen-xl">
        <h2 className="mb-6 font-poppins text-xl sm:text-3xl font-medium  text-custom3 dark:text-gray-200 ">
          Anything you Want <br /> We Have it Here ...
        </h2>
        <p className="pr-5 text-base text-custom1 dark:text-gray-300 md:text-lg">
          Our store has best products in each category :
        </p>
        <p className="pr-5 mb-5 text-base text-sky-900 dark:text-white md:text-lg">
          Electronics , Men Clothes <br /> Women Clothes , Jewelries
        </p>
        <div className="flex items-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-between h-12 p-3  mr-6 font-medium tracking-wide text-white dark:text-custom1 bg-custom1 dark:bg-slate-100 transition duration-200 rounded shadow-lg "
          >
            Shop Now <ShoppingBagOutlinedIcon className="ml-2" />
          </Link>
          <Link
            to="/login"
            aria-label=""
            className="  inline-flex items-center justify-between h-12 p-3 mr-6 font-medium tracking-wide bg-inherit text-custom1 dark:text-gray-100  border border-custom1 dark:border-white transition duration-200 rounded "
          >
            Login first
            <LoginIcon className="ml-2" />
          </Link>
        </div>
      </div>
      <img
        className=" object-contain w-full h-96 md:h-auto md:w-1/2"
        src={require("../../images/heroimage.png")}
        alt="shopping"
      />
    </div>
  );
}
