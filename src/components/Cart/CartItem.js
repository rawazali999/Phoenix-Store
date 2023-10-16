import React from "react";
import ItemQuantity from "./ItemQuantity";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeItem } from "../../app/slices/cartSlice";
import Tooltip from "@mui/material/Tooltip";

export default function CartItem({
  id,
  image,
  title,
  price,
  category,
  quantity = 0,
  color,
  size,
}) {
  const dispatch = useDispatch();

  const total = price * quantity;

  return (
    <>
      <div className="rounded-lg p-2  my-4 shadow-lg dark:shadow-slate-700  grid grid-cols-1 sm:grid-cols-4">
        <img
          src={image}
          alt="item "
          className=" mb-1 rounded mx-auto self-center object-contain w-1/2 sm:w-full sm:mb-0"
        />

        <div className=" mx-2 container flex flex-col col-span-3">
          <div className="mx-2 text-custom1 flex justify-between dark:text-gray-100 ">
            <div>
              <p className="text-sm sm:text-xl my-4 font-semibold ">{title}</p>

              <p className="text-sm font-semibold leading-3  py-2">
                Color: {color}
              </p>
              <p className="text-sm font-semibold leading-3  py-2">
                Size: {size}
              </p>
              <p className="text-sm font-semibold leading-3  py-2">
                Category: {category}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <label
                htmlFor="custom-input-number"
                className="text-gray-900 px-2 dark:text-gray-100 text-md font-semibold"
              >
                Quantity
              </label>
              <ItemQuantity
                id={id}
                quantity={quantity}
                className=" border border-gray-200 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-between mt-10 px-4">
            <button
              onClick={() => dispatch(removeItem(id))}
              className="border-2 dark:bg-white border-red-500  text-red-500 px-2 py-1 rounded-md "
            >
              <Tooltip title="Remove item">
                <DeleteIcon />
              </Tooltip>
            </button>
            <div className="text-2xl ml-6 mb-2 font-black leading-none text-gray-800 dark:text-white ">
              {total.toFixed(2)}$
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
