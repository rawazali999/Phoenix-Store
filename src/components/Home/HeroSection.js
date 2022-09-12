import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginIcon from "@mui/icons-material/Login";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={require("../../images/heroimage.png")}
          alt="shopping"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg  lg:pr-5">
          <h2 className="mb-6 font-poppins text-xl sm:text-3xl font-medium  text-custom1 dark:text-gray-200 ">
            Anything you Want <br /> We Have it Here ...
          </h2>
          <p className="pr-5 text-base text-custom1 dark:text-gray-300 md:text-lg">
            Our store has best products in each category :
          </p>
          <p className="pr-5 mb-5 text-base text-custom4  md:text-lg">
            Electronics , Men Clothes <br /> Women Clothes , Jewelries
          </p>
          <div className="flex items-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-between h-12 p-3  mr-6 font-medium tracking-wide text-white dark:text-custom1 bg-custom4 dark:bg-slate-100 transition duration-200 rounded shadow-lg hover:bg-custom3 "
            >
              Shop Now <ShoppingBagOutlinedIcon className="ml-2" />
            </Link>
            <Link
              to="/login"
              aria-label=""
              className="inline-flex items-center justify-between h-12 p-3 mr-6 font-medium tracking-wide bg-inherit dark:text-gray-100  dark:border   transition duration-200 rounded "
            >
              Login first
              <LoginIcon className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
