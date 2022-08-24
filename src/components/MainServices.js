import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
export default function MainServices() {
  return (
    <div className="w-11/12 mx-auto  my-24 ">
      <div className="flex items-center justify-center text-3xl font-bold py-4 text-custom1">
      Why Shop With Us

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  m-auto p-6">
        <div className="flex  flex-col justify-center items-center border-r my-2 py-4 ">
          <LocalShippingOutlinedIcon   sx={{ color: "darkcyan",fontSize: "50px"}}  />
          <p className="text-lg">Free Delivery</p>
          <p className="text-sm text-gray-500">Free Shipping on all order</p>
        </div>
        <div className="flex flex-col justify-center  items-center border-r my-2 py-4 ">
          <CachedOutlinedIcon  sx={{ color: "darkcyan",fontSize: "50px" }} />
          <p className="text-lg">Return Policy</p>
          <p className="text-sm text-gray-500">Return the Order</p>
        </div>
        <div className="flex  flex-col justify-center items-center border-r my-2 py-4 ">
          <SupportAgentOutlinedIcon  sx={{ color: "darkcyan",fontSize: "50px" }} />
          <p className="text-lg">24/7 Support</p>
          <p className="text-sm text-gray-500">We all time here for you</p>
        </div>
        <div className="flex flex-col justify-center  items-center py-4  ">
          <DoneOutlinedIcon  sx={{ color: "darkcyan",fontSize: "50px" }} />
          <p className="text-lg">Product Quality</p>
          <p className="text-sm text-gray-500">we guarantee our quality</p>
        </div>
      </div>
    </div>
  );
}
