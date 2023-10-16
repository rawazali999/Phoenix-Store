import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slices/cartSlice";
import { useState } from "react";
export default function AddToCardButton({ product, size, color }) {
  const [buttonText, setButtonText] = useState("Add to cart");

  function handleClick() {
    setButtonText("Added");
  }

  const dispatch = useDispatch();

  return (
    <>
      <button
        //   multiple functions on click
        onClick={() => {
          dispatch(
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              category: product.category,
              size: size,
              color: color,
            })
          );
          handleClick(product.id);
        }}
        className="flex ml-auto text-white  bg-custom1 dark:bg-inherit border-0 dark:border py-2 px-4 focus:outline-none hover:bg-custom1 rounded"
      >
        {buttonText} <ShoppingCartOutlinedIcon className="ml-2" />
      </button>
    </>
  );
}
