import { React, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";

export default function AddToFav() {
  const [buttonColor, setButtonColor] = useState("white");
  const [title, setTitle] = useState("add to favorites");
  function changeColor() {
    if (buttonColor === "white") {
      setButtonColor("#FF1A1A");
      setTitle("remove from favorites");
    } else {
      setButtonColor("white");
      setTitle("add to favorites");
    }
  }
  return (
    <>
      <Tooltip title={title}>
        <FavoriteIcon
          style={{ fill: buttonColor, cursor: "pointer", }}
          onClick={changeColor}
        />
      </Tooltip>
    </>
  );
}
