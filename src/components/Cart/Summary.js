import React from "react";
import { useSelector } from "react-redux";

export default function Summary() {
  const cart = useSelector((state) => state.cart.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    let totalPriceWithTax = 0;
    let Tax = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
      totalPriceWithTax += item.price * item.quantity * 1.05;
      Tax += item.price * item.quantity * 0.05;
    });
    return { totalPrice, totalQuantity, totalPriceWithTax, Tax };
  };
  return (
    <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 dark:bg-inherit   h-full">
      <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
        <div className="text-gray-800 dark:text-gray-100">
          <p className="text-4xl font-black leading-9 ">Summary</p>
          <div className="flex items-center justify-between pt-16">
            <p className="text-base leading-none ">Subtotal</p>
            <p className="text-base leading-none ">
              $ {getTotal().totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between pt-5">
            <p className="text-base leading-none ">Total</p>
            <p className="text-base leading-none ">
              ({getTotal().totalQuantity} items)
            </p>
          </div>
          <div className="flex items-center justify-between pt-5">
            <p className="text-base leading-none ">Tax</p>
            <p className="text-base leading-none ">
              %5 ({getTotal().Tax.toFixed(2)})
            </p>
          </div>
        </div>
        <div className="text-gray-800 dark:text-gray-100">
          <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
            <p className="text-2xl leading-normal ">Total</p>
            <p className="text-2xl font-bold leading-normal text-right ">
              {getTotal().totalPrice === 0
                ? "$ 0.00"
                : "$" + getTotal().totalPriceWithTax.toFixed(2)}
            </p>
          </div>
          <button className="text-xl rounded-md leading-none w-full py-5 bg-gray-800 dark:bg-gray-100 border-gray-800 border focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gray-800  text-white dark:text-gray-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
