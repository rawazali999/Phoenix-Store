import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
export default function MainServices() {
  return (
    <div className="w-11/12 mx-auto  my-24 ">
      <div className="flex items-center justify-center text-3xl py-4 text-custom1">
        Our Main Services
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  m-auto p-6">
        <div className="flex flex-col justify-center items-center border-r my-2">
          <LocalShippingOutlinedIcon fontSize="large" sx={{ color: "navy" }} />
          <p className="text-lg">Free Delivery</p>
          <p className="text-sm text-gray-400">Free Shipping on all order</p>
        </div>
        <div className="flex flex-col justify-center  items-center border-r my-2">
          <CachedOutlinedIcon fontSize="large" sx={{ color: "navy" }} />
          <p className="text-lg">Return Policy</p>
          <p className="text-sm text-gray-400">Return the Order</p>
        </div>
        <div className="flex  flex-col justify-center items-center border-r my-2">
          <SupportAgentOutlinedIcon fontSize="large" sx={{ color: "navy" }} />
          <p className="text-lg">24/7 Support</p>
          <p className="text-sm text-gray-400">We all time here for you</p>
        </div>
        <div className="flex flex-col justify-center  items-center ">
          <DoneOutlinedIcon fontSize="large" sx={{ color: "navy" }} />
          <p className="text-lg">Product Quality</p>
          <p className="text-sm text-gray-400">we guarantee our quality</p>
        </div>
      </div>
    </div>
  );
}
