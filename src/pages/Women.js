import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/Product/ProductCard";
import Layout from "../Layouts/MainLayout";
import Spinner from "../components/Other/Spinner";

export default function Women() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-md sm:text-3xl my-8 mx-10 text-center text-custom1 dark:text-gray-100 font-semibold  ">
            Explore our Women's clothing
          </h1>
          <div className="container  mx-auto px-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10 object-fill">
            {products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </>
      )}
    </Layout>
  );
}
