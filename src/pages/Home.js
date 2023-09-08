import React from "react";
import HeroSection from "../components/Home/HeroSection";
import MainServices from "../components/Home/MainServices";
import Carousel from "../components/Home/Carousel";
import Layout from "../Layouts/MainLayout";
import Featured from "../components/Home/Featured";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Other/Spinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-custom4  dark:bg-dark1">
      <Layout>
        <div className="flex  justify-center bg-inherit uppercase px-4 pt-10 text-xl sm:text-3xl font-semibold tracking-widest  text-custom3 dark:text-gray-100">
          welcome to online store
        </div>
        <HeroSection />
        <MainServices />
        <Carousel />

        <div className="flex items-center justify-center text-xl sm:text-3xl font-semibold tracking-wider mt-10 text-custom1 dark:text-gray-100">
          <div className="bg-inherit dark:bg-dark1 uppercase  px-4 ">
            featured products
          </div>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="container my-20 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-6 object-fill">
            {products.slice(0, 8).map((product) => {
              return <Featured product={product} key={product.id} />;
            })}
          </div>
        )}
      </Layout>
    </div>
  );
}
