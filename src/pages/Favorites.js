import React from "react";
import FavoriteCard from "../components/Product/FavoriteCard";
import Layout from "../Layouts/MainLayout";
import { useSelector } from "react-redux";
export default function Favorites() {
  const fav = useSelector((state) => state.fav.favorite);

  return (
    <Layout>
      <div className="flex  flex-col">
        <div className=" w-full  dark:bg-inherit ">
          <p className="text-3xl sm:text-4xl text-center my-4 leading-10 text-custom1 dark:text-gray-100 pt-3">
            Favorite Products
          </p>

          {fav.length > 0 ? (
            <div className="container mx-auto px-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10 object-fill">
              {fav?.map((item) => (
                <FavoriteCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                />
              ))}
            </div>
          ) : (
            <img
              className="object-contain my-8 mx-auto"
              src={require("../images/empty_wishlist.png")}
              alt="empty wishlist"
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
