import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/Product/ProductCard";
import Layout from "../Layouts/MainLayout";
import Spinner from "../components/Spinner";

export default function Electronics() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        console.log("list of products:", response.data);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout>
      <h1 className="text-md sm:text-3xl  mx-10 my-8 text-center text-custom1 dark:text-gray-100 font-semibold  ">
        Explore our Electronic products
      </h1>
      <div className="container  mx-auto px-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-10 object-fill">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </Layout>
  );
}
