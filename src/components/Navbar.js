import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../app/slices/authenticationSlice";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import ThemeToggle from "./Theme/ThemeToggle";

export default function Navbar() {
  const auth = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart.cart);
  // total cart items
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
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
        <div className="flex flex-col  bg-gradient-to-r  from-cyan-500 dark:from-darkFrom  to-blue-500 dark:to-darkTo  md:px-4 px-1 border-b shadow-sm  sm:pb-2 ">
          {/* first row  */}

          <div className="flex justify-between flex-shrink w-full  sm:pb-2 ">
            {/* name and logo */}
            <div className="flex items-start flex-shrink text-custom3  mt-4 ">
              <img
                className="mx-0.5 w-12 h-auto sm:w-16  "
                src={require("../images/kisspng-phoenix-logo-drawing-clip-art-5af979a03d3910.2233163115262990402508.png")}
                alt="logo"
              />
              <span className="font-medium text-white text-md sm:mt-4 lg:text-3xl sm:text-xl  ">
                Phoenix <br className="sm:hidden" />
                Store
              </span>
            </div>

            {/* search bar */}
            <div className="relative hidden sm:flex flex-shrink text-gray-600 dark:text-gray-100 mt-8 md:mr-10 mr-0  w-auto ">
              <SearchBar />
            </div>

            {/* Login and Cart buttons*/}
            <div className="mt-3 text-md font-bold flex justify-between">
              <ThemeToggle />

              {auth.isAuthenticated ? (
                <>
                  <Menu as="div" className="mt-5 sm:w-10 w-7  text-pallete1">
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom3 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                        alt=""
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
                      <Menu.Items className="origin-top-right text-custom1 dark:text-gray-100  absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-gray-100 dark:bg-dark1 ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                  <div className="text-gray-700 dark:text-gray-200 mr-4 ml-2 mt-2 text-sm sm:text-lg py-4">
                    {auth.username}
                  </div>
                </>
              ) : (
                <Link
                  to="/login"
                  className="mt-6 navlink  mr-2 lg:inline-block text-gray-100 px-1 mb-1 flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" sm:w-7 w-5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </Link>
              )}

              {/* cart button */}

              <Link to="/cart" className="navlink px-2">
                {getTotalQuantity() > 0 ? (
                  <span className="bg-red-500 sm:text-sm text-xs text-white rounded-full px-2 py-0.5 ml-4 -mr-4">
                    {getTotalQuantity() || 0}
                  </span>
                ) : (
                  <span className="sm:text-sm text-xs  px-2 py-0.5 ml-4 -mr-4"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-7 text-gray-100 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>

              <div className="text-my block sm:hidden mx-1 mt-4">
                {/* Mobile size screen menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center mb-2 p-2 rounded-md text-gray-100 hover:text-custom5 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block  w-5" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block  w-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* second row (navigation links) */}
          <div className=" w-full hidden sm:flex items-center justify-around px-8">
            <div className="text-sm sm:text-md text-white font-bold flex justify-around">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? " active-nav  mt-4  px-3 py-2 mr-2 "
                      : "navlink   mt-4  px-3 py-2 mr-2  "
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
              <div className="col-span-3 relative flex justify-center text-gray-600 dark:text-gray-100 my-2  w-auto ">
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
        </div>
      )}
    </Disclosure>
  );
}
