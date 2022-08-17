import React from "react";
import CartQuantity from "./CartQuantity";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "@mui/material";

function CartPage() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-end">
        <div
          className=" w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
          id="scroll"
        >
          <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
            Shopping Cart
          </p>
          <div className="mt-14 py-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-4">
            <div className="w-1/2 sm:w-full">
              <img
                src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                alt="l"
                className="w-full h-full object-center rounded object-cover"
              />
            </div>
            <div className=" mx-2 container flex justify-between col-span-3">
              <div className="mx-2">
                <p className="text-sm sm:text-3xl my-4 font-black leading-none text-gray-800">
                  North wolf bag
                </p>

                <p className="text-sm leading-3 text-gray-700 py-2">
                  Color: Black
                </p>
                <p className="text-sm leading-3 text-gray-700 py-2">
                  Size: small
                </p>
                <p className="text-sm leading-3 text-gray-700 py-2">
                  Category: men
                </p>

                <div className="mt-20">
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteOutlineIcon />}
                  >
                    remove
                  </Button>
                </div>
              </div>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <label
                    htmlFor="custom-input-number"
                    className="w-full  text-gray-900 text-md font-semibold px-4"
                  >
                    Quantity
                  </label>
                  <CartQuantity className="py-2 px-1 border border-gray-200 focus:outline-none" />
                </div>

                <div className="text-lg ml-6 font-black leading-none text-gray-800 ">
                  $90
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 h-full">
          <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
            <div>
              <p className="text-4xl font-black leading-9 text-gray-800">
                Summary
              </p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800">Subtotal</p>
                <p className="text-base leading-none text-gray-800">$9,000</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Shipping</p>
                <p className="text-base leading-none text-gray-800">$30</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Tax</p>
                <p className="text-base leading-none text-gray-800">$35</p>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                  $10,240
                </p>
              </div>
              <button className="text-xl rounded-md leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
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
