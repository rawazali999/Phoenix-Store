import { React, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToFav } from "../../app/slices/favoriteSlice";
import { removeFav } from "../../app/slices/favoriteSlice";

export default function AddToFav({ product }) {
  const dispatch = useDispatch();

  const [buttonColor, setButtonColor] = useState("white");
  const [title, setTitle] = useState("Add to wishlist");

  function handleClick() {
    if (buttonColor === "white") {
      setButtonColor("#FF1A1A");
      setTitle("Remove from wishlist");
      dispatch(
        addToFav({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          category: product.category,
        })
      );
    } else {
      setButtonColor("white");
      setTitle("Add to wishlist");
      dispatch(removeFav(product.id));
    }
  }
  return (
    <>
      <Tooltip title={title}>
        <FavoriteIcon
          style={{
            fill: buttonColor,
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
      </Tooltip>
    </>
  );
}
