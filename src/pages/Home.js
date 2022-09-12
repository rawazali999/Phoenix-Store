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
    <div className="bg-white dark:bg-gradient-to-r dark:from-darkFrom dark:bg-darkTo">
      <Layout>
        <div className="flex capitalize  items-center justify-center text-xl sm:text-3xl font-semibold tracking-wider mt-10 text-custom1 dark:text-gray-100">
          <div className="bg-white dark:bg-gradient-to-r dark:from-darkFrom dark:bg-darkTo  px-4">
            welcome to phoenix store
          </div>
        </div>
        <hr className="border-2 rounded-full w-4/5 md:w-2/5  mx-auto  border-cyan-500 -mt-5 " />
        <HeroSection />
        <MainServices />
        <Carousel />
        <div className="flex capitalize  items-center justify-center text-xl sm:text-3xl font-semibold tracking-wider mt-10 text-custom1 dark:text-gray-100">
          <div className="bg-white dark:bg-gradient-to-r dark:from-darkFrom dark:bg-darkTo  px-4">
            featured products
          </div>
        </div>
        <hr className="border-2 rounded-full w-4/5 md:w-2/5  mx-auto  border-cyan-500 -mt-5 " />
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="container my-20 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-6 object-fill">
            {products.slice(0, 8).map((product) => {
              return <Featured product={product} />;
            })}
          </div>
        )}
      </Layout>
    </div>
  );
}
