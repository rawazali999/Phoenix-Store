import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={require("../images/heroimage.png")}
          alt="shopping"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg  lg:pr-5">
          
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-custom1 sm:text-4xl sm:leading-none">
            Anything you Want <br /> We Have it Here ...
          </h2>
          <p className="pr-5 text-base text-custom1 md:text-lg">
            Our store has best products in each category :
          </p>
          <p className="pr-5 mb-5 text-base text-custom3 md:text-lg">
            Electronics , Men Clothes , Women Clothes <br /> Sport Clothes
          </p>
          <div className="flex items-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-between h-12 px-3 mr-6 font-medium tracking-wide text-custom1 bg-custom4 transition duration-200 rounded shadow-lg hover:bg-custom3 focus:shadow-outline focus:outline-none"
            >
              Shop Now <ShoppingBagOutlinedIcon className="ml-2" />
            </Link>
            <Link
              to="/login"
              aria-label=""
              className="inline-flex items-center font-semibold text-custom1 hover:text-slate-500"
            >
              Login first
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
