import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { delimiter } from "../../utilities/delimiter";
import AddToFav from "./AddToFav";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slices/cartSlice";
import Tooltip from "@mui/material/Tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="max-w-xs mx-auto overflow-hidden  dark:border-gray-100  dark:bg-gray-700  dark:bg-dark2 rounded shadow-2xl">
      <Link to={`/products/${product.id}`}>
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 capitalize">
            {delimiter(product.title, 18)}
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {delimiter(product.description, 50)}
          </p>
        </div>
        <img
          className="object-contain w-full h-48 mt-2"
          src={product.image}
          alt="product"
        />
        <div className="flex items-center justify-between p-2">
          <Rating
            name="float-rating"
            size="small"
            defaultValue={product.rating.rate}
            precision={0.1}
            readOnly
          />
          <label className="px-2 py-1 text-xs font-semibold text-custom1 dark:text-gray-100 uppercase">
            {product.category}
          </label>
        </div>
      </Link>
      <div className="flex items-center justify-between  px-4 py-2 bg-custom1 dark:bg-inherit dark:border-t">
        <h1 className="text-xl font-bold text-white">{product.price} $</h1>
        <div className="flex space-x-1 text-white">
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  category: product.category,
                  size: "MD",
                  color: "Black",
                })
              );
            }}
            className="flex ml-auto text-inherit px-2 "
          >
            <Tooltip title="Add to cart">
              <ShoppingCartOutlinedIcon className="ml-2" />
            </Tooltip>
          </button>
          <AddToFav product={product} />
        </div>
      </div>
    </div>
  );
}
