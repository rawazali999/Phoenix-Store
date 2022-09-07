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
}) {
  const dispatch = useDispatch();

  const total = price * quantity;

  return (
    <>
      <div className="mt-14 pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-4">
        <img
          src={image}
          alt="l"
          className="col object-center rounded object-contain"
        />

        <div className=" mx-2 container flex flex-col col-span-3">
          <div className="mx-2 text-gray-700 flex justify-between dark:text-gray-100 ">
            <div>
              <p className="text-sm sm:text-xl my-4 font-black leading-none ">
                {title}
              </p>

              <p className="text-sm leading-3  py-2">Color: Black</p>
              <p className="text-sm leading-3  py-2">Size: small</p>
              <p className="text-sm leading-3  py-2">Category: {category}</p>
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

          <div className="flex justify-between mt-16 px-4">
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
