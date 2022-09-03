import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="container  mx-auto px-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10 object-fill">
      {products.map((product, index) => {
        //  key is used to solve each product must have key console error
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
}
