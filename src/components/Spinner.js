import { React, useContext } from "react";
import { FadeLoader } from "react-spinners";
import { ThemeContext } from "./Theme/themeContext";

export default function Spinner() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="sweet-loading container flex flex-col justify-center items-center py-32">
      {theme === "dark" ? (
        <FadeLoader color="#fff" loading={true} size={100} />
      ) : (
        <FadeLoader color="#004e92" loading={true} size={100} />
      )}
      <p className="text-darkTo dark:text-gray-100">loading...</p>
    </div>
  );
}
