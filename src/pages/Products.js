import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Layout from "../Layouts/MainLayout";
import Spinner from "../components/Spinner";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
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
      <h1 className="text-md sm:text-3xl pt-4 mx-10 text-center text-custom1 dark:text-gray-100 font-semibold mb-4 ">
        Explore best Products...
      </h1>
      <div className="container  mx-auto p-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10 object-fill">
        {products.map((product, index) => {
          //  key is used to solve each product must have key console error
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </Layout>
  );
}
