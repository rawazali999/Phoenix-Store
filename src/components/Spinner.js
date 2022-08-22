import React from "react";
import { FadeLoader } from "react-spinners";


export default function Spinner() {
  return (
    <div className="sweet-loading container flex flex-col justify-center items-center py-32">
      <FadeLoader color="#ddCD38" loading={true} size={100} />
      <p>loading...</p>
    </div>
  );
}
