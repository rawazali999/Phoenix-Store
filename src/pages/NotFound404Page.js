import React from "react";
import { Link } from "react-router-dom";

export default function NotFound404Page() {
  return (
    <section className="flex items-center bg-inherit h-full px-16 py-32 text-gray-400 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-10">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-800 dark:text-gray-100">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl my-10 font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded text-white dark:bg-gray-600 "
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
