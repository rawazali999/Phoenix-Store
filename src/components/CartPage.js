import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <>
      <div className="flex md:flex-row flex-col justify-end">
        <div className=" w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white dark:bg-inherit  overflow-y-auto overflow-x-hidden h-screen">
          <p className="text-5xl font-black leading-10 text-gray-800 dark:text-gray-100 pt-3">
            Shopping Cart
          </p>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 dark:bg-inherit dark:border-2  h-full">
          <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
            <div className="text-gray-800 dark:text-gray-100">
              <p className="text-4xl font-black leading-9 ">Summary</p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none ">Subtotal</p>
                <p className="text-base leading-none ">$9,000</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none ">Shipping</p>
                <p className="text-base leading-none ">$30</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none ">Tax</p>
                <p className="text-base leading-none ">$35</p>
              </div>
            </div>
            <div className="text-gray-800 dark:text-gray-100">
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal ">Total</p>
                <p className="text-2xl font-bold leading-normal text-right ">
                  $10,240
                </p>
              </div>
              <button className="text-xl rounded-md leading-none w-full py-5 bg-gray-800 dark:bg-gray-100 border-gray-800 border focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gray-800  text-white dark:text-gray-800">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
