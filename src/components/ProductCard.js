import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { delimiter } from "../utilities/delimiter";
import AddToFav from "./AddToFav";

export default function ProductCard({ product }) {
  return (
    <div
      
      className="max-w-xs mx-auto overflow-hidden  border-custom1 bg-white rounded-2xl shadow-2xl"
    >
      <Link to={`/products/${product.id}`}>
        <div className="px-4 py-2">
          <h1 className="text-2xl font-bold text-gray-800 uppercase">
            {delimiter(product.title, 20)}
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {delimiter(product.description, 50)}
          </p>
        </div>
        <img
          className="object-contain w-full h-48 mt-2"
          src={product.image}
          alt="N"
        />
        <div className="flex items-center justify-between px-2 py-2">
          <Rating
            name="float-rating"
            size="small"
            defaultValue={product.rating.rate}
            precision={0.1}
            readOnly
          />
          <label className="px-2 py-1 text-xs font-semibold text-custom1 uppercase">
            {product.category}
          </label>
        </div>
     </Link>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
          <h1 className="text-lg font-bold text-white">{product.price} $</h1>
          <AddToFav/>
        </div>
      
    </div>
  );
}
