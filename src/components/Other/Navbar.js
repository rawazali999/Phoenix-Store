import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../app/slices/authenticationSlice";
import { useSelector, useDispatch } from "react-redux";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchBar from "./SearchBar";
import ThemeToggle from "../Theme/ThemeToggle";
import { Tooltip } from "@mui/material";

export default function Navbar() {
  const auth = useSelector((state) => state.auth);

  const items = useSelector((state) => state.cart.items);
  // total cart items
  const getTotalQuantity = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const fav = useSelector((state) => state.fav.favorite);
  // total fav items
  const getTotalFav = () => {
    let total = 0;
    fav.forEach(() => {
      total += 1;
    });
    return total;
  };

  const dispatch = useDispatch();

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "/products", current: false },
    { name: "Men", href: "/men", current: false },
    { name: "Women", href: "/women", current: false },
    { name: "Electronics", href: "/electronics", current: false },
    { name: "Contact Us", href: "/ContactUs", current: false },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <nav className="flex flex-col w-full  bg-custom1  dark:bg-dark1 border-b-2 md:px-4 px-1  shadow-lg  sm:pb-2 ">
          {/* first row  */}
          <div className="flex justify-between items-center w-full pt-4 ">
            {/* name and logo */}
            <div className="text-md block sm:hidden mx-1 ">
              {/* Mobile size screen menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center   rounded-md text-white navlink">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <CloseRoundedIcon
                    className="block  w-10"
                    aria-hidden="true"
                  />
                ) : (
                  <MenuRoundedIcon className="block w-10" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex items-center text-custom3 my-auto ">
              <Link to={"/"}>
                <img
                  className="mx-0.5 w-10 sm:w-14 h-auto"
                  src={require("../../images/shopping-cart.png")}
                  alt="logo"
                />
              </Link>
              <span className="font-medium font-Robonto text-white text-md  lg:text-3xl sm:text-xl  ">
                Online Store
              </span>
            </div>

            {/* search bar */}
            <div className="relative hidden sm:flex flex-shrink text-gray-600 dark:text-gray-100  md:mr-10 mr-0  w-auto ">
              <SearchBar />
            </div>

            {/* theme and wishlist and  Login and Cart buttons*/}
            <div className="flex justify-between items-center">
              <ThemeToggle />
              {/* wishlist page button  */}
              <Tooltip title="Wishlist">
                <Link
                  to="/favorites"
                  className="navlink px-2 mr-1 flex"
                  aria-label="Wishlist"
                >
                  {getTotalFav() > 0 ? (
                    <span className=" absolute top-2 text-xs sm:text-sm font-semibold rounded-sm bg-white px-1 p-0.5 text-custom1  ml-4 ">
                      {getTotalFav() || 0}
                    </span>
                  ) : null}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 sm:w-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </Link>
              </Tooltip>

              {/* cart button */}
              <Tooltip title="Cart">
                <Link
                  to="/cart"
                  aria-label="cart"
                  className="navlink px-1 mr-2"
                >
                  {getTotalQuantity() > 0 ? (
                    <span className=" absolute top-2 text-xs sm:text-sm font-semibold rounded-sm bg-white px-1 py-0.5 text-custom1  ml-4 ">
                      {getTotalQuantity() || 0}
                    </span>
                  ) : null}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 sm:w-7 text-white "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </Link>
              </Tooltip>

              {auth.isAuthenticated ? (
                <>
                  <Menu as="div" className="  w-10 h-auto">
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom3 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                        alt="avatar"
                      />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right text-custom1 dark:text-white  absolute right-0  w-40 rounded-md shadow-lg py-1 bg-gray-100 dark:bg-slate-600 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <NavLink
                              to="/"
                              className={({ isActive }) =>
                                isActive
                                  ? " block  px-3 py-2  "
                                  : "block  px-3 py-2  "
                              }
                            >
                              Your Profile
                            </NavLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <NavLink
                              to="/"
                              className={({ isActive }) =>
                                isActive
                                  ? " block  px-3 py-2 "
                                  : "block  px-3 py-2 "
                              }
                            >
                              Settings
                            </NavLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <NavLink
                              to={"/login"}
                              onClick={() => dispatch(logout())}
                              className={({ isActive }) =>
                                isActive
                                  ? " block    px-3 py-2 "
                                  : "block   px-3 py-2 "
                              }
                            >
                              Sign out
                            </NavLink>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div
                    className="text-gray-200 
                   text-sm sm:text-lg py-4"
                  >
                    {auth.username}
                  </div>
                </>
              ) : (
                <Tooltip title="Login">
                  <Link
                    to="/login"
                    className=" navlink   lg:inline-block text-white px-1 mb-1 flex"
                    aria-label="Login"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" sm:w-7 w-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </Link>
                </Tooltip>
              )}
            </div>
          </div>
          {/* second row (navigation links) */}
          <div className=" w-full hidden sm:flex items-center justify-around px-8">
            <div className="text-sm sm:text-md text-white flex justify-around">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "active-nav  mt-4  px-3 py-2 mr-2 tracking-wider font-medium"
                      : "navlink   mt-4  px-3 py-2 mr-2 tracking-wider font-medium"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          {/* mobile size navbar links panel */}
          <Disclosure.Panel>
            <div className="grid grid-cols-3 px-2 pt-2 pb-3 border-b sm:hidden">
              <div className="col-span-3 relative flex justify-center text-gray-600 dark:text-gray-100   w-auto ">
                <SearchBar />
              </div>

              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-100 active-nav block px-6 py-2  text-base font-medium "
                      : " text-gray-100 navlink  block px-3 py-2 text-base font-medium "
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </nav>
      )}
    </Disclosure>
  );
}
