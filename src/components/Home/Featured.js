import React from "react";
import { Link } from "react-router-dom";
import { delimiter } from "../../utilities/delimiter";
import AddToFav from "../Product/AddToFav";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slices/cartSlice";
import Tooltip from "@mui/material/Tooltip";


export default function Featured({ product }) {
    const dispatch = useDispatch();

  return (
    <div className="max-w-xs shadow-xl rounded-xl dark:border p-2 ">
      <Link
        to={`/products/${product.id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="e-commerce"
          className="object-contain object-center w-full h-full block"
          src={product.image}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 dark:text-gray-100 text-xs tracking-widest title-font mb-1">
          {product.category}
        </h3>
        <h2 className="text-custom1 dark:text-white title-font text-lg font-medium">
          {delimiter(product.title, 18)}
        </h2>
        <div className="flex justify-between">
          <p className="mt-1 dark:text-gray-50 text-lg">${product.price}</p>
          <div className="flex py-1 px-2 space-x-2 bg-custom1 dark:bg-dark2 rounded-sm">
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    category: product.category,
                  })
                );
              }}
            >
              <Tooltip title="Add to cart">
                <ShoppingCartOutlinedIcon className="text-white" />
              </Tooltip>
            </button>
            <AddToFav product={product} />          
          </div>
        </div>
      </div>
    </div>
  );
}
