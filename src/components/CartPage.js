import React from "react";
import CartQuantity from "./CartQuantity";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";

function CartPage() {
  const quantity = useSelector((state) => state.quantity);

  return (
    <>
      <div className="flex md:flex-row flex-col justify-end">
        <div className=" w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white dark:bg-inherit  overflow-y-auto overflow-x-hidden h-screen">
          <p className="text-5xl font-black leading-10 text-gray-800 dark:text-gray-100 pt-3">
            Shopping Cart
          </p>
          <div className="mt-14 py-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-4">
            <img
              src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
              alt="l"
              className="col object-center rounded object-contain"
            />

            <div className=" mx-2 container flex justify-between col-span-3">
              <div className="mx-2 text-gray-700 dark:text-gray-100 ">
                <p className="text-sm sm:text-3xl my-4 font-black leading-none ">
                  North wolf bag
                </p>

                <p className="text-sm leading-3  py-2">Color: Black</p>
                <p className="text-sm leading-3  py-2">Size: small</p>
                <p className="text-sm leading-3  py-2">Category: men</p>

                <button className="mt-14 border-2 dark:bg-inherit dark:border-white border-red-500 text-red-500 dark:text-white px-2 py-1 rounded-md ">
                  <DeleteOutlineIcon />
                  Remove
                </button>
              </div>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <label
                    htmlFor="custom-input-number"
                    className="w-full  text-gray-900 dark:text-gray-100 text-md font-semibold px-4"
                  >
                    Quantity
                  </label>
                  <CartQuantity className="py-2 px-1 border border-gray-200 focus:outline-none" />
                </div>

                <div className="text-2xl ml-6 mb-2 font-black leading-none text-gray-800 dark:text-white ">
                  {quantity.quantity * 50}$
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 dark:bg-inherit dark:border-2  h-full">
          <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
            <div className="text-gray-800 dark:text-gray-100">
              <p className="text-4xl font-black leading-9 ">Summary</p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none ">Subtotal</p>
                <p className="text-base leading-none ">$9,000</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none ">Shipping</p>
                <p className="text-base leading-none ">$30</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none ">Tax</p>
                <p className="text-base leading-none ">$35</p>
              </div>
            </div>
            <div className="text-gray-800 dark:text-gray-100">
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal ">Total</p>
                <p className="text-2xl font-bold leading-normal text-right ">
                  $10,240
                </p>
              </div>
              <button className="text-xl rounded-md leading-none w-full py-5 bg-gray-800 dark:bg-gray-100 border-gray-800 border focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gray-800  text-white dark:text-gray-800">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
