/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useLocation, Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "/products", current: false },
    { name: "Electronics", href: "/electronics", current: false },
      { name: "Contact Us", href: "/ContactUs", current: false },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="flex flex-col bg-slate-50 sm:px-2 px-6 shadow-md border-solid border-t-2 pb-2">
          {/* first row  */}

          <div className="flex justify-between flex-shrink  lg:w-auto w-full  pb-5 lg:pb-0">
            {/* name and logo */}
            <div className="flex items-start flex-shrink text-yellow-900 mt-4 mb-0">
              <img
                className="mx-1 w-16 h-auto"
                src="https://phoenixpwn.com/phoenix.png"
                alt="logo"
              />
              <span className="font-semibold mt-6 text-2xl tracking-tight ">
                Phoenix Store
              </span>
            </div>

            {/* search bar */}
            <div className="relative sm:hidden flex-shrink text-gray-600 mt-8 flex ml-8 mr-24 md:w-40 ">
              <input
                className="border-2 border-grey-500 bg-white md:w-40 h-10 pl-2 pr-16 rounded-lg text-lg focus:outline-none focus:border-yellow-500"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button className="absolute right-0 top-0 mt-3 mr-2">
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            <div className="mt-6 text-md font-bold flex  text-yellow-700 mx-2 sm:hidden">
              <Link
                to="/login"
                className="mt-4 lg:inline-block hover:text-white px-4 py-2 flex  rounded hover:bg-yellow-500 mr-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
                 Log in
              </Link>
              
              <Link to="/cart" className="">
              <span className="bg-red-500 text-sm text-white rounded-xl px-2 py-0.5 ml-4 ">5</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              
            </div>

            <div className="hidden sm:block mt-10">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-yellow-600 hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          {/* second row */}
          <div className=" w-full sm:hidden flex items-center justify-center px-8">
            <div className="text-md font-bold text-yellow-700 flex justify-around">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-yellow-500 mr-2"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Disclosure.Panel className="bg-yellow-600 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? "bg-white text-yellow-600"
                      : "text-white hover:bg-white hover:text-yellow-600",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
