import { React, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, Tooltip } from "@mui/material";

export default function AddToFav() {
  const [buttonColor, setButtonColor] = useState("white");
  function changeColor(e) {
    if (buttonColor === "white") {
      setButtonColor("red");
    } else setButtonColor("white");
  }
  return (
    <>
      <Tooltip title="add to favorites">
        <IconButton>
          <FavoriteIcon style={{ fill: buttonColor }} onClick={changeColor} />
        </IconButton>
      </Tooltip>
    </>
  );
}
