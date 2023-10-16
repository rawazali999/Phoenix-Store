import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

export const SearchCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="flex  bg-gray-100 dark:bg-slate-600 border"
    >
      <img
        className="m-1 h-auto w-16 rounded-md border object-cover object-center"
        src={product.image}
        alt={product.title}
      />
      <div className="flex w-full flex-col  justify-between py-4">
        <p className="font-medium ">
          {product.title.length > 25
            ? product.title.slice(0, 25) + "..."
            : product.title}{" "}
        </p>

        <div className="flex justify-between w-auto m-1">
          <span className="text-md font-bold ">${product.price}</span>
          <Rating
            name="float-rating"
            size="small"
            defaultValue={product.rating.rate}
            precision={0.1}
            readOnly
          />
        </div>
      </div>
    </Link>
  );
};
