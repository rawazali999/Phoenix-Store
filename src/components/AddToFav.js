import { React, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, Tooltip } from "@mui/material";

export default function AddToFav() {
  const [buttonColor, setButtonColor] = useState("white");
  const [title, setTitle] = useState("add to favorites");
  function changeColor(e) {
    if (buttonColor === "white") {
      setButtonColor("red");
      setTitle("remove from favorites");
    } else {
      setButtonColor("white");
      setTitle("add to favorites");
    }
  }
  return (
    <>
      <Tooltip title={title}>
        <IconButton>
          <FavoriteIcon style={{ fill: buttonColor }} onClick={changeColor} />
        </IconButton>
      </Tooltip>
    </>
  );
}
