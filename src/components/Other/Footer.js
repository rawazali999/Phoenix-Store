import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="relative mt-16  rounded-t-3xl bg-gradient-to-r from-cyan-300 to-blue-600 dark:from-darkFrom dark:bg-darkTo">
      {/* <svg
        className="absolute top-0 w-full h-6 -mt-3 sm:-mt-10 sm:h-12"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg> */}
      <div className="px-4  mx-auto py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 row-gap-10 ">
          {/* logo and contact details */}
          <div className="col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img
                className="mx-1 w-14 h-auto   "
                src={require("../../images/kisspng-phoenix-logo-drawing-clip-art-5af979a03d3910.2233163115262990402508.png")}
                alt="logo"
              />
              <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                Phoenix Store
              </span>
            </a>
            <div className="m-4 lg:max-w-sm grid grid-cols-1 dark:text-gray-200 ">
              <div className="my-1">
                <LocationOnIcon />
                <span className="mx-4">Erbil , Kurdistan</span>
              </div>
              <div className="my-1">
                <PhoneIcon />
                <span className="mx-4 ">+964 750 123 4567</span>
              </div>
              <div className="my-1">
                <EmailIcon />
                <span className="mx-4 ">info@company.com</span>
              </div>
            </div>
            <div className="m-4 text-custom1 dark:text-gray-100">You can find us at:</div>
            <div className="flex items-center m-4 space-x-12 text-custom1 dark:text-gray-100 ">
              <a
                href="/"
                aria-label="twitter"
                className="transition-colors duration-300 "
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                aria-label="instagram"
                className="transition-colors duration-300 "
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                aria-label="facebook"
                className="transition-colors duration-300 "
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
          {/* categories links */}
          <div className="my-2 px-2">
            <p className="font-semibold text-white ">Category</p>
            <ul className="mt-2 space-y-2 text-custom1 hover:text-custom5 dark:text-gray-200 ">
              <li>
                <Link to="/men" className="transition-colors duration-300">
                  Men
                </Link>
              </li>
              <li>
                <Link to={"/women"} className="transition-colors duration-300 ">
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to={"/electronics"}
                  className="transition-colors duration-300 "
                >
                  Electronics
                </Link>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 ">
                  Jewelries
                </a>
              </li>
            </ul>
          </div>
          {/* some other links */}
          <div className="my-2 px-4 ">
            <p className="font-semibold tracking-wide text-white">Pages</p>
            <ul className="mt-2 space-y-2 text-custom1 dark:text-gray-100 hover:text-custom5">
              <li>
                <Link to="/" className="transition-colors duration-300 ">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="transition-colors duration-300 "
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/men" className="transition-colors duration-300 ">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="transition-colors duration-300 ">
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/electronics"
                  className="transition-colors duration-300 "
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className="transition-colors duration-300 "
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* email input with button for sub */}
          <div className="md:max-w-md px-2 sm:px-10 col-span-2">
            <span className="text-base font-semibold tracking-wide text-white">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 lg:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-56 h-12 px-4 mb-3 transition duration-200 bg-white border-2 border-custom1   rounded lg:rounded-r-none shadow-sm appearance-none lg:mb-0  focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className=" w-28 h-12 px-2 py-2.5  font-semibold tracking-wide text-white dark:text-custom1 transition duration-200 rounded lg:rounded-l-none shadow-md bg-custom1 dark:bg-white border-2 border-custom1  focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-100">
              get information about latest news , offers, discounts...
            </p>
            <p className="text-sm font-semibold my-10 text-custom1 dark:text-gray-100 ">
              © Copyright 2022 Phoenix Store. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
