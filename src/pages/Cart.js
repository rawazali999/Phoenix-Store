import React from "react";
import Layout from "../Layouts/MainLayout";
import CartItem from "../components/Cart/CartItem";
import { useSelector } from "react-redux";
import Summary from "../components/Cart/Summary";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Layout>
      <div className="flex md:flex-row flex-col justify-end">
        <div className=" w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white dark:bg-inherit  overflow-y-auto overflow-x-hidden h-screen">
          <p className="text-3xl sm:text-4xl font-black leading-10 text-gray-800 dark:text-gray-100 pt-3">
            Shopping Cart
          </p>

          {cart.length > 0 ? (
            cart?.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                category={item.category}
              />
            ))
          ) : (
            <img
              className="object-contain my-8 mx-auto"
              src={require("../images/emptycart.png")}
              alt="empty cart"
            />
          )}
        </div>

        <Summary />
      </div>
    </Layout>
  );
}
