import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../app/slices/authenticationSlice";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar";

export default function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "/products", current: false },
    { name: "Electronics", href: "/electronics", current: false },
    { name: "Contact Us", href: "/ContactUs", current: false },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="flex flex-col bg-slate-50 sm:px-2 px-6 md:px-2 shadow-md border-solid border-t-2 pb-2 sm:pb-0">
          {/* first row  */}

          <div className="flex justify-between flex-shrink  lg:w-auto w-full  pb-5 sm:pb-0">
            {/* name and logo */}
            <div className="flex items-start flex-shrink text-myOrange -600 mt-4 mb-0">
              <img
                className="mx-1 w-16 h-auto sm:w-12  "
                src={require("../images/phoenix-logo-free-download-141875.png")}
                alt="logo"
              />
              <span className="font-semibold text-myRed sm:text-xl md:text-xl mt-4 sm:mt-3 text-3xl  ">
                Phoenix Store
              </span>
            </div>

            {/* search bar */}
            <div className="relative flex-shrink sm:hidden text-gray-600 mt-8 mr-10 flex mx-2 w-auto">
              <SearchBar />
            </div>
            {/* Login and Cart buttons*/}
            <div className="mt-3 text-md font-bold  flex justify-between mx-2 sm:mx-0  text-myOrange ">
              {auth.isAuthenticated ? (
                <>
                  <Menu as="div" className="mt-5">
                    <div>
                      <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-500 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#href"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-myOrange "
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#href"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-myOrange "
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/login"
                              onClick={() => dispatch(logout())}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-myOrange "
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div className="text-gray-500 mr-4 ml-2 mt-2 py-4">
                    {auth.username}
                  </div>
                </>
              ) : (
                <Link
                  to="/login"
                  className="mt-3  mr-8 sm:mr-2 lg:inline-block hover:text-white p-3 sm:mb-1 flex  rounded-full hover:bg-myYellow "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 sm:w-6 sm:h-6"
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

              <Link to="/cart">
                <span className="bg-myRed text-sm text-white rounded-full px-2 py-0.5 ml-4 ">
                  5
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 sm:w-6 sm:h-6 hover:text-yellow"
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

              <div className="hidden sm:block mx-2 mt-4">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center mb-2 p-2 rounded-md text-myOrange  hover:text-white hover:bg-myYellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className=" w-full sm:hidden flex items-center justify-center px-8">
            <div className="text-md  font-bold text-yellow flex justify-around">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-myYellow  text-white  mt-4 px-4 py-2 rounded mr-2 "
                      : " bg-slate-50 text-myOrange  mt-4 px-4 py-2 rounded mr-2 hover:bg-myYellow  hover:text-slate-50 "
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <Disclosure.Panel className="bg-slate-50 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-myOrange text-white  block px-3 py-2 rounded-md text-base font-medium "
                      : "  text-myOrange   hover:bg-myYellow  hover:text-slate-50 block px-3 py-2 rounded-md text-base font-medium "
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
