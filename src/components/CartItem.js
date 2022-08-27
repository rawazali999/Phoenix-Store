import React from "react";
import CartQuantity from "./CartQuantity";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { removeItem } from "../app/slices/cartSlice";

export default function CartItem({ id, image, title, price, quantity = 0 }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-14 py-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-4">
        <img
          src={image}
          alt="l"
          className="col object-center rounded object-contain"
        />

        <div className=" mx-2 container flex justify-between col-span-3">
          <div className="mx-2 text-gray-700 dark:text-gray-100 ">
            <p className="text-sm sm:text-3xl my-4 font-black leading-none ">
              {title}
            </p>

            <p className="text-sm leading-3  py-2">Color: Black</p>
            <p className="text-sm leading-3  py-2">Size: small</p>
            <p className="text-sm leading-3  py-2">Category: men</p>

            <button
              onClick={() => dispatch(removeItem(id))}
              className="mt-14 border-2 dark:bg-inherit dark:border-white border-red-500 text-red-500 dark:text-white px-2 py-1 rounded-md "
            >
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
              <CartQuantity
                id={id}
                quantity={quantity}
                className="py-2 px-1 border border-gray-200 focus:outline-none"
              />
            </div>

            <div className="text-2xl ml-6 mb-2 font-black leading-none text-gray-800 dark:text-white ">
              {quantity * price}$
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
