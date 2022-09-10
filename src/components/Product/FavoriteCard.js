import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slices/cartSlice";
import { removeFav } from "../../app/slices/favoriteSlice";
import { delimiter } from "../../utilities/delimiter";

export default function FavoriteCard({ id, image, title, price, category }) {
  const dispatch = useDispatch();
  return (
    <div className="inline">
      <div className="flex flex-col items-center justify-center w-full ">
        <div
          className="w-full h-64 bg-white bg-center bg-contain bg-no-repeat rounded-lg shadow-md"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {delimiter(title, 15)}
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              ${price}
            </span>

            <div className="space-x-2">
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: id,
                      title: title,
                      price: price,
                      image: image,
                      category: category,
                    })
                  );
                }}
                className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
              >
                <ShoppingCartOutlinedIcon />
              </button>
              <button
                onClick={() => {
                  dispatch(removeFav(id));
                }}
                className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
              >
                <HeartBrokenIcon />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
